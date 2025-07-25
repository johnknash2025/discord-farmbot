# よくある質問（FAQ）

Discord Farmbotに関してよく寄せられる質問とその回答をまとめました。

## 🤔 一般的な質問

### Q: Discord Farmbotは無料で使えますか？

**A:** はい、Discord Farmbot自体は完全に無料でご利用いただけます。ただし、以下の制限があります：

- Gemini APIの無料枠内での利用
- Cloudflare Workersの無料枠内での利用
- 1日あたりの解析回数に制限がある場合があります

### Q: どのような作物に対応していますか？

**A:** 現在、以下のカテゴリの作物に対応しています：

- **葉菜類**: レタス、キャベツ、ほうれん草など
- **果菜類**: トマト、キュウリ、ナス、ピーマンなど
- **根菜類**: 大根、人参、ジャガイモなど
- **穀物**: 米、小麦、トウモロコシなど
- **果樹**: リンゴ、梨、柑橘類など

詳細は[対応作物リスト](/user-guide/commands.html#対応している作物)をご確認ください。

### Q: 解析結果はどの程度正確ですか？

**A:** 解析精度は以下の要因によって変わります：

- **画像品質**: 95%以上（高品質画像）
- **一般的な作物**: 90-95%
- **珍しい品種**: 70-85%
- **病気の診断**: 80-90%

::: warning 重要
解析結果は参考情報です。重要な判断は必ず専門家にご相談ください。
:::

## 📸 画像に関する質問

### Q: どのような画像が最適ですか？

**A:** 以下の条件を満たす画像が最適です：

✅ **推奨条件**
- 明るい自然光での撮影
- 作物にピントが合っている
- 500KB以下のファイルサイズ
- PNG、JPEG、WEBP形式

❌ **避けるべき条件**
- 暗い場所での撮影
- ぼやけた画像
- 過度に加工された画像
- 作物以外が主体の画像

### Q: 夜間や室内でも解析できますか？

**A:** 可能ですが、精度が低下する可能性があります：

- **室内**: LED照明下であれば解析可能
- **夜間**: フラッシュ使用で改善される場合があります
- **曇天**: 問題なく解析可能

### Q: 複数の作物が写った画像は解析できますか？

**A:** はい、可能です。ただし以下の点にご注意ください：

- 主要な作物に焦点を当てて撮影
- 重なりすぎている場合は個別撮影を推奨
- 解析結果は最も目立つ作物について表示されます

## 🔧 技術的な質問

### Q: 「画像が大きすぎます」エラーが出ます

**A:** 画像ファイルサイズが500KBを超えています：

**解決方法:**
1. 画像編集アプリで圧縮
2. 解像度を下げる（1920x1080程度推奨）
3. JPEG形式で保存（品質80-90%）

**圧縮ツール例:**
- オンライン: TinyPNG、Compressor.io
- アプリ: Photoshop、GIMP
- スマホ: 標準カメラアプリの設定変更

### Q: 「解析に失敗しました」エラーが出ます

**A:** 以下の原因が考えられます：

**画像品質の問題:**
- ぼやけている → 再撮影
- 暗すぎる → 明るい場所で撮影
- 作物が小さすぎる → 近づいて撮影

**技術的な問題:**
- 一時的なAPI障害 → 少し待ってから再試行
- ネットワーク問題 → 接続を確認

### Q: 解析に時間がかかります

**A:** 通常3-10秒で完了しますが、以下の要因で遅くなる場合があります：

- **画像サイズ**: 大きな画像は処理時間が長くなります
- **サーバー負荷**: 利用者が多い時間帯
- **ネットワーク**: 接続速度の影響

**改善方法:**
- 画像サイズを適切に調整
- 利用者の少ない時間帯を選ぶ
- 安定したネットワーク環境で利用

## 🌱 農業に関する質問

### Q: 病気の診断はどの程度信頼できますか？

**A:** 病気診断の精度は約80-90%ですが、以下の点にご注意ください：

**得意な診断:**
- 一般的な病気（うどんこ病、べと病など）
- 明確な症状が現れている場合
- 単一の病気による症状

**苦手な診断:**
- 複数の病気が同時発生
- 初期症状や軽微な症状
- 珍しい病気や地域特有の病気

::: danger 重要な注意
病気の疑いがある場合は、必ず農業指導員や植物病理の専門家にご相談ください。
:::

### Q: 収穫時期の予測はできますか？

**A:** 成長段階に基づいた大まかな予測は可能です：

**予測可能な情報:**
- 現在の成長段階
- 一般的な成熟までの期間
- 収穫の目安となる特徴

**予測困難な要因:**
- 気候条件の変化
- 品種による差異
- 栽培管理の影響

### Q: 肥料や農薬の推奨はありますか？

**A:** 一般的なアドバイスは提供しますが、具体的な製品推奨は行いません：

**提供する情報:**
- 栄養状態の評価
- 一般的な施肥のタイミング
- 病害虫対策の基本方針

**専門家への相談が必要:**
- 具体的な農薬選択
- 施肥量の決定
- 地域特有の栽培方法

## 🔒 プライバシーと安全性

### Q: 送信した画像はどう扱われますか？

**A:** プライバシー保護を最優先に考えています：

**画像の取り扱い:**
- 解析後は即座に削除
- サーバーに保存されません
- 第三者と共有されません

**データの利用:**
- 解析結果の統計情報のみ収集
- 個人を特定できる情報は収集しません

### Q: 商用利用は可能ですか？

**A:** はい、以下の条件で商用利用可能です：

**許可される利用:**
- 農業経営での利用
- 教育目的での利用
- 研究での利用

**制限事項:**
- 大量の自動解析（要相談）
- 競合サービスでの利用
- 解析結果の再販売

## 🆘 サポート

### Q: 問題が解決しない場合はどうすればいいですか？

**A:** 以下の方法でサポートを受けられます：

1. **ドキュメント確認**
   - [トラブルシューティング](/user-guide/troubleshooting.html)
   - [コマンドリファレンス](/user-guide/commands.html)

2. **コミュニティサポート**
   - [Discord サポートサーバー](https://discord.gg/Gq9jPaMX8g)
   - [GitHub Discussions](https://github.com/johnknash2025/discord-farmbot/discussions)

3. **バグ報告**
   - [GitHub Issues](https://github.com/johnknash2025/discord-farmbot/issues)

### Q: 新機能の要望はどこに送ればいいですか？

**A:** 以下の方法で要望をお送りください：

- **GitHub Issues**: [Feature Request](https://github.com/johnknash2025/discord-farmbot/issues/new?template=feature_request.md)
- **Discord**: サポートサーバーの要望チャンネル
- **メール**: support@farmbot.example.com

## 📊 統計情報

### Q: Discord Farmbotの利用統計は公開されていますか？

**A:** 以下の統計情報を定期的に公開しています：

- 月間解析回数
- 対応作物の追加状況
- 解析精度の改善状況
- ユーザー満足度調査結果

[統計ダッシュボード](https://stats.farmbot.example.com) で最新情報をご確認いただけます。

---

::: tip 💡 その他の質問
このFAQで解決しない質問がございましたら、お気軽に[サポートチャンネル](https://discord.gg/Gq9jPaMX8g)でお尋ねください。コミュニティメンバーや開発チームがサポートいたします。
:::

::: info 📝 FAQ更新
このFAQは定期的に更新されます。新しい質問や重要な情報があれば随時追加いたします。
:::