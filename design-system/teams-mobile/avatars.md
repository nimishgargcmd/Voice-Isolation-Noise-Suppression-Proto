# Fluent Avatars — Catalog & Fetch Recipe

How the redesign sources person avatars. The repo already ships **15 CELA-approved Fluent
avatars**; this doc maps them, states the variant/usage model, the presence-ring convention, and
the recipe to pull more from the Figma source.

## Source

- **fileKey:** `KGP1cSTKB0NsKZeLhkdlJBXv` — Fluent **People / avatar** library.
- Probed node `6265-9224` = a *Component Grid* of `Person/<Name>` instances (each rendered via
  the `ProfilePicture` / `scc-react-live-persona-renderer` code component, captioned with the
  person's name). Names are **CELA-approved** (legal-cleared name + image) — only use approved
  people. The set is organized as `Person/<Full Name>` component sets (e.g. `Person/Kat Larsson`).

## Shipped avatars (already in repo)

Path: `src/assets/figma/dm/avatars/<name>.png` — import as
`import avKat from "@/assets/figma/dm/avatars/kat-larsson.png";`

| Person            | File                       |
|-------------------|----------------------------|
| Babak Shammas     | `babak-shammas.png`        |
| Beth Davies       | `beth-davies.png`          |
| Cameron Evans     | `cameron-evans.png`        |
| Carlos Slattery   | `carlos-slattery.png`      |
| Charlotte de Crum | `charlotte-de-crum.png`    |
| Daniela Mandera   | `daniela-mandera.png`      |
| Elvia Atkins      | `elvia-atkins.png`         |
| Erika Fuller      | `erika-fuller.png`         |
| Henry Brill       | `henry-brill.png`          |
| Kat Larsson       | `kat-larsson.png`          |
| Kayo Miwa         | `kayo-miwa.png`            |
| Lydia Bauer       | `lydia-bauer.png`          |
| Mona Kane         | `mona-kane.png`            |
| Ray Tanaka        | `ray-tanaka.png`           |
| Robert Tolbert    | `robert-tolbert.png`       |

File names are **kebab-case of the full name**. Parallel sets also exist for other surfaces:
`src/assets/figma/chat/avatars/` and `src/assets/figma/activity/avatars/`. Prefer the clean
`dm/avatars/` faces — the older chat-frame PNGs bake in a green presence dot that looks wrong on
bubble/stack avatars.

## Sizes & usage

The face PNG is a square photo masked to a circle. Drive the size with the container, masking with
`rounded-full object-cover`. Common sizes:

| Context                  | Size (px) | Tailwind                    |
|--------------------------|-----------|-----------------------------|
| Profile header           | 56        | `size-[56px] rounded-full`  |
| List / chat / activity row | 40      | `size-[40px] rounded-full`  |
| Video tile (in-meeting)  | fills tile| `object-cover` on tile      |
| Avatar pile / stack      | 24–28     | overlapped, ring-separated  |
| Initials fallback        | any       | text in a tinted circle     |

(See `src/app/components/profile/ProfileDrawer.tsx` — 56px header, 40px rows.)

## Avatar variant model

The Fluent avatar component has these axes — replicate as needed in code:
- **Size** — the discrete ramp above (16/20/24/28/32/40/48/56/72…); pick by context, don't
  arbitrarily scale.
- **Presence** — with / without a presence badge (see ring convention).
- **Active / type** — photo (default) vs **initials fallback** (when no image / unknown person)
  vs **icon** (group/bot). Initials = first letters on a deterministic tinted background.
- **Group / stack (avatar pile)** — N overlapping avatars with a `+N` overflow chip; each face
  carries a surface-colored ring so overlaps read as separated.

## Presence-dot convention

**Faces have no baked-in presence dot.** Presence is a **separate ring element** overlaid on the
avatar, colored from the FY27 presence tokens (see
[fy27-tokens.md](fy27-tokens.md)):

```tsx
<span className="absolute -bottom-[1px] -right-[1px] size-[15px] rounded-full
                 bg-fy27-presence-online ring-2 ring-fy27-surface" />
```

- Tokens: `--fy27-presence-online` (`#6BB700` / `#92C353` dark), `--fy27-presence-away`
  (`#FFAA44` / `#F8D22A`), `--fy27-presence-dnd` (`#C50F1F` / `#D74553`).
- The `ring-2 ring-fy27-surface` (or `ring-fy27-surface`) cuts the surface-colored gap between
  dot and face so the badge reads cleanly in both themes.
- Dot size scales with avatar: ~15px badge on a 56px avatar; shrink proportionally for 40px rows.
- The chat/activity list uses `#21A366` for its presence dot to match the DM header indicator —
  keep that surface consistent; elsewhere use the tokens.

## Fetch recipe (pull a new avatar PNG)

1. **Resolve the person node.** `search_design_system({ query:"<Full Name>",
   fileKey:"KGP1cSTKB0NsKZeLhkdlJBXv" })` or `get_metadata` on a `Component Grid` to find the
   `Person/<Name>` / `Name=<Name>` node id. Only pull **CELA-approved** names.
2. **Export the PNG.** `download_assets({ fileKey:"KGP1cSTKB0NsKZeLhkdlJBXv",
   nodeId:"<person node id>", defaultFormat:"png", defaultScale:2 })` (2× for retina; the
   response's raw-image entry carries the photo). Avatars are raster photos → **png, not svg**.
3. **Save** as `src/assets/figma/dm/avatars/<kebab-case-name>.png`.
4. **Wire it** with an `import av<Name> from "@/assets/figma/dm/avatars/<name>.png";` and render in
   a `rounded-full object-cover` container at the context size, plus a separate presence ring if
   the person should show presence. Register seeded threads in `src/app/lib/dmData.ts` as the
   existing avatars are.
