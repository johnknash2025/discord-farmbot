<template><div><h2 id="🚀-今すぐ始める" tabindex="-1"><a class="header-anchor" href="#🚀-今すぐ始める"><span>🚀 今すぐ始める</span></a></h2>
<h3 id="ユーザーの方" tabindex="-1"><a class="header-anchor" href="#ユーザーの方"><span>ユーザーの方</span></a></h3>
<p>Discord Farmbotを使って農作物の画像解析を始めましょう：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Discordサーバーで実行</span></span>
<span class="line">/analyze</span>
<span class="line"><span class="token comment"># 画像を添付して送信</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="/user-guide/getting-started.html" target="_blank" rel="noopener noreferrer">詳細な使用方法を見る →</a></p>
<h3 id="開発者の方" tabindex="-1"><a class="header-anchor" href="#開発者の方"><span>開発者の方</span></a></h3>
<p>自分のサーバーにDiscord Farmbotをデプロイしましょう：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># リポジトリをクローン</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/johnknash2025/discord-farmbot.git</span>
<span class="line"><span class="token builtin class-name">cd</span> discord-farmbot</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 依存関係をインストール</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 環境変数を設定</span></span>
<span class="line"><span class="token function">cp</span> .dev.vars.example .dev.vars</span>
<span class="line"><span class="token comment"># .dev.varsを編集</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ローカル開発開始</span></span>
<span class="line"><span class="token function">npm</span> run start</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="/developer-guide/setup.html" target="_blank" rel="noopener noreferrer">開発者ガイドを見る →</a></p>
<h2 id="📊-主な機能" tabindex="-1"><a class="header-anchor" href="#📊-主な機能"><span>📊 主な機能</span></a></h2>
<h3 id="🔍-画像解析機能" tabindex="-1"><a class="header-anchor" href="#🔍-画像解析機能"><span>🔍 画像解析機能</span></a></h3>
<ul>
<li><strong>作物識別</strong>: 100種類以上の農作物を自動識別</li>
<li><strong>成長段階判定</strong>: 発芽期から収穫期まで詳細に分析</li>
<li><strong>健康状態診断</strong>: 病気や害虫の兆候を早期発見</li>
<li><strong>品質評価</strong>: 収穫時期と品質を予測</li>
</ul>
<h3 id="💬-discord統合" tabindex="-1"><a class="header-anchor" href="#💬-discord統合"><span>💬 Discord統合</span></a></h3>
<ul>
<li><strong>Slash Commands</strong>: <code v-pre>/analyze</code>コマンドで簡単操作</li>
<li><strong>自動スレッド</strong>: 解析結果を整理して表示</li>
<li><strong>リアルタイム応答</strong>: 数秒で結果を返信</li>
<li><strong>エラーハンドリング</strong>: 分かりやすいエラーメッセージ</li>
</ul>
<h3 id="☁️-インフラストラクチャ" tabindex="-1"><a class="header-anchor" href="#☁️-インフラストラクチャ"><span>☁️ インフラストラクチャ</span></a></h3>
<ul>
<li><strong>Cloudflare Workers</strong>: サーバーレスで高速動作</li>
<li><strong>Gemini Vision API</strong>: Google最新のAI技術</li>
<li><strong>24/7稼働</strong>: 安定したサービス提供</li>
<li><strong>スケーラブル</strong>: 大量のリクエストに対応</li>
</ul>
<h2 id="🌟-使用例" tabindex="-1"><a class="header-anchor" href="#🌟-使用例"><span>🌟 使用例</span></a></h2>
<h3 id="農家の方" tabindex="-1"><a class="header-anchor" href="#農家の方"><span>農家の方</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">🌾 トマトの病気診断</span>
<span class="line">📸 画像をアップロード</span>
<span class="line">🔍 AI解析結果:</span>
<span class="line">   - 作物: トマト (Solanum lycopersicum)</span>
<span class="line">   - 成長段階: 開花期</span>
<span class="line">   - 健康状態: 軽度の葉枯れ病の兆候</span>
<span class="line">   - 推奨対策: 適切な水分管理と通気性の改善</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="農業学習者" tabindex="-1"><a class="header-anchor" href="#農業学習者"><span>農業学習者</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">📚 学習用画像解析</span>
<span class="line">📸 教材画像をアップロード</span>
<span class="line">🔍 詳細解析:</span>
<span class="line">   - 植物学的特徴の説明</span>
<span class="line">   - 栽培管理のポイント</span>
<span class="line">   - 一般的な病害虫情報</span>
<span class="line">   - 参考文献リンク</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="研究者" tabindex="-1"><a class="header-anchor" href="#研究者"><span>研究者</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">🔬 研究データ収集</span>
<span class="line">📸 実験画像をアップロード</span>
<span class="line">🔍 科学的分析:</span>
<span class="line">   - 定量的データ</span>
<span class="line">   - 統計的指標</span>
<span class="line">   - 比較分析結果</span>
<span class="line">   - データエクスポート機能</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📈-統計情報" tabindex="-1"><a class="header-anchor" href="#📈-統計情報"><span>📈 統計情報</span></a></h2>
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
<h2 id="🤝-コミュニティ" tabindex="-1"><a class="header-anchor" href="#🤝-コミュニティ"><span>🤝 コミュニティ</span></a></h2>
<p>Discord Farmbotは活発なコミュニティに支えられています：</p>
<ul>
<li><strong>GitHub Issues</strong>: バグ報告や機能要望</li>
<li><strong>Discussions</strong>: 使用方法の質問や情報交換</li>
<li><strong>Pull Requests</strong>: コードの改善や新機能の提案</li>
<li><strong>Discord Server</strong>: リアルタイムサポート</li>
</ul>
<p><a href="/developer-guide/contributing.html" target="_blank" rel="noopener noreferrer">コミュニティに参加する →</a></p>
<h2 id="📄-ライセンス" tabindex="-1"><a class="header-anchor" href="#📄-ライセンス"><span>📄 ライセンス</span></a></h2>
<p>Discord FarmbotはMITライセンスの下で公開されています。商用利用も含めて自由にご利用いただけます。</p>
<p><a href="https://github.com/johnknash2025/discord-farmbot/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">ライセンス詳細を見る →</a></p>
</div></template>



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