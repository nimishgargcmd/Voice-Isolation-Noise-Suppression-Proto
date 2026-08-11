import svgPaths from "./svg-72r67vcw7b";
import img00LoaderAlphaSmall51 from "figma:asset/f83b4b5d0a764d9f8ec0da866b31f121692bc7e1.png";

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

function Group1() {
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
      <Group1 />
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

function Copilot1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Copilot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Copilot">
          <path d={svgPaths.p16a963f0} fill="url(#paint0_radial_67_1222)" id="Shape" />
          <path d={svgPaths.p22760380} fill="url(#paint1_radial_67_1222)" id="Shape_2" />
          <g id="Shape_3">
            <path d={svgPaths.p2ecce500} fill="url(#paint2_radial_67_1222)" />
            <path d={svgPaths.p2ecce500} fill="url(#paint3_linear_67_1222)" />
          </g>
          <g id="Shape_4">
            <path d={svgPaths.p30395c00} fill="url(#paint4_radial_67_1222)" />
            <path d={svgPaths.p30395c00} fill="url(#paint5_linear_67_1222)" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-5.49698 -6.79344 -5.93495 5.69811 18.9994 10.3791)" gradientUnits="userSpaceOnUse" id="paint0_radial_67_1222" r="1">
            <stop offset="0.0955758" stopColor="#00AEFF" />
            <stop offset="0.773185" stopColor="#2253CE" />
            <stop offset="1" stopColor="#0736C4" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(4.98016 6.47044 5.87896 -5.2813 5.57469 16.2453)" gradientUnits="userSpaceOnUse" id="paint1_radial_67_1222" r="1">
            <stop stopColor="#FFB657" />
            <stop offset="0.633728" stopColor="#FF5F3D" />
            <stop offset="0.923392" stopColor="#C02B3C" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.726614 -12.7947 71.8824 -4.08022 6.53166 16.435)" gradientUnits="userSpaceOnUse" id="paint2_radial_67_1222" r="1">
            <stop offset="0.03" stopColor="#FFC800" />
            <stop offset="0.31" stopColor="#98BD42" />
            <stop offset="0.49" stopColor="#52B471" />
            <stop offset="0.843838" stopColor="#0D91E1" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_67_1222" x1="7.25046" x2="7.87502" y1="2" y2="16.4401">
            <stop stopColor="#3DCBFF" />
            <stop offset="0.246674" stopColor="#0588F7" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-6.33606 18.1116 -21.564 -7.99353 20.6605 6.14612)" gradientUnits="userSpaceOnUse" id="paint4_radial_67_1222" r="1">
            <stop offset="0.0661714" stopColor="#8C48FF" />
            <stop offset="0.5" stopColor="#F2598A" />
            <stop offset="0.895833" stopColor="#FFB152" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_67_1222" x1="21.2941" x2="21.286" y1="6.67831" y2="10.6113">
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

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute h-[62px] left-1/2 top-[457px] w-[370px]">
      <MainTabBar />
      <Copilot />
    </div>
  );
}

function TabBar() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Tab Bar">
      <div className="absolute backdrop-blur-[4px] bg-[rgba(24,24,24,0.98)] h-[534px] left-0 rounded-bl-[56px] rounded-br-[56px] rounded-tl-[38px] rounded-tr-[38px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)] top-0 w-[390px]" data-name="BG 3 Apps" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <TabBar />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[14.83px] top-[449.6px]">
      <div className="absolute h-0 left-[14.83px] top-[449.6px] w-[360.342px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360.342 0.5">
            <line id="Divider" stroke="var(--stroke-0, black)" strokeOpacity="0.1" strokeWidth="0.5" x2="360.342" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PromptBubble() {
  return (
    <div className="bg-[#584bdf] content-stretch flex items-center justify-end px-[16.533px] py-[12.4px] relative rounded-[16.533px] shrink-0" data-name="Prompt bubble">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] max-w-[249.03341674804688px] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.4443px] whitespace-nowrap">
        <p className="text-[#d9d9d9] text-[17px] tracking-[-0.408px]">
          <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[22px]">{`Help me understand `}</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px]">what is the action item on my team?</span>
        </p>
      </div>
    </div>
  );
}

