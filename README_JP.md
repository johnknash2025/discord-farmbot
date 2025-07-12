# 🌱 Discord Farmbot

農作物画像を解析するDiscord Bot。Gemini Vision APIを使用して、農作物の種類、成長段階、健康状態などを詳細に分析します。

## ✨ 機能

- 🔍 **画像解析**: Gemini Vision APIによる高精度な農作物解析
- 🌾 **専門的評価**: 作物の種類、成長段階、健康状態を詳細に診断
- 💬 **Discord統合**: Slash Commandで簡単操作
- 🔄 **自動返信**: 解析結果をスレッドに自動投稿
- ☁️ **24/7稼働**: Cloudflare Workersで常時稼働

## 🚀 使用方法

1. Discordサーバーで `/analyze` コマンドを実行
2. 農作物の画像を添付（500KB以下）
3. 数秒後にスレッドに詳細な解析結果が投稿される

### 解析内容

- **作物の種類**: 植物の特定
- **成長段階**: 発芽期〜収穫期の判定
- **健康状態**: 病気や害虫の兆候
- **栽培環境**: 土壌・水分・日照状態
- **品質評価**: 収穫時期の予測
- **改善提案**: 栽培管理のアドバイス

## 🛠️ セットアップ

### 必要な環境

- Node.js 18+
- Cloudflare Workers アカウント
- Discord Developer アカウント
- Google AI Studio アカウント（Gemini API）

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

```bash
cp .dev.vars.example .dev.vars
```

`.dev.vars` ファイルを編集して以下を設定：

```env
DISCORD_PUBLIC_KEY=your_discord_public_key
DISCORD_BOT_TOKEN=your_discord_bot_token
GEMINI_API_KEY=your_gemini_api_key
```

### 3. Discord Bot の設定

1. [Discord Developer Portal](https://discord.com/developers/applications) でアプリケーション作成
2. Bot を作成してトークンを取得
3. 以下の権限を設定：
   - `applications.commands`
   - `bot`
   - `Send Messages`
   - `Use Slash Commands`
   - `Read Message History`

### 4. Slash Command の登録

```bash
node scripts/register-commands.js
```

### 5. ローカル開発

```bash
npm run start
```

### 6. 本番デプロイ

```bash
# 環境変数を本番環境に設定
./scripts/deploy-secrets.sh

# デプロイ実行
npm run deploy
```

## 📁 プロジェクト構造

```
discord-farmbot/
├── farmbot.js              # メインWorkerファイル
├── package.json            # 依存関係設定
├── wrangler.toml           # Cloudflare Workers設定
├── .dev.vars.example       # 環境変数テンプレート
├── docs/                   # ドキュメント
│   ├── TESTING.md         # テストガイド
│   ├── production-setup.md # 本番環境セットアップ
│   └── setup-tunnel.md    # 開発環境セットアップ
├── scripts/               # ユーティリティスクリプト
│   ├── deploy-secrets.sh  # 環境変数デプロイ
│   └── register-commands.js # Slash Command登録
└── tests/                 # テストファイル
    ├── test-env.js        # 環境変数テスト
    ├── test-gemini-api.js # Gemini APIテスト
    └── ...
```

## 🔧 技術スタック

- **Runtime**: Cloudflare Workers
- **Language**: JavaScript (ES Modules)
- **AI API**: Google Gemini Vision API
- **Platform**: Discord API v10
- **Deployment**: Wrangler CLI

## 📊 API制限

- **画像サイズ**: 500KB以下
- **対応形式**: PNG, JPEG, WEBP
- **Gemini API**: 無料枠内で利用
- **Workers**: 100,000リクエスト/日（無料枠）

## 🐛 トラブルシューティング

### よくある問題

1. **"Invalid request signature"**
   - DISCORD_PUBLIC_KEY が正しく設定されているか確認

2. **"Image too large"**
   - 画像サイズを500KB以下に圧縮

3. **"Gemini API error: 400"**
   - GEMINI_API_KEY が有効か確認
   - 画像形式が対応しているか確認

### ログ確認

```bash
# 本番環境のログ監視
wrangler tail

# 環境変数確認
wrangler secret list
```

## 📈 今後の改善予定

- [ ] 自動画像検知機能
- [ ] 解析履歴の保存
- [ ] 複数画像の一括解析
- [ ] 専門用語辞書の追加
- [ ] 多言語対応

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します！

## 📞 サポート

問題や質問がある場合は、GitHubのIssuesでお知らせください。

## 🌍 ドキュメント

- **日本語**: [完全ドキュメント](https://johnknash2025.github.io/discord-farmbot/)
- **English**: [English Documentation](https://johnknash2025.github.io/discord-farmbot/en/)

## 🔗 リンク

- **Discord サポートサーバー**: [参加はこちら](https://discord.gg/Gq9jPaMX8g)
- **GitHub リポジトリ**: [discord-farmbot](https://github.com/johnknash2025/discord-farmbot)
- **ドキュメントサイト**: [docs](https://johnknash2025.github.io/discord-farmbot/)

---

**Languages**: **日本語** | [English](README.md) | [中文](README_CN.md) | [한국어](README_KR.md)