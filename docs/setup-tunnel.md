# 🌐 外部アクセス用トンネル設定

## ngrok のインストールと設定

### 1. ngrok のインストール
```bash
# macOS (Homebrew)
brew install ngrok

# Windows (Chocolatey)
choco install ngrok

# または公式サイトからダウンロード
# https://ngrok.com/download
```

### 2. ngrok でトンネル作成
```bash
# 新しいターミナルウィンドウで実行
ngrok http 8787
```

### 3. 表示される情報
```
ngrok by @inconshreveable

Session Status                online
Account                       your-account
Version                       3.x.x
Region                        Japan (jp)
Forwarding                    https://abc123.ngrok.io -> http://localhost:8787
Forwarding                    http://abc123.ngrok.io -> http://localhost:8787

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

### 4. HTTPS URL をコピー
上記の例では `https://abc123.ngrok.io` をコピーしてください。

## 代替案: Cloudflare Tunnel

ngrok が使用できない場合は、Cloudflare Tunnel も使用可能です：

```bash
# Cloudflare Tunnel のインストール
npm install -g @cloudflare/cloudflared

# トンネル作成
cloudflared tunnel --url http://localhost:8787
```

## 次のステップ

1. 上記のいずれかの方法でHTTPS URLを取得
2. Discord Developer Portal でエンドポイント設定
3. 実際のテスト実行