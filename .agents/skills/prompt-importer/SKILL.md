# prompt-importer

## Skill Name

`prompt-importer` — Import prompt submissions into the Image2 & Seedance 2 Prompt Cookbook.

## When to Use

Invoke this skill when a user provides a `prompt.md` file and an example image, and asks to add them to the project. The skill covers the full workflow: validating the submission, generating `prompt.json`, copying files to the correct directory, and updating all README files.

## Input File Specification

A submission consists of:

```
inbox/<model>/<slug>/
├── prompt.md          # REQUIRED — markdown with YAML frontmatter
└── example.jpg        # OPTIONAL — preview image (also accepts .png, preview.jpg, preview.png)
```

Where `<model>` is `image2` or `seedance2`, and `<slug>` is a URL-safe kebab-case identifier.

## prompt.md Frontmatter Specification

The `prompt.md` file must begin with YAML frontmatter delimited by `---`:

```yaml
---
model: image2                          # REQUIRED: "image2" or "seedance2"
category: portrait                     # REQUIRED: must match a valid category
slug: cinematic-rainy-portrait         # REQUIRED: kebab-case, unique within model/category
prompt_name: Cinematic Rainy Portrait  # REQUIRED: human-readable name
summary_zh: 中文一句话简介             # OPTIONAL
summary_en: English one-line summary   # OPTIONAL
tags:                                  # OPTIONAL
  - image2
  - portrait
  - cinematic
recommended_aspect_ratio:              # OPTIONAL
  - 9:16
  - 16:9
license: MIT                           # OPTIONAL, defaults to MIT
---
```

### Valid Categories

**Image2:** `portrait`, `product`, `poster`, `character`, `architecture`, `style`, `sticker`

**Seedance 2:** `cinematic`, `product-video`, `camera-movement`, `character-motion`, `image-to-video`, `social-video`

## Markdown Body Section Specification

After the frontmatter, the markdown body must contain these sections:

| Section Heading | Required | Description |
| --- | --- | --- |
| `# 中文提示词` | yes | Chinese prompt template with UPPERCASE variables |
| `# English Prompt` | yes | English prompt template with UPPERCASE variables |
| `# 中文反向提示词` | no | Chinese negative prompt |
| `# English Negative Prompt` | no | English negative prompt |
| `# 使用场景 zh` | no | Bullet list of Chinese use cases |
| `# Use Cases en` | no | Bullet list of English use cases |
| `# 变量 Variables` | no | Markdown table of variable definitions |
| `# 示例 Cases` | no | Example cases with filled-in variables |

### Variables Table Format

```
# 变量 Variables
| Key | zh | en | example_zh | example_en |
| --- | --- | --- | --- | --- |
| SUBJECT | 主体 | Subject | 一位年轻女性 | a young woman |
| LOCATION | 场景 | Location | 城市街道 | a city street |
```

### Example Cases Format

```
# 示例 Cases
## Case 1
### case_name
Rainy Tokyo Portrait
### variables
```json
{
  "SUBJECT": "一位穿黑色风衣的年轻女性",
  "LOCATION": "雨夜的东京街道"
}
```
### prompt_zh
完整的替换变量后的中文成品提示词。

### prompt_en
Complete English prompt with variables filled in.
```

## Output Directory Rules

When `npm run import` is executed:

1. Read `model` from frontmatter → determines target root: `image2/` or `seedance2/`
2. Read `category` from frontmatter → determines target subdirectory
3. Read `slug` from frontmatter → determines target leaf directory
4. Final path: `<model>/<category>/<slug>/`

Generated files in the target directory:
- `prompt.json` — the structured prompt data
- `source.md` — a copy of the original `prompt.md` for traceability
- `example.jpg` (or `.png`) — the preview image

## Inbox Cleanup

After a successful import, **clear all files** from the inbox submission directory (the `<slug>` subdirectory). This keeps inbox ready for the next submission.

- Remove `prompt.md`
- Remove all image files (`example.png`, `example1.png`, etc.)
- Keep the `<model>` directory structure and `.gitkeep` files intact
- Keep `inbox/README.md`

## prompt.json Field Mapping Rules

