# Teams 2 Android — Component Library Index

Source: [Teams-2-Android](https://www.figma.com/design/jydrjRQKpgoB1NIdPbJRtu/Teams-2-Android)

This is an index of all available component pages. Detailed specs are created on-demand when a project needs a specific component.

## How to Use

1. Find the component you need below
2. Use `mcp__figma-remote__get_screenshot` with the file key and node ID to view it
3. Use `mcp__figma-remote__get_design_context` for extractable code/tokens
4. File key: `jydrjRQKpgoB1NIdPbJRtu`

## Components

| # | Component | Node ID | Description | Variants |
|---|-----------|---------|-------------|----------|
| 1 | **Typography** | `37029:6692` | Full type scale samples — Page title, Body, Title, Caption, Callout, Button, Subhead | All 17 styles rendered on device frames |
| 2 | **Shell + Android Size Class** | `32980:30942` | App shell structure, tablet/foldable size classes | Phone/tablet/foldable layouts |
| 3 | **Alert** | `5688:36836` | Native dialog alerts (system dialog recommended) | Light/Dark |
| 4 | **Avatar** | `6167:3` | Avatar, Avatar Stack, Avatar Pile, Avatar Carousel, Cutout, Presence badge | Multiple sizes, group layouts |
| 5 | **App Tray** | `34971:6889` | Modal primitives — bottom app tray/dock | Light/Dark |
| 6 | **Badge View (Label View)** | `15968:212929` | Static/interactive labels for ownership, privacy, channel details | Light/Dark, static/interactive |
| 7 | **Banner View** | `26335:460099` | Community banner (TFL component) | Android variant |
| 8 | **Buttons** | `6167:4` | Button, FAB, Split Button, RSVP Button, Circular Button, Jump Button | 6 sub-components, full state matrix |
| 9 | **Call Out (Tooltip)** | `6167:20` | Tooltips, coachmarks with priority system (P0/P1/P2) | Light/Dark, positional |
| 10 | **Chiclet** | `22360:467712` | Tappable entities in chats/posts (links, files, apps) | Light/Dark, chat/compose box variants |
| 11 | **Card** | `34267:2608` | Card layouts + Grab and Go component | Multiple card types, light/dark |
| 12 | **Content Card** | `17451:238529` | Information cards with Primary/Secondary/Tertiary importance | Light/Dark, photo/secondary/tertiary/active variants |
| 13 | **Contextual Command Bar** | `21674:448241` | Keyboard-level command toolbar | Light/Dark, default/keyboard dismiss |
| 14 | **Controls** | `4669:815` | Toggle, Checkbox, Radio button | All with light/dark, on/off/disabled states |
| 15 | **Dividers** | `6167:19` | Border inset + general horizontal dividers | Light/Dark, multiple inset levels |
| 16 | **Drawer (Sheet)** | `32856:356011` | Modality Framework, Drawer Secondary (Bottom Sheet), Drawer Quaternary (Menu) | Portrait/landscape, CTA behavior |
| 17 | **List Items** | `4442:12947` | Section header, List-OneLine, List-MultiLine, Section description, Grouped list | PDR variants: Activity, Teams & Channels, Chat & Meeting, Swipe actions, Agenda Header |
| 18 | **Navigation Bar** | `6167:9` | Top navigation bar with title, actions, segments | Multiple layout types, light/dark |
| 19 | **Notifications** | `6167:10` | System-Defined, Custom, Notification badges, Toast top/Pushdown, Banner View Primary/Secondary, Chat header, Network banner | 10+ sub-components |
| 20 | **Loader (Progress Indicator)** | `6167:3323` | Pull-to-refresh, Spinner (primary/secondary), Progress bar | Light/Dark, multiple sizes |
| 21 | **Page Control** | `32980:26512` | Dot page indicators for carousels/paging | Light/Dark, <5 and >5 page variants |
| 22 | **Shimmer View (Skeleton)** | `32865:24668` | Loading skeleton placeholders | Chat, list, discover views, light/dark |
| 23 | **Segmented Control** | `32856:355833` | Tabs, Switches, Pills — segmented selection | Buttons/segmented/primary, 2-3 segments, light/dark |
| 24 | **Search Bar** | `32863:20010` | Search input with rest/selected/typing states | Light/Dark |
| 25 | **Splash Screen** | `6167:16` | App launch screen | Phone/tablet viewport, light/dark |
| 26 | **Tab Bar** | `6167:17` | Bottom tab navigation bar | Phone/tablet, Viva IP custom, light/dark |
| 27 | **Text Field + Token Field** | `25781:459815` | Text input fields, token/pill input fields | Left/center aligned, multiple states, light/dark |
| 28 | **Token Field Pill** | `37017:1304` | Compact entity pills (people tokens in To field) | Rest/pressed/disabled/active states, light/dark |
| 29 | **Tile Grid** | `34971:9367` | Modal primitives — grid layout for calling/dashboard | Horizontal stack, dashboard, light/dark |
| 30 | **System Components** | `32921:27488` | Dialog, Home Indicator, Handle, Status bar, Notification, Lock Screen, Keyboard, Date and Time Picker | Android system-level references |

## Android-Specific Differences from iOS

- **Controls page** includes **Radio button** (not present in iOS library)
- **Loader** includes **Pull-to-refresh** as a separate variant
- **Drawer** uses **Bottom Sheet** terminology (vs iOS "Sheet")
- **Tab Bar** includes **Viva IP custom tab bar** variant
- **System Components** includes **Date and Time Picker** (separate from iOS Date & Time Wheels)
- **Shell** includes foldable device size classes
- No Slices page (iOS-only)
- No Feedback View page (iOS-only, WIP)
- No Filter View page (iOS-only)
- No Menu Sheet page (Android uses Drawer Quaternary/Menu instead)

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
- Platform-specific notes (Android Material adaptations)
