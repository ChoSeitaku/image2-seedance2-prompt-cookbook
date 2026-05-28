<div align="center">

# Image2 & Seedance 2 Prompt Cookbook

*A prompt template library for Image2 image generation and Seedance 2 video generation.*

[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Bahasa Indonesia](README.id.md)

![Image2](https://img.shields.io/badge/Image2-Image%20Generation-blue?style=flat-square)
![Seedance 2](https://img.shields.io/badge/Seedance%202-Video%20Generation-purple?style=flat-square)
![JSON](https://img.shields.io/badge/Format-JSON-lightgrey?style=flat-square)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## Overview

The **Image2 & Seedance 2 Prompt Cookbook** is a curated collection of prompt templates for AI-powered image and video generation. It focuses on reusable, well-structured prompt patterns — not visual styles.

This project provides:
- Standardized `prompt.json` format for storing prompt templates
- Multilingual prompt support (Chinese and English)
- Structured variable system for easy prompt customization
- Example cases demonstrating each prompt in action
- Automated import pipeline for new prompt submissions
- Auto-generated prompt galleries across all README files

## Supported Models

| Model | Type | Description |
| --- | --- | --- |
| **Image2** | Image Generation | High-quality still image generation |
| **Seedance 2** | Video Generation | AI-powered video clip generation |

## Directory Structure

```
.
├── README.md                     # You are here
├── README.zh-CN.md               # Simplified Chinese
├── README.zh-TW.md               # Traditional Chinese
├── README.ja.md                  # Japanese
├── README.ko.md                  # Korean
├── README.id.md                  # Indonesian
├── LICENSE                       # MIT License
├── package.json                  # Project scripts
├── scripts/
│   ├── import-prompt.mjs         # Import prompts from inbox/
│   └── update-readme.mjs         # Regenerate README galleries
├── .claude/
│   └── skills/
│       └── prompt-importer/
│           └── SKILL.md          # Claude Code skill definition
├── assets/                       # Shared assets (logos, etc.)
├── inbox/                        # New prompt submissions go here
│   ├── image2/
│   └── seedance2/
├── templates/                    # Template files
│   ├── image2.prompt.template.json
│   ├── seedance2.prompt.template.json
│   └── prompt.md.template
├── image2/                       # Image2 prompt templates
│   ├── _template/                # Schema reference
│   ├── portrait/
│   ├── product/
│   ├── poster/
│   ├── character/
│   ├── architecture/
│   └── style/
├── seedance2/                    # Seedance 2 prompt templates
│   ├── _template/                # Schema reference
│   ├── cinematic/
│   ├── product-video/
│   ├── camera-movement/
│   ├── character-motion/
│   ├── image-to-video/
│   └── social-video/
└── docs/                         # Documentation
    ├── prompt-json-spec.md
    ├── image2-guide.md
    ├── seedance2-guide.md
    └── contribution-guide.md
```

## Prompt JSON Format

Every prompt is stored as a `prompt.json` file with a standardized schema. Each contains:

- **Metadata**: name, slug, model, version, category
- **Multilingual content**: Chinese and English summaries, prompts, negative prompts
- **Structured variables**: replaceable template variables with labels and examples
- **Example cases**: filled-in prompts showing the template in action
- **Recommended parameters**: aspect ratios, quality settings, and notes

See [docs/prompt-json-spec.md](docs/prompt-json-spec.md) for the complete specification.

## How to Add a Prompt

1. Copy `templates/prompt.md.template` to `inbox/<model>/<your-slug>/prompt.md`
2. Fill in the frontmatter and all sections
3. Add a preview image (`example.jpg`) in the same directory
4. Run `npm run build`

```bash
# Normal import (skips existing directories)
npm run build

# Force overwrite existing prompts
npm run import -- --force
npm run update-readme
```

See [docs/contribution-guide.md](docs/contribution-guide.md) for detailed instructions.

## Prompt Gallery

<!-- PROMPT_GALLERY_START -->
| Preview | Model | Category | Prompt | Tags |
| --- | --- | --- | --- | --- |
| <img src="image2/portrait/anime-pencil-sketch-character-design-sheet/example.jpg" alt="Anime Pencil Sketch Character Design Sheet" width="80"> | image2 | portrait | [Anime Pencil Sketch Character Design Sheet](image2/portrait/anime-pencil-sketch-character-design-sheet/) | image2, portrait, character-design, anime, pencil-sketch |
| <img src="image2/portrait/casual-iphone-hotpot-cosplayer-snapshot/example.jpg" alt="Casual iPhone Hotpot Cosplayer Snapshot" width="80"> | image2 | portrait | [Casual iPhone Hotpot Cosplayer Snapshot](image2/portrait/casual-iphone-hotpot-cosplayer-snapshot/) | image2, portrait, cosplay, candid, iphone |
| <img src="image2/portrait/dimension-breaking-cosplay-tablet-face/example.png" alt="Dimension-Breaking Cosplay Tablet Face" width="80"> | image2 | portrait | [Dimension-Breaking Cosplay Tablet Face](image2/portrait/dimension-breaking-cosplay-tablet-face/) | image2, portrait, cosplay, creative-photography, dimension-breaking |
| <img src="image2/portrait/iphone-anime-convention-cosplay-snapshot/example.png" alt="iPhone Anime Convention Cosplay Snapshot" width="80"> | image2 | portrait | [iPhone Anime Convention Cosplay Snapshot](image2/portrait/iphone-anime-convention-cosplay-snapshot/) | image2, portrait, cosplay, anime-convention, iphone-snapshot |
| <img src="image2/portrait/iphone-mirror-selfie-cosplay-bedroom/example.png" alt="iPhone Mirror Selfie Cosplay Bedroom Portrait" width="80"> | image2 | portrait | [iPhone Mirror Selfie Cosplay Bedroom Portrait](image2/portrait/iphone-mirror-selfie-cosplay-bedroom/) | image2, portrait, cosplay, mirror-selfie, iphone-snapshot |
| <img src="image2/portrait/panoramic-character-concept-breakdown/example.jpg" alt="Panoramic Character Concept Breakdown Sheet" width="80"> | image2 | portrait | [Panoramic Character Concept Breakdown Sheet](image2/portrait/panoramic-character-concept-breakdown/) | image2, portrait, character-design, concept-art, anime |
| <img src="image2/portrait/realistic-neon-doodle-cosplay-expo-selfie/example.png" alt="Realistic Neon Doodle Cosplay Expo Selfie" width="80"> | image2 | portrait | [Realistic Neon Doodle Cosplay Expo Selfie](image2/portrait/realistic-neon-doodle-cosplay-expo-selfie/) | image2, portrait, realistic, smartphone-photography, expo |
| <img src="image2/portrait/soft-pink-boudoir-fashion-proposal/example.png" alt="Soft Pink Boudoir Fashion Proposal" width="80"> | image2 | portrait | [Soft Pink Boudoir Fashion Proposal](image2/portrait/soft-pink-boudoir-fashion-proposal/) | image2, portrait, fashion, infographic, chinese |
| <img src="image2/sticker/chaotic-mspaint-chat-sticker-pack/example.png" alt="Chaotic MS Paint Chat Sticker Pack" width="80"> | image2 | sticker | [Chaotic MS Paint Chat Sticker Pack](image2/sticker/chaotic-mspaint-chat-sticker-pack/) | image2, sticker, meme, expression-pack, ms-paint |
| <img src="image2/sticker/chibi-anime-chat-sticker-grid/example.png" alt="Chibi Anime Chat Sticker Grid" width="80"> | image2 | sticker | [Chibi Anime Chat Sticker Grid](image2/sticker/chibi-anime-chat-sticker-grid/) | image2, sticker, meme, chibi, anime |
<!-- PROMPT_GALLERY_END -->

## Contribution

Contributions are welcome! Please see [docs/contribution-guide.md](docs/contribution-guide.md) for the full contribution workflow.

## License

This project is licensed under the [MIT License](LICENSE).

## Disclaimer

This project is an independent community effort. It is not affiliated with or endorsed by any AI model provider. All prompt templates are original works contributed by the community. The project does not distribute generated images or proprietary model weights.
