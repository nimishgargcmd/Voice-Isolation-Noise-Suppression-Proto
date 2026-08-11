# FY27 Component Library (code)

Living catalog of the **reusable** components built for the redesign. **Reuse
before building new** — check here first. Keep this updated when you add or
generalize a component. All redesign components are **theme-aware** (consume
`--fy27-*` tokens, never raw hex — see [fy27-tokens.md](teams-mobile/fy27-tokens.md)).

## Conventions
- **Reusable, version-agnostic** components → `src/app/components/` (e.g. `UBar`).
- **Version-specific** overrides → `src/app/components/versions/<version>/` (e.g. `versions/mvp/MeetingViewsGallery`).
- **Icons** → small SVG-as-TS components with `size`/`color` (or theme-token) props. Never inline mic/video icons — use the canonical ones.
- **Color** → semantic `fy27-*` Tailwind utilities / `var(--fy27-*)`. Flag any hardcoded hex.

## Versioning primitives — `src/app/versioning/`
| Component / API | Purpose |
|---|---|
| `useVersionedComponent(slot)` / `Slot` | Resolve a slot's component for the active version (live switch). |
| `registry.ts` (`registerComponent`, `Hidden`) | Register per-version implementations; `Hidden` removes a slot in a version. |
| `VersionProvider` / `useVersion` | Active version state (persisted). Final Vision = baseline; FY27 MVP (`current`) overrides. |
| `versions.ts` | The version catalog + `BASELINE_ID` + `DEFAULT_VERSION_ID`. |
| **Registered slots** | `Header` (MeetingHeader) · `MeetingViews` (SwipeableViews ↔ MeetingViewsGallery). |

## Theme — `src/app/theme/`
| Component | Purpose |
|---|---|
| `ThemeProvider` / `useTheme` | Light/Dark (`.dark` toggle, persisted, system default). |

## Meeting
| Component | Path | Purpose | Theme | Version |
|---|---|---|---|---|
| **`BottomSheet`** | `components/BottomSheet.tsx` | Reusable Teams drawer shell — scrim, slide-up spring, grabber handle, Esc/scrim dismiss, frame-centered. Caller passes content + optional `surfaceClassName`/`className`/`handle`. **Reuse for any bottom sheet.** | ✅ | reusable |
| **`MeetingTile` / `NameTag`** | `components/MeetingTile.tsx` | Gallery-square participant tile (Display × State) + configurable name chip (raised-hand emoji + up to 2 trailing icons). Edge-to-edge image fill; library avatar + name. | ✅ | reusable (MVP uses) |
| **`SelfTile`** | `components/SelfTile.tsx` | Floating self ("You") tile — Figma 1124:4280. Portrait/landscape × video on/off × raised-hand. Video-on shows flip-camera + rotate controls; "You" nametag + mic. Wrapped by `versions/mvp/FloatingSelfTile`. | ✅ | reusable (MVP uses) |
| `MeetingHeaderMvp` / `MeetingHeaderSheet` | `components/versions/mvp/` | FY27 MVP header (full-width surface/primary, Speaker + maroon end-call) + the meeting-details bottom sheet it opens (sensitivity + AI), built on `BottomSheet`. | ✅ | FY27 MVP |
| `MeetingStageGallery` | `components/versions/mvp/` | FY27 MVP gallery grid — 14 tightly-packed `MeetingTile`s, spotlight-priority sort. | ✅ | FY27 MVP |
| **`UBar`** | `components/UBar.tsx` | Meeting control dock (Video·Mic·Chat·More·Copilot); docks to bottom, hairline top border. Keeps on/off + active(filled) logic. | ✅ | used by FY27 MVP |
| `ubarIcons` | `components/ubarIcons.tsx` | Exact Fluent glyphs — `Camera`/`CameraOff`/`Mic`/`MicOff` (frame 953:30445) + **`CallEnd`** (Fluent 68174:1512, `size` prop). `currentColor`. **Use `CallEnd` for every call-end glyph.** | ✅ | reusable |
| `MeetingViewsGallery` | `components/versions/mvp/` | FY27 MVP stage — Gallery only (no swipe/dots). | ✅ | FY27 MVP |
| `BottomNav` | `components/BottomNav.tsx` | Legacy floating control pill. | ✗ (legacy) | Final Vision |
| Canonical icons | `MicOnIcon`/`MicOffIcon`/`VideoOnIcon`/`VideoOffIcon` (+ `*Indicator`) | `size`/`color` props — **reuse everywhere**. | via `color` | both |

## Profile / Account — `src/app/components/profile/`
| Component | Purpose | Theme |
|---|---|---|
| `AccountSheet` | Bottom-sheet Account screen (identity · Activity · version control). Static profile. | ✅ |
| `VersionIndicator` | Transient "Viewing {label}" toast (5s auto-dismiss). | ✅ |
| `fluentIcons.tsx` | Exact Fluent glyphs (location/status/bell/weather/settings/flag/dismiss/chevron/check + available-presence), inlined with `currentColor`. **Reuse for any redesign UI.** | ✅ |
| `ProfileDrawerContext` | Global open/close for the Account sheet. | — |

> When you build a new redesign component, add a row here and prefer extending
> an existing one (e.g. an icon already in `fluentIcons`) over re-authoring.
