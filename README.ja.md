<div align="center">

# Image2 & Seedance 2 プロンプトクックブック

*Image2 画像生成と Seedance 2 動画生成のためのプロンプトテンプレートライブラリ*

[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Bahasa Indonesia](README.id.md)

![Image2](https://img.shields.io/badge/Image2-画像生成-blue?style=flat-square)
![Seedance 2](https://img.shields.io/badge/Seedance%202-動画生成-purple?style=flat-square)
![JSON](https://img.shields.io/badge/形式-JSON-lightgrey?style=flat-square)
[![License](https://img.shields.io/badge/ライセンス-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 概要

**Image2 & Seedance 2 プロンプトクックブック** は、AI による画像および動画生成のための厳選されたプロンプトテンプレート集です。ビジュアルスタイルではなく、再利用可能で構造化されたプロンプトパターンに焦点を当てています。

本プロジェクトが提供するもの：
- プロンプトテンプレートを保存するための標準化された `prompt.json` 形式
- 中国語と英語の多言語プロンプトサポート
- 簡単にカスタマイズ可能な構造化変数システム
- 各プロンプトの使用例を示すサンプルケース
- 新しいプロンプト提出のための自動インポートパイプライン
- 全 README ファイルの自動生成プロンプトギャラリー

## 対応モデル

| モデル | タイプ | 説明 |
| --- | --- | --- |
| **Image2** | 画像生成 | 高品質な静止画生成 |
| **Seedance 2** | 動画生成 | AI 駆動の動画クリップ生成 |

## ディレクトリ構成

```
.
├── README.md                     # 英語
├── README.zh-CN.md               # 簡体字中国語
├── README.zh-TW.md               # 繁体字中国語
├── README.ja.md                  # 現在のファイル（日本語）
├── README.ko.md                  # 韓国語
├── README.id.md                  # インドネシア語
├── LICENSE                       # MIT ライセンス
├── package.json                  # プロジェクトスクリプト
├── scripts/
│   ├── import-prompt.mjs         # inbox/ からプロンプトをインポート
│   └── update-readme.mjs         # README ギャラリーを再生成
├── .claude/
│   └── skills/
│       └── prompt-importer/
│           └── SKILL.md          # Claude Code スキル定義
├── assets/                       # 共有アセット（ロゴ等）
├── inbox/                        # 新規プロンプト提出用
│   ├── image2/
│   └── seedance2/
├── templates/                    # テンプレートファイル
│   ├── image2.prompt.template.json
│   ├── seedance2.prompt.template.json
│   └── prompt.md.template
├── image2/                       # Image2 プロンプトテンプレート
│   ├── _template/                # スキーマリファレンス
│   ├── portrait/                 # ポートレート
│   ├── product/                  # 製品
│   ├── poster/                   # ポスター
│   ├── character/                # キャラクター
│   ├── architecture/             # 建築
│   └── style/                    # スタイル
├── seedance2/                    # Seedance 2 プロンプトテンプレート
│   ├── _template/                # スキーマリファレンス
│   ├── cinematic/                # シネマティック
│   ├── product-video/            # 製品動画
│   ├── camera-movement/          # カメラワーク
│   ├── character-motion/         # キャラクターアニメーション
│   ├── image-to-video/           # 画像から動画
│   └── social-video/             # ソーシャル動画
└── docs/                         # ドキュメント
    ├── prompt-json-spec.md       # JSON フォーマット仕様
    ├── image2-guide.md           # Image2 プロンプトガイド
    ├── seedance2-guide.md        # Seedance 2 プロンプトガイド
    └── contribution-guide.md     # コントリビューションガイド
```

## プロンプト JSON 形式

各プロンプトは標準化されたスキーマを持つ `prompt.json` ファイルとして保存されます。各ファイルには以下が含まれます：

- **メタデータ**：名前、スラッグ、モデル、バージョン、カテゴリ
- **多言語コンテンツ**：中国語・英語の概要、プロンプト、ネガティブプロンプト
- **構造化変数**：ラベルとサンプル付きの置換可能なテンプレート変数
- **サンプルケース**：テンプレートの実用例を示す完成プロンプト
- **推奨パラメータ**：アスペクト比、品質設定、注意事項

完全な仕様は [docs/prompt-json-spec.md](docs/prompt-json-spec.md) を参照してください。

## プロンプトの追加方法

1. `templates/prompt.md.template` を `inbox/<model>/<your-slug>/prompt.md` にコピー
2. フロントマターと全セクションを記入
3. 同じディレクトリにプレビュー画像（`example.jpg`）を配置
4. `npm run build` を実行

```bash
# 通常インポート（既存ディレクトリはスキップ）
npm run build

# 既存プロンプトを強制上書き
npm run import -- --force
npm run update-readme
```

詳細は [docs/contribution-guide.md](docs/contribution-guide.md) を参照してください。

## プロンプトギャラリー

<!-- PROMPT_GALLERY_START -->
| プレビュー | モデル | カテゴリ | プロンプト | タグ |
| --- | --- | --- | --- | --- |
| <img src="image2/portrait/soft-pink-boudoir-fashion-proposal/example.png" alt="Soft Pink Boudoir Fashion Proposal" width="80"> | image2 | portrait | [Soft Pink Boudoir Fashion Proposal](image2/portrait/soft-pink-boudoir-fashion-proposal/) | image2, portrait, fashion, infographic, chinese |
| <img src="image2/sticker/chaotic-mspaint-chat-sticker-pack/example.png" alt="Chaotic MS Paint Chat Sticker Pack" width="80"> | image2 | sticker | [Chaotic MS Paint Chat Sticker Pack](image2/sticker/chaotic-mspaint-chat-sticker-pack/) | image2, sticker, meme, expression-pack, ms-paint |
<!-- PROMPT_GALLERY_END -->

## コントリビューション

コントリビューションを歓迎します！完全なワークフローは [docs/contribution-guide.md](docs/contribution-guide.md) をご覧ください。

## ライセンス

本プロジェクトは [MIT License](LICENSE) の下でライセンスされています。

## 免責事項

本プロジェクトは独立したコミュニティ活動です。いかなる AI モデルプロバイダーとも提携または承認関係はありません。すべてのプロンプトテンプレートはコミュニティによって提供されたオリジナル作品です。本プロジェクトは生成画像や独自モデルの重みを配布しません。
