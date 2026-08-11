import svgPaths from "./svg-w2saoiqcvj";
import imgFrame2147233135 from "figma:asset/39154ef67ddaa64702482bb71cb22487de1cf404.png";
import imgRectangle346604096 from "figma:asset/2988dddd4762039b89078373be258dc29df8140a.png";
import imgEllipse26601 from "figma:asset/ea9d491f69be890aca1f172cdb618cb53f9b925e.png";
import imgEllipse26602 from "figma:asset/e8b7f3b88823f24d90921c51899d4062e10c34ea.png";

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

function Group1() {
  return (
    <div className="absolute right-[13px] size-[32px] top-[15px]">
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

function Frame3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[24px] items-center justify-center left-[14px] p-[10px] rounded-[100px] top-[200px]">
      <p className="css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aadi Kapoor
      </p>
    </div>
  );
}

function Mic() {
  return (
    <div className="absolute bottom-[9.87%] left-[calc(50%+165px)] overflow-clip top-[82.66%] translate-x-[-50%] w-[18px]" data-name="Mic">
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
    <div className="absolute contents inset-[80.59%_4.1%_7.8%_88.72%]">
      <div className="absolute inset-[80.59%_4.1%_7.8%_88.72%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 27.5152">
          <ellipse cx="14" cy="13.7576" data-figma-bg-blur-radius="4" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" rx="14" ry="13.7576" />
          <defs>
            <clipPath id="bgblur_0_1_12700_clip_path" transform="translate(4 4)">
              <ellipse cx="14" cy="13.7576" rx="14" ry="13.7576" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Mic />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[237px] items-start left-0 p-[3px] rounded-[20px] top-[92px] w-[390px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[137.34%] left-0 max-w-none top-[-6.65%] w-full" src={imgFrame2147233135} />
      </div>
      <div className="h-[231px] relative rounded-[17px] shrink-0 w-[384px]" data-name="image">
        <div aria-hidden="true" className="absolute border border-[#010101] border-solid inset-0 pointer-events-none rounded-[17px]" />
      </div>
      <div className="absolute h-[237px] left-0 rounded-[20px] top-0 w-[390px]" data-name="image">
        <div aria-hidden="true" className="absolute border-3 border-[#878bfb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <Group1 />
      <Frame3 />
      <div className="absolute h-[90px] left-[310px] rounded-[12px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[133px] w-[67px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle346604096} />
      </div>
      <Group />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-end relative self-stretch shrink-0">
      <div className="relative shrink-0 size-[28px]">
        <img alt="" className="block max-w-none size-full" height="28" src={imgEllipse26601} width="28" />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#262626] content-stretch flex items-center p-[12px] relative rounded-[16px] shrink-0">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white">
        <p className="css-ew64yg">
          <span className="leading-[normal]">{`Hi `}</span>
          <span className="leading-[normal] text-[#878bfb]">Aadi!</span>
        </p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic opacity-50 relative shrink-0 text-[10px] text-white w-[min-content]">
        <p className="css-4hzbpn leading-[normal]">Kayo M.</p>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-end relative self-stretch shrink-0">
      <div className="relative shrink-0 size-[28px]">
        <img alt="" className="block max-w-none size-full" height="28" src={imgEllipse26602} width="28" />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#262626] content-stretch flex items-center p-[12px] relative rounded-[16px] shrink-0 w-[259px]">
      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
        <p className="css-4hzbpn leading-[normal]">I wasn’t sure if you were feeling ready yet. I know there was a lot of feedback coming of last week’s review.</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic opacity-50 relative shrink-0 text-[10px] text-white w-[min-content]">
        <p className="css-4hzbpn leading-[normal]">Chris N.</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame7 />
      <Frame12 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[135px] items-start justify-end left-[22px] overflow-clip top-[414px]">
      <Frame10 />
      <Frame11 />
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

function Blur() {
  return <div className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.15)] blur-[10px] inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur1() {
  return (
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <Mask />
      <Blur />
    </div>
  );
}

function Fill() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#333] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }} />
      </div>
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Bg() {
  return (
    <div className="absolute h-[44px] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="BG">
      <Blur1 />
      <Fill />
      <GlassEffect />
    </div>
  );
}

function Icon24Pt() {
  return (
    <div className="absolute left-[10px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Icon (24pt)">
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
    <div className="absolute left-[16px] size-[44px] top-[356px]" data-name="Back">
      <Bg />
      <Icon24Pt />
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

function Blur2() {
  return <div className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.15)] blur-[10px] inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur3() {
  return (
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <Mask1 />
      <Blur2 />
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
    <div className="absolute h-[44px] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="BG">
      <Blur3 />
      <Fill1 />
      <GlassEffect1 />
    </div>
  );
}

function Icon24Pt1() {
  return (
    <div className="absolute left-[10px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Icon (24pt)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24pt)">
          <path d={svgPaths.p7378d00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Back1() {
  return (
    <div className="absolute left-[337px] size-[44px] top-[356px]" data-name="Back">
      <Bg1 />
      <Icon24Pt1 />
    </div>
  );
}

function Spacer() {
  return <div className="absolute h-[44px] left-[197px] top-[356px] w-[8px]" data-name="Spacer" />;
}

function TabBar() {
  return (
    <div className="absolute contents left-1/2 top-[340px] translate-x-[-50%]" data-name="Tab Bar">
      <div className="absolute backdrop-blur-[4px] bg-[rgba(24,24,24,0.98)] h-[534px] left-0 rounded-bl-[56px] rounded-br-[56px] rounded-tl-[38px] rounded-tr-[38px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)] top-[340px] w-[402px]" data-name="BG 3 Apps" />
      <Frame9 />
      <Back />
      <Back1 />
      <Spacer />
      <div className="absolute css-g0mm18 flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[148.5px] not-italic right-[148.5px] text-[17px] text-center text-white top-[377px] tracking-[-0.24px] translate-y-[-50%]">
        <p className="css-ew64yg leading-[20px]">Meeting chat</p>
      </div>
    </div>
  );
}

function Fab() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="FAB">
      <div className="absolute inset-[-50%_-62.5%_-75%_-62.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
          <g id="FAB">
            <g filter="url(#filter0_d_1_12611)" id="Ellipse 3706">
              <circle cx="36" cy="32" fill="var(--fill-0, #BFBFBF)" fillOpacity="0.08" r="16" shapeRendering="crispEdges" />
            </g>
            <g id="Add">
              <path d={svgPaths.p3db90770} fill="var(--fill-0, white)" id="Shape" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72" id="filter0_d_1_12611" width="72" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_12611" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_12611" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Send() {
  return (
    <div className="absolute left-[calc(50%+1px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Send">
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
    <div className="absolute bg-[#5a50db] left-[347px] rounded-[30px] size-[32px] top-[16px]" data-name="FAB">
      <Send />
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

function Frame() {
  return (
    <div className="absolute bg-[#1f1f1f] bottom-[34px] h-[277px] left-0 rounded-tl-[30px] rounded-tr-[30px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.09),0px_4px_20px_0px_rgba(0,0,0,0.04)] w-[390px]">
      <p className="absolute css-4hzbpn font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] left-[60px] not-italic text-[#d9d9d9] text-[17px] top-[21px] tracking-[-0.408px] w-[237px]">Summarise current topic</p>
      <Fab />
      <Fab1 />
      <div className="absolute bg-[#5a50db] h-[25px] left-[251px] rounded-[4px] top-[20px] w-[3px]" />
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
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">q</p>
      </div>
    </div>
  );
}

function Key1() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">w</p>
      </div>
    </div>
  );
}

function Key2() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">e</p>
      </div>
    </div>
  );
}

function Key3() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">r</p>
      </div>
    </div>
  );
}

function Key4() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">t</p>
      </div>
    </div>
  );
}

