<template><div><h1 id="🌱-discord-farmbot-ユーザーガイド" tabindex="-1"><a class="header-anchor" href="#🌱-discord-farmbot-ユーザーガイド"><span>🌱 Discord Farmbot ユーザーガイド</span></a></h1>
<h2 id="📖-概要" tabindex="-1"><a class="header-anchor" href="#📖-概要"><span>📖 概要</span></a></h2>
<p>Discord Farmbotは、農作物の画像を解析して詳細な情報を提供するDiscord Botです。Google Gemini Vision APIを使用して、作物の種類、成長段階、健康状態、栽培アドバイスなどを自動的に分析します。</p>
<h2 id="🎯-主な機能" tabindex="-1"><a class="header-anchor" href="#🎯-主な機能"><span>🎯 主な機能</span></a></h2>
<h3 id="🔍-画像解析機能" tabindex="-1"><a class="header-anchor" href="#🔍-画像解析機能"><span>🔍 画像解析機能</span></a></h3>
<ul>
<li><strong>作物識別</strong>: 植物の種類を自動判定</li>
<li><strong>成長段階評価</strong>: 発芽期から収穫期までの成長段階を分析</li>
<li><strong>健康状態診断</strong>: 病気や害虫の兆候を検出</li>
<li><strong>栽培環境評価</strong>: 土壌、水分、日照状態の分析</li>
<li><strong>品質評価</strong>: 収穫時期の予測と品質判定</li>
<li><strong>改善提案</strong>: 具体的な栽培管理アドバイス</li>
</ul>
<h3 id="💬-discord統合" tabindex="-1"><a class="header-anchor" href="#💬-discord統合"><span>💬 Discord統合</span></a></h3>
<ul>
<li><strong>スラッシュコマンド</strong>: <code v-pre>/analyze</code> コマンドで簡単操作</li>
<li><strong>スレッド投稿</strong>: 解析結果を自動的にスレッドに投稿</li>
<li><strong>リアルタイム処理</strong>: 数秒で解析結果を取得</li>
</ul>
<h2 id="🚀-使用方法" tabindex="-1"><a class="header-anchor" href="#🚀-使用方法"><span>🚀 使用方法</span></a></h2>
<h3 id="基本的な使い方" tabindex="-1"><a class="header-anchor" href="#基本的な使い方"><span>基本的な使い方</span></a></h3>
<ol>
<li>
<p><strong>コマンド実行</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">/analyze</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>画像添付</strong></p>
<ul>
<li>農作物の画像を選択して添付</li>
<li>対応形式: PNG, JPEG, WEBP</li>
<li>最大サイズ: 500KB</li>
</ul>
</li>
<li>
<p><strong>結果確認</strong></p>
<ul>
<li>即座に「🔍 解析中...」メッセージが表示</li>
<li>数秒後にスレッドに詳細な解析結果が投稿</li>
<li>元のメッセージが「✅ 解析完了！」に更新</li>
</ul>
</li>
</ol>
<h3 id="📸-効果的な画像撮影のコツ" tabindex="-1"><a class="header-anchor" href="#📸-効果的な画像撮影のコツ"><span>📸 効果的な画像撮影のコツ</span></a></h3>
<h4 id="✅-良い画像の例" tabindex="-1"><a class="header-anchor" href="#✅-良い画像の例"><span>✅ 良い画像の例</span></a></h4>
<ul>
<li><strong>明るい自然光</strong>: 屋外の自然光または明るい室内</li>
<li><strong>クリアな焦点</strong>: 作物にピントが合っている</li>
<li><strong>適切な距離</strong>: 作物全体が見える距離から撮影</li>
<li><strong>複数角度</strong>: 葉、茎、根元など異なる角度から</li>
<li><strong>背景シンプル</strong>: 土や単色背景で作物が際立つ</li>
</ul>
<h4 id="❌-避けるべき画像" tabindex="-1"><a class="header-anchor" href="#❌-避けるべき画像"><span>❌ 避けるべき画像</span></a></h4>
<ul>
<li><strong>暗すぎる</strong>: 夜間や暗い場所での撮影</li>
<li><strong>ブレている</strong>: 手ブレや被写体ブレ</li>
<li><strong>遠すぎる</strong>: 作物の詳細が見えない</li>
<li><strong>複雑な背景</strong>: 他の植物や物が混在</li>
<li><strong>過度な加工</strong>: フィルターや色調補正済み</li>
</ul>
<h3 id="📊-解析結果の読み方" tabindex="-1"><a class="header-anchor" href="#📊-解析結果の読み方"><span>📊 解析結果の読み方</span></a></h3>
<h4 id="基本情報セクション" tabindex="-1"><a class="header-anchor" href="#基本情報セクション"><span>基本情報セクション</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">🌱 作物の種類: トマト (Solanum lycopersicum)</span>
<span class="line">📅 成長段階: 開花期 (第3段階/5段階)</span>
<span class="line">💚 健康状態: 良好 (スコア: 8.5/10)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="詳細分析セクション" tabindex="-1"><a class="header-anchor" href="#詳細分析セクション"><span>詳細分析セクション</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">🔍 詳細分析:</span>
<span class="line">• 葉の状態: 濃緑色で健康的、軽微な虫食い跡あり</span>
<span class="line">• 茎の状態: 太く丈夫、適切な支柱が必要</span>
<span class="line">• 花・実の状態: 多数の花芽、一部結実開始</span>
<span class="line">• 根元の状態: 良好、マルチング推奨</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="栽培アドバイス" tabindex="-1"><a class="header-anchor" href="#栽培アドバイス"><span>栽培アドバイス</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">💡 栽培アドバイス:</span>
<span class="line">• 水やり: 土の表面が乾いたらたっぷりと</span>
<span class="line">• 肥料: 2週間に1回、液体肥料を施用</span>
<span class="line">• 病害虫対策: アブラムシ予防のため定期観察</span>
<span class="line">• 収穫予測: 約3-4週間後に収穫可能</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🎯-活用シーン" tabindex="-1"><a class="header-anchor" href="#🎯-活用シーン"><span>🎯 活用シーン</span></a></h2>
<h3 id="🏡-家庭菜園" tabindex="-1"><a class="header-anchor" href="#🏡-家庭菜園"><span>🏡 家庭菜園</span></a></h3>
<ul>
<li><strong>日常管理</strong>: 毎日の成長記録と健康チェック</li>
<li><strong>問題早期発見</strong>: 病気や害虫の初期症状を検出</li>
<li><strong>収穫タイミング</strong>: 最適な収穫時期の判定</li>
<li><strong>品種選択</strong>: 次回栽培する品種の参考情報</li>
</ul>
<h3 id="🌾-農業従事者" tabindex="-1"><a class="header-anchor" href="#🌾-農業従事者"><span>🌾 農業従事者</span></a></h3>
<ul>
<li><strong>圃場管理</strong>: 大規模圃場の効率的な監視</li>
<li><strong>品質管理</strong>: 出荷前の品質チェック</li>
<li><strong>技術指導</strong>: 新人への栽培指導ツール</li>
<li><strong>記録管理</strong>: 成長過程の詳細記録</li>
</ul>
<h3 id="🎓-教育・研究" tabindex="-1"><a class="header-anchor" href="#🎓-教育・研究"><span>🎓 教育・研究</span></a></h3>
<ul>
<li><strong>農業教育</strong>: 学生への実践的な学習支援</li>
<li><strong>研究データ</strong>: 成長パターンの分析データ収集</li>
<li><strong>比較研究</strong>: 異なる栽培条件での比較分析</li>
<li><strong>知識共有</strong>: 専門知識の可視化と共有</li>
</ul>
<h2 id="⚠️-制限事項と注意点" tabindex="-1"><a class="header-anchor" href="#⚠️-制限事項と注意点"><span>⚠️ 制限事項と注意点</span></a></h2>
<h3 id="技術的制限" tabindex="-1"><a class="header-anchor" href="#技術的制限"><span>技術的制限</span></a></h3>
<ul>
<li><strong>画像サイズ</strong>: 500KB以下</li>
<li><strong>対応形式</strong>: PNG, JPEG, WEBP のみ</li>
<li><strong>解析時間</strong>: 通常3-10秒（画像サイズにより変動）</li>
<li><strong>同時処理</strong>: 1つずつ順次処理</li>
</ul>
<h3 id="解析精度について" tabindex="-1"><a class="header-anchor" href="#解析精度について"><span>解析精度について</span></a></h3>
<ul>
<li><strong>AI解析</strong>: 100%の精度は保証されません</li>
<li><strong>専門判断</strong>: 重要な決定は専門家に相談</li>
<li><strong>環境要因</strong>: 撮影条件により精度が変動</li>
<li><strong>継続観察</strong>: 複数回の解析で傾向を把握</li>
</ul>
<h3 id="プライバシーと安全性" tabindex="-1"><a class="header-anchor" href="#プライバシーと安全性"><span>プライバシーと安全性</span></a></h3>
<ul>
<li><strong>画像保存</strong>: 解析後の画像は保存されません</li>
<li><strong>データ使用</strong>: 解析データは統計目的のみ使用</li>
<li><strong>個人情報</strong>: 位置情報等は収集しません</li>
</ul>
<h2 id="🆘-トラブルシューティング" tabindex="-1"><a class="header-anchor" href="#🆘-トラブルシューティング"><span>🆘 トラブルシューティング</span></a></h2>
<h3 id="よくある問題" tabindex="-1"><a class="header-anchor" href="#よくある問題"><span>よくある問題</span></a></h3>
<h4 id="「画像ファイルを添付してください」エラー" tabindex="-1"><a class="header-anchor" href="#「画像ファイルを添付してください」エラー"><span>「画像ファイルを添付してください」エラー</span></a></h4>
<p><strong>原因</strong>: 画像が正しく添付されていない
<strong>解決法</strong>:</p>
<ul>
<li>PNG, JPEG, WEBP形式の画像を使用</li>
<li>ファイルサイズを500KB以下に圧縮</li>
<li>添付方法を確認（ドラッグ&amp;ドロップまたはファイル選択）</li>
</ul>
<h4 id="「image-too-large」エラー" tabindex="-1"><a class="header-anchor" href="#「image-too-large」エラー"><span>「Image too large」エラー</span></a></h4>
<p><strong>原因</strong>: 画像サイズが制限を超過
<strong>解決法</strong>:</p>
<ul>
<li>画像を圧縮（推奨: 1024x1024px以下）</li>
<li>オンライン圧縮ツールを使用</li>
<li>スマートフォンの場合、解像度設定を下げる</li>
</ul>
<h4 id="解析結果が表示されない" tabindex="-1"><a class="header-anchor" href="#解析結果が表示されない"><span>解析結果が表示されない</span></a></h4>
<p><strong>原因</strong>: サーバーエラーまたはAPI制限
<strong>解決法</strong>:</p>
<ul>
<li>数分待ってから再試行</li>
<li>画像を変更して再実行</li>
<li>管理者に問い合わせ</li>
</ul>
<h4 id="解析結果が不正確" tabindex="-1"><a class="header-anchor" href="#解析結果が不正確"><span>解析結果が不正確</span></a></h4>
<p><strong>原因</strong>: 画像品質または撮影条件
<strong>解決法</strong>:</p>
<ul>
<li>より明るい環境で再撮影</li>
<li>作物に近づいて詳細を撮影</li>
<li>異なる角度から複数枚撮影</li>
<li>背景をシンプルにする</li>
</ul>
<h2 id="📞-サポート" tabindex="-1"><a class="header-anchor" href="#📞-サポート"><span>📞 サポート</span></a></h2>
<h3 id="問い合わせ方法" tabindex="-1"><a class="header-anchor" href="#問い合わせ方法"><span>問い合わせ方法</span></a></h3>
<ul>
<li><strong>GitHub Issues</strong>: バグ報告や機能要望</li>
<li><strong>Discord サーバー</strong>: リアルタイムサポート</li>
<li><strong>メール</strong>: 重要な問題や提案</li>
</ul>
<h3 id="よくある質問-faq" tabindex="-1"><a class="header-anchor" href="#よくある質問-faq"><span>よくある質問 (FAQ)</span></a></h3>
<p><strong>Q: どのような作物に対応していますか？</strong>
A: 一般的な野菜、果物、穀物、花卉など幅広く対応しています。特に家庭菜園でよく栽培される作物の精度が高いです。</p>
<p><strong>Q: 解析結果はどの程度信頼できますか？</strong>
A: AI解析のため参考情報として活用してください。重要な判断は専門家や経験に基づいて行うことを推奨します。</p>
<p><strong>Q: 商用利用は可能ですか？</strong>
A: 個人利用および教育目的での利用を想定しています。商用利用については別途ご相談ください。</p>
<p><strong>Q: 解析データは保存されますか？</strong>
A: 画像や個人情報は保存されません。解析結果の統計データのみ匿名で収集される場合があります。</p>
<p><strong>Q: オフラインでも使用できますか？</strong>
A: インターネット接続が必要です。Gemini APIとの通信が必要なためオフライン使用はできません。</p>
<h2 id="🔄-アップデート情報" tabindex="-1"><a class="header-anchor" href="#🔄-アップデート情報"><span>🔄 アップデート情報</span></a></h2>
<p>最新のアップデート情報は以下で確認できます：</p>
<ul>
<li><RouteLink to="/CHANGELOG.html">CHANGELOG.md</RouteLink></li>
<li><a href="https://github.com/johnknash2025/discord-farmbot/releases" target="_blank" rel="noopener noreferrer">GitHub Releases</a></li>
<li>Discord サーバーのアナウンス</li>
</ul>
<h2 id="🤝-コミュニティ" tabindex="-1"><a class="header-anchor" href="#🤝-コミュニティ"><span>🤝 コミュニティ</span></a></h2>
<h3 id="参加方法" tabindex="-1"><a class="header-anchor" href="#参加方法"><span>参加方法</span></a></h3>
<ul>
<li><strong>GitHub</strong>: スター、フォーク、コントリビューション</li>
<li><strong>Discord</strong>: ユーザーコミュニティへの参加</li>
<li><strong>SNS</strong>: 使用例や成果の共有</li>
</ul>
<h3 id="貢献方法" tabindex="-1"><a class="header-anchor" href="#貢献方法"><span>貢献方法</span></a></h3>
<ul>
<li><strong>バグ報告</strong>: 問題の詳細な報告</li>
<li><strong>機能提案</strong>: 新機能のアイデア提供</li>
<li><strong>ドキュメント改善</strong>: 使いやすさの向上</li>
<li><strong>テスト協力</strong>: ベータ版のテスト参加</li>
</ul>
<hr>
<p><strong>最終更新</strong>: 2024年12月
<strong>バージョン</strong>: 1.0.0</p>
</div></template>


