import svgPaths from "./svg-0poi7ygl02";
import imgPortrait1 from "figma:asset/18988d09d8c035ef55da06ba586fafa3ba56403a.png";
import imgRectangle346604090 from "figma:asset/39154ef67ddaa64702482bb71cb22487de1cf404.png";
import imgRectangle346604093 from "figma:asset/0e1451995ab75444f4e79c58f872a551ab745d47.png";
import imgRectangle346604095 from "figma:asset/c82f00eab4bba2fb354dbe1d896a20e857d5fd3d.png";
import imgRectangle346604092 from "figma:asset/07ed84b0d7bbe415782fa76088893b674d660f2c.png";
import imgRectangle346604094 from "figma:asset/8e36951a80a78686e04d2d0c0f40dd88c6f238da.png";
import imgRectangle346604097 from "figma:asset/b7d47865ac962c686cb32e819e7b9962113b9b6e.png";
import imgRectangle346604096 from "figma:asset/2988dddd4762039b89078373be258dc29df8140a.png";

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Title">
      <p className="font-['Segoe_UI_Variable:Display_Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0c34fb] text-[24px]" style={{ fontVariationSettings: "\'opsz\' 36" }}>
        Simplifying interactions
      </p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Segoe_UI_Variable:Display_Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[48px] text-black w-[931px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 36" }}>
        Horizontal scroll for navigating views
      </p>
    </div>
  );
}

