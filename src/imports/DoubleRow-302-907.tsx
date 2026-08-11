import svgPaths from "./svg-srurnus160";

function Icon16X() {
  return (
    <div className="-translate-y-1/2 absolute left-[16.5px] size-[24px] top-1/2" data-name="Icon (16x16)">
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
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb900] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">1</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[18px]">You</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb900] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">2</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame8 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[18px]">Aadi K</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb900] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">3</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame9 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[18px]">Babak S</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb900] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">4</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame10 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[18px]">Miguel S</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb900] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">5</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame11 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[18px]">Jessica K</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function PrimaryBanner() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Primary - Banner">
      <Frame13 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[48px] overflow-x-auto overflow-y-clip top-1/2 w-[326px]">
      <PrimaryBanner />
    </div>
  );
}

function RaisedHandsRow() {
  return (
    <div className="bg-[rgba(255,200,0,0.2)] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Raised hands row">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Icon16X />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

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

function Frame12() {
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
          <Frame12 />
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
          <path d={svgPaths.p22389000} fill="var(--fill-0, #CC4A31)" id="Shape" />
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
          <path d={svgPaths.p38f1da00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Shield2() {
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
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] not-italic relative shrink-0 text-[8.8px] text-black text-center tracking-[0.048px]">+3</p>
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

function Frame20() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <Shield2 />
      <Recording />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[7px] items-end relative shrink-0">
      <Shield />
      <Shield1 />
      <Frame20 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <Frame3 />
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
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-[calc(50%+7px)] top-[413px] w-[393px]" data-name="AdditionalInfoLayer">
      <RaisedHandsRow />
      <SecondaryHeaderRow />
    </div>
  );
}

function Icon16X1() {
  return (
    <div className="-translate-y-1/2 absolute left-[16.5px] size-[24px] top-1/2" data-name="Icon (16x16)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (16x16)">
          <path d={svgPaths.p2bb78e00} fill="var(--fill-0, #FFB900)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb900] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">1</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame1 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[18px]">You</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb900] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">2</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame25 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[18px]">Aadi K</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb900] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">3</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame27 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[18px]">Babak S</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <Frame23 />
      <Frame24 />
      <Frame26 />
    </div>
  );
}

function PrimaryBanner1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Primary - Banner">
      <Frame22 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] overflow-x-auto overflow-y-clip top-1/2 w-[326px]">
      <PrimaryBanner1 />
    </div>
  );
}

function RaisedHandsRow1() {
  return (
    <div className="bg-[rgba(255,200,0,0.2)] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Raised hands row">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Icon16X1 />
          <Frame21 />
        </div>
      </div>
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

function Frame28() {
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
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Shield3() {
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

function Shield4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Shield">
          <path d={svgPaths.p38f1da00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Shield5() {
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

function Frame29() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <Shield5 />
      <Recording1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[7px] items-end relative shrink-0">
      <Shield3 />
      <Shield4 />
      <Frame29 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <Frame4 />
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
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-[calc(50%+7px)] top-[292px] w-[393px]" data-name="AdditionalInfoLayer">
      <RaisedHandsRow1 />
      <SecondaryHeaderRow2 />
    </div>
  );
}

function Icon16X2() {
  return (
    <div className="-translate-y-1/2 absolute left-[16.5px] size-[24px] top-1/2" data-name="Icon (16x16)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (16x16)">
          <path d={svgPaths.p2bb78e00} fill="var(--fill-0, #FFB900)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb900] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">1</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame2 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[18px]">You</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffb900] text-[17px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">2</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame34 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[18px]">Aadi K</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function PrimaryBanner2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Primary - Banner">
      <Frame31 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] overflow-x-auto overflow-y-clip top-1/2 w-[326px]">
      <PrimaryBanner2 />
    </div>
  );
}

function RaisedHandsRow2() {
  return (
    <div className="bg-[rgba(255,200,0,0.2)] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Raised hands row">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Icon16X2 />
          <Frame30 />
        </div>
      </div>
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

function Frame35() {
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
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function Shield6() {
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

function Shield7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Shield">
          <path d={svgPaths.p38f1da00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Shield8() {
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

function NotificationBadge2() {
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

function Recording2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-px relative shrink-0" data-name="Recording">
      <NotificationBadge2 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <Shield8 />
      <Recording2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[7px] items-end relative shrink-0">
      <Shield6 />
      <Shield7 />
      <Frame36 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <Frame5 />
    </div>
  );
}

function NotificationPill2() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] content-stretch flex h-[36px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="notification pill">
      <Content8 />
    </div>
  );
}

function SecondaryHeaderRow5() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[393px]" data-name="Secondary header row">
      <TimerPill2 />
      <NotificationPill2 />
    </div>
  );
}

function SecondaryHeaderRow4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[393px]" data-name="Secondary header row">
      <SecondaryHeaderRow5 />
    </div>
  );
}

function AdditionalInfoLayer2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-[calc(50%+7px)] top-[172px] w-[393px]" data-name="AdditionalInfoLayer">
      <RaisedHandsRow2 />
      <SecondaryHeaderRow4 />
    </div>
  );
}

function Icon16X3() {
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

function Frame38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[18px]">You raised hand</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Icon16X3 />
      <Frame38 />
    </div>
  );
}