function Prompt() {
  return (
    <div className="absolute content-stretch flex items-start justify-end left-[13.46px] top-[68px] w-[364.767px]" data-name="Prompt">
      <PromptBubble />
    </div>
  );
}

function UbarExpanded() {
  return (
    <div className="absolute contents left-0 top-0" data-name="ubar expanded">
      <Group />
      <Group3 />
      <Prompt />
    </div>
  );
}

function Copilot2() {
  return (
    <div className="relative shrink-0 size-[20.231px]" data-name="Copilot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2314 20.2314">
        <g id="Copilot">
          <path d={svgPaths.p36523980} fill="var(--fill-0, #808080)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function LogoBadge() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo + badge">
      <Copilot2 />
    </div>
  );
}

function MorseCode() {
  return (
    <div className="h-[4px] relative shrink-0 w-[37px]" data-name="Morse Code">
      <div className="absolute h-[4px] left-0 top-0 w-[37.037px]" data-name="00_Loader alpha small 5 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img00LoaderAlphaSmall51} />
      </div>
    </div>
  );
}

function OutputHeaderIOs() {
  return (
    <div className="absolute content-stretch flex gap-[6.069px] items-center left-[15px] top-[149px] w-[357.084px]" data-name="Output header / iOS">
      <LogoBadge />
      <MorseCode />
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

function Group2() {
  return (
    <div className="absolute contents left-0 top-[2px]">
      <Mic1 />
      <div className="-translate-x-1/2 absolute bg-white h-[7px] left-1/2 rounded-bl-[4px] rounded-br-[4px] top-[12.5px] w-[8px]" />
    </div>
  );
}

function Placeholder1() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[2px] relative shrink-0" data-name="Placeholder">
      <Group2 />
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
          <path d={svgPaths.p8afa600} fill="var(--fill-0, white)" id="Shape" />
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

function Copilot4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Copilot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Copilot">
          <path d={svgPaths.p16a963f0} fill="url(#paint0_radial_67_1222)" id="Shape" />
          <path d={svgPaths.p22760380} fill="url(#paint1_radial_67_1222)" id="Shape_2" />
          <g id="Shape_3">
            <path d={svgPaths.p2ecce500} fill="url(#paint2_radial_67_1222)" />
            <path d={svgPaths.p2ecce500} fill="url(#paint3_linear_67_1222)" />
          </g>
          <g id="Shape_4">
            <path d={svgPaths.p30395c00} fill="url(#paint4_radial_67_1222)" />
            <path d={svgPaths.p30395c00} fill="url(#paint5_linear_67_1222)" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-5.49698 -6.79344 -5.93495 5.69811 18.9994 10.3791)" gradientUnits="userSpaceOnUse" id="paint0_radial_67_1222" r="1">
            <stop offset="0.0955758" stopColor="#00AEFF" />
            <stop offset="0.773185" stopColor="#2253CE" />
            <stop offset="1" stopColor="#0736C4" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(4.98016 6.47044 5.87896 -5.2813 5.57469 16.2453)" gradientUnits="userSpaceOnUse" id="paint1_radial_67_1222" r="1">
            <stop stopColor="#FFB657" />
            <stop offset="0.633728" stopColor="#FF5F3D" />
            <stop offset="0.923392" stopColor="#C02B3C" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.726614 -12.7947 71.8824 -4.08022 6.53166 16.435)" gradientUnits="userSpaceOnUse" id="paint2_radial_67_1222" r="1">
            <stop offset="0.03" stopColor="#FFC800" />
            <stop offset="0.31" stopColor="#98BD42" />
            <stop offset="0.49" stopColor="#52B471" />
            <stop offset="0.843838" stopColor="#0D91E1" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_67_1222" x1="7.25046" x2="7.87502" y1="2" y2="16.4401">
            <stop stopColor="#3DCBFF" />
            <stop offset="0.246674" stopColor="#0588F7" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-6.33606 18.1116 -21.564 -7.99353 20.6605 6.14612)" gradientUnits="userSpaceOnUse" id="paint4_radial_67_1222" r="1">
            <stop offset="0.0661714" stopColor="#8C48FF" />
            <stop offset="0.5" stopColor="#F2598A" />
            <stop offset="0.895833" stopColor="#FFB152" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_67_1222" x1="21.2941" x2="21.286" y1="6.67831" y2="10.6113">
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
    <div className="absolute bg-[#584bdf] content-stretch flex items-center justify-center left-[308px] p-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] size-[62px] top-0" data-name="Copilot">
      <Copilot4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 absolute h-[62px] left-1/2 top-[457px] w-[370px]">
      <MainTabBar1 />
      <Copilot3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[17.465px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4648 17.4648">
        <g id="Icon">
          <path d={svgPaths.p352b780} fill="var(--fill-0, #5EC75A)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Right() {
  return (
    <div className="absolute content-stretch flex gap-[14.554px] items-center left-[62.5px] top-px" data-name="Right">
      <Icon />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute h-[20px] left-[calc(50%-0.02px)] top-[27px] w-[79.965px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-0 not-italic right-[21.96px] text-[17px] text-center text-white top-[10px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">Copilot</p>
      </div>
      <Right />
    </div>
  );
}

function Fill() {
  return <div className="absolute bg-black inset-0 opacity-67 rounded-[1000px]" data-name="Fill" />;
}

function Bg() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 left-1/2 top-0 w-[370px]" data-name="BG">
      <Fill />
    </div>
  );
}

