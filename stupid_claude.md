# iOS PWA Bottom Band Bug - Failed Approaches Log

## The Problem
On iOS Safari PWA (Add to Home Screen) with `viewport-fit=cover` and `apple-mobile-web-app-status-bar-style: black-translucent`, a ~62px band appears at the bottom of the screen. The app content stops at 812px while the actual screen height is 874px. The 62px gap is the bottom safe area (home indicator region) that the app fails to fill.

**Device:** iPhone (screen.height: 874, innerHeight: 812)
**Key finding:** `window.innerHeight` returns 812 (excludes safe areas), `window.screen.height` returns 874 (true screen). CSS units (`100vh`, `100%`, `-webkit-fill-available`) all resolve to ~812px, not 874px.

---

## Debug Color Map (still active in code)
| Layer | Color | File |
|-------|-------|------|
| `<html>` | RED | `src/styles/index.css:12` |
| `<body>` | CYAN | `src/styles/index.css:27` |
| `#root` | LIME (green) | `src/styles/index.css:36` |
| App outer div | BLUE | `src/app/App.tsx:179` |
| App frame div | YELLOW | `src/app/App.tsx:181` |
| RootLayout | ORANGE | `src/app/components/RootLayout.tsx:16` |
| MeetingPage | FUCHSIA | `src/app/components/MeetingPage.tsx:618` |

**DebugOverlay** component in `src/app/App.tsx:137-172` shows live pixel measurements.

---

## Failed Approach #1: CSS `height: 100%` chain
**What:** Set `height: 100%` on html -> body -> #root, expecting it to cascade down to fill the screen.
**Why it failed:** On iOS PWA with viewport-fit=cover, `100%` resolves against the viewport which reports 812px, not the actual 874px screen. The CSS engine doesn't know about the safe area extension.

## Failed Approach #2: `-webkit-fill-available`
**What:** Used `height: -webkit-fill-available` on html and body.
**Why it failed:** This resolves to 812px on iOS Safari PWA, same as `100%` and `100vh`. Apple's implementation of `-webkit-fill-available` does not account for the extended viewport from `viewport-fit=cover`.

## Failed Approach #3: `position: fixed; inset: 0` on #root
**What:** Set #root to `position: fixed; inset: 0` to bypass parent height dependencies.
**Why it failed:** `fixed inset-0` on iOS Safari PWA also resolves to 812px viewport height. The "viewport" for fixed positioning purposes is the 812px layout viewport, not the 874px visual viewport.

## Failed Approach #4: Flexbox on body with `flex: 1` on #root
**What:** Set body to `display: flex; flex-direction: column` and #root to `flex: 1`.
**Why it failed:** Flex children compute against the parent's `height` property. Body's CSS height resolves to 812px, so `flex: 1` on #root = 812px.

## Failed Approach #5: `position: absolute; inset: 0` on #root
**What:** Set #root to `position: absolute; inset: 0` to stretch to parent bounds.
**Why it failed:** Absolute positioning computes against the containing block's dimensions, which are still 812px from CSS.

## Failed Approach #6: JS setting `window.innerHeight` on body and #root
**What:** Used `useViewportFix()` hook to set `document.body.style.height` and `root.style.height` to `${window.innerHeight}px`.
**Why it failed:** `window.innerHeight` itself returns 812, not 874. We were setting the correct value programmatically but using the wrong source value.

