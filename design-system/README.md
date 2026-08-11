# FY27 Design-System Reference — Library Index

This is the **standing point of reference** for building redesign components. Before
building any component, consult the relevant library here. Use token/component names,
not raw values. Pull specifics from Figma **just-in-time** (recipe below) rather than
mirroring whole libraries.

## How to use the Figma source (MCP)

The Figma MCP reaches nodes **by file key + node id** (remote). Working tools:
`get_metadata` (structure), `get_design_context` (code + screenshot + variables),
`get_screenshot` (visual), `download_assets` (export SVG/PNG).
⚠️ `get_variable_defs` requires a live desktop selection — avoid it; read token values
from [teams-mobile/foundations.md](teams-mobile/foundations.md) +
[teams-mobile/fy27-tokens.md](teams-mobile/fy27-tokens.md) instead.

**Fetch recipe (when building a component that needs a specific asset):**
1. Identify the node (browse with `get_metadata` on the library file/node, or ask the user for a node link).
2. `get_design_context` for component code/specs, or `download_assets` with `defaultFormat:"svg"` for an icon, `"png"` for an avatar.
3. Save into `src/assets/figma/<area>/…` and wrap per the project convention (icons → TS component; avatars → `<img>`).

## Libraries

| Library | What it is | Figma source (fileKey · node) | Local reference |
|---|---|---|---|
| **Semantic tokens** | Color/type/space/radii/elevation, Light/Dark | `ywXpf7pgnAd8u6qfot0ZaU` · `12609-16463` (Teams 2 Mobile Variables) | [foundations.md](teams-mobile/foundations.md) |
| **FY27 theme tokens** | The `--fy27-*` Light/Dark tokens the redesign consumes | `zTUDsyC2gVxRBk3qgyqCiE` · `1030-10444` (Mobile Meetings POR) | [fy27-tokens.md](teams-mobile/fy27-tokens.md) |
| **Icons** | Fluent iconography (Title-Case sets, Size 16–32 × Regular/Filled) | `43oQOCD2164ExeSf5ajmou` (file) — ⚠️ node `342916-3401` is the Teams **logo**, not the glyph grid; resolve glyphs via `search_design_system` | [icons.md](teams-mobile/icons.md) |
| **Avatars** | Fluent avatars — CELA-approved name + image, for profile/lists/tiles | `KGP1cSTKB0NsKZeLhkdlJBXv` · `6265-9224` (Fluent avatars) | [avatars.md](teams-mobile/avatars.md) |
| **Teams iOS core components** | Nav bar, list items, buttons, badges, avatar, segmented, sheet, etc. (variant models) | `KeaubDwdX8LRyM5Yyjnk2Y` · `72568-298876` (Teams 2 iOS) | [ios-components-variants.md](teams-mobile/ios-components-variants.md) · [ios-components.md](teams-mobile/ios-components.md) |
| **Meeting components (current)** | Today's meeting UI — the baseline being redesigned (U-Bar, Meeting header, Participant-tile matrix, Self-tile, PiP, UFD, Notification Hub, Timer, Slideshow) | `zTUDsyC2gVxRBk3qgyqCiE` · `1030-10444` (Mobile Meetings POR) | — (fetch on demand) |

**Systemic overview (read this first):** [fy27-systemic-understanding.html](fy27-systemic-understanding.html) — current meeting system map, theme-awareness model, the current→FY27 evolution, and the edge-case-preservation checklist.

**Component library (reuse before building):** [components.md](components.md) — the living catalog of reusable redesign components (UBar, fluentIcons, versioning slots, AccountSheet, theme, …). Keep it updated.

## Conventions when building components
- **Colors:** consume `var(--fy27-*)` / `fy27-*` Tailwind utilities (see fy27-tokens.md). Never raw hex.
- **Icons:** wrap SVGs as small TS components (`size`/`color` props) — see the `MicOnIcon.tsx` pattern. Never inline mic/video icon SVGs.
- **Avatars:** `<img>` from `src/assets/figma/.../avatars/` (see avatars.md); Fluent faces, no baked-in presence dot.
- **Light/Dark:** every redesign component must be correct in both themes (theme toggle in the profile drawer).
- **Do not modify** `src/imports/` (Figma-generated).
