import svgPaths from "./svg-xdgvc4qmw1";
import imgRectangle346604096 from "figma:asset/2988dddd4762039b89078373be258dc29df8140a.png";

function MicOff() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[11.11%] left-[calc(50%+13.5px)] overflow-clip top-[68.89%] w-[18px]" data-name="Mic Off">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p37cc6c80} fill="var(--fill-0, #FF5F3D)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[63.33%_8.96%_5.56%_49.25%]">
      <div className="absolute inset-[63.33%_8.96%_5.56%_49.25%]">
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

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[90px] left-0 rounded-[12px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-0 w-[67px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle346604096} />
      </div>
      <Group />
    </div>
  );
}