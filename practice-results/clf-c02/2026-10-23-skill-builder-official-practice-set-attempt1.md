# CLF-C02 公式練習問題 1回目（2026-10-23）

- 出どころ：AWS Skill Builder「Official Practice Question Set: AWS Certified Cloud Practitioner (CLF-C02)」（20問）
- 結果：20問中 7問正解（35%）。所要 8分59秒、1問あたり 27秒
- 結果ページ：同じフォルダの `.html`（Git には入れない）

## 不正解 13問の内訳

| # | 問われたこと | 正解 | 選んだもの | 原因 | 章 |
|---|---|---|---|---|---|
| 1 | プログラムによるアクセスに必要な認証情報（2つ） | アクセスキー ID、シークレットアクセスキー | ユーザー ID だけ | 知識＋選ぶ数 | 1・2 |
| 2 | RDS を複数の AZ に置くのは Well-Architected のどの柱か | 信頼性 | パフォーマンス効率 | 柱の対応 | 7 |
| 3 | DB が動いているサーバーをそのまま EC2 へ移す | MGN | DMS | サーバー移行とデータ移行の混同 | 8 |
| 4 | テキストを音声で読み上げる | Polly | Textract | サービス名 | 8 |
| 6 | 既存のインターネット接続で暗号化した接続 | Site-to-Site VPN | Direct Connect | 問題文の条件の読み落とし | 6 |
| 7 | 責任共有モデルで利用者の責任（2つ） | IAM の最小権限、セキュリティグループの設定 | IAM だけ | 選ぶ数 | 2 |
| 9 | 部門ごとのアカウントの支払いをまとめ、統制（ガバナンス）を1か所に | Organizations | Cost and Usage Report | 知識 | 9 |
| 11 | S3 の静的サイトを低遅延・高速に | CloudFront | Route 53 | DNS と CDN の混同 | 6 |
| 12 | 電話のテクニカルサポートがある最下位プラン | ビジネス | ベーシック | 知識 | 9 |
| 14 | 無制限アクセスを許可する SG を特定 | Trusted Advisor | IAM | 知識 | 7・9 |
| 15 | S3 の機密データを自動で検出・分類 | Macie | Secrets Manager | サービス名 | 2 |
| 18 | 世界中に顧客がいる企業の利点（2つ） | CloudFront のエッジ、複数リージョンに配置 | ELB（複数リージョン）、複数リージョン | ELB の範囲 | 1・3 |
| 20 | S3 の特性（2つ） | オブジェクトストア、耐久性 | オブジェクトストアだけ | 選ぶ数 | 4 |

正解した7問のうち、「わからない」で当てたものが3問（5：SNS、13：スポット、16：Direct Connect）。

## 分かったこと

- 「2つ選択」で1つしか選んでいない不正解が3問（1・7・20）。知識より読み方。
- 似たサービスの取り違えが多い：DMS と MGN、Polly と Textract、VPN と Direct Connect、Route 53 と CloudFront、Secrets Manager と Macie、IAM と Trusted Advisor。
- 制度の暗記が抜けている：電話サポートはビジネス以上、支払いの統合は Organizations。
- 1問 27秒は速すぎる。本番は65問90分（1問あたり約80秒）。

## サイトに反映したこと

- 第1章：複数 AZ・複数リージョン・CloudFront の問われ方、入口ごとの認証情報（アクセスキー）
- 第2章：IAM の表にアクセスキー、責任共有でのセキュリティグループ、Macie と Secrets Manager の違い
- 第3章：ELB はリージョンをまたげない
- 第4章：S3 の特性（オブジェクト＋耐久性）、静的サイトの高速化は CloudFront
- 第6章：VPN と Direct Connect・Client VPN の問われ方、Route 53 では速くならない
- 第7章：Well-Architected の柱の問われ方（複数 AZ → 信頼性）、Trusted Advisor のセキュリティチェック
- 第8章：MGN と DMS の違い、Polly と Textract
- 第9章：電話サポートの最下位プラン、Organizations、Trusted Advisor
- 試験ガイド：公式練習問題へのリンク、結果の使い方、落としやすい問いの表
- 復習カード：上の各点を14枚追加
