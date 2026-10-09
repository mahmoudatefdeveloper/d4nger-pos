## Publish on GitHub Pages

1. Put the *contents* of this folder directly in your `d4nger-pos` repository root (including `index.html` and `docs/`).
2. Commit and push to `main`.
3. In repository Settings → Pages, use *Deploy from a branch*, `main`, `/(root)`.
4. Your address will be `https://USERNAME.github.io/d4nger-pos/`.

## Files

- `index.html`: standalone, accessible, pre-rendered bilingual showcase with all 19 product screens embedded.
- `docs/`: original Arabic/English Master Roadmaps, PDF, presentation and feature-evidence matrix (unchanged).
- `source/`: original editable CSS, JavaScript and config, retained as a reference. **Editing these source files does not automatically rebuild `index.html`.** The public page is already assembled.
- `assets/screens/`: optional local copies of the real screenshot files, retained for future editing; they are not required to display the website.
- `.nojekyll`: GitHub Pages configuration.

## Important

This is a documentation/portfolio showcase, not a deployable POS app. Windows installer and physical printer acceptance must be checked separately as detailed in the roadmap. This package contains no application database, Windows Setup.exe or production secrets.
