import svgPaths from "./svg-unw9bwngfh";

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

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Leave />
      <CallEnd />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Group4 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[0px_4px] items-center justify-center min-h-px min-w-px relative w-full" data-name="Header">
      <Back />
      <MeetingTitle />
      <Frame />
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

function Header4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Header">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#919191] text-[13px] text-center text-ellipsis tracking-[-0.08px]">Your video will remain off</p>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Header">
      <Header4 />
    </div>
  );
}

function Center() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Header3 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[22px] text-center tracking-[0.35px] w-full">
        <p className="leading-[26px] whitespace-pre-wrap">On the go mode</p>
      </div>
      <Center />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[6.62%_5.79%_72.79%_71.07%]">
      <div className="absolute inset-[6.62%_5.79%_72.79%_71.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.157 28">
          <ellipse cx="14.5785" cy="14" data-figma-bg-blur-radius="4" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" rx="14.5785" ry="14" />
          <defs>
            <clipPath id="bgblur_0_332_3768_clip_path" transform="translate(4 4)">
              <ellipse cx="14.5785" cy="14" rx="14.5785" ry="14" />
            </clipPath>
          </defs>
        </svg>
      </div>
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
    <div className="-translate-x-1/2 absolute backdrop-blur-[5px] bottom-[76.47%] content-stretch flex items-center left-[calc(50%+39px)] overflow-clip px-[4px] rounded-br-[4px] rounded-tr-[4px] top-[10.29%]" data-name="GCI Indicator/Two">
      <Group2 />
    </div>
  );
}

function Frame6() {
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
    <div className="bg-[rgba(255,255,255,0.2)] h-[136px] relative rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Self">
      <Group />
      <GciIndicatorTwo />
      <Frame6 />
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

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b2b2b2] text-[22px] text-center tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">You</p>
      </div>
      <MicOff />
      <VideoOff />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[126px]">
      <Self />
      <Frame5 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[30px] items-center min-h-px min-w-px relative w-full">
      <Frame19 />
      <Frame20 />
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

function Mic() {
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Mic />
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-center text-white tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">Unmute</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[137px] items-start px-[118px] py-[54px] relative shrink-0 w-[363px]">
      <Bg1 />
      <Frame4 />
    </div>
  );
}

function Fill2() {
  return <div className="bg-[#181818] h-[137px] rounded-[296px] shrink-0 w-full" data-name="Fill" />;
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
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[175px]" data-name="BG">
      <Fill2 />
      <Blur4 />
      <Frame7 />
    </div>
  );
}

function Fill3() {
  return <div className="bg-[#181818] h-[137px] rounded-[296px] shrink-0 w-full" data-name="Fill" />;
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
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[175px]" data-name="BG">
      <Fill3 />
      <Blur6 />
      <Frame9 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-end flex flex-wrap gap-[10px_13px] items-end relative shrink-0 w-full">
      <Frame8 />
      <Bg2 />
      <Bg3 />
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

function Frame2() {
  return (
    <div className="bg-[rgba(64,64,64,0.7)] content-stretch flex flex-col items-center justify-center px-[20px] py-[4px] relative rounded-[20px] shrink-0">
      <PageControl />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <Frame17 />
      <Frame2 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[700px] items-center left-[14px] top-[138px] w-[363px]">
      <Frame23 />
      <Frame25 />
    </div>
  );
}

function OnTheGoModePortrait() {
  return (
    <div className="-translate-x-1/2 absolute bg-black border-6 border-black border-solid h-[874px] left-[calc(50%-220.5px)] overflow-clip rounded-[54px] shadow-[0px_12px_48px_0px_rgba(0,0,0,0.24)] top-[60px] w-[402px]" data-name="On the go mode / Portrait">
      <Header />
      <Avatar />
      <Header1 />
      <Frame26 />
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

function Header5() {
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

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Leave1 />
      <CallEnd1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Group5 />
    </div>
  );
}

function Header7() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[0px_4px] items-center justify-center min-h-px min-w-px relative w-full" data-name="Header">
      <Back1 />
      <MeetingTitle1 />
      <Frame1 />
    </div>
  );
}

function Header6() {
  return (
    <div className="absolute bg-[#0a0604] content-stretch flex flex-col h-[48px] items-center justify-center left-[-6px] pl-[4px] pr-[16px] top-[56px] w-[393px]" data-name="Header">
      <Header7 />
    </div>
  );
}