function Left() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start justify-end left-[16px] pl-[58px] pr-[20px] py-[50px] top-[16px]" data-name="Left">
      <Title />
      <Title1 />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[19.348px] items-center justify-center min-h-px min-w-px pt-[1.759px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[19.348px] relative shrink-0 text-[14.951px] text-center text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        8:14
      </p>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[11.433px] relative shrink-0 w-[24.034px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0337 11.4329">
        <g id="Battery">
          <rect height="10.5534" id="Border" opacity="0.35" rx="3.34192" stroke="var(--stroke-0, white)" strokeWidth="0.879452" width="21.1068" x="0.439726" y="0.439726" />
          <path d={svgPaths.p191f0380} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, white)" height="7.91507" id="Capacity" rx="2.19863" width="18.4685" x="1.7589" y="1.7589" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6.156px] h-[19.348px] items-center justify-center min-h-px min-w-px pt-[0.879px] relative" data-name="Levels">
      <div className="h-[10.753px] relative shrink-0 w-[16.885px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8855 10.7525">
          <path clipRule="evenodd" d={svgPaths.p393a9e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[10.842px] relative shrink-0 w-[15.075px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0753 10.8422">
          <path clipRule="evenodd" d={svgPaths.p27230e40} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex gap-[135.436px] items-center justify-center left-0 pb-[16.71px] pt-[18.468px] px-[14.071px] top-0 w-[353.54px]" data-name="Status bar">
      <Time />
      <Levels />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[-5.28px] top-[-5.28px]" data-name="Header">
      <StatusBar />
      <div className="absolute bg-black h-[30.781px] left-[122.24px] rounded-[87.945px] top-[13.19px] w-[109.052px]" />
      <div className="absolute left-[219.86px] size-[4.397px] top-[26.38px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.39726 4.39726">
          <circle cx="2.19863" cy="2.19863" fill="var(--fill-0, #37EF46)" id="Ellipse 26599" r="2.19863" />
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute right-[186.44px] size-[28.142px] top-[12.31px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.1425 28.1425">
        <g id="Group 2117130284">
          <circle cx="14.0712" cy="14.0712" fill="var(--fill-0, #878BFB)" id="Ellipse 3" opacity="0.5" r="14.0712" />
          <circle cx="14.0712" cy="14.0712" data-figma-bg-blur-radius="791.507" fill="var(--fill-0, #878BFB)" id="Ellipse 4" r="9.67397" />
          <g filter="url(#filter1_i_302_1900)" id="Rectangle 346603857">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="7.03562" rx="0.879452" width="1.7589" x="13.1918" y="10.5534" />
          </g>
          <g filter="url(#filter2_i_302_1900)" id="Rectangle 346603858">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="3.51781" rx="0.879452" width="1.7589" x="9.67397" y="12.3123" />
          </g>
          <g filter="url(#filter3_i_302_1900)" id="Rectangle 346603859">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="3.51781" rx="0.879452" width="1.7589" x="16.7096" y="12.3123" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_302_1900_clip_path" transform="translate(787.11 787.11)">
            <circle cx="14.0712" cy="14.0712" r="9.67397" />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.21151" id="filter1_i_302_1900" width="1.93479" x="13.0159" y="10.5534">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.439726" dy="0.17589" />
            <feGaussianBlur stdDeviation="0.0879452" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_302_1900" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.6937" id="filter2_i_302_1900" width="1.93479" x="9.49808" y="12.3123">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.439726" dy="0.17589" />
            <feGaussianBlur stdDeviation="0.0879452" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_302_1900" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.6937" id="filter3_i_302_1900" width="1.93479" x="16.5337" y="12.3123">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.439726" dy="0.17589" />
            <feGaussianBlur stdDeviation="0.0879452" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_302_1900" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[21.107px] items-center justify-center left-[12.31px] p-[8.795px] rounded-[87.945px] top-[156.54px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12.312px] overflow-hidden relative shrink-0 text-[10.553px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Aadi Kapoor
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[21.107px] items-center justify-center left-[186.44px] p-[8.795px] rounded-[87.945px] top-[156.54px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12.312px] overflow-hidden relative shrink-0 text-[10.553px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Babak Shammas
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[21.107px] items-center justify-center left-[12.31px] p-[8.795px] rounded-[87.945px] top-[353.54px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12.312px] overflow-hidden relative shrink-0 text-[10.553px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Miguel Silva
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[21.107px] items-center justify-center left-[186.44px] p-[8.795px] rounded-[87.945px] top-[353.54px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12.312px] overflow-hidden relative shrink-0 text-[10.553px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Jessica Kline
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[21.107px] items-center justify-center left-[12.31px] p-[8.795px] rounded-[87.945px] top-[548.78px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12.312px] overflow-hidden relative shrink-0 text-[10.553px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Ray Tanaka
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[777.436px] left-0 top-0 w-[342.986px]">
      <div className="absolute h-[189.962px] left-0 rounded-bl-[17.589px] rounded-br-[17.589px] rounded-tl-[28.142px] rounded-tr-[17.589px] top-0 w-[168.855px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[17.589px] rounded-br-[17.589px] rounded-tl-[28.142px] rounded-tr-[17.589px] size-full" src={imgRectangle346604090} />
      </div>
      <Group8 />
      <div className="absolute border-[#878bfb] border-[2.638px] border-solid h-[189.962px] left-0 rounded-bl-[17.589px] rounded-br-[17.589px] rounded-tl-[28.142px] rounded-tr-[17.589px] top-0 w-[168.855px]" data-name="image" />
      <div className="absolute border-[#010101] border-[0.879px] border-solid h-[184.685px] left-[2.64px] rounded-bl-[14.951px] rounded-br-[14.951px] rounded-tl-[25.504px] rounded-tr-[14.951px] top-[2.64px] w-[163.578px]" data-name="image" />
      <div className="absolute h-[191.721px] left-0 rounded-[17.589px] top-[195.24px] w-[168.855px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[17.589px] size-full" src={imgRectangle346604093} />
      </div>
      <div className="absolute h-[189.962px] left-0 rounded-[17.589px] top-[392.24px] w-[342.986px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[17.589px] size-full" src={imgRectangle346604095} />
      </div>
      <div className="absolute h-[189.962px] left-[174.13px] rounded-bl-[17.589px] rounded-br-[17.589px] rounded-tl-[17.589px] rounded-tr-[28.142px] top-0 w-[168.855px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[17.589px] rounded-br-[17.589px] rounded-tl-[17.589px] rounded-tr-[28.142px] size-full" src={imgRectangle346604092} />
      </div>
      <div className="absolute h-[191.721px] left-[174.13px] rounded-[17.589px] top-[195.24px] w-[168.855px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[17.589px] size-full" src={imgRectangle346604094} />
      </div>
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <div className="absolute h-[189.962px] left-0 rounded-[17.589px] top-[587.47px] w-[342.986px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[17.589px] size-full" src={imgRectangle346604097} />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute h-[667px] left-[0.49px] overflow-x-clip overflow-y-auto top-[89.72px] w-[342px]">
      <Frame13 />
    </div>
  );
}

function Video() {
  return (
    <div className="h-[24.625px] relative shrink-0 w-[21.107px]" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1068 24.6247">
        <g id="Video">
          <path d={svgPaths.p798b700} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab6() {
  return (
    <div className="flex-[1_0_0] h-[47.49px] min-h-px min-w-px mr-[-7.036px] relative" data-name="Tab 7">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[1.759px] items-center justify-center p-[7.036px] relative size-full">
          <Video />
        </div>
      </div>
    </div>
  );
}

function Mic() {
  return (
    <div className="absolute left-0 size-[21.107px] top-[1.76px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1068 21.1068">
        <g id="Mic">
          <g id="Union">
            <path d={svgPaths.p1731c680} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p30d586b0} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-0 top-[1.76px]">
      <Mic />
      <div className="-translate-x-1/2 absolute bg-white h-[6.156px] left-1/2 rounded-bl-[3.518px] rounded-br-[3.518px] top-[10.99px] w-[7.036px]" />
    </div>
  );
}

function Placeholder() {
  return (
    <div className="content-stretch flex h-[24.625px] items-center justify-center p-[1.759px] relative shrink-0" data-name="Placeholder">
      <Group10 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="flex-[1_0_0] h-[47.49px] min-h-px min-w-px mr-[-7.036px] relative" data-name="Tab 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[1.759px] items-center justify-center p-[7.036px] relative size-full">
          <Placeholder />
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="relative shrink-0 size-[24.625px]" data-name="Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6247 24.6247">
        <g id="Chat">
          <path d={svgPaths.p1a758700} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mr-[-7.036px] relative" data-name="Tab 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[1.759px] items-center justify-center p-[7.036px] relative w-full">
          <Chat />
        </div>
      </div>
    </div>
  );
}

function MoreHorizontal() {
  return (
    <div className="relative shrink-0 size-[24.625px]" data-name="More Horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6247 24.6247">
        <g id="More Horizontal">
          <path d={svgPaths.p343d9600} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab3() {
  return (
    <div className="flex-[1_0_0] h-[47.49px] min-h-px min-w-px mr-[-7.036px] relative" data-name="Tab 4">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[1.759px] items-center justify-center p-[7.036px] relative size-full">
          <MoreHorizontal />
        </div>
      </div>
    </div>
  );
}

function MainTabBar() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex h-[54.526px] items-center left-0 pl-[3.518px] pr-[10.554px] py-[3.518px] rounded-[878.573px] shadow-[0px_1.759px_10.553px_0px_rgba(0,0,0,0.1)] top-0 w-[260.318px]" data-name="Main Tab Bar">
      <Tab6 />
      <Tab1 />
      <Tab />
      <Tab3 />
    </div>
  );
}

function Copilot1() {
  return (
    <div className="relative shrink-0 size-[21.107px]" data-name="Copilot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1068 21.1068">
        <g id="Copilot">
          <path d={svgPaths.p3f6bb000} fill="url(#paint0_radial_302_1894)" id="Shape" />
          <path d={svgPaths.p316d7100} fill="url(#paint1_radial_302_1894)" id="Shape_2" />
          <g id="Shape_3">
            <path d={svgPaths.p29f3e6c0} fill="url(#paint2_radial_302_1894)" />
            <path d={svgPaths.p29f3e6c0} fill="url(#paint3_linear_302_1894)" />
          </g>
          <g id="Shape_4">
            <path d={svgPaths.pefe0900} fill="url(#paint4_radial_302_1894)" />
            <path d={svgPaths.pefe0900} fill="url(#paint5_linear_302_1894)" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-4.83433 -5.9745 -5.2195 5.01122 17.1556 9.57446)" gradientUnits="userSpaceOnUse" id="paint0_radial_302_1894" r="1">
            <stop offset="0.0955758" stopColor="#00AEFF" />
            <stop offset="0.773185" stopColor="#2253CE" />
            <stop offset="1" stopColor="#0736C4" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(4.37981 5.69044 5.17026 -4.64465 5.34925 14.7335)" gradientUnits="userSpaceOnUse" id="paint1_radial_302_1894" r="1">
            <stop stopColor="#FFB657" />
            <stop offset="0.633728" stopColor="#FF5F3D" />
            <stop offset="0.923392" stopColor="#C02B3C" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.639022 -11.2523 63.2172 -3.58836 6.19085 14.9004)" gradientUnits="userSpaceOnUse" id="paint2_radial_302_1894" r="1">
            <stop offset="0.03" stopColor="#FFC800" />
            <stop offset="0.31" stopColor="#98BD42" />
            <stop offset="0.49" stopColor="#52B471" />
            <stop offset="0.843838" stopColor="#0D91E1" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_302_1894" x1="6.82301" x2="7.37228" y1="2.20548" y2="14.9049">
            <stop stopColor="#3DCBFF" />
            <stop offset="0.246674" stopColor="#0588F7" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-5.57226 15.9283 -18.9645 -7.02993 18.6165 5.85179)" gradientUnits="userSpaceOnUse" id="paint4_radial_302_1894" r="1">
            <stop offset="0.0661714" stopColor="#8C48FF" />
            <stop offset="0.5" stopColor="#F2598A" />
            <stop offset="0.895833" stopColor="#FFB152" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_302_1894" x1="19.1737" x2="19.1666" y1="6.31982" y2="9.77869">
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
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex items-center justify-center left-[270.87px] p-[3.518px] rounded-[878.573px] shadow-[0px_1.759px_10.553px_0px_rgba(0,0,0,0.1)] size-[54.526px] top-0" data-name="Copilot">
      <Copilot1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="-translate-x-1/2 absolute h-[54.526px] left-[calc(50%+0.49px)] top-[687.75px] w-[325.397px]">
      <MainTabBar />
      <Copilot />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[3.518px] ml-0 mt-[5.28px] rounded-[19.348px] row-1 w-[1.759px]" />
      <div className="bg-white col-1 h-[6.156px] ml-[3.52px] mt-[2.64px] rounded-[19.348px] row-1 w-[1.759px]" />
      <div className="bg-white col-1 h-[8.795px] ml-[7.04px] mt-0 opacity-30 rounded-[19.348px] row-1 w-[1.759px]" />
    </div>
  );
}

function GciIndicatorTwo() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[4.397px] bottom-[76.47%] content-stretch flex items-center left-[calc(50%+34.74px)] overflow-clip px-[3.518px] rounded-br-[3.518px] rounded-tr-[3.518px] top-[10.29%]" data-name="GCI Indicator/Two">
      <Group6 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[6.62%_5.78%_72.79%_71.08%]">
      <div className="absolute inset-[6.62%_5.78%_72.79%_71.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6247 24.6247">
          <circle cx="12.3123" cy="12.3123" data-figma-bg-blur-radius="3.51781" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" r="12.3123" />
          <defs>
            <clipPath id="bgblur_0_302_1913_clip_path" transform="translate(3.51781 3.51781)">
              <circle cx="12.3123" cy="12.3123" r="12.3123" />
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
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex h-[13.043px] items-center justify-center p-[5.434px] relative rounded-[54.345px] shrink-0">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[7.608px] overflow-hidden relative shrink-0 text-[6.521px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        You
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[6.65px] top-[calc(50%+43.67px)]">
      <Frame5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[6.65px] top-[calc(50%+43.67px)]">
      <Frame18 />
    </div>
  );
}

function Mic1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[11.76%] left-[calc(50%+34.74px)] overflow-clip top-3/4 w-[15.83px]" data-name="Mic">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[10.553px] left-[calc(50%+0.08px)] top-[calc(50%+0.08px)] w-[7.915px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.91507 10.5534">
          <path d={svgPaths.p3445ab30} fill="var(--fill-0, #37EF46)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[71.32%_5.78%_8.09%_71.08%]">
      <div className="absolute inset-[71.32%_5.78%_8.09%_71.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6247 24.6247">
          <circle cx="12.3123" cy="12.3123" data-figma-bg-blur-radius="3.51781" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" r="12.3123" />
          <defs>
            <clipPath id="bgblur_0_302_1913_clip_path" transform="translate(3.51781 3.51781)">
              <circle cx="12.3123" cy="12.3123" r="12.3123" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Mic1 />
    </div>
  );
}

