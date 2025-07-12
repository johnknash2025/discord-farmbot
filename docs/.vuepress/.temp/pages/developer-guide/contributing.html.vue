<template><div><h1 id="コントリビューションガイド" tabindex="-1"><a class="header-anchor" href="#コントリビューションガイド"><span>コントリビューションガイド</span></a></h1>
<p>Discord Farmbotプロジェクトへのコントリビューションを歓迎します！このガイドでは、プロジェクトに貢献する方法について説明します。</p>
<h2 id="🤝-コントリビューションの種類" tabindex="-1"><a class="header-anchor" href="#🤝-コントリビューションの種類"><span>🤝 コントリビューションの種類</span></a></h2>
<h3 id="_1-バグ報告" tabindex="-1"><a class="header-anchor" href="#_1-バグ報告"><span>1. バグ報告</span></a></h3>
<ul>
<li><a href="https://github.com/johnknash2025/discord-farmbot/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> でバグを報告</li>
<li>再現手順を詳細に記載</li>
<li>環境情報（OS、Node.jsバージョンなど）を含める</li>
</ul>
<h3 id="_2-機能要望" tabindex="-1"><a class="header-anchor" href="#_2-機能要望"><span>2. 機能要望</span></a></h3>
<ul>
<li><a href="https://github.com/yourusername/discord-farmbot/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> で新機能を提案</li>
<li>用途と期待される動作を明確に説明</li>
<li>可能であれば実装案も提示</li>
</ul>
<h3 id="_3-コード貢献" tabindex="-1"><a class="header-anchor" href="#_3-コード貢献"><span>3. コード貢献</span></a></h3>
<ul>
<li>バグ修正</li>
<li>新機能の実装</li>
<li>ドキュメントの改善</li>
<li>テストの追加</li>
</ul>
<h3 id="_4-ドキュメント改善" tabindex="-1"><a class="header-anchor" href="#_4-ドキュメント改善"><span>4. ドキュメント改善</span></a></h3>
<ul>
<li>README、ガイドの更新</li>
<li>コメントの追加・改善</li>
<li>翻訳の提供</li>
</ul>
<h2 id="🚀-開発環境のセットアップ" tabindex="-1"><a class="header-anchor" href="#🚀-開発環境のセットアップ"><span>🚀 開発環境のセットアップ</span></a></h2>
<h3 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件"><span>前提条件</span></a></h3>
<ul>
<li>Node.js 18以上</li>
<li>Git</li>
<li>GitHub アカウント</li>
</ul>
<h3 id="セットアップ手順" tabindex="-1"><a class="header-anchor" href="#セットアップ手順"><span>セットアップ手順</span></a></h3>
<ol>
<li>
<p><strong>リポジトリをフォーク</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># GitHubでリポジトリをフォーク後</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/yourusername/discord-farmbot.git</span>
<span class="line"><span class="token builtin class-name">cd</span> discord-farmbot</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>依存関係をインストール</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>環境変数を設定</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">cp</span> .dev.vars.example .dev.vars</span>
<span class="line"><span class="token comment"># .dev.varsを編集して必要な値を設定</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>開発サーバーを起動</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">npm</span> run start</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>ドキュメントサーバーを起動</strong>（オプション）</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> docs</span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">npm</span> run docs:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="📝-開発ワークフロー" tabindex="-1"><a class="header-anchor" href="#📝-開発ワークフロー"><span>📝 開発ワークフロー</span></a></h2>
<h3 id="_1-ブランチ戦略" tabindex="-1"><a class="header-anchor" href="#_1-ブランチ戦略"><span>1. ブランチ戦略</span></a></h3>
<ul>
<li><code v-pre>main</code>: 本番環境用の安定版</li>
<li><code v-pre>develop</code>: 開発版（新機能の統合）</li>
<li><code v-pre>feature/*</code>: 新機能開発用</li>
<li><code v-pre>bugfix/*</code>: バグ修正用</li>
<li><code v-pre>hotfix/*</code>: 緊急修正用</li>
</ul>
<h3 id="_2-作業手順" tabindex="-1"><a class="header-anchor" href="#_2-作業手順"><span>2. 作業手順</span></a></h3>
<ol>
<li>
<p><strong>イシューを作成または選択</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 新しいブランチを作成</span></span>
<span class="line"><span class="token function">git</span> checkout develop</span>
<span class="line"><span class="token function">git</span> pull origin develop</span>
<span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> feature/your-feature-name</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>コードを実装</strong></p>
<ul>
<li>小さなコミットに分割</li>
<li>分かりやすいコミットメッセージを記載</li>
</ul>
</li>
<li>
<p><strong>テストを実行</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">npm</span> <span class="token builtin class-name">test</span></span>
<span class="line"><span class="token function">npm</span> run lint</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>プルリクエストを作成</strong></p>
<ul>
<li><code v-pre>develop</code> ブランチに対してPRを作成</li>
<li>変更内容を詳細に説明</li>
<li>関連するイシューをリンク</li>
</ul>
</li>
</ol>
<h2 id="🧪-テストガイドライン" tabindex="-1"><a class="header-anchor" href="#🧪-テストガイドライン"><span>🧪 テストガイドライン</span></a></h2>
<h3 id="テストの実行" tabindex="-1"><a class="header-anchor" href="#テストの実行"><span>テストの実行</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 全テストを実行</span></span>
<span class="line"><span class="token function">npm</span> <span class="token builtin class-name">test</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 特定のテストファイルを実行</span></span>
<span class="line"><span class="token function">npm</span> <span class="token builtin class-name">test</span> tests/test-bot.js</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 環境変数のテスト</span></span>
<span class="line"><span class="token function">npm</span> run test:env</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="テストの追加" tabindex="-1"><a class="header-anchor" href="#テストの追加"><span>テストの追加</span></a></h3>
<ul>
<li>新機能には必ずテストを追加</li>
<li><code v-pre>tests/</code> ディレクトリに配置</li>
<li>ファイル名は <code v-pre>test-*.js</code> の形式</li>
</ul>
<h3 id="テストの種類" tabindex="-1"><a class="header-anchor" href="#テストの種類"><span>テストの種類</span></a></h3>
<ul>
<li><strong>単体テスト</strong>: 個別の関数・メソッドのテスト</li>
<li><strong>統合テスト</strong>: API連携のテスト</li>
<li><strong>E2Eテスト</strong>: Discord Bot全体の動作テスト</li>
</ul>
<h2 id="📋-コーディング規約" tabindex="-1"><a class="header-anchor" href="#📋-コーディング規約"><span>📋 コーディング規約</span></a></h2>
<h3 id="javascript-es6" tabindex="-1"><a class="header-anchor" href="#javascript-es6"><span>JavaScript/ES6+</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// ✅ 良い例</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">analyzeImage</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">imageData</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> geminiAPI<span class="token punctuation">.</span><span class="token function">analyze</span><span class="token punctuation">(</span>imageData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Analysis failed:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">throw</span> error<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ❌ 悪い例</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">analyzeImage</span><span class="token punctuation">(</span><span class="token parameter">imageData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> geminiAPI<span class="token punctuation">.</span><span class="token function">analyze</span><span class="token punctuation">(</span>imageData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名規則" tabindex="-1"><a class="header-anchor" href="#命名規則"><span>命名規則</span></a></h3>
<ul>
<li><strong>変数・関数</strong>: camelCase (<code v-pre>userName</code>, <code v-pre>analyzeImage</code>)</li>
<li><strong>定数</strong>: UPPER_SNAKE_CASE (<code v-pre>MAX_FILE_SIZE</code>, <code v-pre>API_ENDPOINT</code>)</li>
<li><strong>ファイル</strong>: kebab-case (<code v-pre>test-bot.js</code>, <code v-pre>image-analyzer.js</code>)</li>
</ul>
<h3 id="コメント" tabindex="-1"><a class="header-anchor" href="#コメント"><span>コメント</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 農作物画像を解析する</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Buffer<span class="token punctuation">}</span></span> <span class="token parameter">imageData</span> - 画像データ</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">options</span> - 解析オプション</span>
<span class="line"> * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">&lt;</span>Object<span class="token punctuation">></span><span class="token punctuation">}</span></span> 解析結果</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">analyzeImage</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">imageData<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 画像サイズをチェック</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>imageData<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token constant">MAX_FILE_SIZE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Image too large'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// Gemini APIで解析実行</span></span>
<span class="line">  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> geminiAPI<span class="token punctuation">.</span><span class="token function">analyze</span><span class="token punctuation">(</span>imageData<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📖-ドキュメント貢献" tabindex="-1"><a class="header-anchor" href="#📖-ドキュメント貢献"><span>📖 ドキュメント貢献</span></a></h2>
<h3 id="ドキュメントの種類" tabindex="-1"><a class="header-anchor" href="#ドキュメントの種類"><span>ドキュメントの種類</span></a></h3>
<ul>
<li><strong>ユーザーガイド</strong>: エンドユーザー向け</li>
<li><strong>開発者ガイド</strong>: 開発者向け技術文書</li>
<li><strong>API リファレンス</strong>: 関数・メソッドの詳細</li>
<li><strong>デプロイガイド</strong>: 運用・設定関連</li>
</ul>
<h3 id="markdown-規約" tabindex="-1"><a class="header-anchor" href="#markdown-規約"><span>Markdown 規約</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code class="language-markdown"><span class="line"><span class="token title important"><span class="token punctuation">#</span> 見出し1（ページタイトル）</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 見出し2（セクション）</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> 見出し3（サブセクション）</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> リスト項目</span>
<span class="line"><span class="token list punctuation">-</span> <span class="token bold"><span class="token punctuation">**</span><span class="token content">太字</span><span class="token punctuation">**</span></span>で重要な部分を強調</span>
<span class="line"><span class="token list punctuation">-</span> <span class="token code-snippet code keyword">`コード`</span>はバッククォートで囲む</span>
<span class="line"></span>
<span class="line">```bash</span>
<span class="line"><span class="token title important"><span class="token punctuation">#</span> コードブロックには言語を指定</span></span>
<span class="line">npm install</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">💡 ヒント</p>
<p>VuePressの拡張記法を活用</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">⚠️ 注意</p>
<p>重要な注意事項</p>
</div>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line"></span>
<span class="line">## 🔍 プルリクエストガイドライン</span>
<span class="line"></span>
<span class="line">### PRの作成前チェックリスト</span>
<span class="line">- [ ] コードが正常に動作する</span>
<span class="line">- [ ] テストが通る</span>
<span class="line">- [ ] リントエラーがない</span>
<span class="line">- [ ] ドキュメントが更新されている</span>
<span class="line">- [ ] コミットメッセージが適切</span>
<span class="line"></span>
<span class="line">### PRテンプレート</span>
<span class="line">```markdown</span>
<span class="line">## 概要</span>
<span class="line">このPRの目的と変更内容を簡潔に説明</span>
<span class="line"></span>
<span class="line">## 変更内容</span>
<span class="line">- [ ] 新機能の追加</span>
<span class="line">- [ ] バグ修正</span>
<span class="line">- [ ] ドキュメント更新</span>
<span class="line">- [ ] テスト追加</span>
<span class="line"></span>
<span class="line">## テスト</span>
<span class="line">- [ ] 既存テストが通る</span>
<span class="line">- [ ] 新しいテストを追加した</span>
<span class="line">- [ ] 手動テストを実行した</span>
<span class="line"></span>
<span class="line">## 関連イシュー</span>
<span class="line">Closes #123</span>
<span class="line"></span>
<span class="line">## スクリーンショット（UI変更の場合）</span>
<span class="line">変更前後の画像を添付</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="レビュープロセス" tabindex="-1"><a class="header-anchor" href="#レビュープロセス"><span>レビュープロセス</span></a></h3>
<ol>
<li><strong>自動チェック</strong>: GitHub Actions でテスト・リント実行</li>
<li><strong>コードレビュー</strong>: メンテナーによるレビュー</li>
<li><strong>修正対応</strong>: 指摘事項への対応</li>
<li><strong>マージ</strong>: 承認後に <code v-pre>develop</code> ブランチにマージ</li>
</ol>
<h2 id="🏷️-リリースプロセス" tabindex="-1"><a class="header-anchor" href="#🏷️-リリースプロセス"><span>🏷️ リリースプロセス</span></a></h2>
<h3 id="バージョニング" tabindex="-1"><a class="header-anchor" href="#バージョニング"><span>バージョニング</span></a></h3>
<p><a href="https://semver.org/" target="_blank" rel="noopener noreferrer">Semantic Versioning</a> に従います：</p>
<ul>
<li><strong>MAJOR</strong>: 破壊的変更</li>
<li><strong>MINOR</strong>: 新機能追加（後方互換性あり）</li>
<li><strong>PATCH</strong>: バグ修正</li>
</ul>
<h3 id="リリース手順" tabindex="-1"><a class="header-anchor" href="#リリース手順"><span>リリース手順</span></a></h3>
<ol>
<li><code v-pre>develop</code> → <code v-pre>main</code> へのPR作成</li>
<li>バージョン番号の更新</li>
<li>CHANGELOG.md の更新</li>
<li>リリースタグの作成</li>
<li>GitHub Releases での公開</li>
</ol>
<h2 id="🎯-優先度の高い貢献領域" tabindex="-1"><a class="header-anchor" href="#🎯-優先度の高い貢献領域"><span>🎯 優先度の高い貢献領域</span></a></h2>
<h3 id="現在募集中" tabindex="-1"><a class="header-anchor" href="#現在募集中"><span>現在募集中</span></a></h3>
<ul>
<li>[ ] <strong>多言語対応</strong>: 英語・中国語・韓国語サポート</li>
<li>[ ] <strong>新しい作物対応</strong>: 果樹・花卉類の解析精度向上</li>
<li>[ ] <strong>パフォーマンス改善</strong>: 画像処理の高速化</li>
<li>[ ] <strong>UI/UX改善</strong>: Discord上での操作性向上</li>
<li>[ ] <strong>監視・ログ</strong>: 運用監視機能の強化</li>
</ul>
<h3 id="初心者向けタスク" tabindex="-1"><a class="header-anchor" href="#初心者向けタスク"><span>初心者向けタスク</span></a></h3>
<ul>
<li>[ ] ドキュメントの誤字脱字修正</li>
<li>[ ] サンプル画像の追加</li>
<li>[ ] テストケースの追加</li>
<li>[ ] エラーメッセージの改善</li>
</ul>
<h2 id="💬-コミュニティ" tabindex="-1"><a class="header-anchor" href="#💬-コミュニティ"><span>💬 コミュニティ</span></a></h2>
<h3 id="連絡先" tabindex="-1"><a class="header-anchor" href="#連絡先"><span>連絡先</span></a></h3>
<ul>
<li><strong>Discord サーバー</strong>: <a href="https://discord.gg/Gq9jPaMX8g" target="_blank" rel="noopener noreferrer">https://discord.gg/Gq9jPaMX8g</a></li>
<li><strong>GitHub Discussions</strong>: <a href="https://github.com/yourusername/discord-farmbot/discussions" target="_blank" rel="noopener noreferrer">プロジェクトディスカッション</a></li>
<li><strong>メール</strong>: support@farmbot.example.com</li>
</ul>
<h3 id="行動規範" tabindex="-1"><a class="header-anchor" href="#行動規範"><span>行動規範</span></a></h3>
<ul>
<li>建設的で敬意のあるコミュニケーション</li>
<li>多様性と包括性の尊重</li>
<li>技術的な議論に集中</li>
<li>初心者に対する親切なサポート</li>
</ul>
<h2 id="🙏-謝辞" tabindex="-1"><a class="header-anchor" href="#🙏-謝辞"><span>🙏 謝辞</span></a></h2>
<p>Discord Farmbotプロジェクトは、以下の方々の貢献により成り立っています：</p>
<ul>
<li><strong>コアメンテナー</strong>: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">@yourusername</a></li>
<li><strong>コントリビューター</strong>: <a href="https://github.com/yourusername/discord-farmbot/graphs/contributors" target="_blank" rel="noopener noreferrer">全コントリビューター一覧</a></li>
<li><strong>コミュニティメンバー</strong>: バグ報告・機能要望・フィードバックを提供してくださる皆様</li>
</ul>
<hr>
<div class="hint-container tip">
<p class="hint-container-title">🚀 始めてみましょう！</p>
<p>初めてのコントリビューションでも大歓迎です。小さな改善から始めて、徐々に大きな機能に挑戦してみてください。質問があれば、いつでもコミュニティでお気軽にお尋ねください！</p>
</div>
</div></template>


