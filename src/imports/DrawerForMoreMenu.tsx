import svgPaths from "./svg-r0bdvgj63w";
import imgThumbsUp from "figma:asset/b7bdd4e332f1134cea6b347137499723925005ef.png";
import imgRedHeart from "figma:asset/59520d231a783bb20cd3d4f98dfaec2de858b210.png";
import imgClappingHands from "figma:asset/cebe50ea4c5d9b448454b19dd79074e5c5b4d898.png";
import imgGrinningSquintingFace from "figma:asset/05be624ff210f9164b431697c6d21d5e13ab6caa.png";
import imgRaisedHand from "figma:asset/5e065daa3e40aa51484d94e392c06fe496150d5d.png";
import imgFrame2147233135 from "figma:asset/39154ef67ddaa64702482bb71cb22487de1cf404.png";
import imgRectangle346604096 from "figma:asset/2988dddd4762039b89078373be258dc29df8140a.png";

function Time() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-[2px] px-0 relative" data-name="Time">
      <p className="css-ew64yg font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className="content-stretch flex flex-[1_0_0] gap-[7px] h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-px px-0 relative" data-name="Levels">
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

function Group3() {
  return (
    <div className="absolute contents left-0 top-[2px]">
      <Mic />
      <div className="absolute bg-white h-[7px] left-1/2 rounded-bl-[4px] rounded-br-[4px] top-[12.5px] translate-x-[-50%] w-[8px]" />
    </div>
  );
}

function Placeholder() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[2px] relative shrink-0" data-name="Placeholder">
      <Group3 />
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
          <path d={svgPaths.pb877400} fill="var(--fill-0, #878BFB)" id="Shape" />
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
          <path d={svgPaths.p8afa600} fill="var(--fill-0, white)" id="Shape" />
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

function Copilot() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Copilot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Copilot">
          <path d={svgPaths.p16a963f0} fill="url(#paint0_radial_1_12651)" id="Shape" />
          <path d={svgPaths.p22760380} fill="url(#paint1_radial_1_12651)" id="Shape_2" />
          <g id="Shape_3">
            <path d={svgPaths.p2ecce500} fill="url(#paint2_radial_1_12651)" />
            <path d={svgPaths.p2ecce500} fill="url(#paint3_linear_1_12651)" />
          </g>
          <g id="Shape_4">
            <path d={svgPaths.p30395c00} fill="url(#paint4_radial_1_12651)" />
            <path d={svgPaths.p30395c00} fill="url(#paint5_linear_1_12651)" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-5.49698 -6.79344 -5.93495 5.69811 18.9994 10.3791)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_12651" r="1">
            <stop offset="0.0955758" stopColor="#00AEFF" />
            <stop offset="0.773185" stopColor="#2253CE" />
            <stop offset="1" stopColor="#0736C4" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(4.98016 6.47044 5.87896 -5.2813 5.57469 16.2453)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_12651" r="1">
            <stop stopColor="#FFB657" />
            <stop offset="0.633728" stopColor="#FF5F3D" />
            <stop offset="0.923392" stopColor="#C02B3C" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.726614 -12.7947 71.8824 -4.08022 6.53166 16.435)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_12651" r="1">
            <stop offset="0.03" stopColor="#FFC800" />
            <stop offset="0.31" stopColor="#98BD42" />
            <stop offset="0.49" stopColor="#52B471" />
            <stop offset="0.843838" stopColor="#0D91E1" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_12651" x1="7.25046" x2="7.87502" y1="2" y2="16.4401">
            <stop stopColor="#3DCBFF" />
            <stop offset="0.246674" stopColor="#0588F7" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-6.33606 18.1116 -21.564 -7.99353 20.6605 6.14612)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_12651" r="1">
            <stop offset="0.0661714" stopColor="#8C48FF" />
            <stop offset="0.5" stopColor="#F2598A" />
            <stop offset="0.895833" stopColor="#FFB152" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_12651" x1="21.2941" x2="21.286" y1="6.67831" y2="10.6113">
            <stop offset="0.0581535" stopColor="#F8ADFA" />
            <stop offset="0.708063" stopColor="#A86EDD" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Copilot1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex items-center justify-center left-[308px] p-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] size-[62px] top-0" data-name="Copilot">
      <Copilot />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[62px] left-1/2 top-[791px] translate-x-[-50%] w-[370px]">
      <MainTabBar />
      <Copilot1 />
    </div>
  );
}

function ThumbsUp() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Thumbs up">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThumbsUp} />
    </div>
  );
}

function RedHeart() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Red heart">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRedHeart} />
    </div>
  );
}

function ClappingHands() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Clapping hands">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClappingHands} />
    </div>
  );
}

