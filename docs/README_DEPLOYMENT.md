# 🚀 Discord Farmbot ドキュメントサイト デプロイガイド

## 📊 Google Analytics 設定完了

✅ **トラッキングID**: `G-HPC9WP899Q`  
✅ **VuePressプラグイン統合**: 完了  
✅ **gtagスクリプト統合**: 完了  
✅ **ビルド確認**: 成功  

## 🌐 GitHub Pages 公開手順

### 1. GitHub リポジトリでPages有効化

1. GitHubリポジトリ (`https://github.com/johnknash2025/discord-farmbot`) にアクセス
2. **Settings** タブをクリック
3. 左メニューの **Pages** をクリック
4. **Source** を **GitHub Actions** に設定
5. **Save** をクリック

### 2. 自動デプロイ確認

GitHub Actionsワークフローが自動実行され、以下のURLでサイトが公開されます：

```
https://johnknash2025.github.io/discord-farmbot/
```

### 3. カスタムドメイン設定（オプション）

独自ドメインを使用する場合：

1. DNS設定でCNAMEレコードを追加：
   ```
   docs.yourdomain.com → johnknash2025.github.io
   ```

2. `docs/.vuepress/public/CNAME` ファイルを作成：
   ```
   docs.yourdomain.com
   ```

## 📈 Analytics 確認方法

### Google Analytics ダッシュボード

1. [Google Analytics](https://analytics.google.com/) にアクセス
2. プロパティ `G-HPC9WP899Q` を選択
3. リアルタイムレポートでアクセス状況を確認

### 確認できるデータ

- **リアルタイムユーザー数**
- **ページビュー数**
- **セッション時間**
- **ユーザーの地域分布**
- **デバイス情報**
- **参照元サイト**

## 🔧 メンテナンス

### ドキュメント更新

```bash
# ローカルで編集
cd docs
npm run docs:dev  # 開発サーバー起動

# 変更をプッシュ
git add .
git commit -m "docs: ドキュメント更新"
git push origin develop
```

### ビルド確認

```bash
cd docs
npm run docs:build  # 本番ビルド
npm run docs:serve  # ローカルで確認
```

## 📊 サイト統計

- **総ページ数**: 12ページ
- **対応言語**: 日本語
- **レスポンシブ対応**: ✅
- **SEO最適化**: ✅
- **アクセス解析**: ✅
- **自動デプロイ**: ✅

## 🎯 次のステップ

1. **GitHub Pages有効化** → サイト公開
2. **Analytics確認** → アクセス状況監視
3. **コンテンツ拡充** → ドキュメント追加
4. **SEO最適化** → 検索エンジン対応
5. **ユーザーフィードバック** → 改善点収集

---

🌱 **Discord Farmbot Documentation Site**  
📊 **Analytics**: G-HPC9WP899Q  
🚀 **Status**: Ready for Production