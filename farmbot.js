/*
Discord 側の設定手順:

1. Discord Developer Portal (https://discord.com/developers/applications) にアクセス
2. "New Application" をクリックしてアプリを作成
3. 左メニューの "Bot" を開き "Add Bot" して Bot を作成
   - Bot Token をコピーして保存（後で使用）
4. 左メニューの "OAuth2 > URL Generator" で以下を選択して招待用URLを生成
   - Scopes: applications.commands, bot
   - Bot Permissions: Send Messages, Use Slash Commands, Read Message History
   - 生成されたURLで Bot をサーバーにインストール
5. 左メニューの "Interactions & Slash Commands" で新規コマンド "analyze" を作成
   - Name: analyze
   - Description: 農作物画像を解析してスレッドに結果を投稿します
   - Option を追加
     • Name: image
     • Type: ATTACHMENT
     • Required: true
     • Description: 解析したい農作物の画像
6. 左メニューの "General Information" で "Public Key" をコピー
7. Cloudflare Workers の設定画面で Environment Variables を設定
   - DISCORD_PUBLIC_KEY = 上記でコピーした Public Key
   - DISCORD_BOT_TOKEN = 上記でコピーした Bot Token
   - GEMINI_API_KEY = Google AI Studio で取得したAPI Key
8. Workers のエンドポイント URL を Discord アプリの "Interactions & Slash Commands > Endpoint URL" に登録
   （例: https://your-worker.example.com/discord-interactions）

Gemini API Key の取得方法:
1. Google AI Studio (https://makersuite.google.com/app/apikey) にアクセス
2. "Create API Key" をクリック
3. 生成されたAPI Keyをコピー
*/

