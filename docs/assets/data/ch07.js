/* 第7章 監視・運用・自動化 — 復習カードと用語 */
window.AWSNOTE = window.AWSNOTE || { cards: [], terms: [] };

AWSNOTE.cards.push(
  { ch: "ch07", q: "CloudWatch・CloudTrail・Config は、それぞれ何を見張る？", a: "CloudWatch＝性能・状態（メトリクス・ログ）、CloudTrail＝だれが何をしたか（API 操作の記録）、Config＝設定とその変化・ルール準拠。" },
  { ch: "ch07", q: "「だれが EC2 を削除したか」を調べたい。使うサービスは？", a: "AWS CloudTrail。" },
  { ch: "ch07", q: "CPU 使用率がしきい値をこえたら通知したい。どうする？", a: "CloudWatch アラームを設定し、SNS で通知する。" },
  { ch: "ch07", q: "アプリのログを集めて保存・検索するのは？", a: "Amazon CloudWatch Logs。" },
  { ch: "ch07", q: "リソースの設定変更履歴を記録し、ルールに準拠しているか継続的に評価するのは？", a: "AWS Config。" },
  { ch: "ch07", q: "多数のサーバーにパッチを一斉適用したり、SSH なしでログインしたりできるサービスは？", a: "AWS Systems Manager（Patch Manager／Session Manager）。" },
  { ch: "ch07", q: "IaC とは？", a: "Infrastructure as Code。インフラをコードで書いて、自動で作成・管理する考え方。" },
  { ch: "ch07", q: "CloudFormation の「テンプレート」と「スタック」とは？", a: "テンプレート＝リソースを書いた設計図（YAML/JSON）。スタック＝テンプレートから作られたリソースのまとまり。" },
  { ch: "ch07", q: "CDK と CloudFormation の関係は？", a: "CDK は Python や TypeScript などで書け、裏で CloudFormation テンプレートに変換されて実行される。" },
  { ch: "ch07", q: "Trusted Advisor のチェック分野は？", a: "コスト最適化・パフォーマンス・セキュリティ・耐障害性・サービスの制限（＋運用上の優秀性）。全チェックは Business 以上のサポートプランが必要。" },
  { ch: "ch07", q: "AWS 側の障害やメンテナンスで、自分のリソースに関係するお知らせを見るのは？", a: "AWS Health Dashboard。" },
  { ch: "ch07", q: "マイクロサービスのどこで処理が遅くなっているかを追跡するのは？", a: "AWS X-Ray。" },
  { ch: "ch07", q: "複数アカウント環境をベストプラクティスに沿って自動で組み立てるのは？", a: "AWS Control Tower。" },
  { ch: "ch07", q: "承認された構成だけを社員がセルフサービスで使えるようにするのは？", a: "AWS Service Catalog。" },
  { ch: "ch07", q: "Well-Architected フレームワークの6つの柱は？", a: "運用上の優秀性・セキュリティ・信頼性・パフォーマンス効率・コスト最適化・サステナビリティ（運・セ・信・パ・コ・サ）。" },
  { ch: "ch07", q: "Trusted Advisor と Well-Architected Tool のちがいは？", a: "Trusted Advisor は実際の環境を自動で点検。Well-Architected Tool は質問に答えて設計を見直す。" }
);

AWSNOTE.terms.push(
  { ch: "ch07", w: "CloudWatch", r: "Amazon CloudWatch", m: "リソースやアプリの性能・状態を監視するサービス。メトリクス・アラーム・ログ。" },
  { ch: "ch07", w: "メトリクス", r: "Metrics", m: "CPU 使用率など、時間ごとに記録される数値データ。" },
  { ch: "ch07", w: "アラーム", r: "Alarm", m: "メトリクスがしきい値をこえたときに、通知や自動処理をするしかけ。" },
  { ch: "ch07", w: "しきい値", r: "Threshold", m: "「ここをこえたら合図を出す」と決めておく境目の値。" },
  { ch: "ch07", w: "CloudWatch Logs", r: "Amazon CloudWatch Logs", m: "ログ（文字の記録）を集めて保存・検索する機能。" },
  { ch: "ch07", w: "CloudTrail", r: "AWS CloudTrail", m: "だれが・いつ・どの操作（API）をしたかを記録するサービス。監査に使う。" },
  { ch: "ch07", w: "監査", r: "Audit", m: "決まりどおりに正しく行われているかを、記録をもとに確かめること。" },
  { ch: "ch07", w: "AWS Config", r: "AWS Config", m: "リソースの設定と変更履歴を記録し、ルールに準拠しているか評価するサービス。" },
  { ch: "ch07", w: "Systems Manager", r: "AWS Systems Manager", m: "多数のサーバーをまとめて操作・管理する道具箱（Session Manager・Patch Manager など）。" },
  { ch: "ch07", w: "SSH", r: "Secure Shell", m: "サーバーに遠くから安全にログインして操作する方法。" },
  { ch: "ch07", w: "パッチ", r: "Patch", m: "ソフトの不具合や弱点を直す修正プログラム。" },
  { ch: "ch07", w: "IaC", r: "Infrastructure as Code", m: "インフラをコードで書いて管理する考え方。" },
  { ch: "ch07", w: "CloudFormation", r: "AWS CloudFormation", m: "テンプレートに書いたとおりに AWS リソースを自動で作るサービス。" },
  { ch: "ch07", w: "テンプレート", r: "Template", m: "CloudFormation の設計図。YAML か JSON で書く。" },
  { ch: "ch07", w: "スタック", r: "Stack", m: "テンプレートから作られたリソースのまとまり。まとめて更新・削除できる。" },
  { ch: "ch07", w: "CDK", r: "AWS Cloud Development Kit", m: "ふつうのプログラミング言語でインフラを書けるツール。裏で CloudFormation を使う。" },
  { ch: "ch07", w: "YAML / JSON", r: "YAML / JSON", m: "データを書くための決まった書式。" },
  { ch: "ch07", w: "Trusted Advisor", r: "AWS Trusted Advisor", m: "環境を点検してコスト・セキュリティなどの改善アドバイスをくれるサービス。" },
  { ch: "ch07", w: "Health Dashboard", r: "AWS Health Dashboard", m: "AWS の障害・メンテナンス情報を、自分への影響も含めて見られる画面。" },
  { ch: "ch07", w: "X-Ray", r: "AWS X-Ray", m: "アプリ内のリクエストの通り道と時間を可視化し、遅い場所を探すサービス。" },
  { ch: "ch07", w: "マイクロサービス", r: "Microservices", m: "大きなアプリを小さな独立した部品に分けて作る作り方。" },
  { ch: "ch07", w: "Control Tower", r: "AWS Control Tower", m: "複数アカウント環境（ランディングゾーン）をベストプラクティスどおり自動構築するサービス。" },
  { ch: "ch07", w: "ランディングゾーン", r: "Landing zone", m: "ルールが最初から整った、複数アカウントの土台となる環境。" },
  { ch: "ch07", w: "Service Catalog", r: "AWS Service Catalog", m: "会社が承認した構成だけをカタログにして、社員が選んで使えるようにするサービス。" },
  { ch: "ch07", w: "Well-Architected フレームワーク", r: "AWS Well-Architected Framework", m: "AWS がまとめた「よい設計」の考え方。6つの柱からなる。" },
  { ch: "ch07", w: "サステナビリティ", r: "Sustainability", m: "環境への負荷を減らし、持続可能にすること。Well-Architected の6番目の柱。" }
);
