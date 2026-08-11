import svgPaths from "./svg-1ql4uf57ul";

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

function UbarExpanded() {
  return (
    <div className="absolute contents left-0 top-0" data-name="ubar expanded">
      <Group />
      <Group3 />
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

function Copilot3() {
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

function Copilot2() {
  return (
    <div className="absolute bg-[#584bdf] content-stretch flex items-center justify-center left-[308px] p-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] size-[62px] top-0" data-name="Copilot">
      <Copilot3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 absolute h-[62px] left-1/2 top-[457px] w-[370px]">
      <MainTabBar1 />
      <Copilot2 />
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

function Send() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Send">
          <path d={svgPaths.p39d05380} fill="var(--fill-0, #A6A6A6)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center left-[337px] top-[14px]">
      <Send />
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

function Copilot4() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Copilot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Copilot">
          <path d={svgPaths.p8e63130} fill="var(--fill-0, #616161)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function HomeLogo() {
  return (
    <div className="absolute content-stretch flex h-[201px] items-center justify-center left-0 p-[8px] top-[67px] w-[387px]" data-name="Home logo">
      <Copilot4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Color 2">
            <path d={svgPaths.p1ad6dd00} fill="url(#paint0_linear_72_6731)" />
            <path d={svgPaths.p2ba29680} fill="url(#paint1_linear_72_6731)" />
            <path d={svgPaths.pf9d92c0} fill="url(#paint2_linear_72_6731)" />
            <path d={svgPaths.p1bd7aa00} fill="url(#paint3_linear_72_6731)" />
          </g>
          <path d={svgPaths.p1d6e7300} fill="url(#paint4_linear_72_6731)" id="Color 1" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_72_6731" x1="9.35" x2="20.9" y1="3" y2="19">
            <stop stopColor="#36DFF1" />
            <stop offset="1" stopColor="#0094F0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_72_6731" x1="9.35" x2="20.9" y1="3" y2="19">
            <stop stopColor="#36DFF1" />
            <stop offset="1" stopColor="#0094F0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_72_6731" x1="9.35" x2="20.9" y1="3" y2="19">
            <stop stopColor="#36DFF1" />
            <stop offset="1" stopColor="#0094F0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_72_6731" x1="9.35" x2="20.9" y1="3" y2="19">
            <stop stopColor="#36DFF1" />
            <stop offset="1" stopColor="#0094F0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_72_6731" x1="3.66463" x2="7.23209" y1="6.12697" y2="19.1474">
            <stop offset="0.125321" stopColor="#9C6CFE" />
            <stop offset="1" stopColor="#7A41DC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[52px] items-start relative rounded-[8px] shrink-0" data-name="Content">
      <Icon />
      <div className="flex flex-col font-['SF_Pro:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.23px] whitespace-nowrap">
        <p className="leading-[20px]">List action items</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#212121] content-stretch flex h-[76px] items-center justify-center px-[16px] py-[12px] relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      <Content />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Shape">
            <path d={svgPaths.p2f963280} fill="url(#paint0_radial_72_6703)" />
            <path d={svgPaths.p2f963280} fill="url(#paint1_linear_72_6703)" />
            <path d={svgPaths.p2f963280} fill="url(#paint2_radial_72_6703)" fillOpacity="0.2" />
            <path d={svgPaths.p2f963280} fill="url(#paint3_radial_72_6703)" fillOpacity="0.2" />
            <path d={svgPaths.p2f963280} fill="url(#paint4_radial_72_6703)" fillOpacity="0.2" />
            <path d={svgPaths.p2f963280} fill="url(#paint5_radial_72_6703)" fillOpacity="0.2" />
          </g>
          <rect fill="url(#paint6_linear_72_6703)" height="8.44835" id="Rectangle 346603190" rx="0.777036" width="1.55407" x="11.2217" y="9.99927" />
          <rect fill="url(#paint7_linear_72_6703)" height="2.99933" id="Rectangle 346603191" rx="0.777036" width="1.55407" x="11.2217" y="5.99829" />
          <path d={svgPaths.p23ee2c00} fill="url(#paint8_linear_72_6703)" id="Rectangle 346603192" />
          <path d={svgPaths.p5711100} fill="url(#paint9_linear_72_6703)" id="Rectangle 346603193" />
          <path d={svgPaths.p3115a700} fill="url(#paint10_linear_72_6703)" id="Intersect" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(4.93147 17.1801 -25.9278 8.28513 6.99964 3.96344)" gradientUnits="userSpaceOnUse" id="paint0_radial_72_6703" r="1">
            <stop stopColor="#FFE06B" />
            <stop offset="0.376456" stopColor="#FFA43D" />
            <stop offset="1" stopColor="#E67505" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_72_6703" x1="12.0002" x2="12.0002" y1="2" y2="21.9993">
            <stop offset="0.792411" stopColor="#D34719" stopOpacity="0" />
            <stop offset="0.834821" stopColor="#D34719" />
            <stop offset="1" stopColor="#D34719" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(8.65212 9.96846) rotate(46.8183) scale(1.98967 1.59078)" gradientUnits="userSpaceOnUse" id="paint2_radial_72_6703" r="1">
            <stop offset="0.165145" stopColor="#741C06" />
            <stop offset="0.854115" stopColor="#741C06" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(12.0002 7.77419) rotate(90) scale(2.50675 1.88007)" gradientUnits="userSpaceOnUse" id="paint3_radial_72_6703" r="1">
            <stop offset="0.165145" stopColor="#741C06" />
            <stop offset="0.854115" stopColor="#741C06" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(15.3281 9.89567) rotate(133.802) scale(2.38941 1.79206)" gradientUnits="userSpaceOnUse" id="paint4_radial_72_6703" r="1">
            <stop offset="0.165145" stopColor="#741C06" />
            <stop offset="0.854115" stopColor="#741C06" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(12.0002 13.7143) rotate(-180) scale(1.91514 5.51584)" gradientUnits="userSpaceOnUse" id="paint5_radial_72_6703" r="1">
            <stop offset="0.165145" stopColor="#741C06" />
            <stop offset="0.777027" stopColor="#741C06" stopOpacity="0" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_72_6703" x1="11.9987" x2="11.9987" y1="9.99927" y2="18.4521">
            <stop stopColor="#FFF2BE" />
            <stop offset="0.43735" stopColor="#FFD638" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_72_6703" x1="11.2217" x2="12.7758" y1="7.49796" y2="7.49796">
            <stop stopColor="#FFF2BE" />
            <stop offset="1" stopColor="#FFD638" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_72_6703" x1="8.15351" x2="9.1988" y1="9.81483" y2="8.76953">
            <stop stopColor="#FFF2BE" />
            <stop offset="1" stopColor="#FFD638" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_72_6703" x1="14.7631" x2="15.8005" y1="8.80883" y2="9.84627">
            <stop stopColor="#FFF2BE" />
            <stop offset="1" stopColor="#FFD638" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_72_6703" x1="11.3463" x2="12.2893" y1="17.4961" y2="19.9948">
            <stop stopColor="#FFC7A3" />
            <stop offset="1" stopColor="#FF9C70" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[52px] items-start relative rounded-[8px] shrink-0" data-name="Content">
      <Icon1 />
      <div className="flex flex-col font-['SF_Pro:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.23px] whitespace-nowrap">
        <p className="leading-[20px]">List open questions</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#212121] content-stretch flex h-[76px] items-center justify-center px-[16px] py-[12px] relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      <Content1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p28fa8f00} fill="url(#paint0_linear_72_6725)" id="Color 4" />
          <path d={svgPaths.p1478d900} fill="url(#paint1_linear_72_6725)" id="Color 3" />
          <path d={svgPaths.p1fd6c380} fill="url(#paint2_linear_72_6725)" id="Color 2" />
          <path d={svgPaths.p3f35a800} fill="url(#paint3_linear_72_6725)" id="Color 1" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_72_6725" x1="13.1372" x2="15.4437" y1="8.46783" y2="14.7088">
            <stop stopColor="#FFA43D" />
            <stop offset="1" stopColor="#FB5937" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_72_6725" x1="0.996656" x2="6.04366" y1="16.9505" y2="21.9671">
            <stop offset="0.255" stopColor="#FFD394" />
            <stop offset="1" stopColor="#FF921F" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_72_6725" x1="20.2399" x2="17.1376" y1="3.7506" y2="6.66782">
            <stop stopColor="#F97DBD" />
            <stop offset="1" stopColor="#DD3CE2" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_72_6725" x1="16.4946" x2="11.4203" y1="8.95455" y2="6.7359">
            <stop stopColor="#FF921F" />
            <stop offset="1" stopColor="#FFE994" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[52px] items-start relative rounded-[8px] shrink-0" data-name="Content">
      <Icon2 />
      <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.23px] whitespace-nowrap">
        <p className="leading-[20px]">Recap in detail</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#212121] content-stretch flex h-[76px] items-center justify-center px-[16px] py-[12px] relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      <Content2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Color 6">
            <path d={svgPaths.p372dba80} fill="url(#paint0_linear_72_6711)" />
            <path d={svgPaths.p372dba80} fill="url(#paint1_radial_72_6711)" fillOpacity="0.5" />
          </g>
          <path d={svgPaths.p3f00a500} fill="url(#paint2_linear_72_6711)" id="Color 5" />
          <path d={svgPaths.p3efeb200} fill="url(#paint3_linear_72_6711)" id="Color 4" />
          <path d={svgPaths.p37eed1f0} fill="url(#paint4_linear_72_6711)" id="Color 3" />
          <path d={svgPaths.p25864f00} fill="url(#paint5_linear_72_6711)" id="Color 2" />
          <path d={svgPaths.p8e10880} fill="url(#paint6_linear_72_6711)" id="Color 1" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_72_6711" x1="15.2" x2="16.8215" y1="2" y2="18.8699">
            <stop stopColor="#6CE0FF" />
            <stop offset="1" stopColor="#4894FE" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-8.66667 9.09353 -5.69747 -4.77248 20.6667 2.625)" gradientUnits="userSpaceOnUse" id="paint1_radial_72_6711" r="1">
            <stop offset="0.362364" stopColor="#4A43CB" />
            <stop offset="1" stopColor="#4A43CB" stopOpacity="0" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_72_6711" x1="16.4883" x2="14.7383" y1="4.91667" y2="7.83333">
            <stop stopColor="#9FF0F9" />
            <stop offset="1" stopColor="#B3E0FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_72_6711" x1="15.0296" x2="18.7298" y1="16.3085" y2="20.0179">
            <stop stopColor="#FFA43D" />
            <stop offset="1" stopColor="#FB5937" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_72_6711" x1="11.3868" x2="14.4562" y1="19.976" y2="23.042">
            <stop offset="0.255" stopColor="#FFD394" />
            <stop offset="1" stopColor="#FF921F" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_72_6711" x1="21.9045" x2="19.9256" y1="13.1155" y2="15.0159">
            <stop stopColor="#F97DBD" />
            <stop offset="1" stopColor="#DD3CE2" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_72_6711" x1="19.6573" x2="16.4883" y1="16.292" y2="14.9024">
            <stop stopColor="#FF921F" />
            <stop offset="1" stopColor="#FFE994" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[52px] items-start relative rounded-[8px] shrink-0" data-name="Content">
      <Icon3 />
      <div className="flex flex-col font-['SF_Pro:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white tracking-[-0.23px] whitespace-nowrap">
        <p className="leading-[20px]">Generate agenda</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#212121] content-stretch flex h-[76px] items-center justify-center px-[16px] py-[12px] relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      <Content3 />
    </div>
  );
}

function ShortcutsIOs() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 overflow-x-auto overflow-y-clip px-[16px] py-[12px] top-[268px] w-[390px]" data-name="Shortcuts/iOS">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
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

function Icon4() {
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
      <Icon4 />
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
      <Frame3 />
      <InputBox />
      <HomeLogo />
      <ShortcutsIOs />
      <Back />
      <Frame4 />
    </div>
  );
}