function Self() {
  return (
    <div className="absolute h-[119.605px] left-[230.03px] shadow-[0px_3.518px_17.589px_0px_rgba(0,0,0,0.25)] top-[550.56px] w-[106.414px]" data-name="Self">
      <div className="absolute h-[119.605px] left-0 rounded-[17.589px] top-0 w-[106.414px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[17.589px] size-full" src={imgRectangle346604096} />
      </div>
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}

function PageControlItem() {
  return (
    <div className="relative shrink-0 size-[8.795px]" data-name=".Page control item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.79452 8.79452">
        <g id=".Page control item">
          <circle cx="4" cy="4" fill="var(--fill-0, #E1E1E1)" id="Smaller" r="2.63836" />
        </g>
      </svg>
    </div>
  );
}

function PageControlItem1() {
  return (
    <div className="relative shrink-0 size-[8.795px]" data-name=".Page control item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.79452 8.79452">
        <g id=".Page control item">
          <circle cx="4.39726" cy="4.39726" fill="var(--fill-0, #968CFF)" id="Selected" r="4.39726" />
        </g>
      </svg>
    </div>
  );
}

function PageControlItem2() {
  return (
    <div className="relative shrink-0 size-[8.795px]" data-name=".Page control item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.79452 8.79452">
        <g id=".Page control item">
          <circle cx="4" cy="4" fill="var(--fill-0, #E1E1E1)" id="Smaller" r="2.63836" />
        </g>
      </svg>
    </div>
  );
}

function PageControl() {
  return (
    <div className="content-stretch flex gap-[6.156px] items-center relative shrink-0 w-[38.696px]" data-name="Page control">
      <PageControlItem />
      <PageControlItem1 />
      <PageControlItem2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(64,64,64,0.7)] content-stretch flex flex-col items-center justify-center left-[calc(50%-5.28px)] px-[17.589px] py-[3.518px] rounded-[17.589px] top-[663.11px]">
      <PageControl />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[3.518px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[17.589px] not-italic relative shrink-0 text-[#bebebe] text-[9.674px] text-center tracking-[-0.2111px]">13 min</p>
    </div>
  );
}

function PillButtonTeams2IOs1() {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] h-[17.589px] relative rounded-[8793.641px] shrink-0 w-[39.575px]" data-name="Pill button (Teams 2 iOS)">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[14.071px] py-[7.036px] relative rounded-[inherit] size-full">
        <Content />
      </div>
      <div aria-hidden="true" className="absolute border-[#37ef46] border-[0.879px] border-solid inset-0 pointer-events-none rounded-[8793.641px]" />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.518px] items-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[17.589px] not-italic relative shrink-0 text-[9.674px] text-center text-white tracking-[-0.2111px]">Timer topic name #1</p>
    </div>
  );
}

