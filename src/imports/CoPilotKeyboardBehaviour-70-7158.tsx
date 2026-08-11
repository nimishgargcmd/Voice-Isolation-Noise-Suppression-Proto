import svgPaths from "./svg-qlg9mnpaxy";

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

function Frame4() {
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

function Group9() {
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
      <Group9 />
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

function Frame8() {
  return (
    <div className="-translate-x-1/2 absolute h-[62px] left-1/2 top-[457px] w-[370px]">
      <MainTabBar1 />
      <Copilot2 />
    </div>
  );
}

function Fill() {
  return (
    <div className="absolute inset-0 opacity-67 rounded-[1000px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[1000px]">
        <div className="absolute bg-[rgba(204,204,204,0.5)] inset-0 mix-blend-color-burn rounded-[1000px]" />
        <div className="absolute inset-0 rounded-[1000px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%)" }} />
      </div>
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 mix-blend-screen rounded-[296px]" data-name="Glass Effect" />;
}

function Bg() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[108px] left-1/2 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.6)] top-[378px] w-[370px]" data-name="BG">
      <Fill />
      <GlassEffect />
    </div>
  );
}

function Send() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Send">
          <path d={svgPaths.pbd06b00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center left-[347px] top-[392px]">
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
    <div className="absolute bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center left-[16px] rounded-[40px] size-[36px] top-[384px]">
      <Add />
    </div>
  );
}

function TextCursorTeams2IOs() {
  return (
    <div className="absolute h-[24px] left-[62px] top-[390px] w-[2px]" data-name="Text cursor (Teams 2 iOS)">
      <div className="absolute bg-[#5c4fe3] inset-0 rounded-[1px]" data-name="Text cursor" />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[16px] top-[384px]">
      <Frame1 />
      <TextCursorTeams2IOs />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[calc(50%-131px)] not-italic text-[#6e6e6e] text-[15px] top-[402px] tracking-[-0.078px] w-[209px]">
        <p className="leading-[20px] whitespace-pre-wrap">Ask CoPilot</p>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <button className="-translate-x-1/2 absolute contents cursor-pointer left-1/2 top-[378px]">
      <Bg />
      <Frame />
      <Group13 />
    </button>
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

function Frame11() {
  return (
    <div className="-translate-x-1/2 absolute h-[20px] left-[calc(50%-0.02px)] top-[27px] w-[79.965px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-0 not-italic right-[21.96px] text-[17px] text-center text-white top-[10px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">Copilot</p>
      </div>
      <Right />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Help me understand</p>
      </div>
    </div>
  );
}

function ArrowEnter() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Arrow Enter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Arrow Enter">
          <path d={svgPaths.p4a6f140} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <button className="bg-[#333] content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content />
      <ArrowEnter />
    </button>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Help me answer</p>
      </div>
    </div>
  );
}

function ArrowEnter1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Arrow Enter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Arrow Enter">
          <path d={svgPaths.p4a6f140} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#333] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content1 />
      <ArrowEnter1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">What can I ask?</p>
      </div>
    </div>
  );
}

function ArrowEnter2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Arrow Enter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Arrow Enter">
          <path d={svgPaths.p4a6f140} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#333] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content2 />
      <ArrowEnter2 />
    </div>
  );
}

function Shorcuts() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-end justify-center left-[calc(50%+2px)] overflow-x-auto overflow-y-clip px-[11.643px] py-[8.732px] top-[195px] w-[390px]" data-name="Shorcuts">
      <Button />
      <Button1 />
      <Button2 />
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

function CoPilotOverlay() {
  return (
    <div className="absolute h-[534px] left-[63px] top-[67px] w-[390px]" data-name="CoPilot overlay">
      <div className="-translate-x-1/2 absolute bottom-[89px] h-0 left-[calc(50%+6px)] w-[402px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 0.5">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="0.5" x2="402" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <Frame4 />
      <UbarExpanded />
      <Frame8 />
      <Group14 />
      <Frame11 />
      <Shorcuts />
      <Back />
    </div>
  );
}

function Video2() {
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

function Tab8() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 7">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <Video2 />
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

function Group3() {
  return (
    <div className="absolute contents left-0 top-[2px]">
      <Mic2 />
      <div className="-translate-x-1/2 absolute bg-white h-[7px] left-1/2 rounded-bl-[4px] rounded-br-[4px] top-[12.5px] w-[8px]" />
    </div>
  );
}

function Placeholder2() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[2px] relative shrink-0" data-name="Placeholder">
      <Group3 />
    </div>
  );
}

function Tab9() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <Placeholder2 />
        </div>
      </div>
    </div>
  );
}

function Chat2() {
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

function Tab10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative w-full">
          <Chat2 />
        </div>
      </div>
    </div>
  );
}

function MoreHorizontal2() {
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

function Tab11() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 4">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <MoreHorizontal2 />
        </div>
      </div>
    </div>
  );
}

