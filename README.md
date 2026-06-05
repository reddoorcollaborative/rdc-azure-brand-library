# RDC Azure Brand Library

A visual brand reference for Red Door Collaborative team members working with the Microsoft Azure brand.

**Live site:** https://reddoorcollaborative.github.io/rdc-azure-brand-library/

Covers: design principles, logo usage, color palette, typography, photography guidelines, 3D shapes, wireframes, holding shapes, textures, layout templates, motion principles, and icon gallery.

Source: Microsoft Azure Visual Brand Expression, April 2026.

---

## CSS architecture

This library is built on the [RDC Foundations Library](https://reddoorcollaborative.github.io/rdc-foundations-library/) using a three-layer stack:

```
rdc.css       ← RDC base: reset, tokens, standard components (CDN)
azure.css     ← Azure token overrides: maps RDC CSS properties to Azure brand values
style.css     ← Azure-specific components: swatches, type specimens, nav, hero, etc.
```

Any `rdc.css` component (`.btn`, `.doc-card`, `.badge`, `.alert`, etc.) used in an Azure page will automatically render in Azure brand colors via the token overrides in `azure.css`.

## Azure token overrides (`azure.css`)

| RDC token | Azure value | Role |
|-----------|-------------|------|
| `--coral` | `#0078d4` | Azure Blue — primary CTAs and links |
| `--squid` | `#0d0061` | Azure Deep Navy — dark surfaces |
| `--wine` | `#5d52ec` | Azure Indigo — secondary accent |
| `--mist` | `#aac0fc` | Azure Lavender — soft accent |
| `--font-sans` | Segoe UI | Azure typeface |

## File structure

```
rdc-azure-brand-library/
├── index.html      ← Page shell: nav, hero, footer; fetches part1–4 at runtime
├── azure.css       ← RDC token overrides for Azure brand
├── style.css       ← Azure-specific component library
├── part1.html      ← Quick start, design principles, logo, color
├── part2.html      ← Typography, photography, 3D shapes, wireframes
├── part3.html      ← Holding shapes, textures, layouts, motion
├── part4.html      ← Icon gallery, resources
├── copy.js         ← Clipboard copy for swatches and code blocks
├── snippets.js     ← Code snippet content
└── script.js       ← Scroll-spy nav highlighting
```
