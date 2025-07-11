<template><div><h1 id="コマンドリファレンス" tabindex="-1"><a class="header-anchor" href="#コマンドリファレンス"><span>コマンドリファレンス</span></a></h1>
<p>Discord Farmbotで使用できる全てのコマンドの詳細説明です。</p>
<h2 id="📋-コマンド一覧" tabindex="-1"><a class="header-anchor" href="#📋-コマンド一覧"><span>📋 コマンド一覧</span></a></h2>
<h3 id="analyze-画像解析コマンド" tabindex="-1"><a class="header-anchor" href="#analyze-画像解析コマンド"><span><code v-pre>/analyze</code> - 画像解析コマンド</span></a></h3>
<p>農作物の画像を解析して詳細な情報を提供します。</p>
<h4 id="基本構文" tabindex="-1"><a class="header-anchor" href="#基本構文"><span>基本構文</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">/analyze image:[画像ファイル]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ"><span>パラメータ</span></a></h4>
<table>
<thead>
<tr>
<th>パラメータ</th>
<th>型</th>
<th>必須</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>image</code></td>
<td>Attachment</td>
<td>✅</td>
<td>解析したい農作物の画像ファイル</td>
</tr>
</tbody>
</table>
<h4 id="使用例" tabindex="-1"><a class="header-anchor" href="#使用例"><span>使用例</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 基本的な使用方法</span></span>
<span class="line">/analyze image:tomato.jpg</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 複数の作物が写った画像</span></span>
<span class="line">/analyze image:garden_overview.png</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 病気の疑いがある作物</span></span>
<span class="line">/analyze image:diseased_plant.jpeg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🔍-解析の詳細" tabindex="-1"><a class="header-anchor" href="#🔍-解析の詳細"><span>🔍 解析の詳細</span></a></h2>
<h3 id="対応している作物" tabindex="-1"><a class="header-anchor" href="#対応している作物"><span>対応している作物</span></a></h3>
<p>Discord Farmbotは以下のカテゴリの作物を解析できます：</p>
<h4 id="🥬-葉菜類" tabindex="-1"><a class="header-anchor" href="#🥬-葉菜類"><span>🥬 葉菜類</span></a></h4>
<ul>
<li>レタス、キャベツ、白菜</li>
<li>ほうれん草、小松菜、チンゲン菜</li>
<li>水菜、春菊、ルッコラ</li>
</ul>
<h4 id="🍅-果菜類" tabindex="-1"><a class="header-anchor" href="#🍅-果菜類"><span>🍅 果菜類</span></a></h4>
<ul>
<li>トマト、ミニトマト</li>
<li>キュウリ、ナス、ピーマン</li>
<li>ズッキーニ、オクラ、ゴーヤ</li>
</ul>
<h4 id="🥕-根菜類" tabindex="-1"><a class="header-anchor" href="#🥕-根菜類"><span>🥕 根菜類</span></a></h4>
<ul>
<li>大根、人参、カブ</li>
<li>ジャガイモ、サツマイモ</li>
<li>玉ねぎ、ニンニク</li>
</ul>
<h4 id="🌾-穀物・豆類" tabindex="-1"><a class="header-anchor" href="#🌾-穀物・豆類"><span>🌾 穀物・豆類</span></a></h4>
<ul>
<li>米、小麦、トウモロコシ</li>
<li>大豆、小豆、インゲン</li>
<li>エンドウ、そら豆</li>
</ul>
<h4 id="🍓-果樹・ベリー類" tabindex="-1"><a class="header-anchor" href="#🍓-果樹・ベリー類"><span>🍓 果樹・ベリー類</span></a></h4>
<ul>
<li>イチゴ、ブルーベリー</li>
<li>リンゴ、梨、桃</li>
<li>ブドウ、柿、みかん</li>
</ul>
<h3 id="解析項目" tabindex="-1"><a class="header-anchor" href="#解析項目"><span>解析項目</span></a></h3>
<h4 id="🔬-基本情報" tabindex="-1"><a class="header-anchor" href="#🔬-基本情報"><span>🔬 基本情報</span></a></h4>
<ul>
<li><strong>作物名</strong>: 学名と一般名</li>
<li><strong>品種</strong>: 可能な場合は具体的な品種</li>
<li><strong>分類</strong>: 植物学的分類</li>
</ul>
<h4 id="📈-成長段階" tabindex="-1"><a class="header-anchor" href="#📈-成長段階"><span>📈 成長段階</span></a></h4>
<ul>
<li><strong>発芽期</strong>: 種子から芽が出た段階</li>
<li><strong>幼苗期</strong>: 本葉が展開する段階</li>
<li><strong>成長期</strong>: 茎葉が伸長する段階</li>
<li><strong>開花期</strong>: 花が咲く段階</li>
<li><strong>結実期</strong>: 果実が形成される段階</li>
<li><strong>成熟期</strong>: 収穫可能な段階</li>
</ul>
<h4 id="🏥-健康状態" tabindex="-1"><a class="header-anchor" href="#🏥-健康状態"><span>🏥 健康状態</span></a></h4>
<ul>
<li><strong>全体的な健康度</strong>: 5段階評価</li>
<li><strong>病気の兆候</strong>: 具体的な病名と症状</li>
<li><strong>害虫の被害</strong>: 虫害の種類と程度</li>
<li><strong>栄養状態</strong>: 欠乏症状の有無</li>
</ul>
<h4 id="🌱-栽培環境" tabindex="-1"><a class="header-anchor" href="#🌱-栽培環境"><span>🌱 栽培環境</span></a></h4>
<ul>
<li><strong>土壌状態</strong>: 水分、栄養、pH推定</li>
<li><strong>日照条件</strong>: 光量と質の評価</li>
<li><strong>温度環境</strong>: 適温範囲との比較</li>
<li><strong>湿度条件</strong>: 最適湿度との比較</li>
</ul>
<h2 id="📊-解析結果の形式" tabindex="-1"><a class="header-anchor" href="#📊-解析結果の形式"><span>📊 解析結果の形式</span></a></h2>
<h3 id="標準的な出力例" tabindex="-1"><a class="header-anchor" href="#標準的な出力例"><span>標準的な出力例</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code class="language-markdown"><span class="line">🌱 <span class="token bold"><span class="token punctuation">**</span><span class="token content">作物解析結果</span><span class="token punctuation">**</span></span></span>
<span class="line"></span>
<span class="line"><span class="token bold"><span class="token punctuation">**</span><span class="token content">基本情報</span><span class="token punctuation">**</span></span></span>
<span class="line">• 作物: トマト (Solanum lycopersicum)</span>
<span class="line">• 品種: 大玉トマト系</span>
<span class="line">• 成長段階: 開花期 (第2花房開花中)</span>
<span class="line"></span>
<span class="line"><span class="token bold"><span class="token punctuation">**</span><span class="token content">健康状態評価</span><span class="token punctuation">**</span></span></span>
<span class="line">• 総合評価: ⭐⭐⭐⭐☆ (4/5)</span>
<span class="line">• 葉の状態: 健康的な緑色、軽微な下葉の黄化</span>
<span class="line">• 茎の状態: しっかりとした成長、支柱が必要</span>
<span class="line">• 花の状態: 正常な開花、受粉良好</span>
<span class="line"></span>
<span class="line"><span class="token bold"><span class="token punctuation">**</span><span class="token content">栽培環境</span><span class="token punctuation">**</span></span></span>
<span class="line">• 土壌: 適切な水分レベル</span>
<span class="line">• 日照: 十分な光量</span>
<span class="line">• 温度: 最適範囲内</span>
<span class="line">• 通気: 良好</span>
<span class="line"></span>
<span class="line"><span class="token bold"><span class="token punctuation">**</span><span class="token content">推奨アクション</span><span class="token punctuation">**</span></span></span>
<span class="line">• 🚰 水やり: 土の表面が乾いたら実施</span>
<span class="line">• 🌿 剪定: 下葉の除去を推奨</span>
<span class="line">• 🏗️ 支柱: 倒伏防止のため設置</span>
<span class="line">• 🍯 追肥: 2週間後にリン酸系肥料</span>
<span class="line"></span>
<span class="line"><span class="token bold"><span class="token punctuation">**</span><span class="token content">注意事項</span><span class="token punctuation">**</span></span></span>
<span class="line">• 梅雨時期の病気予防に注意</span>
<span class="line">• アブラムシの発生をチェック</span>
<span class="line">• 実が重くなる前に支柱強化</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="エラー時の出力" tabindex="-1"><a class="header-anchor" href="#エラー時の出力"><span>エラー時の出力</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code class="language-markdown"><span class="line">❌ <span class="token bold"><span class="token punctuation">**</span><span class="token content">解析エラー</span><span class="token punctuation">**</span></span></span>
<span class="line"></span>
<span class="line"><span class="token bold"><span class="token punctuation">**</span><span class="token content">エラー内容</span><span class="token punctuation">**</span></span>: 画像から作物を識別できませんでした</span>
<span class="line"></span>
<span class="line"><span class="token bold"><span class="token punctuation">**</span><span class="token content">考えられる原因</span><span class="token punctuation">**</span></span>:</span>
<span class="line">• 画像が不鮮明</span>
<span class="line">• 作物以外の被写体</span>
<span class="line">• 対応していない作物</span>
<span class="line">• 画像の品質が低い</span>
<span class="line"></span>
<span class="line"><span class="token bold"><span class="token punctuation">**</span><span class="token content">解決方法</span><span class="token punctuation">**</span></span>:</span>
<span class="line">• より鮮明な画像を撮影</span>
<span class="line">• 作物に焦点を合わせる</span>
<span class="line">• 明るい場所で撮影</span>
<span class="line">• 対応作物リストを確認</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="⚙️-高度な使用方法" tabindex="-1"><a class="header-anchor" href="#⚙️-高度な使用方法"><span>⚙️ 高度な使用方法</span></a></h2>
<h3 id="連続解析のワークフロー" tabindex="-1"><a class="header-anchor" href="#連続解析のワークフロー"><span>連続解析のワークフロー</span></a></h3>
<ol>
<li>
<p><strong>初期診断</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">/analyze image:plant_overview.jpg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>詳細部位の確認</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">/analyze image:leaf_closeup.jpg</span>
<span class="line">/analyze image:stem_detail.jpg</span>
<span class="line">/analyze image:root_system.jpg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>経過観察</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line"># 1週間後</span>
<span class="line">/analyze image:plant_week2.jpg</span>
<span class="line"></span>
<span class="line"># 2週間後</span>
<span class="line">/analyze image:plant_week3.jpg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="比較分析" tabindex="-1"><a class="header-anchor" href="#比較分析"><span>比較分析</span></a></h3>
<p>同じ作物の異なる個体や時期を比較する場合：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code class="language-markdown"><span class="line">📊 <span class="token bold"><span class="token punctuation">**</span><span class="token content">比較分析のコツ</span><span class="token punctuation">**</span></span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">1.</span> 同じ角度・距離で撮影</span>
<span class="line"><span class="token list punctuation">2.</span> 同じ時間帯に撮影</span>
<span class="line"><span class="token list punctuation">3.</span> 同じ照明条件で撮影</span>
<span class="line"><span class="token list punctuation">4.</span> 結果をスプレッドシートに記録</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🚨-制限事項" tabindex="-1"><a class="header-anchor" href="#🚨-制限事項"><span>🚨 制限事項</span></a></h2>
<h3 id="技術的制限" tabindex="-1"><a class="header-anchor" href="#技術的制限"><span>技術的制限</span></a></h3>
<ul>
<li><strong>ファイルサイズ</strong>: 500KB以下</li>
<li><strong>画像形式</strong>: PNG, JPEG, WEBP のみ</li>
<li><strong>解析時間</strong>: 通常3-10秒</li>
<li><strong>同時処理</strong>: 1つずつ順次処理</li>
</ul>
<h3 id="解析精度の限界" tabindex="-1"><a class="header-anchor" href="#解析精度の限界"><span>解析精度の限界</span></a></h3>
<ul>
<li><strong>新品種</strong>: 最新品種は認識精度が低い場合があります</li>
<li><strong>複合症状</strong>: 複数の病気が同時発生している場合</li>
<li><strong>環境要因</strong>: 極端な気象条件下での撮影</li>
<li><strong>画像品質</strong>: 低解像度や手ぶれの影響</li>
</ul>
<h2 id="🆘-サポート" tabindex="-1"><a class="header-anchor" href="#🆘-サポート"><span>🆘 サポート</span></a></h2>
<p>コマンドの使用で困った場合：</p>
<ol>
<li><strong>ドキュメント確認</strong>: <a href="/user-guide/faq.html" target="_blank" rel="noopener noreferrer">FAQ</a></li>
<li><strong>トラブルシューティング</strong>: <a href="/user-guide/troubleshooting.html" target="_blank" rel="noopener noreferrer">問題解決ガイド</a></li>
<li><strong>コミュニティサポート</strong>: <a href="https://discord.gg/your-support" target="_blank" rel="noopener noreferrer">Discord サーバー</a></li>
<li><strong>バグ報告</strong>: <a href="https://github.com/yourusername/discord-farmbot/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a></li>
</ol>
<hr>
<div class="hint-container tip">
<p class="hint-container-title">💡 プロのコツ</p>
<p>解析精度を上げるには、作物の全体像と詳細部分の両方を撮影することをお勧めします。特に病気の疑いがある場合は、症状が現れている部分のクローズアップも有効です。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">⚠️ 重要</p>
<p>Discord Farmbotの解析結果は診断の参考情報です。重要な農業判断や病気の治療については、必ず農業の専門家や獣医師にご相談ください。</p>
</div>
</div></template>


