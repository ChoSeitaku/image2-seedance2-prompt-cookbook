# Contribution Guide

Thank you for contributing to the Image2 & Seedance 2 Prompt Cookbook!

## How to Add a New Prompt

### Step 1: Prepare your files

Create a directory under `inbox/` with your prompt slug as the name:

```
inbox/image2/<your-slug>/
├── prompt.md
└── example.jpg
```

or for Seedance 2:

```
inbox/seedance2/<your-slug>/
├── prompt.md
└── example.jpg
```

### Step 2: Write prompt.md

Use the template at `templates/prompt.md.template` as a starting point. Copy it to your inbox directory and fill in all sections.

Your `prompt.md` must have valid YAML frontmatter between `---` markers at the top:

```yaml
---
model: image2          # or seedance2
category: portrait     # must match a valid category
slug: my-prompt-slug   # URL-safe, kebab-case
prompt_name: My Prompt # human-readable name
summary_zh: 中文简介
summary_en: English summary
tags:
  - tag1
  - tag2
recommended_aspect_ratio:
  - 1:1
  - 16:9
license: MIT
---
```

The markdown body should include the following sections:
- `# 中文提示词` / `# English Prompt`
- `# 中文反向提示词` / `# English Negative Prompt`
- `# 使用场景 zh` / `# Use Cases en`
- `# 变量 Variables` (markdown table)
- `# 示例 Cases` (with `## Case N` subsections)

### Step 3: Add a preview image

Place a preview image in the same directory. Accepted filenames:
- `example.jpg`
- `example.png`
- `preview.jpg`
- `preview.png`

### Step 4: Run the build

```bash
npm run build
```

This will:
1. Parse your `prompt.md` and generate `prompt.json`
2. Copy the preview image to the official directory
3. Copy `prompt.md` as `source.md` for traceability
4. Update all README files with the new gallery entry

### Step 5: Force overwrite (if needed)

If a prompt with the same slug already exists and you want to overwrite it:

```bash
npm run import -- --force
npm run update-readme
```

## Pull Request Checklist

Before submitting a PR, please ensure:

- [ ] `prompt.md` has valid YAML frontmatter with all required fields
- [ ] `model` is either `image2` or `seedance2`
- [ ] `category` matches one of the predefined categories
- [ ] `slug` is lowercase, kebab-case, and unique within its model/category
- [ ] All multilingual fields (`zh`, `en`) are filled
- [ ] Variables table is complete and matches the model's variable schema
- [ ] Example cases are provided and complete
- [ ] Preview image is included and is a reasonable size (under 5MB recommended)
- [ ] `npm run build` completes without errors
- [ ] Generated `prompt.json` is valid JSON
- [ ] README gallery links work correctly

## Category Reference

**Image2 categories:** `portrait`, `product`, `poster`, `character`, `architecture`, `style`, `sticker`

**Seedance 2 categories:** `cinematic`, `product-video`, `camera-movement`, `character-motion`, `image-to-video`, `social-video`

## Prohibited Content

- Do not include copyrighted images, text, or prompts from third-party projects
- Do not include NSFW or harmful content
- All content must be your original work or properly licensed

## Questions?

Open an issue on the GitHub repository.
