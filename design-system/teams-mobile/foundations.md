# Teams 2 Mobile — Foundations

Extracted from [Teams 2 Mobile Variables](https://www.figma.com/design/ywXpf7pgnAd8u6qfot0ZaU/Teams-2-Mobile-Variables).
All tokens have Light, Dark, and Glass (WIP) variants unless noted.

## Global Colors — Neutral

Raw values, context-agnostic. Referenced by semantic tokens below.

| Token | Hex |
|-------|-----|
| Black | #000000 |
| Gray v950 | #141414 |
| Gray v900 | #212121 |
| Gray v800 | #292929 |
| Gray v700 | #303030 |
| Gray v600 | #404040 |
| Gray v500 | #616161 |
| Gray v400 | #919191 |
| Gray v300 | #ACACAC |
| Gray v200 | #C8C8C8 |
| Gray v100 | #E1E1E1 |
| Gray v50 | #F1F1F1 |
| Gray v25 | #F8F8F8 |
| White | #FFFFFF |

## Global Colors — Brand

| Token | Brand Light | Brand Dark |
|-------|------------|------------|
| Shade 30 | #2F2F4A | #C8C8FA |
| Shade 20 | #2F2F4A | #AAB4FA |
| Shade 10 | #383966 | #9299F7 |
| **Primary** | **#5B5FC7** | **#7F85F5** |
| Tint 10 | #7579EB | #5B5FC7 |
| Tint 20 | #9299F7 | #1D1E78 |
| Tint 30 | #AAB1FA | #333357 |
| Tint 40 | #DCD0FA | #2F314A |
| Tint 50 | #E8EBFA | #2F2F4A |

## Accent

Highlight colors for key elements: buttons, links, interactive controls.

| Alias Token | API Reference | Light | Dark | Glass |
|------------|---------------|-------|------|-------|
| Brand accent global | ElementColor.accent.global | Shade 10 #383966 | Tint 20 #3D3E78 | Shade 10 #3D3E78 |
| Brand accent dominant | $BrandColor.tms.shade10 | Shade 10 #383966 | Shade 30 #C5C8FA | Shade 10 #383966 |
| Brand accent primary | $BrandColor.tms.primary | Primary #5B5FC7 | Primary #7F85F5 | Primary #5B5FC7 |
| Brand accent secondary | $BrandColor.tms.tint30 | Tint 30 #AAB1FA | Tint 30 #333357 | Tint 30 #AAB1FA |
| Brand accent tertiary | $BrandColor.tms.tint50 | Tint 50 #E8EBFA | Tint 40 #2F2F4A | Tint 50 #E8EBFA |

## Surface

Backgrounds, strokes, and interactive states within controls.

| Alias Token | API Reference | Light | Dark |
|------------|---------------|-------|------|
| Surface dominant | face.dominant | White #FFFFFF | Black #000000 |
| Surface primary | face.onprimary | White #FFFFFF | Black #000000 |
| Surface secondary | face.secondary | White #FFFFFF | Black #000000 |
| Surface tertiary | face.tertiary | White #FFFFFF | Gray v950 #141414 |
| Surface quaternary | face.quaternary | Gray v50 #F1F1F1 | Gray v950 #141414 |
| Surface subtlest | face.subtlest | Gray v50 #F1F1F1 | Gray v900 #212121 |
| Surface raised fill | face.raisedfill | Gray v50 #F1F1F1 | Gray v800 #292929 |
| Surface alt raised fill | face.altraisedfill | Gray v50 #F1F1F1 | Gray v800 #292929 |
| Surface subtle fill | face.subtlefill | White #FFFFFF | Gray v950 #141414 |
| Surface alt fill | face.altfill | White #FFFFFF | Black #000000 |
| Surface accent | face.accent | Brand Primary #5B5FC7 | Brand Primary #7F85F5 |
| Surface danger | face.danger | Danger Tint 40 | Danger Tint 40 |
| Surface subtle danger | face.subtledanger | Danger Tint 60 | Danger Tint 60 |
| Surface success | face.success | Success | Success |
| Surface warning | face.warning | Warning | Warning |
| Surface subtle base | face.subtlebase | Gray v25 #F8F8F8 | Gray v950 #141414 |
| Divider | — | Gray v100 #E1E1E1 | Gray v800 #292929 |
| Surface border | face.border | Gray v200 #C8C8C8 | Gray v600 #404040 |
| Surface border dismissed | face.borderdismissed | Gray v700 #303030 | Gray v500 #616161 |

## Element Text

| Alias Token | API Reference | Light | Dark | Glass |
|------------|---------------|-------|------|-------|
| Text dominant | text.dominant | Black #000000 | White #FFFFFF | White 96% |
| Text primary | text.primary | Gray v900 #212121 | Gray v100 #E1E1E1 | White 96% |
| Text secondary | text.secondary | Gray v500 #616161 | Gray v400 #919191 | White 80% |
| Text alt secondary | ElementColor.text | Gray v900 #212121 | Gray v400 #919191 | White 80% |
| Text disabled | text.disabled | Gray v300 #ACACAC | Gray v500 #616161 | Gray v500 |
| Text hint | text.hint | Gray v500 #616161 | Gray v400 #919191 | White |
| Text interactive | text.interactive | Brand Primary #5B5FC7 | Brand Primary #7F85F5 | White 100% |
| Text assistive | text.assistive | Brand Primary #5B5FC7 | Brand Primary #7F85F5 | White 100% |
| Text on accent | text.onaccent | White #FFFFFF | Black #000000 | White 96% |
| Text danger | text.danger | Danger #D92C2C | Danger #DC5E62 | Danger |
| Text success | text.success | Success #0F7A0B | Success | Success |
| Text warning | text.warning | Warning #835C00 | Warning #FFB900 | Warning |
| Text on global | ElementColor.text | White #FFFFFF | White #FFFFFF | White 96% |
| Text link | — | Brand Primary #5B5FC7 | Brand Primary #7F85F5 | — |
| Text caret | — | Brand Primary #5B5FC7 | Brand Primary #7F85F5 | — |

## Element Icon

| Alias Token | API Reference | Light | Dark | Glass |
|------------|---------------|-------|------|-------|
| Icon dominant | icon.dominant | Black #000000 | White #FFFFFF | White 96% |
| Icon primary | icon.primary | Gray v900 #212121 | Gray v100 #E1E1E1 | White 96% |
| Icon secondary | icon.secondary | Gray v400 #919191 | Gray v500 #6E6E6E | White 80% |
| Icon alt secondary | ElementColor.text | Gray v900 #212121 | Gray v400 #919191 | White 80% |
| Icon disabled | icon.disabled | Gray v300 #ACACAC | Gray v600 #404040 | Gray v300 |
| Icon hint | icon.hint | Gray v400 #919191 | Gray v500 #6E6E6E | White 80% |
| Icon interactive | icon.interactive | Brand Primary #5B5FC7 | Brand Primary #7F85F5 | White 100% |
| Icon on accent | icon.onaccent | White #FFFFFF | Black #000000 | White 96% |
| Icon danger | icon.danger | Danger #D92C2C | Danger #DC5E62 | Danger 84% |
| Icon success | icon.success | Success #0F7A0B | Success #0EB244 | Success |
| Icon warning | icon.warning | Warning #835C00 | Warning #FFB900 | Warning 80% |

## Presence

Status indicators for user availability.

| Alias Token | API Key | Light | Dark | Glass |
|------------|---------|-------|------|-------|
| Online | online | #6BB700 | #92C353 | #6BB700 |
| Away | away | #FFAA44 | #F8D22A | #FFAA44 |
| DND | doNotDisturb | #C50F1F | #D74553 | #C50F1F |
| Invisible | invisible | #8A8886 | #979593 | #65F160 80% |
| OOF | oof | #B4009E | #E959D9 | #B4009E |

## Semantic Status Colors

Used across Surface, Text, and Icon tokens above.

| Status | Light | Dark |
|--------|-------|------|
| Danger | #D92C2C | #DC5E62 |
| Success | #0F7A0B | #0EB244 |
| Warning | #835C00 | #FFB900 |

## WCAG Compliance

- Text and icon tokens meet **4.5:1** contrast ratio on their corresponding surface
- Icon Primary/Secondary tokens used as standalone CTA icons meet **4.5:1**
- Decorative icons attached to labels meet **3:1** minimum
- High contrast mode: gray ramp adapts to vibrancy and accessibility settings (Increase Contrast, Reduce Transparency)

## Typography

### Font Families

| Token | iOS | Android |
|-------|-----|---------|
| Base | SF Pro | Roboto |
| Monospace | SF Pro | Roboto |
| Numeric | SF Pro | Roboto |

### Font Weights

| Token | Value |
|-------|-------|
| Regular | 400 |
| Medium | 500 |
| Semibold | 600 |
| Bold | 700 |

### Type Scale — iOS (SF Pro)

| Style | Token | Size | Weight | Line Height | Letter Spacing |
|-------|-------|------|--------|-------------|----------------|
| Page title | display4 | 30 | Bold | – | 16 |
| Title 1 | title1 | 26 | Bold | 31 | 0.33 |
| Title 2 | title2 | 22 | Semibold | 26 | 0.35 |
| Title 3 | title3 | 17 | Semibold | 22 | -0.41 |
| Callout 1 | callout1 | 17 | Bold | 22 | -0.41 |
| Callout 2 | callout2 | 15 | Bold | 20 | -0.24 |
| Subhead 1 | subhead1 | 17 | Medium | 20 | -0.24 |
| Subhead 2 | subhead2 | 15 | Medium | 20 | -0.08 |
| Subhead 4 | subhead4 | 12 | Bold | 16 | 0 |
| Body 1 | body1 | 17 | Regular | 22 | -0.41 |
| Body 2 | body2 | 20 | Regular | 20 | -0.08 |
| Body 3 | body3 | 18 | Regular | 18 | -0.08 |
| Caption 1 | caption1 | 12 | Regular | 12 | 0 |
| Caption 2 | caption2 | 11 | Regular | 16 | 0.06 |
| Button 1 | button1 | 15 | Medium | 20 | -0.24 |
| Button 2 | button2 | 13 | Medium | 18 | -0.08 |
| Button 3 | button3 | 12 | Medium | 12 | 0.12 |

## Spacing — Padding

Space between containers and their content.

| Token | Default | iPad |
|-------|---------|------|
| none | 0 | — |
| xsmall | 4 | 6 |
| small | 8 | 10 |
| medium | 12 | — |
| large | 16 | — |
| xlarge | 20 | 22 |
| xxlarge | 24 | — |
| xxxlarge | 32 | 36 |

## Spacing — Gap

Space between contents inside a container.

| Token | Vertical | Horizontal |
|-------|----------|------------|
| none | 0 | 0 |
| xsmall | 4 | 4 |
| small | 8 | 8 |
| medium | 12 | 12 |
| large | 16 | 16 |
| xlarge | 20 | 20 |
| xxlarge | 24 | 24 |
| xxxlarge | 32 | 32 |

## Spacing — Nudge

Align content with icons or ghost buttons with forced container padding.

| Token | Vertical | Horizontal |
|-------|----------|------------|
| none | 0 | 0 |
| small | 8 | 8 |
| medium | 12 | 12 |
| large | 18 | 18 |

## Corner Radius

Default 4px for rectangles. Shapes <32px use 2px. Large/extra-large components use 8px and 12px.

| Token | Value |
|-------|-------|
| none | 0 |
| minimal | 4 |
| default | 8 |
| heavy | 12 |
| prominent | 36 |
| expanded | 999 |

## Elevation — Shadows

Each elevation level uses two shadow layers (Shadow 1 + Shadow 2).

### Low Elevation

| Level | Usage | Shadow 1 (Light) | Shadow 2 (Light) |
|-------|-------|-------------------|-------------------|
| Shadow 02 | App Bar, FAB focused, Cards on edge | X:0 Y:1 Blur:2 Opacity:14% | X:0 Y:0 Blur:2 Opacity:12% |
| Shadow 04 | N/A | X:0 Y:2 Blur:4 Opacity:14% | X:0 Y:0 Blur:2 Opacity:12% |
| Shadow 08 | FAB Rest, App Bar Scroll | X:0 Y:4 Blur:8 Opacity:14% | X:0 Y:0 Blur:2 Opacity:12% |
| Shadow 16 | Popovers, Dropdowns | X:0 Y:8 Blur:16 Opacity:14% | X:0 Y:0 Blur:2 Opacity:12% |

### High Elevation

| Level | Usage | Shadow 1 (Light) | Shadow 2 (Light) |
|-------|-------|-------------------|-------------------|
| Shadow 28 | Bottom Sheet, Contextual Menu | X:0 Y:14 Blur:28 Opacity:12% | X:0 Y:0 Blur:8 Opacity:14% |
| Shadow 64 | Panels, Pop Up, Dialogs | X:0 Y:32 Blur:64 Opacity:14% | X:0 Y:0 Blur:8 Opacity:12% |

> Dark mode shadows use higher opacity values to remain visible on dark surfaces.

## Extended Color Palettes

26 color palettes available for calendar categories, data visualization, and decorative use. Each palette has Shade 30/20/10, Primary, Tint 10/20/30/40/50/60 in Light and Dark variants.

Available palettes: Brand, Dark red, Cranberry, Bronze, Orange, Peach, Marigold, Gold, Dark brown, Lime, Forest, Light green, Dark green, Light teal, Dark teal, Steel, Light blue, Dark blue, Lavender, Dark purple, Pink, Plum, Beige, Mink, Silver, Anchor.

Use via the Figma Variables file for exact hex values per palette.

## Rules

1. Never use raw hex values — always reference token names
2. Use `text.primary` for body text, `text.secondary` for supplementary text, `text.dominant` for titles/headers
3. Use `icon.primary` for actionable icons, `icon.secondary` for decorative/list icons
4. Surface tokens follow the hierarchy: dominant > primary > secondary > tertiary > quaternary
5. Brand accent primary (#5B5FC7 light / #7F85F5 dark) is the primary interactive color
6. Always provide both light and dark variants when implementing themed UI
7. Use the type scale token names (body1, title2, etc.) — never hardcode font sizes
8. Use spacing tokens (small, medium, large) — never hardcode padding/gap values
9. Use corner radius tokens — never hardcode border-radius values
10. Use elevation levels by context (Shadow 02 for cards, Shadow 28 for sheets, Shadow 64 for dialogs)

## Figma Source Files

- Variables: [Teams-2-Mobile-Variables](https://www.figma.com/design/ywXpf7pgnAd8u6qfot0ZaU/Teams-2-Mobile-Variables)
- iOS Components: [Teams-2-iOS](https://www.figma.com/design/KeaubDwdX8LRyM5Yyjnk2Y/Teams-2-iOS)
- Android Components: [Teams-2-Android](https://www.figma.com/design/jydrjRQKpgoB1NIdPbJRtu/Teams-2-Android)
