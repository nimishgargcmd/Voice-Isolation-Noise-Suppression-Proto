import svgPaths from "./svg-s62hwvor1z";
import imgFrame2147233135 from "figma:asset/39154ef67ddaa64702482bb71cb22487de1cf404.png";
import imgRectangle346604096 from "figma:asset/2988dddd4762039b89078373be258dc29df8140a.png";

function Time() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[2px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function Group2() {
  return (
    <div className="absolute right-[13px] size-[32px] top-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2117130284">
          <circle cx="16" cy="16" fill="var(--fill-0, #878BFB)" id="Ellipse 3" opacity="0.5" r="16" />
          <circle cx="16" cy="16" data-figma-bg-blur-radius="900" fill="var(--fill-0, #878BFB)" id="Ellipse 4" r="11" />
          <g filter="url(#filter1_i_67_1286)" id="Rectangle 346603857">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="8" rx="1" width="2" x="15" y="12" />
          </g>
          <g filter="url(#filter2_i_67_1286)" id="Rectangle 346603858">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="4" rx="1" width="2" x="11" y="14" />
          </g>
          <g filter="url(#filter3_i_67_1286)" id="Rectangle 346603859">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="4" rx="1" width="2" x="19" y="14" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_67_1286_clip_path" transform="translate(895 895)">
            <circle cx="16" cy="16" r="11" />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.2" id="filter1_i_67_1286" width="2.2" x="14.8" y="12">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_67_1286" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter2_i_67_1286" width="2.2" x="10.8" y="14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_67_1286" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter3_i_67_1286" width="2.2" x="18.8" y="14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_67_1286" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-white col-1 h-[4px] ml-0 mt-[6px] rounded-[22px] row-1 w-[2px]" />
      <div className="bg-white col-1 h-[7px] ml-[4px] mt-[3px] rounded-[22px] row-1 w-[2px]" />
      <div className="bg-white col-1 h-[10px] ml-[8px] mt-0 opacity-30 rounded-[22px] row-1 w-[2px]" />
    </div>
  );
}

function GciIndicatorTwo() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[5px] bottom-[9.96%] content-stretch flex items-center left-[calc(50%+165px)] overflow-clip px-[4px] rounded-br-[4px] rounded-tr-[4px] top-[82.25%]" data-name="GCI Indicator/Two">
      <Group1 />
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
            <clipPath id="bgblur_0_67_1278_clip_path" transform="translate(4 4)">
              <ellipse cx="14" cy="13.7576" rx="14" ry="13.7576" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <GciIndicatorTwo />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[227px] items-start left-0 p-[3px] rounded-[20px] top-[97px] w-[390px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgFrame2147233135} />
      <div className="h-[224px] relative rounded-[17px] shrink-0 w-[384px]" data-name="image">
        <div aria-hidden="true" className="absolute border-3 border-[#010101] border-solid inset-0 pointer-events-none rounded-[17px]" />
      </div>
      <div className="absolute h-[230px] left-0 rounded-[20px] top-0 w-[390px]" data-name="image">
        <div aria-hidden="true" className="absolute border-3 border-[#878bfb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <Group2 />
      <div className="absolute h-[90px] left-[310px] rounded-[12px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[128px] w-[67px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle346604096} />
      </div>
      <Group />
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

function Shield2() {
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

function Recording() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Recording">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Recording">
          <path d={svgPaths.pbef9d80} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Recording1() {
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
        <div className="content-stretch flex items-center justify-end px-[4.8px] relative size-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[12.8px] not-italic relative shrink-0 text-[8.8px] text-black text-center tracking-[0.048px]">+6</p>
        </div>
      </div>
    </div>
  );
}

function Recording2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-px relative shrink-0" data-name="Recording">
      <NotificationBadge />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[7px] items-end relative shrink-0">
      <Shield />
      <Shield1 />
      <Shield2 />
      <Recording />
      <Recording1 />
      <Recording2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
      <Frame4 />
    </div>
  );
}

function PillButtonTeams2IOs() {
  return (
    <div className="absolute bg-[rgba(10,6,4,0.9)] content-stretch flex h-[36px] items-center justify-center left-0 overflow-clip px-[16px] py-[8px] rounded-[9999px] top-0" data-name="Pill button (Teams 2 iOS)">
      <Content />
    </div>
  );
}