function Key5() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">y</p>
      </div>
    </div>
  );
}

function Key6() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">u</p>
      </div>
    </div>
  );
}

function Key7() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">i</p>
      </div>
    </div>
  );
}

function Key8() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">o</p>
      </div>
    </div>
  );
}

function Key9() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">p</p>
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
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">a</p>
      </div>
    </div>
  );
}

function Key11() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">s</p>
      </div>
    </div>
  );
}

function Key12() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">d</p>
      </div>
    </div>
  );
}

function Key13() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">f</p>
      </div>
    </div>
  );
}

function Key14() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">g</p>
      </div>
    </div>
  );
}

function Key15() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">h</p>
      </div>
    </div>
  );
}

function Key16() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">j</p>
      </div>
    </div>
  );
}

function Key17() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">k</p>
      </div>
    </div>
  );
}

function Key18() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">l</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.5px] items-center justify-center px-[20px] py-0 relative w-full">
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
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] translate-y-[-50%] uppercase">
        <p className="css-4hzbpn leading-[28px]">􀆝</p>
      </div>
    </div>
  );
}

function Key19() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">z</p>
      </div>
    </div>
  );
}

function Key20() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">x</p>
      </div>
    </div>
  );
}

function Key21() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">c</p>
      </div>
    </div>
  );
}

