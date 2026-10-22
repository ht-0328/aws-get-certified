/* 第7章 監視・運用・自動化 — 復習カードと用語 */
window.AWSNOTE = window.AWSNOTE || { cards: [], terms: [] };

AWSNOTE.cards.push(
  { ch: "ch07", q: "RDS を複数の AZ に配置するのは Well-Architected のどの柱？", a: "信頼性（単一障害点をなくす）。コスト最適化やパフォーマンス効率ではない。" },
  { ch: "ch07", q: "無制限アクセス（0.0.0.0/0）を許可しているセキュリティグループを見つけるサービスは？", a: "Trusted Advisor（セキュリティのチェック）。IAM や CloudTrail では見つからない。" },
  { ch: "ch07", q: "CloudWatch・CloudTrail・Config は、それぞれ何を対象とするか。", a: "CloudWatch＝性能・稼働状況（メトリクス・ログ）、CloudTrail＝誰が何をしたか（API 操作の記録）、Config＝設定とその変更履歴・ルールへの準拠状況。" },
  { ch: "ch07", q: "「誰が EC2 を削除したか」を調べたい。使うサービスは何か。", a: "AWS CloudTrail。" },
  { ch: "ch07", q: "CPU 使用率が閾値を超えたら通知したい。どうするか。", a: "CloudWatch アラームを設定し、SNS で通知する。" },
  { ch: "ch07", q: "アプリケーションのログを収集・保存・検索するサービスは何か。", a: "Amazon CloudWatch Logs。" },
  { ch: "ch07", q: "リソースの設定変更履歴を記録し、ルールへの準拠状況を継続的に評価するサービスは何か。", a: "AWS Config。" },
  { ch: "ch07", q: "多数のサーバーへのパッチ一括適用や、SSH を使わないサーバー接続を提供するサービスは何か。", a: "AWS Systems Manager（Patch Manager／Session Manager）。" },
  { ch: "ch07", q: "IaC とは何か。", a: "Infrastructure as Code。インフラの構成をコードで記述し、自動で構築・管理する手法。" },
  { ch: "ch07", q: "CloudFormation の「テンプレート」と「スタック」とは何か。", a: "テンプレート＝リソースの構成を記述した定義ファイル（YAML/JSON）。スタック＝テンプレートから作成されたリソースの集合。" },
  { ch: "ch07", q: "CDK と CloudFormation の関係は何か。", a: "CDK では Python や TypeScript などでインフラを記述でき、その内容は CloudFormation テンプレートに変換されて実行される。" },
  { ch: "ch07", q: "Trusted Advisor のチェック分野は何か。", a: "コスト最適化・パフォーマンス・セキュリティ・耐障害性・サービスクォータ（加えて運用上の優秀性）。全チェックの利用には Business 以上のサポートプランが必要。" },
  { ch: "ch07", q: "AWS 側の障害やメンテナンスのうち、自分のリソースに影響する情報を確認するサービスは何か。", a: "AWS Health Dashboard。" },
  { ch: "ch07", q: "マイクロサービスのどこで処理が遅延しているかを追跡するサービスは何か。", a: "AWS X-Ray。" },
  { ch: "ch07", q: "複数アカウント環境をベストプラクティスに沿って自動構築するサービスは何か。", a: "AWS Control Tower。" },
  { ch: "ch07", q: "承認済みの構成だけを利用者がセルフサービスで使えるようにするサービスは何か。", a: "AWS Service Catalog。" },
  { ch: "ch07", q: "Well-Architected フレームワークの 6 つの柱は何か。", a: "運用上の優秀性・セキュリティ・信頼性・パフォーマンス効率・コスト最適化・サステナビリティ（運・セ・信・パ・コ・サ）。" },
  { ch: "ch07", q: "Trusted Advisor と Well-Architected Tool の違いは何か。", a: "Trusted Advisor は実際の環境を自動で点検する。Well-Architected Tool は設問への回答を通じて設計を見直す。" }
);

