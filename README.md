# aws-get-certified

AWS 認定（クラウドプラクティショナー／ソリューションアーキテクト アソシエイト）の対策用学習サイト「**AWS 合格ノート**」です。
GitHub Pages で公開し、PC・スマートフォンのブラウザで閲覧できます。公開先：<https://ht-0328.github.io/aws-get-certified/>

## 特徴

- **専門用語には定義を併記**：点線の付いた用語はタップで定義を表示します。各章の「用語の補足」と、全章を横断して検索できる「用語集」も用意しています。
- **AWS 公式アイコンによる構成図**：リージョン・VPC・サブネットなどのグループ表記も、AWS 公式の作図ルールに準じた見た目にしています。
- **記憶研究に基づく構成**
  - 🗺️ 全体像から細部へ（各章の冒頭で「理解してほしいこと」と構成を提示）
  - 💡 言葉と図を結びつける（二重符号化）
  - 🔑 分類と、意味のある言葉に言い換えた覚え方（チャンク化）
  - 🧠 読み返しではなく想起練習（テスト効果）
  - 📅 1日 → 3日 → 7日 → 14日 → 30日 の間隔反復。復習日はサイトが自動で計算します
  - 🃏 復習カード（正答したカードほど出題間隔が広がる）

## ページ構成

```
docs/
├── index.html            トップ（章の一覧と今日の復習）
├── exam-guide.html       試験ガイド（形式・出題範囲・学習プラン）
├── glossary.html         用語集
├── cards.html            復習カード
├── chapters/
│   ├── study-method.html 学習方法（最初に読む）
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
    ├── data/words.js         問題文によく出る言葉（用語集に表示）
    └── aws-icons/            AWS Architecture Icons（SVG）
```

## GitHub Pages で公開する手順

`.github/workflows/pages.yml` のワークフローで自動デプロイします。

1. **最初の1回だけ**：GitHub のリポジトリ画面で **Settings → Pages** を開き、**Build and deployment** の Source を「**GitHub Actions**」にする
2. このブランチを `main` にマージする
3. あとは `main` の `docs/` が変わるたびに自動で公開されます（**Actions** タブの「Deploy to GitHub Pages」から手動実行も可能）
4. 公開先：<https://ht-0328.github.io/aws-get-certified/>

ローカルで見るときは `docs/index.html` をブラウザで開くだけで OK です。

## 内容を追加するには

- 新しい章：`docs/chapters/` に HTML を追加し、`docs/assets/site.js` の `CHAPTERS` に1行足す
- カード・用語：`docs/assets/data/chXX.js` に追記（新しいファイルを作ったら `cards.html` と `glossary.html` の `<script>` にも追加）

## 練習問題の結果

`practice-results/<試験>/` に、Skill Builder の結果ページ（保存した HTML）と、その回のまとめ（Markdown）を置きます。HTML は氏名やメールアドレスを含むため Git には入れません（`.gitignore`）。置き方は `practice-results/README.md` を参照してください。

## クレジット

- アイコン：[AWS Architecture Icons](https://aws.amazon.com/architecture/icons/)（npm パッケージ [aws-icons](https://github.com/MKAbuMattar/aws-icons) 経由で取得）。Amazon Web Services、AWS およびそのロゴは Amazon.com, Inc. またはその関連会社の商標です。
- 学習方法：認知心理学の学習研究（間隔反復・分散学習、テスト効果、二重符号化、精緻化など）に基づいて構成しています。
- 内容は個人の学習用資料です。最新の情報は AWS 公式ドキュメント・試験ガイドで確認してください。