function PillButtonTeams2IOs() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] flex-[1_0_0] min-h-px min-w-px relative rounded-[8793.641px]" data-name="Pill button (Teams 2 iOS)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[7.036px] items-center px-[14.071px] py-[7.036px] relative w-full">
          <PillButtonTeams2IOs1 />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Shield() {
  return (
    <div className="relative shrink-0 size-[14.071px]" data-name="Shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0712 14.0712">
        <g id="Shield">
          <path d={svgPaths.p3f828400} fill="var(--fill-0, #7F85F5)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Shield1() {
  return (
    <div className="relative shrink-0 size-[14.071px]" data-name="Shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0712 14.0712">
        <g id="Shield">
          <path d={svgPaths.p35ee1200} fill="var(--fill-0, #CC4A31)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Recording() {
  return (
    <div className="relative shrink-0 size-[14.071px]" data-name="Recording">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0712 14.0712">
        <g id="Recording">
          <path d={svgPaths.p1afc7d00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function NotificationBadge() {
  return (
    <div className="bg-[#7f85f5] h-[11.257px] relative rounded-[70.358px] shrink-0 w-full" data-name="Notification badge">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[4.221px] relative size-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[11.257px] not-italic relative shrink-0 text-[7.739px] text-black text-center tracking-[0.0422px]">+6</p>
        </div>
      </div>
    </div>
  );
}

function Recording1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[1.759px] py-[0.879px] relative shrink-0" data-name="Recording">
      <NotificationBadge />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[6.156px] items-end relative shrink-0">
      <Shield />
      <Shield1 />
      <Recording />
      <Recording1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[3.518px] items-center overflow-clip relative shrink-0" data-name="Content">
      <Frame10 />
    </div>
  );
}

function PillButtonTeams2IOs2() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] content-stretch flex h-[31.66px] items-center justify-center overflow-clip px-[14.071px] py-[7.036px] relative rounded-[8793.641px] shrink-0" data-name="Pill button (Teams 2 iOS)">
      <Content2 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[345.625px]">
      <PillButtonTeams2IOs />
      <PillButtonTeams2IOs2 />
    </div>
  );
}

function SecondaryHeaderRow() {
  return (
    <div className="h-[31.66px] relative shrink-0 w-full" data-name="Secondary header row">
      <Frame20 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.44px)] top-[49.25px] w-[345.625px]">
      <SecondaryHeaderRow />
    </div>
  );
}

function Stage() {
  return (
    <div className="-translate-x-1/2 absolute bg-black border-[5.277px] border-black border-solid h-[768.641px] left-1/2 overflow-clip rounded-[47.49px] shadow-[0px_10.553px_42.214px_0px_rgba(0,0,0,0.24)] top-[254px] w-[353.54px]" data-name="Stage">
      <Header />
      <Frame22 />
      <Frame8 />
      <Self />
      <Frame16 />
      <Frame12 />
    </div>
  );
}

function Time1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[19.348px] items-center justify-center min-h-px min-w-px pt-[1.759px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[19.348px] relative shrink-0 text-[14.951px] text-center text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        8:14
      </p>
    </div>
  );
}

function Battery1() {
  return (
    <div className="h-[11.433px] relative shrink-0 w-[24.034px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0337 11.4329">
        <g id="Battery">
          <rect height="10.5534" id="Border" opacity="0.35" rx="3.34192" stroke="var(--stroke-0, white)" strokeWidth="0.879452" width="21.1068" x="0.439726" y="0.439726" />
          <path d={svgPaths.p191f0380} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, white)" height="7.91507" id="Capacity" rx="2.19863" width="18.4685" x="1.7589" y="1.7589" />
        </g>
      </svg>
    </div>
  );
}

function Levels1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6.156px] h-[19.348px] items-center justify-center min-h-px min-w-px pt-[0.879px] relative" data-name="Levels">
      <div className="h-[10.753px] relative shrink-0 w-[16.885px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8855 10.7525">
          <path clipRule="evenodd" d={svgPaths.p393a9e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[10.842px] relative shrink-0 w-[15.075px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0753 10.8422">
          <path clipRule="evenodd" d={svgPaths.p27230e40} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <Battery1 />
    </div>
  );
}

