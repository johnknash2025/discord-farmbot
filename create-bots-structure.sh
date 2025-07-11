#!/bin/bash

# 10個のDiscord Bot用ディレクトリ構造作成スクリプト
# 現在のfarmbot構成をテンプレートとして使用

BOTS=(
    "discord-weatherbot:天気予報・気象情報"
    "discord-translatebot:多言語翻訳"
    "discord-quizbot:クイズゲーム"
    "discord-reminderbot:リマインダー・スケジュール管理"
    "discord-musicbot:音楽情報・歌詞検索"
    "discord-newsbot:ニュース配信"
    "discord-mathbot:数学計算・グラフ描画"
    "discord-petbot:ペット画像解析・アドバイス"
    "discord-cookbot:料理レシピ・栄養情報"
)

BASE_DIR="../discord-bots"

echo "🚀 Discord Bots ディレクトリ構造を作成中..."

# ベースディレクトリ作成
mkdir -p "$BASE_DIR"

for bot_info in "${BOTS[@]}"; do
    IFS=':' read -r bot_name bot_description <<< "$bot_info"
    
    echo "📁 $bot_name を作成中..."
    
    # ボットディレクトリ作成
    mkdir -p "$BASE_DIR/$bot_name"
    cd "$BASE_DIR/$bot_name"
    
    # 基本ディレクトリ構造作成
    mkdir -p docs scripts tests configs
    
    # Git初期化
    git init
    
    # .gitignoreをコピー
    cp "../../discord-farmbot/.gitignore" .
    
    # package.jsonを作成（bot名に応じて調整）
    cat > package.json << EOF
{
  "name": "$bot_name",
  "version": "1.0.0",
  "description": "A Discord bot for $bot_description",
  "type": "module",
  "main": "${bot_name#discord-}.js",
  "scripts": {
    "start": "wrangler dev",
    "deploy": "wrangler deploy",
    "test": "node tests/test-env.js",
    "register-commands": "node scripts/register-commands.js"
  },
  "keywords": [
    "discord",
    "bot",
    "cloudflare-workers"
  ],
  "author": "Your Name",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/$bot_name.git"
  },
  "dependencies": {
    "tweetnacl": "^1.0.3"
  },
  "devDependencies": {
    "wrangler": "^4.0.0"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
EOF

    # wrangler.tomlを作成
    cat > wrangler.toml << EOF
name = "$bot_name"
main = "${bot_name#discord-}.js"
compatibility_date = "2023-10-30"

[vars]
# このファイルにはシークレットを保存しないでください。
# シークレットは \`wrangler secret put\` コマンドで設定します。

# 必要な環境変数:
# DISCORD_PUBLIC_KEY = "Discord アプリの Public Key"
# DISCORD_BOT_TOKEN = "Discord Bot の Token"  
# GEMINI_API_KEY = "Google AI Studio の API Key"

# 設定コマンド例:
# wrangler secret put DISCORD_PUBLIC_KEY
# wrangler secret put DISCORD_BOT_TOKEN
# wrangler secret put GEMINI_API_KEY
EOF

    # .dev.vars.exampleをコピー
    cp "../../discord-farmbot/.dev.vars.example" .
    
    # LICENSEをコピー
    cp "../../discord-farmbot/LICENSE" .
    
    # 基本的なREADME.mdを作成
    cat > README.md << EOF
# 🤖 $bot_name

$bot_description を行うDiscord Bot

## ✨ 機能

- 🔍 **$bot_description**: 高精度な処理
- 💬 **Discord統合**: Slash Commandで簡単操作
- 🔄 **自動返信**: 処理結果をスレッドに自動投稿
- ☁️ **24/7稼働**: Cloudflare Workersで常時稼働

## 🚀 使用方法

1. Discordサーバーで \`/analyze\` コマンドを実行
2. 必要な情報を入力
3. 数秒後にスレッドに詳細な結果が投稿される

## 🛠️ セットアップ

### 必要な環境

- Node.js 18+
- Cloudflare Workers アカウント
- Discord Developer アカウント
- Google AI Studio アカウント（Gemini API）

### 1. 依存関係のインストール

\`\`\`bash
npm install
\`\`\`

### 2. 環境変数の設定

\`\`\`bash
cp .dev.vars.example .dev.vars
\`\`\`

### 3. Slash Command の登録

\`\`\`bash
node scripts/register-commands.js
\`\`\`

### 4. ローカル開発

\`\`\`bash
npm run start
\`\`\`

### 5. 本番デプロイ

\`\`\`bash
npm run deploy
\`\`\`

## 📁 プロジェクト構造

\`\`\`
$bot_name/
├── ${bot_name#discord-}.js        # メインWorkerファイル
├── package.json            # 依存関係設定
├── wrangler.toml           # Cloudflare Workers設定
├── .dev.vars.example       # 環境変数テンプレート
├── docs/                   # ドキュメント
├── scripts/               # ユーティリティスクリプト
├── tests/                 # テストファイル
└── configs/               # 設定ファイル
\`\`\`

## 🔧 技術スタック

- **Runtime**: Cloudflare Workers
- **Language**: JavaScript (ES Modules)
- **AI API**: Google Gemini API
- **Platform**: Discord API v10
- **Deployment**: Wrangler CLI

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照
EOF

    # 基本的なメインファイルを作成
    cat > "${bot_name#discord-}.js" << EOF
/*
 * $bot_name
 * $bot_description を行うDiscord Bot
 * 
 * Cloudflare Workers + Discord API + Gemini API
 */

import { verifyKey } from './utils/discord.js';

// Discord API設定
const DISCORD_API_BASE = 'https://discord.com/api/v10';

// レスポンスタイプ
const InteractionResponseType = {
  PONG: 1,
  CHANNEL_MESSAGE_WITH_SOURCE: 4,
  DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE: 5,
};

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      
      // Discord Interactions エンドポイント
      if (url.pathname === '/interactions' && request.method === 'POST') {
        return await handleInteraction(request, env);
      }
      
      // ヘルスチェック
      if (url.pathname === '/health') {
        return new Response('OK', { status: 200 });
      }
      
      return new Response('Not Found', { status: 404 });
    } catch (error) {
      console.error('Worker error:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};

/**
 * Discord Interaction ハンドラー
 */
async function handleInteraction(request, env) {
  // リクエスト検証
  const signature = request.headers.get('x-signature-ed25519');
  const timestamp = request.headers.get('x-signature-timestamp');
  const body = await request.text();
  
  if (!verifyKey(body, signature, timestamp, env.DISCORD_PUBLIC_KEY)) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  const interaction = JSON.parse(body);
  
  // PING応答
  if (interaction.type === 1) {
    return new Response(JSON.stringify({ type: InteractionResponseType.PONG }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  // Slash Command処理
  if (interaction.type === 2) {
    return await handleSlashCommand(interaction, env);
  }
  
  return new Response('Unknown interaction type', { status: 400 });
}

/**
 * Slash Command ハンドラー
 */
async function handleSlashCommand(interaction, env) {
  const { data } = interaction;
  
  switch (data.name) {
    case 'analyze':
      return await handleAnalyzeCommand(interaction, env);
    default:
      return new Response(JSON.stringify({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { content: '未知のコマンドです。' }
      }), {
        headers: { 'Content-Type': 'application/json' },
      });
  }
}

/**
 * /analyze コマンドハンドラー
 */
async function handleAnalyzeCommand(interaction, env) {
  // 即座に応答（3秒制限対応）
  const response = new Response(JSON.stringify({
    type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
  }), {
    headers: { 'Content-Type': 'application/json' },
  });
  
  // バックグラウンドで処理実行
  // TODO: 実際の処理ロジックを実装
  
  return response;
}
EOF

    # utils/discord.js を作成
    mkdir -p utils
    cat > utils/discord.js << EOF
import nacl from 'tweetnacl';

/**
 * Discord リクエスト署名検証
 */
export function verifyKey(body, signature, timestamp, publicKey) {
  try {
    const timestampData = new TextEncoder().encode(timestamp);
    const bodyData = new TextEncoder().encode(body);
    const message = new Uint8Array(timestampData.length + bodyData.length);
    message.set(timestampData);
    message.set(bodyData, timestampData.length);
    
    const signatureData = hexToUint8Array(signature);
    const publicKeyData = hexToUint8Array(publicKey);
    
    return nacl.sign.detached.verify(message, signatureData, publicKeyData);
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}

function hexToUint8Array(hex) {
  return new Uint8Array(hex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}
EOF

    # scripts/register-commands.js を作成
    cat > scripts/register-commands.js << EOF
/**
 * Discord Slash Commands 登録スクリプト
 * $bot_name
 */

import { config } from 'dotenv';
config();

const DISCORD_API_BASE = 'https://discord.com/api/v10';
const APPLICATION_ID = process.env.DISCORD_APPLICATION_ID;
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

const commands = [
  {
    name: 'analyze',
    description: '$bot_description を実行します',
    options: [
      {
        name: 'input',
        description: '処理したい内容を入力してください',
        type: 3, // STRING
        required: true,
      },
    ],
  },
];

async function registerCommands() {
  try {
    console.log('🚀 Slash Commands を登録中...');
    
    const response = await fetch(
      \`\${DISCORD_API_BASE}/applications/\${APPLICATION_ID}/commands\`,
      {
        method: 'PUT',
        headers: {
          'Authorization': \`Bot \${BOT_TOKEN}\`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commands),
      }
    );
    
    if (response.ok) {
      console.log('✅ Slash Commands の登録が完了しました！');
    } else {
      const error = await response.text();
      console.error('❌ 登録に失敗しました:', error);
    }
  } catch (error) {
    console.error('❌ エラーが発生しました:', error);
  }
}

registerCommands();
EOF

    # scripts/deploy-secrets.sh を作成
    cat > scripts/deploy-secrets.sh << EOF
#!/bin/bash

# $bot_name 環境変数デプロイスクリプト

echo "🚀 $bot_name の環境変数を設定中..."

# .dev.vars ファイルから環境変数を読み込み
if [ ! -f .dev.vars ]; then
    echo "❌ .dev.vars ファイルが見つかりません"
    exit 1
fi

source .dev.vars

# 環境変数をCloudflare Workersに設定
echo "DISCORD_PUBLIC_KEY を設定中..."
echo "\$DISCORD_PUBLIC_KEY" | wrangler secret put DISCORD_PUBLIC_KEY

echo "DISCORD_BOT_TOKEN を設定中..."
echo "\$DISCORD_BOT_TOKEN" | wrangler secret put DISCORD_BOT_TOKEN

echo "GEMINI_API_KEY を設定中..."
echo "\$GEMINI_API_KEY" | wrangler secret put GEMINI_API_KEY

echo "✅ 環境変数の設定が完了しました！"
EOF

    chmod +x scripts/deploy-secrets.sh

    # tests/test-env.js を作成
    cat > tests/test-env.js << EOF
/**
 * $bot_name 環境変数テスト
 */

import { config } from 'dotenv';
config();

console.log('🧪 $bot_name 環境変数テスト開始...');

const requiredVars = [
  'DISCORD_PUBLIC_KEY',
  'DISCORD_BOT_TOKEN',
  'DISCORD_APPLICATION_ID',
  'GEMINI_API_KEY'
];

let allValid = true;

requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(\`✅ \${varName}: 設定済み (\${value.substring(0, 10)}...)\`);
  } else {
    console.log(\`❌ \${varName}: 未設定\`);
    allValid = false;
  }
});

if (allValid) {
  console.log('🎉 すべての環境変数が設定されています！');
} else {
  console.log('⚠️  一部の環境変数が未設定です。.dev.vars ファイルを確認してください。');
  process.exit(1);
}
EOF

    # 初回コミット
    git add .
    git commit -m "Initial commit: $bot_name setup"
    
    echo "✅ $bot_name の作成が完了しました！"
    
    cd - > /dev/null
done

echo ""
echo "🎉 すべてのDiscord Botsの作成が完了しました！"
echo ""
echo "📁 作成されたボット:"
for bot_info in "${BOTS[@]}"; do
    IFS=':' read -r bot_name bot_description <<< "$bot_info"
    echo "  - $bot_name ($bot_description)"
done
echo ""
echo "🚀 次のステップ:"
echo "1. 各ボットディレクトリに移動"
echo "2. .dev.vars ファイルを設定"
echo "3. npm install で依存関係をインストール"
echo "4. npm run register-commands でSlash Commandを登録"
echo "5. npm run start で開発開始"