## Failed Approach #7: JS setting `screen.height` on body and #root (but not html)
**What:** Changed JS to use `window.screen.height` (874) instead of `window.innerHeight` (812). Set on body and #root.
**Result:** Band changed from CYAN (body) to LIME (green = #root). Progress! body and #root are now 874px, but html is still 812px. The app content inside #root didn't extend.
**Why partially failed:** html.clientHeight remained 812px. The child elements using `absolute inset-0` weren't resolving against the inline-style height.

## Failed Approach #8: JS setting `screen.height` on html, body, AND #root
**What:** Added `document.documentElement.style.height = h` to also set html to 874px.
**Why it failed:** `html.clientHeight` stubbornly stayed at 812 even with inline style set to 874px. iOS Safari appears to clamp the html element's height to its internal viewport size.

## Failed Approach #9: Adding `position: relative` to #root
**What:** Added `position: relative` to #root CSS so that `absolute inset-0` children would use #root as their containing block (since #root has 874px inline height).
**Why it failed:** The absolutely positioned children still resolved to 812px. Even with #root having `position: relative` and `height: 874px` (inline), the `absolute inset-0` child's `bottom: 0` seems to resolve against the CSS-computed height (812px) rather than the inline override on iOS Safari.

## Failed Approach #10: `fixed inset-0` on App outer div
**What:** Changed the App outer div from `absolute inset-0` to `fixed inset-0`, which positions against the viewport directly, bypassing the html->body->#root chain entirely.
**Why it failed:** Still shows green band. `fixed inset-0` on iOS Safari PWA also resolves to the 812px layout viewport, same problem as approach #3. The iOS Safari viewport for CSS positioning purposes is 812px regardless of `viewport-fit=cover`.

---

## Current State of the Code

### Files modified with debug artifacts:
1. **`src/styles/index.css`** - html(red), body(cyan), #root(lime) debug backgrounds
2. **`src/app/App.tsx`** - DebugOverlay component, blue/yellow debug backgrounds, `useViewportFix()` hook with screen.height logic, `fixed inset-0` on App outer
3. **`src/app/components/RootLayout.tsx`** - orange debug background
4. **`src/app/components/MeetingPage.tsx`** - fuchsia debug background

### Debug overlay readings (consistent across all attempts):
```
innerH: 874         ← reports 874 AFTER we set inline styles (was 812 initially?)
screen.h: 874       ← true screen height
html.cH: 812        ← STUCK at 812, won't budge
body.cH: 874        ← set by JS inline style
root.cH: 874        ← set by JS inline style
body.style.h: 874px ← confirms inline style is applied
root.style.h: 874px ← confirms inline style is applied
```

### The core unsolved mystery:
**Why does `html.clientHeight` stay at 812 even when `document.documentElement.style.height = '874px'` is set?** And why do `fixed inset-0` and `absolute inset-0` children resolve to 812px even when their containing block reports 874px via clientHeight/offsetHeight?

iOS Safari appears to have an internal viewport size (812px) that overrides CSS for:
- html element height (clamped to viewport)
- Fixed positioning reference frame
- Absolute positioning when using `inset: 0`

The 62px gap (874 - 812) corresponds to the combined top and bottom safe areas (status bar + home indicator). Despite `viewport-fit=cover` extending the visual viewport, the CSS layout viewport remains 812px.

---

---

## THE ACTUAL ROOT CAUSE (Found after 12 hours)

**`index.html` had `maximum-scale=1.0, user-scalable=no` in the viewport meta tag.**

```html
<!-- BROKEN: Our index.html -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />

<!-- WORKING: Reference project's index.html -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

`maximum-scale=1.0, user-scalable=no` **prevents iOS Safari from extending the viewport into safe areas**, even with `viewport-fit=cover`. With these properties present, `window.innerHeight` returns 812 (excludes safe areas). Without them, `innerHeight` returns 874 (full screen including safe areas).

The "mystery" of why `html.clientHeight` was stuck at 812, why `fixed inset-0` resolved to 812, why every CSS approach failed — it was all because the viewport itself was clamped to 812px by the `maximum-scale` / `user-scalable` restrictions.

### The fix:
1. Change `index.html` viewport meta to: `width=device-width, initial-scale=1.0`
2. Let the JS `useStandaloneMetaTags()` add `viewport-fit=cover` at runtime
3. Use simple CSS: `html, body { height: 100%; height: 100dvh; }` and `#root { position: fixed; inset: 0; }`
4. No JS viewport height hacks needed

### How the fix was found:
By comparing the debug overlay readings between the working reference project and our implementation side by side. The reference showed `innerH: 874` while ours showed `innerH: 812` — same device, same PWA config, same CSS. The only difference was the viewport meta tag in `index.html`.

---

## Key Lessons

1. **Always diff against the working reference first.** The answer was a one-line difference in `index.html`.
2. **`maximum-scale=1.0, user-scalable=no` breaks viewport-fit=cover on iOS Safari.** These properties clamp the viewport to the safe area, preventing the app from extending edge-to-edge.
3. **If the viewport itself is wrong, no CSS or JS can fix it.** All 10 approaches failed because they were trying to fix a symptom (812px heights) instead of the cause (viewport clamped by meta tag).
4. **Don't add complexity. Remove it.** The entire `useViewportFix` hook was unnecessary. The fix was to remove 3 words from a meta tag.
5. **Side-by-side debug overlays are the fastest diagnostic.** Comparing pixel values between working and broken builds immediately revealed `innerHeight` was different, pointing straight to the viewport configuration.
