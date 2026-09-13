import { Smartphone, UserRound, CornerUpRight } from "lucide-react";

export function DesktopFriendlyIcon() {
  return (
    <span className="relative inline-flex size-[24px] shrink-0 text-fy27-icon-primary" aria-hidden="true">
      <Smartphone size={24} strokeWidth={1.5} className="absolute left-[-4px]" />
      <UserRound size={10} strokeWidth={1.5} className="absolute left-[3px] top-[6px]" />
      <CornerUpRight size={13} strokeWidth={1.7} className="absolute right-[-3px] top-[5px] bg-fy27-surface" />
    </span>
  );
}