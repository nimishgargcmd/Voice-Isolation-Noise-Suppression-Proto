# FY27 Theme Tokens (Light / Dark)

The semantic color tokens the redesign consumes. Defined in
[`src/styles/theme.css`](../../src/styles/theme.css) as `--fy27-*` CSS variables in
both `:root` (Light) and `.dark` (Dark), and surfaced as `fy27-*` Tailwind utilities
via the `@theme inline` block. **Redesign components must use these — never raw hex.**

Values are sourced from the Teams 2 Mobile foundations (see
[foundations.md](foundations.md)). Figma sources:
- **Teams 2 Mobile Variables** — `ywXpf7pgnAd8u6qfot0ZaU` · `12609-16463` (canonical semantic tokens)
- **Mobile Meetings POR (updated 2026)** — `zTUDsyC2gVxRBk3qgyqCiE` · `1030-10444` (where the redesign applies them)

> Grow on demand: when a component needs a token not listed here, add it to **both**
> `:root` and `.dark` in `theme.css` (+ an `@theme inline` alias) and record it below.

| Semantic token | CSS var | Tailwind utility | Light | Dark | Foundations source |
|---|---|---|---|---|---|
| Brand primary | `--fy27-brand-primary` | `*-fy27-brand` | `#5B5FC7` | `#7F85F5` | Brand accent primary (also UFD outline button border) |
| Brand accent secondary | `--fy27-brand-accent-secondary` | `*-fy27-brand-accent-secondary` | `#AAB1FA` | `#333357` | Brand accent secondary (tint 30) — audio-only stage gradient |
| Accent tertiary | `--fy27-accent-tertiary` | `*-fy27-accent-tertiary` | `#E8EBFA` | `#2F2F4A` | Brand accent tertiary (tint 50 / tint 40) — AIL selected-pill bg |
| Surface raised-fill (alpha) | `--fy27-surface-raisedfill-alpha` | `*-fy27-surface-raisedfill-alpha` | `rgba(235,235,235,.95)` | `rgba(41,41,41,.95)` | face.raisedfill @ .95 — UFD card fill |
| Surface dominant | `--fy27-surface-dominant` | `*-fy27-surface` | `#FFFFFF` | `#000000` | face.dominant |
| Surface subtlest | `--fy27-surface-subtlest` | `*-fy27-surface-subtlest` | `#F1F1F1` | `#212121` | face.subtlest |
| Surface raised fill | `--fy27-surface-raised` | `*-fy27-surface-raised` | `#F1F1F1` | `#292929` | face.raisedfill |
| Surface border | `--fy27-surface-border` | `*-fy27-border` | `#C8C8C8` | `#404040` | face.border |
| Text dominant | `--fy27-text-dominant` | `*-fy27-text-dominant` | `#000000` | `#FFFFFF` | text.dominant |
| Text primary | `--fy27-text-primary` | `*-fy27-text-primary` | `#212121` | `#E1E1E1` | text.primary |
| Text secondary | `--fy27-text-secondary` | `*-fy27-text-secondary` | `#616161` | `#919191` | text.secondary |
| Text on accent | `--fy27-text-on-accent` | `*-fy27-text-on-accent` | `#FFFFFF` | `#000000` | text.onaccent |
| Text danger | `--fy27-text-danger` | `*-fy27-text-danger` | `#D92C2C` | `#DC5E62` | text.danger |
| Text global | `--fy27-text-global` | `*-fy27-text-global` | `#FFFFFF` | `#FFFFFF` | text on global (fixed white, over media/scrim) |
| Icon primary | `--fy27-icon-primary` | `*-fy27-icon-primary` | `#212121` | `#E1E1E1` | icon.primary |
| Icon secondary | `--fy27-icon-secondary` | `*-fy27-icon-secondary` | `#919191` | `#6E6E6E` | icon.secondary |
| Icon dominant | `--fy27-icon-dominant` | `*-fy27-icon-dominant` | `#000000` | `#FFFFFF` | icon.dominant (highest-contrast on surface) |
| Icon global | `--fy27-icon-global` | `*-fy27-icon-global` | `#FFFFFF` | `#FFFFFF` | icon on global (fixed white, over media/scrim) |
| Icon success | `--fy27-icon-success` | `*-fy27-icon-success` | `#0F7A0B` | `#0EB244` | icon.success (mic-on / unmuted) |
| Icon danger | `--fy27-icon-danger` | `*-fy27-icon-danger` | `#D92C2C` | `#DC5E62` | icon.danger (mic-off / muted, scam warning) |
| Icon interactive | `--fy27-icon-interactive` | `*-fy27-icon-interactive` | `#5B5FC7` | `#7F85F5` | icon.interactive (U-bar Chat/More selected) |
| Icon mention | `--fy27-icon-mention` | `*-fy27-icon-mention` | `#CC4A31` | `#CC4A31` | icon.mention (end-call / recording) |
| Icon disabled | `--fy27-icon-disabled` | `*-fy27-icon-disabled` | `#ACACAC` | `#404040` | icon.disabled (inactive send, disabled video) |
| Icon on accent | `--fy27-icon-on-accent` | `*-fy27-icon-on-accent` | `#FFFFFF` | `#000000` | icon.onaccent (glyph over the brand fill) |
| Surface chat incoming | `--fy27-surface-chat-incoming` | `*-fy27-surface-chat-incoming` | `#E8E8E8` | `#2E2E2E` | incoming chat bubble / Copilot prompt bubble + chips |
| Presence online | `--fy27-presence-online` | `*-fy27-presence-online` | `#6BB700` | `#92C353` | presence.online |
| Presence away | `--fy27-presence-away` | `*-fy27-presence-away` | `#FFAA44` | `#F8D22A` | presence.away |
| Presence DND | `--fy27-presence-dnd` | `*-fy27-presence-dnd` | `#C50F1F` | `#D74553` | presence.doNotDisturb |
| Surface card | `--fy27-surface-card` | `*-fy27-surface-card` | `#F8F8F8` | `#1C1C1E` | iOS grouped-list card |
| Surface subtle base | `--fy27-surface-subtle-base` | `*-fy27-surface-subtle-base` | `#F8F8F8` | `#141414` | face.subtlebase (video-off self-tile) |
| Divider | `--fy27-divider` | `*-fy27-divider` | `#E6E6E6` | `#2A2A2A` | hairline separators |
| Switch off track | `--fy27-switch-off` | `*-fy27-switch-off` | `#D1D1D6` | `#39393D` | toggle off state |
| End-call button | `--fy27-end-call` | `*-fy27-end-call` | `#8D2337` | `#8D2337` | Component tokens/Calling-Messaging/End Call btn |

