<template><div><h1 id="🚀-本番環境セットアップ完了" tabindex="-1"><a class="header-anchor" href="#🚀-本番環境セットアップ完了"><span>🚀 本番環境セットアップ完了</span></a></h1>
<h2 id="✅-完了した作業" tabindex="-1"><a class="header-anchor" href="#✅-完了した作業"><span>✅ 完了した作業</span></a></h2>
<ol>
<li>
<p><strong>環境変数設定</strong>: ✅ 完了</p>
<ul>
<li>DISCORD_PUBLIC_KEY</li>
<li>DISCORD_BOT_TOKEN</li>
<li>GEMINI_API_KEY</li>
</ul>
</li>
<li>
<p><strong>本番デプロイ</strong>: ✅ 完了</p>
<ul>
<li>Worker URL: https://discord-farmbot.aws-cloudpattern.workers.dev</li>
</ul>
</li>
</ol>
<h2 id="📋-discord-developer-portal-設定更新" tabindex="-1"><a class="header-anchor" href="#📋-discord-developer-portal-設定更新"><span>📋 Discord Developer Portal 設定更新</span></a></h2>
<h3 id="手順" tabindex="-1"><a class="header-anchor" href="#手順"><span>手順:</span></a></h3>
<ol>
<li>Discord Developer Portal (https://discord.com/developers/applications) を開く</li>
<li>あなたのアプリケーションを選択</li>
<li>左メニューの &quot;General Information&quot; をクリック</li>
<li>&quot;Interactions Endpoint URL&quot; を以下に更新:<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://discord-farmbot.aws-cloudpattern.workers.dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>&quot;Save Changes&quot; をクリック</li>
<li>Discord が自動的にエンドポイントをテストします</li>
</ol>
<h2 id="🧪-本番環境テスト" tabindex="-1"><a class="header-anchor" href="#🧪-本番環境テスト"><span>🧪 本番環境テスト</span></a></h2>
<h3 id="エンドポイント確認" tabindex="-1"><a class="header-anchor" href="#エンドポイント確認"><span>エンドポイント確認:</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">curl</span> https://discord-farmbot.aws-cloudpattern.workers.dev/health</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="discord-でのテスト" tabindex="-1"><a class="header-anchor" href="#discord-でのテスト"><span>Discord でのテスト:</span></a></h3>
<ol>
<li><code v-pre>/analyze</code> コマンドを実行</li>
<li>100KB以下の農作物画像を添付</li>
<li>解析結果がスレッドに投稿されることを確認</li>
</ol>
<h2 id="📊-期待される動作" tabindex="-1"><a class="header-anchor" href="#📊-期待される動作"><span>📊 期待される動作</span></a></h2>
<h3 id="成功パターン" tabindex="-1"><a class="header-anchor" href="#成功パターン"><span>成功パターン:</span></a></h3>
<ol>
<li>✅ コマンド実行後、即座に「解析中...」メッセージ</li>
<li>✅ 数秒後にスレッドに詳細な解析結果が投稿</li>
<li>✅ 元のコマンドが「✅ 解析完了！」に更新</li>
</ol>
<h3 id="エラーパターン" tabindex="-1"><a class="header-anchor" href="#エラーパターン"><span>エラーパターン:</span></a></h3>
<ul>
<li>画像サイズが100KBを超える場合: &quot;Image too large&quot; エラー</li>
<li>無効な画像形式: &quot;画像ファイルを添付してください&quot; エラー</li>
</ul>
<h2 id="🔧-トラブルシューティング" tabindex="-1"><a class="header-anchor" href="#🔧-トラブルシューティング"><span>🔧 トラブルシューティング</span></a></h2>
<h3 id="ログ確認" tabindex="-1"><a class="header-anchor" href="#ログ確認"><span>ログ確認:</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">wrangler <span class="token function">tail</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="設定確認" tabindex="-1"><a class="header-anchor" href="#設定確認"><span>設定確認:</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">wrangler secret list</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="🎯-次のステップ" tabindex="-1"><a class="header-anchor" href="#🎯-次のステップ"><span>🎯 次のステップ</span></a></h2>
<p>本番環境が正常に動作したら:</p>
<ol>
<li><strong>画像サイズ制限の調整</strong> (必要に応じて100KB → 500KB等)</li>
<li><strong>解析プロンプトの改善</strong> (より詳細な農作物解析)</li>
<li><strong>自動検知機能の追加</strong> (Cron Triggers使用)</li>
<li><strong>エラーハンドリングの強化</strong></li>
</ol>
<h2 id="📈-監視とメンテナンス" tabindex="-1"><a class="header-anchor" href="#📈-監視とメンテナンス"><span>📈 監視とメンテナンス</span></a></h2>
<ul>
<li><strong>使用量確認</strong>: Cloudflare Dashboard で Request数を監視</li>
<li><strong>エラー監視</strong>: wrangler tail でリアルタイムログ確認</li>
<li><strong>API制限</strong>: Gemini API の使用量を Google AI Studio で確認</li>
</ul>
</div></template>


