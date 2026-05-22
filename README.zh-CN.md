<div align="center">

# Image2 & Seedance 2 提示词手册

*专注于 Image2 图像生成与 Seedance 2 视频生成的提示词模板库。*

[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Bahasa Indonesia](README.id.md)

![Image2](https://img.shields.io/badge/Image2-图像生成-blue?style=flat-square)
![Seedance 2](https://img.shields.io/badge/Seedance%202-视频生成-purple?style=flat-square)
![JSON](https://img.shields.io/badge/格式-JSON-lightgrey?style=flat-square)
[![License](https://img.shields.io/badge/许可证-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 项目概述

**Image2 & Seedance 2 提示词手册** 是一个为 AI 图像与视频生成精心整理的提示词模板库。项目专注于提供可复用、结构良好的提示词模式，而非视觉风格参考。

本项目提供：
- 标准化的 `prompt.json` 格式用于存储提示词模板
- 中英双语提示词支持
- 结构化的变量系统，方便提示词自定义
- 每个提示词的示例案例展示
- 新提示词自动导入流水线
- 所有 README 文件自动生成提示词目录

## 支持的模型

| 模型 | 类型 | 说明 |
| --- | --- | --- |
| **Image2** | 图像生成 | 高质量静态图像生成 |
| **Seedance 2** | 视频生成 | AI 驱动的视频片段生成 |

## 目录结构

```
.
├── README.md                     # 英文说明
├── README.zh-CN.md               # 当前文件（简体中文）
├── README.zh-TW.md               # 繁体中文
├── README.ja.md                  # 日文
├── README.ko.md                  # 韩文
├── README.id.md                  # 印尼文
├── LICENSE                       # MIT 许可证
├── package.json                  # 项目脚本
├── scripts/
│   ├── import-prompt.mjs         # 从 inbox/ 导入提示词
│   └── update-readme.mjs         # 重新生成 README 目录
├── .claude/
│   └── skills/
│       └── prompt-importer/
│           └── SKILL.md          # Claude Code skill 定义
├── assets/                       # 共享资源（logo 等）
├── inbox/                        # 新提示词提交存放处
│   ├── image2/
│   └── seedance2/
├── templates/                    # 模板文件
│   ├── image2.prompt.template.json
│   ├── seedance2.prompt.template.json
│   └── prompt.md.template
├── image2/                       # Image2 提示词模板
│   ├── _template/                # 模板参考
│   ├── portrait/                 # 人像
│   ├── product/                  # 产品
│   ├── poster/                   # 海报
│   ├── character/                # 角色
│   ├── architecture/             # 建筑
│   └── style/                    # 风格
├── seedance2/                    # Seedance 2 提示词模板
│   ├── _template/                # 模板参考
│   ├── cinematic/                # 电影感
│   ├── product-video/            # 产品视频
│   ├── camera-movement/          # 镜头运动
│   ├── character-motion/         # 角色动画
│   ├── image-to-video/           # 图生视频
│   └── social-video/             # 社交短视频
└── docs/                         # 文档
    ├── prompt-json-spec.md       # JSON 格式规范
    ├── image2-guide.md           # Image2 提示词指南
    ├── seedance2-guide.md        # Seedance 2 提示词指南
    └── contribution-guide.md     # 贡献指南
```

## 提示词 JSON 格式

每个提示词以 `prompt.json` 文件存储，采用标准化模式。每个文件包含：

- **元数据**：名称、标识、模型、版本、分类
- **多语言内容**：中英文简介、提示词、反向提示词
- **结构化变量**：可替换的模板变量，附带标签和示例
- **示例案例**：展示模板实际使用效果的完整提示词
- **推荐参数**：宽高比、品质设置及备注

完整规范请参见 [docs/prompt-json-spec.md](docs/prompt-json-spec.md)。

## 如何添加提示词

1. 复制 `templates/prompt.md.template` 到 `inbox/<model>/<your-slug>/prompt.md`
2. 填写 frontmatter 和所有章节
3. 在同目录下放置预览图片（`example.jpg`）
4. 运行 `npm run build`

```bash
# 普通导入（跳过已有目录）
npm run build

# 强制覆盖已有提示词
npm run import -- --force
npm run update-readme
```

详细说明请参见 [docs/contribution-guide.md](docs/contribution-guide.md)。

## 提示词目录

<!-- PROMPT_GALLERY_START -->
| 预览 | 模型 | 分类 | 提示词 | 标签 |
| --- | --- | --- | --- | --- |
| <img src="image2/portrait/soft-pink-boudoir-fashion-proposal/example.png" alt="Soft Pink Boudoir Fashion Proposal" width="80"> | image2 | portrait | [Soft Pink Boudoir Fashion Proposal](image2/portrait/soft-pink-boudoir-fashion-proposal/) | image2, portrait, fashion, infographic, chinese |
| <img src="image2/sticker/chaotic-mspaint-chat-sticker-pack/example.png" alt="Chaotic MS Paint Chat Sticker Pack" width="80"> | image2 | sticker | [Chaotic MS Paint Chat Sticker Pack](image2/sticker/chaotic-mspaint-chat-sticker-pack/) | image2, sticker, meme, expression-pack, ms-paint |
| <img src="image2/sticker/chibi-anime-chat-sticker-grid/example.png" alt="Chibi Anime Chat Sticker Grid" width="80"> | image2 | sticker | [Chibi Anime Chat Sticker Grid](image2/sticker/chibi-anime-chat-sticker-grid/) | image2, sticker, meme, chibi, anime |
<!-- PROMPT_GALLERY_END -->

## 贡献

欢迎贡献！完整贡献流程请参见 [docs/contribution-guide.md](docs/contribution-guide.md)。

## 许可证

本项目基于 [MIT License](LICENSE) 许可。

## 免责声明

本项目为独立社区项目。与任何 AI 模型提供商无关联或认可关系。所有提示词模板均为社区贡献的原创作品。本项目不分发生成的图像或专有模型权重。
