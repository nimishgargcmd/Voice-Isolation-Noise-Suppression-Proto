import React from "react";
import videoOffPaths from "@/imports/svg-kyq22xtsb0";

export function VideoOffIcon({ width, height, color = "white" }: { width: number; height: number; color?: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 28" fill="none" style={{ display: "block", flexShrink: 0 }}>
      <path d={videoOffPaths.p3ba5cb80} fill={color} />
    </svg>
  );
}
