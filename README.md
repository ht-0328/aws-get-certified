# aws-get-certified

AWS 認定（クラウドプラクティショナー／ソリューションアーキテクト アソシエイト）に合格するための学習サイト「**AWS 合格ノート**」です。
GitHub Pages で公開して、ブラウザ（スマホでも）で読めます。

## 特徴

- **むずかしい言葉にはかならず説明つき**：点線の言葉をタップすると意味が出ます。各章に「ことばメモ」、全章まとめた「用語集」もあります。
- **AWS の本物のアイコンで図解**：リージョン・VPC・サブネットなどの枠も、AWS 公式の図のルールに近い見た目にしています。
- **科学的な覚え方にそった構成**
  - 🗺️ 全体像（地図）から細部へ
  - 🏠 たとえ話・イメージで覚える（イメージ連結）
  - 🔑 頭文字・グループ分けで覚える（頭字法・グループ分類）
  - 🙌 読み返すより「手ぶらで思い出す」（アクティブリコール）
  - 📅 1日→3日→7日→14日→30日 の間隔で復習（間隔反復）。復習日はサイトが自動で計算します
  - 🃏 復習カード（思い出せたカードほど間隔があく）

## ページ構成

```
docs/
├── index.html            トップ（章の一覧と今日の復習）
├── exam-guide.html       試験ガイド（形式・出題範囲・学習プラン）
├── glossary.html         用語集
├── cards.html            復習カード
├── chapters/
│   ├── study-method.html 勉強法（最初に読む）
│   ├── 01-cloud-basics.html
│   ├── 02-security-iam.html
│   ├── 03-compute.html
│   ├── 04-storage.html
│   ├── 05-database.html
│   ├── 06-network.html
│   ├── 07-operations.html
│   ├── 08-integration-analytics-ai.html
│   └── 09-billing-support.html
└── assets/
    ├── style.css / site.js   共通デザインとスクリプト
    ├── data/chXX.js          各章の復習カードと用語
    └── aws-icons/            AWS Architecture Icons（SVG）
```

## GitHub Pages で公開する手順

`.github/workflows/pages.yml` のワークフローで自動デプロイします。

1. **最初の1回だけ**：GitHub のリポジトリ画面で **Settings → Pages** を開き、**Build and deployment** の Source を「**GitHub Actions**」にする
2. このブランチを `main` にマージする
3. あとは `main` の `docs/` が変わるたびに自動で公開されます（**Actions** タブの「Deploy to GitHub Pages」から手動実行も可能）
4. 公開先：`https://ht-0328.github.io/aws-get-certified/`

ローカルで見るときは `docs/index.html` をブラウザで開くだけで OK です。

## 内容を追加するには

- 新しい章：`docs/chapters/` に HTML を追加し、`docs/assets/site.js` の `CHAPTERS` に1行足す
- カード・用語：`docs/assets/data/chXX.js` に追記（新しいファイルを作ったら `cards.html` と `glossary.html` の `<script>` にも追加）

## クレジット

- アイコン：[AWS Architecture Icons](https://aws.amazon.com/architecture/icons/)（npm パッケージ [aws-icons](https://github.com/MKAbuMattar/aws-icons) 経由で取得）。Amazon Web Services、AWS およびそのロゴは Amazon.com, Inc. またはその関連会社の商標です。
- 勉強法：吉永賢一さんの YouTube チャンネル「[記憶博士の非常識な記憶学](https://www.youtube.com/@ken_yoshinaga)」で扱われているテーマと、認知心理学の学習研究（間隔反復・テスト効果など）を参考にまとめています。
- 内容は個人の学習用まとめです。最新情報は AWS 公式ドキュメント・試験ガイドで確認してください。
