import svgPaths from "./svg-ct9ylmbywn";

function Time() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[2px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        8:14
      </p>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, white)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, white)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7px] h-[22px] items-center justify-center min-h-px min-w-px pt-px relative" data-name="Levels">
      <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
          <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
          <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[16px] top-0 w-[402px]" data-name="Status bar">
      <Time />
      <Levels />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[-6px] top-[-6px]" data-name="Header">
      <StatusBar />
      <div className="absolute bg-black h-[35px] left-[139px] rounded-[100px] top-[15px] w-[124px]" />
      <div className="absolute left-[250px] size-[5px] top-[30px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #37EF46)" id="Ellipse 26599" r="2.5" />
        </svg>
      </div>
    </div>
  );
}

function PageControlItem() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name=".Page control item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id=".Page control item">
          <circle cx="5" cy="5" fill="var(--fill-0, #968CFF)" id="Selected" r="5" />
        </g>
      </svg>
    </div>
  );
}

function PageControlItem1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name=".Page control item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id=".Page control item">
          <circle cx="5" cy="5" fill="var(--fill-0, #E1E1E1)" id="Smaller" r="3" />
        </g>
      </svg>
    </div>
  );
}

function PageControlItem2() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name=".Page control item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id=".Page control item">
          <circle cx="5" cy="5" fill="var(--fill-0, #E1E1E1)" id="Smaller" r="3" />
        </g>
      </svg>
    </div>
  );
}

function PageControl() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full" data-name="Page control">
      <PageControlItem />
      <PageControlItem1 />
      <PageControlItem2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(64,64,64,0.7)] content-stretch flex flex-col items-center justify-center left-[calc(50%-6px)] px-[20px] py-[4px] rounded-[20px] top-[754px]">
      <PageControl />
    </div>
  );
}

function Video() {
  return (
    <div className="h-[28px] relative shrink-0 w-[24px]" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
        <g id="Video">
          <path d={svgPaths.p2ab58800} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab6() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 7">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <Video />
        </div>
      </div>
    </div>
  );
}

function Mic() {
  return (
    <div className="absolute left-0 size-[24px] top-[2px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Mic">
          <g id="Union">
            <path d={svgPaths.p29d99a70} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p182626f0} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-[2px]">
      <Mic />
      <div className="-translate-x-1/2 absolute bg-white h-[7px] left-1/2 rounded-bl-[4px] rounded-br-[4px] top-[12.5px] w-[8px]" />
    </div>
  );
}

function Placeholder() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[2px] relative shrink-0" data-name="Placeholder">
      <Group4 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <Placeholder />
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Chat">
          <path d={svgPaths.p1e92dd00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative w-full">
          <Chat />
        </div>
      </div>
    </div>
  );
}

function MoreHorizontal() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="More Horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="More Horizontal">
          <path d={svgPaths.p34473c00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab3() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 4">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <MoreHorizontal />
        </div>
      </div>
    </div>
  );
}

function MainTabBar() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex h-[62px] items-center left-0 pl-[4px] pr-[12px] py-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] top-0 w-[296px]" data-name="Main Tab Bar">
      <Tab6 />
      <Tab1 />
      <Tab />
      <Tab3 />
    </div>
  );
}

