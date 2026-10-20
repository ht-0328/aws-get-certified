/* ==========================================================
   AWS 合格ノート — 共通スクリプト
   ・ヘッダー / フッター / ページ送りを自動で差し込む
   ・用語のタップ表示
   ・間隔反復（1日→3日→7日→14日→30日）の学習記録
   ========================================================== */
(function () {
  "use strict";

  // 章の一覧（ここを足すとトップページ・ページ送りに反映される）
  var CHAPTERS = [
    { id: "method",  file: "study-method.html", title: "学習方法と本サイトの使い方", short: "学習方法", icons: ["architecture-service/AWSTrainingCertification.svg"], desc: "記憶の仕組みと、それに基づく学習の進め方。最初にお読みください。" },
    { id: "ch01", file: "01-cloud-basics.html", title: "第1章 クラウドとAWSの全体像", short: "クラウド基礎", icons: ["architecture-group/AWSCloudlogo.svg", "architecture-group/Region.svg"], desc: "クラウドの定義／6つの利点／リージョン・AZ・エッジロケーション" },
    { id: "ch02", file: "02-security-iam.html", title: "第2章 セキュリティとIAM", short: "セキュリティ", icons: ["architecture-service/AWSIdentityandAccessManagement.svg", "architecture-service/AWSShield.svg"], desc: "責任共有モデル／IAM／MFA／セキュリティ関連サービス" },
    { id: "ch03", file: "03-compute.html", title: "第3章 コンピューティング", short: "コンピューティング", icons: ["architecture-service/AmazonEC2.svg", "architecture-service/AWSLambda.svg"], desc: "EC2／Auto Scaling／ELB／Lambda／コンテナ" },
    { id: "ch04", file: "04-storage.html", title: "第4章 ストレージ", short: "ストレージ", icons: ["architecture-service/AmazonSimpleStorageService.svg", "architecture-service/AmazonElasticBlockStore.svg"], desc: "S3／ストレージクラス／EBS／EFS／Snowball" },
    { id: "ch05", file: "05-database.html", title: "第5章 データベース", short: "データベース", icons: ["architecture-service/AmazonRDS.svg", "architecture-service/AmazonDynamoDB.svg"], desc: "RDS／Aurora／DynamoDB／ElastiCache／Redshift" },
    { id: "ch06", file: "06-network.html", title: "第6章 ネットワーク", short: "ネットワーク", icons: ["architecture-service/AmazonVirtualPrivateCloud.svg", "architecture-service/AmazonCloudFront.svg"], desc: "VPC／サブネット／セキュリティグループ／Route 53／CloudFront" },
    { id: "ch07", file: "07-operations.html", title: "第7章 監視・運用・自動化", short: "運用管理", icons: ["architecture-service/AmazonCloudWatch.svg", "architecture-service/AWSCloudTrail.svg"], desc: "CloudWatch／CloudTrail／Config／CloudFormation／Well-Architected" },
    { id: "ch08", file: "08-integration-analytics-ai.html", title: "第8章 連携・分析・AIのサービス", short: "連携・分析・AI", icons: ["architecture-service/AmazonSimpleQueueService.svg", "architecture-service/AmazonSageMaker.svg"], desc: "SQS／SNS／Kinesis／Athena／SageMaker／Bedrock" },
    { id: "ch09", file: "09-billing-support.html", title: "第9章 料金とサポート", short: "料金・サポート", icons: ["architecture-service/AWSCostExplorer.svg", "architecture-service/AWSSupport.svg"], desc: "料金の考え方／割引の種類／Budgets／サポートプラン" }
  ];
  window.AWSNOTE_CHAPTERS = CHAPTERS;

  // 間隔反復のスケジュール（日数）
  var INTERVALS = [1, 3, 7, 14, 30];
  var STAGE_NAMES = ["初回", "1日後", "3日後", "7日後", "14日後", "30日後"];
  var DAY = 24 * 60 * 60 * 1000;

  var body = document.body;
  var root = body.getAttribute("data-root") || "./";
  var page = body.getAttribute("data-page") || "";

  // ---------- localStorage（使えない環境でも壊れないように） ----------
  function load(key, fallback) {
    try { var v = localStorage.getItem("awsnote:" + key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem("awsnote:" + key, JSON.stringify(value)); } catch (e) { /* 保存できなくても表示は続ける */ }
  }
  window.AWSNOTE_STORE = { load: load, save: save };

  // ---------- テーマ ----------
  var theme = load("theme", null);
  if (theme) document.documentElement.setAttribute("data-theme", theme);

  // ---------- ヘッダー ----------
  var nav = [
    { href: "index.html", label: "ホーム", id: "home" },
    { href: "chapters/study-method.html", label: "学習方法", id: "method" },
    { href: "glossary.html", label: "用語集", id: "glossary" },
    { href: "cards.html", label: "復習カード", id: "cards" },
    { href: "exam-guide.html", label: "試験ガイド", id: "exam" }
  ];
  var header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML =
    '<div class="inner">' +
    '<a class="brand" href="' + root + 'index.html"><span class="logo">AWS</span>AWS 合格ノート</a>' +
    '<nav class="site-nav">' +
    nav.map(function (n) {
      return '<a href="' + root + n.href + '"' + (n.id === page ? ' aria-current="page"' : "") + ">" + n.label + "</a>";
    }).join("") +
    '<button class="theme-btn" type="button" aria-label="表示テーマの切り替え">◐</button>' +
    "</nav></div>";
  body.insertBefore(header, body.firstChild);
  header.querySelector(".theme-btn").addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    var dark = cur ? cur === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    var next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    save("theme", next);
  });

  // ---------- フッター ----------
  var footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML =
    "AWS 合格ノート — 個人の学習用資料です。最新の情報は AWS 公式ドキュメントでご確認ください。<br>" +
    'アイコン: <a href="https://aws.amazon.com/architecture/icons/">AWS Architecture Icons</a>（npm パッケージ aws-icons 経由）。Amazon Web Services、AWS およびそのロゴは Amazon.com, Inc. またはその関連会社の商標です。';
  body.appendChild(footer);

  // ---------- 用語のタップ表示（スマホ用） ----------
  document.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest(".term") : null;
    document.querySelectorAll(".term.open").forEach(function (el) { if (el !== t) el.classList.remove("open"); });
    if (t) {
      t.classList.toggle("open");
      // 画面の端で切れないように向きを調整
      t.classList.remove("tip-left", "tip-right");
      var r = t.getBoundingClientRect();
      if (r.left < 150) t.classList.add("tip-left");
      else if (window.innerWidth - r.right < 150) t.classList.add("tip-right");
    }
  });
  document.querySelectorAll(".term").forEach(function (t) { if (!t.hasAttribute("tabindex")) t.setAttribute("tabindex", "0"); });

  // ---------- 間隔反復の記録 ----------
  function getLog(id) { return load("log:" + id, { stage: 0, last: 0, history: [] }); }
  function nextDue(log) {
    if (!log.stage) return null;
    if (log.stage > INTERVALS.length) return null; // 卒業
    return log.last + INTERVALS[log.stage - 1] * DAY;
  }
  function fmtDate(ts) { var d = new Date(ts); return (d.getMonth() + 1) + "/" + d.getDate(); }
  function startOfDay(ts) { var d = new Date(ts); d.setHours(0, 0, 0, 0); return d.getTime(); }
  function status(id) {
    var log = getLog(id);
    if (!log.stage) return { cls: "", text: "未学習" };
    if (log.stage > INTERVALS.length) return { cls: "done", text: "完了（30日後の復習まで終了）" };
    var due = nextDue(log);
    if (startOfDay(due) <= startOfDay(Date.now())) return { cls: "due", text: "本日が復習日です（" + STAGE_NAMES[log.stage] + "の復習）" };
    return { cls: "", text: "次の復習：" + fmtDate(due) + "（" + STAGE_NAMES[log.stage] + "）" };
  }
  window.AWSNOTE_STATUS = status;

  function renderStudyLog(el, id) {
    var log = getLog(id);
    var st = status(id);
    var steps = STAGE_NAMES.map(function (name, i) {
      var cls = i < log.stage ? "done" : (i === log.stage ? "next" : "");
      return '<li class="' + cls + '">' + (i < log.stage ? "✓ " : "") + name + "</li>";
    }).join("");
    el.innerHTML =
      "<h2>📅 学習記録（間隔反復）</h2>" +
      '<p class="muted">本文を読み終えたら、上の「想起練習」を<strong>本文を見ずに</strong>行ってから記録してください。' +
      "次回の復習日を計算し、トップページに表示します（記録はこのブラウザにのみ保存されます）。</p>" +
      '<ul class="steps">' + steps + "</ul>" +
      '<p class="status ' + st.cls + '" style="font-weight:700">' + st.text + "</p>" +
      '<button class="btn" data-act="ok">✓ 想起練習で答えられた</button> ' +
      '<button class="btn ghost" data-act="ng">△ 答えられない設問が多かった</button> ' +
      '<button class="btn ghost small" data-act="reset">記録を消去</button>';
    el.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () {
        var act = b.getAttribute("data-act");
        var lg = getLog(id);
        if (act === "ok") lg.stage = Math.min(lg.stage + 1, INTERVALS.length + 1);
        if (act === "ng") lg.stage = Math.max(1, lg.stage - 1 || 1); // 間隔を1段戻す（最低でも翌日）
        if (act === "reset") lg = { stage: 0, last: 0, history: [] };
        else { lg.last = Date.now(); lg.history.push([Date.now(), act]); }
        save("log:" + id, lg);
        renderStudyLog(el, id);
      });
    });
  }
  var logEl = document.getElementById("study-log");
  if (logEl && page) { logEl.className = "study-log"; renderStudyLog(logEl, page); }

  // ---------- ページ送り ----------
  var pagerEl = document.getElementById("pager");
  if (pagerEl) {
    var idx = CHAPTERS.map(function (c) { return c.id; }).indexOf(page);
    var html = "";
    if (idx > 0) html += '<a class="prev" href="' + CHAPTERS[idx - 1].file + '"><small>← 前へ</small>' + CHAPTERS[idx - 1].title + "</a>";
    if (idx >= 0 && idx < CHAPTERS.length - 1) html += '<a class="next" href="' + CHAPTERS[idx + 1].file + '"><small>次へ →</small>' + CHAPTERS[idx + 1].title + "</a>";
    pagerEl.className = "pager";
    pagerEl.innerHTML = html;
  }

  // ---------- トップページの章カード ----------
  var listEl = document.getElementById("chapter-list");
  if (listEl) {
    listEl.innerHTML = CHAPTERS.map(function (c, i) {
      var st = status(c.id);
      return '<a class="card" href="chapters/' + c.file + '">' +
        '<div class="icons">' + c.icons.map(function (ic) { return '<img src="assets/aws-icons/' + ic + '" alt="">'; }).join("") + "</div>" +
        '<div class="num">' + (i === 0 ? "START" : "CHAPTER " + i) + "</div>" +
        "<h3>" + c.title.replace(/^第\d+章\s*/, "") + "</h3>" +
        "<p>" + c.desc + "</p>" +
        '<div class="status ' + st.cls + '">' + st.text + "</div></a>";
    }).join("");
  }
  var dueEl = document.getElementById("due-today");
  if (dueEl) {
    var due = CHAPTERS.filter(function (c) { return status(c.id).cls === "due"; });
    dueEl.innerHTML = due.length
      ? "<strong>本日復習する章：</strong>" + due.map(function (c) { return '<a href="chapters/' + c.file + '">' + c.short + "</a>"; }).join("、")
      : "本日復習予定の章はありません。新しい章に進むか、復習カードで想起練習を行ってください。";
  }
})();
