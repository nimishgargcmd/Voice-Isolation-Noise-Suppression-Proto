import svgPaths from "./svg-jj55k4btsr";

function Icon24X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p366d01f0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Speaker audio</p>
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
        <g id="Chevron">
          <path d={svgPaths.pf4077f0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Chevron1() {
  return (
    <div className="relative size-[12px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Chevron">
          <path d={svgPaths.pf4077f0} fill="var(--fill-0, white)" id="Shape" />
        </g>
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
          <path d={svgPaths.p2703a100} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Background effects</p>
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

function Icon24X2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p3ee99080} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Put me on hold</p>
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

function BorderBottom2() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[15.96px]" data-name="Border bottom">
      <div className="absolute bg-[rgba(255,255,255,0.2)] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
    </div>
  );
}

function OneLine2() {
  return (
    <div className="relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[14px] relative w-full">
          <Container2 />
          <BorderBottom2 />
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
          <path d={svgPaths.p1b7cba00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Turn on RTT for this meeting</p>
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

function OneLine3() {
  return (
    <div className="relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[14px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Icon24X4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p421bbf0} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Language settings</p>
      </div>
    </div>
  );
}

function AccessoryText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Accessory + Text">
      <Icon24X4 />
      <Text4 />
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[293px]" data-name="Left">
      <AccessoryText4 />
    </div>
  );
}

function Right3() {
  return <div className="content-stretch flex gap-[4px] h-[24px] items-center justify-end shrink-0" data-name="Right" />;
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Left4 />
      <Right3 />
    </div>
  );
}

function OneLine4() {
  return (
    <div className="relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[14px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Icon24X5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p1e730880} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">Lock the meeting</p>
      </div>
    </div>
  );
}

function AccessoryText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Accessory + Text">
      <Icon24X5 />
      <Text5 />
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[293px]" data-name="Left">
      <AccessoryText5 />
    </div>
  );
}

function Right4() {
  return <div className="content-stretch flex gap-[4px] h-[24px] items-center justify-end shrink-0" data-name="Right" />;
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Left5 />
      <Right4 />
    </div>
  );
}

function OneLine5() {
  return (
    <div className="relative shrink-0 w-full" data-name="One-line">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[14px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

export default function MeetingSettingsL() {
  return (
    <div className="bg-[rgba(36,36,37,0.7)] content-stretch flex flex-col items-start overflow-clip py-[2px] relative rounded-[24px] size-full" data-name="Meeting settings L2">
      <OneLine />
      <OneLine1 />
      <OneLine2 />
      <OneLine3 />
      <OneLine4 />
      <OneLine5 />
    </div>
  );
}