import * as nacl from 'tweetnacl';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // ヘルスチェックエンドポイント
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({
        status: 'ok',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        endpoints: {
          health: '/health',
          discord: '/ (POST only)'
        }
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const signature = request.headers.get('x-signature-ed25519');
    const timestamp = request.headers.get('x-signature-timestamp');
    const body = await request.text();

    // Discord以外からのリクエスト（ブラウザアクセスなど）の場合
    if (!signature || !timestamp) {
      if (request.method === 'GET') {
        return new Response(JSON.stringify({
          status: 'Discord Farmbot is running',
          timestamp: new Date().toISOString(),
          endpoints: {
            health: '/health (GET)',
            discord: '/ (POST with Discord signature)'
          }
        }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }
      return new Response('This endpoint requires Discord signature headers', { status: 400 });
    }

    // リクエスト検証
    let isValid = false;
    try {
      isValid = nacl.sign.detached.verify(
        new TextEncoder().encode(timestamp + body),
        hexToUint8Array(signature),
        hexToUint8Array(env.DISCORD_PUBLIC_KEY)
      );
    } catch (error) {
      console.error('Signature verification error:', error);
      return new Response('Invalid signature format', { status: 401 });
    }
    
    if (!isValid) {
      return new Response('Invalid request signature', { status: 401 });
    }

    const payload = JSON.parse(body);

    // Discord の Ping に応答
    if (payload.type === 1) {
      return new Response(JSON.stringify({ type: 1 }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Slash Command 受信
    if (payload.type === 2) {
      try {
        // 画像添付ファイルを取得
        const imageOption = payload.data.options?.find(opt => opt.name === 'image');
        if (!imageOption) {
          return createErrorResponse('画像が添付されていません。');
        }

        const attachment = payload.data.resolved?.attachments?.[imageOption.value];
        if (!attachment) {
          return createErrorResponse('添付ファイルが見つかりません。');
        }

        // 画像ファイルかチェック
        if (!attachment.content_type?.startsWith('image/')) {
          return createErrorResponse('画像ファイルを添付してください。');
        }

        // 即座に「解析中...」で応答
        const deferredResponse = new Response(
          JSON.stringify({
            type: 5, // DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE
          }),
          { headers: { 'Content-Type': 'application/json' } }
        );

        // 非同期で画像解析とスレッド投稿を実行
        ctx.waitUntil(processImageAnalysis(payload, attachment, env));

        return deferredResponse;

      } catch (error) {
        console.error('Error processing command:', error);
        return createErrorResponse('処理中にエラーが発生しました。');
      }
    }

    return new Response('ok');
  },
};

// ユーティリティ関数
function hexToUint8Array(hex) {
  if (!hex || typeof hex !== 'string') {
    throw new Error('Invalid hex string');
  }
  const matches = hex.match(/.{1,2}/g);
  if (!matches) {
    throw new Error('Invalid hex format');
  }
  return new Uint8Array(matches.map(byte => parseInt(byte, 16)));
}

// 安全なBase64変換関数（スタックオーバーフロー対策）
function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  
  // より小さなチャンクサイズでスタックオーバーフローを防ぐ
  const chunkSize = 8192; // 8KB chunks
  
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    // apply の引数制限を避けるため、さらに小さく分割
    let chunkBinary = '';
    for (let j = 0; j < chunk.length; j++) {
      chunkBinary += String.fromCharCode(chunk[j]);
    }
    binary += chunkBinary;
  }
  
  return btoa(binary);
}

function createErrorResponse(message) {
  return new Response(
    JSON.stringify({
      type: 4,
      data: { content: `❌ ${message}`, flags: 64 }, // EPHEMERAL flag
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}

// 非同期で画像解析とスレッド投稿を処理
async function processImageAnalysis(payload, attachment, env) {
  try {
    // 画像解析を実行
    const analysis = await analyzeImageWithGemini(attachment.url, env);
    
    // スレッドに結果を投稿
    await postToThread(payload, analysis, env);
    
    // 元のコマンドに成功メッセージで応答
    await editOriginalResponse(payload, '✅ 解析完了！結果をスレッドに投稿しました。', env);
    
  } catch (error) {
    console.error('Error in processImageAnalysis:', error);
    await editOriginalResponse(payload, '❌ 解析中にエラーが発生しました。', env);
  }
}

// Gemini Vision APIで画像解析
async function analyzeImageWithGemini(imageUrl, env) {
  try {
    console.log('Fetching image from:', imageUrl);
    
    // 画像をBase64に変換
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.status}`);
    }
    
    // 画像サイズをチェック (実際のバイト数で確認)
    const imageBuffer = await imageResponse.arrayBuffer();
    console.log(`Image buffer size: ${imageBuffer.byteLength} bytes`);
    
    // 実用的な制限: 500KB
    if (imageBuffer.byteLength > 500 * 1024) {
      throw new Error(`Image too large: ${Math.round(imageBuffer.byteLength / 1024)}KB (max 500KB)`);
    }
    
    console.log('Converting image to base64...');
    
    // 安全なチャンク処理Base64変換
    const base64Image = arrayBufferToBase64(imageBuffer);
    
    console.log(`Base64 conversion completed, length: ${base64Image.length}`);
    
    // Content-Typeから適切なMIMEタイプを取得
    const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';
    console.log(`Content type: ${contentType}`);
    
    // 最小限のリクエスト構造
    const requestBody = {
      contents: [{
        parts: [
          {
            text: "この農作物の画像を詳しく解析してください。以下の観点から評価をお願いします：\n\n1. **作物の種類**: 何の植物か特定してください\n2. **成長段階**: 発芽期、成長期、開花期、収穫期のどの段階か\n3. **健康状態**: 葉の色、形、病気や害虫の兆候はないか\n4. **栽培環境**: 土壌の状態、水分状態、日照条件など観察できること\n5. **品質評価**: 全体的な品質と収穫時期の予測\n6. **改善提案**: 栽培管理で改善できる点があれば\n\n日本語で詳しく回答してください。"
          },
          {
            inline_data: {
              mime_type: contentType,
              data: base64Image
            }
          }
        ]
      }]
    };
    
    console.log(`Request body size: ${JSON.stringify(requestBody).length} characters`);

    console.log('Sending request to Gemini API...');
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      }
    );
    
    console.log(`Gemini API response status: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Gemini API error details:`, errorText);
      console.error(`Request URL:`, `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent`);
      console.error(`Request body size:`, JSON.stringify(requestBody).length);
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Gemini API response received successfully');
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '解析結果を取得できませんでした。';
    
  } catch (error) {
    console.error('Gemini API error:', error);
    return '画像解析中にエラーが発生しました。';
  }
}

// スレッドに結果を投稿（画像付き）
async function postToThread(payload, analysis, env) {
  const channelId = payload.channel_id;
  
  // 元の画像情報を取得
  const imageOption = payload.data.options?.find(opt => opt.name === 'image');
  const attachment = payload.data.resolved?.attachments?.[imageOption.value];
  
  // 解析結果が長い場合は分割
  const maxDescriptionLength = 4096; // Discord Embed description limit
  let description = analysis;
  
  if (description.length > maxDescriptionLength) {
    description = description.substring(0, maxDescriptionLength - 3) + "...";
  }
  
  const messageData = {
    content: `🌱 **農作物画像解析結果**`,
    embeds: [
      {
        title: "📊 AI画像解析レポート",
        description: description,
        color: 0x4CAF50, // Material Design Green
        image: {
          url: attachment.url
        },
        fields: [
          {
            name: "📁 ファイル情報",
            value: `**ファイル名**: ${attachment.filename}\n**サイズ**: ${Math.round(attachment.size / 1024)}KB\n**形式**: ${attachment.content_type}`,
            inline: true
          },
          {
            name: "🤖 解析エンジン",
            value: "Google Gemini Vision API\n(gemini-1.5-pro)",
            inline: true
          }
        ],
        footer: {
          text: "Discord Farmbot • 農作物画像解析システム",
          icon_url: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f331.png"
        },
        timestamp: new Date().toISOString()
      }
    ],
    message_reference: {
      message_id: payload.id,
      channel_id: channelId,
      fail_if_not_exists: false
    }
  };

  // 解析結果が非常に長い場合は、追加メッセージで残りを送信
  const remainingText = analysis.substring(maxDescriptionLength - 3);
  
  const response = await fetch(
    `https://discord.com/api/v10/channels/${channelId}/messages`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bot ${env.DISCORD_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData)
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Discord API error:', response.status, errorText);
    throw new Error(`Discord API error: ${response.status}`);
  }

  // 残りのテキストがある場合は追加メッセージを送信
  if (remainingText && remainingText.length > 0) {
    const additionalMessageData = {
      content: `📄 **解析結果の続き**\n\`\`\`\n${remainingText}\n\`\`\``,
      message_reference: {
        message_id: payload.id,
        channel_id: channelId,
        fail_if_not_exists: false
      }
    };

    await fetch(
      `https://discord.com/api/v10/channels/${channelId}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bot ${env.DISCORD_BOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(additionalMessageData)
      }
    );
  }
}

// 元のコマンド応答を編集
async function editOriginalResponse(payload, content, env) {
  const applicationId = payload.application_id;
  const interactionToken = payload.token;

  const response = await fetch(
    `https://discord.com/api/v10/webhooks/${applicationId}/${interactionToken}/messages/@original`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: content,
        flags: 64 // EPHEMERAL
      })
    }
  );

  if (!response.ok) {
    console.error(`Failed to edit original response: ${response.status}`);
  }
}