# 本番環境デプロイ

Discord Farmbotを本番環境にデプロイするための完全ガイドです。

## 🎯 デプロイ前の準備

### 必要なアカウント

1. **Cloudflare アカウント** - Workers デプロイ用
2. **Discord Developer アカウント** - Bot 運用用
3. **Google Cloud アカウント** - Gemini API 利用
4. **GitHub アカウント** - ソースコード管理

### 環境確認チェックリスト

- [ ] ローカル開発環境で正常動作確認済み
- [ ] 全テストがパス
- [ ] 環境変数が正しく設定されている
- [ ] Discord Bot の権限設定完了
- [ ] Gemini API キーが有効

## 🚀 Cloudflare Workers デプロイ

### 1. Wrangler CLI のセットアップ

```bash
# Wrangler のインストール（グローバル）
npm install -g wrangler

# Cloudflare アカウントにログイン
wrangler login

# アカウント情報の確認
wrangler whoami
```

### 2. プロジェクト設定の確認

`wrangler.toml` の設定を確認：

```toml
name = "discord-farmbot"
main = "farmbot.js"
compatibility_date = "2023-10-30"

[vars]
# 公開可能な設定値のみここに記載
# シークレットは wrangler secret で設定

# 例：デバッグモード（本番では false）
DEBUG_MODE = false
LOG_LEVEL = "info"
```

### 3. 環境変数（シークレット）の設定

```bash
# Discord 設定
wrangler secret put DISCORD_PUBLIC_KEY
# プロンプト: Discord Developer Portal の Public Key を入力

wrangler secret put DISCORD_BOT_TOKEN
# プロンプト: Discord Bot Token を入力

# Gemini API 設定
wrangler secret put GEMINI_API_KEY
# プロンプト: Google AI Studio の API Key を入力

# 設定確認
wrangler secret list
```

### 4. デプロイ実行

```bash
# 本番環境にデプロイ
npm run deploy

# または直接実行
wrangler deploy

# デプロイ状況の確認
wrangler deployments list
```

### 5. デプロイ後の確認

```bash
# ヘルスチェック
curl https://discord-farmbot.your-subdomain.workers.dev/health

# ログの監視
wrangler tail

# パフォーマンス確認
wrangler metrics
```

## 🔧 Discord Bot 設定

### 1. Interactions Endpoint URL の更新