function MainTabBar2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex h-[62px] items-center left-0 pl-[4px] pr-[12px] py-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] top-0 w-[296px]" data-name="Main Tab Bar">
      <Tab8 />
      <Tab9 />
      <Tab10 />
      <Tab11 />
    </div>
  );
}

function Copilot5() {
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

function Copilot4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex items-center justify-center left-[308px] p-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] size-[62px] top-0" data-name="Copilot">
      <Copilot5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute h-[62px] left-1/2 top-[457px] w-[370px]">
      <MainTabBar2 />
      <Copilot4 />
    </div>
  );
}

function TabBar1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Tab Bar">
      <div className="absolute backdrop-blur-[4px] bg-[rgba(24,24,24,0.98)] h-[534px] left-0 rounded-bl-[56px] rounded-br-[56px] rounded-tl-[38px] rounded-tr-[38px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)] top-0 w-[390px]" data-name="BG 3 Apps" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-0">
      <TabBar1 />
    </div>
  );
}

function Group10() {
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

function UbarExpanded1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="ubar expanded">
      <Group4 />
      <Group10 />
    </div>
  );
}

function Fab() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[28px]" data-name="FAB">
      <div className="absolute inset-[-50%_-62.5%_-75%_-62.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
          <g id="FAB">
            <g filter="url(#filter0_d_69_2636)" id="Ellipse 3706">
              <circle cx="36" cy="32" fill="var(--fill-0, #BFBFBF)" fillOpacity="0.08" r="16" shapeRendering="crispEdges" />
            </g>
            <g id="Add">
              <path d={svgPaths.p3db90770} fill="var(--fill-0, white)" id="Shape" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72" id="filter0_d_69_2636" width="72" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_69_2636" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_69_2636" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Send1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+1px)] size-[16px] top-1/2" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Send">
          <path d={svgPaths.p359730f0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Fab1() {
  return (
    <div className="absolute bg-[#5a50db] left-[347px] rounded-[30px] size-[32px] top-[28px]" data-name="FAB">
      <Send1 />
    </div>
  );
}

function Emoji() {
  return (
    <div className="absolute left-[310px] size-[24px] top-[63px]" data-name="Emoji">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Emoji">
          <path d={svgPaths.p3925ad00} fill="var(--fill-0, #212121)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#1f1f1f] bottom-[54px] h-[277px] left-0 rounded-tl-[30px] rounded-tr-[30px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.09),0px_4px_20px_0px_rgba(0,0,0,0.04)] w-[390px]">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[0] left-[60px] not-italic text-[#d9d9d9] text-[0px] text-[17px] top-[21px] tracking-[-0.408px] w-[237px] whitespace-pre-wrap">
        <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[22px]">{`Help me understand `}</span>
        <span className="leading-[22px]">what is the action item on my team?</span>
      </p>
      <Fab />
      <Fab1 />
      <div className="absolute bg-[#5a50db] h-[25px] left-[277px] rounded-[4px] top-[42px] w-[3px]" />
      <Emoji />
    </div>
  );
}

function Background() {
  return <div className="absolute inset-0 rounded-[27px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.17) 100%), linear-gradient(90deg, rgba(242, 242, 242, 0.2) 0%, rgba(242, 242, 242, 0.2) 100%), linear-gradient(90deg, rgba(24, 24, 26, 0.5) 0%, rgba(24, 24, 26, 0.5) 100%)" }} />;
}

function Key() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">q</p>
      </div>
    </div>
  );
}

function Key1() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">w</p>
      </div>
    </div>
  );
}

function Key2() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">e</p>
      </div>
    </div>
  );
}

function Key3() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">r</p>
      </div>
    </div>
  );
}

function Key4() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">t</p>
      </div>
    </div>
  );
}

function Key5() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">y</p>
      </div>
    </div>
  );
}

function Key6() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">u</p>
      </div>
    </div>
  );
}

function Key7() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">i</p>
      </div>
    </div>
  );
}

function Key8() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">o</p>
      </div>
    </div>
  );
}

function Key9() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">p</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[6.5px] items-center justify-center relative shrink-0 w-full" data-name="Row 1">
      <Key />
      <Key1 />
      <Key2 />
      <Key3 />
      <Key4 />
      <Key5 />
      <Key6 />
      <Key7 />
      <Key8 />
      <Key9 />
    </div>
  );
}

function Key10() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">a</p>
      </div>
    </div>
  );
}

function Key11() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">s</p>
      </div>
    </div>
  );
}

function Key12() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">d</p>
      </div>
    </div>
  );
}

function Key13() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">f</p>
      </div>
    </div>
  );
}

function Key14() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">g</p>
      </div>
    </div>
  );
}

function Key15() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">h</p>
      </div>
    </div>
  );
}

function Key16() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">j</p>
      </div>
    </div>
  );
}

function Key17() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">k</p>
      </div>
    </div>
  );
}

