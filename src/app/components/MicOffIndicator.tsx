import React from "react";
import { MicOffIcon } from "@/app/components/MicOffIcon";

export function MicOffIndicator() {
  return (
    <div className="w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-[4px] bg-black/60">
      <MicOffIcon size={14} color="#FF5F3D" />
    </div>
  );
}