function Key22() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">v</p>
      </div>
    </div>
  );
}

function Key23() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">b</p>
      </div>
    </div>
  );
}

function Key24() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">n</p>
      </div>
    </div>
  );
}

function Key25() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">m</p>
      </div>
    </div>
  );
}

function Row2() {
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
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] translate-y-[-50%] uppercase">
        <p className="css-4hzbpn leading-[28px]">􁂈</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[14.25px] items-center relative shrink-0 w-full" data-name="Row 3">
      <ShiftKey />
      <Row2 />
      <DeleteKey />
    </div>
  );
}

function KeyboardSwitch() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Keyboard Switch">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] left-[-2px] not-italic right-[-1.75px] text-[#a6a6a6] text-[18px] text-center top-[calc(50%-0.5px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[21px]">ABC</p>
      </div>
    </div>
  );
}

function Space() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <div className="absolute bg-[#454545] inset-[0_-0.5px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.5px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]"> </p>
      </div>
    </div>
  );
}

function Space1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <Space />
    </div>
  );
}

function Return() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Return">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-[0.25px] text-[#a6a6a6] text-[19px] text-center top-[calc(50%+2px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[28px]">􀅇</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Row 4">
      <KeyboardSwitch />
      <Space1 />
      <Return />
    </div>
  );
}

function KeyboardLayouts() {
  return (
    <div className="relative shrink-0 w-full" data-name="Keyboard Layouts">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[13px] items-center px-[6.5px] py-0 relative w-full">
          <Row />
          <Row1 />
          <Row4 />
          <Row3 />
        </div>
      </div>
    </div>
  );
}

function Keyboard() {
  return (
    <div className="content-stretch flex flex-col h-[254px] items-center pb-[2px] pt-[11px] px-0 relative shrink-0 w-full" data-name="Keyboard">
      <Background />
      <KeyboardLayouts />
    </div>
  );
}

function Keyboard1() {
  return (
    <div className="absolute bottom-[13px] content-stretch flex flex-col gap-[10px] h-[241px] items-end left-0 right-0" data-name="Keyboard">
      <Keyboard />
    </div>
  );
}