function Content1() {
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
        <Content1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#37ef46] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[11px] text-center text-white tracking-[-0.24px]">Timer topic name #1</p>
    </div>
  );
}

function PillButtonTeams2IOs1() {
  return (
    <div className="absolute bg-[rgba(10,6,4,0.9)] content-stretch flex gap-[8px] items-center left-[183px] overflow-clip px-[16px] py-[8px] rounded-[9999px] top-0 w-[210px]" data-name="Pill button (Teams 2 iOS)">
      <PillButtonTeams2IOs2 />
      <Content2 />
    </div>
  );
}

function SecondaryHeaderRow() {
  return (
    <div className="-translate-x-1/2 absolute h-[36px] left-[calc(50%+0.5px)] top-[56px] w-[393px]" data-name="Secondary header row">
      <PillButtonTeams2IOs />
      <PillButtonTeams2IOs1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[24px] items-center justify-center left-[14px] p-[10px] rounded-[100px] top-[291px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aadi Kapoor
      </p>
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

function Frame3() {
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

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <TabBar />
    </div>
  );
}

function Group6() {
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
      <Group3 />
      <Group6 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[17.465px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4648 17.4648">
        <g id="Icon" />
      </svg>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Left">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[17.465px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4648 17.4648">
        <g id="Icon" />
      </svg>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[14.554px] items-center relative shrink-0" data-name="Right">
      <Icon1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between py-[2.911px] relative shrink-0 w-full" data-name="Container">
      <Left />
      <Right />
    </div>
  );
}

function MiniHeaderIOs() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2.911px] items-start justify-center left-0 pb-[5.822px] px-[11.643px] top-[28.17px] w-[390px]" data-name="Mini header / iOS">
      <Container />
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
    <div className="bg-[#333] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3d3d3d] border-[0.364px] border-solid inset-[-0.364px] pointer-events-none rounded-[12.364px]" />
      <Content3 />
      <ArrowEnter />
    </div>
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
      <Content4 />
      <ArrowEnter1 />
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
      <Content5 />
      <ArrowEnter2 />
    </div>
  );
}

function Shorcuts() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-end justify-center left-[calc(50%-2px)] overflow-x-auto overflow-y-clip px-[11.643px] py-[8.732px] top-[195px] w-[390px]" data-name="Shorcuts">
      <Button />
      <Button1 />
      <Button2 />
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

function Group5() {
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

function Frame6() {
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

function Group7() {
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

function Group8() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[378px]">
      <Bg />
      <Frame />
      <Group7 />
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

function GlassEffect1() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Bg1() {
  return (
    <div className="-translate-y-1/2 absolute h-[44px] left-0 right-0 top-1/2" data-name="BG">
      <Blur />
      <Fill1 />
      <GlassEffect1 />
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

function Right1() {
  return (
    <div className="absolute content-stretch flex gap-[14.554px] items-center left-[62.5px] top-px" data-name="Right">
      <Icon2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 absolute h-[20px] left-[calc(50%-0.02px)] top-[27px] w-[79.965px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-0 not-italic right-[21.96px] text-[17px] text-center text-white top-[10px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">Copilot</p>
      </div>
      <Right1 />
    </div>
  );
}

function CoPilotOverlay() {
  return (
    <div className="absolute bottom-[-6px] h-[534px] left-0 w-[390px]" data-name="CoPilot overlay">
      <div className="-translate-x-1/2 absolute bottom-[89px] h-0 left-[calc(50%+6px)] w-[402px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 0.5">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="0.5" x2="402" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <Frame3 />
      <UbarExpanded />
      <MiniHeaderIOs />
      <Shorcuts />
      <Frame6 />
      <Group8 />
      <Back />
      <Frame7 />
    </div>
  );
}

export default function CoPilot() {
  return (
    <div className="bg-black border-6 border-black border-solid overflow-clip relative rounded-[54px] shadow-[0px_12px_48px_0px_rgba(0,0,0,0.24)] size-full" data-name="CoPilot">
      <Header />
      <Frame5 />
      <SecondaryHeaderRow />
      <Frame2 />
      <CoPilotOverlay />
    </div>
  );
}