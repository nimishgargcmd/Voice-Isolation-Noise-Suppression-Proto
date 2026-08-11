import svgPaths from "./svg-ra71kde5x8";
import imgRectangle346604090 from "figma:asset/39154ef67ddaa64702482bb71cb22487de1cf404.png";
import imgRectangle346604093 from "figma:asset/0e1451995ab75444f4e79c58f872a551ab745d47.png";
import imgRectangle346604095 from "figma:asset/c82f00eab4bba2fb354dbe1d896a20e857d5fd3d.png";
import imgRectangle346604092 from "figma:asset/07ed84b0d7bbe415782fa76088893b674d660f2c.png";
import imgRectangle346604097 from "figma:asset/b7d47865ac962c686cb32e819e7b9962113b9b6e.png";
import imgImage from "figma:asset/f3edab3305d6980218cc52719020bc598b4a6331.png";
import imgRectangle346604096 from "figma:asset/2988dddd4762039b89078373be258dc29df8140a.png";

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

function Group2() {
  return (
    <div className="absolute right-[212px] size-[32px] top-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2117130284">
          <circle cx="16" cy="16" fill="var(--fill-0, #878BFB)" id="Ellipse 3" opacity="0.5" r="16" />
          <circle cx="16" cy="16" data-figma-bg-blur-radius="900" fill="var(--fill-0, #878BFB)" id="Ellipse 4" r="11" />
          <g filter="url(#filter1_i_341_5205)" id="Rectangle 346603857">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="8" rx="1" width="2" x="15" y="12" />
          </g>
          <g filter="url(#filter2_i_341_5205)" id="Rectangle 346603858">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="4" rx="1" width="2" x="11" y="14" />
          </g>
          <g filter="url(#filter3_i_341_5205)" id="Rectangle 346603859">
            <rect fill="var(--fill-0, white)" fillOpacity="0.8" height="4" rx="1" width="2" x="19" y="14" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_341_5205_clip_path" transform="translate(895 895)">
            <circle cx="16" cy="16" r="11" />
          </clipPath>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.2" id="filter1_i_341_5205" width="2.2" x="14.8" y="12">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_341_5205" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter2_i_341_5205" width="2.2" x="10.8" y="14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_341_5205" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter3_i_341_5205" width="2.2" x="18.8" y="14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_341_5205" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[24px] items-center justify-center left-[14px] p-[10px] rounded-[100px] top-[178px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Aadi Kapoor
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[24px] items-center justify-center left-[212px] p-[10px] rounded-[100px] top-[178px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Babak Shammas
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[24px] items-center justify-center left-[14px] p-[10px] rounded-[100px] top-[402px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Miguel Silva
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[24px] items-center justify-center left-[212px] p-[10px] rounded-[100px] top-[402px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Jessica Kline
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[24px] items-center justify-center left-[14px] p-[10px] rounded-[100px] top-[624px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Ray Tanaka
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[884px] left-0 top-[396px] w-[390px]">
      <div className="absolute h-[216px] left-0 rounded-bl-[20px] rounded-br-[20px] rounded-tl-[32px] rounded-tr-[20px] top-0 w-[192px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[20px] rounded-br-[20px] rounded-tl-[32px] rounded-tr-[20px] size-full" src={imgRectangle346604090} />
      </div>
      <Group2 />
      <div className="absolute border-3 border-[#878bfb] border-solid h-[216px] left-0 rounded-bl-[20px] rounded-br-[20px] rounded-tl-[32px] rounded-tr-[20px] top-0 w-[192px]" data-name="image" />
      <div className="absolute border-3 border-[#010101] border-solid h-[210px] left-[3px] rounded-bl-[17px] rounded-br-[17px] rounded-tl-[29px] rounded-tr-[17px] top-[3px] w-[186px]" data-name="image" />
      <div className="absolute h-[218px] left-0 rounded-[20px] top-[222px] w-[389px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle346604093} />
      </div>
      <div className="absolute h-[216px] left-0 rounded-[20px] top-[446px] w-[390px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle346604095} />
      </div>
      <div className="absolute h-[216px] left-[198px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[32px] top-0 w-[192px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[32px] size-full" src={imgRectangle346604092} />
      </div>
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <div className="absolute h-[216px] left-0 rounded-[20px] top-[668px] w-[390px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle346604097} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex h-[24px] items-center justify-center left-[13px] p-[10px] rounded-[100px] top-[343px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Aadi Kapoor’s content
      </p>
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

function PillButtonTeams2IOs1() {
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
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[11px] text-center text-white tracking-[-0.24px]">Timer topic name #1</p>
    </div>
  );
}

function PillButtonTeams2IOs() {
  return (
    <div className="bg-[rgba(10,6,4,0.9)] flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px]" data-name="Pill button (Teams 2 iOS)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <PillButtonTeams2IOs1 />
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
        <g id="Shield">
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

function Recording1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[2px] py-px relative shrink-0" data-name="Recording">
      <NotificationBadge />
    </div>
  );
}

function Frame8() {
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
      <Frame8 />
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

function Frame14() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-0 w-[393px]">
      <PillButtonTeams2IOs />
      <PillButtonTeams2IOs2 />
    </div>
  );
}

function SecondaryHeaderRow() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Secondary header row">
      <Frame14 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[393px]">
      <SecondaryHeaderRow />
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.5px)] top-[56px] w-[393px]">
      <Frame11 />
    </div>
  );
}

function FullScreenMaximize() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Full Screen Maximize">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Full Screen Maximize">
          <path d={svgPaths.p24e1e780} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center left-[calc(50%+165px)] p-[10px] rounded-[100px] top-[335px]">
      <FullScreenMaximize />
    </div>
  );
}