function PrimaryBanner3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0" data-name="Primary - Banner">
      <Frame37 />
    </div>
  );
}

function RaisedHandsRow3() {
  return (
    <div className="bg-[rgba(255,200,0,0.2)] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Raised hands row">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <PrimaryBanner3 />
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#bebebe] text-[11px] text-center tracking-[-0.24px]">13 min</p>
    </div>
  );
}

function PillButtonTeams2IOs3() {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] h-[20px] relative rounded-[9999px] shrink-0 w-[45px]" data-name="Pill button (Teams 2 iOS)">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <Content9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#37ef46] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[11px] text-center text-white tracking-[-0.24px]">Blockers on Easter campaign timeline</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <PillButtonTeams2IOs3 />
      <Content10 />
    </div>
  );
}

function TimerPill3() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px]" data-name="Timer pill">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <Frame39 />
        </div>
      </div>
    </div>
  );
}

function Shield9() {
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

function Shield10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Shield">
          <path d={svgPaths.p38f1da00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Shield11() {
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

function NotificationBadge3() {
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

function Recording3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-px relative shrink-0" data-name="Recording">
      <NotificationBadge3 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <Shield11 />
      <Recording3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[7px] items-end relative shrink-0">
      <Shield9 />
      <Shield10 />
      <Frame40 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <Frame6 />
    </div>
  );
}

function NotificationPill3() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] content-stretch flex h-[36px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="notification pill">
      <Content11 />
    </div>
  );
}

function SecondaryHeaderRow7() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[393px]" data-name="Secondary header row">
      <TimerPill3 />
      <NotificationPill3 />
    </div>
  );
}

function SecondaryHeaderRow6() {
  return (
    <div className="h-[36px] relative shrink-0 w-[393px]" data-name="Secondary header row">
      <SecondaryHeaderRow7 />
    </div>
  );
}

function AdditionalInfoLayer3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-[calc(50%-416px)] top-[52px] w-[393px]" data-name="AdditionalInfoLayer">
      <RaisedHandsRow3 />
      <SecondaryHeaderRow6 />
    </div>
  );
}

function Icon16X4() {
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

function Frame42() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[18px]">Babak S raised hand</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Icon16X4 />
      <Frame42 />
    </div>
  );
}

function PrimaryBanner4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0" data-name="Primary - Banner">
      <Frame41 />
    </div>
  );
}

function RaisedHandsRow4() {
  return (
    <div className="bg-[rgba(255,200,0,0.2)] h-[40px] relative rounded-[9999px] shrink-0 w-full" data-name="Raised hands row">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <PrimaryBanner4 />
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#bebebe] text-[11px] text-center tracking-[-0.24px]">13 min</p>
    </div>
  );
}

function PillButtonTeams2IOs4() {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] h-[20px] relative rounded-[9999px] shrink-0 w-[45px]" data-name="Pill button (Teams 2 iOS)">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <Content12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#37ef46] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[11px] text-center text-white tracking-[-0.24px]">Blockers on Easter campaign timeline</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <PillButtonTeams2IOs4 />
      <Content13 />
    </div>
  );
}

function TimerPill4() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px]" data-name="Timer pill">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function Shield12() {
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

function Shield13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Shield">
          <path d={svgPaths.p38f1da00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Shield14() {
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

function NotificationBadge4() {
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

function Recording4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-px relative shrink-0" data-name="Recording">
      <NotificationBadge4 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-end relative shrink-0">
      <Shield14 />
      <Recording4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[7px] items-end relative shrink-0">
      <Shield12 />
      <Shield13 />
      <Frame44 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <Frame7 />
    </div>
  );
}

function NotificationPill4() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] content-stretch flex h-[36px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="notification pill">
      <Content14 />
    </div>
  );
}

function SecondaryHeaderRow9() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[393px]" data-name="Secondary header row">
      <TimerPill4 />
      <NotificationPill4 />
    </div>
  );
}

function SecondaryHeaderRow8() {
  return (
    <div className="h-[36px] relative shrink-0 w-[393px]" data-name="Secondary header row">
      <SecondaryHeaderRow9 />
    </div>
  );
}

function AdditionalInfoLayer4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-[calc(50%+7px)] top-[52px] w-[393px]" data-name="AdditionalInfoLayer">
      <RaisedHandsRow4 />
      <SecondaryHeaderRow8 />
    </div>
  );
}

export default function DoubleRow() {
  return (
    <div className="bg-white relative size-full" data-name="Double row">
      <AdditionalInfoLayer />
      <AdditionalInfoLayer1 />
      <AdditionalInfoLayer2 />
      <AdditionalInfoLayer3 />
      <AdditionalInfoLayer4 />
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] left-[877px] text-[18px] text-black top-[106px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        When one participant is raising hands
      </p>
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] left-[877px] text-[18px] text-black top-[215px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        When two participants are raising hands
      </p>
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] left-[877px] text-[18px] text-black top-[335px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        When three participants are raising hands
      </p>
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] left-[877px] text-[18px] text-black top-[442px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        When five participants are raising hands
      </p>
      <p className="absolute font-['SF_Pro:Bold',sans-serif] font-bold leading-[14px] left-[877px] text-[30px] text-black top-[70px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Double row
      </p>
    </div>
  );
}