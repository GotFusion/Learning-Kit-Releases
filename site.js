"use strict";

const copy = {
  zh: {
    title: "Learning-Kit — 让想法，慢慢长成知识。",
    description:
      "从几个关键词开始，让 AI 帮你整理笔记、发现联系。Learning-Kit 是保留本地 Markdown 与人工审核的 macOS 轻记应用。",
    skip: "跳到主要内容",
    navigation: "主要导航",
    language: "页面语言",
    navWorkflow: "如何使用",
    navNotes: "你的笔记",
    navDownload: "下载安装",
    preview: "预览版现已开放",
    heroEyebrow: "给想法，一个继续生长的地方",
    heroTitle1: "轻轻记下，",
    heroTitle2: "慢慢相连。",
    heroDescription:
      "先留下几个关键词。让 AI 找回已有的理解，整理成可修改的笔记，再由你决定如何保存。",
    downloadMac: "下载 macOS 版",
    seeHow: "看看它如何工作",
    noWeights: "无需下载模型权重",
    mockSpace: "我的知识库",
    mockNotes: "笔记",
    mockAssistant: "助手",
    mockMap: "关系图谱",
    mockProject: "学习项目",
    mockProjectTitle: "理解人工智能",
    mockDraft: "待审核笔记",
    mockReady: "已生成",
    mockTitle: "Attention：把重点放对地方",
    mockIntro: "从一段话里找到重要的信息，再理解它们之间的关系。",
    mockSource: "参考已有笔记 · Transformer",
    mockHeading: "先建立一个直觉",
    mockBody:
      "读一句话时，我们会关注不同的词。Attention 让模型根据当前语境，为相关信息分配不同的权重。",
    mockHighlight: "像阅读时，把目光停在真正重要的地方。",
    mockYourNote: "你的批注",
    mockComment: "这个例子很好，再简洁一点。",
    captureLabel: "下一段理解，从这里开始",
    keywordIntuition: "直观理解",
    captureHint: "3 个关键词，整理成一组想法",
    visualCaption: "工作流示意 · 内容由你审核后保存",
    trustMarkdown: "本地 Markdown",
    trustReview: "先审核，再保存",
    trustCodex: "连接你的 Codex",
    trustTagline: "少一点整理的负担，多一点理解的空间。",
    workflowEyebrow: "一条自然的思考路径",
    workflowTitle1: "不用先想好结构，",
    workflowTitle2: "从一个念头开始。",
    workflowIntro: "把整理交给助手，把判断留给自己。",
    workflowTabs: "探索轻记流程",
    stepCapture: "先记下，不打断",
    stepCaptureText:
      "一个词、一串想法。桌面小窗随时接住，还能删除、撤回，准备好再一起提交。",
    stepReview: "一起改，写成你的话",
    stepReviewText:
      "AI 先检索、再起草。划词写下批注，集中处理修改建议，审核后再合入。",
    stepConnect: "让理解，彼此相连",
    stepConnectText:
      "把新笔记放回知识网络。用图谱看联系，用版图分层整理，用日历回看积累。",
    panelIllustration: "流程示意",
    sceneThought: "此刻想到的",
    sceneQuestion: "为什么不缓存 Q？",
    sceneContext: "推理优化",
    sceneBatch: "把相关想法一起交给助手",
    sceneBatchText: "带着语境，检索已有内容并整理草稿。",
    scenePending: "等待你的审核",
    sceneDraftTitle: "缓存，是为了下一次复用",
    sceneDraftBody:
      "历史 K/V 会被后续步骤读取，因此值得保留。Q 只服务当前的查询。",
    sceneReviewComment: "保留这个解释，补一个简单例子。",
    sceneApproval: "最终的保存，由你决定",
    sceneMapOne: "直观理解",
    sceneMapTwo: "推理优化",
    sceneMapText: "每一篇笔记，都可以成为下一次理解的起点。",
    panelCapture: "收集想法",
    panelReview: "共同修订",
    panelConnect: "建立联系",
    panelCaptureNote: "先暂存关键词；点击提交，才开始处理。",
    panelReviewNote: "草稿保持待审状态，直到你批准合入。",
    panelConnectNote: "图谱与版图提供不同视角；笔记仍保存在同一知识库。",
    ownershipEyebrow: "助手参与，主导权在你",
    ownershipTitle: "越来越懂你。\n始终属于你。",
    ownershipIntro: "好的工具，应该让你的理解留下来。",
    localTitle: "打开的，仍是你的文件",
    localBody:
      "笔记以 Markdown 保存在本机，支持 Obsidian 文件夹。你可以继续手动编辑，也可以通过 Git 记录与同步改动。",
    memoryTitle: "偏好可以记住，也可以忘记",
    memoryBody:
      "确认写作风格和主题熟悉度，让回答详略得当。记忆由你选择作用范围，也可以随时撤销或关闭。",
    memoryExample: "这个主题，先给我结论。",
    memoryScope: "由你确认",
    serviceTitle: "连接你已在用的 Codex",
    serviceBody:
      "使用本机 Codex CLI 登录状态，不必为这条路径另填 API Key。AI 处理时，对话和用到的笔记内容会发送至所选服务。",
    downloadEyebrow: "为下一次灵感，留一个位置",
    downloadTitle1: "开始轻记，",
    downloadTitle2: "让想法留下来。",
    checksumFile: "SHA-256 校验文件",
    releaseNotes: "发布记录",
    appLanguage: "网页中英双语 · 当前应用界面为中文。",
    installOneTitle: "拖入 Applications",
    installOneBody:
      "打开下载的 DMG，把 Learning-Kit 拖到 Applications。升级前，请先退出旧版本。",
    installTwoTitle: "打开你的知识库",
    installTwoBody:
      "选择已有 Markdown / Obsidian 文件夹，或创建一个新的知识库。",
    installThreeTitle: "连接 Codex，记下第一个词",
    installThreeBody:
      "在“设置 → AI 助手 → Codex 连接”检查本机已登录的 Codex CLI，然后开始你的第一组轻记。",
    releaseDisclosure: "安装前：系统支持、首次打开与校验",
    compatibility:
      "当前包面向 Apple Silicon，声明最低 macOS {minimumMacOS}，实测 macOS {testedMacOS}。Intel 和其他 macOS 版本尚未验证。",
    notarization:
      "当前为 ad-hoc 签名预览版，未经过 Apple 公证。首次打开若被系统阻止，确认来源和校验结果后，可到“系统设置 → 隐私与安全性”允许此次打开。",
    appleHelp: "Apple 官方说明 ↗",
    copyCommand: "复制命令",
    copied: "校验命令已复制。",
    copyFailed: "未能访问剪贴板，请选中并手动复制上方命令。",
    checksumHint: "将 DMG 和校验文件放在同一文件夹，在该目录运行上述命令。",
    previewLimits:
      "这是早期预览版。模型服务、旧系统和 WidgetKit 的验证范围，以及会话容量等已知限制，请查看",
    sentenceEnd: "。",
    footerTagline: "记录。理解。相连。",
    githubDownloads: "GitHub 下载仓库 ↗",
    license: "许可证",
  },
  en: {
    title: "Learning-Kit — Small thoughts. Lasting connections.",
    description:
      "Start with a few keywords. Let AI find connections and shape your notes, with local Markdown files and a human review before changes enter your knowledge library.",
    skip: "Skip to main content",
    navigation: "Main navigation",
    language: "Page language",
    navWorkflow: "How it works",
    navNotes: "Your notes",
    navDownload: "Get the app",
    preview: "Preview now available",
    heroEyebrow: "A little room for your ideas to grow",
    heroTitle1: "Small thoughts.",
    heroTitle2: "Lasting connections.",
    heroDescription:
      "Start with a few keywords. Let AI revisit what you know and shape an editable draft. You decide what becomes part of your notes.",
    downloadMac: "Download for macOS",
    seeHow: "See how it works",
    noWeights: "No model weights to download",
    mockSpace: "MY KNOWLEDGE",
    mockNotes: "Notes",
    mockAssistant: "Assistant",
    mockMap: "Graph",
    mockProject: "PROJECTS",
    mockProjectTitle: "Understanding AI",
    mockDraft: "Draft for review",
    mockReady: "Ready",
    mockTitle: "Attention: finding what matters",
    mockIntro:
      "Find the meaningful parts of a sentence, then understand how they relate.",
    mockSource: "From your notes · Transformer",
    mockHeading: "Start with an intuition",
    mockBody:
      "When we read, some words matter more than others. Attention weights relevant information according to the current context.",
    mockHighlight: "Like pausing on the words that help a sentence make sense.",
    mockYourNote: "YOUR ANNOTATION",
    mockComment: "Keep the example. Make it a little shorter.",
    captureLabel: "Your next understanding starts here",
    keywordIntuition: "Intuition",
    captureHint: "3 keywords, one connected thought",
    visualCaption: "Workflow illustration · Review before saving",
    trustMarkdown: "Local Markdown",
    trustReview: "Review before saving",
    trustCodex: "Your Codex connection",
    trustTagline: "Less organizing. More room to understand.",
    workflowEyebrow: "A natural path from thought to note",
    workflowTitle1: "No perfect outline needed.",
    workflowTitle2: "Just a place to begin.",
    workflowIntro:
      "Let the assistant do the organizing. Keep the judgment yours.",
    workflowTabs: "Explore the note-taking workflow",
    stepCapture: "Capture without losing your flow",
    stepCaptureText:
      "A word. A question. A passing thought. Collect them in the desktop window, remove or undo, then send the group when ready.",
    stepReview: "Make it sound like you",
    stepReviewText:
      "AI searches before it drafts. Annotate a phrase, send your suggestions together, and approve the result before it joins your notes.",
    stepConnect: "Let your understanding connect",
    stepConnectText:
      "See relationships in the graph, organize topics in layered maps, and revisit your progress through the calendar.",
    panelIllustration: "Workflow illustration",
    sceneThought: "On your mind right now",
    sceneQuestion: "Why not cache Q?",
    sceneContext: "Faster inference",
    sceneBatch: "Give related thoughts to your assistant",
    sceneBatchText: "Search existing notes with context, then prepare a draft.",
    scenePending: "Waiting for your review",
    sceneDraftTitle: "Cache what you will use again",
    sceneDraftBody:
      "Future steps reuse earlier K/V, so they are worth keeping. Q serves only the current query.",
    sceneReviewComment: "Keep this explanation. Add one simple example.",
    sceneApproval: "You decide when it is ready to save",
    sceneMapOne: "Intuition",
    sceneMapTwo: "Faster inference",
    sceneMapText:
      "Every note can become the starting point for your next insight.",
    panelCapture: "CAPTURE",
    panelReview: "REFINE",
    panelConnect: "CONNECT",
    panelCaptureNote:
      "Keywords are saved first. Processing starts only when you submit.",
    panelReviewNote: "A draft stays in review until you approve it.",
    panelConnectNote:
      "Different views of your knowledge. The notes stay in one library.",
    ownershipEyebrow: "An assistant, with you in control",
    ownershipTitle: "More familiar.\nStill yours.",
    ownershipIntro: "A good tool should leave the understanding with you.",
    localTitle: "Your notes are still your files",
    localBody:
      "Notes live on your Mac as Markdown, with support for Obsidian folders. Keep editing by hand, or track and sync changes with Git.",
    memoryTitle: "Preferences you can keep—or forget",
    memoryBody:
      "Confirm a writing style or your familiarity with a topic to guide the level of detail. Choose where a memory applies, revoke it, or turn it off.",
    memoryExample: "For this topic, give me the conclusion first.",
    memoryScope: "You confirm",
    serviceTitle: "Connect the Codex you already use",
    serviceBody:
      "Use the login from your local Codex CLI. No separate API key is needed for this route. During AI requests, conversations and relevant note content are sent to your selected service.",
    downloadEyebrow: "Make a little room for your next idea",
    downloadTitle1: "Keep a thought.",
    downloadTitle2: "See where it leads.",
    checksumFile: "SHA-256 checksum",
    releaseNotes: "Release notes",
    appLanguage: "Bilingual website · The current app interface is in Chinese.",
    installOneTitle: "Drag into Applications",
    installOneBody:
      "Open the downloaded DMG and drag Learning-Kit into Applications. Quit the previous version before upgrading.",
    installTwoTitle: "Open your knowledge library",
    installTwoBody:
      "Choose an existing Markdown or Obsidian folder, or create a new library.",
    installThreeTitle: "Connect Codex. Capture your first thought.",
    installThreeBody:
      "In Settings → AI assistant → Codex connection, check your locally signed-in Codex CLI, then start your first group of notes.",
    releaseDisclosure:
      "Before installing: system support, first launch, and verification",
    compatibility:
      "For Apple Silicon. The package declares macOS {minimumMacOS} or later and has been tested on macOS {testedMacOS}. Intel Macs and other macOS versions have not been verified.",
    notarization:
      "This preview uses ad-hoc signing and has not been notarized by Apple. If macOS blocks the first launch, verify the source and checksum, then allow this app in System Settings → Privacy & Security.",
    appleHelp: "Apple’s instructions ↗",
    copyCommand: "Copy command",
    copied: "Verification command copied.",
    copyFailed:
      "Clipboard access was unavailable. Select and copy the command above manually.",
    checksumHint:
      "Keep the DMG and checksum file in the same folder, then run this command from that folder.",
    previewLimits:
      "This is an early preview. For model-service, older-system and WidgetKit validation scope, plus known limits such as conversation capacity, see the",
    sentenceEnd: ".",
    footerTagline: "Capture. Understand. Connect.",
    githubDownloads: "Downloads on GitHub ↗",
    license: "License",
  },
};

