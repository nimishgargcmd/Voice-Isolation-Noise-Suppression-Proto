// ═══════════════════════════════════════════════════════════════════
// ASSET CATALOG — Single-source-of-truth for all visual assets
// ═══════════════════════════════════════════════════════════════════
//
// All raster images in this project use the `figma:asset/` virtual
// module scheme. They cannot be copied to a physical folder, but
// this file re-exports every unique asset with a descriptive name.
//
// Usage:
//   import { avatarAadi, reactionThumbsUp } from "../assets";
//
// ─── CRITICAL FIGMA SWAP NOTE ───────────────────────────────────
// In the original Figma file, the export names were swapped:
//   • The variable named "imgBabak" actually contains SARAH's photo
//   • The variable named "imgSarah" actually contains BABAK's photo
// The names below reflect the ACTUAL person in the photo, not the
// original Figma variable name. Components that import directly
// from figma:asset still use the swapped names for compatibility.
// ═══════════════════════════════════════════════════════════════════


// ─────────────────────────────────────────────────────────────────
// 1. PARTICIPANT AVATARS (circular headshots)
// ─────────────────────────────────────────────────────────────────

/** Aadi Kapoor — organizer / self-user avatar (also used as PreJoin audio avatar) */
export { default as avatarAadi } from "figma:asset/3c32350895790815d4b2b05b8bfa873d40c997c2.png";

/** Babak — male participant (NOTE: Figma exported this under "imgSarah") */
export { default as avatarBabak } from "figma:asset/503fddd74dcc978ba951b5c79ebe96b95453b1eb.png";

/** Sarah — female participant (NOTE: Figma exported this under "imgBabak") */
export { default as avatarSarah } from "figma:asset/6900c5f1ebcee87405a464dc927c93633e66e145.png";

/** Miguel — active speaker / participant */
export { default as avatarMiguel } from "figma:asset/685fc6dc030aab2cbea5b15f523d9ce42c11d689.png";

/** Jessica — participant */
export { default as avatarJessica } from "figma:asset/3b6bf95da1f13af67c0b3a5e3c9534b640591ce5.png";

/** Ray — participant */
export { default as avatarRay } from "figma:asset/a55a7173204f1d7f74adab6c38113bc9eedbb180.png";


// ─────────────────────────────────────────────────────────────────
// 2. SELF-VIEW / CAMERA FALLBACK
// ─────────────────────────────────────────────────────────────────

/** Self-view camera fallback — used in PreJoinPage, SelfVideoTile, MeetingDock, FullscreenContentView */
export { default as selfViewFallback } from "figma:asset/640d5284dbe6da2945d294258d914788ad82cac7.png";


// ─────────────────────────────────────────────────────────────────
// 3. SHARED CONTENT / SCREEN SHARE
// ─────────────────────────────────────────────────────────────────

/** Shared content — portrait orientation (MeetingDock, FocusMode, Gallery, MeetingStage) */
export { default as sharedContentPortrait } from "figma:asset/f3edab3305d6980218cc52719020bc598b4a6331.png";

/** Shared content — landscape orientation (FullscreenContentView) */
export { default as sharedContentLandscape } from "figma:asset/935052a81bb4997885165a5ec2e99fca09fda760.png";


// ─────────────────────────────────────────────────────────────────
// 4. GALLERY / STAGE — PARTICIPANT VIDEO TILES
//    These are rectangular video-frame snapshots used in the
//    Gallery view and Stage view grids.
// ─────────────────────────────────────────────────────────────────

/** Gallery tile — participant video frame (Miguel / active speaker frame) */
export { default as galleryTileMiguel } from "figma:asset/39154ef67ddaa64702482bb71cb22487de1cf404.png";

/** Gallery tile — self-view video frame */
export { default as galleryTileSelf } from "figma:asset/2988dddd4762039b89078373be258dc29df8140a.png";

/** Gallery tile — participant 3 (Jessica) */
export { default as galleryTileJessica } from "figma:asset/0e1451995ab75444f4e79c58f872a551ab745d47.png";

/** Gallery tile — participant 4 (Ray) */
export { default as galleryTileRay } from "figma:asset/c82f00eab4bba2fb354dbe1d896a20e857d5fd3d.png";

/** Gallery tile — participant 5 (Babak) */
export { default as galleryTileBabak } from "figma:asset/07ed84b0d7bbe415782fa76088893b674d660f2c.png";

/** Gallery tile — participant 6 (Sarah) */
export { default as galleryTileSarah } from "figma:asset/8e36951a80a78686e04d2d0c0f40dd88c6f238da.png";

/** Gallery tile — participant 7 (Aadi) */
export { default as galleryTileAadi } from "figma:asset/b7d47865ac962c686cb32e819e7b9962113b9b6e.png";


// ─────────────────────────────────────────────────────────────────
// 5. REACTION EMOJIS
// ─────────────────────────────────────────────────────────────────

/** Thumbs up reaction emoji */
export { default as reactionThumbsUp } from "figma:asset/b7bdd4e332f1134cea6b347137499723925005ef.png";