function Key18() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">l</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.5px] items-center justify-center px-[20px] relative w-full">
          <Key10 />
          <Key11 />
          <Key12 />
          <Key13 />
          <Key14 />
          <Key15 />
          <Key16 />
          <Key17 />
          <Key18 />
        </div>
      </div>
    </div>
  );
}

function ShiftKey() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[45px]" data-name="Shift Key">
      <div className="absolute bg-[#454545] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] uppercase">
        <p className="leading-[28px] whitespace-pre-wrap">􀆝</p>
      </div>
    </div>
  );
}

function Key19() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">z</p>
      </div>
    </div>
  );
}

function Key20() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">x</p>
      </div>
    </div>
  );
}

function Key21() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">c</p>
      </div>
    </div>
  );
}

function Key22() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">v</p>
      </div>
    </div>
  );
}

function Key23() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">b</p>
      </div>
    </div>
  );
}

function Key24() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">n</p>
      </div>
    </div>
  );
}

function Key25() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">m</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6.5px] items-start min-h-px min-w-px relative" data-name="Row 3">
      <Key19 />
      <Key20 />
      <Key21 />
      <Key22 />
      <Key23 />
      <Key24 />
      <Key25 />
    </div>
  );
}

function DeleteKey() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[45px]" data-name="Delete Key">
      <div className="absolute bg-[#454545] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] uppercase">
        <p className="leading-[28px] whitespace-pre-wrap">􁂈</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[14.25px] items-center relative shrink-0 w-full" data-name="Row 3">
      <ShiftKey />
      <Row3 />
      <DeleteKey />
    </div>
  );
}

function KeyboardSwitch() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Keyboard Switch">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] left-[-2px] not-italic right-[-1.75px] text-[#a6a6a6] text-[18px] text-center top-[calc(50%-0.5px)]">
        <p className="leading-[21px] whitespace-pre-wrap">ABC</p>
      </div>
    </div>
  );
}

function Space1() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <div className="absolute bg-[#454545] inset-[0_-0.5px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.5px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">{` `}</p>
      </div>
    </div>
  );
}

function Space() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <Space1 />
    </div>
  );
}

function Return() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Return">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-[0.25px] text-[#a6a6a6] text-[19px] text-center top-[calc(50%+2px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">􀅇</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Row 4">
      <KeyboardSwitch />
      <Space />
      <Return />
    </div>
  );
}

function KeyboardLayouts() {
  return (
    <div className="relative shrink-0 w-full" data-name="Keyboard Layouts">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[13px] items-center px-[6.5px] relative w-full">
          <Row />
          <Row1 />
          <Row2 />
          <Row4 />
        </div>
      </div>
    </div>
  );
}

function Keyboard2() {
  return (
    <div className="content-stretch flex flex-col h-[254px] items-center pb-[2px] pt-[11px] relative shrink-0 w-full" data-name="Keyboard">
      <Background />
      <KeyboardLayouts />
    </div>
  );
}

function Keyboard1() {
  return (
    <div className="absolute bottom-[13px] content-stretch flex flex-col gap-[10px] h-[241px] items-end left-0 right-0" data-name="Keyboard">
      <Keyboard2 />
    </div>
  );
}

function Keyboard() {
  return (
    <div className="absolute h-[311px] left-0 top-[223px] w-[390px]" data-name="Keyboard">
      <Frame2 />
      <Keyboard1 />
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
  return <div className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.15)] blur-[10px] inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur() {
  return (
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <Mask />
      <Blur1 />
    </div>
  );
}

function Fill2() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function GlassEffect1() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Bg2() {
  return (
    <div className="-translate-y-1/2 absolute h-[44px] left-0 right-0 top-1/2" data-name="BG">
      <Blur />
      <Fill2 />
      <GlassEffect1 />
    </div>
  );
}

function Icon24Pt1() {
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

function Back1() {
  return (
    <div className="absolute left-[12px] size-[44px] top-[16px]" data-name="Back">
      <Bg2 />
      <Icon24Pt1 />
    </div>
  );
}

function Icon1() {
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

function Right1() {
  return (
    <div className="absolute content-stretch flex gap-[14.554px] items-center left-[62.5px] top-px" data-name="Right">
      <Icon1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="-translate-x-1/2 absolute h-[20px] left-[calc(50%-0.02px)] top-[27px] w-[79.965px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-0 not-italic right-[21.96px] text-[17px] text-center text-white top-[10px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">Copilot</p>
      </div>
      <Right1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Help me understand</p>
      </div>
    </div>
  );
}

function ArrowSync() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Arrow Sync">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Arrow Sync">
          <path d={svgPaths.p2ec5b000} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <button className="bg-[#5a50db] content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content3 />
      <ArrowSync />
    </button>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Help me answer</p>
      </div>
    </div>
  );
}

function ArrowEnter3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Arrow Enter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Arrow Enter">
          <path d={svgPaths.p4a6f140} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#333] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content4 />
      <ArrowEnter3 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">What can I ask?</p>
      </div>
    </div>
  );
}