const release = window.LK_RELEASE;
const downloadURL =
  release.repository +
  "/releases/download/" +
  encodeURIComponent(release.tag) +
  "/" +
  encodeURIComponent(release.file);
const releaseURL =
  release.repository + "/releases/tag/" + encodeURIComponent(release.tag);
const checksumCommand = "shasum -a 256 -c " + release.file + ".sha256";
let currentStep = "capture";
let currentLanguage = "zh";
let copyStatusKey = "";

function translated(key) {
  const value = copy[currentLanguage][key];
  if (typeof value !== "string")
    throw new Error("Missing translation: " + currentLanguage + "/" + key);
  return value.replace(/\{(\w+)\}/g, (_, name) => String(release[name] ?? ""));
}

function setText(element, value) {
  const parts = value.split("\n");
  element.replaceChildren();
  parts.forEach((part, index) => {
    if (index) element.append(document.createElement("br"));
    element.append(document.createTextNode(part));
  });
}

function applyStep(step, focus = false) {
  currentStep = step;
  const selected = document.querySelector('[data-step="' + step + '"]');
  document.querySelectorAll("[data-step]").forEach((button) => {
    const active = button.dataset.step === step;
    button.setAttribute("aria-selected", String(active));
    button.tabIndex = active ? 0 : -1;
    button.classList.toggle("active", active);
  });
  document.querySelectorAll("[data-scene]").forEach((scene) => {
    scene.hidden = scene.dataset.scene !== step;
  });
  const panel = document.getElementById("workflow-panel");
  panel.dataset.view = step;
  panel.setAttribute("aria-labelledby", selected.id);
  const part = step[0].toUpperCase() + step.slice(1);
  document.querySelector("[data-panel-kicker]").textContent = translated(
    "panel" + part,
  );
  document.querySelector("[data-panel-note]").textContent = translated(
    "panel" + part + "Note",
  );
  if (focus) selected.focus();
}

