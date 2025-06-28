/*
Discord 側の設定手順:

1. Discord Developer Portal (https://discord.com/developers/applications) にアクセス
2. "New Application" をクリックしてアプリを作成
3. 左メニューの "Bot" を開き "Add Bot" して Bot を作成
   - "Privileged Gateway Intents" は不要（Gateway ではなく Slash Command を使用）
4. 左メニューの "OAuth2 > URL Generator" で以下を選択して招待用URLを生成
   - Scopes: applications.commands
   - Bot Permissions: なし（エンドユーザーがコマンド実行するため）
   - 生成されたURLで Bot をサーバーにインストール
5. 左メニューの "Interactions & Slash Commands" で新規コマンド "Evaluate" を作成
   - Name: evaluate
   - Description: 農作物画像を評価します
   - Option を追加
     • Name: image_url
     • Type: STRING
     • Required: true
6. 左メニューの "General Information" で "Public Key" をコピー
7. Cloudflare Workers の設定画面で Environment Variable
   - DISCORD_PUBLIC_KEY = 上記でコピーした Public Key
   - （画像解析に外部APIを呼ぶ場合は API_KEY 等も設定）
8. Workers のエンドポイント URL を Discord アプリの "Interactions & Slash Commands > Endpoint URL" に登録
   （例: https://your-worker.example.com/discord-interactions）
*/

import * as nacl from 'tweetnacl';

export default {
  async fetch(request, env) {
    const signature = request.headers.get('x-signature-ed25519');
    const timestamp = request.headers.get('x-signature-timestamp');
    const body = await request.text();

    // リクエスト検証
    const isValid = nacl.sign.detached.verify(
      new TextEncoder().encode(timestamp + body),
      hexToUint8Array(signature),
      hexToUint8Array(env.DISCORD_PUBLIC_KEY)
    );
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
      const imageUrl = payload.data.options.find(opt => opt.name === 'image_url').value;

      // ここで画像解析ロジックを呼び出し（例: AI API）
      const analysis = await analyzeImage(imageUrl, env);
      const result = `画像を評価しました: ${analysis}`;

      return new Response(
        JSON.stringify({
          type: 4,
          data: { content: result },
        }),
        { headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response('ok');
  },
};

// ユーティリティ関数
function hexToUint8Array(hex) {
  return new Uint8Array(hex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}

// 画像解析のサンプル関数
async function analyzeImage(url, env) {
  // 例: 外部AIサービスに fetch
  // const resp = await fetch(env.AI_API_URL, { ... });
  // return await resp.json();
  return '品質良好';
}