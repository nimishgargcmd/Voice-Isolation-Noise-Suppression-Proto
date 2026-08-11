import svgPaths from "./svg-unik707tki";

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#bebebe] text-[11px] text-center tracking-[-0.24px]">13 min</p>
    </div>
  );
}

function PillButtonTeams2IOs() {
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
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[11px] text-center text-white tracking-[-0.24px]">Blockers on Easter campaign timeline</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <PillButtonTeams2IOs />
      <Content1 />
    </div>
  );
}

function TimerPill() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px]" data-name="Timer pill">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <Frame3 />
        </div>
      </div>
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

function NotificationBadge() {
  return (
    <div className="bg-[#7f85f5] h-[12.8px] relative rounded-[80.002px] shrink-0 w-full" data-name="Notification badge">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[4.8px] relative size-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] not-italic relative shrink-0 text-[8.8px] text-black text-center tracking-[0.048px]">+1</p>
        </div>
      </div>
    </div>
  );
}

function Recording() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-px relative shrink-0" data-name="Recording">
      <NotificationBadge />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <Shield />
      <Recording />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <Frame />
    </div>
  );
}

function NotificationPill() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] content-stretch flex h-[36px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="notification pill">
      <Content2 />
    </div>
  );
}

function SecondaryHeaderRow1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[393px]" data-name="Secondary header row">
      <TimerPill />
      <NotificationPill />
    </div>
  );
}

function SecondaryHeaderRow() {
  return (
    <div className="h-[36px] relative shrink-0 w-[393px]" data-name="Secondary header row">
      <SecondaryHeaderRow1 />
    </div>
  );
}

function AdditionalInfoLayer() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-371px)] top-[105px] w-[393px]" data-name="AdditionalInfoLayer">
      <SecondaryHeaderRow />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#bebebe] text-[11px] text-center tracking-[-0.24px]">13 min</p>
    </div>
  );
}

function PillButtonTeams2IOs1() {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] h-[20px] relative rounded-[9999px] shrink-0 w-[45px]" data-name="Pill button (Teams 2 iOS)">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <Content3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#37ef46] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[11px] text-center text-white tracking-[-0.24px]">Blockers on Easter campaign timeline</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <PillButtonTeams2IOs1 />
      <Content4 />
    </div>
  );
}

function TimerPill1() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px]" data-name="Timer pill">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <Frame4 />
        </div>
      </div>
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

function Shield2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Recording">
          <path d={svgPaths.p38f1da00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Shield3() {
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

function NotificationBadge1() {
  return (
    <div className="bg-[#7f85f5] h-[12.8px] relative rounded-[80.002px] shrink-0 w-full" data-name="Notification badge">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[4.8px] relative size-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] not-italic relative shrink-0 text-[8.8px] text-black text-center tracking-[0.048px]">+3</p>
        </div>
      </div>
    </div>
  );
}

function Recording1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-px relative shrink-0" data-name="Recording">
      <NotificationBadge1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <Shield3 />
      <Recording1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[7px] items-end relative shrink-0">
      <Shield1 />
      <Shield2 />
      <Frame6 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <Frame1 />
    </div>
  );
}

function NotificationPill1() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] content-stretch flex h-[36px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="notification pill">
      <Content5 />
    </div>
  );
}

function SecondaryHeaderRow3() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[393px]" data-name="Secondary header row">
      <TimerPill1 />
      <NotificationPill1 />
    </div>
  );
}

function SecondaryHeaderRow2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[393px]" data-name="Secondary header row">
      <SecondaryHeaderRow3 />
    </div>
  );
}

function AdditionalInfoLayer1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-371px)] top-[172px] w-[393px]" data-name="AdditionalInfoLayer">
      <SecondaryHeaderRow2 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#bebebe] text-[11px] text-center tracking-[-0.24px]">13 min</p>
    </div>
  );
}

function PillButtonTeams2IOs2() {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] h-[20px] relative rounded-[9999px] shrink-0 w-[45px]" data-name="Pill button (Teams 2 iOS)">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <Content6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#37ef46] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[11px] text-center text-white tracking-[-0.24px]">Blockers on Easter campaign timeline</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <PillButtonTeams2IOs2 />
      <Content7 />
    </div>
  );
}

function TimerPill2() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px]" data-name="Timer pill">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function SecondaryHeaderRow5() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[393px]" data-name="Secondary header row">
      <TimerPill2 />
    </div>
  );
}

function SecondaryHeaderRow4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Secondary header row">
      <SecondaryHeaderRow5 />
    </div>
  );
}

function AdditionalInfoLayer2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-371px)] top-[38px] w-[393px]" data-name="AdditionalInfoLayer">
      <SecondaryHeaderRow4 />
    </div>
  );
}

export default function SingleRow() {
  return (
    <div className="bg-white relative size-full" data-name="Single row">
      <AdditionalInfoLayer />
      <AdditionalInfoLayer1 />
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] left-[429px] text-[12px] text-black top-[46px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        When only timer exists, and no notifications
      </p>
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] left-[429px] text-[12px] text-black top-[113px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        When first notification arrives
      </p>
      <div className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] left-[429px] text-[12px] text-black top-[180px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">When multiple notification have accumulated in hub</p>
        <p>including the ones for recording started and guest in lobby</p>
      </div>
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] left-[877px] text-[18px] text-black top-[141px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        When no one is raising hands
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[14px] left-[877px] text-[30px] text-black top-[105px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Single row
      </p>
      <AdditionalInfoLayer2 />
    </div>
  );
}