function Voice() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Voice">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Voice">
          <path d={svgPaths.p3460ed00} fill="var(--fill-0, #584BDF)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Stop() {
  return (
    <div className="bg-[rgba(88,75,223,0.3)] content-stretch flex items-center justify-center relative rounded-[99px] shrink-0 size-[32px]" data-name="Stop">
      <Voice />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center left-[325px] top-[8px]">
      <Stop />
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Add">
          <path d={svgPaths.p23b109c0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center left-[6px] rounded-[40px] size-[36px] top-[6px]">
      <Add />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[6px] top-[6px]">
      <Frame1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[calc(50%-131px)] not-italic text-[#6e6e6e] text-[15px] top-[24px] tracking-[-0.078px] w-[209px]">
        <p className="leading-[20px] whitespace-pre-wrap">Ask Copilot privately</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-0 top-0">
      <Bg />
      <Frame />
      <Group4 />
    </div>
  );
}

function InputBox() {
  return (
    <div className="absolute h-[48px] left-[10px] top-[378px] w-[370px]" data-name="input box">
      <Group5 />
    </div>
  );
}

function Fill1() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function Bg1() {
  return (
    <div className="-translate-y-1/2 absolute h-[44px] left-0 right-0 top-1/2" data-name="BG">
      <Fill1 />
    </div>
  );
}

function Icon24Pt() {
  return (
    <div className="-translate-y-1/2 absolute left-[10px] size-[24px] top-1/2" data-name="Icon (24pt)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24pt)">
          <path d={svgPaths.p2f52be80} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Back() {
  return (
    <div className="absolute left-[12px] size-[44px] top-[16px]" data-name="Back">
      <Bg1 />
      <Icon24Pt />
    </div>
  );
}

export default function CoPilotOverlay() {
  return (
    <div className="overflow-clip relative rounded-bl-[54px] rounded-br-[54px] size-full" data-name="CoPilot overlay">
      <div className="-translate-x-1/2 absolute bottom-[89px] h-0 left-[calc(50%+6px)] w-[402px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 0.5">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="0.5" x2="402" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <Frame2 />
      <UbarExpanded />
      <OutputHeaderIOs />
      <Frame3 />
      <Frame4 />
      <InputBox />
      <Back />
    </div>
  );
}