/* 第8章 連携・分析・AIのサービス — 復習カードと用語 */
window.AWSNOTE = window.AWSNOTE || { cards: [], terms: [] };

AWSNOTE.cards.push(
  { ch: "ch08", q: "疎結合とは？", a: "コンポーネント間の依存を弱め、一方が停止・遅延しても他方が影響を受けにくくする設計。AWS が推奨している。" },
  { ch: "ch08", q: "コンポーネントを疎結合にし、処理しきれないリクエストを一時的に保持するサービスは？", a: "Amazon SQS（メッセージキュー。受信側がポーリングで取得する）。" },
  { ch: "ch08", q: "1つの通知を、メール・SMS・Lambda など複数の宛先に同時配信するサービスは？", a: "Amazon SNS（プッシュ型、Pub/Sub）。" },
  { ch: "ch08", q: "AWS で発生したイベントをきっかけに処理を起動したり、決まった時刻に定期実行したりするためのサービスは？", a: "Amazon EventBridge。" },
  { ch: "ch08", q: "複数の処理（Lambda など）を順番に実行し、失敗時の再試行も制御するサービスは？", a: "AWS Step Functions。" },
  { ch: "ch08", q: "リアルタイムのストリーミングデータを収集・処理するサービスは？", a: "Amazon Kinesis（Data Streams／Data Firehose／Video Streams）。" },
  { ch: "ch08", q: "サーバーレスの ETL サービスで、データカタログも持つのは？", a: "AWS Glue。" },
  { ch: "ch08", q: "S3 のデータにサーバーなしで直接 SQL を実行できるサービスは？", a: "Amazon Athena（スキャンしたデータ量で課金）。" },
  { ch: "ch08", q: "Hadoop や Spark でビッグデータを処理するサービスは？", a: "Amazon EMR。" },
  { ch: "ch08", q: "データをグラフやダッシュボードで可視化する BI サービスは？", a: "Amazon QuickSight（現在は Amazon Quick Suite の中の Quick Sight）。" },
  { ch: "ch08", q: "独自の機械学習モデルを構築・学習・デプロイするサービスは？", a: "Amazon SageMaker（AI）。" },
  { ch: "ch08", q: "基盤モデルを API で呼び出して生成 AI アプリを作るサービスは？", a: "Amazon Bedrock。" },
  { ch: "ch08", q: "Polly と Transcribe の違いは？", a: "Polly＝テキスト→音声（読み上げ）。Transcribe＝音声→テキスト（文字起こし）。" },
  { ch: "ch08", q: "画像・動画から顔や物体を識別するサービスは？", a: "Amazon Rekognition。" },
  { ch: "ch08", q: "文章の感情（ポジティブ・ネガティブ）や意味を分析するサービスは？", a: "Amazon Comprehend。" },
  { ch: "ch08", q: "書類の画像から文字や表を抽出するサービスは？", a: "Amazon Textract。" },
  { ch: "ch08", q: "チャットボットを構築するサービス、社内文書をインテリジェント検索するサービス、レコメンドを生成するサービスはそれぞれ？", a: "チャットボット＝Amazon Lex、インテリジェント検索＝Amazon Kendra、レコメンド＝Amazon Personalize。" },
  { ch: "ch08", q: "サーバーをほぼそのまま AWS に移行する（リホスト）ためのサービスは？", a: "AWS Application Migration Service（MGN）。" },
  { ch: "ch08", q: "移行戦略「7つの R」は？", a: "Rehost・Replatform・Refactor・Repurchase・Retire・Retain・Relocate。" },
  { ch: "ch08", q: "クラウド上の仮想デスクトップサービスと、クラウド型コンタクトセンターのサービスは？", a: "仮想デスクトップ＝Amazon WorkSpaces、コンタクトセンター＝Amazon Connect。" }
);

