# Site fix — 2026-10-09

The previous `index.html` was essentially an empty `<div id="app"></div>` and required separate `site.js`, `style.css` and image files. Opening the HTML without its sibling files could give a blank/broken page. The new `index.html` is a full pre-rendered document with embedded CSS, JS, SVG favicon and all 19 real images. It works as a single file even if copied outside the project folder. The optional documentation download links still resolve to `docs/` in the repository package.

The UI was preserved: RTL/LTR, 19-image gallery, filters, zoom/lightbox, mobile navigation, and Portfolio link. A keyboard Escape close behavior was added to the mobile navigation. The original Master Roadmap and presentations were copied unchanged.