function StatusBar1() {
  return (
    <div className="absolute content-stretch flex gap-[135.436px] items-center justify-center left-0 pb-[16.71px] pt-[18.468px] px-[14.071px] top-0 w-[353.54px]" data-name="Status bar">
      <Time1 />
      <Levels1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute contents left-[-5.28px] top-[-5.28px]" data-name="Header">
      <StatusBar1 />
      <div className="absolute bg-black h-[30.781px] left-[122.24px] rounded-[87.945px] top-[13.19px] w-[109.052px]" />
      <div className="absolute left-[219.86px] size-[4.397px] top-[26.38px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.39726 4.39726">
          <circle cx="2.19863" cy="2.19863" fill="var(--fill-0, #37EF46)" id="Ellipse 26599" r="2.19863" />
        </svg>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute right-[13.19px] size-[28.142px] top-[12.31px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.1425 28.1425">
        <g id="Group 2117130284">
          <circle cx="14.0712" cy="14.0712" fill="var(--fill-0, #878BFB)" id="Ellipse 3" opacity="0.5" r="14.0712" />
          <circle cx="14.0712" cy="14.0712" data-figma-bg-blur-radius="791.507" fill="var(--fill-0, #878BFB)" id="Ellipse 4" r="9.67397" />
          <g filter="url(#filter1_i_302_1900)" id="Rectangle 346603857">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="7.03562" rx="0.879452" width="1.7589" x="13.1918" y="10.5534" />
          </g>
          <g filter="url(#filter2_i_302_1900)" id="Rectangle 346603858">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="3.51781" rx="0.879452" width="1.7589" x="9.67397" y="12.3123" />
          </g>
          <g filter="url(#filter3_i_302_1900)" id="Rectangle 346603859">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="3.51781" rx="0.879452" width="1.7589" x="16.7096" y="12.3123" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_302_1900_clip_path" transform="translate(787.11 787.11)">
            <circle cx="14.0712" cy="14.0712" r="9.67397" />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="7.21151" id="filter1_i_302_1900" width="1.93479" x="13.0159" y="10.5534">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.439726" dy="0.17589" />
            <feGaussianBlur stdDeviation="0.0879452" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_302_1900" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.6937" id="filter2_i_302_1900" width="1.93479" x="9.49808" y="12.3123">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.439726" dy="0.17589" />
            <feGaussianBlur stdDeviation="0.0879452" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_302_1900" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.6937" id="filter3_i_302_1900" width="1.93479" x="16.5337" y="12.3123">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.439726" dy="0.17589" />
            <feGaussianBlur stdDeviation="0.0879452" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_302_1900" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[21.107px] items-center justify-center left-[12.31px] p-[8.795px] rounded-[87.945px] top-[544.38px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12.312px] overflow-hidden relative shrink-0 text-[10.553px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Aadi Kapoor
      </p>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[3.518px] ml-0 mt-[5.28px] rounded-[19.348px] row-1 w-[1.759px]" />
      <div className="bg-white col-1 h-[6.156px] ml-[3.52px] mt-[2.64px] rounded-[19.348px] row-1 w-[1.759px]" />
      <div className="bg-white col-1 h-[8.795px] ml-[7.04px] mt-0 opacity-30 rounded-[19.348px] row-1 w-[1.759px]" />
    </div>
  );
}

function GciIndicatorTwo1() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[4.397px] bottom-[76.47%] content-stretch flex items-center left-[calc(50%+34.74px)] overflow-clip px-[3.518px] rounded-br-[3.518px] rounded-tr-[3.518px] top-[10.29%]" data-name="GCI Indicator/Two">
      <Group7 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[6.62%_5.79%_72.79%_71.07%]">
      <div className="absolute inset-[6.62%_5.79%_72.79%_71.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6247 24.6247">
          <circle cx="12.3123" cy="12.3123" data-figma-bg-blur-radius="3.51781" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" r="12.3123" />
          <defs>
            <clipPath id="bgblur_0_302_1913_clip_path" transform="translate(3.51781 3.51781)">
              <circle cx="12.3123" cy="12.3123" r="12.3123" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <GciIndicatorTwo1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex h-[13.043px] items-center justify-center p-[5.434px] relative rounded-[54.345px] shrink-0">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[7.608px] overflow-hidden relative shrink-0 text-[6.521px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        You
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[6.65px] top-[calc(50%+43.67px)]">
      <Frame7 />
    </div>
  );
}

function Group4() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[6.65px] top-[calc(50%+43.67px)]">
      <Frame19 />
    </div>
  );
}

function Mic2() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[11.76%] left-[calc(50%+34.74px)] overflow-clip top-3/4 w-[15.83px]" data-name="Mic">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[10.553px] left-[calc(50%+0.08px)] top-[calc(50%+0.08px)] w-[7.915px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.91507 10.5534">
          <path d={svgPaths.p3445ab30} fill="var(--fill-0, #37EF46)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[71.32%_5.79%_8.09%_71.07%]">
      <div className="absolute inset-[71.32%_5.79%_8.09%_71.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6247 24.6247">
          <circle cx="12.3123" cy="12.3123" data-figma-bg-blur-radius="3.51781" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" r="12.3123" />
          <defs>
            <clipPath id="bgblur_0_302_1913_clip_path" transform="translate(3.51781 3.51781)">
              <circle cx="12.3123" cy="12.3123" r="12.3123" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Mic2 />
    </div>
  );
}

