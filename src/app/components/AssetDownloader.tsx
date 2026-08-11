import React, { useRef, useCallback } from "react";

// ═══════════════════════════════════════════════════════════════
// ALL figma:asset IMPORTS — every unique raster image in the project
// ═══════════════════════════════════════════════════════════════

// 1. Participant Avatars
import avatarAadi from "figma:asset/3c32350895790815d4b2b05b8bfa873d40c997c2.png";
import avatarSarah from "figma:asset/6900c5f1ebcee87405a464dc927c93633e66e145.png";       // Figma calls this "imgBabak" but it's Sarah's photo
import avatarBabak from "figma:asset/503fddd74dcc978ba951b5c79ebe96b95453b1eb.png";       // Figma calls this "imgSarah" but it's Babak's photo
import avatarMiguel from "figma:asset/685fc6dc030aab2cbea5b15f523d9ce42c11d689.png";
import avatarJessica from "figma:asset/3b6bf95da1f13af67c0b3a5e3c9534b640591ce5.png";
import avatarRay from "figma:asset/a55a7173204f1d7f74adab6c38113bc9eedbb180.png";

// 2. Self-view fallback
import selfViewFallback from "figma:asset/640d5284dbe6da2945d294258d914788ad82cac7.png";

// 3. Shared content / screen share
import sharedContentPortrait from "figma:asset/f3edab3305d6980218cc52719020bc598b4a6331.png";
import sharedContentLandscape from "figma:asset/935052a81bb4997885165a5ec2e99fca09fda760.png";

// 4. Gallery / stage video tiles
import galleryTileMiguel from "figma:asset/39154ef67ddaa64702482bb71cb22487de1cf404.png";
import galleryTileSelf from "figma:asset/2988dddd4762039b89078373be258dc29df8140a.png";
import galleryTileJessica from "figma:asset/0e1451995ab75444f4e79c58f872a551ab745d47.png";
import galleryTileRay from "figma:asset/c82f00eab4bba2fb354dbe1d896a20e857d5fd3d.png";
import galleryTileBabak from "figma:asset/07ed84b0d7bbe415782fa76088893b674d660f2c.png";
import galleryTileSarah from "figma:asset/8e36951a80a78686e04d2d0c0f40dd88c6f238da.png";
import galleryTileAadi from "figma:asset/b7d47865ac962c686cb32e819e7b9962113b9b6e.png";

// 5. Reaction emojis
import reactionThumbsUp from "figma:asset/b7bdd4e332f1134cea6b347137499723925005ef.png";
import reactionRedHeart from "figma:asset/59520d231a783bb20cd3d4f98dfaec2de858b210.png";
import reactionClappingHands from "figma:asset/cebe50ea4c5d9b448454b19dd79074e5c5b4d898.png";
import reactionGrinningFace from "figma:asset/05be624ff210f9164b431697c6d21d5e13ab6caa.png";
import reactionRaisedHand from "figma:asset/5e065daa3e40aa51484d94e392c06fe496150d5d.png";

// 6. Chat avatars
import chatAvatar1 from "figma:asset/ea9d491f69be890aca1f172cdb618cb53f9b925e.png";
import chatAvatar2 from "figma:asset/e8b7f3b88823f24d90921c51899d4062e10c34ea.png";

// 7. Calendar page
import calendarUserAvatar from "figma:asset/39f8d2250dcd1e98d940778f5ef068f0f871f5a5.png";
import calendarImage1 from "figma:asset/74a597444da0c5f58ccedb4d9a45a3e290355d89.png";
import calendarImage2 from "figma:asset/3766ed276f36257fac7ac6a0951eee527cefec5a.png";
import calendarImage3 from "figma:asset/49b724f90fd3dbec8b2d96911ed6960c8d5b85dc.png";

// 8. Loaders
import copilotLoader from "figma:asset/06b957a6d5437e60ed69b99fca47228844e73887.png";
import copilotOverlayLoader from "figma:asset/f83b4b5d0a764d9f8ec0da866b31f121692bc7e1.png";


// ═══════════════════════════════════════════════════════════════
// Asset manifest — structured data for rendering & downloading
// ═══════════════════════════════════════════════════════════════

