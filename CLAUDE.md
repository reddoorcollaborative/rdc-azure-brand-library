# CLAUDE.md — RDC Azure Brand Library

This file is loaded into Claude's context whenever a session involves this repository. Read it before making any changes.

## What this repo is

A visual brand reference for Red Door Collaborative team members working with the Microsoft Azure brand. Covers: design principles, logo usage, color palette, typography, photography guidelines, 3D shapes, wireframes, holding shapes, textures, layout templates, motion principles, and icon gallery.

**Live site:** https://reddoorcollaborative.github.io/rdc-azure-brand-library/

## Architecture

This library uses a three-layer CSS stack:

```
rdc.css (RDC Foundations CDN)   ← base reset, tokens, standard components
    ↓
azure.css (this repo)            ← maps RDC CSS tokens to Azure brand values
    ↓
style.css (this repo)            ← Azure-specific components and layout
```

**Load order matters.** `rdc.css` establishes the base; `azure.css` overrides the CSS custom properties; `style.css` provides Azure-specific components and wins on any shared class names (`.card`, `.divider`, etc.).

This means any `rdc.css` component added to an Azure page (`.btn`, `.doc-card`, `.badge`, `.alert`, `.metric-card`) will automatically render in Azure brand colors.

## CSS token mapping (azure.css)

| RDC token | Azure value | Azure role |
|-----------|-------------|------------|
| `--coral` | `#0078d4` | Azure Blue — primary actions, links |
| `--squid` | `#0d0061` | Azure Deep Navy — dark surfaces |
| `--wine` | `#5d52ec` | Azure Indigo — secondary accent |
| `--mist` | `#aac0fc` | Azure Lavender — soft accent |
| `--page-bg` | `#f4f6f9` | Azure light background |
| `--font-sans` | Segoe UI stack | Azure typeface |

## Page structure

`index.html` is a single-page shell that fetches and injects four content fragments at runtime:
- `part1.html` — Quick start + design principles + logo + color
- `part2.html` — Typography + photography + 3D shapes + wireframes
- `part3.html` — Holding shapes + textures + layout templates + motion
- `part4.html` — Icon gallery + resources

`copy.js` — clipboard copy buttons for color swatches and code
`snippets.js` — code snippet content
`script.js` — scroll-spy active nav link highlighting

## What's not yet implemented

- **Dark mode**: `rdc.js` (layout toggle) is intentionally not loaded because `style.css` has no dark mode overrides. To add dark mode: implement `[data-theme="dark"]` overrides in `style.css`, then add the FOUC prevention script to `<head>` and `rdc.js` before `</body>` in `index.html`.
- **Content fragments**: `part1–4.html` still use Azure-specific class names (`g2`, `g3`, `g4`, `card-ov`, etc.) rather than `rdc.css` class names. This is intentional — the Azure-specific component set is too specialized to replace with `rdc.css` components.

## Azure brand colors (style.css tokens)

These are Azure-specific tokens used by `style.css` — distinct from the RDC token overrides in `azure.css`:

| Token | Value | Name |
|-------|-------|------|
| `--az-blue` | `#0078d4` | Azure Blue |
| `--energy` | `#0000b3` | Energy Blue |
| `--deep` | `#000085` | Deep Blue |
| `--navy` | `#0d0061` | Navy |
| `--electric` | `#1a00e2` | Electric |
| `--indigo` | `#5d52ec` | Indigo |
| `--sky` | `#00ffff` | Sky |
| `--teal` | `#00bbc3` | Teal |

## Related repos

- `rdc-foundations-library` — RDC design foundation this repo inherits from
- `rdc-central` — Main RDC hub (links to this library)