function ArrowEnter4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Arrow Enter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Arrow Enter">
          <path d={svgPaths.p4a6f140} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#333] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content5 />
      <ArrowEnter4 />
    </div>
  );
}

function Shorcuts1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[12px] items-center left-1/2 overflow-x-auto overflow-y-clip px-[11.643px] py-[4px] top-[161px] w-[390px]" data-name="Shorcuts">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function CoPilotOverlay1() {
  return (
    <div className="absolute h-[534px] left-[921px] overflow-clip rounded-bl-[54px] rounded-br-[54px] top-[67px] w-[390px]" data-name="CoPilot overlay">
      <Frame5 />
      <UbarExpanded1 />
      <Keyboard />
      <Back1 />
      <Frame10 />
      <Shorcuts1 />
    </div>
  );
}

function Video3() {
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

function Tab12() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 7">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <Video3 />
        </div>
      </div>
    </div>
  );
}

function Mic3() {
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
      <Mic3 />
      <div className="-translate-x-1/2 absolute bg-white h-[7px] left-1/2 rounded-bl-[4px] rounded-br-[4px] top-[12.5px] w-[8px]" />
    </div>
  );
}

function Placeholder3() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[2px] relative shrink-0" data-name="Placeholder">
      <Group5 />
    </div>
  );
}

function Tab13() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <Placeholder3 />
        </div>
      </div>
    </div>
  );
}

function Chat3() {
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

function Tab14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative w-full">
          <Chat3 />
        </div>
      </div>
    </div>
  );
}

function MoreHorizontal3() {
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

function Tab15() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 4">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <MoreHorizontal3 />
        </div>
      </div>
    </div>
  );
}

function MainTabBar3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex h-[62px] items-center left-0 pl-[4px] pr-[12px] py-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] top-0 w-[296px]" data-name="Main Tab Bar">
      <Tab12 />
      <Tab13 />
      <Tab14 />
      <Tab15 />
    </div>
  );
}

function Copilot7() {
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

function Copilot6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex items-center justify-center left-[308px] p-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] size-[62px] top-0" data-name="Copilot">
      <Copilot7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 absolute h-[62px] left-1/2 top-[457px] w-[370px]">
      <MainTabBar3 />
      <Copilot6 />
    </div>
  );
}

function TabBar2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Tab Bar">
      <div className="absolute backdrop-blur-[4px] bg-[rgba(24,24,24,0.98)] h-[534px] left-0 rounded-bl-[56px] rounded-br-[56px] rounded-tl-[38px] rounded-tr-[38px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)] top-0 w-[390px]" data-name="BG 3 Apps" />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-0 top-0">
      <TabBar2 />
    </div>
  );
}

function Group11() {
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

function UbarExpanded2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="ubar expanded">
      <Group6 />
      <Group11 />
    </div>
  );
}

function Fab2() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[28px]" data-name="FAB">
      <div className="absolute inset-[-50%_-62.5%_-75%_-62.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
          <g id="FAB">
            <g filter="url(#filter0_d_69_2636)" id="Ellipse 3706">
              <circle cx="36" cy="32" fill="var(--fill-0, #BFBFBF)" fillOpacity="0.08" r="16" shapeRendering="crispEdges" />
            </g>
            <g id="Add">
              <path d={svgPaths.p3db90770} fill="var(--fill-0, white)" id="Shape" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72" id="filter0_d_69_2636" width="72" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_69_2636" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_69_2636" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Send2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+1px)] size-[16px] top-1/2" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Send">
          <path d={svgPaths.p359730f0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Fab3() {
  return (
    <div className="absolute bg-[#5a50db] left-[347px] rounded-[30px] size-[32px] top-[28px]" data-name="FAB">
      <Send2 />
    </div>
  );
}

function Emoji1() {
  return (
    <div className="absolute left-[310px] size-[24px] top-[63px]" data-name="Emoji">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Emoji">
          <path d={svgPaths.p3925ad00} fill="var(--fill-0, #212121)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#1f1f1f] bottom-[54px] h-[277px] left-0 rounded-tl-[30px] rounded-tr-[30px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.09),0px_4px_20px_0px_rgba(0,0,0,0.04)] w-[390px]">
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[0] left-[60px] not-italic text-[#d9d9d9] text-[0px] text-[17px] top-[21px] tracking-[-0.408px] w-[237px] whitespace-pre-wrap">
        <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[22px]">{`Help me understand `}</span>
        <span className="leading-[22px]">what is the expectation from me?</span>
      </p>
      <Fab2 />
      <Fab3 />
      <div className="absolute bg-[#5a50db] h-[25px] left-[257px] rounded-[4px] top-[42px] w-[3px]" />
      <Emoji1 />
    </div>
  );
}

function Background1() {
  return <div className="absolute inset-0 rounded-[27px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.17) 100%), linear-gradient(90deg, rgba(242, 242, 242, 0.2) 0%, rgba(242, 242, 242, 0.2) 100%), linear-gradient(90deg, rgba(24, 24, 26, 0.5) 0%, rgba(24, 24, 26, 0.5) 100%)" }} />;
}

