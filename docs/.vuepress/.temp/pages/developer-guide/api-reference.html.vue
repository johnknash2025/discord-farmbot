<template><div><h1 id="api-リファレンス" tabindex="-1"><a class="header-anchor" href="#api-リファレンス"><span>API リファレンス</span></a></h1>
<p>Discord Farmbotの内部API仕様とCloudflare Workers実装の詳細説明です。</p>
<h2 id="🌐-エンドポイント一覧" tabindex="-1"><a class="header-anchor" href="#🌐-エンドポイント一覧"><span>🌐 エンドポイント一覧</span></a></h2>
<h3 id="ベースurl" tabindex="-1"><a class="header-anchor" href="#ベースurl"><span>ベースURL</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://discord-farmbot.your-domain.workers.dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="利用可能なエンドポイント" tabindex="-1"><a class="header-anchor" href="#利用可能なエンドポイント"><span>利用可能なエンドポイント</span></a></h3>
<table>
<thead>
<tr>
<th>エンドポイント</th>
<th>メソッド</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/</code></td>
<td>POST</td>
<td>Discord Interaction Webhook</td>
</tr>
<tr>
<td><code v-pre>/health</code></td>
<td>GET</td>
<td>ヘルスチェック</td>
</tr>
</tbody>
</table>
<h2 id="📡-discord-interaction-api" tabindex="-1"><a class="header-anchor" href="#📡-discord-interaction-api"><span>📡 Discord Interaction API</span></a></h2>
<h3 id="post" tabindex="-1"><a class="header-anchor" href="#post"><span>POST <code v-pre>/</code></span></a></h3>
<p>Discord からの Interaction を処理するメインエンドポイントです。</p>
<h4 id="リクエストヘッダー" tabindex="-1"><a class="header-anchor" href="#リクエストヘッダー"><span>リクエストヘッダー</span></a></h4>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code class="language-http"><span class="line"><span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">X-Signature-Ed25519</span><span class="token punctuation">:</span> <span class="token header-value">{signature}</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">X-Signature-Timestamp</span><span class="token punctuation">:</span> <span class="token header-value">{timestamp}</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Discord-Interactions/1.0</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="署名検証" tabindex="-1"><a class="header-anchor" href="#署名検証"><span>署名検証</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> nacl <span class="token keyword">from</span> <span class="token string">'tweetnacl'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">verifySignature</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> body<span class="token punctuation">,</span> publicKey</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> signature <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'X-Signature-Ed25519'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> timestamp <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'X-Signature-Timestamp'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>signature <span class="token operator">||</span> <span class="token operator">!</span>timestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> message <span class="token operator">=</span> timestamp <span class="token operator">+</span> body<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> signatureBytes <span class="token operator">=</span> <span class="token function">hexToBytes</span><span class="token punctuation">(</span>signature<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> messageBytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> publicKeyBytes <span class="token operator">=</span> <span class="token function">hexToBytes</span><span class="token punctuation">(</span>publicKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> nacl<span class="token punctuation">.</span>sign<span class="token punctuation">.</span>detached<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span></span>
<span class="line">    messageBytes<span class="token punctuation">,</span></span>
<span class="line">    signatureBytes<span class="token punctuation">,</span></span>
<span class="line">    publicKeyBytes</span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="リクエストボディ-ping" tabindex="-1"><a class="header-anchor" href="#リクエストボディ-ping"><span>リクエストボディ（Ping）</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"interaction_id"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"application_id"</span><span class="token operator">:</span> <span class="token string">"app_id"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">"interaction_token"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="レスポンス-pong" tabindex="-1"><a class="header-anchor" href="#レスポンス-pong"><span>レスポンス（Pong）</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="リクエストボディ-application-command" tabindex="-1"><a class="header-anchor" href="#リクエストボディ-application-command"><span>リクエストボディ（Application Command）</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"interaction_id"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"application_id"</span><span class="token operator">:</span> <span class="token string">"app_id"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">"interaction_token"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"channel_id"</span><span class="token operator">:</span> <span class="token string">"channel_id"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"guild_id"</span><span class="token operator">:</span> <span class="token string">"guild_id"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"member"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"user"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"user_id"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"username"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"discriminator"</span><span class="token operator">:</span> <span class="token string">"0001"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"command_id"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"analyze"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"image"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"attachment_id"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"resolved"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"attachments"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"attachment_id"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"attachment_id"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"filename"</span><span class="token operator">:</span> <span class="token string">"image.jpg"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"size"</span><span class="token operator">:</span> <span class="token number">123456</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://cdn.discordapp.com/attachments/..."</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"proxy_url"</span><span class="token operator">:</span> <span class="token string">"https://media.discordapp.net/attachments/..."</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"content_type"</span><span class="token operator">:</span> <span class="token string">"image/jpeg"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">1920</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">1080</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="レスポンス-initial-response" tabindex="-1"><a class="header-anchor" href="#レスポンス-initial-response"><span>レスポンス（Initial Response）</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"content"</span><span class="token operator">:</span> <span class="token string">"🔍 画像を解析中です..."</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"flags"</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🤖-gemini-vision-api-統合" tabindex="-1"><a class="header-anchor" href="#🤖-gemini-vision-api-統合"><span>🤖 Gemini Vision API 統合</span></a></h2>
<h3 id="画像解析フロー" tabindex="-1"><a class="header-anchor" href="#画像解析フロー"><span>画像解析フロー</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">analyzeImage</span><span class="token punctuation">(</span><span class="token parameter">imageUrl<span class="token punctuation">,</span> apiKey</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 1. 画像をダウンロード</span></span>
<span class="line">  <span class="token keyword">const</span> imageResponse <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>imageUrl<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> imageBuffer <span class="token operator">=</span> <span class="token keyword">await</span> imageResponse<span class="token punctuation">.</span><span class="token function">arrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> base64Image <span class="token operator">=</span> <span class="token function">arrayBufferToBase64</span><span class="token punctuation">(</span>imageBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 2. Gemini API リクエスト</span></span>
<span class="line">  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://generativelanguage.googleapis.com/v1/models/gemini-pro-vision:generateContent?key=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>apiKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">contents</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">parts</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token constant">ANALYSIS_PROMPT</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">inline_data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">mime_type</span><span class="token operator">:</span> imageResponse<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'content-type'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">data</span><span class="token operator">:</span> base64Image</span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">generationConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">temperature</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">topK</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">topP</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">maxOutputTokens</span><span class="token operator">:</span> <span class="token number">2048</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解析プロンプト" tabindex="-1"><a class="header-anchor" href="#解析プロンプト"><span>解析プロンプト</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token constant">ANALYSIS_PROMPT</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">あなたは農業の専門家です。提供された農作物の画像を詳細に分析し、以下の形式で日本語で回答してください：</span>
<span class="line"></span>
<span class="line">🌱 **作物解析結果**</span>
<span class="line"></span>
<span class="line">**基本情報**</span>
<span class="line">• 作物: [作物名] ([学名])</span>
<span class="line">• 品種: [品種名（分かる場合）]</span>
<span class="line">• 成長段階: [発芽期/幼苗期/成長期/開花期/結実期/成熟期]</span>
<span class="line"></span>
<span class="line">**健康状態評価**</span>
<span class="line">• 総合評価: [⭐1-5個で評価]</span>
<span class="line">• 葉の状態: [詳細な観察結果]</span>
<span class="line">• 茎の状態: [詳細な観察結果]</span>
<span class="line">• 根の状態: [見える場合のみ]</span>
<span class="line">• 花・果実の状態: [該当する場合のみ]</span>
<span class="line"></span>
<span class="line">**病害虫診断**</span>
<span class="line">• 病気の兆候: [具体的な病名と症状]</span>
<span class="line">• 害虫の被害: [虫害の種類と程度]</span>
<span class="line">• 栄養障害: [欠乏症状の有無]</span>
<span class="line"></span>
<span class="line">**栽培環境評価**</span>
<span class="line">• 土壌状態: [水分、栄養、pH等の推定]</span>
<span class="line">• 日照条件: [光量と質の評価]</span>
<span class="line">• 栽培管理: [支柱、剪定等の状況]</span>
<span class="line"></span>
<span class="line">**推奨アクション**</span>
<span class="line">• 🚰 水やり: [頻度と量の推奨]</span>
<span class="line">• 🌿 剪定: [必要な剪定作業]</span>
<span class="line">• 🏗️ 支柱: [支柱設置の必要性]</span>
<span class="line">• 🍯 追肥: [肥料の種類とタイミング]</span>
<span class="line">• 🛡️ 病害虫対策: [具体的な対策方法]</span>
<span class="line"></span>
<span class="line">**注意事項**</span>
<span class="line">• [重要な注意点や警告]</span>
<span class="line">• [専門家への相談が必要な場合]</span>
<span class="line"></span>
<span class="line">画像から読み取れない情報については「画像からは判断できません」と記載してください。</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔄-discord-follow-up-api" tabindex="-1"><a class="header-anchor" href="#🔄-discord-follow-up-api"><span>🔄 Discord Follow-up API</span></a></h2>
<h3 id="スレッド作成とメッセージ送信" tabindex="-1"><a class="header-anchor" href="#スレッド作成とメッセージ送信"><span>スレッド作成とメッセージ送信</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sendFollowupMessage</span><span class="token punctuation">(</span><span class="token parameter">interactionToken<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> webhookUrl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://discord.com/api/v10/webhooks/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">APPLICATION_ID</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>interactionToken<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 元のメッセージを更新</span></span>
<span class="line">  <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>webhookUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/messages/@original</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'PATCH'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'✅ 解析完了！詳細はスレッドをご確認ください。'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// スレッドを作成</span></span>
<span class="line">  <span class="token keyword">const</span> threadResponse <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://discord.com/api/v10/channels/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>channelId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/threads</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'Authorization'</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bot </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">BOT_TOKEN</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'🌱 解析結果'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token comment">// PUBLIC_THREAD</span></span>
<span class="line">        <span class="token literal-property property">auto_archive_duration</span><span class="token operator">:</span> <span class="token number">1440</span> <span class="token comment">// 24時間</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> thread <span class="token operator">=</span> <span class="token keyword">await</span> threadResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// スレッドにメッセージを送信</span></span>
<span class="line">  <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>webhookUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?thread_id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>thread<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">content</span><span class="token operator">:</span> content</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔍-ヘルスチェック-api" tabindex="-1"><a class="header-anchor" href="#🔍-ヘルスチェック-api"><span>🔍 ヘルスチェック API</span></a></h2>
<h3 id="get-health" tabindex="-1"><a class="header-anchor" href="#get-health"><span>GET <code v-pre>/health</code></span></a></h3>
<p>サービスの稼働状況を確認するエンドポイントです。</p>
<h4 id="レスポンス" tabindex="-1"><a class="header-anchor" href="#レスポンス"><span>レスポンス</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"ok"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token string">"2024-01-15T10:30:00.000Z"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"endpoints"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"health"</span><span class="token operator">:</span> <span class="token string">"/health"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"discord"</span><span class="token operator">:</span> <span class="token string">"/ (POST only)"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"gemini_api"</span><span class="token operator">:</span> <span class="token string">"available"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"discord_api"</span><span class="token operator">:</span> <span class="token string">"available"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ステータスコード" tabindex="-1"><a class="header-anchor" href="#ステータスコード"><span>ステータスコード</span></a></h4>
<table>
<thead>
<tr>
<th>コード</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td>200</td>
<td>正常稼働</td>
</tr>
<tr>
<td>503</td>
<td>サービス利用不可</td>
</tr>
</tbody>
</table>
<h2 id="🛡️-エラーハンドリング" tabindex="-1"><a class="header-anchor" href="#🛡️-エラーハンドリング"><span>🛡️ エラーハンドリング</span></a></h2>
<h3 id="エラーレスポンス形式" tabindex="-1"><a class="header-anchor" href="#エラーレスポンス形式"><span>エラーレスポンス形式</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"error"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"ERROR_CODE"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Human readable error message"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"details"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"Additional error details"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token string">"2024-01-15T10:30:00.000Z"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="エラーコード一覧" tabindex="-1"><a class="header-anchor" href="#エラーコード一覧"><span>エラーコード一覧</span></a></h3>
<table>
<thead>
<tr>
<th>コード</th>
<th>説明</th>
<th>HTTPステータス</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>INVALID_SIGNATURE</code></td>
<td>Discord署名検証失敗</td>
<td>401</td>
</tr>
<tr>
<td><code v-pre>MISSING_IMAGE</code></td>
<td>画像が添付されていない</td>
<td>400</td>
</tr>
<tr>
<td><code v-pre>IMAGE_TOO_LARGE</code></td>
<td>画像サイズが制限を超過</td>
<td>400</td>
</tr>
<tr>
<td><code v-pre>UNSUPPORTED_FORMAT</code></td>
<td>対応していない画像形式</td>
<td>400</td>
</tr>
<tr>
<td><code v-pre>GEMINI_API_ERROR</code></td>
<td>Gemini API呼び出しエラー</td>
<td>502</td>
</tr>
<tr>
<td><code v-pre>DISCORD_API_ERROR</code></td>
<td>Discord API呼び出しエラー</td>
<td>502</td>
</tr>
<tr>
<td><code v-pre>INTERNAL_ERROR</code></td>
<td>内部サーバーエラー</td>
<td>500</td>
</tr>
</tbody>
</table>
<h3 id="エラーハンドリング実装例" tabindex="-1"><a class="header-anchor" href="#エラーハンドリング実装例"><span>エラーハンドリング実装例</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">FarmbotError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span> message<span class="token punctuation">,</span> details <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>details <span class="token operator">=</span> details<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">handleError</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error occurred:'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">code</span><span class="token operator">:</span> error<span class="token punctuation">.</span>code<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">message</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">details</span><span class="token operator">:</span> error<span class="token punctuation">.</span>details<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> request<span class="token punctuation">.</span>url<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> statusMap <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'INVALID_SIGNATURE'</span><span class="token operator">:</span> <span class="token number">401</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'MISSING_IMAGE'</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'IMAGE_TOO_LARGE'</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'UNSUPPORTED_FORMAT'</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'GEMINI_API_ERROR'</span><span class="token operator">:</span> <span class="token number">502</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'DISCORD_API_ERROR'</span><span class="token operator">:</span> <span class="token number">502</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'INTERNAL_ERROR'</span><span class="token operator">:</span> <span class="token number">500</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> status <span class="token operator">=</span> statusMap<span class="token punctuation">[</span>error<span class="token punctuation">.</span>code<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">500</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">code</span><span class="token operator">:</span> error<span class="token punctuation">.</span>code<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">message</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">details</span><span class="token operator">:</span> error<span class="token punctuation">.</span>details</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    status<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📊-レート制限" tabindex="-1"><a class="header-anchor" href="#📊-レート制限"><span>📊 レート制限</span></a></h2>
<h3 id="discord-api制限" tabindex="-1"><a class="header-anchor" href="#discord-api制限"><span>Discord API制限</span></a></h3>
<ul>
<li><strong>グローバル</strong>: 50リクエスト/秒</li>
<li><strong>Webhook</strong>: 5リクエスト/秒</li>
<li><strong>スレッド作成</strong>: 10リクエスト/10分</li>
</ul>
<h3 id="gemini-api制限" tabindex="-1"><a class="header-anchor" href="#gemini-api制限"><span>Gemini API制限</span></a></h3>
<ul>
<li><strong>無料枠</strong>: 60リクエスト/分</li>
<li><strong>画像サイズ</strong>: 20MB以下</li>
<li><strong>レスポンス</strong>: 30秒タイムアウト</li>
</ul>
<h3 id="実装での制限対応" tabindex="-1"><a class="header-anchor" href="#実装での制限対応"><span>実装での制限対応</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">RateLimiter</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">maxRequests<span class="token punctuation">,</span> windowMs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>maxRequests <span class="token operator">=</span> maxRequests<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>windowMs <span class="token operator">=</span> windowMs<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>requests <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">isAllowed</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> windowStart <span class="token operator">=</span> now <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>windowMs<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>requests<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>requests<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">const</span> userRequests <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>requests<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 古いリクエストを削除</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>userRequests<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> userRequests<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> windowStart<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      userRequests<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>userRequests<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxRequests<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    userRequests<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> geminiLimiter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RateLimiter</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 60req/min</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔐-セキュリティ" tabindex="-1"><a class="header-anchor" href="#🔐-セキュリティ"><span>🔐 セキュリティ</span></a></h2>
<h3 id="環境変数の管理" tabindex="-1"><a class="header-anchor" href="#環境変数の管理"><span>環境変数の管理</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 本番環境での設定</span></span>
<span class="line">wrangler secret put DISCORD_PUBLIC_KEY</span>
<span class="line">wrangler secret put DISCORD_BOT_TOKEN</span>
<span class="line">wrangler secret put GEMINI_API_KEY</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 設定確認</span></span>
<span class="line">wrangler secret list</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cors設定" tabindex="-1"><a class="header-anchor" href="#cors設定"><span>CORS設定</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">setCORSHeaders</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Methods'</span><span class="token punctuation">,</span> <span class="token string">'GET, POST, OPTIONS'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Headers'</span><span class="token punctuation">,</span> <span class="token string">'Content-Type'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> response<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<div class="hint-container tip">
<p class="hint-container-title">💡 開発のヒント</p>
<p>API開発時は、Postmanやcurlを使用してエンドポイントをテストすることをお勧めします。特に署名検証のテストには注意が必要です。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">⚠️ セキュリティ注意</p>
<p>本番環境では必ずHTTPSを使用し、環境変数は適切に保護してください。Discord署名検証は必須です。</p>
</div>
</div></template>


