# Learning-Kit

<!-- lk-release:readme.header:start -->
**[中文官网](https://gotfusion.github.io/Learning-Kit-Releases/?lang=zh)** · **[English website](https://gotfusion.github.io/Learning-Kit-Releases/?lang=en)** · **[下载 / Downloads](https://github.com/GotFusion/Learning-Kit-Releases/releases/tag/v0.1.2-preview.1)**
<!-- lk-release:readme.header:end -->

记录几个关键词，让 AI 整理已有笔记或生成草稿，再通过批注和审核逐步完善你的理解。笔记以 Markdown 保存在本机，支持 Obsidian 文件夹。

Capture a few keywords. Let AI revisit existing notes or prepare a draft, then refine it through annotations and review. Your notes stay in local Markdown files, with support for Obsidian folders.

## 下载安装 / Install

<!-- lk-release:readme.download:start -->
[下载 Apple Silicon 版 DMG / Download the Apple Silicon DMG](https://github.com/GotFusion/Learning-Kit-Releases/releases/download/v0.1.2-preview.1/Learning-Kit-0.1.2-macos-arm64-adhoc.dmg) · [中英安装说明 / Bilingual guide](INSTALL.md)
<!-- lk-release:readme.download:end -->

<!-- lk-release:readme.version:start -->
- **0.1.2 预览版 / Preview**，约 **20.9 MiB**。不包含模型权重。 / No model weights are bundled.
<!-- lk-release:readme.version:end -->
<!-- lk-release:readme.compatibility:start -->
- 当前包面向 Apple Silicon，声明最低 macOS 14.0。本次安装包尚未完成原生实机验证。其他架构和 macOS 版本的支持不在本次验证声明中。 / For Apple Silicon. The package declares macOS 14.0 or later. This package has not yet been validated in a native system test. Other architectures and macOS versions are outside this validation claim.
<!-- lk-release:readme.compatibility:end -->
- 网页提供中英双语，当前应用界面为中文。 / This website is bilingual. The current application interface is in Chinese.
<!-- lk-release:readme.signing:start -->
- 当前安装包采用 ad-hoc 签名，未经过 Apple 公证。首次打开若被系统阻止，确认来源和校验结果后，可到“系统设置 → 隐私与安全性”允许此次打开。 / This package is ad-hoc signed and has not been notarized by Apple. If macOS blocks the first launch, verify the source and checksum, then allow this app in System Settings → Privacy & Security. [Apple 中文说明](https://support.apple.com/zh-cn/102445) · [English instructions](https://support.apple.com/en-us/102445)
<!-- lk-release:readme.signing:end -->

AI 功能使用本机已登录的 Codex CLI，此路径无需单独填写 ChatGPT API Key。执行 AI 请求时，对话和相关笔记内容会发送至所选服务。

AI features use your locally signed-in Codex CLI, without a separate ChatGPT API key for this route. Conversations and relevant note content are sent to the selected service during AI requests.

此公开仓库只提供安装包、说明和网站文件，不包含应用源码。 / This public repository contains downloads, documentation, and website files, not the application source.

## 网站维护 / Website maintenance

纯静态 HTML、CSS 和 JavaScript；无构建步骤、外部字体、CDN 或追踪脚本。GitHub Pages 从 main 分支根目录发布。

Static HTML, CSS, and JavaScript. No build step, external fonts, CDN, or tracking scripts. GitHub Pages publishes the root of the main branch.

- 发布版本、下载文件名、包体积、兼容信息和校验值统一在 **release.js** 中维护。 / Edit **release.js** for release metadata.
- 中英文案与切换逻辑在 **site.js**；支持 ?lang=zh 和 ?lang=en 分享链接。 / Translation strings and language controls live in **site.js**.
- 修改 CSS 或 JavaScript 后，同步更新 **index.html** 中对应资源的版本参数，避免浏览器继续使用旧缓存。 / After changing CSS or JavaScript, update its version parameter in **index.html** to invalidate browser caches.
- 产品窗口为明确标注的工作流示意，不是真实应用截图。 / The product window is a labeled workflow illustration, not an app screenshot.
- 可在仓库目录运行 **python3 -m http.server 4186 --bind 127.0.0.1** 本地预览。 / Run this command in the repository for a local preview.

完整验证范围和已知限制以 [Releases](https://github.com/GotFusion/Learning-Kit-Releases/releases) 为准。 / See Releases for verified scope and known limitations.
