import svgPaths from "./svg-ohuyiijav8";

function Icon24X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p4aa6d00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Call information</p>
      </div>
    </div>
  );
}

function AccessoryText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Accessory + Text">
      <Icon24X />
      <Text />
    </div>
  );
}

export default function Left() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Left">
      <AccessoryText />
    </div>
  );
}