import svgPaths from "./svg-q96b5e2p6w";

function Icon24Pt() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon (24pt)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon (24pt)">
          <path d={svgPaths.p27f23900} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

export default function Back() {
  return (
    <div className="bg-black content-stretch flex items-center p-[10px] relative rounded-[30px] size-full" data-name="Back">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <Icon24Pt />
    </div>
  );
}