# 📦 GitHub リポジトリ作成手順

## Step 1: GitHubでリポジトリ作成

1. **GitHub** (https://github.com) にアクセス
2. 右上の **"+"** → **"New repository"** をクリック
3. 以下を設定：
   - **Repository name**: `discord-farmbot`
   - **Description**: `A Discord bot for analyzing farm images using Gemini Vision API`
   - **Visibility**: Public または Private（お好みで）
   - **Initialize this repository with**: 何もチェックしない（既存プロジェクトのため）

4. **"Create repository"** をクリック

## Step 2: リモートリポジトリの追加

GitHubでリポジトリを作成したら、以下のコマンドを実行：

```bash
# GitHubリポジトリをリモートとして追加
git remote add origin https://github.com/yourusername/discord-farmbot.git

# メインブランチをpush
git push -u origin main
```

**注意**: `yourusername` を実際のGitHubユーザー名に置き換えてください。

## Step 3: 確認

GitHubリポジトリページで以下が表示されることを確認：

- ✅ README.md が表示される
- ✅ ファイル構造が正しく表示される
- ✅ コミット履歴が表示される

## 🔧 次回以降の更新

```bash
# 変更をコミット
git add .
git commit -m "機能追加: 新機能の説明"

# GitHubにプッシュ
git push origin main
```

## 📋 リポジトリ設定の推奨事項

### Issues の有効化
- Settings → Features → Issues にチェック

### Branch protection（推奨）
- Settings → Branches → Add rule
- Branch name pattern: `main`
- Require pull request reviews before merging

### Topics の追加
- About セクション → ⚙️ → Topics に以下を追加：
  - `discord-bot`
  - `agriculture`
  - `image-analysis`
  - `gemini-api`
  - `cloudflare-workers`
  - `farming`