<!-- lk-release:install.title:start -->
# Learning-Kit 0.1.2 预览版 / Preview
<!-- lk-release:install.title:end -->

<!-- lk-release:install.header:start -->
[中文官网](https://gotfusion.github.io/Learning-Kit-Releases/?lang=zh) · [English website](https://gotfusion.github.io/Learning-Kit-Releases/?lang=en) · [下载 / Downloads](https://github.com/GotFusion/Learning-Kit-Releases/releases/tag/v0.1.2-preview.1)
<!-- lk-release:install.header:end -->

## 中文

<!-- lk-release:install.overview.zh:start -->
约 20.9 MiB。安装包不包含模型权重。当前包面向 Apple Silicon，声明最低 macOS 14.0。本次安装包尚未完成原生实机验证。其他架构和 macOS 版本的支持不在本次验证声明中。**当前应用界面为中文，下载网页提供中英两版。**
<!-- lk-release:install.overview.zh:end -->

<!-- lk-release:install.file.zh:start -->
1. 下载 **Learning-Kit-0.1.2-macos-arm64-adhoc.dmg** 和同名 **.sha256** 文件。
<!-- lk-release:install.file.zh:end -->
2. 可将两个文件放到同一文件夹，在该目录执行以下命令，确认显示 OK：

<!-- lk-release:install.command.zh:start -->
       shasum -a 256 -c Learning-Kit-0.1.2-macos-arm64-adhoc.dmg.sha256
<!-- lk-release:install.command.zh:end -->

3. 打开 DMG，将 Learning-Kit 拖到 Applications。升级前请先退出旧版本。
4. 从“应用程序”启动，选择已有 Markdown / Obsidian 文件夹或新建知识库。
5. 在“设置 → AI 助手 → Codex 连接”中检查本机已登录的 Codex CLI。此路径无需单独填写 ChatGPT API Key，模型可留空使用 CLI 默认配置。

<!-- lk-release:install.signing.zh:start -->
当前安装包采用 ad-hoc 签名，未经过 Apple 公证。首次打开若被系统阻止，确认来源和校验结果后，可到“系统设置 → 隐私与安全性”允许此次打开。 [Apple 官方说明](https://support.apple.com/zh-cn/102445)。无需关闭系统的安全检查。
<!-- lk-release:install.signing.zh:end -->

### 开始轻记

在桌面小窗分次暂存关键词，准备好后点击向上箭头整组提交。铃铛显示进度和结果；AI 会检索已有内容，再准备待审笔记。你可以添加批注、让助手修改，批准后才合入正式知识库。笔记和对话记录保存在本机；**执行 AI 请求时，对话和相关笔记内容会发送至所选服务**。

### 当前边界

<!-- lk-release:install.limits.zh:start -->
当前版本的已知限制：
<!-- lk-release:install.limits.zh:end -->全局一次处理一个助手任务，每轮最多生成 3 篇草稿，额外主题保留待继续处理。每库聊天历史（包括回收站）上限 32 MiB，尚未提供永久清空回收站；达到上限可能阻止保存和继续生成。安装后的 WidgetKit、其他系统以及模型服务的具体验证范围请查看发布记录。

## English

<!-- lk-release:install.overview.en:start -->
Approximately 20.9 MiB. No model weights are bundled. For Apple Silicon. The package declares macOS 14.0 or later. This package has not yet been validated in a native system test. Other architectures and macOS versions are outside this validation claim. **The current app interface is in Chinese; the download website is available in Chinese and English.**
<!-- lk-release:install.overview.en:end -->

<!-- lk-release:install.file.en:start -->
1. Download **Learning-Kit-0.1.2-macos-arm64-adhoc.dmg** and the matching **.sha256** file.
<!-- lk-release:install.file.en:end -->
2. Optionally place both files in the same folder and run the following command from that folder. Confirm it reports OK:

<!-- lk-release:install.command.en:start -->
       shasum -a 256 -c Learning-Kit-0.1.2-macos-arm64-adhoc.dmg.sha256
<!-- lk-release:install.command.en:end -->

3. Open the DMG and drag Learning-Kit into Applications. Quit the previous version before upgrading.
4. Launch the app from Applications. Open an existing Markdown / Obsidian folder or create a new knowledge library.
5. In **设置 → AI 助手 → Codex 连接** (Settings → AI assistant → Codex connection), check your locally signed-in Codex CLI. This route does not require a separate ChatGPT API key. Leave the model blank to use the CLI default.

<!-- lk-release:install.signing.en:start -->
This package is ad-hoc signed and has not been notarized by Apple. If macOS blocks the first launch, verify the source and checksum, then allow this app in System Settings → Privacy & Security. [Apple’s instructions](https://support.apple.com/en-us/102445). You do not need to disable system security checks.
<!-- lk-release:install.signing.en:end -->

### Start a note

Collect keywords in the desktop window. When ready, use the upward arrow to submit the group. The bell shows progress and results. AI searches existing content and prepares drafts for review. Add annotations, request revisions, then approve what should join your knowledge library. Notes and conversation records are stored locally. **During AI requests, conversations and relevant note content are sent to your selected service.**

### Current limits

<!-- lk-release:install.limits.en:start -->
Known limits in the current release: 
<!-- lk-release:install.limits.en:end -->One assistant task runs at a time. Each run can create up to three drafts; additional topics remain available to continue later. Conversation storage is limited to 32 MiB per library, including trash. There is no permanent trash-cleanup control yet, so reaching that limit can block saving and further generation. See the release notes for installed WidgetKit, other operating systems, and model-service validation scope.

## 校验值 / Checksum

<!-- lk-release:install.checksum:start -->
SHA-256: **cbd89da69ce3c4ed0b93b56e554947ac59afa2a99c874459495292ac029f5fcf**
<!-- lk-release:install.checksum:end -->

<!-- lk-release:install.release:start -->
[发布记录与已知限制 / Release notes and known limitations](https://github.com/GotFusion/Learning-Kit-Releases/releases/tag/v0.1.2-preview.1)
<!-- lk-release:install.release:end -->
