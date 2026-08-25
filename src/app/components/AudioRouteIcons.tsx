import svgPaths from "@/imports/svg-0tmtsigajy";

type IconProps = { size?: number; className?: string };

/** Fluent Phone 24 Regular. */
export function PhoneIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={{ display: "block" }}>
      <path
        d="M8.75 2C7.23122 2 6 3.23122 6 4.75V19.25C6 20.7688 7.23122 22 8.75 22H15.25C16.7688 22 18 20.7688 18 19.25V4.75C18 3.23122 16.7688 2 15.25 2H8.75ZM7.5 4.75C7.5 4.05964 8.05964 3.5 8.75 3.5H15.25C15.9404 3.5 16.5 4.05964 16.5 4.75V19.25C16.5 19.9404 15.9404 20.5 15.25 20.5H8.75C8.05964 20.5 7.5 19.9404 7.5 19.25V4.75ZM11 18.75C11 18.3358 11.3358 18 11.75 18H12.25C12.6642 18 13 18.3358 13 18.75C13 19.1642 12.6642 19.5 12.25 19.5H11.75C11.3358 19.5 11 19.1642 11 18.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Fluent Speaker 20 Regular. */
export function SpeakerIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 18.0005" fill="none" className={className} style={{ display: "block" }}>
      <path d={svgPaths.p8497cc0} fill="currentColor" />
    </svg>
  );
}

/** Fluent Bluetooth 24 Regular. */
export function BluetoothIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={{ display: "block" }}>
      <path
        d="M6.5 6.5L17.5 17.5L12 22V2L17.5 6.5L6.5 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