function Key26() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">q</p>
      </div>
    </div>
  );
}

function Key27() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">w</p>
      </div>
    </div>
  );
}

function Key28() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">e</p>
      </div>
    </div>
  );
}

function Key29() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">r</p>
      </div>
    </div>
  );
}

function Key30() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">t</p>
      </div>
    </div>
  );
}

function Key31() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">y</p>
      </div>
    </div>
  );
}

function Key32() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">u</p>
      </div>
    </div>
  );
}

function Key33() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">i</p>
      </div>
    </div>
  );
}

function Key34() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">o</p>
      </div>
    </div>
  );
}

function Key35() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">p</p>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[6.5px] items-center justify-center relative shrink-0 w-full" data-name="Row 1">
      <Key26 />
      <Key27 />
      <Key28 />
      <Key29 />
      <Key30 />
      <Key31 />
      <Key32 />
      <Key33 />
      <Key34 />
      <Key35 />
    </div>
  );
}

function Key36() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">a</p>
      </div>
    </div>
  );
}

function Key37() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">s</p>
      </div>
    </div>
  );
}

function Key38() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">d</p>
      </div>
    </div>
  );
}

function Key39() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">f</p>
      </div>
    </div>
  );
}

function Key40() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">g</p>
      </div>
    </div>
  );
}

function Key41() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">h</p>
      </div>
    </div>
  );
}

function Key42() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">j</p>
      </div>
    </div>
  );
}

function Key43() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">k</p>
      </div>
    </div>
  );
}

function Key44() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">l</p>
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.5px] items-center justify-center px-[20px] relative w-full">
          <Key36 />
          <Key37 />
          <Key38 />
          <Key39 />
          <Key40 />
          <Key41 />
          <Key42 />
          <Key43 />
          <Key44 />
        </div>
      </div>
    </div>
  );
}

function ShiftKey1() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[45px]" data-name="Shift Key">
      <div className="absolute bg-[#454545] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] uppercase">
        <p className="leading-[28px] whitespace-pre-wrap">􀆝</p>
      </div>
    </div>
  );
}

function Key45() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">z</p>
      </div>
    </div>
  );
}

function Key46() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">x</p>
      </div>
    </div>
  );
}

function Key47() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">c</p>
      </div>
    </div>
  );
}

function Key48() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">v</p>
      </div>
    </div>
  );
}

function Key49() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">b</p>
      </div>
    </div>
  );
}

function Key50() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">n</p>
      </div>
    </div>
  );
}

function Key51() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">m</p>
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6.5px] items-start min-h-px min-w-px relative" data-name="Row 3">
      <Key45 />
      <Key46 />
      <Key47 />
      <Key48 />
      <Key49 />
      <Key50 />
      <Key51 />
    </div>
  );
}

function DeleteKey1() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[45px]" data-name="Delete Key">
      <div className="absolute bg-[#454545] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] uppercase">
        <p className="leading-[28px] whitespace-pre-wrap">􁂈</p>
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex gap-[14.25px] items-center relative shrink-0 w-full" data-name="Row 3">
      <ShiftKey1 />
      <Row8 />
      <DeleteKey1 />
    </div>
  );
}

function KeyboardSwitch1() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Keyboard Switch">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] left-[-2px] not-italic right-[-1.75px] text-[#a6a6a6] text-[18px] text-center top-[calc(50%-0.5px)]">
        <p className="leading-[21px] whitespace-pre-wrap">ABC</p>
      </div>
    </div>
  );
}

function Space3() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <div className="absolute bg-[#454545] inset-[0_-0.5px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.5px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">{` `}</p>
      </div>
    </div>
  );
}

function Space2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <Space3 />
    </div>
  );
}

function Return1() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Return">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-[0.25px] text-[#a6a6a6] text-[19px] text-center top-[calc(50%+2px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">􀅇</p>
      </div>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Row 4">
      <KeyboardSwitch1 />
      <Space2 />
      <Return1 />
    </div>
  );
}

function KeyboardLayouts1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Keyboard Layouts">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[13px] items-center px-[6.5px] relative w-full">
          <Row5 />
          <Row6 />
          <Row7 />
          <Row9 />
        </div>
      </div>
    </div>
  );
}

function Keyboard5() {
  return (
    <div className="content-stretch flex flex-col h-[254px] items-center pb-[2px] pt-[11px] relative shrink-0 w-full" data-name="Keyboard">
      <Background1 />
      <KeyboardLayouts1 />
    </div>
  );
}

function Keyboard4() {
  return (
    <div className="absolute bottom-[13px] content-stretch flex flex-col gap-[10px] h-[241px] items-end left-0 right-0" data-name="Keyboard">
      <Keyboard5 />
    </div>
  );
}