AWSNOTE.terms.push(
  { ch: "ch07", w: "CloudWatch", r: "Amazon CloudWatch", m: "リソースやアプリケーションの性能・稼働状況を監視するサービス。メトリクス・アラーム・ログを扱う。" },
  { ch: "ch07", w: "メトリクス", r: "Metrics", m: "CPU 使用率など、時系列で記録される数値データ。" },
  { ch: "ch07", w: "アラーム", r: "Alarm", m: "メトリクスが閾値を超えたときに、通知や自動処理を実行する仕組み。" },
  { ch: "ch07", w: "閾値", r: "Threshold", m: "動作を切り替える基準となる境界値。「しきいち」と読む。" },
  { ch: "ch07", w: "CloudWatch Logs", r: "Amazon CloudWatch Logs", m: "ログ（テキストの記録）を収集・保存・検索する機能。" },
  { ch: "ch07", w: "CloudTrail", r: "AWS CloudTrail", m: "誰が・いつ・どの操作（API 呼び出し）を行ったかを記録するサービス。監査に用いる。" },
  { ch: "ch07", w: "監査", r: "Audit", m: "業務や操作が規則どおりに行われているかを、記録に基づいて検証すること。" },
  { ch: "ch07", w: "AWS Config", r: "AWS Config", m: "リソースの設定と変更履歴を記録し、ルールへの準拠状況を評価するサービス。" },
  { ch: "ch07", w: "Systems Manager", r: "AWS Systems Manager", m: "多数のサーバーを一元的に操作・管理する機能群（Session Manager・Patch Manager など）。" },
  { ch: "ch07", w: "SSH", r: "Secure Shell", m: "ネットワーク越しにサーバーへ安全にログインして操作するためのプロトコル。" },
  { ch: "ch07", w: "パッチ", r: "Patch", m: "ソフトウェアの不具合や脆弱性を修正する更新プログラム。" },
  { ch: "ch07", w: "IaC", r: "Infrastructure as Code", m: "インフラの構成をコードで記述し、管理・自動構築する手法。" },
  { ch: "ch07", w: "CloudFormation", r: "AWS CloudFormation", m: "テンプレートの定義に従って AWS リソースを自動構築するサービス。" },
  { ch: "ch07", w: "テンプレート", r: "Template", m: "CloudFormation でリソースの構成を記述する定義ファイル。YAML または JSON で記述する。" },
  { ch: "ch07", w: "スタック", r: "Stack", m: "テンプレートから作成されたリソースの集合。まとめて更新・削除できる。" },
  { ch: "ch07", w: "CDK", r: "AWS Cloud Development Kit", m: "汎用プログラミング言語でインフラを定義できるフレームワーク。内部で CloudFormation を使う。" },
  { ch: "ch07", w: "YAML / JSON", r: "YAML / JSON", m: "構造化されたデータを記述するためのテキスト形式。" },
  { ch: "ch07", w: "Trusted Advisor", r: "AWS Trusted Advisor", m: "環境を自動で点検し、コストやセキュリティなどの改善提案を行うサービス。" },
  { ch: "ch07", w: "Health Dashboard", r: "AWS Health Dashboard", m: "AWS の障害・メンテナンス情報を、自アカウントへの影響も含めて確認できる画面。" },
  { ch: "ch07", w: "X-Ray", r: "AWS X-Ray", m: "アプリケーション内のリクエストの経路と処理時間を可視化し、ボトルネックを特定するサービス。" },
  { ch: "ch07", w: "マイクロサービス", r: "Microservices", m: "1 つのアプリケーションを、独立して開発・デプロイできる小さなサービスの集合として構成する設計手法。" },
  { ch: "ch07", w: "Control Tower", r: "AWS Control Tower", m: "複数アカウント環境（ランディングゾーン）をベストプラクティスに沿って自動構築するサービス。" },
  { ch: "ch07", w: "ランディングゾーン", r: "Landing zone", m: "セキュリティやログ収集などの基本設定があらかじめ整備された、マルチアカウント環境の土台。" },
  { ch: "ch07", w: "Service Catalog", r: "AWS Service Catalog", m: "組織が承認した構成をカタログとして公開し、利用者が選択して使えるようにするサービス。" },
  { ch: "ch07", w: "Well-Architected フレームワーク", r: "AWS Well-Architected Framework", m: "AWS が体系化した、優れた設計のための原則とベストプラクティス。6 つの柱で構成される。" },
  { ch: "ch07", w: "サステナビリティ", r: "Sustainability", m: "環境負荷を抑え、持続可能性を高めること。Well-Architected の 6 番目の柱。" }
);