function Copilot1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Copilot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Copilot">
          <path d={svgPaths.p16a963f0} fill="url(#paint0_radial_316_3591)" id="Shape" />
          <path d={svgPaths.p22760380} fill="url(#paint1_radial_316_3591)" id="Shape_2" />
          <g id="Shape_3">
            <path d={svgPaths.p2ecce500} fill="url(#paint2_radial_316_3591)" />
            <path d={svgPaths.p2ecce500} fill="url(#paint3_linear_316_3591)" />
          </g>
          <g id="Shape_4">
            <path d={svgPaths.p30395c00} fill="url(#paint4_radial_316_3591)" />
            <path d={svgPaths.p30395c00} fill="url(#paint5_linear_316_3591)" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-5.49698 -6.79344 -5.93495 5.69811 18.9994 10.3791)" gradientUnits="userSpaceOnUse" id="paint0_radial_316_3591" r="1">
            <stop offset="0.0955758" stopColor="#00AEFF" />
            <stop offset="0.773185" stopColor="#2253CE" />
            <stop offset="1" stopColor="#0736C4" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(4.98016 6.47044 5.87896 -5.2813 5.57469 16.2453)" gradientUnits="userSpaceOnUse" id="paint1_radial_316_3591" r="1">
            <stop stopColor="#FFB657" />
            <stop offset="0.633728" stopColor="#FF5F3D" />
            <stop offset="0.923392" stopColor="#C02B3C" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.726614 -12.7947 71.8824 -4.08022 6.53166 16.435)" gradientUnits="userSpaceOnUse" id="paint2_radial_316_3591" r="1">
            <stop offset="0.03" stopColor="#FFC800" />
            <stop offset="0.31" stopColor="#98BD42" />
            <stop offset="0.49" stopColor="#52B471" />
            <stop offset="0.843838" stopColor="#0D91E1" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_316_3591" x1="7.25046" x2="7.87502" y1="2" y2="16.4401">
            <stop stopColor="#3DCBFF" />
            <stop offset="0.246674" stopColor="#0588F7" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-6.33606 18.1116 -21.564 -7.99353 20.6605 6.14612)" gradientUnits="userSpaceOnUse" id="paint4_radial_316_3591" r="1">
            <stop offset="0.0661714" stopColor="#8C48FF" />
            <stop offset="0.5" stopColor="#F2598A" />
            <stop offset="0.895833" stopColor="#FFB152" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_316_3591" x1="21.2941" x2="21.286" y1="6.67831" y2="10.6113">
            <stop offset="0.0581535" stopColor="#F8ADFA" />
            <stop offset="0.708063" stopColor="#A86EDD" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Copilot() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex items-center justify-center left-[308px] p-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] size-[62px] top-0" data-name="Copilot">
      <Copilot1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute h-[62px] left-1/2 top-[782px] w-[370px]">
      <MainTabBar />
      <Copilot />
    </div>
  );
}

function Avatar1() {
  return <div className="absolute left-[37.5px] size-[48px] top-0" data-name="Avatar" />;
}

function Avatar() {
  return (
    <div className="absolute left-[166.5px] size-[48px] top-[465px]" data-name="Avatar">
      <Avatar1 />
    </div>
  );
}

function Mask() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[1000px]" data-name="Shape" />
    </div>
  );
}

function Blur1() {
  return <div className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.04)] blur-[10px] inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur() {
  return (
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <Mask />
      <Blur1 />
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
      <Blur />
      <Fill />
      <GlassEffect />
    </div>
  );
}

function Chevron() {
  return (
    <div className="absolute h-[24px] left-[22.73%] overflow-clip right-[22.73%] top-[10px]" data-name="Chevron">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%-0.63px)] top-1/2 w-[8.75px]" data-name="Shape">
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
          <path d={svgPaths.p87a2e00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#f1f1f1] text-[15px] text-ellipsis tracking-[-0.23px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[20px] overflow-hidden">Marketing Team Sync</p>
      </div>
      <Shield1 />
    </div>
  );
}

function Subtext() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Subtext">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#bfbfbf] text-[12px] text-ellipsis tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[13px] overflow-hidden">15:30</p>
      </div>
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #BFBFBF)" id="Ellipse 26593" r="1.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#bfbfbf] text-[12px] text-ellipsis tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[13px] overflow-hidden">12 in call</p>
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
      <Shield />
      <Container />
    </div>
  );
}

function MeetingTitle() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Meeting title">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative w-full">
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
    <div className="col-1 ml-0 mt-0 relative row-1 size-[48px]" data-name="Leave">
      <Tint />
      <GlassEffect1 />
    </div>
  );
}

