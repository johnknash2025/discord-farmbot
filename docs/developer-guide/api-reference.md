# API リファレンス

Discord Farmbotの内部API仕様とCloudflare Workers実装の詳細説明です。

## 🌐 エンドポイント一覧

### ベースURL
```
https://discord-farmbot.your-domain.workers.dev
```

### 利用可能なエンドポイント

| エンドポイント | メソッド | 説明 |
|---------------|---------|------|
| `/` | POST | Discord Interaction Webhook |
| `/health` | GET | ヘルスチェック |

## 📡 Discord Interaction API

### POST `/`

Discord からの Interaction を処理するメインエンドポイントです。

#### リクエストヘッダー

```http
Content-Type: application/json
X-Signature-Ed25519: {signature}
X-Signature-Timestamp: {timestamp}
User-Agent: Discord-Interactions/1.0
```

#### 署名検証

```javascript
import * as nacl from 'tweetnacl';

function verifySignature(request, body, publicKey) {
  const signature = request.headers.get('X-Signature-Ed25519');
  const timestamp = request.headers.get('X-Signature-Timestamp');
  
  if (!signature || !timestamp) {
    return false;
  }
  
  const message = timestamp + body;
  const signatureBytes = hexToBytes(signature);
  const messageBytes = new TextEncoder().encode(message);
  const publicKeyBytes = hexToBytes(publicKey);
  
  return nacl.sign.detached.verify(
    messageBytes,
    signatureBytes,
    publicKeyBytes
  );
}
```

#### リクエストボディ（Ping）

```json
{
  "type": 1,
  "id": "interaction_id",
  "application_id": "app_id",
  "token": "interaction_token",
  "version": 1
}
```

#### レスポンス（Pong）

```json
{
  "type": 1
}
```

#### リクエストボディ（Application Command）

```json
{
  "type": 2,
  "id": "interaction_id",
  "application_id": "app_id",
  "token": "interaction_token",
  "channel_id": "channel_id",
  "guild_id": "guild_id",
  "member": {
    "user": {
      "id": "user_id",
      "username": "username",
      "discriminator": "0001"
    }
  },
  "data": {
    "id": "command_id",
    "name": "analyze",
    "type": 1,
    "options": [
      {
        "name": "image",
        "type": 11,
        "value": "attachment_id"
      }
    ],
    "resolved": {
      "attachments": {
        "attachment_id": {
          "id": "attachment_id",
          "filename": "image.jpg",
          "size": 123456,
          "url": "https://cdn.discordapp.com/attachments/...",
          "proxy_url": "https://media.discordapp.net/attachments/...",
          "content_type": "image/jpeg",
          "width": 1920,
          "height": 1080
        }
      }
    }
  }
}
```

#### レスポンス（Initial Response）

```json
{
  "type": 4,
  "data": {
    "content": "🔍 画像を解析中です...",
    "flags": 0
  }
}
```

## 🤖 Gemini Vision API 統合

### 画像解析フロー

```javascript
async function analyzeImage(imageUrl, apiKey) {
  // 1. 画像をダウンロード
  const imageResponse = await fetch(imageUrl);
  const imageBuffer = await imageResponse.arrayBuffer();
  const base64Image = arrayBufferToBase64(imageBuffer);
  
  // 2. Gemini API リクエスト
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-pro-vision:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            {
              text: ANALYSIS_PROMPT
            },
            {
              inline_data: {
                mime_type: imageResponse.headers.get('content-type'),
                data: base64Image
              }
            }
          ]
        }],
        generationConfig: {
          temperature: 0.1,
          topK: 32,
          topP: 1,
          maxOutputTokens: 2048,
        }
      })
    }
  );
  
  return await response.json();
}
```

### 解析プロンプト

```javascript
const ANALYSIS_PROMPT = `
あなたは農業の専門家です。提供された農作物の画像を詳細に分析し、以下の形式で日本語で回答してください：

🌱 **作物解析結果**

**基本情報**
• 作物: [作物名] ([学名])
• 品種: [品種名（分かる場合）]
• 成長段階: [発芽期/幼苗期/成長期/開花期/結実期/成熟期]

**健康状態評価**
• 総合評価: [⭐1-5個で評価]
• 葉の状態: [詳細な観察結果]
• 茎の状態: [詳細な観察結果]
• 根の状態: [見える場合のみ]
• 花・果実の状態: [該当する場合のみ]

**病害虫診断**
• 病気の兆候: [具体的な病名と症状]
• 害虫の被害: [虫害の種類と程度]
• 栄養障害: [欠乏症状の有無]

**栽培環境評価**
• 土壌状態: [水分、栄養、pH等の推定]
• 日照条件: [光量と質の評価]
• 栽培管理: [支柱、剪定等の状況]

**推奨アクション**
• 🚰 水やり: [頻度と量の推奨]
• 🌿 剪定: [必要な剪定作業]
• 🏗️ 支柱: [支柱設置の必要性]
• 🍯 追肥: [肥料の種類とタイミング]
• 🛡️ 病害虫対策: [具体的な対策方法]