| prompt.json field | Source |
| --- | --- |
| `prompt_name` | `prompt_name` from frontmatter |
| `prompt_slug` | `slug` from frontmatter |
| `model` | `model` from frontmatter (value itself, not the key) |
| `category` | `category` from frontmatter |
| `summary.zh` | `summary_zh` from frontmatter |
| `summary.en` | `summary_en` from frontmatter |
| `use_case.zh` | Parsed from `# 使用场景 zh` section |
| `use_case.en` | Parsed from `# Use Cases en` section |
| `prompt_template.zh` | Parsed from `# 中文提示词` section |
| `prompt_template.en` | Parsed from `# English Prompt` section |
| `negative_prompt.zh` | Parsed from `# 中文反向提示词` section |
| `negative_prompt.en` | Parsed from `# English Negative Prompt` section |
| `variables` | Parsed from `# 变量 Variables` table, merged into template defaults |
| `example_cases` | Parsed from `# 示例 Cases` section |
| `tags` | `tags` from frontmatter |
| `recommended_aspect_ratio` | `recommended_aspect_ratio` from frontmatter |
| `license` | `license` from frontmatter |
| `created_at` / `updated_at` | Auto-generated ISO 8601 timestamp |

### Variable Field Mapping

For Image2, variables include: `SUBJECT`, `LOCATION`, `COMPOSITION`, `CAMERA_ANGLE`, `LIGHTING`, `COLOR_PALETTE`, `STYLE`, `TEXTURE`, `MOOD`.

For Seedance 2, variables include: `DURATION`, `SUBJECT`, `LOCATION`, `ACTION`, `MOOD`, `START_FRAME`, `END_FRAME`, `CAMERA_MOVEMENT`, `LIGHTING`, `COLOR_PALETTE`, `STYLE`, `PACE`.

**Do not mix Image2 and Seedance 2 variable sets.** Each model has its own template with its own variables.

## Image Handling Rules

1. Look for preview images in the inbox submission directory with these filenames (in priority order):
   - `example.jpg`
   - `example.png`
   - `preview.jpg`
   - `preview.png`
2. Copy the first found image to the target directory, renaming to `example.jpg` or `example.png` based on the original extension.
3. Set `preview.image` in `prompt.json` to the copied filename (e.g. `"example.jpg"`).
4. The preview path in `prompt.json` is a relative filename only — not an absolute path, not a URL.
5. **Copy all additional images** (e.g. `example1.png`, `example2.png`) from the inbox directory to the target directory — these are reference images used by the prompt template.
6. **Compress all images to under 1MB** while preserving original dimensions and clarity. Use `sharp` with palette-based PNG compression:
   - For illustrations/stickers: prefer `{ palette: true, compressionLevel: 9 }` with `quality` 80-100 and `colors` 128-256
   - Try progressively lower `quality` or `colors` until the file is under 1MB
   - Never resize or downscale — only adjust encoding parameters

## README Update Rules

1. After importing prompts, run `npm run update-readme` to regenerate all gallery sections.
2. Gallery sections are delimited by `<!-- PROMPT_GALLERY_START -->` and `<!-- PROMPT_GALLERY_END -->` markers.
3. Gallery entries link to the prompt's **directory** (e.g. `[Cinematic Portrait](image2/portrait/cinematic-rainy-portrait/)`), not directly to `prompt.json`.
4. Preview images in the gallery use relative paths.
5. The `image2/README.md` only shows Image2 prompts; `seedance2/README.md` only shows Seedance 2 prompts.
6. Root README files show all prompts from both models.

## Command Usage

```bash
# Import new prompts from inbox/
npm run import

# Force overwrite existing prompts
npm run import -- --force

# Update all README galleries
npm run update-readme

# Full build: import + update READMEs
npm run build
```

## Quality Checklist

When adding a prompt, verify:

- [ ] `prompt.md` has valid YAML frontmatter with all required fields
- [ ] `model` is exactly `image2` or `seedance2`
- [ ] `category` matches a predefined category for that model
- [ ] `slug` is lowercase, kebab-case, and unique
- [ ] Chinese and English prompt templates both use valid variable placeholders
- [ ] Variables used in templates match the variables defined in the table
- [ ] Preview image is present and all images are compressed to under 1MB (without resizing)
- [ ] `npm run build` completes without errors
- [ ] Generated `prompt.json` is valid JSON (can be parsed)
- [ ] README gallery links navigate to the correct directory
- [ ] No placeholder text from the template remains unfilled (unless intentionally empty)

## Prohibited Actions

- **Do not invent or fabricate prompt content** that the user did not provide. If a field is missing, leave it as an empty string or empty array.
- **Do not copy README text, style.json content, images, or examples from any third-party project.**
- **Do not overwrite existing prompts** unless the user explicitly uses the `--force` flag or asks for overwrite.
- **Do not link directly to prompt.json** in README files — links must point to the prompt's directory.
- **Do not use absolute paths** for preview images — use relative filenames only.
- **Do not mix Image2 and Seedance 2 variable fields** — each model has its own variable schema.
- **Do not place preview images in the `assets/` directory** — each prompt's preview belongs in its own directory.
- **Do not manually edit content between `<!-- PROMPT_GALLERY_START -->` and `<!-- PROMPT_GALLERY_END -->`** — that content is auto-generated.