function CallEnd() {
  return (
    <div className="col-1 ml-[12px] mt-[12px] relative row-1 size-[24px]" data-name="Call End">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Call End">
          <path d={svgPaths.p19a0d900} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Leave />
      <CallEnd />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Group6 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[0px_4px] items-center justify-center min-h-px min-w-px relative w-full" data-name="Header">
      <Back />
      <MeetingTitle />
      <Frame2 />
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute bg-[#0a0604] content-stretch flex flex-col h-[48px] items-center justify-center left-[-6px] pl-[4px] pr-[16px] top-[56px] w-[393px]" data-name="Header">
      <Header2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[6.62%_5.79%_72.79%_71.07%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Group 3465053">
          <circle cx="14" cy="14" data-figma-bg-blur-radius="4" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" r="14" />
        </g>
        <defs>
          <clipPath id="bgblur_0_316_3576_clip_path" transform="translate(4 4)">
            <circle cx="14" cy="14" r="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[4px] ml-0 mt-[6px] rounded-[22px] row-1 w-[2px]" />
      <div className="bg-white col-1 h-[7px] ml-[4px] mt-[3px] rounded-[22px] row-1 w-[2px]" />
      <div className="bg-white col-1 h-[10px] ml-[8px] mt-0 opacity-30 rounded-[22px] row-1 w-[2px]" />
    </div>
  );
}

function GciIndicatorTwo() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[5px] bottom-[76.47%] content-stretch flex items-center left-[calc(50%+39.5px)] overflow-clip px-[4px] rounded-br-[4px] rounded-tr-[4px] top-[10.29%]" data-name="GCI Indicator/Two">
      <Group2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[#bd7416] content-stretch flex items-center justify-center left-[31px] overflow-clip p-[20px] rounded-[50px] size-[60px] top-[37px]">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-center text-white tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">UV</p>
      </div>
    </div>
  );
}

function Self() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.2)] h-[136px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[169px] w-[121px]" data-name="Self">
      <Group />
      <GciIndicatorTwo />
      <Frame8 />
    </div>
  );
}

function Mask1() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[1000px]" data-name="Shape" />
    </div>
  );
}

function Blur3() {
  return <div className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.15)] blur-[10px] inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur2() {
  return (
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <Mask1 />
      <Blur3 />
    </div>
  );
}

function Fill1() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(135, 139, 251) 0%, rgb(135, 139, 251) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function Bg1() {
  return (
    <div className="-translate-y-1/2 absolute h-[137px] left-0 right-0 top-1/2" data-name="BG">
      <Blur2 />
      <Fill1 />
    </div>
  );
}

function Mic1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Mic">
          <path d={svgPaths.p2efdb1c0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-[calc(50%-0.5px)] top-[calc(50%-0.5px)]">
      <Mic1 />
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-center text-white tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">Unmute</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[137px] left-[17px] top-[418px] w-[357px]">
      <Bg1 />
      <Frame6 />
    </div>
  );
}

function Mask2() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[1000px]" data-name="Shape" />
    </div>
  );
}

function Blur5() {
  return <div className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.15)] blur-[10px] inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur4() {
  return (
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <Mask2 />
      <Blur5 />
    </div>
  );
}

function Fill2() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(151, 151, 151) 0%, rgb(151, 151, 151) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function Hand() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Hand">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Hand">
          <path d={svgPaths.p392d2800} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[10px] items-center left-1/2 top-[calc(50%+0.5px)]">
      <Hand />
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-center text-white tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">Raise</p>
      </div>
    </div>
  );
}

function Bg2() {
  return (
    <div className="-translate-y-1/2 absolute h-[137px] left-[17px] right-[198px] top-[calc(50%+202.5px)]" data-name="BG">
      <Blur4 />
      <Fill2 />
      <Frame7 />
    </div>
  );
}

function Mask3() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[1000px]" data-name="Shape" />
    </div>
  );
}

function Blur7() {
  return <div className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.15)] blur-[10px] inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur6() {
  return (
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <Mask3 />
      <Blur7 />
    </div>
  );
}

function Fill3() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(151, 151, 151) 0%, rgb(151, 151, 151) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function Speaker() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Speaker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Speaker">
          <path d={svgPaths.p33a83b00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[10px] items-center left-1/2 top-[calc(50%+0.5px)]">
      <Speaker />
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-center text-white tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">Audio</p>
      </div>
    </div>
  );
}

function Bg3() {
  return (
    <div className="-translate-y-1/2 absolute h-[137px] left-[205px] right-[10px] top-[calc(50%+202.5px)]" data-name="BG">
      <Blur6 />
      <Fill3 />
      <Frame9 />
    </div>
  );
}

