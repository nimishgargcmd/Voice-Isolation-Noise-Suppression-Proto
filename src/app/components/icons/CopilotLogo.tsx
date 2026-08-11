import React from "react";

/**
 * Microsoft Copilot logo — the primary (rainbow) variant.
 * Exact vector + gradients exported from the Figma frame (node 817:100972,
 * Mobile-Meeting-Redesign). Four shapes composed in a 24×24 box at their
 * exact Figma positions. Do not hand-tune; this is the source asset.
 */
export function CopilotLogo({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Shape 1 — blue accent */}
      <g transform="translate(10.71 1.998)">
        <path
          d="M6.36025 1.66246C6.07078 0.676913 5.16645 -1.69444e-09 4.13926 0L3.46159 1.118e-09C2.34499 2.95994e-09 1.38753 0.7971 1.18512 1.8952L0 8.32465L0.321602 7.22215C0.609692 6.23453 1.51502 5.55555 2.5438 5.55555L6.46529 5.55556L8.11231 6.19709L9.69998 5.55556H9.23643C8.20924 5.55556 7.30491 4.87864 7.01544 3.89309L6.36025 1.66246Z"
          fill="url(#cop_paint0_radial_0_11)"
        />
      </g>
      {/* Shape 2 — orange/red accent */}
      <g transform="translate(3.848 13.42)">
        <path
          d="M3.31893 6.90794C3.60521 7.89823 4.51184 8.57989 5.54269 8.57989H6.99652C8.24452 8.57989 9.26785 7.59057 9.31002 6.3433L9.52448 0L9.12146 1.36501C8.83093 2.34899 7.92736 3.02434 6.90139 3.02434L2.94011 3.02434L1.52838 2.25854L0 3.02434H0.45582C1.48667 3.02434 2.3933 3.706 2.67958 4.69629L3.31893 6.90794Z"
          fill="url(#cop_paint0_radial_0_13)"
        />
      </g>
      {/* Shape 3 — green/yellow/blue petal */}
      <g transform="translate(1.0045 2.0)">
        <path
          d="M13.7507 0H5.73041C3.43891 0 2.06401 3.02777 1.14741 6.05553C0.0614821 9.64265 -1.35948 14.4401 2.75146 14.4401H6.21482C7.24955 14.4401 8.15794 13.7559 8.44239 12.7611C9.04453 10.6551 10.0997 6.98146 10.9285 4.18489C11.3497 2.76367 11.7005 1.5431 12.239 0.783003C12.5409 0.356863 13.044 0 13.7507 0Z"
          fill="url(#cop_paint0_radial_0_10)"
        />
        <path
          d="M13.7507 0H5.73041C3.43891 0 2.06401 3.02777 1.14741 6.05553C0.0614821 9.64265 -1.35948 14.4401 2.75146 14.4401H6.21482C7.24955 14.4401 8.15794 13.7559 8.44239 12.7611C9.04453 10.6551 10.0997 6.98146 10.9285 4.18489C11.3497 2.76367 11.7005 1.5431 12.239 0.783003C12.5409 0.356863 13.044 0 13.7507 0Z"
          fill="url(#cop_paint1_linear_0_10)"
        />
      </g>
      {/* Shape 4 — purple/pink/orange petal */}
      <g transform="translate(9.2445 7.56)">
        <path
          d="M0 14.4401H8.02025C10.3117 14.4401 11.6866 11.4123 12.6032 8.38457C13.6892 4.79746 15.1101 0 10.9992 0H7.53584C6.50111 0 5.59272 0.684165 5.30827 1.67903C4.70613 3.785 3.65098 7.45865 2.82217 10.2552C2.40097 11.6764 2.05013 12.897 1.51168 13.6571C1.2098 14.0832 0.706679 14.4401 0 14.4401Z"
          fill="url(#cop_paint0_radial_0_12)"
        />
        <path
          d="M0 14.4401H8.02025C10.3117 14.4401 11.6866 11.4123 12.6032 8.38457C13.6892 4.79746 15.1101 0 10.9992 0H7.53584C6.50111 0 5.59272 0.684165 5.30827 1.67903C4.70613 3.785 3.65098 7.45865 2.82217 10.2552C2.40097 11.6764 2.05013 12.897 1.51168 13.6571C1.2098 14.0832 0.706679 14.4401 0 14.4401Z"
          fill="url(#cop_paint1_linear_0_12)"
        />
      </g>
      <defs>
        <radialGradient id="cop_paint0_radial_0_11" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-5.49698 -6.79344 -5.93495 5.69811 8.28754 8.37906)">
          <stop offset="0.0955758" stopColor="#00AEFF" />
          <stop offset="0.773185" stopColor="#2253CE" />
          <stop offset="1" stopColor="#0736C4" />
        </radialGradient>
        <radialGradient id="cop_paint0_radial_0_13" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(4.98016 6.47044 5.87896 -5.2813 1.72795 2.82516)">
          <stop stopColor="#FFB657" />
          <stop offset="0.633728" stopColor="#FF5F3D" />
          <stop offset="0.923392" stopColor="#C02B3C" />
        </radialGradient>
        <radialGradient id="cop_paint0_radial_0_10" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.726614 -12.7947 71.8824 -4.08022 5.53166 14.435)">
          <stop offset="0.03" stopColor="#FFC800" />
          <stop offset="0.31" stopColor="#98BD42" />
          <stop offset="0.49" stopColor="#52B471" />
          <stop offset="0.843838" stopColor="#0D91E1" />
        </radialGradient>
        <linearGradient id="cop_paint1_linear_0_10" x1="6.25046" y1="-9.48855e-09" x2="6.87502" y2="14.4401" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3DCBFF" />
          <stop offset="0.246674" stopColor="#0588F7" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="cop_paint0_radial_0_12" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-6.33606 18.1116 -21.564 -7.99353 11.4112 -1.41379)">
          <stop offset="0.0661714" stopColor="#8C48FF" />
          <stop offset="0.5" stopColor="#F2598A" />
          <stop offset="0.895833" stopColor="#FFB152" />
        </radialGradient>
        <linearGradient id="cop_paint1_linear_0_12" x1="12.0448" y1="-0.881601" x2="12.0366" y2="3.05137" gradientUnits="userSpaceOnUse">
          <stop offset="0.0581535" stopColor="#F8ADFA" />
          <stop offset="0.708063" stopColor="#A86EDD" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Fluent "Compose" icon, Regular 24 — exact path from fluentui-system-icons. */
export function ComposeIcon({ size = 24, color = "#242424", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M13.25 4.00003C13.6642 4.00003 14 4.33582 14 4.75003C13.9999 5.1642 13.6642 5.50003 13.25 5.50003H6.25C5.2835 5.50003 4.5 6.28353 4.5 7.25003V17.75C4.50005 18.7165 5.28353 19.5 6.25 19.5H16.75C17.7165 19.5 18.4999 18.7165 18.5 17.75V10.75C18.5 10.3358 18.8358 10 19.25 10C19.6642 10 20 10.3358 20 10.75V17.75C19.9999 19.5449 18.5449 21 16.75 21H6.25C4.4551 21 3.00005 19.5449 3 17.75V7.25003C3 5.4551 4.45507 4.00003 6.25 4.00003H13.25ZM19.7197 3.21976C20.0126 2.92687 20.4874 2.92687 20.7803 3.21976C21.0731 3.51265 21.0732 3.98742 20.7803 4.2803L10.5908 14.4697L9 15L9.53027 13.4092L19.7197 3.21976Z"
        fill={color}
      />
    </svg>
  );
}
