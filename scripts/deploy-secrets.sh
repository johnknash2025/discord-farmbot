#!/bin/bash

echo "🔐 Cloudflare Workers 環境変数設定開始"

# .dev.vars から値を読み取り
source .dev.vars

echo "1️⃣ DISCORD_PUBLIC_KEY を設定中..."
echo "$DISCORD_PUBLIC_KEY" | wrangler secret put DISCORD_PUBLIC_KEY

echo "2️⃣ DISCORD_BOT_TOKEN を設定中..."
echo "$DISCORD_BOT_TOKEN" | wrangler secret put DISCORD_BOT_TOKEN

echo "3️⃣ GEMINI_API_KEY を設定中..."
echo "$GEMINI_API_KEY" | wrangler secret put GEMINI_API_KEY

echo "✅ 環境変数設定完了！"