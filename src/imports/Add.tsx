import svgPaths from "./svg-9j688ejxtk";

function Blur1() {
  return <div className="absolute backdrop-blur-[20px] bg-[rgba(0,0,0,0.15)] blur-[10px] inset-[28px_26px_24px_26px] mix-blend-hard-light rounded-[1000px]" data-name="Blur" />;
}

function Blur() {
  return (
    <div className="absolute inset-[-26px] opacity-67" data-name="Blur">
      <div className="absolute bg-white inset-[-50px]" data-name="Mask">
        <div className="absolute bg-black inset-[76px] rounded-[1000px]" data-name="Shape" />
      </div>
      <Blur1 />
    </div>
  );
}

function Fill() {
  return (
    <div className="absolute inset-0 rounded-[296px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[#242424] inset-0 mix-blend-color-dodge rounded-[296px]" />
        <div className="absolute inset-0 rounded-[296px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%)" }} />
      </div>
    </div>
  );
}

export default function Add() {
  return (
    <div className="relative size-full" data-name="add">
      <div className="absolute left-0 size-[44px] top-0 rounded-full overflow-hidden" data-name="Liquid Glass" style={{ boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.14), 0px 0px 0px 0.5px rgba(0,0,0,0.08)" }}>
        <Fill />
      </div>
      <div className="-translate-y-1/2 absolute left-[10px] overflow-clip size-[24px] top-1/2" data-name="Icon (24pt)">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[17.5px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <path d={svgPaths.p2967cd00} fill="var(--fill-0, black)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}