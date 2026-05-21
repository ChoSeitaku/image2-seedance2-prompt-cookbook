#!/usr/bin/env node

/**
 * import-prompt.mjs
 *
 * Scans inbox/ for new prompt submissions, generates prompt.json from
 * prompt.md, copies images, and places everything into the official
 * directory structure.
 *
 * Usage:
 *   npm run import          # normal import (skips existing unless forced)
 *   npm run import -- --force  # overwrite existing prompt directories
 */

import { readFileSync, writeFileSync, readdirSync, statSync, cpSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const INBOX_DIR = join(ROOT, 'inbox');
const TEMPLATES_DIR = join(ROOT, 'templates');

const FORCE = process.argv.includes('--force');

// Image preview filenames in order of priority
const PREVIEW_NAMES = ['example.jpg', 'example.png', 'preview.jpg', 'preview.png'];

// ---------------------------------------------------------------------------
// Frontmatter parser (YAML subset — handles simple scalars, lists, and maps)
// ---------------------------------------------------------------------------
function parseFrontmatter(text) {
  const trimmed = text.trim();
  if (!trimmed.startsWith('---')) return { data: {}, body: text };

  const endIdx = trimmed.indexOf('---', 3);
  if (endIdx === -1) return { data: {}, body: text };

  const fmText = trimmed.slice(3, endIdx).trim();
  const body = trimmed.slice(endIdx + 3).trim();
  const data = {};

  const lines = fmText.split('\n');
  let currentKey = null;
  let currentList = null;
  let currentInlineList = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const indentMatch = line.match(/^\s*/);
    const indent = indentMatch ? indentMatch[0].length : 0;

    if (line.trim() === '' || line.trim().startsWith('#')) continue;

    // List item: "- value"
    if (currentKey !== null && line.trim().startsWith('- ')) {
      const value = line.trim().slice(2).trim();
      if (currentList !== null) {
        currentList.push(value);
      } else {
        // Inline list not yet created — create one
        if (!Array.isArray(data[currentKey])) {
          data[currentKey] = [];
        }
        data[currentKey].push(value);
        currentList = data[currentKey];
      }
      continue;
    }

    // Key: value
    const kvMatch = line.match(/^(\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*(.*)$/);
    if (kvMatch) {
      const key = kvMatch[2];
      const value = kvMatch[3].trim();

      currentKey = key;
      currentList = null;
      currentInlineList = null;

      if (value === '' || value === '|' || value === '>') {
        // Multi-line scalar — not supported in this simple parser; store empty
        data[key] = '';
      } else if (value.startsWith('[') && value.endsWith(']')) {
        // Inline array: [a, b, c]
        const inner = value.slice(1, -1);
        if (inner.trim() === '') {
          data[key] = [];
        } else {
          data[key] = inner.split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
        }
      } else {
        // Simple scalar
        const unquoted = value.replace(/^['"]|['"]$/g, '');
        data[key] = unquoted;
      }
    }
  }

  return { data, body };
}

// ---------------------------------------------------------------------------
// Markdown section parser — extracts named sections by heading
// ---------------------------------------------------------------------------
function parseSections(mdBody) {
  const sections = {};
  const lines = mdBody.split('\n');
  let currentHeading = null;
  let currentContent = [];

  for (const line of lines) {
    const hMatch = line.match(/^#{1,3}\s+(.+)/);
    if (hMatch) {
      // Save previous section
      if (currentHeading !== null) {
        sections[currentHeading] = currentContent.join('\n').trim();
      }
      currentHeading = hMatch[1].trim();
      currentContent = [];
    } else if (currentHeading !== null) {
      currentContent.push(line);
    }
  }

  // Save last section
  if (currentHeading !== null) {
    sections[currentHeading] = currentContent.join('\n').trim();
  }

  return sections;
}

// ---------------------------------------------------------------------------
// Parse variables table from markdown
// ---------------------------------------------------------------------------
function parseVariablesTable(body) {
  const variables = {};
  const lines = body.split('\n');
  let inTable = false;

  for (const line of lines) {
    if (line.includes('| Key ') || line.includes('| ---')) {
      inTable = true;
      continue;
    }
    if (!inTable) continue;
    if (!line.startsWith('|')) break;

    const cols = line.split('|').map(c => c.trim()).filter(c => c !== '');
    if (cols.length < 5) continue;

    const key = cols[0];
    variables[key] = {
      zh: cols[1] || '',
      en: cols[2] || '',
      example_zh: cols[3] || '',
      example_en: cols[4] || '',
    };
  }

  return variables;
}

// ---------------------------------------------------------------------------
// Parse example cases from markdown
// ---------------------------------------------------------------------------
function parseExampleCases(body) {
  const cases = [];
  const lines = body.split('\n');
  let i = 0;

  // Find the Cases section start
  while (i < lines.length && !lines[i].match(/^##\s+Case\s+\d+/i) && !lines[i].match(/^#\s+示例\s*Cases/)) {
    i++;
  }
  // Skip the heading line
  if (i < lines.length && lines[i].match(/^#\s+示例\s*Cases/)) i++;

  let currentCase = null;
  let currentField = null;
  let inCodeBlock = false;
  let codeContent = '';

  for (; i < lines.length; i++) {
    const line = lines[i];

    // New case
    const caseMatch = line.match(/^##\s+Case\s+(\d+)/i);
    if (caseMatch) {
      if (currentCase) {
        // Finalize previous case's open field
        if (currentField) {
          currentCase[currentField] = currentCase[currentField] || '';
        }
        cases.push(currentCase);
      }
      currentCase = { case_name: '' };
      currentField = null;
      continue;
    }

    if (!currentCase) continue;

    // Sub-headings inside a case
    const subMatch = line.match(/^###\s+(.+)/);
    if (subMatch) {
      if (currentField) {
        const val = currentCase[currentField];
        if (typeof val === 'string') {
          currentCase[currentField] = val.trim();
        }
      }
      currentField = subMatch[1].trim().toLowerCase().replace(/\s+/g, '_');
      currentCase[currentField] = '';
      inCodeBlock = false;
      codeContent = '';
      continue;
    }

    if (!currentField) continue;

    // Track code blocks
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        // Closing code block
        inCodeBlock = false;
        // Parse JSON variables
        if (currentField === 'variables' && codeContent.trim()) {
          try {
            currentCase.variables = JSON.parse(codeContent.trim());
          } catch {
            currentCase.variables = {};
          }
        }
        continue;
      } else {
        inCodeBlock = true;
        codeContent = '';
        continue;
      }
    }

    if (inCodeBlock) {
      codeContent += line + '\n';
      continue;
    }

    // Append content to current field
    if (line.trim() !== '' || (currentCase[currentField] && currentCase[currentField].length > 0)) {
      currentCase[currentField] = (currentCase[currentField] ? currentCase[currentField] + '\n' : '') + line;
    }
  }

  // Finalize last case
  if (currentCase) {
    if (currentField) {
      currentCase[currentField] = (currentCase[currentField] || '').trim();
    }
    cases.push(currentCase);
  }

  return cases;
}

// ---------------------------------------------------------------------------
// Load JSON template
// ---------------------------------------------------------------------------
function loadTemplate(model) {
  const templateMap = {
    'image2': join(TEMPLATES_DIR, 'image2.prompt.template.json'),
    'seedance2': join(TEMPLATES_DIR, 'seedance2.prompt.template.json'),
  };

  const key = model.toLowerCase();
  const templatePath = templateMap[key];
  if (!templatePath || !existsSync(templatePath)) {
    console.error(`No template found for model: ${model}`);
    return null;
  }

  return JSON.parse(readFileSync(templatePath, 'utf-8'));
}

// ---------------------------------------------------------------------------
// Find preview image in a directory
// ---------------------------------------------------------------------------
function findPreviewImage(dir) {
  for (const name of PREVIEW_NAMES) {
    const path = join(dir, name);
    if (existsSync(path)) return { path, name };
  }
  return null;
}

// ---------------------------------------------------------------------------
// Copy directory recursively (simplified cpSync with overwrite option)
// ---------------------------------------------------------------------------
function ensureDir(dirPath) {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
}

// ---------------------------------------------------------------------------
// Main import logic for a single prompt.md
// ---------------------------------------------------------------------------
function importPrompt(mdPath) {
  const dir = dirname(mdPath);
  const raw = readFileSync(mdPath, 'utf-8');
  const { data: fm, body } = parseFrontmatter(raw);

  // Validate required frontmatter fields
  const model = fm.model || '';
  const category = fm.category || '';
  const slug = fm.slug || '';
  const promptName = fm.prompt_name || '';

  if (!model || !category || !slug) {
    console.error(`  SKIP: missing model, category, or slug in frontmatter: ${mdPath}`);
    return false;
  }

  const modelLower = model.toLowerCase();
  if (modelLower !== 'image2' && modelLower !== 'seedance2') {
    console.error(`  SKIP: unsupported model "${model}" in: ${mdPath}`);
    return false;
  }

  // Determine target directory
  const targetDir = join(ROOT, modelLower, category, slug);

  // Check existing
  if (existsSync(targetDir) && !FORCE) {
    console.log(`  SKIP: target already exists (use --force to overwrite): ${targetDir}`);
    return false;
  }

  // Load template
  const template = loadTemplate(modelLower);
  if (!template) return false;

  // Parse markdown sections
  const sections = parseSections(body);

  // Parse variables table (look in the 变量 Variables section)
  const varSectionContent = sections['变量 Variables'] || sections['变量'] || '';
  const parsedVars = parseVariablesTable(varSectionContent);

  // Parse example cases
  const cases = parseExampleCases(body);

  // Build prompt.json from template
  template.prompt_name = promptName;
  template.prompt_slug = slug;
  template.category = category;
  template.summary = {
    zh: fm.summary_zh || '',
    en: fm.summary_en || '',
  };
  template.use_case = {
    zh: parseListSection(sections['使用场景 zh'] || ''),
    en: parseListSection(sections['Use Cases en'] || ''),
  };

  // Find and assign prompt text
  template.prompt_template = {
    zh: sections['中文提示词'] || '',
    en: sections['English Prompt'] || '',
  };
  template.negative_prompt = {
    zh: sections['中文反向提示词'] || '',
    en: sections['English Negative Prompt'] || '',
  };

  // Use parsed variables from the markdown table (replaces template defaults)
  if (Object.keys(parsedVars).length > 0) {
    template.variables = parsedVars;
  }

  // Example cases
  template.example_cases = cases.map(c => ({
    case_name: c.case_name || '',
    variables: c.variables || {},
    prompt_zh: (c.prompt_zh || '').trim(),
    prompt_en: (c.prompt_en || '').trim(),
  }));

  // Tags and aspect ratio from frontmatter
  template.tags = Array.isArray(fm.tags) ? fm.tags : [];
  if (Array.isArray(fm.recommended_aspect_ratio)) {
    template.recommended_aspect_ratio = fm.recommended_aspect_ratio;
  }
  if (fm.license) {
    template.license = fm.license;
  }

  // Timestamps
  const now = new Date().toISOString();
  template.created_at = template.created_at || now;
  template.updated_at = now;

  // Create target directory
  ensureDir(targetDir);

  // Write prompt.json
  const jsonPath = join(targetDir, 'prompt.json');
  writeFileSync(jsonPath, JSON.stringify(template, null, 2) + '\n', 'utf-8');
  console.log(`  CREATED: ${jsonPath}`);

  // Copy source markdown
  const sourceMdPath = join(targetDir, 'source.md');
  writeFileSync(sourceMdPath, raw, 'utf-8');
  console.log(`  COPIED: source.md`);

  // Copy preview image
  const preview = findPreviewImage(dir);
  if (preview) {
    const ext = extname(preview.name);
    const destImagePath = join(targetDir, `example${ext}`);
    cpSync(preview.path, destImagePath);
    // Update preview field
    template.preview.image = `example${ext}`;
    // Re-write JSON with correct preview image name
    writeFileSync(jsonPath, JSON.stringify(template, null, 2) + '\n', 'utf-8');
    console.log(`  COPIED: ${preview.name} -> example${ext}`);
  } else {
    console.log(`  WARN: no preview image found in ${dir}`);
  }

  return true;
}

// ---------------------------------------------------------------------------
// Parse simple bullet list sections
// ---------------------------------------------------------------------------
function parseListSection(content) {
  if (!content) return [];
  const items = [];
  for (const line of content.split('\n')) {
    const match = line.trim().match(/^[-*]\s+(.+)/);
    if (match) items.push(match[1].trim());
  }
  return items;
}

// ---------------------------------------------------------------------------
// Scan inbox directories
// ---------------------------------------------------------------------------
function scanInbox() {
  const results = [];

  for (const model of ['image2', 'seedance2']) {
    const modelDir = join(INBOX_DIR, model);
    if (!existsSync(modelDir)) continue;

    const entries = readdirSync(modelDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const slugDir = join(modelDir, entry.name);
      const mdPath = join(slugDir, 'prompt.md');
      if (existsSync(mdPath)) {
        results.push(mdPath);
      }
    }
  }

  return results;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
console.log('Importing prompts...\n');
const prompts = scanInbox();

if (prompts.length === 0) {
  console.log('No prompt.md files found in inbox/');
  process.exit(0);
}

let imported = 0;
let skipped = 0;

for (const mdPath of prompts) {
  console.log(`Processing: ${mdPath}`);
  const ok = importPrompt(mdPath);
  if (ok) imported++;
  else skipped++;
  console.log('');
}

console.log(`Done. Imported: ${imported}, Skipped: ${skipped}`);
