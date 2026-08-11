# Teams 2 iOS — Component Variant Catalog

Source: [Teams-2-iOS](https://www.figma.com/design/KeaubDwdX8LRyM5Yyjnk2Y/Teams-2-iOS) · fileKey `KeaubDwdX8LRyM5Yyjnk2Y`

Companion to `ios-components.md` (the page-level index). This file captures the **variant MODEL** of the components most relevant to a mobile meeting redesign — the variant axes, the anatomy (sub-parts), and the key tokens/sizes — so that, given a component name, **any** variant can be pulled on demand and coded.

## How to use this catalog

1. Find the component below → read its **variant axes** (`property: value | value | …`) and **anatomy**.
2. To get concrete code for one variant, run the **fetch recipe**: `get_design_context(fileKey, nodeId)` on the **component-set node** (or a named leaf variant). The component set's code returns a single component with a props-discriminated union covering all variants (see Chiclet — one `get_design_context` returned the whole variant switch). That is usually enough; only fetch a leaf when you want an isolated render.
3. Theme (Light/Dark) is **not** a variant property — it's resolved via CSS-variable token modes. One coded component covers both modes by swapping token values. Pressed / Disabled / Active are usually discrete **State variants** (separate nodes), not runtime opacity.
4. Tokens below are written as `token-name #fallback`. Wire to the project token system; don't hardcode hex.

### Shared foundation tokens (recurring)
- Brand: `brand/accent-primary #5b5fc7` · `brand/accent-secondary #aab1fa` · `text/interactive #5b5fc7` · `text/on-accent #ffffff`
- Text: `text/primary #212121` · `text/secondary #6e6e6e` · `text/disabled #acacac`
- Surface: `surface/primary` · `surface/dominant #ffffff` · `surface/tertiary #ffffff` · `surface/raised-fill #f1f1f1` · `surface/subtle-fill #f8f8f8` · `surface/border #e1e1e1`
- Divider: `divider/primary #e1e1e1` (1px / 0.5px)
- Radii: `corner-radius/minimal 4` · `corner-radius/default 8` · `corner-radius/strong 12` · rounded/pill `9999`
- Type (SF Pro Text): Body 1 17/22 −0.41 · Body 2 15/20 −0.08 · Body 3 13/18 −0.08 · Callout 2 **Bold** 15/20 −0.24 · Button 1 Medium 15/20 −0.24 · Button 2 Medium 13/18 −0.08 · Caption 1 12/16 0

---

## Navigation Bar — set `84477:120831`
Page `21432:4909`. (Component-set frame is `hidden=true` on canvas → `get_screenshot` returns 1×1; render a placed instance for a visual.)

- **Variant axes**
  - `Type: Left-iPhone | Left-iPad | Left-one or two lines | Center | Search only | Modal`
  - Implicit coverage: large-title (expanded) vs inline (collapsed) title; ±subtitle; ±segment/search row.
- **Anatomy** (leading → center → trailing)
  - Leading: back chevron **or** app/profile Avatar (Small 32dp) **or** none (iPhone/iPad differ only here)
  - Title block: large title (Title 1, Display/Bold) expanded; inline title collapsed; optional subtitle line
  - Trailing: 0–2 action icons (24px Fluent)
  - `Search only` swaps the title region for a 44px search field; `Modal` adds a Cancel/Done action pair
- **Key sizes/tokens**: bar height 48px (Left-*, Center) · 44px (Search only) · 74px (Modal); composed large-title+rows reach 88–134px. Title = Title 1 (Display/Bold). Action icon 24px, leading avatar 32dp. `surface/primary`, `text/primary`, bottom hairline `divider/primary`.
- **Fetch recipe**: `get_design_context(fileKey, "84477:120831")` for the set; leaves — Left-iPhone `84477:120873`, Left-iPad `84477:120882`, Left-one/two-lines `84477:120832`, Center `84477:120853`, Search only `84478:122553`, Modal `84478:122704`.

---

## List (family) — page `16505:211`
Five sibling component sets. Common defaults: 393px wide, surface `surface/secondary` (#fff), separators `divider/primary` 0.5px, text `text/primary` / `text/secondary`, SF Pro Text.

### List Item — One Line — set `84194:31835` (canonical `84194:38745`)
- **Axes**: `Lines: 1` · `Leading: icon(24px) | avatar | none` · `Trailing: chevron | toggle | badge | value | none` · `State: rest | pressed/selected`
- **Anatomy**: BG → Content[ Left( Icon 24px → Text Body 1 ) | Right( trailing control ) ] → bottom divider (inset 56px)
- **Sizes**: row **48px**; left pad 20px, right 12px, vertical 12px; toggle 51×31; separator inset 56px; font Body 1 17/22.

### List Item — Multiple Lines — set `84194:38763` (canonical `84194:42791`)
- **Axes**: `Lines: 2 | 3` · `Leading: chevron(accordion) | avatar(40dp) | icon | none` · `Trailing: chevron | toggle | button | value | none` · `State: rest | …`
- **Anatomy**: BG → Content[ Left( optional accordion Chevron 12/16 → Avatar 40dp → Text( title Body 1 + subtitle Body 2 + caption Body 3 ) ) | Right( Button / chevron / toggle ) ]
- **Sizes**: row **77px (2-line) / 84px (3-line)**; left pad 16px, right 12px, vertical 12px; avatar gap 16px; trailing Button 40px tall radius 8. Fonts: title Body 1, subtitle Body 2, caption Body 3, button label Button 1.

### Section Header — set `83947:128003` (canonical `84196:12888`)
- **Axes**: `Collapsible: chevron | none` · `Trailing: action icon(s) | none`
- **Anatomy**: Content[ Left( Chevron 12/16 → Title ) | Right( Icons 24px ) ]
- **Sizes**: height **48px**; left pad 4px, top 16px / bottom 8px (asymmetric); action icons 24px gap 8px; font **Callout 2 Bold** 15/20.

### Section Description — set `84198:14138` (canonical `84199:8441`)
- **Axes**: `Leading icon: yes | no`
- **Anatomy**: row[ Icon 16px → Text Body 3 ], gap 16px
- **Sizes**: top pad 24px / bottom 8px, horizontal 16px; font Body 3; color `text/secondary`.

### Grouped List — set `84199:21640` (canonical `84199:19923`, `84199:20226`)
- **Composition** (not a leaf — "detach as needed"): Section Header + a rounded **List Items** container stacking N One-Line cells. Container radius **12px** (`strong`), `overflow:clip`.
- **Anatomy**: Section Header (Callout 2 Bold) → List Items[ cell( Icon 24px → Text( title Body 1 [+ subtitle Body 2] ) → Right( value Body 2 + iOS Chevron Right 20px ) ) × N ]
- **Sizes**: cells follow One-Line metrics; group corners 12px; trailing chevron 20px.

- **Fetch recipe (all)**: `get_design_context(fileKey, <set-node>)` — One Line `84194:31835`, Multi Line `84194:38763`, Section Header `83947:128003`, Section description `84198:14138`, Grouped `84199:21640`. Or a canonical instance for a concrete variant.

---

## Button (family) — page `21431:4`
7 component sets (the visible "Button" frame is documentation; real sets are the `… (Teams 2 iOS)` frames).

| Sub-component | Set nodeId | Variant axes |
|---|---|---|
| **Button** (primary) | `83361:7413` | see below |
| Button Full-width | `83865:65664` | `Style` × `State` (no Size; 393×52) |
| FAB | `83363:8131` | `Rest: Rest \| Pressed` (56×56) |
| Circular Button | `83396:233079` | `Size: Large \| Small` × `State: Rest \| Pressed \| Disable` (52×52 / 24×24) |
| Jump Button | `83380:16685` | `Layout: Button \| Pill` |
| RSVP Button | `83747:36650` | `Status: Accepted \| Tentative \| Declined` (28h pills) |
| Split Button | `83447:13588` | `Style: Accent \| Outline accent` × `Size: Small \| Medium \| Large` × `State: Rest \| Pressed button \| Pressed split \| Disable` |

### Primary Button — set `83361:7413`
- **Axes**: `Style: Accent | Outline accent | Subtle` · `Size: Small | Medium | Large` · `State: Rest | Pressed | Disabled` · boolean slots `Left icon`, `Right icon`, `Show label` (icon swaps L/R-icon-16/20)
- **Anatomy**: outer container (fill/border + radius) → inner Content row (height, h-padding, gap) → leading Icon slot (opt) → Label (ellipsis) → trailing Icon slot (opt)
- **Sizes per Size axis**

  | Size | Height | H-pad | Gap | Radius | Icon box/shape | Font |
  |---|---|---|---|---|---|---|
  | Small | 28px | 8px | 4px | 4px (minimal) | 16/12 | Button 2 (13) |
  | Medium | 40px | 10px | 8px | 8px (default) | 20/16 | Button 1 (15) |
  | Large | 52px | 10px | 8px | 8px | 20/16 | Button 1 (15) |

- **Colors per Style**: Accent → fill `brand/accent-primary`, text `text/on-accent`, no border · Outline accent → transparent, border `brand/accent-secondary`, text `text/interactive` · Subtle → transparent, no border, text `text/interactive`. (Pressed/Disabled are discrete State variants.)
- **Fetch recipe**: `get_design_context(fileKey, "83361:7413")`; leaves — Accent/Small/Rest `83361:7439`, Outline/Medium/Rest `83361:7454`, Subtle/Medium/Rest `83431:108604`, Accent/Large/Rest `83361:7564`.

---

## Badge View — set `83392:62610`
Page `80851:53241`.
- **Axes** (5): `Badge type: Static | Interactive` · `Icon only: False | True` · `State: N/A | Rest | Active` (N/A=Static) · `Size: Default | Small` · `Left image: Avatar | Icon | None`
- **Anatomy**: container row (gap, padding, rounded, raised fill) → leading slot (Avatar **or** 16px icon **or** none) → Label (hidden when Icon only)
- **Key tokens/sizes**: fill `surface/raised-fill`; radius 4 (minimal); gap 4; padding 8/4 → height **28px** (Default) / 15px (Small); label Body 2; text `text/interactive` (Interactive); icon-only Default 32×32.
- **Fetch recipe**: `get_design_context(fileKey, "83392:62610")`; leaves — Interactive/Rest/Default/Avatar `83392:62630`, Static/Default/Icon `83432:123808`, Interactive/Active/Default/Avatar `90915:21344`.

---

## Avatar & Avatar Group — page `21432:5883`

### Avatar — set `83353:26404`
- **Axes**: `Type: Image | Team avatar | 3P app | Community | Anonymous | @mentions | Emoji | Icon | Icon Neutral | Icon brand | Overflow(+N)` · `Size: Micro 16 | Mini 20 | Small 32 | 36 | Medium 40 | Large 44 | Big 52 | Huge 64 | 72 | 96 | 120 | Xmassive 144` (not every Type ships every size)
- **Anatomy**: square box → masked image/initials/icon; shape ring = **circle** for people (Image/Anonymous/@mentions), **rounded-square** (radius 8) for entities (Team/3P/Community); optional presence badge slot (bottom-right); optional cutout slot
- **Tokens**: Size token == px box; entity corner radius 8; background `surface/dominant`
- **Fetch recipe**: `get_design_context(fileKey, "83353:26404")`; Medium-40 image `83353:26530`.

### Presence badge — set `83683:3819`
- **Axes**: `State: Available | Away | Busy | DND | Offline | OOF | Block | Unknown` · `Size: 14 | 16 | 18 | 24 | 35 | 45` · `Out of Office: True | False`
- **Anatomy**: circular white cutout ring (`icon/on-accent #fff`) + colored status glyph (dot / crescent Away / dash DND / square Block / hollow Offline / OOF outline)
- **Colors**: Available `presence/online #6bb700` · Away `presence/away #ffaa44` · DND/Busy `presence/dnd #c50f1f` · OOF `presence/oof #b4009e` · Offline/Invisible/Block `presence/invisible #8a8886`
- **Fetch recipe**: `get_design_context(fileKey, "83683:3819")`.

### Avatar Stack — set `83386:35539`  ·  Avatar Pile — set `83386:34716`
- **Axes**: Stack `Size: 16 | 20 | 32 | 40 | 52` · Pile `Size: 20 | 34 | 40 | 52`
- **Anatomy**: horizontal row of Avatar instances with negative overlap; each carries a surface-colored cutout ring so the front "bites" the one behind; trailing `Type=Overflow` avatar shows `+N`. Pile = denser overlap.
- **Fetch recipe**: `get_design_context(fileKey, "83386:35539")` / `"83386:34716"`.

### Avatar Carousel `83717:28366` (+ `.Carousel button` `83604:9130`) · Cutout `83683:12502` · Avatar Pie `95742:51011`
- Carousel: scrollable row of Avatars + 52×86 nav button cell (no size axis).
- Cutout: `Type: @mentions | Icon | Emoji` × `Size: 16 | 20 | 26 | 40 | 50` — knockout badge punched into avatar lower-right hosting a secondary glyph.
- Avatar Pie: `Layout: 2 avatars | 3 avatars` × Size 16…120 — one circle split into wedges.

---

## Segmented Control — set `84115:119464`
Page `80588:7878`. Top set switches `Type`; each Type is a nested set.
- **Axes**
  - `Type: Pill bar (84115:119463) | Pill tab (84115:119462) | Tab (84115:119461)`
  - Pill bar set `83478:37018`: `Semantic: Primary | Secondary`
  - Pill tab set `72552:289813`: `Segments: 2 | 3`
  - Tab set `83478:37254`: `Segments: 2 | 3` × `Style: Primary | Secondary`
  - Segment (Pill button `72552:289748`): `Semantic: Primary | Secondary` × `State: Rest | Active | Rest Pressed | Active Pressed | Rest Disabled | Active Disabled`
- **Anatomy**: track/container (375×44, pill types fully rounded) → segments (Pill button or Tab cell: label + optional leading icon) → selection indicator (pill types = filled rounded pill behind active, `brand/accent-primary` fill + white label; Tab = underline bar)
- **Key tokens/sizes**: height 44dp, default track 375; pill radius 9999, Tab container radius 8; active fill `brand/accent-primary`; resting label `text/primary`, active `text/on-accent`; font Button 1.
- **Fetch recipe**: `get_design_context(fileKey, "84115:119464")` for the type switcher; drill into Pill bar/Pill tab/Tab sets or a single segment (`72552:289784` Pill Primary/Active, `83478:34402` Tab Active/Primary).

---

## Divider — set `83987:258409` (line) · `83796:188604` (General/spacer)
Page `83796:188374`.
- **Axes**: `Orientation: Top | Center | Bottom | Right | Vertical center | Left` · `Inset: 0 | 16 | 56 | 72 | 84` (px leading inset; horizontal Top/Bottom only — Center=Inset 0). General Divider set: `Orientation: Horizontal | Vertical` (padded spacer wrapping the line; heights 12/16/28).
- **Anatomy**: single 1px line ("Color" layer) in a zero-padding frame, stretches full width; `Inset` shifts the leading edge to align under list-cell leading elements (16 = text-only, 56 = with icon, 72 = with avatar, 84 = larger).
- **Tokens/sizes**: thickness 1px; color `divider/primary #e1e1e1`; inset values 0/16/56/72/84.
- **Fetch recipe**: `get_design_context(fileKey, "83987:258604")` (Center/Inset 0); swap to any symbol in `83987:258409` (e.g. `83987:258414` Bottom/Inset 16).

---

## Sheet / Bottom Sheet — page `21432:5879` (Drawer)
**Menu Sheet** (page `96457:17359`) is a **WIP doc image only** — no buildable set; it enumerates usage scenarios (Default · with text · new-item `New` badge · long list · very long list (detents) · duplicates). Build a menu sheet from **Drawer Secondary** below.

### Drawer Dominant — set `84022:120725`
- **Axes**: `Device: iPhone | iPad` · `Orientation: Portrait | Landscape | Both` · `iPad Split view: False | True`
- **Anatomy** (full-height takeover, dims app behind): Overlay scrim `rgba(0,0,0,0.35)` → Drawer container `pt-80`, top corners radius 14 (inner 10) → Content `surface/primary #fff` → Home indicator 5×139 `icon/primary #212121` → modal Status bar. Frame 393×852 (iPhone portrait).

### Drawer Secondary — set `84232:229140` (+ iPad-anchored `84610:44450`) — the standard bottom sheet
- **Axes** (main): `Device: iPhone | iPad` · `Orientation: Portrait | Landscape` · `Positioning: Fixed | iPad Split view`. iPad-anchored adds `Arrow position: Bottom | Top | Left | Right | Split-view` × `Arrow alignment: Start | End | None`.
- **Anatomy**: Overlay scrim (toggle) → Drawer container top corners radius 14 → optional **Handle** (toggle): 20px region, grabber **36×4** radius 2, `icon/secondary #919191` on `surface/dominant` → Content `surface/dominant` `px-8` (option rows) → Home indicator 21px (toggle). Booleans: `handle`, `overlay`, `homeIndicator`.

### Drawer Quaternary — set `84212:135201` — the popover/callout
- **Axes**: `Arrow position: Bottom | Top | Left | Right | Modal` × `Arrow alignment: Start | Middle | End | None` (Modal ⇒ None; `.Canvas swap` content slot)
- **Anatomy**: Content `surface/tertiary #fff` radius 8 `overflow-clip` + Arrow tail (63×13) per axes + drop shadow `Shadows/Light/Shadow 64` (0 0 8 #00000033, 0 32 64 #0000003D). Default 393×218.

- **Shared sheet tokens**: sheet top radius 14 / popover 8; scrim `rgba(0,0,0,0.35)`; handle 36×4 r2 (region 20); home indicator 139×5 r100 `#212121`; surfaces `surface/primary|dominant|tertiary`; detents implied by long-list scenarios (no numeric token exposed).
- **Fetch recipe**: `get_design_context(fileKey, …)` — Dominant iPhone portrait `84017:113377`, Secondary iPhone fixed `84005:62719`, Quaternary bottom/start `84212:135202`.

---

## Toolbar

### Contextual Command Bar (keyboard-level) — set `84237:60454`
Page `21432:372`.
- **Axes**: `KB Dismiss: True | False` (trailing keyboard-dismiss button). Instance boolean `plusButton` (leading "+"). Child button set `.CCB Button` `84237:60429`: `State: Rest | Pressed | Active`.
- **Anatomy** (left → right): leading circular **+** 24px `brand/accent-primary` (supports `notificationDot` `icon/mention #cc4a31`) → **CCB button groups** (each a pill of 44px-tall buttons, `px-10` `gap-2` intra-group / `gap-16` inter-group, group radius 12, icons 24px; Rest bg `surface/subtle-fill #f8f8f8`, **Active** bg `component-tokens/contextual-command-bar/background-active #aab1fa`) → trailing **Keyboard dismiss** (48×56 cell, glyph 24) when `KB Dismiss=True`.
- **Key sizes**: bar bg `surface/primary`, `px-16 py-8`, item gap 16, bar height 60 (button row 44); widths 393 (Dismiss off) / 618 (Dismiss on / docs).
- **Fetch recipe**: `get_design_context(fileKey, "84237:60455")` (KB Dismiss True) / `"84237:60506"` (False).

### Bottom Toolbar / Tab Bar — page `21432:67208`
Two sets: **TFW Tab bar** `83942:13033` (Teams For Work) · **TFL Tab bar 2** `84536:21039` (Teams For Life). Icon sub-sets `.TFW` `83942:15600`, `.TFL` `83947:40608`.
- **Axes**: tab bar `Orientation: Portrait | Landscape` × `Device: iPhone | iPad | iPad 2/3&1/3 | iPad 1/2` (landscape iPad/iPhone = 80px-wide vertical rail; portrait iPhone = 393×83 horizontal). Tab icon `State: Rest | Active` × (TFW) `Stack: Vertical | Horizontal`. Badge counts + light/dark are properties on the icon/status children, not top-level axes; TFW vs TFL = icon-set distinction.
- **Fetch recipe**: `get_design_context(fileKey, "83942:13034")` (TFW iPhone portrait) / `"84536:21040"` (TFL).

---

## Chiclet — set `83310:17383`
Page `72568:298876` (the catalog's start node). Tappable entity in chats/posts/compose (links, files, apps, replies, live-meeting). One `get_design_context` on `83310:17383` returns the whole component with a props-discriminated `layout` union — that single call is the most efficient way to code any Chiclet variant.
- **Axes / props**: `layout: Reply | Forward | Primary | Primary Disable | Live meeting (Dominant) | Uploading | Recording` · `image: false | true` · booleans `leftIcon`, `rightActions`, `rButton`, `rIcon1`, `rIcon2`, `descriptionIcon`, `dismiss`, `onComposeBox`
- **Anatomy** (varies by layout):
  - Reply/Forward: quote bar (6px, `icon/disabled #acacac`) → Content( Header: author/timestamp Caption 1 `text/secondary` → body Body 1 ); Forward adds a forward-icon header; `image=true` adds a trailing 40px thumbnail
  - Primary / Primary Disable: leading icon (24px Fluent) → Text( Title Body 2 + Description Caption 1 [+ description icon] ) → Right Actions( optional Button + right icons ); Disable swaps text to `text/disabled`; `image=true` stacks a 120px cover image above with a top-right dismiss chip
  - Live meeting (Dominant): tinted inner container `component-tokens/chiclet/live-meeting-background #383966`, white text, accent CTA button
  - Uploading: circular progress ring + pause glyph + "Uploading X of Y MB" + cancel
  - Recording: accent 36px play button + scrubber/progress + timecode
- **Key tokens/sizes**: container radius 8; outer fill `surface/tertiary #fff` border `surface/border #e1e1e1`; inner container `surface/dominant` border `divider/primary`; Primary width ~185, Forward ~207, Recording ~297; drop shadow `Shadows/Light/Shadow 04` (0 0 2 #1F, 0 2 4 #24); right Button = outline `brand/accent-secondary`, label `text/interactive` Button 2.
- **Fetch recipe**: `get_design_context(fileKey, "83310:17383")` returns all layouts in one switch; leaves — Reply/no-img `83310:17384`, Forward/no-img `92493:919`, Reply/img `84270:11298`, Primary/no-img `83310:17495`, Primary Disable `84771:22107`, Primary/img `84267:1014`, Live meeting `84263:9937`, Uploading `84771:21576`, Recording `84771:21677`.
