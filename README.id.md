<div align="center">

# Image2 & Seedance 2 Prompt Cookbook

*Pustaka template prompt untuk generasi gambar Image2 dan generasi video Seedance 2.*

[English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Bahasa Indonesia](README.id.md)

![Image2](https://img.shields.io/badge/Image2-Generasi%20Gambar-blue?style=flat-square)
![Seedance 2](https://img.shields.io/badge/Seedance%202-Generasi%20Video-purple?style=flat-square)
![JSON](https://img.shields.io/badge/Format-JSON-lightgrey?style=flat-square)
[![License](https://img.shields.io/badge/Lisensi-MIT-green?style=flat-square)](LICENSE)

</div>

---

## Gambaran

**Image2 & Seedance 2 Prompt Cookbook** adalah koleksi template prompt yang dikurasi untuk generasi gambar dan video berbasis AI. Proyek ini berfokus pada pola prompt yang dapat digunakan kembali dan terstruktur dengan baik — bukan gaya visual.

Proyek ini menyediakan:
- Format `prompt.json` standar untuk menyimpan template prompt
- Dukungan prompt multibahasa (Mandarin dan Inggris)
- Sistem variabel terstruktur untuk kustomisasi prompt yang mudah
- Contoh kasus yang mendemonstrasikan setiap prompt dalam aksi
- Pipeline impor otomatis untuk pengiriman prompt baru
- Galeri prompt yang dibuat otomatis di semua file README

## Model yang Didukung

| Model | Tipe | Deskripsi |
| --- | --- | --- |
| **Image2** | Generasi Gambar | Generasi gambar diam berkualitas tinggi |
| **Seedance 2** | Generasi Video | Generasi klip video berbasis AI |

## Struktur Direktori

```
.
├── README.md                     # Bahasa Inggris
├── README.zh-CN.md               # Mandarin Sederhana
├── README.zh-TW.md               # Mandarin Tradisional
├── README.ja.md                  # Jepang
├── README.ko.md                  # Korea
├── README.id.md                  # File ini (Bahasa Indonesia)
├── LICENSE                       # Lisensi MIT
├── package.json                  # Skrip proyek
├── scripts/
│   ├── import-prompt.mjs         # Impor prompt dari inbox/
│   └── update-readme.mjs         # Regenerasi galeri README
├── .claude/
│   └── skills/
│       └── prompt-importer/
│           └── SKILL.md          # Definisi skill Claude Code
├── assets/                       # Aset bersama (logo, dll.)
├── inbox/                        # Tempat pengiriman prompt baru
│   ├── image2/
│   └── seedance2/
├── templates/                    # File template
│   ├── image2.prompt.template.json
│   ├── seedance2.prompt.template.json
│   └── prompt.md.template
├── image2/                       # Template prompt Image2
│   ├── _template/                # Referensi skema
│   ├── portrait/                 # Potret
│   ├── product/                  # Produk
│   ├── poster/                   # Poster
│   ├── character/                # Karakter
│   ├── architecture/             # Arsitektur
│   └── style/                    # Gaya
├── seedance2/                    # Template prompt Seedance 2
│   ├── _template/                # Referensi skema
│   ├── cinematic/                # Sinematik
│   ├── product-video/            # Video Produk
│   ├── camera-movement/          # Gerakan Kamera
│   ├── character-motion/         # Animasi Karakter
│   ├── image-to-video/           # Gambar ke Video
│   └── social-video/             # Video Sosial
└── docs/                         # Dokumentasi
    ├── prompt-json-spec.md       # Spesifikasi format JSON
    ├── image2-guide.md           # Panduan prompt Image2
    ├── seedance2-guide.md        # Panduan prompt Seedance 2
    └── contribution-guide.md     # Panduan kontribusi
```

## Format Prompt JSON

Setiap prompt disimpan sebagai file `prompt.json` dengan skema standar. Setiap file berisi:

- **Metadata**: nama, slug, model, versi, kategori
- **Konten multibahasa**: ringkasan, prompt, prompt negatif dalam Mandarin dan Inggris
- **Variabel terstruktur**: variabel template yang dapat diganti dengan label dan contoh
- **Contoh kasus**: prompt lengkap yang menunjukkan template dalam aksi
- **Parameter yang direkomendasikan**: rasio aspek, pengaturan kualitas, dan catatan

Lihat [docs/prompt-json-spec.md](docs/prompt-json-spec.md) untuk spesifikasi lengkap.

## Cara Menambahkan Prompt

1. Salin `templates/prompt.md.template` ke `inbox/<model>/<your-slug>/prompt.md`
2. Isi frontmatter dan semua bagian
3. Tambahkan gambar pratinjau (`example.jpg`) di direktori yang sama
4. Jalankan `npm run build`

```bash
# Impor normal (lewati direktori yang sudah ada)
npm run build

# Timpa paksa prompt yang sudah ada
npm run import -- --force
npm run update-readme
```

Lihat [docs/contribution-guide.md](docs/contribution-guide.md) untuk instruksi detail.

## Galeri Prompt

<!-- PROMPT_GALLERY_START -->
| Pratinjau | Model | Kategori | Prompt | Tag |
| --- | --- | --- | --- | --- |
| <img src="image2/portrait/casual-iphone-hotpot-cosplayer-snapshot/example.jpg" alt="Casual iPhone Hotpot Cosplayer Snapshot" width="80"> | image2 | portrait | [Casual iPhone Hotpot Cosplayer Snapshot](image2/portrait/casual-iphone-hotpot-cosplayer-snapshot/) | image2, portrait, cosplay, candid, iphone |
| <img src="image2/portrait/iphone-anime-convention-cosplay-snapshot/example.png" alt="iPhone Anime Convention Cosplay Snapshot" width="80"> | image2 | portrait | [iPhone Anime Convention Cosplay Snapshot](image2/portrait/iphone-anime-convention-cosplay-snapshot/) | image2, portrait, cosplay, anime-convention, iphone-snapshot |
| <img src="image2/portrait/iphone-mirror-selfie-cosplay-bedroom/example.png" alt="iPhone Mirror Selfie Cosplay Bedroom Portrait" width="80"> | image2 | portrait | [iPhone Mirror Selfie Cosplay Bedroom Portrait](image2/portrait/iphone-mirror-selfie-cosplay-bedroom/) | image2, portrait, cosplay, mirror-selfie, iphone-snapshot |
| <img src="image2/portrait/panoramic-character-concept-breakdown/example.jpg" alt="Panoramic Character Concept Breakdown Sheet" width="80"> | image2 | portrait | [Panoramic Character Concept Breakdown Sheet](image2/portrait/panoramic-character-concept-breakdown/) | image2, portrait, character-design, concept-art, anime |
| <img src="image2/portrait/soft-pink-boudoir-fashion-proposal/example.png" alt="Soft Pink Boudoir Fashion Proposal" width="80"> | image2 | portrait | [Soft Pink Boudoir Fashion Proposal](image2/portrait/soft-pink-boudoir-fashion-proposal/) | image2, portrait, fashion, infographic, chinese |
| <img src="image2/sticker/chaotic-mspaint-chat-sticker-pack/example.png" alt="Chaotic MS Paint Chat Sticker Pack" width="80"> | image2 | sticker | [Chaotic MS Paint Chat Sticker Pack](image2/sticker/chaotic-mspaint-chat-sticker-pack/) | image2, sticker, meme, expression-pack, ms-paint |
| <img src="image2/sticker/chibi-anime-chat-sticker-grid/example.png" alt="Chibi Anime Chat Sticker Grid" width="80"> | image2 | sticker | [Chibi Anime Chat Sticker Grid](image2/sticker/chibi-anime-chat-sticker-grid/) | image2, sticker, meme, chibi, anime |
<!-- PROMPT_GALLERY_END -->

## Kontribusi

Kontribusi sangat diterima! Silakan lihat [docs/contribution-guide.md](docs/contribution-guide.md) untuk alur kerja kontribusi lengkap.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## Penyangkalan

Proyek ini adalah upaya komunitas independen. Tidak berafiliasi dengan atau didukung oleh penyedia model AI mana pun. Semua template prompt adalah karya asli yang dikontribusikan oleh komunitas. Proyek ini tidak mendistribusikan gambar yang dihasilkan atau bobot model proprietary.
