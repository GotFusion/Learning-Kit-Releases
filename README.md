# Learning-Kit

AI 驱动的轻记应用：记录关键词，由 AI 整理已有笔记或生成草稿，通过批注和审核逐步完善个人知识库。

此仓库仅提供 macOS 安装包、安装说明和发布记录。

**[下载 0.1.0 预览版](https://github.com/GotFusion/Learning-Kit-Releases/releases/tag/v0.1.0-preview.1)** · [安装说明](INSTALL.md)

适用于 Apple Silicon Mac。安装包约 18.4 MiB，不包含模型权重。打开 DMG，将 Learning-Kit 拖入 Applications 即可安装。AI 功能使用本机已登录的 Codex CLI；设置中可检查连接，无需 ChatGPT API Key。

当前包采用 ad-hoc 签名，尚未经过 Apple 公证；首次打开可能需要按 [Apple 的说明](https://support.apple.com/zh-cn/102445) 在“系统设置 → 隐私与安全性”允许此次打开。声明最低 macOS 14，已实测 macOS 27.2；Intel 和其他系统版本未验证。

下载时可同时保存 `.sha256` 文件，在同一目录运行：

```sh
shasum -a 256 -c Learning-Kit-0.1.0-macos-arm64-adhoc.dmg.sha256
```

当前版本的完整功能范围与已知限制见 [发布记录](https://github.com/GotFusion/Learning-Kit-Releases/releases)。
