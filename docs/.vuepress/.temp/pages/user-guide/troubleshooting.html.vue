<template><div><h1 id="トラブルシューティング" tabindex="-1"><a class="header-anchor" href="#トラブルシューティング"><span>トラブルシューティング</span></a></h1>
<p>Discord Farmbotの使用中に発生する可能性のある問題と解決方法をまとめました。</p>
<h2 id="🚨-よくある問題と解決方法" tabindex="-1"><a class="header-anchor" href="#🚨-よくある問題と解決方法"><span>🚨 よくある問題と解決方法</span></a></h2>
<h3 id="_1-コマンド関連の問題" tabindex="-1"><a class="header-anchor" href="#_1-コマンド関連の問題"><span>1. コマンド関連の問題</span></a></h3>
<h4 id="analyze-コマンドが表示されない" tabindex="-1"><a class="header-anchor" href="#analyze-コマンドが表示されない"><span><code v-pre>/analyze</code> コマンドが表示されない</span></a></h4>
<p><strong>症状</strong>: Discordでスラッシュコマンドが表示されない</p>
<p><strong>原因と解決方法</strong>:</p>
<ul>
<li><strong>Bot権限不足</strong>: サーバー管理者にBot権限の確認を依頼</li>
<li><strong>コマンド未登録</strong>: 開発者がコマンド登録を実行する必要がある</li>
<li><strong>Discord側の同期遅延</strong>: 数分待ってから再試行</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 開発者向け: コマンド再登録</span></span>
<span class="line"><span class="token function">node</span> scripts/register-commands.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="コマンド実行後に反応がない" tabindex="-1"><a class="header-anchor" href="#コマンド実行後に反応がない"><span>コマンド実行後に反応がない</span></a></h4>
<p><strong>症状</strong>: コマンドを実行しても何も起こらない</p>
<p><strong>解決手順</strong>:</p>
<ol>
<li><strong>ネットワーク接続を確認</strong></li>
<li><strong>Botのオンライン状態を確認</strong></li>
<li><strong>数秒待ってから再実行</strong></li>
<li><strong>他のチャンネルで試行</strong></li>
</ol>
<h3 id="_2-画像関連の問題" tabindex="-1"><a class="header-anchor" href="#_2-画像関連の問題"><span>2. 画像関連の問題</span></a></h3>
<h4 id="「画像が大きすぎます」エラー" tabindex="-1"><a class="header-anchor" href="#「画像が大きすぎます」エラー"><span>「画像が大きすぎます」エラー</span></a></h4>
<p><strong>症状</strong>: <code v-pre>Image too large</code> エラーメッセージが表示される</p>
<p><strong>解決方法</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 画像サイズを確認</span></span>
<span class="line"><span class="token comment"># 制限: 500KB以下</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>画像圧縮方法</strong>:</p>
<ul>
<li><strong>オンライン圧縮ツール</strong>: TinyPNG、Compressor.io</li>
<li><strong>スマートフォン</strong>: 画質設定を「中」に変更</li>
<li><strong>PC</strong>: ペイントやPhotoshopで解像度を下げる</li>
</ul>
<h4 id="「画像ファイルを添付してください」エラー" tabindex="-1"><a class="header-anchor" href="#「画像ファイルを添付してください」エラー"><span>「画像ファイルを添付してください」エラー</span></a></h4>
<p><strong>症状</strong>: 画像を添付したのにエラーが出る</p>
<p><strong>確認事項</strong>:</p>
<ul>
<li><strong>対応形式</strong>: PNG、JPEG、WEBP のみ</li>
<li><strong>ファイル破損</strong>: 別の画像で試行</li>
<li><strong>添付方法</strong>: ドラッグ&amp;ドロップまたはクリップアイコンから添付</li>
</ul>
<h4 id="「解析に失敗しました」エラー" tabindex="-1"><a class="header-anchor" href="#「解析に失敗しました」エラー"><span>「解析に失敗しました」エラー</span></a></h4>
<p><strong>症状</strong>: 画像は正常だが解析が失敗する</p>
<p><strong>対処法</strong>:</p>
<ol>
<li><strong>画像の明るさを確認</strong> - 暗すぎる場合は明るい場所で撮影</li>
<li><strong>ピントを確認</strong> - ぼやけている場合は再撮影</li>
<li><strong>作物が写っているか確認</strong> - 植物以外の画像は解析できません</li>
<li><strong>時間をおいて再試行</strong> - API制限の可能性</li>
</ol>
<h3 id="_3-解析結果の問題" tabindex="-1"><a class="header-anchor" href="#_3-解析結果の問題"><span>3. 解析結果の問題</span></a></h3>
<h4 id="解析結果が不正確" tabindex="-1"><a class="header-anchor" href="#解析結果が不正確"><span>解析結果が不正確</span></a></h4>
<p><strong>症状</strong>: 明らかに間違った作物として認識される</p>
<p><strong>改善方法</strong>:</p>
<ul>
<li><strong>複数角度から撮影</strong>: 葉、茎、果実など様々な部分</li>
<li><strong>背景をシンプルに</strong>: 土や他の植物が写らないように</li>
<li><strong>自然光で撮影</strong>: 室内照明より屋外の自然光が最適</li>
<li><strong>適切な距離</strong>: 近すぎず遠すぎない距離から撮影</li>
</ul>
<h4 id="解析結果が表示されない" tabindex="-1"><a class="header-anchor" href="#解析結果が表示されない"><span>解析結果が表示されない</span></a></h4>
<p><strong>症状</strong>: 「解析中...」のまま結果が出ない</p>
<p><strong>確認手順</strong>:</p>
<ol>
<li><strong>スレッドを確認</strong> - 結果はスレッドに投稿されます</li>
<li><strong>権限を確認</strong> - Botにスレッド作成権限があるか</li>
<li><strong>再実行</strong> - 一度だけ再試行してください</li>
</ol>
<h3 id="_4-権限関連の問題" tabindex="-1"><a class="header-anchor" href="#_4-権限関連の問題"><span>4. 権限関連の問題</span></a></h3>
<h4 id="botがメッセージを送信できない" tabindex="-1"><a class="header-anchor" href="#botがメッセージを送信できない"><span>Botがメッセージを送信できない</span></a></h4>
<p><strong>症状</strong>: Botの応答が一切ない</p>
<p><strong>必要な権限</strong>:</p>
<ul>
<li>✅ メッセージの送信</li>
<li>✅ スラッシュコマンドの使用</li>
<li>✅ メッセージ履歴の表示</li>
<li>✅ スレッドの作成</li>
<li>✅ パブリックスレッドでのメッセージ送信</li>
</ul>
<p><strong>権限確認方法</strong>:</p>
<ol>
<li>サーバー設定 → 役職</li>
<li>Discord Farmbot の役職を選択</li>
<li>上記権限が有効になっているか確認</li>
</ol>
<h4 id="特定のチャンネルで動作しない" tabindex="-1"><a class="header-anchor" href="#特定のチャンネルで動作しない"><span>特定のチャンネルで動作しない</span></a></h4>
<p><strong>症状</strong>: 一部のチャンネルでのみ動作しない</p>
<p><strong>確認事項</strong>:</p>
<ul>
<li><strong>チャンネル権限</strong>: そのチャンネルでBotが発言できるか</li>
<li><strong>カテゴリ権限</strong>: 親カテゴリの権限設定</li>
<li><strong>役職の順序</strong>: Botの役職が適切な位置にあるか</li>
</ul>
<h3 id="_5-パフォーマンス関連" tabindex="-1"><a class="header-anchor" href="#_5-パフォーマンス関連"><span>5. パフォーマンス関連</span></a></h3>
<h4 id="応答が遅い" tabindex="-1"><a class="header-anchor" href="#応答が遅い"><span>応答が遅い</span></a></h4>
<p><strong>症状</strong>: 解析に通常より長い時間がかかる</p>
<p><strong>原因</strong>:</p>
<ul>
<li><strong>API制限</strong>: Gemini APIの使用量制限</li>
<li><strong>画像サイズ</strong>: 大きな画像は処理に時間がかかる</li>
<li><strong>サーバー負荷</strong>: 同時利用者が多い場合</li>
</ul>
<p><strong>対処法</strong>:</p>
<ul>
<li>画像サイズを小さくする（200KB以下推奨）</li>
<li>時間をおいて再試行</li>
<li>混雑時間を避ける</li>
</ul>
<h4 id="タイムアウトエラー" tabindex="-1"><a class="header-anchor" href="#タイムアウトエラー"><span>タイムアウトエラー</span></a></h4>
<p><strong>症状</strong>: 「Request timeout」エラー</p>
<p><strong>解決方法</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 開発者向け: タイムアウト設定確認</span></span>
<span class="line"><span class="token comment"># Cloudflare Workers: 30秒制限</span></span>
<span class="line"><span class="token comment"># Gemini API: 60秒制限</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔧-詳細診断" tabindex="-1"><a class="header-anchor" href="#🔧-詳細診断"><span>🔧 詳細診断</span></a></h2>
<h3 id="ログの確認方法" tabindex="-1"><a class="header-anchor" href="#ログの確認方法"><span>ログの確認方法</span></a></h3>
<h4 id="ユーザー向け" tabindex="-1"><a class="header-anchor" href="#ユーザー向け"><span>ユーザー向け</span></a></h4>
<ol>
<li><strong>エラーメッセージをスクリーンショット</strong></li>
<li><strong>実行時刻を記録</strong></li>
<li><strong>使用した画像を保存</strong></li>
<li><strong>サポートに報告</strong></li>
</ol>
<h4 id="開発者向け" tabindex="-1"><a class="header-anchor" href="#開発者向け"><span>開発者向け</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># Cloudflare Workers ログ</span></span>
<span class="line">wrangler <span class="token function">tail</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 特定時間のログ</span></span>
<span class="line">wrangler <span class="token function">tail</span> <span class="token parameter variable">--since</span> <span class="token number">2024</span>-01-01T10:00:00Z</span>
<span class="line"></span>
<span class="line"><span class="token comment"># エラーのみフィルタ</span></span>
<span class="line">wrangler <span class="token function">tail</span> <span class="token operator">|</span> <span class="token function">grep</span> ERROR</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="デバッグ情報の収集" tabindex="-1"><a class="header-anchor" href="#デバッグ情報の収集"><span>デバッグ情報の収集</span></a></h3>
<h4 id="環境情報" tabindex="-1"><a class="header-anchor" href="#環境情報"><span>環境情報</span></a></h4>
<ul>
<li><strong>OS</strong>: Windows/macOS/Linux</li>
<li><strong>ブラウザ</strong>: Chrome/Firefox/Safari</li>
<li><strong>Discord</strong>: デスクトップ/モバイル/ブラウザ版</li>
<li><strong>画像</strong>: サイズ、形式、撮影環境</li>
</ul>
<h4 id="再現手順" tabindex="-1"><a class="header-anchor" href="#再現手順"><span>再現手順</span></a></h4>
<ol>
<li>具体的な操作手順</li>
<li>期待される結果</li>
<li>実際の結果</li>
<li>エラーメッセージ（あれば）</li>
</ol>
<h2 id="🆘-サポートへの連絡" tabindex="-1"><a class="header-anchor" href="#🆘-サポートへの連絡"><span>🆘 サポートへの連絡</span></a></h2>
<h3 id="連絡前の準備" tabindex="-1"><a class="header-anchor" href="#連絡前の準備"><span>連絡前の準備</span></a></h3>
<ul>
<li>[ ] このトラブルシューティングガイドを確認済み</li>
<li>[ ] 基本的な解決方法を試行済み</li>
<li>[ ] エラーメッセージのスクリーンショット準備済み</li>
<li>[ ] 問題の再現手順を整理済み</li>
</ul>
<h3 id="サポート窓口" tabindex="-1"><a class="header-anchor" href="#サポート窓口"><span>サポート窓口</span></a></h3>
<h4 id="_1-コミュニティサポート-推奨" tabindex="-1"><a class="header-anchor" href="#_1-コミュニティサポート-推奨"><span>1. コミュニティサポート（推奨）</span></a></h4>
<p><strong>Discord サーバー</strong>: <a href="https://discord.gg/Gq9jPaMX8g" target="_blank" rel="noopener noreferrer">https://discord.gg/Gq9jPaMX8g</a></p>
<ul>
<li>📝 <code v-pre>#サポート</code> チャンネル</li>
<li>⚡ リアルタイム対応</li>
<li>🤝 コミュニティメンバーからのサポート</li>
</ul>
<h4 id="_2-github-issues" tabindex="-1"><a class="header-anchor" href="#_2-github-issues"><span>2. GitHub Issues</span></a></h4>
<p><strong>URL</strong>: <a href="https://github.com/johnknash2025/discord-farmbot/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a></p>
<ul>
<li>🐛 バグ報告</li>
<li>💡 機能要望</li>
<li>📖 ドキュメント改善提案</li>
</ul>
<h4 id="_3-メールサポート" tabindex="-1"><a class="header-anchor" href="#_3-メールサポート"><span>3. メールサポート</span></a></h4>
<p><strong>メール</strong>: support@farmbot.example.com</p>
<ul>
<li>📧 詳細な技術的問題</li>
<li>🔒 プライベートな問題</li>
</ul>
<h3 id="報告テンプレート" tabindex="-1"><a class="header-anchor" href="#報告テンプレート"><span>報告テンプレート</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code class="language-markdown"><span class="line"><span class="token title important"><span class="token punctuation">##</span> 問題の概要</span></span>
<span class="line">簡潔に問題を説明してください</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 環境情報</span></span>
<span class="line"><span class="token list punctuation">-</span> OS: </span>
<span class="line"><span class="token list punctuation">-</span> Discord: デスクトップ/モバイル/ブラウザ</span>
<span class="line"><span class="token list punctuation">-</span> 画像サイズ: </span>
<span class="line"><span class="token list punctuation">-</span> 画像形式: </span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 再現手順</span></span>
<span class="line">1. </span>
<span class="line">2. </span>
<span class="line">3. </span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 期待される結果</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 実際の結果</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> エラーメッセージ</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📊-既知の問題" tabindex="-1"><a class="header-anchor" href="#📊-既知の問題"><span>📊 既知の問題</span></a></h2>
<h3 id="現在対応中" tabindex="-1"><a class="header-anchor" href="#現在対応中"><span>現在対応中</span></a></h3>
<ul>
<li>[ ] <strong>大容量画像の処理改善</strong> - 500KB制限の緩和検討中</li>
<li>[ ] <strong>レスポンス時間の改善</strong> - キャッシュ機能の実装予定</li>
<li>[ ] <strong>多言語対応</strong> - 英語・中国語サポート開発中</li>
</ul>
<h3 id="制限事項" tabindex="-1"><a class="header-anchor" href="#制限事項"><span>制限事項</span></a></h3>
<ul>
<li><strong>画像サイズ</strong>: 500KB以下</li>
<li><strong>対応形式</strong>: PNG、JPEG、WEBP のみ</li>
<li><strong>同時処理</strong>: 1ユーザーあたり同時1リクエスト</li>
<li><strong>API制限</strong>: 1日あたりの解析回数に制限あり</li>
</ul>
<h2 id="🔄-定期メンテナンス" tabindex="-1"><a class="header-anchor" href="#🔄-定期メンテナンス"><span>🔄 定期メンテナンス</span></a></h2>
<h3 id="メンテナンス時間" tabindex="-1"><a class="header-anchor" href="#メンテナンス時間"><span>メンテナンス時間</span></a></h3>
<ul>
<li><strong>定期メンテナンス</strong>: 毎週日曜日 2:00-4:00 JST</li>
<li><strong>緊急メンテナンス</strong>: 事前通知なしで実施される場合があります</li>
</ul>
<h3 id="メンテナンス情報の確認" tabindex="-1"><a class="header-anchor" href="#メンテナンス情報の確認"><span>メンテナンス情報の確認</span></a></h3>
<ul>
<li><strong>Discord サーバー</strong>: <code v-pre>#お知らせ</code> チャンネル</li>
<li><strong>GitHub</strong>: <a href="https://github.com/johnknash2025/discord-farmbot/releases" target="_blank" rel="noopener noreferrer">Releases</a></li>
<li><strong>ステータスページ</strong>: https://status.farmbot.example.com</li>
</ul>
<hr>
<div class="hint-container tip">
<p class="hint-container-title">💡 問題解決のコツ</p>
<ol>
<li><strong>まずは基本的な解決方法を試す</strong></li>
<li><strong>エラーメッセージを正確に記録する</strong></li>
<li><strong>問題を再現できる最小限の手順を特定する</strong></li>
<li><strong>コミュニティで同様の問題がないか検索する</strong></li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">⚠️ 注意</p>
<p>問題が解決しない場合は、無理に何度も試行せず、サポートにご連絡ください。API制限に達する可能性があります。</p>
</div>
</div></template>


