# 開発環境セットアップ

Discord Farmbotの開発環境を構築するための詳細ガイドです。

## 🛠️ 必要な環境

### システム要件

- **Node.js**: 18.0.0 以上
- **npm**: 8.0.0 以上
- **Git**: 最新版
- **エディタ**: VS Code推奨

### 必要なアカウント

1. **GitHub アカウント** - ソースコード管理
2. **Discord Developer アカウント** - Bot作成
3. **Google Cloud アカウント** - Gemini API利用
4. **Cloudflare アカウント** - Workers デプロイ

## 📦 プロジェクトのセットアップ

### 1. リポジトリのクローン

```bash
# HTTPSでクローン
git clone https://github.com/yourusername/discord-farmbot.git
cd discord-farmbot

# または SSH でクローン
git clone git@github.com:yourusername/discord-farmbot.git
cd discord-farmbot
```

### 2. 依存関係のインストール

```bash
# メインプロジェクトの依存関係
npm install

# 開発用ツールのインストール
npm install --save-dev

# グローバルツールのインストール
npm install -g wrangler
```

### 3. 環境変数の設定

```bash
# サンプルファイルをコピー
cp .dev.vars.example .dev.vars

# エディタで編集
code .dev.vars
```

`.dev.vars` ファイルの内容：

```env
# Discord Bot 設定
DISCORD_PUBLIC_KEY=your_discord_public_key_here
DISCORD_BOT_TOKEN=your_discord_bot_token_here

# Gemini API 設定
GEMINI_API_KEY=your_gemini_api_key_here

# 開発用設定（オプション）
DEBUG_MODE=true
LOG_LEVEL=debug
```

## 🔑 API キーの取得

### Discord Bot の設定

#### 1. Discord Developer Portal

