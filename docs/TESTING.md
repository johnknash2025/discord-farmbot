# 🧪 Discord Farmbot テストガイド

## 📋 テスト前の準備

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 環境変数の設定
```bash
# サンプルファイルをコピー
cp .dev.vars.example .dev.vars

# 実際の値を設定
# .dev.vars ファイルを編集して以下を設定:
# DISCORD_PUBLIC_KEY=your_actual_discord_public_key
# DISCORD_BOT_TOKEN=your_actual_discord_bot_token  
# GEMINI_API_KEY=your_actual_gemini_api_key
```

### 3. Discord アプリケーションの設定

#### Discord Developer Portal での設定:
1. https://discord.com/developers/applications にアクセス
2. "New Application" をクリック
3. Bot を作成して Token を取得
4. OAuth2 で以下の権限を設定:
   - Scopes: `applications.commands`, `bot`
   - Bot Permissions: `Send Messages`, `Use Slash Commands`, `Read Message History`

#### Slash Command の登録:
- Name: `analyze`
- Description: `農作物画像を解析してスレッドに結果を投稿します`
- Option:
  - Name: `image`
  - Type: `ATTACHMENT`
  - Required: `true`
  - Description: `解析したい農作物の画像`

### 4. Gemini API Key の取得
1. https://makersuite.google.com/app/apikey にアクセス
2. "Create API Key" をクリック
3. 生成されたキーを .dev.vars に設定

## 🚀 テスト手順

### Phase 1: ローカル構文テスト
```bash
# 構文チェック
node -c farmbot.js

# モックテスト実行
node test-bot.js
```

### Phase 2: Wrangler 開発サーバーテスト
```bash
# ローカル開発サーバー起動
npm run start
# または
npx wrangler dev
```

### Phase 3: Discord 統合テスト

#### 3.1 エンドポイント設定
1. Wrangler dev で表示されるローカルURL (例: `http://localhost:8787`) をコピー
2. Discord Developer Portal の "Interactions Endpoint URL" に設定
3. ngrok などを使用して外部アクセス可能にする場合:
   ```bash
   # 別ターミナルで
   ngrok http 8787
   # 表示されたHTTPS URLをDiscordに設定
   ```

#### 3.2 実際のテスト
1. Discord サーバーで `/analyze` コマンドを実行
2. 農作物の画像を添付
3. 以下を確認:
   - ✅ 即座に「解析中...」メッセージが表示される
   - ✅ 数秒後にスレッドに解析結果が投稿される
   - ✅ 元のコマンドが「解析完了！」メッセージに更新される

## 🔍 トラブルシューティング

### よくある問題と解決法

#### 1. 署名検証エラー
```
Error: Invalid request signature
```
**解決法**: DISCORD_PUBLIC_KEY が正しく設定されているか確認

#### 2. Bot Token エラー
```
Error: Discord API error: 401
```
**解決法**: DISCORD_BOT_TOKEN が正しく設定されているか確認

#### 3. Gemini API エラー
```
Error: Gemini API error: 400
```
**解決法**: 
- GEMINI_API_KEY が正しく設定されているか確認
- API クォータが残っているか確認
- 画像サイズが制限内か確認

#### 4. 画像取得エラー
```
Error: Failed to fetch image
```
**解決法**: 
- Discord の画像URLが有効か確認
- ネットワーク接続を確認
- 画像ファイル形式が対応しているか確認

### デバッグ用ログ確認
```bash
# Wrangler のログを確認
npx wrangler tail

# ローカル開発時のコンソールログを確認
# ブラウザの開発者ツールでネットワークタブを確認
```

## 📊 テスト結果の確認項目

### ✅ 成功パターン
- [ ] コマンドが正常に認識される
- [ ] 画像添付が正しく処理される
- [ ] Gemini API から解析結果が返る
- [ ] スレッドに結果が投稿される
- [ ] エラーハンドリングが適切に動作する

### ❌ 失敗パターンのテスト
- [ ] 画像以外のファイルを添付した場合
- [ ] 画像を添付しなかった場合
- [ ] 無効な画像URLの場合
- [ ] API制限に達した場合

## 🎯 次のステップ

テストが成功したら:
1. **本番デプロイ**: `npm run deploy`
2. **自動検知機能の追加**: Cron Triggers を使用した自動監視
3. **機能拡張**: 複数画像対応、解析履歴保存など

テストで問題が発生した場合:
1. ログを確認して原因を特定
2. 設定値を再確認
3. Discord/Gemini APIの制限を確認
4. 必要に応じてコードを修正