interface AssetEntry {
  /** Human-readable name (becomes the downloaded filename) */
  name: string;
  /** Resolved URL from figma:asset import */
  url: string;
  /** Original figma:asset hash for reference */
  hash: string;
  /** Category for grouping */
  category: string;
  /** Which components use this asset */
  usedIn: string;
  /** Note about the Figma name swap, if applicable */
  note?: string;
}

const ASSETS: AssetEntry[] = [
  // ── Participant Avatars ──
  { name: "avatar-aadi", url: avatarAadi, hash: "3c323508...", category: "Avatars", usedIn: "ChatPanel, MeetingStage, ParticipantsPanel, PreJoinPage" },
  { name: "avatar-sarah", url: avatarSarah, hash: "6900c5f1...", category: "Avatars", usedIn: "MeetingPage, MeetingStage, ChatPanel, ParticipantsPanel", note: "Figma variable: imgBabak (SWAPPED)" },
  { name: "avatar-babak", url: avatarBabak, hash: "503fddd7...", category: "Avatars", usedIn: "MeetingPage, MeetingStage, ChatPanel, ParticipantsPanel", note: "Figma variable: imgSarah (SWAPPED)" },
  { name: "avatar-miguel", url: avatarMiguel, hash: "685fc6dc...", category: "Avatars", usedIn: "FocusMode, MeetingStage, MeetingDock, ChatPanel, ParticipantsPanel" },
  { name: "avatar-jessica", url: avatarJessica, hash: "3b6bf95d...", category: "Avatars", usedIn: "MeetingPage, MeetingStage, ChatPanel, ParticipantsPanel" },
  { name: "avatar-ray", url: avatarRay, hash: "a55a7173...", category: "Avatars", usedIn: "MeetingPage, MeetingStage, ChatPanel, ParticipantsPanel" },

  // ── Self-view ──
  { name: "self-view-fallback", url: selfViewFallback, hash: "640d5284...", category: "Self View", usedIn: "PreJoinPage, SelfVideoTile, MeetingDock, FullscreenContentView" },

  // ── Shared Content ──
  { name: "shared-content-portrait", url: sharedContentPortrait, hash: "f3edab33...", category: "Shared Content", usedIn: "MeetingDock, FocusMode, Gallery, MeetingStage" },
  { name: "shared-content-landscape", url: sharedContentLandscape, hash: "935052a8...", category: "Shared Content", usedIn: "FullscreenContentView" },

  // ── Gallery / Stage Tiles ──
  { name: "gallery-tile-miguel", url: galleryTileMiguel, hash: "39154ef6...", category: "Gallery Tiles", usedIn: "Gallery, Stage, Chat panels (as active speaker frame)" },
  { name: "gallery-tile-self", url: galleryTileSelf, hash: "2988dddd...", category: "Gallery Tiles", usedIn: "Gallery, Stage, FocusMode, multiple panels" },
  { name: "gallery-tile-jessica", url: galleryTileJessica, hash: "0e145199...", category: "Gallery Tiles", usedIn: "Gallery, Stage" },
  { name: "gallery-tile-ray", url: galleryTileRay, hash: "c82f00ea...", category: "Gallery Tiles", usedIn: "Gallery, Stage" },
  { name: "gallery-tile-babak", url: galleryTileBabak, hash: "07ed84b0...", category: "Gallery Tiles", usedIn: "Gallery, Stage" },
  { name: "gallery-tile-sarah", url: galleryTileSarah, hash: "8e36951a...", category: "Gallery Tiles", usedIn: "Stage" },
  { name: "gallery-tile-aadi", url: galleryTileAadi, hash: "b7d47865...", category: "Gallery Tiles", usedIn: "Gallery, Stage" },

  // ── Reaction Emojis ──
  { name: "reaction-thumbs-up", url: reactionThumbsUp, hash: "b7bdd4e3...", category: "Reactions", usedIn: "MorePanel" },
  { name: "reaction-red-heart", url: reactionRedHeart, hash: "59520d23...", category: "Reactions", usedIn: "MorePanel" },
  { name: "reaction-clapping-hands", url: reactionClappingHands, hash: "cebe50ea...", category: "Reactions", usedIn: "MorePanel" },
  { name: "reaction-grinning-face", url: reactionGrinningFace, hash: "05be624f...", category: "Reactions", usedIn: "MorePanel" },
  { name: "reaction-raised-hand", url: reactionRaisedHand, hash: "5e065daa...", category: "Reactions", usedIn: "MorePanel" },

  // ── Chat Avatars ──
  { name: "chat-avatar-1", url: chatAvatar1, hash: "ea9d491f...", category: "Chat", usedIn: "ChatPanel" },
  { name: "chat-avatar-2", url: chatAvatar2, hash: "e8b7f3b8...", category: "Chat", usedIn: "ChatPanel" },

  // ── Calendar Page ──
  { name: "calendar-user-avatar", url: calendarUserAvatar, hash: "39f8d225...", category: "Calendar", usedIn: "CalendarPage (IPhoneCalendar)" },
  { name: "calendar-image-1", url: calendarImage1, hash: "74a59744...", category: "Calendar", usedIn: "CalendarPage" },
  { name: "calendar-image-2", url: calendarImage2, hash: "3766ed27...", category: "Calendar", usedIn: "CalendarPage" },
  { name: "calendar-image-3", url: calendarImage3, hash: "49b724f9...", category: "Calendar", usedIn: "CalendarPage" },

  // ── Loaders ──
  { name: "copilot-loader", url: copilotLoader, hash: "06b957a6...", category: "Loaders", usedIn: "CopilotPanel" },
  { name: "copilot-overlay-loader", url: copilotOverlayLoader, hash: "f83b4b5d...", category: "Loaders", usedIn: "CoPilotOverlay variants" },
];


