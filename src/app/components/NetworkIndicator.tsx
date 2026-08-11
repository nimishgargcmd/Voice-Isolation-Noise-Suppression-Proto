import React from "react";

/**
 * Network Strength Indicator - Shows network connection strength
 * Appears on the self video tile in the top-right corner
 */
export function NetworkIndicator() {
  return (
    <div className="w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-[4px] bg-black/60">
      {/* Network bars */}
      <div className="flex items-end gap-[2px] h-[10px]">
        {/* Left bar - shortest */}
        <div className="w-[2px] h-[4px] bg-white rounded-[22px]" />
        
        {/* Middle bar - medium */}
        <div className="w-[2px] h-[7px] bg-white rounded-[22px]" />
        
        {/* Right bar - tallest with opacity */}
        <div className="w-[2px] h-[10px] bg-white/30 rounded-[22px]" />
      </div>
    </div>
  );
}