function MicOff() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Mic Off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Mic Off">
          <path d={svgPaths.p19b67700} fill="var(--fill-0, #FF5F3D)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function VideoOff() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Video Off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Video Off">
          <path d={svgPaths.pfb82480} fill="var(--fill-0, #B2B2B2)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[12px] items-center left-1/2 top-[329px]">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b2b2b2] text-[22px] text-center tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">You</p>
      </div>
      <MicOff />
      <VideoOff />
    </div>
  );
}

function OnTheGoModePortrait() {
  return (
    <div className="-translate-x-1/2 absolute bg-black border-6 border-black border-solid h-[874px] left-[calc(50%-220.5px)] overflow-clip rounded-[54px] shadow-[0px_12px_48px_0px_rgba(0,0,0,0.24)] top-[60px] w-[402px]" data-name="On the go mode / Portrait">
      <Header />
      <Frame4 />
      <Frame />
      <Avatar />
      <Header1 />
      <Self />
      <Frame10 />
      <Bg2 />
      <Bg3 />
      <Frame11 />
    </div>
  );
}

function Time1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[2px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        8:14
      </p>
    </div>
  );
}

function Battery1() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, white)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, white)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7px] h-[22px] items-center justify-center min-h-px min-w-px pt-px relative" data-name="Levels">
      <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
          <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
          <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <Battery1 />
    </div>
  );
}

function StatusBar1() {
  return (
    <div className="absolute content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[16px] top-0 w-[402px]" data-name="Status bar">
      <Time1 />
      <Levels1 />
    </div>
  );
}

function Header3() {
  return (
    <div className="absolute contents left-[-6px] top-[-6px]" data-name="Header">
      <StatusBar1 />
      <div className="absolute bg-black h-[35px] left-[139px] rounded-[100px] top-[15px] w-[124px]" />
      <div className="absolute left-[250px] size-[5px] top-[30px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #37EF46)" id="Ellipse 26599" r="2.5" />
        </svg>
      </div>
    </div>
  );
}

function PageControlItem3() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name=".Page control item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id=".Page control item">
          <circle cx="5" cy="5" fill="var(--fill-0, #968CFF)" id="Selected" r="5" />
        </g>
      </svg>
    </div>
  );
}

function PageControlItem4() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name=".Page control item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id=".Page control item">
          <circle cx="5" cy="5" fill="var(--fill-0, #E1E1E1)" id="Smaller" r="3" />
        </g>
      </svg>
    </div>
  );
}

function PageControlItem5() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name=".Page control item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id=".Page control item">
          <circle cx="5" cy="5" fill="var(--fill-0, #E1E1E1)" id="Smaller" r="3" />
        </g>
      </svg>
    </div>
  );
}

function PageControl1() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full" data-name="Page control">
      <PageControlItem3 />
      <PageControlItem4 />
      <PageControlItem5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(64,64,64,0.7)] content-stretch flex flex-col items-center justify-center left-[calc(50%-6px)] px-[20px] py-[4px] rounded-[20px] top-[754px]">
      <PageControl1 />
    </div>
  );
}

function Video1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[24px]" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
        <g id="Video">
          <path d={svgPaths.p2ab58800} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab7() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 7">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <Video1 />
        </div>
      </div>
    </div>
  );
}

function Mic2() {
  return (
    <div className="absolute left-0 size-[24px] top-[2px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Mic">
          <g id="Union">
            <path d={svgPaths.p29d99a70} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p182626f0} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-[2px]">
      <Mic2 />
      <div className="-translate-x-1/2 absolute bg-white h-[7px] left-1/2 rounded-bl-[4px] rounded-br-[4px] top-[12.5px] w-[8px]" />
    </div>
  );
}

function Placeholder1() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[2px] relative shrink-0" data-name="Placeholder">
      <Group5 />
    </div>
  );
}

function Tab2() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <Placeholder1 />
        </div>
      </div>
    </div>
  );
}

function Chat1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Chat">
          <path d={svgPaths.p1e92dd00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative w-full">
          <Chat1 />
        </div>
      </div>
    </div>
  );
}