function PageControlItem() {
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

function PageControlItem1() {
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

function Frame12() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(64,64,64,0.7)] content-stretch flex flex-col items-center justify-center left-[calc(50%-7px)] px-[20px] py-[4px] rounded-[20px] top-[128px]">
      <PageControl />
    </div>
  );
}

function Group1() {
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
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[6.62%_5.79%_72.79%_71.07%]">
      <div className="absolute inset-[6.62%_5.79%_72.79%_71.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" data-figma-bg-blur-radius="4" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" r="14" />
          <defs>
            <clipPath id="bgblur_0_341_5212_clip_path" transform="translate(4 4)">
              <circle cx="14" cy="14" r="14" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <GciIndicatorTwo />
    </div>
  );
}

function Self() {
  return (
    <div className="absolute h-[136px] left-[251px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-0 w-[121px]" data-name="Self">
      <div className="absolute h-[136px] left-0 rounded-[20px] top-0 w-[121px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle346604096} />
      </div>
      <Group />
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

function Tab3() {
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
      <div className="-translate-x-1/2 absolute bg-white h-[7px] left-1/2 rounded-bl-[4px] rounded-br-[4px] top-[12.5px] w-[8px]" />
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

function Tab2() {
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
      <Tab3 />
      <Tab1 />
      <Tab />
      <Tab2 />
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

function Frame7() {
  return (
    <div className="-translate-x-1/2 absolute h-[62px] left-[calc(50%-1px)] top-[156px] w-[370px]">
      <MainTabBar />
      <Copilot />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[218px] left-[9px] top-[626px] w-[372px]">
      <Frame12 />
      <Self />
      <Frame7 />
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="bg-black border-6 border-black border-solid overflow-clip relative rounded-[54px] shadow-[0px_12px_48px_0px_rgba(0,0,0,0.24)] size-full" data-name="Gallery">
      <Header />
      <Frame10 />
      <Frame5 />
      <Frame9 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[222px] left-1/2 rounded-[12px] top-[calc(50%-216px)] w-[390px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage} />
      </div>
      <Frame6 />
      <Frame13 />
    </div>
  );
}