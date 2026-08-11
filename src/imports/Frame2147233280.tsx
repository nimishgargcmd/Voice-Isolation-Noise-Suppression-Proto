import svgPaths from "./svg-fw3sovk0yw";

function Chat() {
  return (
    <div className="absolute left-[60px] size-[28px] top-[232px]" data-name="Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Chat">
          <path d={svgPaths.p1e92dd00} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
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
    <div className="absolute bg-[rgba(0,0,0,0.75)] content-stretch flex items-center justify-center left-[44px] p-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] size-[62px] top-[529px]" data-name="Copilot">
      <Copilot />
    </div>
  );
}

function MoreHorizontal() {
  return (
    <div className="absolute left-[59.67px] size-[28px] top-[375px]" data-name="More Horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="More Horizontal">
          <path d={svgPaths.p8afa600} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Chat1() {
  return (
    <div className="absolute left-[60.67px] size-[28px] top-[169px]" data-name="Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Chat">
          <path d={svgPaths.pb877400} fill="var(--fill-0, #878BFB)" id="Shape" />
        </g>
      </svg>
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

function Group() {
  return (
    <div className="absolute contents left-0 top-[2px]">
      <Mic />
      <div className="absolute bg-white h-[7px] left-1/2 rounded-bl-[4px] rounded-br-[4px] top-[12.5px] translate-x-[-50%] w-[8px]" />
    </div>
  );
}

function Placeholder() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-center left-[62px] p-[2px] top-[107px]" data-name="Placeholder">
      <Group />
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

function Group1() {
  return (
    <div className="absolute contents left-0 top-[2px]">
      <Mic1 />
    </div>
  );
}

function Placeholder1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[28px] items-center justify-center left-0 p-[2px] top-0" data-name="Placeholder">
      <Group1 />
      <div className="absolute flex items-center justify-center left-[3px] size-[18px] top-[5px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg]">
          <div className="h-[25.456px] relative w-0">
            <div className="absolute inset-[-3.93%_-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 27.4558">
                <path d="M1 1V26.4558" id="Vector 64" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[28px] left-[185px] top-[107px] w-[22px]">
      <Placeholder1 />
    </div>
  );
}

function Video() {
  return (
    <div className="absolute h-[28px] left-[62px] top-[36px] w-[24px]" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
        <g id="Video">
          <path d={svgPaths.p2ab58800} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function VideoOff() {
  return (
    <div className="absolute h-[28px] left-[185px] top-[36px] w-[24px]" data-name="Video Off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
        <g id="Video Off">
          <path d={svgPaths.p3ba5cb80} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function MoreHorizontal1() {
  return (
    <div className="absolute left-[60px] size-[28px] top-[308px]" data-name="More Horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="More Horizontal">
          <path d={svgPaths.p8afa600} fill="var(--fill-0, #878BFB)" id="Shape" />
        </g>
      </svg>
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
    <div className="absolute bg-[#584bdf] content-stretch flex items-center justify-center left-[44px] p-[4px] rounded-[999px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.1)] size-[62px] top-[429px]" data-name="Copilot">
      <Copilot2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#6c6666] relative size-full">
      <Chat />
      <Copilot1 />
      <MoreHorizontal />
      <Chat1 />
      <Placeholder />
      <Frame1 />
      <Video />
      <VideoOff />
      <MoreHorizontal1 />
      <Copilot3 />
      <p className="absolute css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12px] left-[125px] text-[10px] text-center text-white top-[44px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Self Video on
      </p>
      <p className="absolute css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12px] left-[125px] text-[10px] text-center text-white top-[115px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Self mic on
      </p>
      <p className="absolute css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12px] left-[125.5px] text-[10px] text-center text-white top-[177px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chat active
      </p>
      <p className="absolute css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12px] left-[130px] text-[10px] text-center text-white top-[240px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chat inactive
      </p>
      <p className="absolute css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12px] left-[145px] text-[10px] text-center text-white top-[315px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        More menu active
      </p>
      <p className="absolute css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12px] left-[145.5px] text-[10px] text-center text-white top-[383px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        More menu inactive
      </p>
      <p className="absolute css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12px] left-[172.5px] text-[10px] text-center text-white top-[453px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CoPilot active
      </p>
      <p className="absolute css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12px] left-[172px] text-[10px] text-center text-white top-[553px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CoPilot inactive
      </p>
      <p className="absolute css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12px] left-[249px] text-[10px] text-center text-white top-[44px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Self Video off
      </p>
      <p className="absolute css-ew64yg font-['SF_Pro:Medium',sans-serif] font-[510] leading-[12px] left-[249px] text-[10px] text-center text-white top-[115px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Self mic off
      </p>
    </div>
  );
}