function MoreHorizontal1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="More Horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="More Horizontal">
          <path d={svgPaths.p34473c00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab5() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 4">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <MoreHorizontal1 />
        </div>
      </div>
    </div>
  );
}

function MainTabBar1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex h-[62px] items-center left-0 pl-[4px] pr-[12px] py-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] top-0 w-[296px]" data-name="Main Tab Bar">
      <Tab7 />
      <Tab2 />
      <Tab4 />
      <Tab5 />
    </div>
  );
}

function Copilot3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Copilot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Copilot">
          <path d={svgPaths.p16a963f0} fill="url(#paint0_radial_316_3591)" id="Shape" />
          <path d={svgPaths.p22760380} fill="url(#paint1_radial_316_3591)" id="Shape_2" />
          <g id="Shape_3">
            <path d={svgPaths.p2ecce500} fill="url(#paint2_radial_316_3591)" />
            <path d={svgPaths.p2ecce500} fill="url(#paint3_linear_316_3591)" />
          </g>
          <g id="Shape_4">
            <path d={svgPaths.p30395c00} fill="url(#paint4_radial_316_3591)" />
            <path d={svgPaths.p30395c00} fill="url(#paint5_linear_316_3591)" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-5.49698 -6.79344 -5.93495 5.69811 18.9994 10.3791)" gradientUnits="userSpaceOnUse" id="paint0_radial_316_3591" r="1">
            <stop offset="0.0955758" stopColor="#00AEFF" />
            <stop offset="0.773185" stopColor="#2253CE" />
            <stop offset="1" stopColor="#0736C4" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(4.98016 6.47044 5.87896 -5.2813 5.57469 16.2453)" gradientUnits="userSpaceOnUse" id="paint1_radial_316_3591" r="1">
            <stop stopColor="#FFB657" />
            <stop offset="0.633728" stopColor="#FF5F3D" />
            <stop offset="0.923392" stopColor="#C02B3C" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.726614 -12.7947 71.8824 -4.08022 6.53166 16.435)" gradientUnits="userSpaceOnUse" id="paint2_radial_316_3591" r="1">
            <stop offset="0.03" stopColor="#FFC800" />
            <stop offset="0.31" stopColor="#98BD42" />
            <stop offset="0.49" stopColor="#52B471" />
            <stop offset="0.843838" stopColor="#0D91E1" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_316_3591" x1="7.25046" x2="7.87502" y1="2" y2="16.4401">
            <stop stopColor="#3DCBFF" />
            <stop offset="0.246674" stopColor="#0588F7" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-6.33606 18.1116 -21.564 -7.99353 20.6605 6.14612)" gradientUnits="userSpaceOnUse" id="paint4_radial_316_3591" r="1">
            <stop offset="0.0661714" stopColor="#8C48FF" />
            <stop offset="0.5" stopColor="#F2598A" />
            <stop offset="0.895833" stopColor="#FFB152" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_316_3591" x1="21.2941" x2="21.286" y1="6.67831" y2="10.6113">
            <stop offset="0.0581535" stopColor="#F8ADFA" />
            <stop offset="0.708063" stopColor="#A86EDD" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Copilot2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex items-center justify-center left-[308px] p-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] size-[62px] top-0" data-name="Copilot">
      <Copilot3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute h-[62px] left-1/2 top-[782px] w-[370px]">
      <MainTabBar1 />
      <Copilot2 />
    </div>
  );
}

function Avatar3() {
  return <div className="absolute left-[37.5px] size-[48px] top-0" data-name="Avatar" />;
}

function Avatar2() {
  return (
    <div className="absolute left-[166.5px] size-[48px] top-[465px]" data-name="Avatar">
      <Avatar3 />
    </div>
  );
}

function Mask4() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[1000px]" data-name="Shape" />
    </div>
  );
}

function Blur9() {
  return <div className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.04)] blur-[10px] inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur8() {
  return (
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <Mask4 />
      <Blur9 />
    </div>
  );
}

function Fill4() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute bg-[#181818] inset-0 rounded-[296px]" />
      </div>
    </div>
  );
}

