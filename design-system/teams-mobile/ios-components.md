# Teams 2 iOS — Component Library Index

Source: [Teams-2-iOS](https://www.figma.com/design/KeaubDwdX8LRyM5Yyjnk2Y/Teams-2-iOS)

This is an index of all available component pages. Detailed specs are created on-demand when a project needs a specific component.

## How to Use

1. Find the component you need below
2. Use `mcp__figma-remote__get_screenshot` with the file key and node ID to view it
3. Use `mcp__figma-remote__get_design_context` for extractable code/tokens
4. File key: `KeaubDwdX8LRyM5Yyjnk2Y` (unless noted otherwise)

## Components

| # | Component | Node ID | Description | Variants |
|---|-----------|---------|-------------|----------|
| 1 | **Shell + iOS Size Class** | `84278:26238` | App shell structure, size class breakpoints | iPhone/iPad layouts |
| 2 | **Alert Sheet** | `84374:41358` | Modal alert overlays | Light/Dark |
| 3 | **Avatar** | `21432:5883` | Avatar, Avatar Stack, Avatar Pile, Avatar Carousel, Cutout, Presence badge | Multiple sizes, group layouts |
| 4 | **App Tray** | `93592:9208` | Bottom app tray/dock | Light/Dark |
| 5 | **Badge View** | `80851:53241` | Static/interactive labels for ownership, privacy, channel details | Light/Dark, static/interactive |
| 6 | **Banner View** | `64933:233884` | Community banner (TFL component) | iOS/iPadOS |
| 7 | **Button** | `21431:4` | Button, FAB, Split Button, RSVP Button, Circular Button, Jump Button | 6 sub-components, full state matrix |
| 8 | **Call Out (Tooltip)** | `80531:12251` | Tooltips, coachmarks with priority system (P0/P1/P2) | Light/Dark, positional (top/bottom/left/right) |
| 9 | **Chiclet** | `72568:298876` | Tappable entities in chats/posts (links, files, apps) | Light/Dark, chat/canvas variants |
| 10 | **Card** | `90396:2135` | Card layouts + Grab and Go component | Multiple card types, light/dark |
| 11 | **Content Card** | `34276:406985` | Information cards with Primary/Secondary/Tertiary importance | Light/Dark, photo/secondary/tertiary/active variants |
| 12 | **Empty State / FRE / Alert / What's New** | `2567:346773`* | Empty State, First Run Experience, Alert Primary (Full modal), Alert Secondary (Sheet), Alert Tertiary, What's New | Multiple templates |
| 13 | **Contextual Command Bar** | `21432:372` | Keyboard-level command toolbar | iOS/iPadOS, light/dark, default/keyboard dismiss |
| 14 | **Toggle + Checkbox** | `17157:100433` | Toggle switch (on/off) + Checkbox (checked/unchecked) | Small/default sizes, light/dark, disabled states |
| 15 | **Divider** | `83796:188374` | Border inset + general horizontal dividers | Light/Dark, multiple inset levels |
| 16 | **Modality Framework + Drawers** | `21432:5879` | Modality Framework, Drawer Dominant, Drawer Secondary, Drawer Quaternary | Navigation/single/split modes, landscape |
| 17 | **Feedback View** | `94975:5479` | Thumbs up/down feedback, yes/no buttons | Multiple sizes, icon+text/icon-only |
| 18 | **Filter View** | `96457:16019` | Filter pills (toggle, disappearing, no pill count) | Dismissible/non-dismissible |
| 19 | **List** | `16505:211` | Section header, List Item (one/multiple lines), Section description, Grouped list | PDR variants: Activity, Teams & Channels, Chat & Meeting, Badge actions, Agenda Header |
| 20 | **Navigation Bar** | `21432:4909` | Top navigation bar with title, actions, segments | iOS/iPadOS, multiple layout types, light/dark |
| 21 | **Notification** | `21432:2409` | System-Defined, Custom notifications, Notification badges, Toast Top/Platform/Bottom, Chat Inside, Banner Secondary | 10+ sub-components |
| 22 | **Toast Inline (TFL)** | `100820:25757` | Notification Banner Primary — recurring/blocking notifications | Light/Dark, default/alert variants |
| 23 | **Loader (Progress Indicator)** | `41991:611735` | Spinner (small/large), Spinner with label, Progress bar | Light/Dark, determinate/indeterminate |
| 24 | **Menu Sheet** | `96457:17359` | Bottom sheet menu with options list | Default, with text, new item badge, long list, duplicates |
| 25 | **Page Control** | `84270:11252` | Dot page indicators for carousels/paging | Light/Dark, <5 and >5 page variants |
| 26 | **Shimmer View (Skeleton)** | `84035:49045` | Loading skeleton placeholders | Chat, list, discover views, light/dark |
| 27 | **Segmented Control** | `80588:7878` | Tabs, Switches, Pills — segmented selection | Buttons/segmented/primary, 2-3 segments, light/dark |
| 28 | **Search Bar** | `83776:521594` | Search input with rest/selected/typing states | Light/Dark |
| 29 | **Slider** | `96457:17363` | Range slider with steps, hidden thumb | Default, disabled track, steps, hide thumb |
| 30 | **Splash Screen** | `21432:0` | App launch screen | iPhone/Tablet, light/dark |
| 31 | **Tab Bar** | `21432:67208` | Bottom tab navigation bar | Multiple icon sets, badge counts, light/dark |
| 32 | **Text Field + Token Field** | `21439:144295` | Text Field, Token Field, Dynamic Sizing (WIP), Text View (WIP) | Multiple states, light/dark |
| 33 | **Token Field Pill** | `94699:970` | Compact entity pills (people tokens in To field) | Rest/pressed/disabled/active states, light/dark |
| 34 | **Tile Grid** | `93583:20468` | Grid layout for calling/dashboard scenarios | Horizontal stack, dashboard, primary/secondary, light/dark |
| 35 | **System Components** | `21432:5882` | Alert, Home Indicator, Handle, Status Bar, Notification, Date & Time Wheels, Lock Screen, Keyboard | iOS system-level references |

*\* Component #12 uses a different file key: `ED2E8HgO9nLB7PPRK9IWQJ`*

## Documentation Status

Many components are marked "Documentation in progress" in Figma. The component visuals and variants are available, but written specs may be incomplete.

## Creating Component Specs

When a project needs a detailed component spec, create it at:
```
design-system/teams-mobile/components/[component-name].md
```

A component spec should include:
- Anatomy (parts and their token references)
- States (rest, pressed, disabled, focused)
- Variants (size, style, platform)
- Spacing and sizing using foundation tokens
- Accessibility requirements
- Platform-specific notes (iOS vs iPadOS)
