# inbox

Drop your prompt submissions here.

## Directory structure

```
inbox/
├── image2/
│   └── <your-prompt-slug>/
│       ├── prompt.md
│       └── example.jpg (or .png, preview.jpg, preview.png)
└── seedance2/
    └── <your-prompt-slug>/
        ├── prompt.md
        └── example.jpg (or .png, preview.jpg, preview.png)
```

## How to submit a prompt

1. Create a subdirectory under `inbox/image2/` or `inbox/seedance2/` with your prompt slug as the directory name.
2. Write a `prompt.md` file following the template at `templates/prompt.md.template`.
3. Add a preview image (`example.jpg`, `example.png`, `preview.jpg`, or `preview.png`).
4. Run `npm run build` to import the prompt into the official directory structure and update all README files.

See `docs/contribution-guide.md` for detailed instructions.