function Self1() {
  return (
    <div className="absolute h-[119.605px] left-[227.78px] shadow-[0px_3.518px_17.589px_0px_rgba(0,0,0,0.25)] top-[455.56px] w-[106.414px]" data-name="Self">
      <div className="absolute h-[119.605px] left-0 rounded-[17.589px] top-0 w-[106.414px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[17.589px] size-full" src={imgRectangle346604096} />
      </div>
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Video1() {
  return (
    <div className="h-[24.625px] relative shrink-0 w-[21.107px]" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1068 24.6247">
        <g id="Video">
          <path d={svgPaths.p798b700} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab7() {
  return (
    <div className="flex-[1_0_0] h-[47.49px] min-h-px min-w-px mr-[-7.036px] relative" data-name="Tab 7">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[1.759px] items-center justify-center p-[7.036px] relative size-full">
          <Video1 />
        </div>
      </div>
    </div>
  );
}

function Mic3() {
  return (
    <div className="absolute left-0 size-[21.107px] top-[1.76px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1068 21.1068">
        <g id="Mic">
          <g id="Union">
            <path d={svgPaths.p1731c680} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p30d586b0} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-0 top-[1.76px]">
      <Mic3 />
      <div className="-translate-x-1/2 absolute bg-white h-[6.156px] left-1/2 rounded-bl-[3.518px] rounded-br-[3.518px] top-[10.99px] w-[7.036px]" />
    </div>
  );
}

function Placeholder1() {
  return (
    <div className="content-stretch flex h-[24.625px] items-center justify-center p-[1.759px] relative shrink-0" data-name="Placeholder">
      <Group11 />
    </div>
  );
}

function Tab2() {
  return (
    <div className="flex-[1_0_0] h-[47.49px] min-h-px min-w-px mr-[-7.036px] relative" data-name="Tab 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[1.759px] items-center justify-center p-[7.036px] relative size-full">
          <Placeholder1 />
        </div>
      </div>
    </div>
  );
}

function Chat1() {
  return (
    <div className="relative shrink-0 size-[24.625px]" data-name="Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6247 24.6247">
        <g id="Chat">
          <path d={svgPaths.p1a758700} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mr-[-7.036px] relative" data-name="Tab 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[1.759px] items-center justify-center p-[7.036px] relative w-full">
          <Chat1 />
        </div>
      </div>
    </div>
  );
}

function MoreHorizontal1() {
  return (
    <div className="relative shrink-0 size-[24.625px]" data-name="More Horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6247 24.6247">
        <g id="More Horizontal">
          <path d={svgPaths.p343d9600} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Tab5() {
  return (
    <div className="flex-[1_0_0] h-[47.49px] min-h-px min-w-px mr-[-7.036px] relative" data-name="Tab 4">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[1.759px] items-center justify-center p-[7.036px] relative size-full">
          <MoreHorizontal1 />
        </div>
      </div>
    </div>
  );
}

function MainTabBar1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex h-[54.526px] items-center left-0 pl-[3.518px] pr-[10.554px] py-[3.518px] rounded-[878.573px] shadow-[0px_1.759px_10.553px_0px_rgba(0,0,0,0.1)] top-0 w-[260.318px]" data-name="Main Tab Bar">
      <Tab7 />
      <Tab2 />
      <Tab4 />
      <Tab5 />
    </div>
  );
}

function Copilot3() {
  return (
    <div className="relative shrink-0 size-[21.107px]" data-name="Copilot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1068 21.1068">
        <g id="Copilot">
          <path d={svgPaths.p3f6bb000} fill="url(#paint0_radial_302_1894)" id="Shape" />
          <path d={svgPaths.p316d7100} fill="url(#paint1_radial_302_1894)" id="Shape_2" />
          <g id="Shape_3">
            <path d={svgPaths.p29f3e6c0} fill="url(#paint2_radial_302_1894)" />
            <path d={svgPaths.p29f3e6c0} fill="url(#paint3_linear_302_1894)" />
          </g>
          <g id="Shape_4">
            <path d={svgPaths.pefe0900} fill="url(#paint4_radial_302_1894)" />
            <path d={svgPaths.pefe0900} fill="url(#paint5_linear_302_1894)" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-4.83433 -5.9745 -5.2195 5.01122 17.1556 9.57446)" gradientUnits="userSpaceOnUse" id="paint0_radial_302_1894" r="1">
            <stop offset="0.0955758" stopColor="#00AEFF" />
            <stop offset="0.773185" stopColor="#2253CE" />
            <stop offset="1" stopColor="#0736C4" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(4.37981 5.69044 5.17026 -4.64465 5.34925 14.7335)" gradientUnits="userSpaceOnUse" id="paint1_radial_302_1894" r="1">
            <stop stopColor="#FFB657" />
            <stop offset="0.633728" stopColor="#FF5F3D" />
            <stop offset="0.923392" stopColor="#C02B3C" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.639022 -11.2523 63.2172 -3.58836 6.19085 14.9004)" gradientUnits="userSpaceOnUse" id="paint2_radial_302_1894" r="1">
            <stop offset="0.03" stopColor="#FFC800" />
            <stop offset="0.31" stopColor="#98BD42" />
            <stop offset="0.49" stopColor="#52B471" />
            <stop offset="0.843838" stopColor="#0D91E1" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_302_1894" x1="6.82301" x2="7.37228" y1="2.20548" y2="14.9049">
            <stop stopColor="#3DCBFF" />
            <stop offset="0.246674" stopColor="#0588F7" stopOpacity="0" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-5.57226 15.9283 -18.9645 -7.02993 18.6165 5.85179)" gradientUnits="userSpaceOnUse" id="paint4_radial_302_1894" r="1">
            <stop offset="0.0661714" stopColor="#8C48FF" />
            <stop offset="0.5" stopColor="#F2598A" />
            <stop offset="0.895833" stopColor="#FFB152" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_302_1894" x1="19.1737" x2="19.1666" y1="6.31982" y2="9.77869">
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
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex items-center justify-center left-[270.87px] p-[3.518px] rounded-[878.573px] shadow-[0px_1.759px_10.553px_0px_rgba(0,0,0,0.1)] size-[54.526px] top-0" data-name="Copilot">
      <Copilot3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 absolute h-[54.526px] left-1/2 top-[598.03px] w-[325.397px]">
      <MainTabBar1 />
      <Copilot2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[777.436px] left-0 top-[89.7px] w-[342.986px]">
      <div className="absolute h-[664.866px] left-0 rounded-[17.589px] top-0 w-[342.986px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[17.589px] size-full" src={imgRectangle346604090} />
      </div>
      <Group9 />
      <div className="absolute border-[#878bfb] border-[2.638px] border-solid h-[668.384px] left-0 rounded-bl-[42.214px] rounded-br-[42.214px] rounded-tl-[17.589px] rounded-tr-[17.589px] top-0 w-[342.986px]" data-name="image" />
      <div className="absolute border-[#010101] border-[0.879px] border-solid h-[663.107px] left-[2.64px] rounded-bl-[39.575px] rounded-br-[39.575px] rounded-tl-[14.951px] rounded-tr-[14.951px] top-[2.64px] w-[337.71px]" data-name="image" />
      <Frame6 />
      <Self1 />
      <Frame9 />
    </div>
  );
}

