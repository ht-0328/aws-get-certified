/* 第8章 連携・分析・AIのサービス — 復習カードと用語 */
window.AWSNOTE = window.AWSNOTE || { cards: [], terms: [] };

AWSNOTE.cards.push(
  { ch: "ch08", q: "疎結合とは？", a: "部品どうしをゆるくつなぎ、片方が止まったり遅れたりしても、もう片方が影響を受けにくくすること。AWS が推奨する設計。" },
  { ch: "ch08", q: "コンポーネントを疎結合にし、処理しきれないリクエストをためておくサービスは？", a: "Amazon SQS（メッセージキュー。受け取る側が取りに行く）。" },
  { ch: "ch08", q: "1つの通知を、メール・SMS・Lambda など複数の宛先に一斉に送るサービスは？", a: "Amazon SNS（プッシュ型、Pub/Sub）。" },
  { ch: "ch08", q: "「AWS で何かが起きたら処理する」「毎日決まった時間に実行する」ためのサービスは？", a: "Amazon EventBridge。" },
  { ch: "ch08", q: "複数の処理（Lambda など）を順番に実行し、失敗時のやり直しも管理するサービスは？", a: "AWS Step Functions。" },
  { ch: "ch08", q: "リアルタイムのストリーミングデータを集めて処理するサービスは？", a: "Amazon Kinesis（Data Streams／Data Firehose／Video Streams）。" },
  { ch: "ch08", q: "サーバーレスの ETL サービスで、データカタログも持つのは？", a: "AWS Glue。" },
  { ch: "ch08", q: "S3 のデータにサーバーなしで直接 SQL を実行できるサービスは？", a: "Amazon Athena（スキャンしたデータ量で課金）。" },
  { ch: "ch08", q: "Hadoop や Spark でビッグデータを処理するサービスは？", a: "Amazon EMR。" },
  { ch: "ch08", q: "データをグラフやダッシュボードで見える化する BI サービスは？", a: "Amazon QuickSight（現在は Amazon Quick Suite の中の Quick Sight）。" },
  { ch: "ch08", q: "独自の機械学習モデルを構築・学習・デプロイするサービスは？", a: "Amazon SageMaker（AI）。" },
  { ch: "ch08", q: "基盤モデルを API で呼び出して生成 AI アプリを作るサービスは？", a: "Amazon Bedrock。" },
  { ch: "ch08", q: "Polly と Transcribe のちがいは？", a: "Polly＝文字→声（読み上げ）。Transcribe＝声→文字（文字起こし）。" },
  { ch: "ch08", q: "画像・動画から顔や物を見分けるサービスは？", a: "Amazon Rekognition。" },
  { ch: "ch08", q: "文章の感情（ポジティブ・ネガティブ）や意味を分析するサービスは？", a: "Amazon Comprehend。" },
  { ch: "ch08", q: "書類の画像から文字や表を取り出すサービスは？", a: "Amazon Textract。" },
  { ch: "ch08", q: "チャットボットを作るサービスは？ 社内文書を賢く検索するサービスは？ おすすめを出すサービスは？", a: "チャットボット＝Amazon Lex、賢い検索＝Amazon Kendra、おすすめ＝Amazon Personalize。" },
  { ch: "ch08", q: "サーバーをそのまま AWS に移す（リホスト）サービスは？", a: "AWS Application Migration Service（MGN）。" },
  { ch: "ch08", q: "移行の7つの R は？", a: "Rehost・Replatform・Refactor・Repurchase・Retire・Retain・Relocate。" },
  { ch: "ch08", q: "クラウド上の仮想デスクトップサービスは？ クラウドのコールセンターは？", a: "仮想デスクトップ＝Amazon WorkSpaces、コールセンター＝Amazon Connect。" }
);

