import svgPaths from "./svg-9qq61vzfwg";
import imgRectangle346604096 from "figma:asset/2988dddd4762039b89078373be258dc29df8140a.png";

function Group2() {
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
    <div className="-translate-x-1/2 absolute backdrop-blur-[5px] bottom-[76.47%] content-stretch flex items-center left-[calc(50%+39.5px)] overflow-clip px-[4px] rounded-br-[4px] rounded-tr-[4px] top-[10.29%]" data-name="GCI Indicator/Two">
      <Group2 />
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
            <clipPath id="bgblur_0_72_5390_clip_path" transform="translate(4 4)">
              <circle cx="14" cy="14" r="14" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <GciIndicatorTwo />
    </div>
  );
}

function MicOff() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[11.76%] left-[calc(50%+39.5px)] overflow-clip top-3/4 w-[18px]" data-name="Mic Off">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p37cc6c80} fill="var(--fill-0, #FF5F3D)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[71.32%_5.79%_8.09%_71.07%]">
      <div className="absolute inset-[71.32%_5.79%_8.09%_71.07%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" data-figma-bg-blur-radius="4" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 8" r="14" />
          <defs>
            <clipPath id="bgblur_0_72_5390_clip_path" transform="translate(4 4)">
              <circle cx="14" cy="14" r="14" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <MicOff />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[24px] items-center justify-center left-[9px] p-[10px] rounded-[100px] top-[100px]">
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        You
      </p>
    </div>
  );
}

export default function Self() {
  return (
    <div className="relative shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] size-full" data-name="Self">
      <div className="absolute h-[136px] left-0 rounded-[20px] top-0 w-[121px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle346604096} />
      </div>
      <Group />
      <Group1 />
      <Frame />
    </div>
  );
}