// ═══════════════════════════════════════════════════════════════
// Download helpers
// ═══════════════════════════════════════════════════════════════

async function downloadSingleAsset(asset: AssetEntry) {
  try {
    const response = await fetch(asset.url);
    const blob = await response.blob();
    const ext = blob.type.includes("png") ? "png" : blob.type.includes("gif") ? "gif" : "png";
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${asset.name}.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  } catch (err) {
    console.error(`Failed to download ${asset.name}:`, err);
  }
}

async function downloadAllAssets() {
  for (const asset of ASSETS) {
    await downloadSingleAsset(asset);
    // Small delay between downloads to prevent browser throttling
    await new Promise((r) => setTimeout(r, 300));
  }
}

function generateImportMap(): string {
  const lines = [
    "// ═══════════════════════════════════════════════════════════════",
    "// IMPORT MAP — paste into your Claude Code project",
    "// Place all downloaded .png files in /src/assets/images/",
    "// ═══════════════════════════════════════════════════════════════",
    "",
  ];

  const categories = [...new Set(ASSETS.map((a) => a.category))];
  for (const cat of categories) {
    lines.push(`// ── ${cat} ──`);
    const catAssets = ASSETS.filter((a) => a.category === cat);
    for (const asset of catAssets) {
      const varName = asset.name.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
      lines.push(`import ${varName} from "./images/${asset.name}.png";`);
    }
    lines.push("");
  }

  lines.push("// ── Re-export all ──");
  lines.push("export {");
  for (const asset of ASSETS) {
    const varName = asset.name.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
    lines.push(`  ${varName},`);
  }
  lines.push("};");

  return lines.join("\n");
}