function GlassEffect2() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 opacity-50 rounded-[296px]" data-name="Glass Effect" />;
}

function Bg4() {
  return (
    <div className="absolute left-0 opacity-0 size-[44px] top-0" data-name="BG">
      <Blur8 />
      <Fill4 />
      <GlassEffect2 />
    </div>
  );
}

function Chevron1() {
  return (
    <div className="absolute h-[24px] left-[22.73%] overflow-clip right-[22.73%] top-[10px]" data-name="Chevron">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%-0.63px)] top-1/2 w-[8.75px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 16">
          <path d={svgPaths.p4dacf00} fill="var(--fill-0, #F3F3F3)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Back1() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Back">
      <Bg4 />
      <Chevron1 />
    </div>
  );
}

function Shield2() {
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

function Shield3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Shield">
          <path d={svgPaths.p87a2e00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#f1f1f1] text-[15px] text-ellipsis tracking-[-0.23px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[20px] overflow-hidden">Marketing Team Sync</p>
      </div>
      <Shield3 />
    </div>
  );
}

function Subtext1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Subtext">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#bfbfbf] text-[12px] text-ellipsis tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[13px] overflow-hidden">15:30</p>
      </div>
      <div className="relative shrink-0 size-[3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <circle cx="1.5" cy="1.5" fill="var(--fill-0, #BFBFBF)" id="Ellipse 26593" r="1.5" />
        </svg>
      </div>
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#bfbfbf] text-[12px] text-ellipsis tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[13px] overflow-hidden">12 in call</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <Title1 />
      <Subtext1 />
    </div>
  );
}

function TitleSubtext1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Title+subtext">
      <Shield2 />
      <Container1 />
    </div>
  );
}

function MeetingTitle1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Meeting title">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative w-full">
          <TitleSubtext1 />
        </div>
      </div>
    </div>
  );
}

function Tint1() {
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

function GlassEffect3() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Leave1() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[48px]" data-name="Leave">
      <Tint1 />
      <GlassEffect3 />
    </div>
  );
}

function CallEnd1() {
  return (
    <div className="col-1 ml-[12px] mt-[12px] relative row-1 size-[24px]" data-name="Call End">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Call End">
          <path d={svgPaths.p19a0d900} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Leave1 />
      <CallEnd1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Group7 />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[0px_4px] items-center justify-center min-h-px min-w-px relative w-full" data-name="Header">
      <Back1 />
      <MeetingTitle1 />
      <Frame3 />
    </div>
  );
}

function Header4() {
  return (
    <div className="absolute bg-[#0a0604] content-stretch flex flex-col h-[48px] items-center justify-center left-[-6px] pl-[4px] pr-[16px] top-[56px] w-[393px]" data-name="Header">
      <Header5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[6.62%_5.79%_72.79%_71.07%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Group 3465053">
          <circle cx="14" cy="14" data-figma-bg-blur-radius="4" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" r="14" />
        </g>
        <defs>
          <clipPath id="bgblur_0_316_3576_clip_path" transform="translate(4 4)">
            <circle cx="14" cy="14" r="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[4px] ml-0 mt-[6px] rounded-[22px] row-1 w-[2px]" />
      <div className="bg-white col-1 h-[7px] ml-[4px] mt-[3px] rounded-[22px] row-1 w-[2px]" />
      <div className="bg-white col-1 h-[10px] ml-[8px] mt-0 opacity-30 rounded-[22px] row-1 w-[2px]" />
    </div>
  );
}

function GciIndicatorTwo1() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[5px] bottom-[76.47%] content-stretch flex items-center left-[calc(50%+39.5px)] overflow-clip px-[4px] rounded-br-[4px] rounded-tr-[4px] top-[10.29%]" data-name="GCI Indicator/Two">
      <Group3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#bd7416] content-stretch flex items-center justify-center left-[31px] overflow-clip p-[20px] rounded-[50px] size-[60px] top-[37px]">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-center text-white tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">UV</p>
      </div>
    </div>
  );
}

function Self1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.2)] h-[136px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[169px] w-[121px]" data-name="Self">
      <Group1 />
      <GciIndicatorTwo1 />
      <Frame12 />
    </div>
  );
}

