import svgPaths from "@/imports/svg-yblxi66xkj";

type DesktopIconProps = {
  size?: number;
  className?: string;
};

/** Fluent Desktop 24 Regular. */
export function DesktopIcon({ size = 24, className }: DesktopIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={{ display: "block" }} aria-hidden="true">
      <path d={svgPaths.pf1a6a00} fill="currentColor" />
    </svg>
  );
}