function Keyboard2() {
  return (
    <div className="absolute h-[311px] left-[6px] top-[558px] w-[390px]" data-name="Keyboard">
      <Frame />
      <Keyboard1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-6px] top-[334px]">
      <TabBar />
      <div className="absolute h-0 left-1/2 top-[785px] translate-x-[-50%] w-[402px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 0.5">
            <line id="Divider" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="0.5" x2="402" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <Keyboard2 />
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

function Frame13() {
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
      <Frame13 />
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

function Frame17() {
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
      <Frame17 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[393px]">
      <SecondaryHeaderRow />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-end flex flex-wrap gap-[10px] items-end left-[calc(50%+0.5px)] top-[56px] translate-x-[-50%] w-[393px]">
      <Frame14 />
    </div>
  );
}

function Chat() {
  return (
    <div className="absolute bg-black border-6 border-black border-solid h-[874px] left-[calc(50%-205px)] overflow-clip rounded-[54px] shadow-[0px_12px_48px_0px_rgba(0,0,0,0.24)] top-[88px] translate-x-[-50%] w-[402px]" data-name="Chat">
      <Header />
      <Frame15 />
      <Group2 />
      <div className="absolute bg-[rgba(255,255,255,0.2)] bottom-[516px] h-[4px] left-1/2 rounded-[100px] translate-x-[-50%] w-[75.918px]" />
      <Frame16 />
    </div>
  );
}

function Fab2() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="FAB">
      <div className="absolute inset-[-50%_-62.5%_-75%_-62.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
          <g id="FAB">
            <g filter="url(#filter0_d_1_12611)" id="Ellipse 3706">
              <circle cx="36" cy="32" fill="var(--fill-0, #BFBFBF)" fillOpacity="0.08" r="16" shapeRendering="crispEdges" />
            </g>
            <g id="Add">
              <path d={svgPaths.p3db90770} fill="var(--fill-0, white)" id="Shape" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72" id="filter0_d_1_12611" width="72" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_12611" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_12611" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Send1() {
  return (
    <div className="absolute left-[calc(50%+1px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Send">
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
    <div className="absolute bg-[#5a50db] left-[347px] rounded-[30px] size-[32px] top-[16px]" data-name="FAB">
      <Send1 />
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

function Frame1() {
  return (
    <div className="absolute bg-[#1f1f1f] bottom-[34px] h-[277px] left-0 rounded-tl-[30px] rounded-tr-[30px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.09),0px_4px_20px_0px_rgba(0,0,0,0.04)] w-[390px]">
      <p className="absolute css-4hzbpn font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] left-[60px] not-italic text-[#d9d9d9] text-[17px] top-[21px] tracking-[-0.408px] w-[237px]">Summarise current topic</p>
      <Fab2 />
      <Fab3 />
      <div className="absolute bg-[#5a50db] h-[25px] left-[251px] rounded-[4px] top-[20px] w-[3px]" />
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
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">q</p>
      </div>
    </div>
  );
}

function Key27() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">w</p>
      </div>
    </div>
  );
}

function Key28() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">e</p>
      </div>
    </div>
  );
}

function Key29() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">r</p>
      </div>
    </div>
  );
}

function Key30() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">t</p>
      </div>
    </div>
  );
}

function Key31() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">y</p>
      </div>
    </div>
  );
}

function Key32() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">u</p>
      </div>
    </div>
  );
}

function Key33() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">i</p>
      </div>
    </div>
  );
}

function Key34() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">o</p>
      </div>
    </div>
  );
}

function Key35() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">p</p>
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
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">a</p>
      </div>
    </div>
  );
}

function Key37() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">s</p>
      </div>
    </div>
  );
}

function Key38() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">d</p>
      </div>
    </div>
  );
}

function Key39() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">f</p>
      </div>
    </div>
  );
}

function Key40() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">g</p>
      </div>
    </div>
  );
}

function Key41() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">h</p>
      </div>
    </div>
  );
}

function Key42() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">j</p>
      </div>
    </div>
  );
}

function Key43() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">k</p>
      </div>
    </div>
  );
}

function Key44() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">l</p>
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.5px] items-center justify-center px-[20px] py-0 relative w-full">
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
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] translate-y-[-50%] uppercase">
        <p className="css-4hzbpn leading-[28px]">􀆝</p>
      </div>
    </div>
  );
}

function Key45() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">z</p>
      </div>
    </div>
  );
}

function Key46() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">x</p>
      </div>
    </div>
  );
}

function Key47() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">c</p>
      </div>
    </div>
  );
}

function Key48() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">v</p>
      </div>
    </div>
  );
}

function Key49() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">b</p>
      </div>
    </div>
  );
}

function Key50() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">n</p>
      </div>
    </div>
  );
}

function Key51() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">m</p>
      </div>
    </div>
  );
}

function Row7() {
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
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] translate-y-[-50%] uppercase">
        <p className="css-4hzbpn leading-[28px]">􁂈</p>
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex gap-[14.25px] items-center relative shrink-0 w-full" data-name="Row 3">
      <ShiftKey1 />
      <Row7 />
      <DeleteKey1 />
    </div>
  );
}

function KeyboardSwitch1() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Keyboard Switch">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] left-[-2px] not-italic right-[-1.75px] text-[#a6a6a6] text-[18px] text-center top-[calc(50%-0.5px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[21px]">ABC</p>
      </div>
    </div>
  );
}

