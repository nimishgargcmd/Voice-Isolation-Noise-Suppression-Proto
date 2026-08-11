import svgPaths from "./svg-doqwhm37wm";

function Icon16X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (16x16)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (16x16)">
          <path d={svgPaths.p2bb78e00} fill="var(--fill-0, #FFB900)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb900] text-[17px] tracking-[-0.41px]">
        <p className="css-ew64yg leading-[22px]">3</p>
      </div>
      <Icon16X />
    </div>
  );
}

function Chevron() {
  return (
    <div className="absolute left-[43px] size-[24px] top-0" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron">
          <path d={svgPaths.p1672c300} fill="var(--fill-0, #FFB900)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Chevron1() {
  return (
    <div className="absolute left-[117px] size-[24px] top-0" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron">
          <path d={svgPaths.p1672c300} fill="var(--fill-0, #FFB900)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[195px]">
      <div className="absolute css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[13px] text-white top-[12px] tracking-[-0.08px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[18px]">Aadi K</p>
      </div>
      <Chevron />
      <div className="absolute css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[71px] not-italic text-[13px] text-white top-[12px] tracking-[-0.08px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[18px]">Beth D</p>
      </div>
      <Chevron1 />
      <div className="absolute css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[145px] not-italic text-[13px] text-white top-[12px] tracking-[-0.08px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[18px]">Babak S</p>
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame />
      <Frame2 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Section 2">
      <Line />
    </div>
  );
}

function PrimaryBanner() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-h-px min-w-px relative" data-name="Primary - Banner">
      <Section />
    </div>
  );
}

function PillButtonTeams2IOs() {
  return (
    <div className="bg-[rgba(255,200,0,0.2)] content-stretch flex h-[40px] items-center justify-center overflow-clip px-0 py-[8px] relative rounded-[9999px] shrink-0 w-full" data-name="Pill button (Teams 2 iOS)">
      <PrimaryBanner />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative shrink-0 w-[393px]">
      <PillButtonTeams2IOs />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="css-ew64yg font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#bebebe] text-[11px] text-center tracking-[-0.24px]">13 min</p>
    </div>
  );
}

function PillButtonTeams2IOs1() {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] h-[20px] relative rounded-[9999px] shrink-0 w-[45px]" data-name="Pill button (Teams 2 iOS)">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <Content />
      </div>
      <div aria-hidden="true" className="absolute border border-[#37ef46] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="css-ew64yg font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[11px] text-center text-white tracking-[-0.24px]">Timer topic name #1</p>
    </div>
  );
}

function PillButtonTeams2IOs2() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Pill button (Teams 2 iOS)">
      <PillButtonTeams2IOs1 />
      <Content1 />
    </div>
  );
}

function Shield() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Shield">
          <path d={svgPaths.p1a5b6770} fill="var(--fill-0, #7F85F5)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Shield1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Shield">
          <path d={svgPaths.p22389000} fill="var(--fill-0, #CC4A31)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Recording() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Recording">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Recording">
          <path d={svgPaths.p38f1da00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function NotificationBadge() {
  return (
    <div className="bg-[#7f85f5] h-[12.8px] relative rounded-[80.002px] shrink-0 w-full" data-name="Notification badge">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[4.8px] py-0 relative size-full">
          <p className="css-ew64yg font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] not-italic relative shrink-0 text-[8.8px] text-black text-center tracking-[0.048px]">+6</p>
        </div>
      </div>
    </div>
  );
}

function Recording1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-px relative shrink-0" data-name="Recording">
      <NotificationBadge />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[7px] items-end relative shrink-0">
      <Shield />
      <Shield1 />
      <Recording />
      <Recording1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <Frame1 />
    </div>
  );
}

function PillButtonTeams2IOs3() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] content-stretch flex h-[36px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Pill button (Teams 2 iOS)">
      <Content2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[385px]">
      <PillButtonTeams2IOs2 />
      <PillButtonTeams2IOs3 />
    </div>
  );
}

function SecondaryHeaderRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="Secondary header row">
      <div className="content-stretch flex flex-col items-start px-[8px] py-0 relative w-full">
        <Frame3 />
      </div>
    </div>
  );
}

function AdditionalInformationLayer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Additional information layer">
      <SecondaryHeaderRow />
    </div>
  );
}

export default function AdditionalInformationLayer1() {
  return (
    <div className="bg-[#0a0604] content-stretch flex flex-col gap-[10px] items-start px-0 py-[4px] relative size-full" data-name="Additional information layer">
      <Frame4 />
      <AdditionalInformationLayer />
    </div>
  );
}