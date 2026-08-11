import svgPaths from "./svg-dr4wj00flk";

function Icon24X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p1f882200} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">Share PowerPoint</p>
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

function Left() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[284px]" data-name="Left">
      <AccessoryText />
    </div>
  );
}

function Chevron() {
  return (
    <div className="relative size-[12px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron" />
      </svg>
    </div>
  );
}

function Chevron1() {
  return (
    <div className="relative size-[12px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron" />
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Left />
      <div className="absolute flex items-center justify-center left-[315px] size-[12px] top-[109px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Chevron />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[315px] size-[12px] top-[58px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Chevron1 />
        </div>
      </div>
    </div>
  );
}

function BorderBottom() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[15.96px]" data-name="Border bottom">
      <div className="absolute bg-[rgba(255,255,255,0.2)] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
    </div>
  );
}

function OneLine() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <Container />
          <BorderBottom />
        </div>
      </div>
    </div>
  );
}

function BorderBottom1() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[15.96px]" data-name="Border bottom">
      <div className="absolute bg-[rgba(255,255,255,0.2)] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
    </div>
  );
}

function Icon24X1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p2444ec80} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">Share photo</p>
      </div>
    </div>
  );
}

function AccessoryText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Accessory + Text">
      <Icon24X1 />
      <Text1 />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[293px]" data-name="Left">
      <AccessoryText1 />
    </div>
  );
}

function Right() {
  return <div className="content-stretch flex gap-[4px] h-[24px] items-center justify-end shrink-0" data-name="Right" />;
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Left1 />
      <Right />
    </div>
  );
}

function OneLine1() {
  return (
    <div className="relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[14px] relative w-full">
          <BorderBottom1 />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function BorderBottom2() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[15.96px]" data-name="Border bottom">
      <div className="absolute bg-[rgba(255,255,255,0.2)] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
    </div>
  );
}

function Icon24X2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p6f85b80} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">Share video</p>
      </div>
    </div>
  );
}

function AccessoryText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Accessory + Text">
      <Icon24X2 />
      <Text2 />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[293px]" data-name="Left">
      <AccessoryText2 />
    </div>
  );
}

function Right1() {
  return <div className="content-stretch flex gap-[4px] h-[24px] items-center justify-end shrink-0" data-name="Right" />;
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Left2 />
      <Right1 />
    </div>
  );
}

function OneLine2() {
  return (
    <div className="relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[14px] relative w-full">
          <BorderBottom2 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Icon24X3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p13afc980} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">Share screen</p>
      </div>
    </div>
  );
}

function AccessoryText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Accessory + Text">
      <Icon24X3 />
      <Text3 />
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[293px]" data-name="Left">
      <AccessoryText3 />
    </div>
  );
}

function Right2() {
  return <div className="content-stretch flex gap-[4px] h-[24px] items-center justify-end shrink-0" data-name="Right" />;
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Left3 />
      <Right2 />
    </div>
  );
}

function BorderBottom3() {
  return <div className="absolute bottom-0 h-px left-0 right-[15.96px]" data-name="Border bottom" />;
}

function OneLine3() {
  return (
    <div className="relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[14px] relative w-full">
          <Container3 />
          <BorderBottom3 />
        </div>
      </div>
    </div>
  );
}

export default function ShareL() {
  return (
    <div className="bg-[rgba(36,36,37,0.7)] content-stretch flex flex-col items-start overflow-clip py-[2px] relative rounded-[24px] size-full" data-name="Share L2">
      <OneLine />
      <OneLine1 />
      <OneLine2 />
      <OneLine3 />
    </div>
  );
}