function GrinningSquintingFace() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Grinning squinting face">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGrinningSquintingFace} />
    </div>
  );
}

function RaisedHand() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Raised hand">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRaisedHand} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#212122] content-stretch flex gap-[4px] items-center px-[12px] py-[4px] relative rounded-[50px] shrink-0">
      <RaisedHand />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.24px]">
        <p className="css-ew64yg leading-[20px]">Raise</p>
      </div>
    </div>
  );
}

function Reactions() {
  return (
    <div className="absolute content-stretch flex h-[66.659px] items-center justify-between left-[12px] pl-[16px] pr-[8px] py-[12px] top-[365.99px] w-[376px]" data-name="Reactions">
      <ThumbsUp />
      <RedHeart />
      <ClappingHands />
      <GrinningSquintingFace />
      <Frame5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[12px] top-[365.99px]">
      <Reactions />
    </div>
  );
}

function TabBar() {
  return (
    <div className="absolute contents left-[6px] top-[340px]" data-name="Tab Bar">
      <Group6 />
      <div className="absolute backdrop-blur-[4px] bg-[rgba(24,24,24,0.98)] h-[534px] left-[6px] rounded-bl-[56px] rounded-br-[56px] rounded-tl-[38px] rounded-tr-[38px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)] top-[340px] w-[390px]" data-name="BG 3 Apps" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[6px] top-[340px]">
      <TabBar />
    </div>
  );
}

function People() {
  return (
    <div className="h-[28px] relative shrink-0 w-[24px]" data-name="People">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
        <g id="People">
          <path d={svgPaths.p1a7f6c00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-center justify-center left-[-3.5px] pb-[7px] pt-[6px] px-[8px] top-0 w-[102px]" data-name="Tab 1">
      <People />
      <p className="css-4hzbpn font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[12px] min-w-full relative shrink-0 text-[10px] text-center text-white tracking-[-0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Participants
      </p>
    </div>
  );
}

function ShareScreenStart() {
  return (
    <div className="h-[28px] relative shrink-0 w-[24px]" data-name="Share Screen Start">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
        <g id="Share Screen Start">
          <path d={svgPaths.p3abfbc50} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-center justify-center left-[63.5px] pb-[7px] pt-[6px] px-[8px] top-0 w-[102px]" data-name="Tab 4">
      <ShareScreenStart />
      <p className="css-4hzbpn font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[12px] min-w-full relative shrink-0 text-[10px] text-center text-white tracking-[-0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Share
      </p>
    </div>
  );
}

function Record() {
  return (
    <div className="h-[28px] relative shrink-0 w-[24px]" data-name="Record">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
        <g id="Record">
          <path d={svgPaths.p1495f200} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-center justify-center left-[121.5px] pb-[7px] pt-[6px] px-[8px] top-0 w-[102px]" data-name="Tab 5">
      <Record />
      <p className="css-4hzbpn font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[12px] min-w-full relative shrink-0 text-[10px] text-center text-white tracking-[-0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Record
      </p>
    </div>
  );
}

function SlideTextEdit() {
  return (
    <div className="h-[28px] relative shrink-0 w-[24px]" data-name="Slide Text Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
        <g id="Slide Text Edit">
          <path d={svgPaths.p24b69300} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-center justify-center left-[193.5px] pb-[7px] pt-[6px] px-[8px] top-0 w-[102px]" data-name="Tab 6">
      <SlideTextEdit />
      <p className="css-4hzbpn font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[12px] min-w-full relative shrink-0 text-[10px] text-center text-white tracking-[-0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Transcription
      </p>
    </div>
  );
}

function ClosedCaption() {
  return (
    <div className="h-[28px] relative shrink-0 w-[24px]" data-name="Closed Caption">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
        <g id="Closed Caption">
          <path d={svgPaths.p2ff70900} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px items-center justify-center left-[268.5px] pb-[7px] pt-[6px] px-[8px] top-0 w-[102px]" data-name="Tab 7">
      <ClosedCaption />
      <p className="css-4hzbpn font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[12px] min-w-full relative shrink-0 text-[10px] text-center text-white tracking-[-0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Captions
      </p>
    </div>
  );
}

function TabBarButtons() {
  return (
    <div className="h-[54px] relative shrink-0 w-[359px]" data-name="Tab Bar Buttons">
      <Tab2 />
      <Tab7 />
      <Tab4 />
      <Tab5 />
      <Tab8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(36,36,37,0.7)] relative rounded-[24px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[14px] relative w-full">
          <TabBarButtons />
        </div>
      </div>
    </div>
  );
}

function Icon24X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24x24)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24x24)">
          <path d={svgPaths.p1f0f6680} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[24px]">Turn on interpreter for me</p>
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

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Left />
      <div className="absolute flex items-center justify-center left-[315px] size-[12px] top-[109px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          {[...Array(2).keys()].map((_, i) => (
            <Chevron key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[315px] size-[12px] top-[58px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]" />
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
          <path d={svgPaths.p4aa6d00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[24px]">Meeting info</p>
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
          <path d={svgPaths.p3489a600} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[24px]">Meeting settings</p>
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
          <path d={svgPaths.p4020000} fill="var(--fill-0, #D92C2C)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d92c2c] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[24px]">Report this meeting</p>
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

function Frame() {
  return (
    <div className="bg-[rgba(36,36,37,0.7)] content-stretch flex flex-col h-[210px] items-start overflow-clip px-0 py-[2px] relative rounded-[24px] shrink-0 w-full">
      <OneLine />
      <OneLine1 />
      <OneLine2 />
      <OneLine3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[336.344px] items-start left-[24.43px] overflow-clip top-[443.74px] w-[358.955px]">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[26.21px] top-[348.74px]">
      <div className="absolute h-0 left-[26.21px] top-[789.6px] w-[349.586px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 349.586 0.5">
            <line id="Divider" stroke="var(--stroke-0, black)" strokeOpacity="0.1" strokeWidth="0.5" x2="349.586" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.2)] bottom-[520.8px] h-[4.468px] left-1/2 rounded-[100px] translate-x-[-50%] w-[73.652px]" />
    </div>
  );
}

