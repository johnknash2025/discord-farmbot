# コマンドリファレンス

Discord Farmbotで使用できる全てのコマンドの詳細説明です。

## 📋 コマンド一覧

### `/analyze` - 画像解析コマンド

農作物の画像を解析して詳細な情報を提供します。

#### 基本構文
```
/analyze image:[画像ファイル]
```

#### パラメータ

| パラメータ | 型 | 必須 | 説明 |
|-----------|---|------|------|
| `image` | Attachment | ✅ | 解析したい農作物の画像ファイル |

#### 使用例

```bash
# 基本的な使用方法
/analyze image:tomato.jpg

# 複数の作物が写った画像
/analyze image:garden_overview.png

# 病気の疑いがある作物
/analyze image:diseased_plant.jpeg
```

## 🔍 解析の詳細

### 対応している作物

Discord Farmbotは以下のカテゴリの作物を解析できます：

#### 🥬 葉菜類
- レタス、キャベツ、白菜
- ほうれん草、小松菜、チンゲン菜
- 水菜、春菊、ルッコラ

#### 🍅 果菜類
- トマト、ミニトマト
- キュウリ、ナス、ピーマン
- ズッキーニ、オクラ、ゴーヤ

#### 🥕 根菜類
- 大根、人参、カブ
- ジャガイモ、サツマイモ
- 玉ねぎ、ニンニク

#### 🌾 穀物・豆類
- 米、小麦、トウモロコシ
- 大豆、小豆、インゲン
- エンドウ、そら豆

#### 🍓 果樹・ベリー類
- イチゴ、ブルーベリー
- リンゴ、梨、桃
- ブドウ、柿、みかん

### 解析項目

#### 🔬 基本情報
- **作物名**: 学名と一般名
- **品種**: 可能な場合は具体的な品種
- **分類**: 植物学的分類

#### 📈 成長段階
- **発芽期**: 種子から芽が出た段階
- **幼苗期**: 本葉が展開する段階
- **成長期**: 茎葉が伸長する段階
- **開花期**: 花が咲く段階
- **結実期**: 果実が形成される段階
- **成熟期**: 収穫可能な段階

#### 🏥 健康状態
- **全体的な健康度**: 5段階評価
- **病気の兆候**: 具体的な病名と症状
- **害虫の被害**: 虫害の種類と程度
- **栄養状態**: 欠乏症状の有無

#### 🌱 栽培環境
- **土壌状態**: 水分、栄養、pH推定
- **日照条件**: 光量と質の評価
- **温度環境**: 適温範囲との比較
- **湿度条件**: 最適湿度との比較

## 📊 解析結果の形式

### 標準的な出力例

```markdown
🌱 **作物解析結果**

**基本情報**
• 作物: トマト (Solanum lycopersicum)
• 品種: 大玉トマト系
• 成長段階: 開花期 (第2花房開花中)

**健康状態評価**
• 総合評価: ⭐⭐⭐⭐☆ (4/5)
• 葉の状態: 健康的な緑色、軽微な下葉の黄化
• 茎の状態: しっかりとした成長、支柱が必要
• 花の状態: 正常な開花、受粉良好

**栽培環境**
• 土壌: 適切な水分レベル
• 日照: 十分な光量
• 温度: 最適範囲内
• 通気: 良好

**推奨アクション**
• 🚰 水やり: 土の表面が乾いたら実施
• 🌿 剪定: 下葉の除去を推奨
• 🏗️ 支柱: 倒伏防止のため設置
• 🍯 追肥: 2週間後にリン酸系肥料

**注意事項**
• 梅雨時期の病気予防に注意
• アブラムシの発生をチェック
• 実が重くなる前に支柱強化
```

### エラー時の出力

```markdown
❌ **解析エラー**

**エラー内容**: 画像から作物を識別できませんでした

**考えられる原因**:
• 画像が不鮮明
• 作物以外の被写体
• 対応していない作物
• 画像の品質が低い

**解決方法**:
• より鮮明な画像を撮影
• 作物に焦点を合わせる
• 明るい場所で撮影
• 対応作物リストを確認
```

## ⚙️ 高度な使用方法

### 連続解析のワークフロー

1. **初期診断**
   ```
   /analyze image:plant_overview.jpg
   ```

2. **詳細部位の確認**
   ```
   /analyze image:leaf_closeup.jpg
   /analyze image:stem_detail.jpg
   /analyze image:root_system.jpg
   ```

3. **経過観察**
   ```
   # 1週間後
   /analyze image:plant_week2.jpg
   
   # 2週間後
   /analyze image:plant_week3.jpg
   ```

### 比較分析

同じ作物の異なる個体や時期を比較する場合：

```markdown
📊 **比較分析のコツ**

1. 同じ角度・距離で撮影
2. 同じ時間帯に撮影
3. 同じ照明条件で撮影
4. 結果をスプレッドシートに記録
```

## 🚨 制限事項

### 技術的制限

- **ファイルサイズ**: 500KB以下
- **画像形式**: PNG, JPEG, WEBP のみ
- **解析時間**: 通常3-10秒
- **同時処理**: 1つずつ順次処理

### 解析精度の限界

- **新品種**: 最新品種は認識精度が低い場合があります
- **複合症状**: 複数の病気が同時発生している場合
- **環境要因**: 極端な気象条件下での撮影
- **画像品質**: 低解像度や手ぶれの影響

## 🆘 サポート

コマンドの使用で困った場合：

1. **ドキュメント確認**: [FAQ](/user-guide/faq.html)
2. **トラブルシューティング**: [問題解決ガイド](/user-guide/troubleshooting.html)
3. **コミュニティサポート**: [Discord サーバー](https://discord.gg/Gq9jPaMX8g)
4. **バグ報告**: [GitHub Issues](https://github.com/johnknash2025/discord-farmbot/issues)

---

::: tip 💡 プロのコツ
解析精度を上げるには、作物の全体像と詳細部分の両方を撮影することをお勧めします。特に病気の疑いがある場合は、症状が現れている部分のクローズアップも有効です。
:::

::: warning ⚠️ 重要
Discord Farmbotの解析結果は診断の参考情報です。重要な農業判断や病気の治療については、必ず農業の専門家や獣医師にご相談ください。
:::