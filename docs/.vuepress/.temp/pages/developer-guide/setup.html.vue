<template><div><h1 id="開発環境セットアップ" tabindex="-1"><a class="header-anchor" href="#開発環境セットアップ"><span>開発環境セットアップ</span></a></h1>
<p>Discord Farmbotの開発環境を構築するための詳細ガイドです。</p>
<h2 id="🛠️-必要な環境" tabindex="-1"><a class="header-anchor" href="#🛠️-必要な環境"><span>🛠️ 必要な環境</span></a></h2>
<h3 id="システム要件" tabindex="-1"><a class="header-anchor" href="#システム要件"><span>システム要件</span></a></h3>
<ul>
<li><strong>Node.js</strong>: 18.0.0 以上</li>
<li><strong>npm</strong>: 8.0.0 以上</li>
<li><strong>Git</strong>: 最新版</li>
<li><strong>エディタ</strong>: VS Code推奨</li>
</ul>
<h3 id="必要なアカウント" tabindex="-1"><a class="header-anchor" href="#必要なアカウント"><span>必要なアカウント</span></a></h3>
<ol>
<li><strong>GitHub アカウント</strong> - ソースコード管理</li>
<li><strong>Discord Developer アカウント</strong> - Bot作成</li>
<li><strong>Google Cloud アカウント</strong> - Gemini API利用</li>
<li><strong>Cloudflare アカウント</strong> - Workers デプロイ</li>
</ol>
<h2 id="📦-プロジェクトのセットアップ" tabindex="-1"><a class="header-anchor" href="#📦-プロジェクトのセットアップ"><span>📦 プロジェクトのセットアップ</span></a></h2>
<h3 id="_1-リポジトリのクローン" tabindex="-1"><a class="header-anchor" href="#_1-リポジトリのクローン"><span>1. リポジトリのクローン</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># HTTPSでクローン</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/johnknash2025/discord-farmbot.git</span>
<span class="line"><span class="token builtin class-name">cd</span> discord-farmbot</span>
<span class="line"></span>
<span class="line"><span class="token comment"># または SSH でクローン</span></span>
<span class="line"><span class="token function">git</span> clone git@github.com:johnknash2025/discord-farmbot.git</span>
<span class="line"><span class="token builtin class-name">cd</span> discord-farmbot</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-依存関係のインストール" tabindex="-1"><a class="header-anchor" href="#_2-依存関係のインストール"><span>2. 依存関係のインストール</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># メインプロジェクトの依存関係</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 開発用ツールのインストール</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># グローバルツールのインストール</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> wrangler</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-環境変数の設定" tabindex="-1"><a class="header-anchor" href="#_3-環境変数の設定"><span>3. 環境変数の設定</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># サンプルファイルをコピー</span></span>
<span class="line"><span class="token function">cp</span> .dev.vars.example .dev.vars</span>
<span class="line"></span>
<span class="line"><span class="token comment"># エディタで編集</span></span>
<span class="line">code .dev.vars</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>.dev.vars</code> ファイルの内容：</p>
<div class="language-env line-numbers-mode" data-highlighter="prismjs" data-ext="env"><pre v-pre><code class="language-env"><span class="line"># Discord Bot 設定</span>
<span class="line">DISCORD_PUBLIC_KEY=your_discord_public_key_here</span>
<span class="line">DISCORD_BOT_TOKEN=your_discord_bot_token_here</span>
<span class="line"></span>
<span class="line"># Gemini API 設定</span>
<span class="line">GEMINI_API_KEY=your_gemini_api_key_here</span>
<span class="line"></span>
<span class="line"># 開発用設定（オプション）</span>
<span class="line">DEBUG_MODE=true</span>
<span class="line">LOG_LEVEL=debug</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔑-api-キーの取得" tabindex="-1"><a class="header-anchor" href="#🔑-api-キーの取得"><span>🔑 API キーの取得</span></a></h2>
<h3 id="discord-bot-の設定" tabindex="-1"><a class="header-anchor" href="#discord-bot-の設定"><span>Discord Bot の設定</span></a></h3>
<h4 id="_1-discord-developer-portal" tabindex="-1"><a class="header-anchor" href="#_1-discord-developer-portal"><span>1. Discord Developer Portal</span></a></h4>
<ol>
<li><a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer">Discord Developer Portal</a> にアクセス</li>
<li>&quot;New Application&quot; をクリック</li>
<li>アプリケーション名を入力（例：<code v-pre>Farmbot Dev</code>）</li>
</ol>
<h4 id="_2-bot-の作成" tabindex="-1"><a class="header-anchor" href="#_2-bot-の作成"><span>2. Bot の作成</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// Bot設定の詳細</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Farmbot Dev"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"農作物画像解析Bot（開発版）"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"avatar"</span><span class="token operator">:</span> <span class="token string">"farmbot-avatar.png"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>左メニューの &quot;Bot&quot; を選択</li>
<li>&quot;Add Bot&quot; をクリック</li>
<li>&quot;Token&quot; をコピーして <code v-pre>.dev.vars</code> に設定</li>
</ol>
<h4 id="_3-権限の設定" tabindex="-1"><a class="header-anchor" href="#_3-権限の設定"><span>3. 権限の設定</span></a></h4>
<p>必要な権限：</p>
<ul>
<li><code v-pre>applications.commands</code> - スラッシュコマンド</li>
<li><code v-pre>bot</code> - Bot基本権限</li>
<li><code v-pre>Send Messages</code> - メッセージ送信</li>
<li><code v-pre>Use Slash Commands</code> - スラッシュコマンド使用</li>
<li><code v-pre>Read Message History</code> - メッセージ履歴読取</li>
<li><code v-pre>Create Public Threads</code> - パブリックスレッド作成</li>
<li><code v-pre>Send Messages in Threads</code> - スレッド内メッセージ送信</li>
</ul>
<h4 id="_4-oauth2-url-の生成" tabindex="-1"><a class="header-anchor" href="#_4-oauth2-url-の生成"><span>4. OAuth2 URL の生成</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&amp;permissions=274877975552&amp;scope=bot%20applications.commands</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="gemini-api-の設定" tabindex="-1"><a class="header-anchor" href="#gemini-api-の設定"><span>Gemini API の設定</span></a></h3>
<h4 id="_1-google-ai-studio" tabindex="-1"><a class="header-anchor" href="#_1-google-ai-studio"><span>1. Google AI Studio</span></a></h4>
<ol>
<li><a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer">Google AI Studio</a> にアクセス</li>
<li>&quot;Create API Key&quot; をクリック</li>
<li>プロジェクトを選択または新規作成</li>
<li>API キーをコピーして <code v-pre>.dev.vars</code> に設定</li>
</ol>
<h4 id="_2-api制限の確認" tabindex="-1"><a class="header-anchor" href="#_2-api制限の確認"><span>2. API制限の確認</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># API使用量の確認</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">"Authorization: Bearer <span class="token variable">$GEMINI_API_KEY</span>"</span> <span class="token punctuation">\</span></span>
<span class="line">  https://generativelanguage.googleapis.com/v1/models</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🚀-開発サーバーの起動" tabindex="-1"><a class="header-anchor" href="#🚀-開発サーバーの起動"><span>🚀 開発サーバーの起動</span></a></h2>
<h3 id="_1-ローカル開発" tabindex="-1"><a class="header-anchor" href="#_1-ローカル開発"><span>1. ローカル開発</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Wrangler 開発サーバー起動</span></span>
<span class="line"><span class="token function">npm</span> run start</span>
<span class="line"></span>
<span class="line"><span class="token comment"># または直接実行</span></span>
<span class="line">npx wrangler dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ポート指定</span></span>
<span class="line">npx wrangler dev <span class="token parameter variable">--port</span> <span class="token number">8787</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-外部アクセスの設定" tabindex="-1"><a class="header-anchor" href="#_2-外部アクセスの設定"><span>2. 外部アクセスの設定</span></a></h3>
<h4 id="ngrok-を使用" tabindex="-1"><a class="header-anchor" href="#ngrok-を使用"><span>ngrok を使用</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># ngrok のインストール</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> ngrok</span>
<span class="line"></span>
<span class="line"><span class="token comment"># トンネル作成</span></span>
<span class="line">ngrok http <span class="token number">8787</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cloudflare-tunnel-を使用" tabindex="-1"><a class="header-anchor" href="#cloudflare-tunnel-を使用"><span>Cloudflare Tunnel を使用</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># cloudflared のインストール</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @cloudflare/cloudflared</span>
<span class="line"></span>
<span class="line"><span class="token comment"># トンネル作成</span></span>
<span class="line">cloudflared tunnel <span class="token parameter variable">--url</span> http://localhost:8787</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-discord-エンドポイントの設定" tabindex="-1"><a class="header-anchor" href="#_3-discord-エンドポイントの設定"><span>3. Discord エンドポイントの設定</span></a></h3>
<ol>
<li>Discord Developer Portal を開く</li>
<li>&quot;General Information&quot; → &quot;Interactions Endpoint URL&quot; に設定</li>
<li>例：<code v-pre>https://abc123.ngrok.io</code> または <code v-pre>https://your-tunnel.trycloudflare.com</code></li>
</ol>
<h2 id="🧪-テスト環境" tabindex="-1"><a class="header-anchor" href="#🧪-テスト環境"><span>🧪 テスト環境</span></a></h2>
<h3 id="_1-単体テストの実行" tabindex="-1"><a class="header-anchor" href="#_1-単体テストの実行"><span>1. 単体テストの実行</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 全テストの実行</span></span>
<span class="line"><span class="token function">npm</span> <span class="token builtin class-name">test</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 特定のテストファイル</span></span>
<span class="line"><span class="token function">npm</span> <span class="token builtin class-name">test</span> tests/test-gemini-api.js</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 環境変数テスト</span></span>
<span class="line"><span class="token function">npm</span> <span class="token builtin class-name">test</span> tests/test-env.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-統合テストの実行" tabindex="-1"><a class="header-anchor" href="#_2-統合テストの実行"><span>2. 統合テストの実行</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Discord API テスト</span></span>
<span class="line"><span class="token function">node</span> tests/test-discord-image.js</span>
<span class="line"></span>
<span class="line"><span class="token comment"># エンドポイントテスト</span></span>
<span class="line"><span class="token function">node</span> tests/test-endpoints.js</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Bot機能テスト</span></span>
<span class="line"><span class="token function">node</span> tests/test-bot.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-手動テスト" tabindex="-1"><a class="header-anchor" href="#_3-手動テスト"><span>3. 手動テスト</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># ヘルスチェック</span></span>
<span class="line"><span class="token function">curl</span> http://localhost:8787/health</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Discord Webhook テスト</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST http://localhost:8787/ <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">"Content-Type: application/json"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-d</span> @tests/sample-discord-payload.json</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔧-開発ツールの設定" tabindex="-1"><a class="header-anchor" href="#🔧-開発ツールの設定"><span>🔧 開発ツールの設定</span></a></h2>
<h3 id="vs-code-設定" tabindex="-1"><a class="header-anchor" href="#vs-code-設定"><span>VS Code 設定</span></a></h3>
<p><code v-pre>.vscode/settings.json</code>:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"source.fixAll.eslint"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"files.associations"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"*.toml"</span><span class="token operator">:</span> <span class="token string">"toml"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"javascript.preferences.importModuleSpecifier"</span><span class="token operator">:</span> <span class="token string">"relative"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推奨拡張機能" tabindex="-1"><a class="header-anchor" href="#推奨拡張機能"><span>推奨拡張機能</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"recommendations"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">"ms-vscode.vscode-json"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"tamasfe.even-better-toml"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"bradlc.vscode-tailwindcss"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"esbenp.prettier-vscode"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"dbaeumer.vscode-eslint"</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="eslint-設定" tabindex="-1"><a class="header-anchor" href="#eslint-設定"><span>ESLint 設定</span></a></h3>
<p><code v-pre>.eslintrc.js</code>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">es2022</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'eslint:recommended'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">'latest'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'module'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'no-unused-vars'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'no-console'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'prefer-const'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📁-プロジェクト構造の理解" tabindex="-1"><a class="header-anchor" href="#📁-プロジェクト構造の理解"><span>📁 プロジェクト構造の理解</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">discord-farmbot/</span>
<span class="line">├── 📄 farmbot.js              # メインWorkerファイル</span>
<span class="line">├── 📄 package.json            # 依存関係とスクリプト</span>
<span class="line">├── 📄 wrangler.toml           # Cloudflare Workers設定</span>
<span class="line">├── 📄 .dev.vars.example       # 環境変数テンプレート</span>
<span class="line">├── 📄 .dev.vars               # 実際の環境変数（Git除外）</span>
<span class="line">├── 📁 scripts/                # ユーティリティスクリプト</span>
<span class="line">│   ├── 📄 register-commands.js # Slash Command登録</span>
<span class="line">│   └── 📄 deploy-secrets.sh   # 環境変数デプロイ</span>
<span class="line">├── 📁 tests/                  # テストファイル</span>
<span class="line">│   ├── 📄 test-env.js         # 環境変数テスト</span>
<span class="line">│   ├── 📄 test-gemini-api.js  # Gemini APIテスト</span>
<span class="line">│   ├── 📄 test-bot.js         # Bot機能テスト</span>
<span class="line">│   └── 📄 ...                 # その他のテスト</span>
<span class="line">├── 📁 docs/                   # ドキュメント（VuePress）</span>
<span class="line">│   ├── 📄 README.md           # ホームページ</span>
<span class="line">│   ├── 📁 .vuepress/          # VuePress設定</span>
<span class="line">│   ├── 📁 user-guide/         # ユーザーガイド</span>
<span class="line">│   └── 📁 developer-guide/    # 開発者ガイド</span>
<span class="line">└── 📁 .github/                # GitHub Actions</span>
<span class="line">    └── 📁 workflows/          # CI/CDワークフロー</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🐛-デバッグ方法" tabindex="-1"><a class="header-anchor" href="#🐛-デバッグ方法"><span>🐛 デバッグ方法</span></a></h2>
<h3 id="_1-ログの確認" tabindex="-1"><a class="header-anchor" href="#_1-ログの確認"><span>1. ログの確認</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Wrangler ログの監視</span></span>
<span class="line">wrangler <span class="token function">tail</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 特定のフィルタ</span></span>
<span class="line">wrangler <span class="token function">tail</span> <span class="token parameter variable">--format</span> pretty</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ローカル開発時のログ</span></span>
<span class="line"><span class="token comment"># ブラウザの開発者ツールでコンソールを確認</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-デバッグ用コード" tabindex="-1"><a class="header-anchor" href="#_2-デバッグ用コード"><span>2. デバッグ用コード</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// farmbot.js にデバッグコードを追加</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Debug: Request received'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">method</span><span class="token operator">:</span> request<span class="token punctuation">.</span>method<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">url</span><span class="token operator">:</span> request<span class="token punctuation">.</span>url<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">headers</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 環境変数の確認</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Environment check:'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">hasDiscordKey</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>env<span class="token punctuation">.</span><span class="token constant">DISCORD_PUBLIC_KEY</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">hasDiscordToken</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>env<span class="token punctuation">.</span><span class="token constant">DISCORD_BOT_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">hasGeminiKey</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>env<span class="token punctuation">.</span><span class="token constant">GEMINI_API_KEY</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-エラーハンドリング" tabindex="-1"><a class="header-anchor" href="#_3-エラーハンドリング"><span>3. エラーハンドリング</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 危険な処理</span></span>
<span class="line">  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">riskyOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error details:'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">message</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">stack</span><span class="token operator">:</span> error<span class="token punctuation">.</span>stack<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// ユーザーフレンドリーなエラーレスポンス</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Internal server error'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">'INTERNAL_ERROR'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🚀-次のステップ" tabindex="-1"><a class="header-anchor" href="#🚀-次のステップ"><span>🚀 次のステップ</span></a></h2>
<p>開発環境が整ったら：</p>
<ol>
<li><strong><a href="/developer-guide/architecture.html" target="_blank" rel="noopener noreferrer">アーキテクチャ理解</a></strong> - システム構成の学習</li>
<li><strong><a href="/developer-guide/api-reference.html" target="_blank" rel="noopener noreferrer">API リファレンス</a></strong> - API仕様の確認</li>
<li><strong><a href="/developer-guide/testing.html" target="_blank" rel="noopener noreferrer">テストガイド</a></strong> - テスト方法の学習</li>
<li><strong><a href="/developer-guide/contributing.html" target="_blank" rel="noopener noreferrer">コントリビューション</a></strong> - 開発参加方法</li>
</ol>
<hr>
<div class="hint-container tip">
<p class="hint-container-title">💡 開発のコツ</p>
<p>開発時は <code v-pre>DEBUG_MODE=true</code> を設定すると、詳細なログが出力されて問題の特定が容易になります。本番環境では必ず <code v-pre>false</code> に設定してください。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">⚠️ セキュリティ注意</p>
<p><code v-pre>.dev.vars</code> ファイルには機密情報が含まれています。絶対にGitにコミットしないよう注意してください。<code v-pre>.gitignore</code> で除外されていることを確認してください。</p>
</div>
</div></template>


