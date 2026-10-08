# drockstudio.com

Static website for D'Rock Studio. Plain HTML + CSS + a few lines of JS. No build step.

## Files

- `index.html`: the whole page
- `styles.css`: styles and colour palette (CSS variables at the top)
- `script.js`: shows a placeholder box when an image is missing, sets the footer year
- `favicon.svg`: placeholder favicon
- `assets/`: images
- `CNAME`: custom domain for GitHub Pages (must contain exactly `drockstudio.com`)

## Replacing images

Drop your own files into `assets/` using the same names. Nothing else needs to change.

| File | Used for | Suggested size |
|---|---|---|
| `assets/hero.jpg` | Hero background | 2000 x 1125 (16:9) |
| `assets/jepret-1.jpg` ... `jepret-4.jpg` | Jepret screenshot gallery | 1600 x 900 (16:9) |
| `assets/og.jpg` | Social share preview (Open Graph) | 1200 x 630 |
| `assets/logo.png` | Logo next to the studio name, and Apple touch icon | 512 x 512, square |
| `favicon.svg` | Browser tab icon | square SVG |

If an image is missing, the page shows a neutral striped box labelled with the file name (the logo is simply hidden). Keep JPGs under ~300 KB so the page stays fast.

To use a different file name or format, update the matching `src` in `index.html` (and the `og:image` meta tag for the share image). If you change what a screenshot shows, update its `alt` text too.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Redeploy

GitHub Pages serves the `main` branch root. To publish changes:

```sh
git add -A
git commit -m "Update site"
git push
```

The live site updates within a minute or two.