AWSNOTE.terms.push(
  { ch: "ch08", w: "疎結合", r: "Loose coupling", m: "部品どうしをゆるくつなぎ、片方の問題がもう片方に広がりにくくすること。" },
  { ch: "ch08", w: "密結合", r: "Tight coupling", m: "部品どうしが直接つながっていて、片方が止まるともう片方も困る状態。" },
  { ch: "ch08", w: "メッセージ", r: "Message", m: "部品どうしでやりとりする伝言（注文内容や処理のお願いなど）。" },
  { ch: "ch08", w: "キュー", r: "Queue", m: "メッセージを順番待ちの列にためておく場所。" },
  { ch: "ch08", w: "Pub/Sub", r: "Publish / Subscribe", m: "発行者が1回送ると、購読している全員に届くしくみ。SNS がこの形。" },
  { ch: "ch08", w: "ポーリング", r: "Polling", m: "受け取る側が「何か来てる？」と定期的に取りに行くやり方。" },
  { ch: "ch08", w: "プッシュ", r: "Push", m: "送る側から相手に送りつけるやり方。" },
  { ch: "ch08", w: "ワークフロー", r: "Workflow", m: "仕事の流れ・手順。" },
  { ch: "ch08", w: "ストリーミングデータ", r: "Streaming data", m: "絶えず流れてくるデータ（クリック履歴・センサー値・ログなど）。" },
  { ch: "ch08", w: "ETL", r: "Extract, Transform, Load", m: "データを取り出し、形を整え、分析先に入れる作業。" },
  { ch: "ch08", w: "データレイク", r: "Data lake", m: "いろいろな形のデータをそのまま大量にためる場所。AWS では S3 が中心。" },
  { ch: "ch08", w: "データウェアハウス（DWH）", r: "Data warehouse", m: "分析用に整理してためたデータの倉庫。Redshift。" },
  { ch: "ch08", w: "SQL", r: "Structured Query Language", m: "データベースに条件を伝えてデータを取り出すための言葉。" },
  { ch: "ch08", w: "BI", r: "Business Intelligence", m: "データをグラフやダッシュボードにして判断に役立てること。" },
  { ch: "ch08", w: "ダッシュボード", r: "Dashboard", m: "大事な数字やグラフを1画面にまとめた、計器盤のような画面。" },
  { ch: "ch08", w: "ビッグデータ", r: "Big data", m: "コンピューター1台では扱いきれないほど大量のデータ。" },
  { ch: "ch08", w: "機械学習（ML）", r: "Machine Learning", m: "データからパターンをコンピューター自身に見つけさせる技術。" },
  { ch: "ch08", w: "モデル", r: "Model", m: "機械学習で作られた判断のしくみ。データを入れると予測を出す。" },
  { ch: "ch08", w: "生成 AI", r: "Generative AI", m: "文章・画像・プログラムなどを新しく作り出す AI。" },
  { ch: "ch08", w: "基盤モデル（FM）", r: "Foundation Model", m: "大量のデータで事前学習した、いろいろな用途に使える大きな AI モデル。" },
  { ch: "ch08", w: "自然言語処理（NLP）", r: "Natural Language Processing", m: "人間の言葉をコンピューターが理解・処理すること。" },
  { ch: "ch08", w: "OCR", r: "Optical Character Recognition", m: "画像の中の文字を読み取ってテキストにする技術。" },
  { ch: "ch08", w: "マイグレーション", r: "Migration", m: "システムやデータを新しい場所へ移すこと。移行。" },
  { ch: "ch08", w: "リフト＆シフト", r: "Lift and shift", m: "今のシステムをほぼそのままクラウドへ移すこと（リホスト）。" },
  { ch: "ch08", w: "IoT", r: "Internet of Things", m: "家電・車・センサーなどの「モノ」がインターネットにつながること。" },
  { ch: "ch08", w: "仮想デスクトップ（VDI）", r: "Virtual Desktop Infrastructure", m: "パソコン本体はサーバー上で動かし、画面だけ手元に映すしくみ。" }
);