function UbarExpanded() {
  return (
    <div className="absolute contents left-0 top-[334px]" data-name="ubar expanded">
      <Group2 />
      <Frame3 />
      <Group5 />
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

function Tab9() {
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

function Mic1() {
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
      <Mic1 />
      <div className="absolute bg-white h-[7px] left-1/2 rounded-bl-[4px] rounded-br-[4px] top-[12.5px] translate-x-[-50%] w-[8px]" />
    </div>
  );
}

function Placeholder1() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[2px] relative shrink-0" data-name="Placeholder">
      <Group4 />
    </div>
  );
}

function Tab10() {
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

function Tab11() {
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
          <path d={svgPaths.p8afa600} fill="var(--fill-0, #878BFB)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab12() {
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
      <Tab9 />
      <Tab10 />
      <Tab11 />
      <Tab12 />
    </div>
  );
}

function Copilot2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Copilot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Copilot">
          <path d={svgPaths.p16a963f0} fill="url(#paint0_radial_1_12651)" id="Shape" />
          <path d={svgPaths.p22760380} fill="url(#paint1_radial_1_12651)" id="Shape_2" />
          <g id="Shape_3">
            <path d={svgPaths.p2ecce500} fill="url(#paint2_radial_1_12651)" />
            <path d={svgPaths.p2ecce500} fill="url(#paint3_linear_1_12651)" />
          </g>
          <g id="Shape_4">
            <path d={svgPaths.p30395c00} fill="url(#paint4_radial_1_12651)" />
            <path d={svgPaths.p30395c00} fill="url(#paint5_linear_1_12651)" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-5.49698 -6.79344 -5.93495 5.69811 18.9994 10.3791)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_12651" r="1">
            <stop offset="0.0955758" stopColor="#00AEFF" />
            <stop offset="0.773185" stopColor="#2253CE" />
            <stop offset="1" stopColor="#0736C4" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(4.98016 6.47044 5.87896 -5.2813 5.57469 16.2453)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_12651" r="1">
            <stop stopColor="#FFB657" />
            <stop offset="0.633728" stopColor="#FF5F3D" />
            <stop offset="0.923392" stopColor="#C02B3C" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.726614 -12.7947 71.8824 -4.08022 6.53166 16.435)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_12651" r="1">
            <stop offset="0.03" stopColor="#FFC800" />
            <stop offset="0.31" stopColor="#98BD42" />
            <stop offset="0.49" stopColor="#52B471" />
            <stop offset="0.843838" stopColor="#0D91E1" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_12651" x1="7.25046" x2="7.87502" y1="2" y2="16.4401">
            <stop stopColor="#3DCBFF" />
            <stop offset="0.246674" stopColor="#0588F7" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-6.33606 18.1116 -21.564 -7.99353 20.6605 6.14612)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_12651" r="1">
            <stop offset="0.0661714" stopColor="#8C48FF" />
            <stop offset="0.5" stopColor="#F2598A" />
            <stop offset="0.895833" stopColor="#FFB152" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_12651" x1="21.2941" x2="21.286" y1="6.67831" y2="10.6113">
            <stop offset="0.0581535" stopColor="#F8ADFA" />
            <stop offset="0.708063" stopColor="#A86EDD" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Copilot3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex items-center justify-center left-[308px] p-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] size-[62px] top-0" data-name="Copilot">
      <Copilot2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[62px] left-1/2 top-[791px] translate-x-[-50%] w-[370px]">
      <MainTabBar1 />
      <Copilot3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute right-[13px] size-[32px] top-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2117130284">
          <circle cx="16" cy="16" fill="var(--fill-0, #878BFB)" id="Ellipse 3" opacity="0.5" r="16" />
          <circle cx="16" cy="16" data-figma-bg-blur-radius="900" fill="var(--fill-0, #878BFB)" id="Ellipse 4" r="11" />
          <g filter="url(#filter1_i_1_12693)" id="Rectangle 346603857">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="8" rx="1" width="2" x="15" y="12" />
          </g>
          <g filter="url(#filter2_i_1_12693)" id="Rectangle 346603858">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="4" rx="1" width="2" x="11" y="14" />
          </g>
          <g filter="url(#filter3_i_1_12693)" id="Rectangle 346603859">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="4" rx="1" width="2" x="19" y="14" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_1_12693_clip_path" transform="translate(895 895)">
            <circle cx="16" cy="16" r="11" />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.2" id="filter1_i_1_12693" width="2.2" x="14.8" y="12">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_12693" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter2_i_1_12693" width="2.2" x="10.8" y="14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_12693" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter3_i_1_12693" width="2.2" x="18.8" y="14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_12693" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Mic2() {
  return (
    <div className="absolute bottom-[9.96%] left-[calc(50%+165px)] overflow-clip top-[82.25%] translate-x-[-50%] w-[18px]" data-name="Mic">
      <div className="absolute h-[12px] left-1/2 top-[calc(50%+0.16px)] translate-x-[-50%] translate-y-[-50%] w-[9px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 12">
          <path d={svgPaths.p1fdcf480} fill="var(--fill-0, #37EF46)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[80.09%_4.1%_7.79%_88.72%]">
      <div className="absolute inset-[80.09%_4.1%_7.79%_88.72%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 27.5152">
          <ellipse cx="14" cy="13.7576" data-figma-bg-blur-radius="4" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" rx="14" ry="13.7576" />
          <defs>
            <clipPath id="bgblur_0_1_12700_clip_path" transform="translate(4 4)">
              <ellipse cx="14" cy="13.7576" rx="14" ry="13.7576" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Mic2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[227px] items-start left-0 p-[3px] rounded-[20px] top-[97px] w-[390px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame2147233135} />
      <div className="h-[224px] relative rounded-[17px] shrink-0 w-[384px]" data-name="image">
        <div aria-hidden="true" className="absolute border border-[#010101] border-solid inset-0 pointer-events-none rounded-[17px]" />
      </div>
      <div className="absolute h-[230px] left-0 rounded-[20px] top-0 w-[390px]" data-name="image">
        <div aria-hidden="true" className="absolute border-3 border-[#878bfb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <Group1 />
      <div className="absolute h-[90px] left-[310px] rounded-[12px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[128px] w-[67px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle346604096} />
      </div>
      <Group />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[24px] items-center justify-center left-[14px] p-[10px] rounded-[100px] top-[291px]">
      <p className="css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aadi Kapoor
      </p>
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
      <p className="css-ew64yg font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[11px] text-center text-white tracking-[-0.24px]">Timer topic name #1</p>
    </div>
  );
}

