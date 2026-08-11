import React from "react";

/**
 * Incoming Audio Indicator - Shows when a participant is actively speaking
 * This is different from the mic indicator - it shows incoming audio activity
 */
export function IncomingAudioIndicator() {
  return (
    <div className="absolute top-2 right-2 w-8 h-8">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 2117130284">
          <circle cx="16" cy="16" fill="#878BFB" id="Ellipse 3" opacity="0.5" r="16" />
          <circle cx="16" cy="16" fill="#878BFB" id="Ellipse 4" r="11" />
          <g filter="url(#filter1_i_incoming_audio)" id="Rectangle 346603857">
            <rect fill="white" fillOpacity="0.8" height="8" rx="1" width="2" x="15" y="12" />
          </g>
          <g filter="url(#filter2_i_incoming_audio)" id="Rectangle 346603858">
            <rect fill="white" fillOpacity="0.8" height="4" rx="1" width="2" x="11" y="14" />
          </g>
          <g filter="url(#filter3_i_incoming_audio)" id="Rectangle 346603859">
            <rect fill="white" fillOpacity="0.8" height="4" rx="1" width="2" x="19" y="14" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.2" id="filter1_i_incoming_audio" width="2.2" x="14.8" y="12">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_12782" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter2_i_incoming_audio" width="2.2" x="10.8" y="14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_12782" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.2" id="filter3_i_incoming_audio" width="2.2" x="18.8" y="14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-0.5" dy="0.2" />
            <feGaussianBlur stdDeviation="0.1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_12782" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}