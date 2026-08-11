import React from "react";
import svgPaths from "@/imports/svg-768y8jx8ov";

function Time() {
  return (
    <div className="flex flex-1 h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-[2px] px-0 relative">
      <p className="font-semibold leading-[22px] relative shrink-0 text-[17px] text-center text-white">
        8:14
      </p>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="white" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="white" id="Cap" opacity="0.4" />
          <rect fill="white" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex flex-1 gap-[7px] h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-px px-0 relative">
      <div className="h-[12.226px] relative shrink-0 w-[19.2px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
          <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="white" fillRule="evenodd" />
        </svg>
      </div>
      <div className="h-[12.328px] relative shrink-0 w-[17.142px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
          <path clipRule="evenodd" d={svgPaths.p18b35300} fill="white" fillRule="evenodd" />
        </svg>
      </div>
      <Battery />
    </div>
  );
}

export function StatusBar() {
  return (
    <div className="absolute flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[16px] top-0 w-full z-50">
      <Time />
      <Levels />
    </div>
  );
}

export function NotchOverlay() {
  return (
    <>
      {/* Black notch pill */}
      <div className="absolute bg-black h-[35px] left-1/2 -translate-x-1/2 rounded-[100px] top-[15px] w-[124px] z-50" />
      {/* Green indicator dot */}
      <div className="absolute left-[calc(50%+62px)] size-[5px] top-[30px] z-50">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="#37EF46" r="2.5" />
        </svg>
      </div>
    </>
  );
}