function PillButtonTeams2IOs1() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px]" data-name="Pill button (Teams 2 iOS)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <PillButtonTeams2IOs />
          <Content1 />
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

function Frame6() {
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
      <Frame6 />
    </div>
  );
}

function PillButtonTeams2IOs2() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] content-stretch flex h-[36px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Pill button (Teams 2 iOS)">
      <Content2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[393px]">
      <PillButtonTeams2IOs1 />
      <PillButtonTeams2IOs2 />
    </div>
  );
}

function SecondaryHeaderRow() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Secondary header row">
      <Frame10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[calc(50%+0.5px)] top-[56px] translate-x-[-50%] w-[393px]">
      <SecondaryHeaderRow />
    </div>
  );
}

export default function DrawerForMoreMenu() {
  return (
    <div className="bg-black border-6 border-black border-solid overflow-clip relative rounded-[54px] shadow-[0px_12px_48px_0px_rgba(0,0,0,0.24)] size-full" data-name="Drawer for More menu">
      <div className="absolute bottom-[83px] h-0 left-1/2 translate-x-[-50%] w-[402px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 0.5">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="0.5" x2="402" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <Header />
      <Frame4 />
      <UbarExpanded />
      <Frame9 />
      <Frame8 />
      <Frame2 />
      <Frame7 />
    </div>
  );
}