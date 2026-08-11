import React from "react";
import svgPaths from "@/imports/svg-y0lvar4jnx";

interface MicOnIconProps {
  size: number;
  color: string;
}

export function MicOnIcon({ size, color }: MicOnIconProps) {
  return (
    <svg
      style={{ width: size, height: size, display: "block" }}
      fill="none"
      viewBox="0 0 9 12"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d={svgPaths.p1fdcf480} fill={color} />
    </svg>
  );
}
