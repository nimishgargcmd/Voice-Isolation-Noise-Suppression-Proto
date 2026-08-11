import React from "react";
import svgPaths from "@/imports/svg-psa3ks3j9c";
import { motion } from "motion/react";

interface KeyboardOverlayProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onClose: () => void;
  placeholder: string;
}

export function KeyboardOverlay({ value, onChange, onSend, onClose, placeholder }: KeyboardOverlayProps) {
  const handleKeyPress = (key: string) => {
    onChange(value + key);
  };

  const handleBackspace = () => {
    onChange(value.slice(0, -1));
  };

  const handleSpace = () => {
    onChange(value + " ");
  };

  const handleSend = () => {
    if (value.length > 0) {
      onSend();
    }
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end">
      {/* Backdrop - click to close with fade animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Input Bar + Keyboard - slide up animation */}
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ 
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.8
        }}
        className="relative bg-[#1f1f1f] rounded-tl-[30px] rounded-tr-[30px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.09),0px_4px_20px_0px_rgba(0,0,0,0.04)]"
      >
        {/* Input Bar */}
        <div className="relative h-[64px] px-4 flex items-center gap-3">
          {/* Add button */}
          <button className="shrink-0">
            <div className="relative size-[32px]">
              <div className="absolute inset-[-50%_-62.5%_-75%_-62.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
                  <g>
                    <g filter="url(#filter0_d_48_3987)">
                      <circle cx="36" cy="32" fill="#BFBFBF" fillOpacity="0.08" r="16" shapeRendering="crispEdges" />
                    </g>
                    <g>
                      <path d={svgPaths.p3db90770} fill="white" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72" id="filter0_d_48_3987" width="72" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="10" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_48_3987" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_48_3987" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </button>

          {/* Input field */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              autoFocus
              className="w-full bg-transparent text-white text-[17px] tracking-[-0.408px] leading-[22px] outline-none placeholder-[#8e8e93]"
              style={{ fontFamily: 'var(--font-sf-pro)' }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSend();
                }
              }}
            />
            {/* Cursor indicator - only show when typing */}
            {value.length > 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bg-[#5a50db] h-[25px] rounded-[4px] top-[-2px] w-[3px]" 
                style={{ left: `${value.length * 10}px` }} 
              />
            )}
          </div>

          {/* Emoji button */}
          <button className="shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p3925ad00} fill="#212121" />
            </svg>
          </button>

          {/* Send button - changes to active state when text is present */}
          <button 
            onClick={handleSend}
            disabled={value.length === 0}
            className="shrink-0"
          >
            <motion.div 
              animate={{ 
                backgroundColor: value.length > 0 ? '#5a50db' : 'rgba(90, 80, 219, 0)',
                scale: value.length > 0 ? 1 : 0.95
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="relative rounded-[30px] size-[32px]"
            >
              <div className="absolute left-[calc(50%+1px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p359730f0} fill="white" />
                </svg>
              </div>
            </motion.div>
          </button>
        </div>

        {/* iOS Keyboard - Dark Gray Design */}
        <div 
          className="backdrop-blur-[50px] bg-[rgba(56,56,56,0.75)] content-stretch flex flex-col items-center justify-end min-w-[375px] overflow-clip pt-[3px] rounded-bl-[50px] rounded-br-[50px]"
        >
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none scale-y-[-100%] w-full">
              <div className="h-[5px] opacity-60 w-full" />
            </div>
          </div>
          
          {/* Keyboard Layouts */}
          <div className="h-[204px] relative shrink-0 w-full px-[3px]">
            {/* Row 1: q-p */}
            <div 
              className="absolute bottom-[162px] content-stretch flex gap-[6px] items-start left-[0.77%] right-0"
            >
              {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((key) => (
                <motion.button
                  key={key}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleKeyPress(key)}
                  className="bg-[rgba(255,255,255,0.3)] flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d] active:bg-[rgba(255,255,255,0.4)]"
                >
                  <div className="absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[48px] justify-center leading-[0] left-0 not-italic right-[0.3px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]">
                    <p className="css-4hzbpn leading-[28px]">{key}</p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Row 2: a-l */}
            <div 
              className="absolute bottom-[108px] content-stretch flex gap-[6px] items-start left-[5.9%] right-[5.13%]"
            >
              {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((key) => (
                <motion.button
                  key={key}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleKeyPress(key)}
                  className="bg-[rgba(255,255,255,0.3)] flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d] active:bg-[rgba(255,255,255,0.4)]"
                >
                  <div className="absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[48px] justify-center leading-[0] left-0 not-italic right-[0.22px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]">
                    <p className="css-4hzbpn leading-[28px]">{key}</p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Row 3: z-m with shift and delete */}
            {/* Shift Key */}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="absolute bg-[rgba(255,255,255,0.12)] bottom-[54px] h-[42px] left-[0.77%] right-[87.95%] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d] active:bg-[rgba(255,255,255,0.2)]"
            >
              <div className="absolute css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[20px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <p className="css-ew64yg leading-[28px]">􀆝</p>
              </div>
            </motion.button>

            {/* Row 3 Keys */}
            <div 
              className="absolute bottom-[54px] content-stretch flex gap-[6px] items-start left-[15.9%] right-[15.13%]"
            >
              {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((key) => (
                <motion.button
                  key={key}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleKeyPress(key)}
                  className="bg-[rgba(255,255,255,0.3)] flex-[1_0_0] h-[42px] min-h-px min-w-px relative rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d] active:bg-[rgba(255,255,255,0.4)]"
                >
                  <div className="absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[48px] justify-center leading-[0] left-0 not-italic right-[0.29px] text-[25px] text-center text-white top-[calc(50%-3px)] translate-y-[-50%]">
                    <p className="css-4hzbpn leading-[28px]">{key}</p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Delete Key */}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={handleBackspace}
              className="absolute bg-[rgba(255,255,255,0.12)] bottom-[54px] h-[42px] left-[88.72%] right-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d] active:bg-[rgba(255,255,255,0.2)]"
            >
              <div className="absolute css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[20px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <p className="css-ew64yg leading-[28px]">􀆛</p>
              </div>
            </motion.button>

            {/* Row 4: ABC, space, return */}
            {/* ABC Key */}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="absolute bg-[rgba(255,255,255,0.12)] bottom-0 h-[42px] left-[0.77%] right-[75.64%] rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d] active:bg-[rgba(255,255,255,0.2)]"
            >
              <div className="absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[42px] justify-center leading-[0] left-0 not-italic right-px text-[16px] text-center text-white top-1/2 tracking-[-0.4px] translate-y-[-50%]">
                <p className="css-4hzbpn leading-[21px]">ABC</p>
              </div>
            </motion.button>

            {/* Spacebar */}
            <div 
              className="absolute bottom-0 h-[42px] left-[25.9%] right-[25.13%]"
            >
              <motion.button 
                whileTap={{ scale: 0.98 }}
                onClick={handleSpace}
                className="absolute bg-[rgba(255,255,255,0.3)] bottom-0 h-[42px] left-0 right-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d] active:bg-[rgba(255,255,255,0.4)]"
              >
                <div className="absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[42px] justify-center leading-[0] left-0 not-italic right-px text-[16px] text-center text-white top-1/2 tracking-[-0.4px] translate-y-[-50%]">
                  <p className="css-4hzbpn leading-[21px]">space</p>
                </div>
              </motion.button>
            </div>

            {/* Return Key - with purple active state */}
            <motion.button 
              animate={{ 
                backgroundColor: value.length > 0 ? '#5a50db' : 'rgba(255,255,255,0.12)'
              }}
              transition={{ duration: 0.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              className="absolute bottom-0 h-[42px] left-[76.41%] right-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d] active:opacity-80"
            >
              <div className="absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[42px] justify-center leading-[0] left-0 not-italic right-px text-[16px] text-center text-white top-1/2 tracking-[-0.4px] translate-y-[-50%]">
                <p className="css-4hzbpn leading-[21px]">return</p>
              </div>
            </motion.button>
          </div>

          {/* Emoji and Mic */}
          <div 
            className="h-[58px] relative shrink-0 w-full"
          >
            <div className="content-stretch flex items-start justify-between pt-[25px] px-[20px] relative size-full">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                className="relative shrink-0 size-[26.92px]"
              >
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(235, 235, 245, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.92 26.92">
                    <path d={svgPaths.p2d450400} fill="var(--fill-0, #EBEBF5)" />
                  </svg>
                </div>
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ebebf5] text-[27px] text-center"
              >
                <p className="css-ew64yg leading-[normal]">􀊰</p>
              </motion.button>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="h-[21px] relative shrink-0 w-full">
            <div className="absolute bg-[#303030] bottom-[8px] h-[5px] left-[calc(50%+2px)] rounded-[100px] translate-x-[-50%] w-[134px]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}