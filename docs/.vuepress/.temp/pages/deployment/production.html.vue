<template><div><h1 id="本番環境デプロイ" tabindex="-1"><a class="header-anchor" href="#本番環境デプロイ"><span>本番環境デプロイ</span></a></h1>
<p>Discord Farmbotを本番環境にデプロイするための完全ガイドです。</p>
<h2 id="🎯-デプロイ前の準備" tabindex="-1"><a class="header-anchor" href="#🎯-デプロイ前の準備"><span>🎯 デプロイ前の準備</span></a></h2>
<h3 id="必要なアカウント" tabindex="-1"><a class="header-anchor" href="#必要なアカウント"><span>必要なアカウント</span></a></h3>
<ol>
<li><strong>Cloudflare アカウント</strong> - Workers デプロイ用</li>
<li><strong>Discord Developer アカウント</strong> - Bot 運用用</li>
<li><strong>Google Cloud アカウント</strong> - Gemini API 利用</li>
<li><strong>GitHub アカウント</strong> - ソースコード管理</li>
</ol>
<h3 id="環境確認チェックリスト" tabindex="-1"><a class="header-anchor" href="#環境確認チェックリスト"><span>環境確認チェックリスト</span></a></h3>
<ul>
<li>[ ] ローカル開発環境で正常動作確認済み</li>
<li>[ ] 全テストがパス</li>
<li>[ ] 環境変数が正しく設定されている</li>
<li>[ ] Discord Bot の権限設定完了</li>
<li>[ ] Gemini API キーが有効</li>
</ul>
<h2 id="🚀-cloudflare-workers-デプロイ" tabindex="-1"><a class="header-anchor" href="#🚀-cloudflare-workers-デプロイ"><span>🚀 Cloudflare Workers デプロイ</span></a></h2>
<h3 id="_1-wrangler-cli-のセットアップ" tabindex="-1"><a class="header-anchor" href="#_1-wrangler-cli-のセットアップ"><span>1. Wrangler CLI のセットアップ</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Wrangler のインストール（グローバル）</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> wrangler</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Cloudflare アカウントにログイン</span></span>
<span class="line">wrangler login</span>
<span class="line"></span>
<span class="line"><span class="token comment"># アカウント情報の確認</span></span>
<span class="line">wrangler <span class="token function">whoami</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-プロジェクト設定の確認" tabindex="-1"><a class="header-anchor" href="#_2-プロジェクト設定の確認"><span>2. プロジェクト設定の確認</span></a></h3>
<p><code v-pre>wrangler.toml</code> の設定を確認：</p>
<div class="language-toml line-numbers-mode" data-highlighter="prismjs" data-ext="toml"><pre v-pre><code class="language-toml"><span class="line"><span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">"discord-farmbot"</span></span>
<span class="line"><span class="token key property">main</span> <span class="token punctuation">=</span> <span class="token string">"farmbot.js"</span></span>
<span class="line"><span class="token key property">compatibility_date</span> <span class="token punctuation">=</span> <span class="token string">"2023-10-30"</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token table class-name">vars</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 公開可能な設定値のみここに記載</span></span>
<span class="line"><span class="token comment"># シークレットは wrangler secret で設定</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 例：デバッグモード（本番では false）</span></span>
<span class="line"><span class="token key property">DEBUG_MODE</span> <span class="token punctuation">=</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token key property">LOG_LEVEL</span> <span class="token punctuation">=</span> <span class="token string">"info"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-環境変数-シークレット-の設定" tabindex="-1"><a class="header-anchor" href="#_3-環境変数-シークレット-の設定"><span>3. 環境変数（シークレット）の設定</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Discord 設定</span></span>
<span class="line">wrangler secret put DISCORD_PUBLIC_KEY</span>
<span class="line"><span class="token comment"># プロンプト: Discord Developer Portal の Public Key を入力</span></span>
<span class="line"></span>
<span class="line">wrangler secret put DISCORD_BOT_TOKEN</span>
<span class="line"><span class="token comment"># プロンプト: Discord Bot Token を入力</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Gemini API 設定</span></span>
<span class="line">wrangler secret put GEMINI_API_KEY</span>
<span class="line"><span class="token comment"># プロンプト: Google AI Studio の API Key を入力</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 設定確認</span></span>
<span class="line">wrangler secret list</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-デプロイ実行" tabindex="-1"><a class="header-anchor" href="#_4-デプロイ実行"><span>4. デプロイ実行</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 本番環境にデプロイ</span></span>
<span class="line"><span class="token function">npm</span> run deploy</span>
<span class="line"></span>
<span class="line"><span class="token comment"># または直接実行</span></span>
<span class="line">wrangler deploy</span>
<span class="line"></span>
<span class="line"><span class="token comment"># デプロイ状況の確認</span></span>
<span class="line">wrangler deployments list</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-デプロイ後の確認" tabindex="-1"><a class="header-anchor" href="#_5-デプロイ後の確認"><span>5. デプロイ後の確認</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># ヘルスチェック</span></span>
<span class="line"><span class="token function">curl</span> https://discord-farmbot.your-subdomain.workers.dev/health</span>
<span class="line"></span>
<span class="line"><span class="token comment"># ログの監視</span></span>
<span class="line">wrangler <span class="token function">tail</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># パフォーマンス確認</span></span>
<span class="line">wrangler metrics</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔧-discord-bot-設定" tabindex="-1"><a class="header-anchor" href="#🔧-discord-bot-設定"><span>🔧 Discord Bot 設定</span></a></h2>
<h3 id="_1-interactions-endpoint-url-の更新" tabindex="-1"><a class="header-anchor" href="#_1-interactions-endpoint-url-の更新"><span>1. Interactions Endpoint URL の更新</span></a></h3>
<ol>
<li><a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer">Discord Developer Portal</a> を開く</li>
<li>アプリケーションを選択</li>
<li>&quot;General Information&quot; → &quot;Interactions Endpoint URL&quot; を更新</li>
<li>Workers の URL を設定：<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://discord-farmbot.your-subdomain.workers.dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_2-bot-権限の最終確認" tabindex="-1"><a class="header-anchor" href="#_2-bot-権限の最終確認"><span>2. Bot 権限の最終確認</span></a></h3>
<p>必要な権限が設定されていることを確認：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 必要な権限の計算値</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">REQUIRED_PERMISSIONS</span> <span class="token operator">=</span> </span>
<span class="line">  <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">|</span>  <span class="token comment">// Send Messages</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">15</span><span class="token punctuation">)</span> <span class="token operator">|</span>  <span class="token comment">// Read Message History  </span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">35</span><span class="token punctuation">)</span> <span class="token operator">|</span>  <span class="token comment">// Use Slash Commands</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">34</span><span class="token punctuation">)</span> <span class="token operator">|</span>  <span class="token comment">// Create Public Threads</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">38</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Send Messages in Threads</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 権限値: 274877975552</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-slash-commands-の登録" tabindex="-1"><a class="header-anchor" href="#_3-slash-commands-の登録"><span>3. Slash Commands の登録</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 本番環境用のコマンド登録</span></span>
<span class="line"><span class="token function">node</span> scripts/register-commands.js</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 特定のサーバー（ギルド）に即座に反映</span></span>
<span class="line"><span class="token function">node</span> scripts/register-commands.js guild YOUR_GUILD_ID</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📊-監視とログ" tabindex="-1"><a class="header-anchor" href="#📊-監視とログ"><span>📊 監視とログ</span></a></h2>
<h3 id="_1-リアルタイム監視" tabindex="-1"><a class="header-anchor" href="#_1-リアルタイム監視"><span>1. リアルタイム監視</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># ログのリアルタイム監視</span></span>
<span class="line">wrangler <span class="token function">tail</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># フィルタ付き監視</span></span>
<span class="line">wrangler <span class="token function">tail</span> <span class="token parameter variable">--format</span> pretty</span>
<span class="line"></span>
<span class="line"><span class="token comment"># エラーのみ監視</span></span>
<span class="line">wrangler <span class="token function">tail</span> <span class="token parameter variable">--status</span> error</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-メトリクス確認" tabindex="-1"><a class="header-anchor" href="#_2-メトリクス確認"><span>2. メトリクス確認</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 使用量統計</span></span>
<span class="line">wrangler metrics</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 詳細なメトリクス</span></span>
<span class="line">wrangler analytics</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-ログ分析" tabindex="-1"><a class="header-anchor" href="#_3-ログ分析"><span>3. ログ分析</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// farmbot.js でのログ出力例</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Production Log:'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">'image_analysis_completed'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">userId</span><span class="token operator">:</span> interaction<span class="token punctuation">.</span>user<span class="token punctuation">.</span>id<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">guildId</span><span class="token operator">:</span> interaction<span class="token punctuation">.</span>guild_id<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">processingTime</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔒-セキュリティ設定" tabindex="-1"><a class="header-anchor" href="#🔒-セキュリティ設定"><span>🔒 セキュリティ設定</span></a></h2>
<h3 id="_1-環境変数の保護" tabindex="-1"><a class="header-anchor" href="#_1-環境変数の保護"><span>1. 環境変数の保護</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 本番環境では以下を確認</span></span>
<span class="line">wrangler secret list</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 期待される出力:</span></span>
<span class="line"><span class="token comment"># DISCORD_PUBLIC_KEY</span></span>
<span class="line"><span class="token comment"># DISCORD_BOT_TOKEN  </span></span>
<span class="line"><span class="token comment"># GEMINI_API_KEY</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-cors-設定-必要に応じて" tabindex="-1"><a class="header-anchor" href="#_2-cors-設定-必要に応じて"><span>2. CORS 設定（必要に応じて）</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// farmbot.js での CORS ヘッダー設定</span></span>
<span class="line"><span class="token keyword">const</span> corsHeaders <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'Access-Control-Allow-Origin'</span><span class="token operator">:</span> <span class="token string">'https://discord.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'Access-Control-Allow-Methods'</span><span class="token operator">:</span> <span class="token string">'POST, OPTIONS'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'Access-Control-Allow-Headers'</span><span class="token operator">:</span> <span class="token string">'Content-Type, Authorization'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-レート制限の実装" tabindex="-1"><a class="header-anchor" href="#_3-レート制限の実装"><span>3. レート制限の実装</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 簡単なレート制限の例</span></span>
<span class="line"><span class="token keyword">const</span> rateLimitMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">checkRateLimit</span><span class="token punctuation">(</span><span class="token parameter">userId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> userLimit <span class="token operator">=</span> rateLimitMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">resetTime</span><span class="token operator">:</span> now <span class="token operator">+</span> <span class="token number">60000</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">></span> userLimit<span class="token punctuation">.</span>resetTime<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    userLimit<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    userLimit<span class="token punctuation">.</span>resetTime <span class="token operator">=</span> now <span class="token operator">+</span> <span class="token number">60000</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>userLimit<span class="token punctuation">.</span>count <span class="token operator">>=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 1分間に10回まで</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  userLimit<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">  rateLimitMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> userLimit<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📈-パフォーマンス最適化" tabindex="-1"><a class="header-anchor" href="#📈-パフォーマンス最適化"><span>📈 パフォーマンス最適化</span></a></h2>
<h3 id="_1-画像処理の最適化" tabindex="-1"><a class="header-anchor" href="#_1-画像処理の最適化"><span>1. 画像処理の最適化</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 画像サイズの事前チェック</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">validateImageSize</span><span class="token punctuation">(</span><span class="token parameter">imageUrl</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> maxSize <span class="token operator">=</span> <span class="token number">500</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span> <span class="token comment">// 500KB</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>imageUrl<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'HEAD'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> contentLength <span class="token operator">=</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'content-length'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> contentLength <span class="token operator">&amp;&amp;</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>contentLength<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> maxSize<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-api-レスポンス時間の改善" tabindex="-1"><a class="header-anchor" href="#_2-api-レスポンス時間の改善"><span>2. API レスポンス時間の改善</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// タイムアウト設定</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">GEMINI_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">30000</span><span class="token punctuation">;</span> <span class="token comment">// 30秒</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> timeoutId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">GEMINI_TIMEOUT</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>geminiApiUrl<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">signal</span><span class="token operator">:</span> controller<span class="token punctuation">.</span>signal<span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// ... その他の設定</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeoutId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-キャッシュ戦略" tabindex="-1"><a class="header-anchor" href="#_3-キャッシュ戦略"><span>3. キャッシュ戦略</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 結果のキャッシュ（同じ画像の再解析を避ける）</span></span>
<span class="line"><span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getCacheKey</span><span class="token punctuation">(</span><span class="token parameter">imageUrl</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 画像URLのハッシュを生成</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">btoa</span><span class="token punctuation">(</span>imageUrl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getCachedResult</span><span class="token punctuation">(</span><span class="token parameter">imageUrl</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">getCacheKey</span><span class="token punctuation">(</span>imageUrl<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🚨-トラブルシューティング" tabindex="-1"><a class="header-anchor" href="#🚨-トラブルシューティング"><span>🚨 トラブルシューティング</span></a></h2>
<h3 id="_1-デプロイエラー" tabindex="-1"><a class="header-anchor" href="#_1-デプロイエラー"><span>1. デプロイエラー</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># よくあるエラーと解決法</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Error: Authentication failed</span></span>
<span class="line">wrangler <span class="token builtin class-name">logout</span></span>
<span class="line">wrangler login</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Error: Script size too large</span></span>
<span class="line"><span class="token comment"># → 不要なファイルを除外、コードを最適化</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Error: Environment variable not found</span></span>
<span class="line">wrangler secret list</span>
<span class="line"><span class="token comment"># → 必要なシークレットを再設定</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-実行時エラー" tabindex="-1"><a class="header-anchor" href="#_2-実行時エラー"><span>2. 実行時エラー</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// エラーハンドリングの強化</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> env<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// メイン処理</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Unhandled error:'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">message</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">stack</span><span class="token operator">:</span> error<span class="token punctuation">.</span>stack<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> request<span class="token punctuation">.</span>url</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'Internal server error'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-discord-api-エラー" tabindex="-1"><a class="header-anchor" href="#_3-discord-api-エラー"><span>3. Discord API エラー</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// Discord API エラーの詳細ログ</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleDiscordError</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> errorData <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Discord API Error:'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">status</span><span class="token operator">:</span> response<span class="token punctuation">.</span>status<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">code</span><span class="token operator">:</span> errorData<span class="token punctuation">.</span>code<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">message</span><span class="token operator">:</span> errorData<span class="token punctuation">.</span>message<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">errors</span><span class="token operator">:</span> errorData<span class="token punctuation">.</span>errors</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📋-デプロイ後チェックリスト" tabindex="-1"><a class="header-anchor" href="#📋-デプロイ後チェックリスト"><span>📋 デプロイ後チェックリスト</span></a></h2>
<h3 id="即座に確認すべき項目" tabindex="-1"><a class="header-anchor" href="#即座に確認すべき項目"><span>即座に確認すべき項目</span></a></h3>
<ul>
<li>[ ] ヘルスチェックエンドポイントが応答する</li>
<li>[ ] Discord でのコマンド実行が成功する</li>
<li>[ ] 画像解析が正常に動作する</li>
<li>[ ] エラーハンドリングが適切に機能する</li>
<li>[ ] ログが正常に出力される</li>
</ul>
<h3 id="_24時間後に確認すべき項目" tabindex="-1"><a class="header-anchor" href="#_24時間後に確認すべき項目"><span>24時間後に確認すべき項目</span></a></h3>
<ul>
<li>[ ] メトリクスでエラー率を確認</li>
<li>[ ] API使用量が制限内に収まっている</li>
<li>[ ] パフォーマンスが期待値内</li>
<li>[ ] ユーザーからのフィードバック確認</li>
</ul>
<h3 id="定期的に確認すべき項目" tabindex="-1"><a class="header-anchor" href="#定期的に確認すべき項目"><span>定期的に確認すべき項目</span></a></h3>
<ul>
<li>[ ] API キーの有効期限</li>
<li>[ ] 使用量の推移</li>
<li>[ ] セキュリティアップデート</li>
<li>[ ] 依存関係の更新</li>
</ul>
<h2 id="🔄-継続的デプロイ" tabindex="-1"><a class="header-anchor" href="#🔄-継続的デプロイ"><span>🔄 継続的デプロイ</span></a></h2>
<p>GitHub Actions を使用した自動デプロイの設定は、<a href="/deployment/ci-cd.html" target="_blank" rel="noopener noreferrer">CI/CD設定ガイド</a>をご参照ください。</p>
<hr>
<div class="hint-container tip">
<p class="hint-container-title">💡 本番運用のコツ</p>
<p>本番環境では必ずログ監視を行い、エラー率やレスポンス時間を定期的にチェックしてください。異常を早期発見することで、ユーザー体験の向上につながります。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">⚠️ 重要な注意事項</p>
<p>本番環境のAPI キーやトークンは絶対に公開しないでください。また、定期的にローテーションすることをお勧めします。</p>
</div>
</div></template>