function Space2() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <div className="absolute bg-[#454545] inset-[0_-0.5px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.5px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]"> </p>
      </div>
    </div>
  );
}

function Space3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <Space2 />
    </div>
  );
}

function Return1() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Return">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-[0.25px] text-[#a6a6a6] text-[19px] text-center top-[calc(50%+2px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[28px]">􀅇</p>
      </div>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Row 4">
      <KeyboardSwitch1 />
      <Space3 />
      <Return1 />
    </div>
  );
}

function KeyboardLayouts1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Keyboard Layouts">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[13px] items-center px-[6.5px] py-0 relative w-full">
          <Row5 />
          <Row6 />
          <Row8 />
          <Row9 />
        </div>
      </div>
    </div>
  );
}

function Keyboard3() {
  return (
    <div className="content-stretch flex flex-col h-[254px] items-center pb-[2px] pt-[11px] px-0 relative shrink-0 w-full" data-name="Keyboard">
      <Background1 />
      <KeyboardLayouts1 />
    </div>
  );
}

function Keyboard4() {
  return (
    <div className="absolute bottom-[13px] content-stretch flex flex-col gap-[10px] h-[241px] items-end left-0 right-0" data-name="Keyboard">
      <Keyboard3 />
    </div>
  );
}

function Keyboard5() {
  return (
    <div className="absolute h-[311px] left-[23px] top-[374px] w-[390px]" data-name="Keyboard">
      <Frame1 />
      <Keyboard4 />
    </div>
  );
}

function Fab4() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="FAB">
      <div className="absolute inset-[-50%_-62.5%_-75%_-62.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
          <g id="FAB">
            <g filter="url(#filter0_d_1_12611)" id="Ellipse 3706">
              <circle cx="36" cy="32" fill="var(--fill-0, #BFBFBF)" fillOpacity="0.08" r="16" shapeRendering="crispEdges" />
            </g>
            <g id="Add">
              <path d={svgPaths.p3db90770} fill="var(--fill-0, white)" id="Shape" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72" id="filter0_d_1_12611" width="72" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_12611" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_12611" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Send2() {
  return (
    <div className="absolute left-[calc(50%+1px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Send">
          <path d={svgPaths.p2b793b70} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Fab5() {
  return (
    <div className="absolute left-[347px] rounded-[30px] size-[32px] top-[16px]" data-name="FAB">
      <Send2 />
    </div>
  );
}

function Emoji2() {
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
    <div className="absolute bg-[#1f1f1f] bottom-[34px] h-[277px] left-0 rounded-tl-[30px] rounded-tr-[30px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.09),0px_4px_20px_0px_rgba(0,0,0,0.04)] w-[390px]">
      <p className="absolute css-4hzbpn font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] left-[60px] not-italic opacity-40 text-[#d9d9d9] text-[17px] top-[21px] tracking-[-0.408px] w-[237px]">Type here</p>
      <Fab4 />
      <Fab5 />
      <div className="absolute bg-[#5a50db] h-[25px] left-[60px] rounded-[4px] top-[20px] w-[3px]" />
      <Emoji2 />
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
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">q</p>
      </div>
    </div>
  );
}

function Key53() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">w</p>
      </div>
    </div>
  );
}

function Key54() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">e</p>
      </div>
    </div>
  );
}

function Key55() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">r</p>
      </div>
    </div>
  );
}

function Key56() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">t</p>
      </div>
    </div>
  );
}

function Key57() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">y</p>
      </div>
    </div>
  );
}

function Key58() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">u</p>
      </div>
    </div>
  );
}

function Key59() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">i</p>
      </div>
    </div>
  );
}

function Key60() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">o</p>
      </div>
    </div>
  );
}

function Key61() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.15px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.15px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">p</p>
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
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">a</p>
      </div>
    </div>
  );
}

function Key63() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">s</p>
      </div>
    </div>
  );
}

function Key64() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">d</p>
      </div>
    </div>
  );
}

function Key65() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">f</p>
      </div>
    </div>
  );
}

function Key66() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">g</p>
      </div>
    </div>
  );
}