1. [Discord Developer Portal](https://discord.com/developers/applications) を開く
2. アプリケーションを選択
3. "General Information" → "Interactions Endpoint URL" を更新
4. Workers の URL を設定：
   ```
   https://discord-farmbot.your-subdomain.workers.dev
   ```

### 2. Bot 権限の最終確認

必要な権限が設定されていることを確認：

```javascript
// 必要な権限の計算値
const REQUIRED_PERMISSIONS = 
  (1 << 11) |  // Send Messages
  (1 << 15) |  // Read Message History  
  (1 << 35) |  // Use Slash Commands
  (1 << 34) |  // Create Public Threads
  (1 << 38);   // Send Messages in Threads

// 権限値: 274877975552
```

### 3. Slash Commands の登録

```bash
# 本番環境用のコマンド登録
node scripts/register-commands.js

# 特定のサーバー（ギルド）に即座に反映
node scripts/register-commands.js guild YOUR_GUILD_ID
```

## 📊 監視とログ

### 1. リアルタイム監視

```bash
# ログのリアルタイム監視
wrangler tail

# フィルタ付き監視
wrangler tail --format pretty

# エラーのみ監視
wrangler tail --status error
```

### 2. メトリクス確認

```bash
# 使用量統計
wrangler metrics

# 詳細なメトリクス
wrangler analytics
```

### 3. ログ分析

```javascript
// farmbot.js でのログ出力例
console.log('Production Log:', {
  timestamp: new Date().toISOString(),
  event: 'image_analysis_completed',
  userId: interaction.user.id,
  guildId: interaction.guild_id,
  processingTime: Date.now() - startTime,
  success: true
});
```

## 🔒 セキュリティ設定

### 1. 環境変数の保護

```bash
# 本番環境では以下を確認
wrangler secret list

# 期待される出力:
# DISCORD_PUBLIC_KEY
# DISCORD_BOT_TOKEN  
# GEMINI_API_KEY
```

### 2. CORS 設定（必要に応じて）

```javascript
// farmbot.js での CORS ヘッダー設定
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://discord.com',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};
```

### 3. レート制限の実装

```javascript
// 簡単なレート制限の例
const rateLimitMap = new Map();

function checkRateLimit(userId) {
  const now = Date.now();
  const userLimit = rateLimitMap.get(userId) || { count: 0, resetTime: now + 60000 };
  
  if (now > userLimit.resetTime) {
    userLimit.count = 0;
    userLimit.resetTime = now + 60000;
  }
  
  if (userLimit.count >= 10) { // 1分間に10回まで
    return false;
  }
  
  userLimit.count++;
  rateLimitMap.set(userId, userLimit);
  return true;
}
```

## 📈 パフォーマンス最適化

### 1. 画像処理の最適化

```javascript
// 画像サイズの事前チェック
function validateImageSize(imageUrl) {
  const maxSize = 500 * 1024; // 500KB
  
  return fetch(imageUrl, { method: 'HEAD' })
    .then(response => {
      const contentLength = response.headers.get('content-length');
      return contentLength && parseInt(contentLength) <= maxSize;
    });
}
```

### 2. API レスポンス時間の改善

```javascript
// タイムアウト設定
const GEMINI_TIMEOUT = 30000; // 30秒

const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), GEMINI_TIMEOUT);

try {
  const response = await fetch(geminiApiUrl, {
    signal: controller.signal,
    // ... その他の設定
  });
} finally {
  clearTimeout(timeoutId);
}
```

### 3. キャッシュ戦略

```javascript
// 結果のキャッシュ（同じ画像の再解析を避ける）
const cache = new Map();

function getCacheKey(imageUrl) {
  // 画像URLのハッシュを生成
  return btoa(imageUrl).slice(0, 16);
}

async function getCachedResult(imageUrl) {
  const key = getCacheKey(imageUrl);
  return cache.get(key);
}
```

## 🚨 トラブルシューティング

### 1. デプロイエラー

```bash
# よくあるエラーと解決法

# Error: Authentication failed
wrangler logout
wrangler login

# Error: Script size too large
# → 不要なファイルを除外、コードを最適化

# Error: Environment variable not found
wrangler secret list
# → 必要なシークレットを再設定
```

### 2. 実行時エラー

```javascript
// エラーハンドリングの強化
export default {
  async fetch(request, env, ctx) {
    try {
      // メイン処理
      return await handleRequest(request, env);
    } catch (error) {
      console.error('Unhandled error:', {
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
        url: request.url
      });
      
      return new Response(JSON.stringify({
        error: 'Internal server error',
        timestamp: new Date().toISOString()
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};
```

### 3. Discord API エラー

```javascript
// Discord API エラーの詳細ログ
async function handleDiscordError(response) {
  const errorData = await response.json();
  console.error('Discord API Error:', {
    status: response.status,
    code: errorData.code,
    message: errorData.message,
    errors: errorData.errors
  });
}
```

## 📋 デプロイ後チェックリスト

### 即座に確認すべき項目

- [ ] ヘルスチェックエンドポイントが応答する
- [ ] Discord でのコマンド実行が成功する
- [ ] 画像解析が正常に動作する
- [ ] エラーハンドリングが適切に機能する
- [ ] ログが正常に出力される

### 24時間後に確認すべき項目

- [ ] メトリクスでエラー率を確認
- [ ] API使用量が制限内に収まっている
- [ ] パフォーマンスが期待値内
- [ ] ユーザーからのフィードバック確認

### 定期的に確認すべき項目

- [ ] API キーの有効期限
- [ ] 使用量の推移
- [ ] セキュリティアップデート
- [ ] 依存関係の更新

## 🔄 継続的デプロイ

GitHub Actions を使用した自動デプロイの設定は、[CI/CD設定ガイド](/deployment/ci-cd.html)をご参照ください。

---

::: tip 💡 本番運用のコツ
本番環境では必ずログ監視を行い、エラー率やレスポンス時間を定期的にチェックしてください。異常を早期発見することで、ユーザー体験の向上につながります。
:::

::: warning ⚠️ 重要な注意事項
本番環境のAPI キーやトークンは絶対に公開しないでください。また、定期的にローテーションすることをお勧めします。
:::