AWSNOTE.terms.push(
  { ch: "ch08", w: "疎結合", r: "Loose coupling", m: "コンポーネント間の依存を弱め、一方の障害や遅延が他方に波及しにくくした構成。" },
  { ch: "ch08", w: "密結合", r: "Tight coupling", m: "コンポーネント同士が直接依存し合い、一方の停止が他方に波及する構成。" },
  { ch: "ch08", w: "メッセージ", r: "Message", m: "コンポーネント間で受け渡すデータの単位（注文内容や処理依頼など）。" },
  { ch: "ch08", w: "キュー", r: "Queue", m: "メッセージを到着順に一時保管する領域。" },
  { ch: "ch08", w: "Pub/Sub", r: "Publish / Subscribe", m: "発行者が1回送信すると、購読しているすべての受信者に配信されるモデル。SNS が該当。" },
  { ch: "ch08", w: "ポーリング", r: "Polling", m: "受信側が定期的に問い合わせてデータを取得する方式。" },
  { ch: "ch08", w: "プッシュ", r: "Push", m: "送信側から受信側へ能動的に配信する方式。" },
  { ch: "ch08", w: "ワークフロー", r: "Workflow", m: "業務や処理の手順を定義したもの。" },
  { ch: "ch08", w: "ストリーミングデータ", r: "Streaming data", m: "継続的に発生し続けるデータ（クリック履歴・センサー値・ログなど）。" },
  { ch: "ch08", w: "ETL", r: "Extract, Transform, Load", m: "データを抽出し、分析しやすい形に変換して格納する処理。" },
  { ch: "ch08", w: "データレイク", r: "Data lake", m: "形式を問わず、データを元の形のまま大量に保管する場所。AWS では S3 が中心。" },
  { ch: "ch08", w: "データウェアハウス（DWH）", r: "Data warehouse", m: "分析用に整理・構造化したデータを蓄積するデータベース。Redshift が該当。" },
  { ch: "ch08", w: "SQL", r: "Structured Query Language", m: "データベースに対して検索・集計などを指示するための言語。" },
  { ch: "ch08", w: "BI", r: "Business Intelligence", m: "データをグラフやダッシュボードで可視化し、意思決定に活用すること。" },
  { ch: "ch08", w: "ダッシュボード", r: "Dashboard", m: "主要な指標やグラフを1画面に集約して表示する画面。" },
  { ch: "ch08", w: "ビッグデータ", r: "Big data", m: "一般的なコンピューター1台では処理しきれない規模のデータ。" },
  { ch: "ch08", w: "機械学習（ML）", r: "Machine Learning", m: "大量のデータからパターンや規則をコンピューターに学習させる技術。" },
  { ch: "ch08", w: "モデル", r: "Model", m: "機械学習によって作られた判断・予測の仕組み。データを入力すると予測結果を出力する。" },
  { ch: "ch08", w: "生成 AI", r: "Generative AI", m: "文章・画像・プログラムなどを新たに生成する AI。" },
  { ch: "ch08", w: "基盤モデル（FM）", r: "Foundation Model", m: "大量のデータで事前学習された、幅広い用途に使える大規模な AI モデル。" },
  { ch: "ch08", w: "自然言語処理（NLP）", r: "Natural Language Processing", m: "人間が日常的に使う言語をコンピューターで解析・処理する技術。" },
  { ch: "ch08", w: "OCR", r: "Optical Character Recognition", m: "画像内の文字を認識し、テキストデータに変換する技術。" },
  { ch: "ch08", w: "マイグレーション", r: "Migration", m: "システムやデータを現在の環境から新しい環境へ移すこと。移行。" },
  { ch: "ch08", w: "リフト＆シフト", r: "Lift and shift", m: "既存のシステムをほぼ変更せずにクラウドへ移すこと（リホスト）。" },
  { ch: "ch08", w: "IoT", r: "Internet of Things", m: "家電・車両・センサーなど、さまざまな機器がインターネットに接続されること。" },
  { ch: "ch08", w: "仮想デスクトップ（VDI）", r: "Virtual Desktop Infrastructure", m: "デスクトップ環境をサーバー上で動かし、利用者の端末には画面だけを転送する仕組み。" }
);