function Keyboard3() {
  return (
    <div className="absolute h-[311px] left-0 top-[223px] w-[390px]" data-name="Keyboard">
      <Frame3 />
      <Keyboard4 />
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

function Fill3() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function GlassEffect2() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Bg3() {
  return (
    <div className="-translate-y-1/2 absolute h-[44px] left-0 right-0 top-1/2" data-name="BG">
      <Blur2 />
      <Fill3 />
      <GlassEffect2 />
    </div>
  );
}

function Icon24Pt2() {
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

function Back2() {
  return (
    <div className="absolute left-[12px] size-[44px] top-[16px]" data-name="Back">
      <Bg3 />
      <Icon24Pt2 />
    </div>
  );
}

function Icon2() {
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

function Right2() {
  return (
    <div className="absolute content-stretch flex gap-[14.554px] items-center left-[62.5px] top-px" data-name="Right">
      <Icon2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 absolute h-[20px] left-[calc(50%-0.02px)] top-[27px] w-[79.965px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-0 not-italic right-[21.96px] text-[17px] text-center text-white top-[10px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">Copilot</p>
      </div>
      <Right2 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Help me understand</p>
      </div>
    </div>
  );
}

function ArrowSync1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Arrow Sync">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Arrow Sync">
          <path d={svgPaths.p2ec5b000} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#5a50db] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content6 />
      <ArrowSync1 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Help me answer</p>
      </div>
    </div>
  );
}

function ArrowEnter5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Arrow Enter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Arrow Enter">
          <path d={svgPaths.p4a6f140} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#333] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content7 />
      <ArrowEnter5 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">What can I ask?</p>
      </div>
    </div>
  );
}

function ArrowEnter6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Arrow Enter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Arrow Enter">
          <path d={svgPaths.p4a6f140} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#333] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content8 />
      <ArrowEnter6 />
    </div>
  );
}

function Shorcuts2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[12px] items-center left-1/2 overflow-x-auto overflow-y-clip px-[11.643px] py-[4px] top-[161px] w-[390px]" data-name="Shorcuts">
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function CoPilotOverlay2() {
  return (
    <div className="absolute h-[534px] left-[1356px] overflow-clip rounded-bl-[54px] rounded-br-[54px] top-[67px] w-[390px]" data-name="CoPilot overlay">
      <Frame6 />
      <UbarExpanded2 />
      <Keyboard3 />
      <Back2 />
      <Frame12 />
      <Shorcuts2 />
    </div>
  );
}

function Video4() {
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

function Tab16() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 7">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <Video4 />
        </div>
      </div>
    </div>
  );
}

function Mic4() {
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

function Group7() {
  return (
    <div className="absolute contents left-0 top-[2px]">
      <Mic4 />
      <div className="-translate-x-1/2 absolute bg-white h-[7px] left-1/2 rounded-bl-[4px] rounded-br-[4px] top-[12.5px] w-[8px]" />
    </div>
  );
}

function Placeholder4() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[2px] relative shrink-0" data-name="Placeholder">
      <Group7 />
    </div>
  );
}

function Tab17() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <Placeholder4 />
        </div>
      </div>
    </div>
  );
}

function Chat4() {
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

function Tab18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative w-full">
          <Chat4 />
        </div>
      </div>
    </div>
  );
}

function MoreHorizontal4() {
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

function Tab19() {
  return (
    <div className="flex-[1_0_0] h-[54px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 4">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center p-[8px] relative size-full">
          <MoreHorizontal4 />
        </div>
      </div>
    </div>
  );
}

function MainTabBar4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex h-[62px] items-center left-0 pl-[4px] pr-[12px] py-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] top-0 w-[296px]" data-name="Main Tab Bar">
      <Tab16 />
      <Tab17 />
      <Tab18 />
      <Tab19 />
    </div>
  );
}

function Copilot9() {
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

function Copilot8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex items-center justify-center left-[308px] p-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] size-[62px] top-0" data-name="Copilot">
      <Copilot9 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 absolute h-[62px] left-1/2 top-[457px] w-[370px]">
      <MainTabBar4 />
      <Copilot8 />
    </div>
  );
}

function TabBar3() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Tab Bar">
      <div className="absolute backdrop-blur-[4px] bg-[rgba(24,24,24,0.98)] h-[534px] left-0 rounded-bl-[56px] rounded-br-[56px] rounded-tl-[38px] rounded-tr-[38px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)] top-0 w-[390px]" data-name="BG 3 Apps" />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-0 top-0">
      <TabBar3 />
    </div>
  );
}

function Group12() {
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

function UbarExpanded3() {
  return (
    <div className="absolute contents left-0 top-0" data-name="ubar expanded">
      <Group8 />
      <Group12 />
    </div>
  );
}

function Background2() {
  return <div className="absolute inset-0 rounded-[27px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.17) 100%), linear-gradient(90deg, rgba(242, 242, 242, 0.2) 0%, rgba(242, 242, 242, 0.2) 100%), linear-gradient(90deg, rgba(24, 24, 26, 0.5) 0%, rgba(24, 24, 26, 0.5) 100%)" }} />;
}