1. [Discord Developer Portal](https://discord.com/developers/applications) にアクセス
2. "New Application" をクリック
3. アプリケーション名を入力（例：`Farmbot Dev`）

#### 2. Bot の作成

```javascript
// Bot設定の詳細
{
  "name": "Farmbot Dev",
  "description": "農作物画像解析Bot（開発版）",
  "avatar": "farmbot-avatar.png"
}
```

1. 左メニューの "Bot" を選択
2. "Add Bot" をクリック
3. "Token" をコピーして `.dev.vars` に設定

#### 3. 権限の設定

必要な権限：
- `applications.commands` - スラッシュコマンド
- `bot` - Bot基本権限
- `Send Messages` - メッセージ送信
- `Use Slash Commands` - スラッシュコマンド使用
- `Read Message History` - メッセージ履歴読取
- `Create Public Threads` - パブリックスレッド作成
- `Send Messages in Threads` - スレッド内メッセージ送信

#### 4. OAuth2 URL の生成

```
https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=274877975552&scope=bot%20applications.commands
```

### Gemini API の設定

#### 1. Google AI Studio

1. [Google AI Studio](https://makersuite.google.com/app/apikey) にアクセス
2. "Create API Key" をクリック
3. プロジェクトを選択または新規作成
4. API キーをコピーして `.dev.vars` に設定

#### 2. API制限の確認

```bash
# API使用量の確認
curl -H "Authorization: Bearer $GEMINI_API_KEY" \
  https://generativelanguage.googleapis.com/v1/models
```

## 🚀 開発サーバーの起動

### 1. ローカル開発

```bash
# Wrangler 開発サーバー起動
npm run start

# または直接実行
npx wrangler dev

# ポート指定
npx wrangler dev --port 8787
```

### 2. 外部アクセスの設定

#### ngrok を使用

```bash
# ngrok のインストール
npm install -g ngrok

# トンネル作成
ngrok http 8787
```

#### Cloudflare Tunnel を使用

```bash
# cloudflared のインストール
npm install -g @cloudflare/cloudflared

# トンネル作成
cloudflared tunnel --url http://localhost:8787
```

### 3. Discord エンドポイントの設定

1. Discord Developer Portal を開く
2. "General Information" → "Interactions Endpoint URL" に設定
3. 例：`https://abc123.ngrok.io` または `https://your-tunnel.trycloudflare.com`

## 🧪 テスト環境

### 1. 単体テストの実行

```bash
# 全テストの実行
npm test

# 特定のテストファイル
npm test tests/test-gemini-api.js

# 環境変数テスト
npm test tests/test-env.js
```

### 2. 統合テストの実行

```bash
# Discord API テスト
node tests/test-discord-image.js

# エンドポイントテスト
node tests/test-endpoints.js

# Bot機能テスト
node tests/test-bot.js
```

### 3. 手動テスト

```bash
# ヘルスチェック
curl http://localhost:8787/health

# Discord Webhook テスト
curl -X POST http://localhost:8787/ \
  -H "Content-Type: application/json" \
  -d @tests/sample-discord-payload.json
```

## 🔧 開発ツールの設定

### VS Code 設定

`.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.associations": {
    "*.toml": "toml"
  },
  "javascript.preferences.importModuleSpecifier": "relative"
}
```

### 推奨拡張機能

```json
{
  "recommendations": [
    "ms-vscode.vscode-json",
    "tamasfe.even-better-toml",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}
```

### ESLint 設定

`.eslintrc.js`:

```javascript
module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'prefer-const': 'error',
  },
};
```

## 📁 プロジェクト構造の理解

```
discord-farmbot/
├── 📄 farmbot.js              # メインWorkerファイル
├── 📄 package.json            # 依存関係とスクリプト
├── 📄 wrangler.toml           # Cloudflare Workers設定
├── 📄 .dev.vars.example       # 環境変数テンプレート
├── 📄 .dev.vars               # 実際の環境変数（Git除外）
├── 📁 scripts/                # ユーティリティスクリプト
│   ├── 📄 register-commands.js # Slash Command登録
│   └── 📄 deploy-secrets.sh   # 環境変数デプロイ
├── 📁 tests/                  # テストファイル
│   ├── 📄 test-env.js         # 環境変数テスト
│   ├── 📄 test-gemini-api.js  # Gemini APIテスト
│   ├── 📄 test-bot.js         # Bot機能テスト
│   └── 📄 ...                 # その他のテスト
├── 📁 docs/                   # ドキュメント（VuePress）
│   ├── 📄 README.md           # ホームページ
│   ├── 📁 .vuepress/          # VuePress設定
│   ├── 📁 user-guide/         # ユーザーガイド
│   └── 📁 developer-guide/    # 開発者ガイド
└── 📁 .github/                # GitHub Actions
    └── 📁 workflows/          # CI/CDワークフロー
```

## 🐛 デバッグ方法

### 1. ログの確認

```bash
# Wrangler ログの監視
wrangler tail

# 特定のフィルタ
wrangler tail --format pretty

# ローカル開発時のログ
# ブラウザの開発者ツールでコンソールを確認
```

### 2. デバッグ用コード

```javascript
// farmbot.js にデバッグコードを追加
console.log('Debug: Request received', {
  method: request.method,
  url: request.url,
  headers: Object.fromEntries(request.headers)
});

// 環境変数の確認
console.log('Environment check:', {
  hasDiscordKey: !!env.DISCORD_PUBLIC_KEY,
  hasDiscordToken: !!env.DISCORD_BOT_TOKEN,
  hasGeminiKey: !!env.GEMINI_API_KEY
});
```

### 3. エラーハンドリング

```javascript
try {
  // 危険な処理
  const result = await riskyOperation();
} catch (error) {
  console.error('Error details:', {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString()
  });
  
  // ユーザーフレンドリーなエラーレスポンス
  return new Response(JSON.stringify({
    error: 'Internal server error',
    code: 'INTERNAL_ERROR'
  }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' }
  });
}
```

## 🚀 次のステップ

開発環境が整ったら：

1. **[アーキテクチャ理解](./architecture.md)** - システム構成の学習
2. **[API リファレンス](./api-reference.md)** - API仕様の確認
3. **[テストガイド](./testing.md)** - テスト方法の学習
4. **[コントリビューション](./contributing.md)** - 開発参加方法

---

::: tip 💡 開発のコツ
開発時は `DEBUG_MODE=true` を設定すると、詳細なログが出力されて問題の特定が容易になります。本番環境では必ず `false` に設定してください。
:::

::: warning ⚠️ セキュリティ注意
`.dev.vars` ファイルには機密情報が含まれています。絶対にGitにコミットしないよう注意してください。`.gitignore` で除外されていることを確認してください。
:::