function Key67() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">h</p>
      </div>
    </div>
  );
}

function Key68() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">j</p>
      </div>
    </div>
  );
}

function Key69() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">k</p>
      </div>
    </div>
  );
}

function Key70() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_-0.33px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.33px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">l</p>
      </div>
    </div>
  );
}

function Row11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6.5px] items-center justify-center px-[20px] py-0 relative w-full">
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
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] translate-y-[-50%] uppercase">
        <p className="css-4hzbpn leading-[28px]">􀆝</p>
      </div>
    </div>
  );
}

function Key71() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">z</p>
      </div>
    </div>
  );
}

function Key72() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">x</p>
      </div>
    </div>
  );
}

function Key73() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">c</p>
      </div>
    </div>
  );
}

function Key74() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">v</p>
      </div>
    </div>
  );
}

function Key75() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">b</p>
      </div>
    </div>
  );
}

function Key76() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">n</p>
      </div>
    </div>
  );
}

function Key77() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Key">
      <div className="absolute bg-[#454545] inset-[0_0.36px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[0.36px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]">m</p>
      </div>
    </div>
  );
}

function Row12() {
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
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-0 text-[#a6a6a6] text-[23px] text-center top-[calc(50%-1px)] translate-y-[-50%] uppercase">
        <p className="css-4hzbpn leading-[28px]">􁂈</p>
      </div>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex gap-[14.25px] items-center relative shrink-0 w-full" data-name="Row 3">
      <ShiftKey2 />
      <Row12 />
      <DeleteKey2 />
    </div>
  );
}

function KeyboardSwitch2() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Keyboard Switch">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] left-[-2px] not-italic right-[-1.75px] text-[#a6a6a6] text-[18px] text-center top-[calc(50%-0.5px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[21px]">ABC</p>
      </div>
    </div>
  );
}

function Space4() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <div className="absolute bg-[#454545] inset-[0_-0.5px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-0 right-[-0.5px] text-[#a6a6a6] text-[25px] text-center top-[calc(50%-2px)] translate-y-[-50%]">
        <p className="css-4hzbpn leading-[30px]"> </p>
      </div>
    </div>
  );
}

function Space5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative rounded-[8.5px]" data-name="Space">
      <Space4 />
    </div>
  );
}

function Return2() {
  return (
    <div className="h-[42px] relative rounded-[8.5px] shrink-0 w-[92.25px]" data-name="Return">
      <div className="absolute bg-[#454545] inset-[0_0.25px_0_0] mix-blend-plus-lighter rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-[0.25px] text-[#a6a6a6] text-[19px] text-center top-[calc(50%+2px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[28px]">􀅇</p>
      </div>
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Row 4">
      <KeyboardSwitch2 />
      <Space5 />
      <Return2 />
    </div>
  );
}

function KeyboardLayouts2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Keyboard Layouts">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[13px] items-center px-[6.5px] py-0 relative w-full">
          <Row10 />
          <Row11 />
          <Row13 />
          <Row14 />
        </div>
      </div>
    </div>
  );
}

function Keyboard6() {
  return (
    <div className="content-stretch flex flex-col h-[254px] items-center pb-[2px] pt-[11px] px-0 relative shrink-0 w-full" data-name="Keyboard">
      <Background2 />
      <KeyboardLayouts2 />
    </div>
  );
}

function Keyboard7() {
  return (
    <div className="absolute bottom-[13px] content-stretch flex flex-col gap-[10px] h-[241px] items-end left-0 right-0" data-name="Keyboard">
      <Keyboard6 />
    </div>
  );
}

function Keyboard8() {
  return (
    <div className="absolute h-[311px] left-[23px] top-[19px] w-[390px]" data-name="Keyboard">
      <Frame2 />
      <Keyboard7 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute h-[707px] left-[531px] overflow-clip top-[265px] w-[436px]">
      {[...Array(2).keys()].map((_, i) => (
        <Keyboard5 key={i} />
      ))}
      <Keyboard8 />
    </div>
  );
}

export default function KeyboardOverlay() {
  return (
    <div className="bg-white relative size-full" data-name="Keyboard overlay">
      <Chat />
      <Frame18 />
    </div>
  );
}