function PageControlItem3() {
  return (
    <div className="relative shrink-0 size-[8.795px]" data-name=".Page control item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.79452 8.79452">
        <g id=".Page control item">
          <circle cx="4" cy="4" fill="var(--fill-0, #E1E1E1)" id="Smaller" r="2.63836" />
        </g>
      </svg>
    </div>
  );
}

function PageControlItem4() {
  return (
    <div className="relative shrink-0 size-[8.795px]" data-name=".Page control item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.79452 8.79452">
        <g id=".Page control item">
          <circle cx="4" cy="4" fill="var(--fill-0, #E1E1E1)" id="Smaller" r="2.63836" />
        </g>
      </svg>
    </div>
  );
}

function PageControlItem5() {
  return (
    <div className="relative shrink-0 size-[8.795px]" data-name=".Page control item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.79452 8.79452">
        <g id=".Page control item">
          <circle cx="4.39726" cy="4.39726" fill="var(--fill-0, #968CFF)" id="Selected" r="4.39726" />
        </g>
      </svg>
    </div>
  );
}

function PageControl1() {
  return (
    <div className="content-stretch flex gap-[6.156px] items-center relative shrink-0 w-full" data-name="Page control">
      <PageControlItem3 />
      <PageControlItem4 />
      <PageControlItem5 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(64,64,64,0.7)] content-stretch flex flex-col items-center justify-center left-[calc(50%-5.28px)] px-[17.589px] py-[3.518px] rounded-[17.589px] top-[663.11px]">
      <PageControl1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[3.518px] items-center overflow-clip relative shrink-0" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[17.589px] not-italic relative shrink-0 text-[#bebebe] text-[9.674px] text-center tracking-[-0.2111px]">13 min</p>
    </div>
  );
}

function PillButtonTeams2IOs4() {
  return (
    <div className="bg-[rgba(0,0,0,0.9)] h-[17.589px] relative rounded-[8793.641px] shrink-0 w-[39.575px]" data-name="Pill button (Teams 2 iOS)">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[14.071px] py-[7.036px] relative rounded-[inherit] size-full">
        <Content3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#37ef46] border-[0.879px] border-solid inset-0 pointer-events-none rounded-[8793.641px]" />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.518px] items-center min-h-px min-w-px overflow-clip relative" data-name="Content">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[17.589px] not-italic relative shrink-0 text-[9.674px] text-center text-white tracking-[-0.2111px]">Timer topic name #1</p>
    </div>
  );
}

function PillButtonTeams2IOs3() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] flex-[1_0_0] min-h-px min-w-px relative rounded-[8793.641px]" data-name="Pill button (Teams 2 iOS)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[7.036px] items-center px-[14.071px] py-[7.036px] relative w-full">
          <PillButtonTeams2IOs4 />
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Shield2() {
  return (
    <div className="relative shrink-0 size-[14.071px]" data-name="Shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0712 14.0712">
        <g id="Shield">
          <path d={svgPaths.p3f828400} fill="var(--fill-0, #7F85F5)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Shield3() {
  return (
    <div className="relative shrink-0 size-[14.071px]" data-name="Shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0712 14.0712">
        <g id="Shield">
          <path d={svgPaths.p35ee1200} fill="var(--fill-0, #CC4A31)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Recording2() {
  return (
    <div className="relative shrink-0 size-[14.071px]" data-name="Recording">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0712 14.0712">
        <g id="Recording">
          <path d={svgPaths.p1afc7d00} fill="var(--fill-0, #E1E1E1)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function NotificationBadge1() {
  return (
    <div className="bg-[#7f85f5] h-[11.257px] relative rounded-[70.358px] shrink-0 w-full" data-name="Notification badge">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[4.221px] relative size-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[11.257px] not-italic relative shrink-0 text-[7.739px] text-black text-center tracking-[0.0422px]">+6</p>
        </div>
      </div>
    </div>
  );
}

function Recording3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[1.759px] py-[0.879px] relative shrink-0" data-name="Recording">
      <NotificationBadge1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[6.156px] items-end relative shrink-0">
      <Shield2 />
      <Shield3 />
      <Recording2 />
      <Recording3 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[3.518px] items-center overflow-clip relative shrink-0" data-name="Content">
      <Frame11 />
    </div>
  );
}

function PillButtonTeams2IOs5() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] content-stretch flex h-[31.66px] items-center justify-center overflow-clip px-[14.071px] py-[7.036px] relative rounded-[8793.641px] shrink-0" data-name="Pill button (Teams 2 iOS)">
      <Content5 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[345.625px]">
      <PillButtonTeams2IOs3 />
      <PillButtonTeams2IOs5 />
    </div>
  );
}

function SecondaryHeaderRow1() {
  return (
    <div className="h-[31.66px] relative shrink-0 w-full" data-name="Secondary header row">
      <Frame21 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.44px)] top-[49.25px] w-[345.625px]">
      <SecondaryHeaderRow1 />
    </div>
  );
}