/** Red heart reaction emoji */
export { default as reactionRedHeart } from "figma:asset/59520d231a783bb20cd3d4f98dfaec2de858b210.png";

/** Clapping hands reaction emoji */
export { default as reactionClappingHands } from "figma:asset/cebe50ea4c5d9b448454b19dd79074e5c5b4d898.png";

/** Grinning squinting face reaction emoji */
export { default as reactionGrinningFace } from "figma:asset/05be624ff210f9164b431697c6d21d5e13ab6caa.png";

/** Raised hand reaction / hand-raise emoji */
export { default as reactionRaisedHand } from "figma:asset/5e065daa3e40aa51484d94e392c06fe496150d5d.png";


// ─────────────────────────────────────────────────────────────────
// 6. CHAT AVATARS (circular, from chat panel)
// ─────────────────────────────────────────────────────────────────

/** Chat avatar circle 1 (Ellipse 266:01) */
export { default as chatAvatar1 } from "figma:asset/ea9d491f69be890aca1f172cdb618cb53f9b925e.png";

/** Chat avatar circle 2 (Ellipse 266:02) */
export { default as chatAvatar2 } from "figma:asset/e8b7f3b88823f24d90921c51899d4062e10c34ea.png";


// ─────────────────────────────────────────────────────────────────
// 7. CALENDAR PAGE
// ─────────────────────────────────────────────────────────────────

/** Calendar page — user profile avatar (top bar) */
export { default as calendarUserAvatar } from "figma:asset/39f8d2250dcd1e98d940778f5ef068f0f871f5a5.png";

/** Calendar page — decorative image 1 (Image 23) */
export { default as calendarImage1 } from "figma:asset/74a597444da0c5f58ccedb4d9a45a3e290355d89.png";

/** Calendar page — decorative image 2 */
export { default as calendarImage2 } from "figma:asset/3766ed276f36257fac7ac6a0951eee527cefec5a.png";

/** Calendar page — decorative image 3 (img684:71) */
export { default as calendarImage3 } from "figma:asset/49b724f90fd3dbec8b2d96911ed6960c8d5b85dc.png";


// ─────────────────────────────────────────────────────────────────
// 8. LOADERS / SPINNERS
// ─────────────────────────────────────────────────────────────────

/** Copilot panel loader / thinking animation */
export { default as copilotLoader } from "figma:asset/06b957a6d5437e60ed69b99fca47228844e73887.png";

/** Copilot overlay loader (small alpha spinner) */
export { default as copilotOverlayLoader } from "figma:asset/f83b4b5d0a764d9f8ec0da866b31f121692bc7e1.png";


// ═══════════════════════════════════════════════════════════════════
// ASSET HASH QUICK-REFERENCE TABLE
// ═══════════════════════════════════════════════════════════════════
//
// Hash (first 8 chars)  | Export Name              | Description
// ───────────────────── | ──────────────────────── | ─────────────────────────────────
// 3c323508...           | avatarAadi               | Aadi Kapoor headshot
// 503fddd7...           | avatarBabak              | Babak headshot (Figma: "imgSarah")
// 6900c5f1...           | avatarSarah              | Sarah headshot (Figma: "imgBabak")
// 685fc6dc...           | avatarMiguel             | Miguel headshot
// 3b6bf95d...           | avatarJessica            | Jessica headshot
// a55a7173...           | avatarRay                | Ray headshot
// 640d5284...           | selfViewFallback         | Self-view camera fallback
// f3edab33...           | sharedContentPortrait    | Screen share (portrait)
// 935052a8...           | sharedContentLandscape   | Screen share (landscape)
// 39154ef6...           | galleryTileMiguel        | Gallery video tile (Miguel)
// 2988dddd...           | galleryTileSelf          | Gallery video tile (self)
// 0e145199...           | galleryTileJessica       | Gallery video tile (Jessica)
// c82f00ea...           | galleryTileRay           | Gallery video tile (Ray)
// 07ed84b0...           | galleryTileBabak         | Gallery video tile (Babak)
// 8e36951a...           | galleryTileSarah         | Gallery video tile (Sarah)
// b7d47865...           | galleryTileAadi          | Gallery video tile (Aadi)
// b7bdd4e3...           | reactionThumbsUp         | Thumbs up emoji
// 59520d23...           | reactionRedHeart         | Red heart emoji
// cebe50ea...           | reactionClappingHands    | Clapping hands emoji
// 05be624f...           | reactionGrinningFace     | Grinning face emoji
// 5e065daa...           | reactionRaisedHand       | Raised hand emoji
// ea9d491f...           | chatAvatar1              | Chat avatar circle 1
// e8b7f3b8...           | chatAvatar2              | Chat avatar circle 2
// 39f8d225...           | calendarUserAvatar       | Calendar user profile pic
// 74a59744...           | calendarImage1           | Calendar decorative image 1
// 3766ed27...           | calendarImage2           | Calendar decorative image 2
// 49b724f9...           | calendarImage3           | Calendar decorative image 3
// 06b957a6...           | copilotLoader            | Copilot panel loader
// f83b4b5d...           | copilotOverlayLoader     | Copilot overlay spinner
// ═══════════════════════════════════════════════════════════════════