function generateFindReplaceMap(): string {
  const lines = [
    "// ═══════════════════════════════════════════════════════════════",
    "// FIND-AND-REPLACE MAP",
    "// Use these to replace figma:asset imports in your codebase",
    "// ═══════════════════════════════════════════════════════════════",
    "",
  ];

  // Build full hash map
  const fullHashes: Record<string, string> = {
    "3c32350895790815d4b2b05b8bfa873d40c997c2": "avatar-aadi",
    "6900c5f1ebcee87405a464dc927c93633e66e145": "avatar-sarah",
    "503fddd74dcc978ba951b5c79ebe96b95453b1eb": "avatar-babak",
    "685fc6dc030aab2cbea5b15f523d9ce42c11d689": "avatar-miguel",
    "3b6bf95da1f13af67c0b3a5e3c9534b640591ce5": "avatar-jessica",
    "a55a7173204f1d7f74adab6c38113bc9eedbb180": "avatar-ray",
    "640d5284dbe6da2945d294258d914788ad82cac7": "self-view-fallback",
    "f3edab3305d6980218cc52719020bc598b4a6331": "shared-content-portrait",
    "935052a81bb4997885165a5ec2e99fca09fda760": "shared-content-landscape",
    "39154ef67ddaa64702482bb71cb22487de1cf404": "gallery-tile-miguel",
    "2988dddd4762039b89078373be258dc29df8140a": "gallery-tile-self",
    "0e1451995ab75444f4e79c58f872a551ab745d47": "gallery-tile-jessica",
    "c82f00eab4bba2fb354dbe1d896a20e857d5fd3d": "gallery-tile-ray",
    "07ed84b0d7bbe415782fa76088893b674d660f2c": "gallery-tile-babak",
    "8e36951a80a78686e04d2d0c0f40dd88c6f238da": "gallery-tile-sarah",
    "b7d47865ac962c686cb32e819e7b9962113b9b6e": "gallery-tile-aadi",
    "b7bdd4e332f1134cea6b347137499723925005ef": "reaction-thumbs-up",
    "59520d231a783bb20cd3d4f98dfaec2de858b210": "reaction-red-heart",
    "cebe50ea4c5d9b448454b19dd79074e5c5b4d898": "reaction-clapping-hands",
    "05be624ff210f9164b431697c6d21d5e13ab6caa": "reaction-grinning-face",
    "5e065daa3e40aa51484d94e392c06fe496150d5d": "reaction-raised-hand",
    "ea9d491f69be890aca1f172cdb618cb53f9b925e": "chat-avatar-1",
    "e8b7f3b88823f24d90921c51899d4062e10c34ea": "chat-avatar-2",
    "39f8d2250dcd1e98d940778f5ef068f0f871f5a5": "calendar-user-avatar",
    "74a597444da0c5f58ccedb4d9a45a3e290355d89": "calendar-image-1",
    "3766ed276f36257fac7ac6a0951eee527cefec5a": "calendar-image-2",
    "49b724f90fd3dbec8b2d96911ed6960c8d5b85dc": "calendar-image-3",
    "06b957a6d5437e60ed69b99fca47228844e73887": "copilot-loader",
    "f83b4b5d0a764d9f8ec0da866b31f121692bc7e1": "copilot-overlay-loader",
  };

  for (const [hash, name] of Object.entries(fullHashes)) {
    lines.push(`// FIND:    "figma:asset/${hash}.png"`);
    lines.push(`// REPLACE: "@/assets/images/${name}.png"`);
    lines.push("");
  }

  return lines.join("\n");
}


// ═══════════════════════════════════════════════════════════════
// UI Component
// ═══════════════════════════════════════════════════════════════

