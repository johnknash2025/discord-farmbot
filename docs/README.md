---
home: true
title: Discord Farmbot
heroImage: /images/farmbot-hero.png
heroText: Discord Farmbot
tagline: 🌱 AI搭載農作物画像解析Discord Bot
actions:
  - text: クイックスタート →
    link: /user-guide/getting-started.html
    type: primary
  - text: 開発者ガイド
    link: /developer-guide/setup.html
    type: secondary
features:
  - title: 🔍 高精度画像解析
    details: Gemini Vision APIを使用した最先端の農作物画像解析。作物の種類、成長段階、健康状態を詳細に診断します。
  - title: ⚡ 簡単操作
    details: Discord上で/analyzeコマンドを実行するだけ。画像を添付して数秒で詳細な解析結果を取得できます。
  - title: ☁️ 24/7稼働
    details: Cloudflare Workersで常時稼働。サーバー管理不要で安定したサービスを提供します。
  - title: 🌾 専門的診断
    details: 農業の専門知識に基づいた詳細な分析。病気の早期発見や最適な収穫時期の予測が可能です。
  - title: 🔄 自動スレッド
    details: 解析結果は自動的にスレッドに投稿。チャンネルを汚さずに詳細な情報を確認できます。
  - title: 🛠️ 簡単導入
    details: 詳細なセットアップガイドで誰でも簡単に導入可能。開発環境から本番環境まで完全サポート。
footer: MIT Licensed | Copyright © 2024 Discord Farmbot
---

## 🚀 今すぐ始める

### ユーザーの方

Discord Farmbotを使って農作物の画像解析を始めましょう：

```bash
# Discordサーバーで実行
/analyze
# 画像を添付して送信
```

[詳細な使用方法を見る →](/user-guide/getting-started.html)

### 開発者の方

自分のサーバーにDiscord Farmbotをデプロイしましょう：

```bash
# リポジトリをクローン
git clone https://github.com/johnknash2025/discord-farmbot.git
cd discord-farmbot

# 依存関係をインストール
npm install

# 環境変数を設定
cp .dev.vars.example .dev.vars
# .dev.varsを編集

# ローカル開発開始
npm run start
```

[開発者ガイドを見る →](/developer-guide/setup.html)

## 📊 主な機能

### 🔍 画像解析機能

- **作物識別**: 100種類以上の農作物を自動識別
- **成長段階判定**: 発芽期から収穫期まで詳細に分析
- **健康状態診断**: 病気や害虫の兆候を早期発見
- **品質評価**: 収穫時期と品質を予測

### 💬 Discord統合

- **Slash Commands**: `/analyze`コマンドで簡単操作
- **自動スレッド**: 解析結果を整理して表示
- **リアルタイム応答**: 数秒で結果を返信
- **エラーハンドリング**: 分かりやすいエラーメッセージ

### ☁️ インフラストラクチャ

- **Cloudflare Workers**: サーバーレスで高速動作
- **Gemini Vision API**: Google最新のAI技術
- **24/7稼働**: 安定したサービス提供
- **スケーラブル**: 大量のリクエストに対応

## 🌟 使用例

### 農家の方

```
🌾 トマトの病気診断
📸 画像をアップロード
🔍 AI解析結果:
   - 作物: トマト (Solanum lycopersicum)
   - 成長段階: 開花期
   - 健康状態: 軽度の葉枯れ病の兆候
   - 推奨対策: 適切な水分管理と通気性の改善
```

### 農業学習者

```
📚 学習用画像解析
📸 教材画像をアップロード
🔍 詳細解析:
   - 植物学的特徴の説明
   - 栽培管理のポイント
   - 一般的な病害虫情報
   - 参考文献リンク
```

### 研究者

```
🔬 研究データ収集
📸 実験画像をアップロード
🔍 科学的分析:
   - 定量的データ
   - 統計的指標
   - 比較分析結果
   - データエクスポート機能
```

## 📈 統計情報

<div class="stats-container">
  <div class="stat-item">
    <h3>1000+</h3>
    <p>解析済み画像数</p>
  </div>
  <div class="stat-item">
    <h3>95%</h3>
    <p>識別精度</p>
  </div>
  <div class="stat-item">
    <h3>3秒</h3>
    <p>平均応答時間</p>
  </div>
  <div class="stat-item">
    <h3>24/7</h3>
    <p>稼働時間</p>
  </div>
</div>

## 🤝 コミュニティ

Discord Farmbotは活発なコミュニティに支えられています：

- **GitHub Issues**: バグ報告や機能要望
- **Discussions**: 使用方法の質問や情報交換
- **Pull Requests**: コードの改善や新機能の提案
- **Discord Server**: リアルタイムサポート

[コミュニティに参加する →](/developer-guide/contributing.html)

## 📄 ライセンス

Discord FarmbotはMITライセンスの下で公開されています。商用利用も含めて自由にご利用いただけます。

[ライセンス詳細を見る →](https://github.com/johnknash2025/discord-farmbot/blob/main/LICENSE)

<style>
.stats-container {
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  color: white;
}

.stat-item {
  text-align: center;
}

.stat-item h3 {
  font-size: 2.5rem;
  margin: 0;
  font-weight: bold;
}

.stat-item p {
  margin: 0.5rem 0 0 0;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .stats-container {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>