function applyLanguage(language, updateURL = false) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = translated("title");
  document.querySelector('meta[name="description"]').content =
    translated("description");
  document.querySelector('meta[property="og:title"]').content =
    translated("title");
  document.querySelector('meta[property="og:description"]').content =
    translated("description");
  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => setText(element, translated(element.dataset.i18n)));
  document
    .querySelectorAll("[data-i18n-aria]")
    .forEach((element) =>
      element.setAttribute("aria-label", translated(element.dataset.i18nAria)),
    );
  document
    .querySelectorAll("[data-language]")
    .forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.language === language),
      ),
    );
  document.querySelector("[data-apple-help]").href =
    "https://support.apple.com/" +
    (language === "zh" ? "zh-cn" : "en-us") +
    "/102445";
  document.getElementById("copy-status").textContent = copyStatusKey
    ? translated(copyStatusKey)
    : "";
  applyStep(currentStep);
  try {
    localStorage.setItem("learning-kit-language", language);
  } catch {
    /* Language switching still works when storage is blocked. */
  }
  if (updateURL) {
    const next = new URL(location.href);
    next.searchParams.set("lang", language);
    history.replaceState(null, "", next);
  }
}

for (const element of document.querySelectorAll("[data-download-link]"))
  element.href = downloadURL;
