<template><div><h1 id="アーキテクチャ" tabindex="-1"><a class="header-anchor" href="#アーキテクチャ"><span>アーキテクチャ</span></a></h1>
<p>Discord Farmbotのシステム構成と技術的な設計について詳しく説明します。</p>
<h2 id="🏗️-システム概要" tabindex="-1"><a class="header-anchor" href="#🏗️-システム概要"><span>🏗️ システム概要</span></a></h2>
<p>Discord Farmbotは、サーバーレスアーキテクチャを採用したAI搭載の画像解析Botです。</p>
<div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre v-pre><code class="language-mermaid"><span class="line"><span class="token keyword">graph</span> TB</span>
<span class="line">    A<span class="token text string">[Discord User]</span> <span class="token arrow operator">--></span><span class="token label property">|/analyze command|</span> B<span class="token text string">[Discord API]</span></span>
<span class="line">    B <span class="token arrow operator">--></span> C<span class="token text string">[Cloudflare Workers]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> D<span class="token text string">[Gemini Vision API]</span></span>
<span class="line">    C <span class="token arrow operator">--></span> E<span class="token text string">[Image Processing]</span></span>
<span class="line">    D <span class="token arrow operator">--></span> F<span class="token text string">[AI Analysis]</span></span>
<span class="line">    F <span class="token arrow operator">--></span> C</span>
<span class="line">    E <span class="token arrow operator">--></span> C</span>
<span class="line">    C <span class="token arrow operator">--></span><span class="token label property">|Response|</span> B</span>
<span class="line">    B <span class="token arrow operator">--></span><span class="token label property">|Thread Reply|</span> A</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔧-技術スタック" tabindex="-1"><a class="header-anchor" href="#🔧-技術スタック"><span>🔧 技術スタック</span></a></h2>
<h3 id="コア技術" tabindex="-1"><a class="header-anchor" href="#コア技術"><span>コア技術</span></a></h3>
<ul>
<li><strong>Runtime</strong>: Cloudflare Workers (V8 JavaScript Engine)</li>
<li><strong>Language</strong>: JavaScript (ES2022)</li>
<li><strong>AI API</strong>: Google Gemini Vision API</li>
<li><strong>Platform</strong>: Discord API v10</li>
</ul>
<h3 id="開発・デプロイツール" tabindex="-1"><a class="header-anchor" href="#開発・デプロイツール"><span>開発・デプロイツール</span></a></h3>
<ul>
<li><strong>Package Manager</strong>: npm</li>
<li><strong>Bundler</strong>: Wrangler CLI</li>
<li><strong>Version Control</strong>: Git</li>
<li><strong>CI/CD</strong>: GitHub Actions</li>
</ul>
<h3 id="ドキュメント" tabindex="-1"><a class="header-anchor" href="#ドキュメント"><span>ドキュメント</span></a></h3>
<ul>
<li><strong>Documentation</strong>: VuePress 2.x</li>
<li><strong>Hosting</strong>: GitHub Pages</li>
</ul>
<h2 id="📁-プロジェクト構造" tabindex="-1"><a class="header-anchor" href="#📁-プロジェクト構造"><span>📁 プロジェクト構造</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">discord-farmbot/</span>
<span class="line">├── farmbot.js              # メインWorkerファイル</span>
<span class="line">├── package.json            # 依存関係・スクリプト定義</span>
<span class="line">├── wrangler.toml           # Cloudflare Workers設定</span>
<span class="line">├── .dev.vars.example       # 環境変数テンプレート</span>
<span class="line">├── .gitignore             # Git除外設定</span>
<span class="line">├── LICENSE                # ライセンス</span>
<span class="line">├── README.md              # プロジェクト概要</span>
<span class="line">├── CHANGELOG.md           # 変更履歴</span>
<span class="line">│</span>
<span class="line">├── scripts/               # ユーティリティスクリプト</span>
<span class="line">│   ├── deploy-secrets.sh  # 環境変数デプロイ</span>
<span class="line">│   └── register-commands.js # Discord コマンド登録</span>
<span class="line">│</span>
<span class="line">├── tests/                 # テストファイル</span>
<span class="line">│   ├── test-env.js        # 環境変数テスト</span>
<span class="line">│   ├── test-gemini-api.js # Gemini APIテスト</span>
<span class="line">│   ├── test-bot.js        # Bot機能テスト</span>
<span class="line">│   └── test-endpoints.js  # エンドポイントテスト</span>
<span class="line">│</span>
<span class="line">├── docs/                  # ドキュメント</span>
<span class="line">│   ├── .vuepress/         # VuePress設定</span>
<span class="line">│   ├── user-guide/        # ユーザーガイド</span>
<span class="line">│   ├── developer-guide/   # 開発者ガイド</span>
<span class="line">│   └── deployment/        # デプロイガイド</span>
<span class="line">│</span>
<span class="line">└── .github/               # GitHub設定</span>
<span class="line">    └── workflows/         # GitHub Actions</span>
<span class="line">        └── deploy-docs.yml # ドキュメントデプロイ</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔄-データフロー" tabindex="-1"><a class="header-anchor" href="#🔄-データフロー"><span>🔄 データフロー</span></a></h2>
<h3 id="_1-コマンド受信フロー" tabindex="-1"><a class="header-anchor" href="#_1-コマンド受信フロー"><span>1. コマンド受信フロー</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 1. Discord からのリクエスト受信</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> env</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 2. リクエスト検証</span></span>
<span class="line">    <span class="token keyword">const</span> isValid <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">verifyDiscordRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isValid<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">'Unauthorized'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">401</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 3. インタラクション処理</span></span>
<span class="line">    <span class="token keyword">const</span> interaction <span class="token operator">=</span> <span class="token keyword">await</span> request<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">handleInteraction</span><span class="token punctuation">(</span>interaction<span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-画像解析フロー" tabindex="-1"><a class="header-anchor" href="#_2-画像解析フロー"><span>2. 画像解析フロー</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 1. 画像データ取得</span></span>
<span class="line"><span class="token keyword">const</span> imageUrl <span class="token operator">=</span> interaction<span class="token punctuation">.</span>data<span class="token punctuation">.</span>resolved<span class="token punctuation">.</span>attachments<span class="token punctuation">[</span>attachmentId<span class="token punctuation">]</span><span class="token punctuation">.</span>url<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> imageResponse <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>imageUrl<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> imageBuffer <span class="token operator">=</span> <span class="token keyword">await</span> imageResponse<span class="token punctuation">.</span><span class="token function">arrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 画像検証</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>imageBuffer<span class="token punctuation">.</span>byteLength <span class="token operator">></span> <span class="token constant">MAX_FILE_SIZE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Image too large'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. Base64エンコード</span></span>
<span class="line"><span class="token keyword">const</span> base64Image <span class="token operator">=</span> <span class="token function">arrayBufferToBase64</span><span class="token punctuation">(</span>imageBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. Gemini API呼び出し</span></span>
<span class="line"><span class="token keyword">const</span> analysisResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">analyzeWithGemini</span><span class="token punctuation">(</span>base64Image<span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 5. 結果フォーマット</span></span>
<span class="line"><span class="token keyword">const</span> formattedResult <span class="token operator">=</span> <span class="token function">formatAnalysisResult</span><span class="token punctuation">(</span>analysisResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 6. Discord応答</span></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">sendFollowupMessage</span><span class="token punctuation">(</span>interaction<span class="token punctuation">,</span> formattedResult<span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🏛️-アーキテクチャパターン" tabindex="-1"><a class="header-anchor" href="#🏛️-アーキテクチャパターン"><span>🏛️ アーキテクチャパターン</span></a></h2>
<h3 id="_1-サーバーレスアーキテクチャ" tabindex="-1"><a class="header-anchor" href="#_1-サーバーレスアーキテクチャ"><span>1. サーバーレスアーキテクチャ</span></a></h3>
<p><strong>利点</strong>:</p>
<ul>
<li>✅ <strong>自動スケーリング</strong>: 負荷に応じて自動拡張</li>
<li>✅ <strong>コスト効率</strong>: 使用量に応じた課金</li>
<li>✅ <strong>メンテナンス不要</strong>: インフラ管理が不要</li>
<li>✅ <strong>高可用性</strong>: Cloudflareの分散ネットワーク</li>
</ul>
<p><strong>制約</strong>:</p>
<ul>
<li>⏱️ <strong>実行時間制限</strong>: 30秒のタイムアウト</li>
<li>💾 <strong>メモリ制限</strong>: 128MB RAM</li>
<li>🔄 <strong>ステートレス</strong>: 永続化ストレージなし</li>
</ul>
<h3 id="_2-イベント駆動アーキテクチャ" tabindex="-1"><a class="header-anchor" href="#_2-イベント駆動アーキテクチャ"><span>2. イベント駆動アーキテクチャ</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// Discord Interaction → Event Handler → Response</span></span>
<span class="line"><span class="token keyword">const</span> eventHandlers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">APPLICATION_COMMAND</span><span class="token operator">:</span> handleSlashCommand<span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">MESSAGE_COMPONENT</span><span class="token operator">:</span> handleButtonClick<span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">APPLICATION_COMMAND_AUTOCOMPLETE</span><span class="token operator">:</span> handleAutocomplete</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleInteraction</span><span class="token punctuation">(</span><span class="token parameter">interaction<span class="token punctuation">,</span> env</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> handler <span class="token operator">=</span> eventHandlers<span class="token punctuation">[</span>interaction<span class="token punctuation">.</span>type<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>handler<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">handler</span><span class="token punctuation">(</span>interaction<span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">'Unknown interaction type'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-関数型プログラミング" tabindex="-1"><a class="header-anchor" href="#_3-関数型プログラミング"><span>3. 関数型プログラミング</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 純粋関数による画像処理パイプライン</span></span>
<span class="line"><span class="token keyword">const</span> processImage <span class="token operator">=</span> <span class="token function">pipe</span><span class="token punctuation">(</span></span>
<span class="line">  validateImageSize<span class="token punctuation">,</span></span>
<span class="line">  convertToBase64<span class="token punctuation">,</span></span>
<span class="line">  enhanceImageQuality<span class="token punctuation">,</span></span>
<span class="line">  extractMetadata</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 関数合成による解析パイプライン</span></span>
<span class="line"><span class="token keyword">const</span> analyzeImage <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span></span>
<span class="line">  formatResult<span class="token punctuation">,</span></span>
<span class="line">  parseGeminiResponse<span class="token punctuation">,</span></span>
<span class="line">  callGeminiAPI<span class="token punctuation">,</span></span>
<span class="line">  preparePrompt</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔐-セキュリティアーキテクチャ" tabindex="-1"><a class="header-anchor" href="#🔐-セキュリティアーキテクチャ"><span>🔐 セキュリティアーキテクチャ</span></a></h2>
<h3 id="_1-認証・認可" tabindex="-1"><a class="header-anchor" href="#_1-認証・認可"><span>1. 認証・認可</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// Discord リクエスト検証</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">verifyDiscordRequest</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> env</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> signature <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'X-Signature-Ed25519'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> timestamp <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'X-Signature-Timestamp'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token keyword">await</span> request<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">verifySignature</span><span class="token punctuation">(</span></span>
<span class="line">    env<span class="token punctuation">.</span><span class="token constant">DISCORD_PUBLIC_KEY</span><span class="token punctuation">,</span></span>
<span class="line">    signature<span class="token punctuation">,</span></span>
<span class="line">    timestamp<span class="token punctuation">,</span></span>
<span class="line">    body</span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-環境変数管理" tabindex="-1"><a class="header-anchor" href="#_2-環境変数管理"><span>2. 環境変数管理</span></a></h3>
<div class="language-toml line-numbers-mode" data-highlighter="prismjs" data-ext="toml"><pre v-pre><code class="language-toml"><span class="line"><span class="token comment"># wrangler.toml</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token table class-name">env.production</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token key property">vars</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">ENVIRONMENT</span> <span class="token punctuation">=</span> <span class="token string">"production"</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Secrets (暗号化保存)</span></span>
<span class="line"><span class="token comment"># DISCORD_PUBLIC_KEY</span></span>
<span class="line"><span class="token comment"># DISCORD_BOT_TOKEN</span></span>
<span class="line"><span class="token comment"># GEMINI_API_KEY</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-レート制限" tabindex="-1"><a class="header-anchor" href="#_3-レート制限"><span>3. レート制限</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// API呼び出し制限</span></span>
<span class="line"><span class="token keyword">const</span> rateLimiter <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">gemini</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">RateLimiter</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 60 requests per minute</span></span>
<span class="line">  <span class="token literal-property property">discord</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">RateLimiter</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>  <span class="token comment">// 50 requests per second</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📊-パフォーマンス設計" tabindex="-1"><a class="header-anchor" href="#📊-パフォーマンス設計"><span>📊 パフォーマンス設計</span></a></h2>
<h3 id="_1-画像処理最適化" tabindex="-1"><a class="header-anchor" href="#_1-画像処理最適化"><span>1. 画像処理最適化</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 画像サイズ制限</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">MAX_FILE_SIZE</span> <span class="token operator">=</span> <span class="token number">500</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span> <span class="token comment">// 500KB</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 画像形式検証</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">SUPPORTED_FORMATS</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'image/png'</span><span class="token punctuation">,</span> <span class="token string">'image/jpeg'</span><span class="token punctuation">,</span> <span class="token string">'image/webp'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Base64エンコード最適化</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">arrayBufferToBase64</span><span class="token punctuation">(</span><span class="token parameter">buffer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> len <span class="token operator">=</span> bytes<span class="token punctuation">.</span>byteLength<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> binary <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// チャンク処理で大容量画像に対応</span></span>
<span class="line">  <span class="token keyword">const</span> chunkSize <span class="token operator">=</span> <span class="token number">8192</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i <span class="token operator">+=</span> chunkSize<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> chunk <span class="token operator">=</span> bytes<span class="token punctuation">.</span><span class="token function">subarray</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> chunkSize<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    binary <span class="token operator">+=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> chunk<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">btoa</span><span class="token punctuation">(</span>binary<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-api最適化" tabindex="-1"><a class="header-anchor" href="#_2-api最適化"><span>2. API最適化</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// Gemini API プロンプト最適化</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">ANALYSIS_PROMPT</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">農作物の画像を専門的に解析してください。</span>
<span class="line">以下の形式で回答してください：</span>
<span class="line"></span>
<span class="line">🌱 作物: [植物名]</span>
<span class="line">📅 成長段階: [段階]</span>
<span class="line">🏥 健康状態: [状態]</span>
<span class="line">💡 推奨アクション: [具体的なアドバイス]</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// レスポンス時間最適化</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">GEMINI_CONFIG</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">temperature</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>        <span class="token comment">// 一貫性重視</span></span>
<span class="line">  <span class="token literal-property property">maxOutputTokens</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>   <span class="token comment">// 出力制限</span></span>
<span class="line">  <span class="token literal-property property">topP</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>              <span class="token comment">// 品質重視</span></span>
<span class="line">  <span class="token literal-property property">topK</span><span class="token operator">:</span> <span class="token number">10</span>                <span class="token comment">// 候補制限</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-キャッシュ戦略" tabindex="-1"><a class="header-anchor" href="#_3-キャッシュ戦略"><span>3. キャッシュ戦略</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 将来実装予定: KVストレージによるキャッシュ</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getCachedAnalysis</span><span class="token punctuation">(</span><span class="token parameter">imageHash<span class="token punctuation">,</span> env</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> cached <span class="token operator">=</span> <span class="token keyword">await</span> env<span class="token punctuation">.</span><span class="token constant">ANALYSIS_CACHE</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>imageHash<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>cached<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>cached<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">setCachedAnalysis</span><span class="token punctuation">(</span><span class="token parameter">imageHash<span class="token punctuation">,</span> result<span class="token punctuation">,</span> env</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">await</span> env<span class="token punctuation">.</span><span class="token constant">ANALYSIS_CACHE</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span></span>
<span class="line">    imageHash<span class="token punctuation">,</span> </span>
<span class="line">    <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">expirationTtl</span><span class="token operator">:</span> <span class="token number">86400</span> <span class="token punctuation">}</span> <span class="token comment">// 24時間キャッシュ</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔄-状態管理" tabindex="-1"><a class="header-anchor" href="#🔄-状態管理"><span>🔄 状態管理</span></a></h2>
<h3 id="_1-ステートレス設計" tabindex="-1"><a class="header-anchor" href="#_1-ステートレス設計"><span>1. ステートレス設計</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 各リクエストは独立して処理</span></span>
<span class="line"><span class="token comment">// セッション状態は Discord Interaction Token で管理</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleSlashCommand</span><span class="token punctuation">(</span><span class="token parameter">interaction<span class="token punctuation">,</span> env</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 初期応答（3秒以内必須）</span></span>
<span class="line">  <span class="token keyword">await</span> <span class="token function">sendInitialResponse</span><span class="token punctuation">(</span>interaction<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 非同期処理</span></span>
<span class="line">  <span class="token keyword">await</span> <span class="token function">processImageAnalysis</span><span class="token punctuation">(</span>interaction<span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// フォローアップ応答</span></span>
<span class="line">  <span class="token keyword">await</span> <span class="token function">sendFollowupMessage</span><span class="token punctuation">(</span>interaction<span class="token punctuation">,</span> result<span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-エラー状態管理" tabindex="-1"><a class="header-anchor" href="#_2-エラー状態管理"><span>2. エラー状態管理</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// エラーハンドリング階層</span></span>
<span class="line"><span class="token keyword">const</span> errorHandlers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">ValidationError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">❌ </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>error<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">ephemeral</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function-variable function">APIError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'🔧 一時的な問題が発生しました。しばらく後に再試行してください。'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">ephemeral</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function-variable function">UnknownError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'⚠️ 予期しないエラーが発生しました。サポートにお問い合わせください。'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">ephemeral</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🧪-テスト戦略" tabindex="-1"><a class="header-anchor" href="#🧪-テスト戦略"><span>🧪 テスト戦略</span></a></h2>
<h3 id="_1-テスト階層" tabindex="-1"><a class="header-anchor" href="#_1-テスト階層"><span>1. テスト階層</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 単体テスト</span></span>
<span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'Image Processing'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'validates image size'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">validateImageSize</span><span class="token punctuation">(</span>largeImage<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toThrow</span><span class="token punctuation">(</span><span class="token string">'Image too large'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 統合テスト</span></span>
<span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'Gemini API Integration'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'analyzes crop image'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">analyzeWithGemini</span><span class="token punctuation">(</span>testImage<span class="token punctuation">,</span> mockEnv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span><span class="token string">'トマト'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// E2Eテスト</span></span>
<span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'Discord Bot E2E'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'handles analyze command'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">handleInteraction</span><span class="token punctuation">(</span>mockInteraction<span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-モック戦略" tabindex="-1"><a class="header-anchor" href="#_2-モック戦略"><span>2. モック戦略</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// API モック</span></span>
<span class="line"><span class="token keyword">const</span> mockGeminiAPI <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">analyze</span><span class="token operator">:</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mockResolvedValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">crop</span><span class="token operator">:</span> <span class="token string">'トマト'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">stage</span><span class="token operator">:</span> <span class="token string">'開花期'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">health</span><span class="token operator">:</span> <span class="token string">'良好'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 環境変数モック</span></span>
<span class="line"><span class="token keyword">const</span> mockEnv <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">DISCORD_PUBLIC_KEY</span><span class="token operator">:</span> <span class="token string">'test-key'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">DISCORD_BOT_TOKEN</span><span class="token operator">:</span> <span class="token string">'test-token'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">GEMINI_API_KEY</span><span class="token operator">:</span> <span class="token string">'test-api-key'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📈-監視・ログ" tabindex="-1"><a class="header-anchor" href="#📈-監視・ログ"><span>📈 監視・ログ</span></a></h2>
<h3 id="_1-ログ戦略" tabindex="-1"><a class="header-anchor" href="#_1-ログ戦略"><span>1. ログ戦略</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 構造化ログ</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">logAnalysis</span><span class="token punctuation">(</span><span class="token parameter">interaction<span class="token punctuation">,</span> result<span class="token punctuation">,</span> duration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">'image_analysis'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">user_id</span><span class="token operator">:</span> interaction<span class="token punctuation">.</span>user<span class="token punctuation">.</span>id<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">guild_id</span><span class="token operator">:</span> interaction<span class="token punctuation">.</span>guild_id<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">crop_detected</span><span class="token operator">:</span> result<span class="token punctuation">.</span>crop<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">confidence</span><span class="token operator">:</span> result<span class="token punctuation">.</span>confidence<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">duration_ms</span><span class="token operator">:</span> duration<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">image_size</span><span class="token operator">:</span> result<span class="token punctuation">.</span>imageSize</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-メトリクス" tabindex="-1"><a class="header-anchor" href="#_2-メトリクス"><span>2. メトリクス</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// パフォーマンスメトリクス</span></span>
<span class="line"><span class="token keyword">const</span> metrics <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">analysisCount</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">averageResponseTime</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">errorRate</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">apiUsage</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">gemini</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">discord</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🚀-スケーラビリティ" tabindex="-1"><a class="header-anchor" href="#🚀-スケーラビリティ"><span>🚀 スケーラビリティ</span></a></h2>
<h3 id="_1-水平スケーリング" tabindex="-1"><a class="header-anchor" href="#_1-水平スケーリング"><span>1. 水平スケーリング</span></a></h3>
<ul>
<li><strong>Cloudflare Workers</strong>: 自動的に世界中のエッジで実行</li>
<li><strong>負荷分散</strong>: Cloudflareのグローバルネットワーク</li>
<li><strong>地理的分散</strong>: ユーザーに最も近いエッジで処理</li>
</ul>
<h3 id="_2-垂直スケーリング" tabindex="-1"><a class="header-anchor" href="#_2-垂直スケーリング"><span>2. 垂直スケーリング</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// リソース使用量最適化</span></span>
<span class="line"><span class="token keyword">const</span> optimizations <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">imageProcessing</span><span class="token operator">:</span> <span class="token string">'WebAssembly実装検討'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">memoryUsage</span><span class="token operator">:</span> <span class="token string">'ストリーミング処理'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">cpuUsage</span><span class="token operator">:</span> <span class="token string">'Worker Threads活用'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔮-将来の拡張計画" tabindex="-1"><a class="header-anchor" href="#🔮-将来の拡張計画"><span>🔮 将来の拡張計画</span></a></h2>
<h3 id="_1-機能拡張" tabindex="-1"><a class="header-anchor" href="#_1-機能拡張"><span>1. 機能拡張</span></a></h3>
<ul>
<li><strong>マルチモーダル解析</strong>: 音声・動画対応</li>
<li><strong>リアルタイム監視</strong>: Cron Triggersによる定期解析</li>
<li><strong>データ蓄積</strong>: Durable Objectsによる状態管理</li>
</ul>
<h3 id="_2-アーキテクチャ進化" tabindex="-1"><a class="header-anchor" href="#_2-アーキテクチャ進化"><span>2. アーキテクチャ進化</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// マイクロサービス化</span></span>
<span class="line"><span class="token keyword">const</span> services <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">imageAnalysis</span><span class="token operator">:</span> <span class="token string">'Cloudflare Workers'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">dataStorage</span><span class="token operator">:</span> <span class="token string">'Cloudflare D1'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">fileStorage</span><span class="token operator">:</span> <span class="token string">'Cloudflare R2'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">'Cloudflare KV'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">queue</span><span class="token operator">:</span> <span class="token string">'Cloudflare Queues'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<div class="hint-container tip">
<p class="hint-container-title">💡 アーキテクチャの特徴</p>
<p>Discord Farmbotは、<strong>シンプルさ</strong>と<strong>スケーラビリティ</strong>を両立させたモダンなサーバーレスアーキテクチャを採用しています。単一ファイル構成でありながら、エンタープライズレベルの可用性と性能を実現しています。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">⚠️ 制約事項</p>
<p>Cloudflare Workersの制約（実行時間30秒、メモリ128MB）を考慮した設計となっています。大容量画像や複雑な処理には別のアプローチが必要になる場合があります。</p>
</div>
</div></template>


