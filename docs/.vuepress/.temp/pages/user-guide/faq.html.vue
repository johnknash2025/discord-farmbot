<template><div><h1 id="よくある質問-faq" tabindex="-1"><a class="header-anchor" href="#よくある質問-faq"><span>よくある質問（FAQ）</span></a></h1>
<p>Discord Farmbotに関してよく寄せられる質問とその回答をまとめました。</p>
<h2 id="🤔-一般的な質問" tabindex="-1"><a class="header-anchor" href="#🤔-一般的な質問"><span>🤔 一般的な質問</span></a></h2>
<h3 id="q-discord-farmbotは無料で使えますか" tabindex="-1"><a class="header-anchor" href="#q-discord-farmbotは無料で使えますか"><span>Q: Discord Farmbotは無料で使えますか？</span></a></h3>
<p><strong>A:</strong> はい、Discord Farmbot自体は完全に無料でご利用いただけます。ただし、以下の制限があります：</p>
<ul>
<li>Gemini APIの無料枠内での利用</li>
<li>Cloudflare Workersの無料枠内での利用</li>
<li>1日あたりの解析回数に制限がある場合があります</li>
</ul>
<h3 id="q-どのような作物に対応していますか" tabindex="-1"><a class="header-anchor" href="#q-どのような作物に対応していますか"><span>Q: どのような作物に対応していますか？</span></a></h3>
<p><strong>A:</strong> 現在、以下のカテゴリの作物に対応しています：</p>
<ul>
<li><strong>葉菜類</strong>: レタス、キャベツ、ほうれん草など</li>
<li><strong>果菜類</strong>: トマト、キュウリ、ナス、ピーマンなど</li>
<li><strong>根菜類</strong>: 大根、人参、ジャガイモなど</li>
<li><strong>穀物</strong>: 米、小麦、トウモロコシなど</li>
<li><strong>果樹</strong>: リンゴ、梨、柑橘類など</li>
</ul>
<p>詳細は<a href="/user-guide/commands.html#%E5%AF%BE%E5%BF%9C%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E4%BD%9C%E7%89%A9" target="_blank" rel="noopener noreferrer">対応作物リスト</a>をご確認ください。</p>
<h3 id="q-解析結果はどの程度正確ですか" tabindex="-1"><a class="header-anchor" href="#q-解析結果はどの程度正確ですか"><span>Q: 解析結果はどの程度正確ですか？</span></a></h3>
<p><strong>A:</strong> 解析精度は以下の要因によって変わります：</p>
<ul>
<li><strong>画像品質</strong>: 95%以上（高品質画像）</li>
<li><strong>一般的な作物</strong>: 90-95%</li>
<li><strong>珍しい品種</strong>: 70-85%</li>
<li><strong>病気の診断</strong>: 80-90%</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">重要</p>
<p>解析結果は参考情報です。重要な判断は必ず専門家にご相談ください。</p>
</div>
<h2 id="📸-画像に関する質問" tabindex="-1"><a class="header-anchor" href="#📸-画像に関する質問"><span>📸 画像に関する質問</span></a></h2>
<h3 id="q-どのような画像が最適ですか" tabindex="-1"><a class="header-anchor" href="#q-どのような画像が最適ですか"><span>Q: どのような画像が最適ですか？</span></a></h3>
<p><strong>A:</strong> 以下の条件を満たす画像が最適です：</p>
<p>✅ <strong>推奨条件</strong></p>
<ul>
<li>明るい自然光での撮影</li>
<li>作物にピントが合っている</li>
<li>500KB以下のファイルサイズ</li>
<li>PNG、JPEG、WEBP形式</li>
</ul>
<p>❌ <strong>避けるべき条件</strong></p>
<ul>
<li>暗い場所での撮影</li>
<li>ぼやけた画像</li>
<li>過度に加工された画像</li>
<li>作物以外が主体の画像</li>
</ul>
<h3 id="q-夜間や室内でも解析できますか" tabindex="-1"><a class="header-anchor" href="#q-夜間や室内でも解析できますか"><span>Q: 夜間や室内でも解析できますか？</span></a></h3>
<p><strong>A:</strong> 可能ですが、精度が低下する可能性があります：</p>
<ul>
<li><strong>室内</strong>: LED照明下であれば解析可能</li>
<li><strong>夜間</strong>: フラッシュ使用で改善される場合があります</li>
<li><strong>曇天</strong>: 問題なく解析可能</li>
</ul>
<h3 id="q-複数の作物が写った画像は解析できますか" tabindex="-1"><a class="header-anchor" href="#q-複数の作物が写った画像は解析できますか"><span>Q: 複数の作物が写った画像は解析できますか？</span></a></h3>
<p><strong>A:</strong> はい、可能です。ただし以下の点にご注意ください：</p>
<ul>
<li>主要な作物に焦点を当てて撮影</li>
<li>重なりすぎている場合は個別撮影を推奨</li>
<li>解析結果は最も目立つ作物について表示されます</li>
</ul>
<h2 id="🔧-技術的な質問" tabindex="-1"><a class="header-anchor" href="#🔧-技術的な質問"><span>🔧 技術的な質問</span></a></h2>
<h3 id="q-「画像が大きすぎます」エラーが出ます" tabindex="-1"><a class="header-anchor" href="#q-「画像が大きすぎます」エラーが出ます"><span>Q: 「画像が大きすぎます」エラーが出ます</span></a></h3>
<p><strong>A:</strong> 画像ファイルサイズが500KBを超えています：</p>
<p><strong>解決方法:</strong></p>
<ol>
<li>画像編集アプリで圧縮</li>
<li>解像度を下げる（1920x1080程度推奨）</li>
<li>JPEG形式で保存（品質80-90%）</li>
</ol>
<p><strong>圧縮ツール例:</strong></p>
<ul>
<li>オンライン: TinyPNG、Compressor.io</li>
<li>アプリ: Photoshop、GIMP</li>
<li>スマホ: 標準カメラアプリの設定変更</li>
</ul>
<h3 id="q-「解析に失敗しました」エラーが出ます" tabindex="-1"><a class="header-anchor" href="#q-「解析に失敗しました」エラーが出ます"><span>Q: 「解析に失敗しました」エラーが出ます</span></a></h3>
<p><strong>A:</strong> 以下の原因が考えられます：</p>
<p><strong>画像品質の問題:</strong></p>
<ul>
<li>ぼやけている → 再撮影</li>
<li>暗すぎる → 明るい場所で撮影</li>
<li>作物が小さすぎる → 近づいて撮影</li>
</ul>
<p><strong>技術的な問題:</strong></p>
<ul>
<li>一時的なAPI障害 → 少し待ってから再試行</li>
<li>ネットワーク問題 → 接続を確認</li>
</ul>
<h3 id="q-解析に時間がかかります" tabindex="-1"><a class="header-anchor" href="#q-解析に時間がかかります"><span>Q: 解析に時間がかかります</span></a></h3>
<p><strong>A:</strong> 通常3-10秒で完了しますが、以下の要因で遅くなる場合があります：</p>
<ul>
<li><strong>画像サイズ</strong>: 大きな画像は処理時間が長くなります</li>
<li><strong>サーバー負荷</strong>: 利用者が多い時間帯</li>
<li><strong>ネットワーク</strong>: 接続速度の影響</li>
</ul>
<p><strong>改善方法:</strong></p>
<ul>
<li>画像サイズを適切に調整</li>
<li>利用者の少ない時間帯を選ぶ</li>
<li>安定したネットワーク環境で利用</li>
</ul>
<h2 id="🌱-農業に関する質問" tabindex="-1"><a class="header-anchor" href="#🌱-農業に関する質問"><span>🌱 農業に関する質問</span></a></h2>
<h3 id="q-病気の診断はどの程度信頼できますか" tabindex="-1"><a class="header-anchor" href="#q-病気の診断はどの程度信頼できますか"><span>Q: 病気の診断はどの程度信頼できますか？</span></a></h3>
<p><strong>A:</strong> 病気診断の精度は約80-90%ですが、以下の点にご注意ください：</p>
<p><strong>得意な診断:</strong></p>
<ul>
<li>一般的な病気（うどんこ病、べと病など）</li>
<li>明確な症状が現れている場合</li>
<li>単一の病気による症状</li>
</ul>
<p><strong>苦手な診断:</strong></p>
<ul>
<li>複数の病気が同時発生</li>
<li>初期症状や軽微な症状</li>
<li>珍しい病気や地域特有の病気</li>
</ul>
<div class="hint-container caution">
<p class="hint-container-title">重要な注意</p>
<p>病気の疑いがある場合は、必ず農業指導員や植物病理の専門家にご相談ください。</p>
</div>
<h3 id="q-収穫時期の予測はできますか" tabindex="-1"><a class="header-anchor" href="#q-収穫時期の予測はできますか"><span>Q: 収穫時期の予測はできますか？</span></a></h3>
<p><strong>A:</strong> 成長段階に基づいた大まかな予測は可能です：</p>
<p><strong>予測可能な情報:</strong></p>
<ul>
<li>現在の成長段階</li>
<li>一般的な成熟までの期間</li>
<li>収穫の目安となる特徴</li>
</ul>
<p><strong>予測困難な要因:</strong></p>
<ul>
<li>気候条件の変化</li>
<li>品種による差異</li>
<li>栽培管理の影響</li>
</ul>
<h3 id="q-肥料や農薬の推奨はありますか" tabindex="-1"><a class="header-anchor" href="#q-肥料や農薬の推奨はありますか"><span>Q: 肥料や農薬の推奨はありますか？</span></a></h3>
<p><strong>A:</strong> 一般的なアドバイスは提供しますが、具体的な製品推奨は行いません：</p>
<p><strong>提供する情報:</strong></p>
<ul>
<li>栄養状態の評価</li>
<li>一般的な施肥のタイミング</li>
<li>病害虫対策の基本方針</li>
</ul>
<p><strong>専門家への相談が必要:</strong></p>
<ul>
<li>具体的な農薬選択</li>
<li>施肥量の決定</li>
<li>地域特有の栽培方法</li>
</ul>
<h2 id="🔒-プライバシーと安全性" tabindex="-1"><a class="header-anchor" href="#🔒-プライバシーと安全性"><span>🔒 プライバシーと安全性</span></a></h2>
<h3 id="q-送信した画像はどう扱われますか" tabindex="-1"><a class="header-anchor" href="#q-送信した画像はどう扱われますか"><span>Q: 送信した画像はどう扱われますか？</span></a></h3>
<p><strong>A:</strong> プライバシー保護を最優先に考えています：</p>
<p><strong>画像の取り扱い:</strong></p>
<ul>
<li>解析後は即座に削除</li>
<li>サーバーに保存されません</li>
<li>第三者と共有されません</li>
</ul>
<p><strong>データの利用:</strong></p>
<ul>
<li>解析結果の統計情報のみ収集</li>
<li>個人を特定できる情報は収集しません</li>
</ul>
<h3 id="q-商用利用は可能ですか" tabindex="-1"><a class="header-anchor" href="#q-商用利用は可能ですか"><span>Q: 商用利用は可能ですか？</span></a></h3>
<p><strong>A:</strong> はい、以下の条件で商用利用可能です：</p>
<p><strong>許可される利用:</strong></p>
<ul>
<li>農業経営での利用</li>
<li>教育目的での利用</li>
<li>研究での利用</li>
</ul>
<p><strong>制限事項:</strong></p>
<ul>
<li>大量の自動解析（要相談）</li>
<li>競合サービスでの利用</li>
<li>解析結果の再販売</li>
</ul>
<h2 id="🆘-サポート" tabindex="-1"><a class="header-anchor" href="#🆘-サポート"><span>🆘 サポート</span></a></h2>
<h3 id="q-問題が解決しない場合はどうすればいいですか" tabindex="-1"><a class="header-anchor" href="#q-問題が解決しない場合はどうすればいいですか"><span>Q: 問題が解決しない場合はどうすればいいですか？</span></a></h3>
<p><strong>A:</strong> 以下の方法でサポートを受けられます：</p>
<ol>
<li>
<p><strong>ドキュメント確認</strong></p>
<ul>
<li><a href="/user-guide/troubleshooting.html" target="_blank" rel="noopener noreferrer">トラブルシューティング</a></li>
<li><a href="/user-guide/commands.html" target="_blank" rel="noopener noreferrer">コマンドリファレンス</a></li>
</ul>
</li>
<li>
<p><strong>コミュニティサポート</strong></p>
<ul>
<li><a href="https://discord.gg/your-support" target="_blank" rel="noopener noreferrer">Discord サポートサーバー</a></li>
<li><a href="https://github.com/yourusername/discord-farmbot/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a></li>
</ul>
</li>
<li>
<p><strong>バグ報告</strong></p>
<ul>
<li><a href="https://github.com/yourusername/discord-farmbot/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a></li>
</ul>
</li>
</ol>
<h3 id="q-新機能の要望はどこに送ればいいですか" tabindex="-1"><a class="header-anchor" href="#q-新機能の要望はどこに送ればいいですか"><span>Q: 新機能の要望はどこに送ればいいですか？</span></a></h3>
<p><strong>A:</strong> 以下の方法で要望をお送りください：</p>
<ul>
<li><strong>GitHub Issues</strong>: <a href="https://github.com/yourusername/discord-farmbot/issues/new?template=feature_request.md" target="_blank" rel="noopener noreferrer">Feature Request</a></li>
<li><strong>Discord</strong>: サポートサーバーの要望チャンネル</li>
<li><strong>メール</strong>: support@farmbot.example.com</li>
</ul>
<h2 id="📊-統計情報" tabindex="-1"><a class="header-anchor" href="#📊-統計情報"><span>📊 統計情報</span></a></h2>
<h3 id="q-discord-farmbotの利用統計は公開されていますか" tabindex="-1"><a class="header-anchor" href="#q-discord-farmbotの利用統計は公開されていますか"><span>Q: Discord Farmbotの利用統計は公開されていますか？</span></a></h3>
<p><strong>A:</strong> 以下の統計情報を定期的に公開しています：</p>
<ul>
<li>月間解析回数</li>
<li>対応作物の追加状況</li>
<li>解析精度の改善状況</li>
<li>ユーザー満足度調査結果</li>
</ul>
<p><a href="https://stats.farmbot.example.com" target="_blank" rel="noopener noreferrer">統計ダッシュボード</a> で最新情報をご確認いただけます。</p>
<hr>
<div class="hint-container tip">
<p class="hint-container-title">💡 その他の質問</p>
<p>このFAQで解決しない質問がございましたら、お気軽に<a href="https://discord.gg/your-support" target="_blank" rel="noopener noreferrer">サポートチャンネル</a>でお尋ねください。コミュニティメンバーや開発チームがサポートいたします。</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">📝 FAQ更新</p>
<p>このFAQは定期的に更新されます。新しい質問や重要な情報があれば随時追加いたします。</p>
</div>
</div></template>