function Mask5() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[1000px]" data-name="Shape" />
    </div>
  );
}

function Blur11() {
  return <div className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.15)] blur-[10px] inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur10() {
  return (
    <div className="absolute inset-[-27px] opacity-67" data-name="Blur">
      <Mask5 />
      <Blur11 />
    </div>
  );
}

function Fill5() {
  return <div className="absolute bg-[#0b0d40] inset-[-1px] rounded-[296px]" data-name="Fill" />;
}

function Bg5() {
  return (
    <div className="-translate-y-1/2 absolute border border-[#080c7c] border-solid h-[137px] left-0 right-0 top-1/2" data-name="BG">
      <Blur10 />
      <Fill5 />
    </div>
  );
}

function MicOff1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Mic Off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Mic Off">
          <g id="Shape">
            <path d={svgPaths.p1ac2c680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p68fda00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ae074c0} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-[calc(50%-0.5px)] top-[calc(50%-0.5px)]">
      <MicOff1 />
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-center text-white tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">Mute</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[137px] left-[17px] top-[418px] w-[357px]">
      <Bg5 />
      <Frame14 />
    </div>
  );
}

function Mask6() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[1000px]" data-name="Shape" />
    </div>
  );
}

function Blur13() {
  return <div className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.15)] blur-[10px] inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur12() {
  return (
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <Mask6 />
      <Blur13 />
    </div>
  );
}

function Fill6() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(151, 151, 151) 0%, rgb(151, 151, 151) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function Hand1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Hand">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Hand">
          <path d={svgPaths.p392d2800} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[10px] items-center left-1/2 top-[calc(50%+0.5px)]">
      <Hand1 />
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-center text-white tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">Raise</p>
      </div>
    </div>
  );
}

function Bg6() {
  return (
    <div className="-translate-y-1/2 absolute h-[137px] left-[17px] right-[198px] top-[calc(50%+202.5px)]" data-name="BG">
      <Blur12 />
      <Fill6 />
      <Frame15 />
    </div>
  );
}

function Mask7() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[1000px]" data-name="Shape" />
    </div>
  );
}

function Blur15() {
  return <div className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.15)] blur-[10px] inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur14() {
  return (
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <Mask7 />
      <Blur15 />
    </div>
  );
}

function Fill7() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(151, 151, 151) 0%, rgb(151, 151, 151) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function Speaker1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Speaker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Speaker">
          <path d={svgPaths.p33a83b00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[10px] items-center left-1/2 top-[calc(50%+0.5px)]">
      <Speaker1 />
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-center text-white tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">Audio</p>
      </div>
    </div>
  );
}

function Bg7() {
  return (
    <div className="-translate-y-1/2 absolute h-[137px] left-[205px] right-[10px] top-[calc(50%+202.5px)]" data-name="BG">
      <Blur14 />
      <Fill7 />
      <Frame16 />
    </div>
  );
}

function Mic3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Mic">
          <path d={svgPaths.p10774b80} fill="var(--fill-0, #37EF46)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function VideoOff1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Video Off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Video Off">
          <path d={svgPaths.pfb82480} fill="var(--fill-0, #B2B2B2)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[12px] items-center left-1/2 top-[329px]">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b2b2b2] text-[22px] text-center tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">You</p>
      </div>
      <Mic3 />
      <VideoOff1 />
    </div>
  );
}

function OnTheGoModePortrait1() {
  return (
    <div className="-translate-x-1/2 absolute bg-black border-6 border-black border-solid h-[874px] left-[calc(50%+199.5px)] overflow-clip rounded-[54px] shadow-[0px_12px_48px_0px_rgba(0,0,0,0.24)] top-[60px] w-[402px]" data-name="On the go mode / Portrait">
      <Header3 />
      <Frame5 />
      <Frame1 />
      <Avatar2 />
      <Header4 />
      <Self1 />
      <Frame13 />
      <Bg6 />
      <Bg7 />
      <Frame17 />
    </div>
  );
}

export default function Frame18() {
  return (
    <div className="bg-white relative size-full">
      <OnTheGoModePortrait />
      <OnTheGoModePortrait1 />
    </div>
  );
}