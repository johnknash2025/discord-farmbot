<template><div><h1 id="🚀-discord-farmbot-ドキュメントサイト-デプロイガイド" tabindex="-1"><a class="header-anchor" href="#🚀-discord-farmbot-ドキュメントサイト-デプロイガイド"><span>🚀 Discord Farmbot ドキュメントサイト デプロイガイド</span></a></h1>
<h2 id="📊-google-analytics-設定完了" tabindex="-1"><a class="header-anchor" href="#📊-google-analytics-設定完了"><span>📊 Google Analytics 設定完了</span></a></h2>
<p>✅ <strong>トラッキングID</strong>: <code v-pre>G-HPC9WP899Q</code><br>
✅ <strong>VuePressプラグイン統合</strong>: 完了<br>
✅ <strong>gtagスクリプト統合</strong>: 完了<br>
✅ <strong>ビルド確認</strong>: 成功</p>
<h2 id="🌐-github-pages-公開手順" tabindex="-1"><a class="header-anchor" href="#🌐-github-pages-公開手順"><span>🌐 GitHub Pages 公開手順</span></a></h2>
<h3 id="_1-github-リポジトリでpages有効化" tabindex="-1"><a class="header-anchor" href="#_1-github-リポジトリでpages有効化"><span>1. GitHub リポジトリでPages有効化</span></a></h3>
<ol>
<li>GitHubリポジトリ (<code v-pre>https://github.com/johnknash2025/discord-farmbot</code>) にアクセス</li>
<li><strong>Settings</strong> タブをクリック</li>
<li>左メニューの <strong>Pages</strong> をクリック</li>
<li><strong>Source</strong> を <strong>GitHub Actions</strong> に設定</li>
<li><strong>Save</strong> をクリック</li>
</ol>
<h3 id="_2-自動デプロイ確認" tabindex="-1"><a class="header-anchor" href="#_2-自動デプロイ確認"><span>2. 自動デプロイ確認</span></a></h3>
<p>GitHub Actionsワークフローが自動実行され、以下のURLでサイトが公開されます：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">https://johnknash2025.github.io/discord-farmbot/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-カスタムドメイン設定-オプション" tabindex="-1"><a class="header-anchor" href="#_3-カスタムドメイン設定-オプション"><span>3. カスタムドメイン設定（オプション）</span></a></h3>
<p>独自ドメインを使用する場合：</p>
<ol>
<li>
<p>DNS設定でCNAMEレコードを追加：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">docs.yourdomain.com → johnknash2025.github.io</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>docs/.vuepress/public/CNAME</code> ファイルを作成：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">docs.yourdomain.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="📈-analytics-確認方法" tabindex="-1"><a class="header-anchor" href="#📈-analytics-確認方法"><span>📈 Analytics 確認方法</span></a></h2>
<h3 id="google-analytics-ダッシュボード" tabindex="-1"><a class="header-anchor" href="#google-analytics-ダッシュボード"><span>Google Analytics ダッシュボード</span></a></h3>
<ol>
<li><a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">Google Analytics</a> にアクセス</li>
<li>プロパティ <code v-pre>G-HPC9WP899Q</code> を選択</li>
<li>リアルタイムレポートでアクセス状況を確認</li>
</ol>
<h3 id="確認できるデータ" tabindex="-1"><a class="header-anchor" href="#確認できるデータ"><span>確認できるデータ</span></a></h3>
<ul>
<li><strong>リアルタイムユーザー数</strong></li>
<li><strong>ページビュー数</strong></li>
<li><strong>セッション時間</strong></li>
<li><strong>ユーザーの地域分布</strong></li>
<li><strong>デバイス情報</strong></li>
<li><strong>参照元サイト</strong></li>
</ul>
<h2 id="🔧-メンテナンス" tabindex="-1"><a class="header-anchor" href="#🔧-メンテナンス"><span>🔧 メンテナンス</span></a></h2>
<h3 id="ドキュメント更新" tabindex="-1"><a class="header-anchor" href="#ドキュメント更新"><span>ドキュメント更新</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># ローカルで編集</span></span>
<span class="line"><span class="token builtin class-name">cd</span> docs</span>
<span class="line"><span class="token function">npm</span> run docs:dev  <span class="token comment"># 開発サーバー起動</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 変更をプッシュ</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"docs: ドキュメント更新"</span></span>
<span class="line"><span class="token function">git</span> push origin develop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ビルド確認" tabindex="-1"><a class="header-anchor" href="#ビルド確認"><span>ビルド確認</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> docs</span>
<span class="line"><span class="token function">npm</span> run docs:build  <span class="token comment"># 本番ビルド</span></span>
<span class="line"><span class="token function">npm</span> run docs:serve  <span class="token comment"># ローカルで確認</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📊-サイト統計" tabindex="-1"><a class="header-anchor" href="#📊-サイト統計"><span>📊 サイト統計</span></a></h2>
<ul>
<li><strong>総ページ数</strong>: 12ページ</li>
<li><strong>対応言語</strong>: 日本語</li>
<li><strong>レスポンシブ対応</strong>: ✅</li>
<li><strong>SEO最適化</strong>: ✅</li>
<li><strong>アクセス解析</strong>: ✅</li>
<li><strong>自動デプロイ</strong>: ✅</li>
</ul>
<h2 id="🎯-次のステップ" tabindex="-1"><a class="header-anchor" href="#🎯-次のステップ"><span>🎯 次のステップ</span></a></h2>
<ol>
<li><strong>GitHub Pages有効化</strong> → サイト公開</li>
<li><strong>Analytics確認</strong> → アクセス状況監視</li>
<li><strong>コンテンツ拡充</strong> → ドキュメント追加</li>
<li><strong>SEO最適化</strong> → 検索エンジン対応</li>
<li><strong>ユーザーフィードバック</strong> → 改善点収集</li>
</ol>
<hr>
<p>🌱 <strong>Discord Farmbot Documentation Site</strong><br>
📊 <strong>Analytics</strong>: G-HPC9WP899Q<br>
🚀 <strong>Status</strong>: Ready for Production</p>
</div></template>