function Header9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Header">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#919191] text-[13px] text-center text-ellipsis tracking-[-0.08px]">Your video will remain off</p>
    </div>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Header">
      <Header9 />
    </div>
  );
}

function Center1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Center">
      <Header8 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e1e1] text-[22px] text-center tracking-[0.35px] w-full">
        <p className="leading-[26px] whitespace-pre-wrap">On the go mode</p>
      </div>
      <Center1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[6.62%_5.79%_72.79%_71.07%]">
      <div className="absolute inset-[6.62%_5.79%_72.79%_71.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.157 28">
          <ellipse cx="14.5785" cy="14" data-figma-bg-blur-radius="4" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" rx="14.5785" ry="14" />
          <defs>
            <clipPath id="bgblur_0_332_3768_clip_path" transform="translate(4 4)">
              <ellipse cx="14.5785" cy="14" rx="14.5785" ry="14" />
            </clipPath>
          </defs>
        </svg>
      </div>
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
    <div className="-translate-x-1/2 absolute backdrop-blur-[5px] bottom-[76.47%] content-stretch flex items-center left-[calc(50%+39px)] overflow-clip px-[4px] rounded-br-[4px] rounded-tr-[4px] top-[10.29%]" data-name="GCI Indicator/Two">
      <Group3 />
    </div>
  );
}

function Frame10() {
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
    <div className="bg-[rgba(255,255,255,0.2)] h-[136px] relative rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Self">
      <Group1 />
      <GciIndicatorTwo1 />
      <Frame10 />
    </div>
  );
}

function Mic1() {
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

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b2b2b2] text-[22px] text-center tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">You</p>
      </div>
      <Mic1 />
      <VideoOff1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[126px]">
      <Self1 />
      <Frame11 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[30px] items-center min-h-px min-w-px relative w-full">
      <Frame21 />
      <Frame24 />
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
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <Mask5 />
      <Blur11 />
    </div>
  );
}

function Fill5() {
  return <div className="absolute bg-[#2b2e79] inset-0 rounded-[296px]" data-name="Fill" />;
}

function Bg5() {
  return (
    <div className="-translate-y-1/2 absolute h-[137px] left-0 right-0 top-1/2" data-name="BG">
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

function Frame13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <MicOff1 />
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-center text-white tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[26px]">Mute</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[137px] items-start px-[132px] py-[54px] relative shrink-0 w-[363px]">
      <Bg5 />
      <Frame13 />
    </div>
  );
}

function Fill6() {
  return <div className="bg-[#181818] h-[137px] rounded-[296px] shrink-0 w-full" data-name="Fill" />;
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

function Frame14() {
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
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[175px]" data-name="BG">
      <Fill6 />
      <Blur12 />
      <Frame14 />
    </div>
  );
}

function Fill7() {
  return <div className="bg-[#181818] h-[137px] rounded-[296px] shrink-0 w-full" data-name="Fill" />;
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

function Frame15() {
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
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[175px]" data-name="BG">
      <Fill7 />
      <Blur14 />
      <Frame15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-end flex flex-wrap gap-[10px_13px] items-end relative shrink-0 w-full">
      <Frame12 />
      <Bg6 />
      <Bg7 />
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

function Frame3() {
  return (
    <div className="bg-[rgba(64,64,64,0.7)] content-stretch flex flex-col items-center justify-center px-[20px] py-[4px] relative rounded-[20px] shrink-0">
      <PageControl1 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <Frame18 />
      <Frame3 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[700px] items-center left-[14px] top-[138px] w-[363px]">
      <Frame22 />
      <Frame28 />
    </div>
  );
}

function OnTheGoModePortrait1() {
  return (
    <div className="-translate-x-1/2 absolute bg-black border-6 border-black border-solid h-[874px] left-[calc(50%+199.5px)] overflow-clip rounded-[54px] shadow-[0px_12px_48px_0px_rgba(0,0,0,0.24)] top-[60px] w-[402px]" data-name="On the go mode / Portrait">
      <Header5 />
      <Avatar2 />
      <Header6 />
      <Frame27 />
    </div>
  );
}

export default function Frame16() {
  return (
    <div className="bg-white relative size-full">
      <OnTheGoModePortrait />
      <OnTheGoModePortrait1 />
    </div>
  );
}