for (const element of document.querySelectorAll("[data-release-link]"))
  element.href = releaseURL;
for (const element of document.querySelectorAll("[data-checksum-link]"))
  element.href = downloadURL + ".sha256";
for (const element of document.querySelectorAll("[data-release-version]"))
  element.textContent = release.version;
for (const element of document.querySelectorAll("[data-release-size]")) {
  element.textContent = Number.isFinite(release.sizeMiB)
    ? " · " + release.sizeMiB.toFixed(1) + " MiB"
    : "";
}
document.querySelector("[data-checksum-command]").textContent = checksumCommand;

let initialLanguage = new URLSearchParams(location.search).get("lang");
if (!Object.hasOwn(copy, initialLanguage)) {
  try {
    initialLanguage = localStorage.getItem("learning-kit-language");
  } catch {
    initialLanguage = null;
  }
}
if (!Object.hasOwn(copy, initialLanguage))
  initialLanguage = navigator.language.toLowerCase().startsWith("zh")
    ? "zh"
    : "en";
applyLanguage(initialLanguage);

document
  .querySelectorAll("[data-language]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      applyLanguage(button.dataset.language, true),
    ),
  );
document
  .querySelectorAll("[data-step]")
  .forEach((button) =>
    button.addEventListener("click", () => applyStep(button.dataset.step)),
  );
document
  .querySelector(".workflow-tabs")
  .addEventListener("keydown", (event) => {
    if (
      ![
        "ArrowDown",
        "ArrowUp",
        "ArrowRight",
        "ArrowLeft",
        "Home",
        "End",
      ].includes(event.key)
    )
      return;
    const steps = ["capture", "review", "connect"];
    const index = steps.indexOf(currentStep);
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? 2
          : (index +
              (["ArrowDown", "ArrowRight"].includes(event.key) ? 1 : -1) +
              3) %
            3;
    event.preventDefault();
    applyStep(steps[next], true);
  });

document.getElementById("copy-checksum").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(checksumCommand);
    copyStatusKey = "copied";
  } catch {
    copyStatusKey = "copyFailed";
  }
  document.getElementById("copy-status").textContent =
    translated(copyStatusKey);
});
