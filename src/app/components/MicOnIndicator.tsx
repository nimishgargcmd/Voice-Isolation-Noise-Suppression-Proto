import React from "react";
import { MicOnIcon } from "@/app/components/MicOnIcon";

export function MicOnIndicator() {
  return (
    <div className="w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-[4px] bg-black/60">
      <MicOnIcon size={12} color="#37EF46" />
    </div>
  );
}