export function AssetDownloader() {
  const importMapRef = useRef<HTMLTextAreaElement>(null);
  const findReplaceRef = useRef<HTMLTextAreaElement>(null);

  const copyToClipboard = useCallback((ref: React.RefObject<HTMLTextAreaElement | null>) => {
    if (ref.current) {
      ref.current.select();
      navigator.clipboard.writeText(ref.current.value);
    }
  }, []);

  const categories = [...new Set(ASSETS.map((a) => a.category))];

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white p-6" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Header */}
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8">
          <h1 className="text-[28px] mb-2" style={{ fontWeight: 700 }}>
            Asset Downloader
          </h1>
          <p className="text-[#999] text-[14px]">
            All {ASSETS.length} unique raster images from the Teams Mobile prototype.
            Download individually or all at once, then use the import map to wire them into Claude Code.
          </p>
        </div>

        {/* Action bar */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <button
            onClick={downloadAllAssets}
            className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-5 py-2.5 rounded-lg text-[14px] transition-colors"
            style={{ fontWeight: 600 }}
          >
            Download All {ASSETS.length} Assets
          </button>
          <button
            onClick={() => {
              const text = generateImportMap();
              navigator.clipboard.writeText(text);
            }}
            className="bg-[#2a2a4a] hover:bg-[#3a3a5a] text-white px-5 py-2.5 rounded-lg text-[14px] border border-[#444] transition-colors"
            style={{ fontWeight: 500 }}
          >
            Copy Import Map
          </button>
          <button
            onClick={() => {
              const text = generateFindReplaceMap();
              navigator.clipboard.writeText(text);
            }}
            className="bg-[#2a2a4a] hover:bg-[#3a3a5a] text-white px-5 py-2.5 rounded-lg text-[14px] border border-[#444] transition-colors"
            style={{ fontWeight: 500 }}
          >
            Copy Find-Replace Map
          </button>
        </div>

        {/* Asset grid by category */}
        {categories.map((cat) => (
          <div key={cat} className="mb-10">
            <h2 className="text-[18px] mb-4 text-[#c4b5fd]" style={{ fontWeight: 600 }}>
              {cat}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {ASSETS.filter((a) => a.category === cat).map((asset) => (
                <div
                  key={asset.name}
                  className="bg-[#2a2a4a] rounded-xl overflow-hidden border border-[#333] hover:border-[#7c3aed] transition-colors group"
                >
                  {/* Image preview */}
                  <div className="aspect-square bg-[#111] flex items-center justify-center p-3 relative">
                    <img
                      src={asset.url}
                      alt={asset.name}
                      className="max-w-full max-h-full object-contain rounded"
                    />
                    {/* Download overlay on hover */}
                    <button
                      onClick={() => downloadSingleAsset(asset)}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </button>
                  </div>
                  {/* Info */}
                  <div className="p-3">
                    <p className="text-[12px] text-white truncate" style={{ fontWeight: 600 }}>
                      {asset.name}.png
                    </p>
                    <p className="text-[10px] text-[#888] mt-1 truncate">
                      {asset.usedIn}
                    </p>
                    {asset.note && (
                      <p className="text-[10px] text-[#f59e0b] mt-1">
                        {asset.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Import Map textarea */}
        <div className="mt-12 mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[18px] text-[#c4b5fd]" style={{ fontWeight: 600 }}>
              Import Map (for /src/assets/index.ts)
            </h2>
            <button
              onClick={() => copyToClipboard(importMapRef)}
              className="text-[12px] text-[#7c3aed] hover:text-[#a78bfa] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Copy
            </button>
          </div>
          <textarea
            ref={importMapRef}
            readOnly
            value={generateImportMap()}
            className="w-full h-[300px] bg-[#111] text-[#e2e8f0] text-[12px] p-4 rounded-lg border border-[#333] font-mono resize-y"
          />
        </div>

        {/* Find-Replace Map textarea */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[18px] text-[#c4b5fd]" style={{ fontWeight: 600 }}>
              Find-Replace Map (figma:asset → local paths)
            </h2>
            <button
              onClick={() => copyToClipboard(findReplaceRef)}
              className="text-[12px] text-[#7c3aed] hover:text-[#a78bfa] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Copy
            </button>
          </div>
          <textarea
            ref={findReplaceRef}
            readOnly
            value={generateFindReplaceMap()}
            className="w-full h-[300px] bg-[#111] text-[#e2e8f0] text-[12px] p-4 rounded-lg border border-[#333] font-mono resize-y"
          />
        </div>

        {/* Resolved URLs table — so user can also just grab raw URLs */}
        <div className="mb-12">
          <h2 className="text-[18px] text-[#c4b5fd] mb-3" style={{ fontWeight: 600 }}>
            Resolved URLs
          </h2>
          <p className="text-[12px] text-[#888] mb-4">
            These are the actual CDN URLs that figma:asset resolves to at runtime. You can also curl/wget these directly.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px] border-collapse">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left py-2 px-3 text-[#888]" style={{ fontWeight: 500 }}>Filename</th>
                  <th className="text-left py-2 px-3 text-[#888]" style={{ fontWeight: 500 }}>Resolved URL</th>
                </tr>
              </thead>
              <tbody>
                {ASSETS.map((asset) => (
                  <tr key={asset.name} className="border-b border-[#222] hover:bg-[#2a2a4a]">
                    <td className="py-2 px-3 text-white whitespace-nowrap" style={{ fontWeight: 500 }}>
                      {asset.name}.png
                    </td>
                    <td className="py-2 px-3">
                      <a
                        href={asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7c3aed] hover:text-[#a78bfa] break-all"
                      >
                        {asset.url}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetDownloader;
