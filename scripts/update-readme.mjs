#!/usr/bin/env node

/**
 * update-readme.mjs
 *
 * Scans image2/ and seedance2/ for prompt.json files and regenerates the
 * prompt gallery section in all README files.
 *
 * Usage:
 *   npm run update-readme
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Marker strings used in all README files
const MARKER_START = '<!-- PROMPT_GALLERY_START -->';
const MARKER_END = '<!-- PROMPT_GALLERY_END -->';

// ---------------------------------------------------------------------------
// Discover all prompt.json files (excluding _template)
// ---------------------------------------------------------------------------
function discoverPrompts() {
  const results = [];
  const models = ['image2', 'seedance2'];

  for (const model of models) {
    const modelDir = join(ROOT, model);
    if (!existsSync(modelDir)) continue;

    const categoryDirs = readdirSync(modelDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && d.name !== '_template');

    for (const cat of categoryDirs) {
      const catDir = join(modelDir, cat.name);
      const slugDirs = readdirSync(catDir, { withFileTypes: true })
        .filter(d => d.isDirectory());

      for (const slug of slugDirs) {
        const jsonPath = join(catDir, slug.name, 'prompt.json');
        if (existsSync(jsonPath)) {
          try {
            const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));
            results.push({
              model,
              category: cat.name,
              slug: slug.name,
              prompt_name: data.prompt_name || slug.name,
              tags: data.tags || [],
              preview_image: data.preview?.image || '',
              // Build relative paths for README links
              dir_path: `${model}/${cat.name}/${slug.name}/`,
              preview_path: data.preview?.image
                ? `${model}/${cat.name}/${slug.name}/${data.preview.image}`
                : '',
            });
          } catch (err) {
            console.error(`  WARN: failed to parse ${jsonPath}: ${err.message}`);
          }
        }
      }
    }
  }

  return results;
}

// ---------------------------------------------------------------------------
// Build gallery table rows
// ---------------------------------------------------------------------------
function buildGalleryRows(prompts, lang) {
  if (prompts.length === 0) {
    const emptyMessages = {
      en: 'No prompts have been added yet.',
      'zh-CN': '暂未添加正式提示词。',
      'zh-TW': '暫未添加正式提示詞。',
      ja: 'プロンプトはまだ追加されていません。',
      ko: '아직 프롬프트가 추가되지 않았습니다.',
      id: 'Belum ada prompt yang ditambahkan.',
    };
    return [emptyMessages[lang] || emptyMessages['en']];
  }

  const headers = {
    en: ['Preview', 'Model', 'Category', 'Prompt', 'Tags'],
    'zh-CN': ['预览', '模型', '分类', '提示词', '标签'],
    'zh-TW': ['預覽', '模型', '分類', '提示詞', '標籤'],
    ja: ['プレビュー', 'モデル', 'カテゴリ', 'プロンプト', 'タグ'],
    ko: ['미리보기', '모델', '분류', '프롬프트', '태그'],
    id: ['Pratinjau', 'Model', 'Kategori', 'Prompt', 'Tag'],
  };

  const h = headers[lang] || headers['en'];
  const rows = [];

  // Header row
  rows.push(`| ${h[0]} | ${h[1]} | ${h[2]} | ${h[3]} | ${h[4]} |`);
  rows.push(`| --- | --- | --- | --- | --- |`);

  for (const p of prompts) {
    const previewCell = p.preview_image
      ? `<img src="${p.preview_path}" alt="${p.prompt_name}" width="80">`
      : '—';
    const promptLink = `[${p.prompt_name}](${p.dir_path})`;
    const tagsCell = p.tags.slice(0, 5).join(', ') || '—';

    rows.push(`| ${previewCell} | ${p.model} | ${p.category} | ${promptLink} | ${tagsCell} |`);
  }

  return rows;
}

// ---------------------------------------------------------------------------
// Replace gallery content between markers in a README file
// ---------------------------------------------------------------------------
function updateReadmeFile(filePath, prompts, lang) {
  if (!existsSync(filePath)) {
    console.log(`  SKIP: ${filePath} does not exist`);
    return false;
  }

  let content = readFileSync(filePath, 'utf-8');
  const startIdx = content.indexOf(MARKER_START);
  const endIdx = content.indexOf(MARKER_END);

  if (startIdx === -1 || endIdx === -1) {
    console.log(`  SKIP: ${filePath} missing gallery markers`);
    return false;
  }

  // Filter prompts for model-specific READMEs
  let filteredPrompts = prompts;
  const basename = filePath.replace(/\\/g, '/').split('/').pop();

  if (basename === 'README.md' && filePath.includes('image2') && !filePath.includes('seedance2')) {
    // Check if this is image2/README.md (not root README)
    if (filePath.replace(/\\/g, '/').startsWith(join(ROOT, 'image2').replace(/\\/g, '/'))) {
      filteredPrompts = prompts.filter(p => p.model === 'image2');
    }
  }

  if (basename === 'README.md' && filePath.includes('seedance2') && !filePath.includes('image2')) {
    if (filePath.replace(/\\/g, '/').startsWith(join(ROOT, 'seedance2').replace(/\\/g, '/'))) {
      filteredPrompts = prompts.filter(p => p.model === 'seedance2');
    }
  }

  const galleryRows = buildGalleryRows(filteredPrompts, lang);
  const newGallery = galleryRows.join('\n');

  // Replace content between markers (preserve markers)
  const before = content.slice(0, startIdx + MARKER_START.length);
  const after = content.slice(endIdx);
  content = before + '\n' + newGallery + '\n' + after;

  writeFileSync(filePath, content, 'utf-8');
  console.log(`  UPDATED: ${filePath} (${filteredPrompts.length} prompts)`);
  return true;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
console.log('Updating README galleries...\n');

const prompts = discoverPrompts();
console.log(`Found ${prompts.length} prompt(s)\n`);

// Language mapping for root README files
const rootFiles = [
  { path: join(ROOT, 'README.md'), lang: 'en' },
  { path: join(ROOT, 'README.zh-CN.md'), lang: 'zh-CN' },
  { path: join(ROOT, 'README.zh-TW.md'), lang: 'zh-TW' },
  { path: join(ROOT, 'README.ja.md'), lang: 'ja' },
  { path: join(ROOT, 'README.ko.md'), lang: 'ko' },
  { path: join(ROOT, 'README.id.md'), lang: 'id' },
  { path: join(ROOT, 'image2', 'README.md'), lang: 'en' },
  { path: join(ROOT, 'seedance2', 'README.md'), lang: 'en' },
];

for (const file of rootFiles) {
  updateReadmeFile(file.path, prompts, file.lang);
}

console.log('\nDone.');