function ActiveSpeakerMode() {
  return (
    <div className="-translate-x-1/2 absolute bg-black border-[5.277px] border-black border-solid h-[768.641px] left-[calc(50%+465.23px)] overflow-clip rounded-[47.49px] shadow-[0px_10.553px_42.214px_0px_rgba(0,0,0,0.24)] top-[254px] w-[353.54px]" data-name="Active speaker mode">
      <Header1 />
      <Frame14 />
      <Frame17 />
      <Frame15 />
    </div>
  );
}

function GesturesTap() {
  return (
    <div className="absolute left-0 size-[41.334px] top-0" data-name="Gestures / Tap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.334 41.334">
        <g id="Gestures / Tap">
          <circle cx="20.667" cy="20.667" fill="var(--fill-0, #584BDF)" id="Ellipse" r="20.667" />
          <path d={svgPaths.p2eb6f280} fill="var(--fill-0, white)" id="Shape" stroke="var(--stroke-0, white)" strokeWidth="3.51781" />
        </g>
      </svg>
    </div>
  );
}

function Gesture() {
  return (
    <div className="h-[41.334px] relative w-[190.136px]" data-name="Gesture">
      <div className="absolute bg-gradient-to-r bottom-[0.33px] from-[#584bdf] h-[41.334px] left-[10.14%] right-0 to-[94.758%] to-[rgba(196,196,196,0)]" data-name="Swipe" />
      <GesturesTap />
    </div>
  );
}

function GesturesTap1() {
  return (
    <div className="absolute left-0 size-[41.334px] top-0" data-name="Gestures / Tap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.334 41.334">
        <g id="Gestures / Tap">
          <circle cx="20.667" cy="20.667" fill="var(--fill-0, #584BDF)" id="Ellipse" r="20.667" />
          <path d={svgPaths.p2eb6f280} fill="var(--fill-0, white)" id="Shape" stroke="var(--stroke-0, white)" strokeWidth="3.51781" />
        </g>
      </svg>
    </div>
  );
}

function Gesture1() {
  return (
    <div className="h-[41.334px] relative w-[190.136px]" data-name="Gesture">
      <div className="absolute bg-gradient-to-r bottom-[0.33px] from-[#584bdf] h-[41.334px] left-[10.14%] right-0 to-[94.758%] to-[rgba(196,196,196,0)]" data-name="Swipe" />
      <GesturesTap1 />
    </div>
  );
}

function GesturesTap2() {
  return (
    <div className="absolute left-0 size-[41.334px] top-0" data-name="Gestures / Tap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.334 41.334">
        <g id="Gestures / Tap">
          <circle cx="20.667" cy="20.667" fill="var(--fill-0, #584BDF)" id="Ellipse" r="20.667" />
          <path d={svgPaths.p2eb6f280} fill="var(--fill-0, white)" id="Shape" stroke="var(--stroke-0, white)" strokeWidth="3.51781" />
        </g>
      </svg>
    </div>
  );
}

function Gesture2() {
  return (
    <div className="h-[41.334px] relative w-[190.136px]" data-name="Gesture">
      <div className="absolute bg-gradient-to-r bottom-[0.33px] from-[#584bdf] h-[41.334px] left-[10.14%] right-0 to-[94.758%] to-[rgba(196,196,196,0)]" data-name="Swipe" />
      <GesturesTap2 />
    </div>
  );
}

function GesturesTap3() {
  return (
    <div className="absolute left-0 size-[41.334px] top-0" data-name="Gestures / Tap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.334 41.334">
        <g id="Gestures / Tap">
          <circle cx="20.667" cy="20.667" fill="var(--fill-0, #584BDF)" id="Ellipse" r="20.667" />
          <path d={svgPaths.p2eb6f280} fill="var(--fill-0, white)" id="Shape" stroke="var(--stroke-0, white)" strokeWidth="3.51781" />
        </g>
      </svg>
    </div>
  );
}

function Gesture3() {
  return (
    <div className="h-[41.334px] relative w-[190.136px]" data-name="Gesture">
      <div className="absolute bg-gradient-to-r bottom-[0.33px] from-[#584bdf] h-[41.334px] left-[10.14%] right-0 to-[94.758%] to-[rgba(196,196,196,0)]" data-name="Swipe" />
      <GesturesTap3 />
    </div>
  );
}

export default function MobileMeeting() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile Meeting">
      <div className="absolute h-[844px] left-[285px] top-[228px] w-[433px]" data-name="Portrait 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPortrait1} />
      </div>
      <Left />
      <p className="-translate-x-1/2 absolute font-['Segoe_UI_Variable:Text_Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-3.5px)] text-[#0c34fb] text-[24px] text-center top-[202px] w-[345px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 10.5" }}>
        Gallery view
      </p>
      <p className="-translate-x-1/2 absolute font-['Segoe_UI_Variable:Text_Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-458.5px)] text-[#0c34fb] text-[24px] text-center top-[202px] w-[345px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 10.5" }}>
        On-the-go mode
      </p>
      <p className="-translate-x-1/2 absolute font-['Segoe_UI_Variable:Text_Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+464.5px)] text-[#0c34fb] text-[24px] text-center top-[202px] w-[345px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 10.5" }}>
        Focus mode
      </p>
      <Stage />
      <ActiveSpeakerMode />
      <div className="absolute flex h-[41.334px] items-center justify-center left-[1101.59px] top-[596.99px] w-[190.136px]">
        <div className="-scale-y-100 flex-none">
          <Gesture />
        </div>
      </div>
      <div className="absolute flex h-[41.334px] items-center justify-center left-[1101.59px] top-[647.11px] w-[190.136px]">
        <div className="flex-none rotate-180">
          <Gesture1 />
        </div>
      </div>
      <div className="absolute flex h-[41.334px] items-center justify-center left-[632.84px] top-[596.99px] w-[190.136px]">
        <div className="-scale-y-100 flex-none">
          <Gesture2 />
        </div>
      </div>
      <div className="absolute flex h-[41.334px] items-center justify-center left-[632.84px] top-[647.12px] w-[190.136px]">
        <div className="flex-none rotate-180">
          <Gesture3 />
        </div>
      </div>
    </div>
  );
}