function Key52() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">q</p>
      </div>
    </div>
  );
}

function Key53() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">w</p>
      </div>
    </div>
  );
}

function Key54() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">e</p>
      </div>
    </div>
  );
}

function Key55() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">r</p>
      </div>
    </div>
  );
}

function Key56() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">t</p>
      </div>
    </div>
  );
}

function Key57() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">y</p>
      </div>
    </div>
  );
}

function Key58() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">u</p>
      </div>
    </div>
  );
}

function Key59() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">i</p>
      </div>
    </div>
  );
}

function Key60() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">o</p>
      </div>
    </div>
  );
}

function Key61() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">p</p>
      </div>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex gap-[6.5px] items-center justify-center relative shrink-0 w-full" data-name="Row 1">
      <Key52 />
      <Key53 />
      <Key54 />
      <Key55 />
      <Key56 />
      <Key57 />
      <Key58 />
      <Key59 />
      <Key60 />
      <Key61 />
    </div>
  );
}

function Key62() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">a</p>
      </div>
    </div>
  );
}

function Key63() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">s</p>
      </div>
    </div>
  );
}

function Key64() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">d</p>
      </div>
    </div>
  );
}

function Key65() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">f</p>
      </div>
    </div>
  );
}

function Key66() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">g</p>
      </div>
    </div>
  );
}

function Key67() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">h</p>
      </div>
    </div>
  );
}

function Key68() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">j</p>
      </div>
    </div>
  );
}

function Key69() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">k</p>
      </div>
    </div>
  );
}

function Key70() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">l</p>
      </div>
    </div>
  );
}

function Row11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.5px] items-center justify-center px-[20px] relative w-full">
          <Key62 />
          <Key63 />
          <Key64 />
          <Key65 />
          <Key66 />
          <Key67 />
          <Key68 />
          <Key69 />
          <Key70 />
        </div>
      </div>
    </div>
  );
}

function ShiftKey2() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[45px]" data-name="Shift Key">
      <div className="absolute bg-[#454545] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] uppercase">
        <p className="leading-[28px] whitespace-pre-wrap">􀆝</p>
      </div>
    </div>
  );
}

function Key71() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">z</p>
      </div>
    </div>
  );
}

function Key72() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">x</p>
      </div>
    </div>
  );
}

function Key73() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">c</p>
      </div>
    </div>
  );
}

function Key74() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">v</p>
      </div>
    </div>
  );
}

function Key75() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">b</p>
      </div>
    </div>
  );
}

function Key76() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">n</p>
      </div>
    </div>
  );
}

function Key77() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">m</p>
      </div>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6.5px] items-start min-h-px min-w-px relative" data-name="Row 3">
      <Key71 />
      <Key72 />
      <Key73 />
      <Key74 />
      <Key75 />
      <Key76 />
      <Key77 />
    </div>
  );
}

function DeleteKey2() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[45px]" data-name="Delete Key">
      <div className="absolute bg-[#454545] inset-0 mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] uppercase">
        <p className="leading-[28px] whitespace-pre-wrap">􁂈</p>
      </div>
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex gap-[14.25px] items-center relative shrink-0 w-full" data-name="Row 3">
      <ShiftKey2 />
      <Row13 />
      <DeleteKey2 />
    </div>
  );
}

function KeyboardSwitch2() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Keyboard Switch">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] left-[-2px] not-italic right-[-1.75px] text-[#a6a6a6] text-[18px] text-center top-[calc(50%-0.5px)]">
        <p className="leading-[21px] whitespace-pre-wrap">ABC</p>
      </div>
    </div>
  );
}

function Space5() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <div className="absolute bg-[#454545] inset-[0_-0.5px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.5px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)]">
        <p className="leading-[30px] whitespace-pre-wrap">{` `}</p>
      </div>
    </div>
  );
}

function Space4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <Space5 />
    </div>
  );
}

function Return2() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Return">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-[0.25px] text-[#a6a6a6] text-[19px] text-center top-[calc(50%+2px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">􀅇</p>
      </div>
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Row 4">
      <KeyboardSwitch2 />
      <Space4 />
      <Return2 />
    </div>
  );
}

function KeyboardLayouts2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Keyboard Layouts">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[13px] items-center px-[6.5px] relative w-full">
          <Row10 />
          <Row11 />
          <Row12 />
          <Row14 />
        </div>
      </div>
    </div>
  );
}

function Keyboard8() {
  return (
    <div className="content-stretch flex flex-col h-[254px] items-center pb-[2px] pt-[11px] relative shrink-0 w-full" data-name="Keyboard">
      <Background2 />
      <KeyboardLayouts2 />
    </div>
  );
}

function Keyboard7() {
  return (
    <div className="absolute bottom-[13px] content-stretch flex flex-col gap-[10px] h-[241px] items-end left-0 right-0" data-name="Keyboard">
      <Keyboard8 />
    </div>
  );
}

