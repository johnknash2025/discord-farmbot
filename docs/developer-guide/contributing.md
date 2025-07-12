# コントリビューションガイド

Discord Farmbotプロジェクトへのコントリビューションを歓迎します！このガイドでは、プロジェクトに貢献する方法について説明します。

## 🤝 コントリビューションの種類

### 1. バグ報告
- [GitHub Issues](https://github.com/yourusername/discord-farmbot/issues) でバグを報告
- 再現手順を詳細に記載
- 環境情報（OS、Node.jsバージョンなど）を含める

### 2. 機能要望
- [GitHub Issues](https://github.com/yourusername/discord-farmbot/issues) で新機能を提案
- 用途と期待される動作を明確に説明
- 可能であれば実装案も提示

### 3. コード貢献
- バグ修正
- 新機能の実装
- ドキュメントの改善
- テストの追加

### 4. ドキュメント改善
- README、ガイドの更新
- コメントの追加・改善
- 翻訳の提供

## 🚀 開発環境のセットアップ

### 前提条件
- Node.js 18以上
- Git
- GitHub アカウント

### セットアップ手順

1. **リポジトリをフォーク**
   ```bash
   # GitHubでリポジトリをフォーク後
   git clone https://github.com/yourusername/discord-farmbot.git
   cd discord-farmbot
   ```

2. **依存関係をインストール**
   ```bash
   npm install
   ```

3. **環境変数を設定**
   ```bash
   cp .dev.vars.example .dev.vars
   # .dev.varsを編集して必要な値を設定
   ```

4. **開発サーバーを起動**
   ```bash
   npm run start
   ```

5. **ドキュメントサーバーを起動**（オプション）
   ```bash
   cd docs
   npm install
   npm run docs:dev
   ```

## 📝 開発ワークフロー

### 1. ブランチ戦略

- `main`: 本番環境用の安定版
- `develop`: 開発版（新機能の統合）
- `feature/*`: 新機能開発用
- `bugfix/*`: バグ修正用
- `hotfix/*`: 緊急修正用

### 2. 作業手順

1. **イシューを作成または選択**
   ```bash
   # 新しいブランチを作成
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **コードを実装**
   - 小さなコミットに分割
   - 分かりやすいコミットメッセージを記載

3. **テストを実行**
   ```bash
   npm test
   npm run lint
   ```

4. **プルリクエストを作成**
   - `develop` ブランチに対してPRを作成
   - 変更内容を詳細に説明
   - 関連するイシューをリンク

## 🧪 テストガイドライン

### テストの実行
```bash
# 全テストを実行
npm test

# 特定のテストファイルを実行
npm test tests/test-bot.js

# 環境変数のテスト
npm run test:env
```

### テストの追加
- 新機能には必ずテストを追加
- `tests/` ディレクトリに配置
- ファイル名は `test-*.js` の形式

### テストの種類
- **単体テスト**: 個別の関数・メソッドのテスト
- **統合テスト**: API連携のテスト
- **E2Eテスト**: Discord Bot全体の動作テスト

## 📋 コーディング規約

### JavaScript/ES6+
```javascript
// ✅ 良い例
const analyzeImage = async (imageData) => {
  try {
    const result = await geminiAPI.analyze(imageData);
    return result;
  } catch (error) {
    console.error('Analysis failed:', error);
    throw error;
  }
};

// ❌ 悪い例
function analyzeImage(imageData) {
  return geminiAPI.analyze(imageData);
}
```

### 命名規則
- **変数・関数**: camelCase (`userName`, `analyzeImage`)
- **定数**: UPPER_SNAKE_CASE (`MAX_FILE_SIZE`, `API_ENDPOINT`)
- **ファイル**: kebab-case (`test-bot.js`, `image-analyzer.js`)

### コメント
```javascript
/**
 * 農作物画像を解析する
 * @param {Buffer} imageData - 画像データ
 * @param {Object} options - 解析オプション
 * @returns {Promise<Object>} 解析結果
 */
const analyzeImage = async (imageData, options = {}) => {
  // 画像サイズをチェック
  if (imageData.length > MAX_FILE_SIZE) {
    throw new Error('Image too large');
  }
  
  // Gemini APIで解析実行
  const result = await geminiAPI.analyze(imageData, options);
  return result;
};
```

## 📖 ドキュメント貢献

### ドキュメントの種類
- **ユーザーガイド**: エンドユーザー向け
- **開発者ガイド**: 開発者向け技術文書
- **API リファレンス**: 関数・メソッドの詳細
- **デプロイガイド**: 運用・設定関連

### Markdown 規約
```markdown
# 見出し1（ページタイトル）

## 見出し2（セクション）

### 見出し3（サブセクション）

- リスト項目
- **太字**で重要な部分を強調
- `コード`はバッククォートで囲む

```bash
# コードブロックには言語を指定
npm install
```

::: tip 💡 ヒント
VuePressの拡張記法を活用
:::

::: warning ⚠️ 注意
重要な注意事項
:::
```

## 🔍 プルリクエストガイドライン

### PRの作成前チェックリスト
- [ ] コードが正常に動作する
- [ ] テストが通る
- [ ] リントエラーがない
- [ ] ドキュメントが更新されている
- [ ] コミットメッセージが適切

### PRテンプレート
```markdown
## 概要
このPRの目的と変更内容を簡潔に説明

## 変更内容
- [ ] 新機能の追加
- [ ] バグ修正
- [ ] ドキュメント更新
- [ ] テスト追加

## テスト
- [ ] 既存テストが通る
- [ ] 新しいテストを追加した
- [ ] 手動テストを実行した

## 関連イシュー
Closes #123

## スクリーンショット（UI変更の場合）
変更前後の画像を添付
```

### レビュープロセス
1. **自動チェック**: GitHub Actions でテスト・リント実行
2. **コードレビュー**: メンテナーによるレビュー
3. **修正対応**: 指摘事項への対応
4. **マージ**: 承認後に `develop` ブランチにマージ

## 🏷️ リリースプロセス

### バージョニング
[Semantic Versioning](https://semver.org/) に従います：
- **MAJOR**: 破壊的変更
- **MINOR**: 新機能追加（後方互換性あり）
- **PATCH**: バグ修正

### リリース手順
1. `develop` → `main` へのPR作成
2. バージョン番号の更新
3. CHANGELOG.md の更新
4. リリースタグの作成
5. GitHub Releases での公開

## 🎯 優先度の高い貢献領域

### 現在募集中
- [ ] **多言語対応**: 英語・中国語・韓国語サポート
- [ ] **新しい作物対応**: 果樹・花卉類の解析精度向上
- [ ] **パフォーマンス改善**: 画像処理の高速化
- [ ] **UI/UX改善**: Discord上での操作性向上
- [ ] **監視・ログ**: 運用監視機能の強化

### 初心者向けタスク
- [ ] ドキュメントの誤字脱字修正
- [ ] サンプル画像の追加
- [ ] テストケースの追加
- [ ] エラーメッセージの改善

## 💬 コミュニティ

### 連絡先
- **Discord サーバー**: [https://discord.gg/Gq9jPaMX8g](https://discord.gg/Gq9jPaMX8g)
- **GitHub Discussions**: [プロジェクトディスカッション](https://github.com/yourusername/discord-farmbot/discussions)
- **メール**: support@farmbot.example.com

### 行動規範
- 建設的で敬意のあるコミュニケーション
- 多様性と包括性の尊重
- 技術的な議論に集中
- 初心者に対する親切なサポート

## 🙏 謝辞

Discord Farmbotプロジェクトは、以下の方々の貢献により成り立っています：

- **コアメンテナー**: [@yourusername](https://github.com/yourusername)
- **コントリビューター**: [全コントリビューター一覧](https://github.com/yourusername/discord-farmbot/graphs/contributors)
- **コミュニティメンバー**: バグ報告・機能要望・フィードバックを提供してくださる皆様

---

::: tip 🚀 始めてみましょう！
初めてのコントリビューションでも大歓迎です。小さな改善から始めて、徐々に大きな機能に挑戦してみてください。質問があれば、いつでもコミュニティでお気軽にお尋ねください！
:::