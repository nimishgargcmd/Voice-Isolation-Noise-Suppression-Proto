# Fluent Iconography — Catalog & Fetch Recipe

How the redesign sources glyph icons from the **Fluent iconography** Figma library and wraps
them as TS components. This is a structure/recipe doc — it does **not** enumerate the (thousands
of) icons. Pull a specific glyph on demand with the recipe below.

## Source

- **fileKey:** `43oQOCD2164ExeSf5ajmou` — a Fluent *core* file. The probed node
  `342916-3401` is actually the **Teams product logo** (`Size`/`Theme` variants), not a glyph.
  The glyph set we want is the **Fluent iconography** library hosted in this file
  (libraryName `Fluent iconography`).
- Don't assume `342916-3401` is the icon grid. Use search (below) to resolve a real glyph node.

## Naming scheme

Fluent icons are **component sets** named in descriptive Title Case, e.g.
`Mic Off`, `Video`, `People`, `Person Add`, `Call End`, `Chevron Left`, `Dismiss`,
`Hand Right` (raise-hand), `Share Screen Start`, `Settings`, `More Horizontal`.

The canonical Fluent System Icons code identifier (used in `@fluentui/react-icons`) collapses
this to `{Name}{Size}{Regular|Filled}` — e.g. `MicOff24Regular`, `Video28Filled`,
`CallEnd24Filled`, `ChevronLeft20Regular`. Useful as a lookup key, but in **this** project we
hand-wrap the SVG (see Project convention) rather than depend on the npm package.

## Sizes

Fluent ships discrete pixel sizes per glyph — **not every glyph has every size**. The standard
ramp is **16 / 20 / 24 / 28 / 32** (some glyphs add 12 / 48). 20 and 24 are the workhorses on
mobile. Each size is a distinct variant in the set's `Size` axis with its own optimized path —
**don't scale a 24 down to 16**; fetch the size you need.

## Regular vs Filled

Every Fluent glyph set carries a **style** axis: `Regular` (outline) and `Filled` (solid).
Convention in Teams: **Filled = active/selected/emphasis**, **Regular = default/inactive**.
e.g. a live-mic toolbar button uses `Mic Filled`; the muted/idle state uses `Mic Off Regular`.

## Fetch recipe (one glyph → TS component)

1. **Resolve the node.** `search_design_system({ query: "<glyph name>", fileKey:
   "43oQOCD2164ExeSf5ajmou", includeVariables:false, includeStyles:false })`. Match
   `libraryName: "Fluent iconography"`. Take the `component_set`, then pick the
   `Size=<n>, Style=<Regular|Filled>` child node id (via `get_metadata` on the set).
2. **Export the SVG.**
   `download_assets({ fileKey:"43oQOCD2164ExeSf5ajmou", nodeId:"<size/style child id>",
   defaultFormat:"svg" })`.
3. **Save** under `src/assets/figma/<area>/<icon-name>-<size>.svg`
   (`<area>` = meeting / chat / dock / nav …). Keep the raw SVG for reference.
4. **Wrap as a TS component** following the project convention below — extract the `<path d=…>`
   into the `svgPaths` import style, expose `size` + `color`, and hardcode the glyph's intrinsic
   `viewBox` (Fluent glyphs use a square viewBox equal to their pixel size, e.g. `0 0 24 24`).

## Project convention (MANDATORY) — SVG-as-TS-component

Icons are React components with `size`/`color` props, fed by an extracted path constant. Pattern
(see `src/app/components/MicOnIcon.tsx`, `MicOffIcon.tsx`, `VideoOnIcon.tsx`):

```tsx
import svgPaths from "@/imports/svg-<hash>";          // extracted <path d> constants

interface MicOnIconProps { size: number; color: string; }

export function MicOnIcon({ size, color }: MicOnIconProps) {
  return (
    <svg style={{ width: size, height: size, display: "block" }} fill="none"
         viewBox="0 0 9 12" preserveAspectRatio="xMidYMid meet">
      <path d={svgPaths.p1fdcf480} fill={color} />
    </svg>
  );
}
```

Notes on the convention:
- `color` is passed in (caller supplies a token, e.g. `var(--fy27-icon-primary)`), never baked in.
- `viewBox` is the glyph's intrinsic box; `size` drives both width & height (square).
- Some existing icons take `width`/`height` instead of `size` (`VideoOnIcon`) — prefer the single
  `size` prop for new icons.
- Path constants live in `src/imports/svg-<hash>.ts(x)` (Figma-generated; **do not modify**
  `src/imports/`). For new hand-fetched icons, you may inline the path or add a new `svg-*` file.

**Rule — never inline mic/video icons.** Use the canonical components everywhere:
`MicOnIcon` / `MicOffIcon` (bare glyph) and `MicOnIndicator` / `MicOffIndicator` (pill-background
variants); `VideoOnIcon` / `VideoOffIcon`. Inlining a mic/video SVG anywhere is a bug.

## Icons likely needed for the meeting redesign

Fetch these from Fluent iconography (Title-Case set name → Fluent code key). Sizes 20/24 unless noted.

| Purpose                  | Fluent set name        | Code key (size/style example) |
|--------------------------|------------------------|-------------------------------|
| Back / collapse panel    | `Chevron Left`         | `ChevronLeft20Regular`        |
| Forward / expand         | `Chevron Right`        | `ChevronRight20Regular`       |
| Close / dismiss          | `Dismiss`              | `Dismiss24Regular`            |
| Mic on (active)          | `Mic`                  | `Mic24Filled`                 |
| Mic off / muted          | `Mic Off`              | `MicOff24Regular`             |
| Camera on (active)       | `Video`                | `Video24Filled`               |
| Camera off               | `Video Off`            | `VideoOff24Regular`           |
| Overflow (toolbar)       | `More Horizontal`      | `MoreHorizontal24Regular`     |
| Overflow (list row)      | `More Vertical`        | `MoreVertical20Regular`       |
| Participants / roster    | `People`               | `People24Regular`             |
| Add participant          | `Person Add`           | `PersonAdd24Regular`          |
| Share screen             | `Share Screen Start`   | `ShareScreenStart24Regular`   |
| Raise hand               | `Hand Right`           | `HandRight24Regular`          |
| Chat                     | `Chat`                 | `Chat24Regular`               |
| Settings                 | `Settings`             | `Settings24Regular`           |
| Leave / end call         | `Call End`             | `CallEnd24Filled`             |

(`Call End` is conventionally rendered Filled on a red/danger surface; mic/video toggles flip
Regular↔Filled with state.)
