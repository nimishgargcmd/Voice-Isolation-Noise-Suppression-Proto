import svgPaths from "./svg-b9093hdo2f";

function Mask() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[1000px]" data-name="Shape" />
    </div>
  );
}

function Blur() {
  return <div className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.04)] blur-[10px] inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur1() {
  return (
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <Mask />
      <Blur />
    </div>
  );
}

function Fill() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute bg-[#181818] inset-0 rounded-[296px]" />
      </div>
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 opacity-50 rounded-[296px]" data-name="Glass Effect" />;
}

function Bg() {
  return (
    <div className="absolute left-0 opacity-0 size-[44px] top-0" data-name="BG">
      <Blur1 />
      <Fill />
      <GlassEffect />
    </div>
  );
}

function Chevron() {
  return (
    <div className="absolute h-[24px] left-[22.73%] overflow-clip right-[22.73%] top-[10px]" data-name="Chevron">
      <div className="absolute h-[16px] left-[calc(50%-0.63px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[8.75px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 16">
          <path d={svgPaths.p4dacf00} fill="var(--fill-0, #F3F3F3)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Back() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Back">
      <Bg />
      <Chevron />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#f1f1f1] text-[15px] text-ellipsis tracking-[-0.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[20px] overflow-hidden">Marketing Team Sync</p>
      </div>
      <div className="h-[12px] relative shrink-0 w-[10px]" data-name="Shape">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(225, 225, 225, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
            <path d={svgPaths.pc2956c0} fill="var(--fill-0, #E1E1E1)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Subtext() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Subtext">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#bfbfbf] text-[12px] text-ellipsis tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[13px] overflow-hidden">15:30</p>
      </div>
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #BFBFBF)" id="Ellipse 26593" r="1.5" />
        </svg>
      </div>
      <div className="css-g0mm18 flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#bfbfbf] text-[12px] text-ellipsis tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[13px] overflow-hidden">12 in call</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <Title />
      <Subtext />
    </div>
  );
}

function TitleSubtext() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Title+subtext">
      <Container />
    </div>
  );
}

function MeetingTitle() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Meeting title">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-0 pr-[16px] py-0 relative w-full">
          <TitleSubtext />
        </div>
      </div>
    </div>
  );
}

function Tint() {
  return (
    <div className="absolute inset-0 rounded-[1000px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.1),0px_1px_8px_0px_rgba(0,0,0,0.12)]" data-name="Tint">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[1000px]">
        <div className="absolute bg-[rgba(255,255,255,0.5)] inset-0 rounded-[1000px]" />
        <div className="absolute bg-white inset-0 mix-blend-saturation rounded-[1000px]" />
        <div className="absolute bg-[#999] inset-0 mix-blend-overlay rounded-[1000px]" />
        <div className="absolute bg-[#ff000d] inset-0 rounded-[1000px]" />
      </div>
    </div>
  );
}

function GlassEffect1() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Leave() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]" data-name="Leave">
      <Tint />
      <GlassEffect1 />
    </div>
  );
}

function CallEnd() {
  return (
    <div className="col-1 ml-[10px] mt-[11px] relative row-1 size-[20px]" data-name="Call End">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_17_2786)" id="Call End">
          <path d={svgPaths.p9f8d780} fill="var(--fill-0, white)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_17_2786">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Leave />
      <CallEnd />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 size-[40px]">
      <Group />
    </div>
  );
}

function Header() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[0px_4px] items-center justify-center min-h-px min-w-px relative w-full" data-name="Header">
      <Back />
      <MeetingTitle />
      <Frame />
    </div>
  );
}

export default function Header1() {
  return (
    <div className="bg-[#0a0604] content-stretch flex flex-col items-center justify-center pl-[4px] pr-[16px] py-[4px] relative size-full" data-name="Header">
      <Header />
    </div>
  );
}