import React from "react";
import svgPaths from "@/imports/svg-dhve1aoycu";

export function VideoOnIcon({ width, height, color = "white" }: { width: number; height: number; color?: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20.0017 14" fill="none" style={{ display: "block", flexShrink: 0 }}>
      <path d={svgPaths.pbbefd80} fill={color} />
    </svg>
  );
}
