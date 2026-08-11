import React from "react";
import svgPaths from "@/imports/svg-xdgvc4qmw1";

interface MicOffIconProps {
  size: number;
  color: string;
}

export function MicOffIcon({ size, color }: MicOffIconProps) {
  return (
    <svg
      style={{ width: size, height: size, display: "block" }}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path d={svgPaths.p37cc6c80} fill={color} />
    </svg>
  );
}