`*` = `bg-` / `text-` / `border-`. For SVG icons, reference the raw var in `fill`/`stroke`,
e.g. `stroke="var(--fy27-icon-primary)"`.

## Additional semantic tokens

These ship in `theme.css` and are consumed by the redesign but were added after the
table above. Same Light/Dark + `@theme inline` contract.

| Semantic token | CSS var | Tailwind utility | Light | Dark | Usage |
|---|---|---|---|---|---|
| Surface base | `--fy27-surface-base` | `*-fy27-surface-base` | `#F5F5F5` | `#1A1A1A` | multitasking panel scroll window |
| Surface tertiary | `--fy27-surface-tertiary` | `*-fy27-surface-tertiary` | `#FFFFFF` | `#141414` | panel header / composer region |
| Surface accent primary | `--fy27-surface-accent-primary` | `*-fy27-surface-accent-primary` | `#5B5FC7` | `#7F85F5` | brand-filled surfaces |
| Surface danger | `--fy27-surface-danger` | `*-fy27-surface-danger` | `#F9D9D9` | `#250909` | danger-tinted surface |
| Foreground stroke | `--fy27-fg-stroke` | `*-fy27-fg-stroke` | `#D1D1D1` | `#4D4D4D` | foreground hairline / presence ring |
| Text interactive | `--fy27-text-interactive` | `*-fy27-text-interactive` | `#5B5FC7` | `#7F85F5` | interactive labels (nav-bar R.Label enabled) |
| Text disabled | `--fy27-text-disabled` | `*-fy27-text-disabled` | `#ACACAC` | `#616161` | disabled label (R.Label disabled) |
| Recording | `--fy27-recording` | `*-fy27-recording` | `#CC4A31` | `#CC4A31` | recording indicator (header + dock) |
| Raised hands | `--fy27-raised-hands` | `*-fy27-raised-hands` | `#F2C811` | `#F2C811` | raised-hand badge accent |

### Gallery tile

| Semantic token | CSS var | Tailwind utility | Light | Dark | Usage |
|---|---|---|---|---|---|
| Tile surface | `--fy27-tile-surface` | `*-fy27-tile-surface` | `#F5F5F5` | `#1C1C1E` | gallery tile fill (video off) |
| Tile border | `--fy27-tile-border` | `*-fy27-tile-border` | `#D1D1D1` | `#3A3A3C` | gallery tile outer border |
| Tile inner border | `--fy27-tile-inner-border` | `*-fy27-tile-inner-border` | `#FFFFFF` | `rgba(255,255,255,.1)` | tile inner highlight border |
| Nametag bg | `--fy27-nametag-bg` | `*-fy27-nametag-bg` | `rgba(235,235,235,.95)` | `rgba(0,0,0,.6)` | tile nametag pill background |
| Nametag fg | `--fy27-nametag-fg` | `*-fy27-nametag-fg` | `#212121` | `#FFFFFF` | tile nametag text |

### AIL (Additional Info Layer) — segmented timer

| Semantic token | CSS var | Tailwind utility | Light | Dark | Usage |
|---|---|---|---|---|---|
| AIL surface | `--fy27-ail-surface` | `*-fy27-ail-surface` | `var(--fy27-accent-tertiary)` | `#1C1C1E` | AIL pill surface |
| AIL fill | `--fy27-ail-fill` | `*-fy27-ail-fill` | `#5B5FC7` | `#7F85F5` | timer progress fill (brand bar) |
| AIL track | `--fy27-ail-track` | `*-fy27-ail-track` | `#ACACAC` | `#404040` | timer empty track |
| AIL border | `--fy27-ail-border` | `*-fy27-ail-border` | `#E1E1E1` | `#292929` | AIL pill border |
| AIL icon | `--fy27-ail-icon` | `*-fy27-ail-icon` | `#212121` | `#E1E1E1` | pause glyph over the grey track |
| AIL on-accent | `--fy27-ail-on-accent` | `*-fy27-ail-on-accent` | `#FFFFFF` | `#000000` | pause glyph over the purple bar |
| AIL mention | `--fy27-ail-mention` | `*-fy27-ail-mention` | `#CC4A31` | `#CC4A31` | recording/mention accent in AIL |
| AIL warning | `--fy27-ail-warning` | `*-fy27-ail-warning` | `#835C00` | `#FFB900` | warning accent in AIL |

## Usage rules
- Light/Dark flips automatically via the `.dark` class on `<html>` (ThemeProvider). A
  component built with these tokens is correct in both modes with no extra work.
- Replaces the three legacy patterns (semantic shadcn vars / hardcoded hex / local THEME
  objects) for **new** redesign components.
- WCAG: pairings verified AA where used in the profile drawer/switcher; re-check contrast
  for any new pairing (esp. `text-secondary` on raised/subtle surfaces).
