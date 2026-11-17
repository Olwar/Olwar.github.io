# olliairola.com

The owner's personal site. Vite + React + TypeScript + Tailwind, one page (`src/components/MainPage.tsx` and the section components it imports), prerendered at build time (`scripts/prerender.mjs`).

- **A push to `master` deploys the live site** through the "Deploy to GitHub Pages" action (about 2 minutes). Check it with `gh run list --repo Olwar/Olwar.github.io`.
- Build locally with `npm run build`, then `npm run preview`.

## The style: 1-bit ink on paper

The whole site looks like a 1-bit print: the same two colours as the owner's three animated art GIFs (`public/art/ice`, `patient`, `workshop`). Every change must keep this look. The tokens and component classes are in `src/index.css`.

### Colours

- **Two colours only:** ink `#1A1A1A` (`foreground`) and paper `#FEFCF8` (`background`). All other shadcn tokens map to one of these two.
- No greys, no tints, no opacity, no gradients, no blur, no soft shadows. The only exception is the short fade of `.scroll-reveal`.
- Mid-tones are ordered-dither dot patterns, never greys: `--dither-12`, `--dither-25`, `--dither-50`, drawn at 1 CSS px per dot with `image-rendering: pixelated`.
- **Trap:** `tailwind.config.ts` still has the palette of an old design (`cream-100..300`, `charcoal-50..400`, `navy`, `bronze`, `shadow-soft/medium/elegant`, `animate-pulse/shimmer`). Do not use them. `style-upgrade.md` describes that old design too, not the current one.

### Shape

- Square corners everywhere (`--radius: 0`). Hard 1 px ink lines.
- Shadows are a 50% dot pattern offset 6 px down and right: `.dither-shadow`. Its `::after` has a paper background, so the snow does not show through.
- The masthead and the footer use a double rule: one 3 px line and one 1 px line, 3 px apart.

### Type

- **Playfair Display** (`font-serif`): headings, the hero line, captions (italic), large links.
- **Inter** (`font-sans`): body text.
- **JetBrains Mono** (`font-mono`): `.label`, the small uppercase tracked text for kickers, dates, nav links, button text, and "Fig. N".
- The fonts load from the `<link>` in `index.html`. Text in Finnish gets `lang="fi"`.

### Components and classes

| Use | Class or component |
| --- | --- |
| Page width and side padding | `.elegant-container` |
| Section heading: italic number, title, rule | `SectionHeading` in `src/components/print.tsx` |
| Numbered illustration ("Fig. N" plus italic caption) | `Plate` in `src/components/print.tsx` |
| Paper card with an ink border | `.ink-card` |
| Card that lifts on hover, with a link over the whole card | `.dither-shadow.lift` + `.stretched-link` (see `ProjectsSection.tsx`) |
| Primary and secondary button | `.ink-button`, `.ink-button.ink-button-outline` |
| Text link | `.ink-underline` |
| Ink highlight behind a short label | `.hl` |
| Dotted rule | `.dot-rule` |
| Tape on the portrait | `.dither-tape` |
| Section that appears on scroll | `.scroll-reveal` (the observer is in `MainPage.tsx`) |

### Interaction

- Hover inverts: ink background, paper text. Do not use colour changes, underlines that fade, or scale effects.
- Focus: a 2 px ink outline with a 3 px offset (`:focus-visible` in `index.css`). Cards show it with `:has(a:focus-visible)`.
- Touch targets are at least 44 px high (buttons 48 px).

### Art and logos

- **Show 1-bit art at exactly its own pixel size** with `.pixelated` (`image-rendering: pixelated`), so one dot is one CSS pixel. Never scale it by a fraction and never rotate it: both make greys.
- Sizes: plates 360 px (`public/art/*.gif`, stills in `*.png`), portrait 314 px, project logos 56 px (`public/art/logos/`), media logos 48 px (`public/art/media/`). Logos use `box-content` plus a 1 px ink border.
- Narrow screens: below 440 px a plate is a full-width band (no side borders or shadow). Below 360 px it is 240 px on 3x screens (exactly 2 device px per dot) and smooth only on lower-density screens (`.art-fluid`, `.art-fluid-portrait`).
- **Make new art or logos with `scripts/dither.sh`** (`<in> <out.png> <width> [height] [pre-filters] [mode]`). It writes only the two exact colours.
  - Photos and drawings: the default `dither` mode.
  - Logos and lettering: `threshold` mode. Thin lines need `erosion,` in the pre-filters; tight bold text needs `dilation,`.
  - A logo on a coloured background: first make the background transparent in a separate ffmpeg pass (`-vf colorkey=0xRRGGBB:0.18:0.05` to a PNG), then run `dither.sh` on that PNG. Transparent areas become paper. A `colorkey` in the pre-filters does nothing, because they run after the image is flattened to grey.
  - Art drawn white on black does not work inverted.
- Check a new image has exactly 2 colours before you commit it.

### Motion

- The art GIFs play at 12 fps. **Readers who ask for reduced motion get stills** (the `<picture>` source in `Plate`) and no snow.
- `src/components/Snow.tsx` draws ink snow down the whole page, behind everything (`#top` is `relative isolate`, the canvas is fixed at `-z-10`).
  - 12 fps, 2 or 3 px a frame, like the snow in Fig. 1. Flakes are never drawn over a line of text.
  - The canvas is CSS px with `pixelated` at whole pixel ratios, and screen px at fractional ratios (2.625x), so it never makes greys.
  - Cards and plates hide the snow with their paper. A new element that must hide it needs a paper background.

### Owner decisions (do not undo)

- **No Pause or Play buttons** on the art or the snow, although this misses WCAG 2.2.2. Reduced motion is the way to stop motion.
- No "Helsinki, Finland" label at the top of the masthead.
- No "I take on software projects..." line in the hero.

### Layout rules

- On phones, the DOM order must be the visual order. Do not use CSS `order`; place items with grid areas or row and column starts.
- Grids need `grid-cols-1` (or `minmax(0,1fr)` tracks), so 360 px art cannot widen a track.
- `LandingPage.tsx`, `Model3D.tsx`, `ServicesSection.tsx` and `src/lib/animation.tsx` are old, not in use, and in the old style. Do not copy from them.

## Checks after every change

- Screenshot the page at 320, 360, 375, 390, 430, 768, 1024 and 1440 px (3x below 768, 2x from 768). Look for overflow past the screen edge, small touch targets, and broken art.
- Check with reduced motion on: art shows stills, no snow.
- Count the colours in screenshots of the art and the snow: only ink and paper.
- Playwright works with `chromium.launch({ channel: 'chrome' })`. Full-page screenshots over about 16,000 device px repeat content, so capture in 1500 px clips.
