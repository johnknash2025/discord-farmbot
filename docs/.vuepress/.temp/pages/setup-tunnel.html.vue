<template><div><h1 id="🌐-外部アクセス用トンネル設定" tabindex="-1"><a class="header-anchor" href="#🌐-外部アクセス用トンネル設定"><span>🌐 外部アクセス用トンネル設定</span></a></h1>
<h2 id="ngrok-のインストールと設定" tabindex="-1"><a class="header-anchor" href="#ngrok-のインストールと設定"><span>ngrok のインストールと設定</span></a></h2>
<h3 id="_1-ngrok-のインストール" tabindex="-1"><a class="header-anchor" href="#_1-ngrok-のインストール"><span>1. ngrok のインストール</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># macOS (Homebrew)</span></span>
<span class="line">brew <span class="token function">install</span> ngrok</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Windows (Chocolatey)</span></span>
<span class="line">choco <span class="token function">install</span> ngrok</span>
<span class="line"></span>
<span class="line"><span class="token comment"># または公式サイトからダウンロード</span></span>
<span class="line"><span class="token comment"># https://ngrok.com/download</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-ngrok-でトンネル作成" tabindex="-1"><a class="header-anchor" href="#_2-ngrok-でトンネル作成"><span>2. ngrok でトンネル作成</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 新しいターミナルウィンドウで実行</span></span>
<span class="line">ngrok http <span class="token number">8787</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-表示される情報" tabindex="-1"><a class="header-anchor" href="#_3-表示される情報"><span>3. 表示される情報</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">ngrok by @inconshreveable</span>
<span class="line"></span>
<span class="line">Session Status                online</span>
<span class="line">Account                       your-account</span>
<span class="line">Version                       3.x.x</span>
<span class="line">Region                        Japan (jp)</span>
<span class="line">Forwarding                    https://abc123.ngrok.io -> http://localhost:8787</span>
<span class="line">Forwarding                    http://abc123.ngrok.io -> http://localhost:8787</span>
<span class="line"></span>
<span class="line">Connections                   ttl     opn     rt1     rt5     p50     p90</span>
<span class="line">                              0       0       0.00    0.00    0.00    0.00</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-https-url-をコピー" tabindex="-1"><a class="header-anchor" href="#_4-https-url-をコピー"><span>4. HTTPS URL をコピー</span></a></h3>
<p>上記の例では <code v-pre>https://abc123.ngrok.io</code> をコピーしてください。</p>
<h2 id="代替案-cloudflare-tunnel" tabindex="-1"><a class="header-anchor" href="#代替案-cloudflare-tunnel"><span>代替案: Cloudflare Tunnel</span></a></h2>
<p>ngrok が使用できない場合は、Cloudflare Tunnel も使用可能です：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Cloudflare Tunnel のインストール</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @cloudflare/cloudflared</span>
<span class="line"></span>
<span class="line"><span class="token comment"># トンネル作成</span></span>
<span class="line">cloudflared tunnel <span class="token parameter variable">--url</span> http://localhost:8787</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="次のステップ" tabindex="-1"><a class="header-anchor" href="#次のステップ"><span>次のステップ</span></a></h2>
<ol>
<li>上記のいずれかの方法でHTTPS URLを取得</li>
<li>Discord Developer Portal でエンドポイント設定</li>
<li>実際のテスト実行</li>
</ol>
</div></template>