**注意事項**
• [重要な注意点や警告]
• [専門家への相談が必要な場合]

画像から読み取れない情報については「画像からは判断できません」と記載してください。
`;
```

## 🔄 Discord Follow-up API

### スレッド作成とメッセージ送信

```javascript
async function sendFollowupMessage(interactionToken, content) {
  const webhookUrl = `https://discord.com/api/v10/webhooks/${APPLICATION_ID}/${interactionToken}`;
  
  // 元のメッセージを更新
  await fetch(`${webhookUrl}/messages/@original`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: '✅ 解析完了！詳細はスレッドをご確認ください。',
    })
  });
  
  // スレッドを作成
  const threadResponse = await fetch(
    `https://discord.com/api/v10/channels/${channelId}/threads`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bot ${BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: '🌱 解析結果',
        type: 11, // PUBLIC_THREAD
        auto_archive_duration: 1440 // 24時間
      })
    }
  );
  
  const thread = await threadResponse.json();
  
  // スレッドにメッセージを送信
  await fetch(`${webhookUrl}?thread_id=${thread.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: content
    })
  });
}
```

## 🔍 ヘルスチェック API

### GET `/health`

サービスの稼働状況を確認するエンドポイントです。

#### レスポンス

```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "version": "1.0.0",
  "endpoints": {
    "health": "/health",
    "discord": "/ (POST only)"
  },
  "dependencies": {
    "gemini_api": "available",
    "discord_api": "available"
  }
}
```

#### ステータスコード

| コード | 説明 |
|--------|------|
| 200 | 正常稼働 |
| 503 | サービス利用不可 |

## 🛡️ エラーハンドリング

### エラーレスポンス形式

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {
      "field": "Additional error details"
    }
  },
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### エラーコード一覧

| コード | 説明 | HTTPステータス |
|--------|------|----------------|
| `INVALID_SIGNATURE` | Discord署名検証失敗 | 401 |
| `MISSING_IMAGE` | 画像が添付されていない | 400 |
| `IMAGE_TOO_LARGE` | 画像サイズが制限を超過 | 400 |
| `UNSUPPORTED_FORMAT` | 対応していない画像形式 | 400 |
| `GEMINI_API_ERROR` | Gemini API呼び出しエラー | 502 |
| `DISCORD_API_ERROR` | Discord API呼び出しエラー | 502 |
| `INTERNAL_ERROR` | 内部サーバーエラー | 500 |

### エラーハンドリング実装例

```javascript
class FarmbotError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.code = code;
    this.details = details;
  }
}

function handleError(error, request) {
  console.error('Error occurred:', {
    code: error.code,
    message: error.message,
    details: error.details,
    url: request.url,
    timestamp: new Date().toISOString()
  });
  
  const statusMap = {
    'INVALID_SIGNATURE': 401,
    'MISSING_IMAGE': 400,
    'IMAGE_TOO_LARGE': 400,
    'UNSUPPORTED_FORMAT': 400,
    'GEMINI_API_ERROR': 502,
    'DISCORD_API_ERROR': 502,
    'INTERNAL_ERROR': 500
  };
  
  const status = statusMap[error.code] || 500;
  
  return new Response(JSON.stringify({
    error: {
      code: error.code,
      message: error.message,
      details: error.details
    },
    timestamp: new Date().toISOString()
  }), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
```

## 📊 レート制限

### Discord API制限

- **グローバル**: 50リクエスト/秒
- **Webhook**: 5リクエスト/秒
- **スレッド作成**: 10リクエスト/10分

### Gemini API制限

- **無料枠**: 60リクエスト/分
- **画像サイズ**: 20MB以下
- **レスポンス**: 30秒タイムアウト

### 実装での制限対応

```javascript
class RateLimiter {
  constructor(maxRequests, windowMs) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map();
  }
  
  isAllowed(key) {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    if (!this.requests.has(key)) {
      this.requests.set(key, []);
    }
    
    const userRequests = this.requests.get(key);
    
    // 古いリクエストを削除
    while (userRequests.length > 0 && userRequests[0] < windowStart) {
      userRequests.shift();
    }
    
    if (userRequests.length >= this.maxRequests) {
      return false;
    }
    
    userRequests.push(now);
    return true;
  }
}

const geminiLimiter = new RateLimiter(60, 60000); // 60req/min
```

## 🔐 セキュリティ

### 環境変数の管理

```bash
# 本番環境での設定
wrangler secret put DISCORD_PUBLIC_KEY
wrangler secret put DISCORD_BOT_TOKEN
wrangler secret put GEMINI_API_KEY

# 設定確認
wrangler secret list
```

### CORS設定

```javascript
function setCORSHeaders(response) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}
```

---

::: tip 💡 開発のヒント
API開発時は、Postmanやcurlを使用してエンドポイントをテストすることをお勧めします。特に署名検証のテストには注意が必要です。
:::

::: warning ⚠️ セキュリティ注意
本番環境では必ずHTTPSを使用し、環境変数は適切に保護してください。Discord署名検証は必須です。
:::