function Fab4() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="FAB">
      <div className="absolute inset-[-50%_-62.5%_-75%_-62.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
          <g id="FAB">
            <g filter="url(#filter0_d_69_2614)" id="Ellipse 3706">
              <circle cx="36" cy="32" fill="var(--fill-0, #BFBFBF)" fillOpacity="0.08" r="16" shapeRendering="crispEdges" />
            </g>
            <g id="Add">
              <path d={svgPaths.p3db90770} fill="var(--fill-0, white)" id="Shape" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72" id="filter0_d_69_2614" width="72" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_69_2614" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_69_2614" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Send3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+1px)] size-[16px] top-1/2" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Send">
          <path d={svgPaths.p359730f0} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Fab5() {
  return (
    <div className="absolute left-[347px] rounded-[30px] size-[32px] top-[16px]" data-name="FAB">
      <Send3 />
    </div>
  );
}

function Keyboard6() {
  return (
    <div className="absolute h-[311px] left-0 top-[223px] w-[390px]" data-name="Keyboard">
      <Keyboard7 />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] left-[60px] not-italic text-[#6e6e6e] text-[17px] top-[21px] tracking-[-0.408px] w-[237px] whitespace-pre-wrap">Ask CoPilot</p>
      <Fab4 />
      <Fab5 />
      <div className="absolute bg-[#5a50db] h-[25px] left-[56px] rounded-[4px] top-[20px] w-[3px]" />
    </div>
  );
}

function Icon3() {
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

function Right3() {
  return (
    <div className="absolute content-stretch flex gap-[14.554px] items-center left-[62.5px] top-px" data-name="Right">
      <Icon3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 absolute h-[20px] left-[calc(50%-0.02px)] top-[27px] w-[79.965px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-0 not-italic right-[21.96px] text-[17px] text-center text-white top-[10px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">Copilot</p>
      </div>
      <Right3 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Help me understand</p>
      </div>
    </div>
  );
}

function ArrowEnter7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Arrow Enter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Arrow Enter">
          <path d={svgPaths.p4a6f140} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <button className="bg-[#333] content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content9 />
      <ArrowEnter7 />
    </button>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Help me answer</p>
      </div>
    </div>
  );
}

function ArrowEnter8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Arrow Enter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Arrow Enter">
          <path d={svgPaths.p4a6f140} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#333] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content10 />
      <ArrowEnter8 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[5.822px] items-start relative rounded-[5.822px] shrink-0" data-name="Content">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-center text-white tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">What can I ask?</p>
      </div>
    </div>
  );
}

function ArrowEnter9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.387px]" data-name="Arrow Enter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3869 20">
        <g id="Arrow Enter">
          <path d={svgPaths.p4a6f140} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#333] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content11 />
      <ArrowEnter9 />
    </div>
  );
}

function Shorcuts3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[12px] items-center left-1/2 overflow-x-auto overflow-y-clip px-[11.643px] py-[4px] top-[171px] w-[390px]" data-name="Shorcuts">
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Fill4() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function Bg4() {
  return (
    <div className="-translate-y-1/2 absolute h-[44px] left-0 right-0 top-1/2" data-name="BG">
      <Fill4 />
    </div>
  );
}

function Icon24Pt3() {
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

function Back3() {
  return (
    <div className="absolute left-[12px] size-[44px] top-[16px]" data-name="Back">
      <Bg4 />
      <Icon24Pt3 />
    </div>
  );
}

function CoPilotOverlay3() {
  return (
    <div className="absolute h-[534px] left-[492px] overflow-clip rounded-bl-[54px] rounded-br-[54px] top-[67px] w-[390px]" data-name="CoPilot overlay">
      <Frame7 />
      <UbarExpanded3 />
      <Keyboard6 />
      <Frame9 />
      <Shorcuts3 />
      <Back3 />
    </div>
  );
}

export default function CoPilotKeyboardBehaviour() {
  return (
    <div className="bg-white relative size-full" data-name="CoPilot keyboard behaviour">
      <CoPilotOverlay />
      <CoPilotOverlay1 />
      <CoPilotOverlay2 />
      <CoPilotOverlay3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold justify-center leading-[0] left-[255px] text-[17px] text-black text-center top-[49.5px] tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Keyboard closed state</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold justify-center leading-[0] left-[681px] text-[17px] text-black text-center top-[49.5px] tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Keyboard open state</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold justify-center leading-[0] left-[1119px] text-[17px] text-black text-center top-[49.5px] tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Keyboard open state</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold justify-center leading-[0] left-[1558px] text-[17px] text-black text-center top-[49.5px] tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Keyboard open state</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[681px] text-[17px] text-black text-center top-[24.5px] tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">No prompt pill clicked</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[1119px] text-[17px] text-black text-center top-[24.5px] tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Suggested prompt pill clicked</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-[1558px] text-[17px] text-black text-center top-[24.5px] tracking-[-0.1674px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14.554px]">Suggested prompt pill clicked</p>
      </div>
    </div>
  );
}