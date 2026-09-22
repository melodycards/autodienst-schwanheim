import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "battery"
  | "boltTag"
  | "brake"
  | "calendar"
  | "check"
  | "engine"
  | "mail"
  | "map"
  | "phone"
  | "scan"
  | "shieldCheck"
  | "snow"
  | "wheel"
  | "wrench";

export function Icon({ name }: { name: IconName }) {
  const content: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    battery: (
      <>
        <path d="M6 9h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" />
        <path d="M20 12v4M9 14h5M11.5 11.5v5" />
      </>
    ),
    boltTag: (
      <>
        <path d="M4 12.5V5h7.5L21 14.5 14.5 21 4 12.5Z" />
        <path d="m13 8-3 5h4l-3 5" />
        <circle cx="8" cy="8" r="1.2" />
      </>
    ),
    brake: (
      <>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2.4" />
        <path d="M18.5 5.5c2 1.8 3.1 4.2 3.1 6.8 0 3.2-1.6 6-4.1 7.7l-2.2-4a4.5 4.5 0 0 0 1.7-3.6 4.8 4.8 0 0 0-1.7-3.7l3.2-3.2Z" />
      </>
    ),
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16M8 14h3M13 14h3M8 17h3" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12.3 2.2 2.2 4.8-5.2" />
      </>
    ),
    engine: (
      <>
        <path d="M7 13h3V9h5v4h3l3 3v4h-4l-2 2h-5l-2-2H4v-4l3-3Z" />
        <path d="M10 9V6h6M4 17H2M22 17h-2" />
      </>
    ),
    mail: (
      <>
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="m4.5 7.5 7.5 5.2 7.5-5.2" />
      </>
    ),
    map: (
      <>
        <path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.3" />
      </>
    ),
    phone: (
      <path d="M7 4h3l1.4 4-2 1.2a11 11 0 0 0 5.4 5.4l1.2-2 4 1.4v3a2 2 0 0 1-2.1 2A15.9 15.9 0 0 1 5 6.1 2 2 0 0 1 7 4Z" />
    ),
    scan: (
      <>
        <path d="M7 8h10a3 3 0 0 1 3 3v3H4v-3a3 3 0 0 1 3-3Z" />
        <path d="M6 14v4h12v-4M8 18v2M12 18v2M16 18v2M8 11h8" />
      </>
    ),
    shieldCheck: (
      <>
        <path d="M12 3 20 6.5v5.8c0 4.4-3.1 7.5-8 8.7-4.9-1.2-8-4.3-8-8.7V6.5L12 3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    snow: (
      <>
        <path d="M12 3v18M5.6 6.5l12.8 11M18.4 6.5l-12.8 11" />
        <path d="m9 5.2 3 2.1 3-2.1M9 18.8l3-2.1 3 2.1M4.9 10.3l3.4.4.5-3.4M19.1 13.7l-3.4-.4-.5 3.4M19.1 10.3l-3.4.4-.5-3.4M4.9 13.7l3.4-.4.5 3.4" />
      </>
    ),
    wheel: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="2.2" />
        <path d="M12 3.5v6.3M12 14.2v6.3M3.5 12h6.3M14.2 12h6.3M6 6l4.4 4.4M13.6 13.6 18 18M18 6l-4.4 4.4M10.4 13.6 6 18" />
      </>
    ),
    wrench: (
      <path d="M14.8 6.2a5 5 0 0 0 6.1 6.1L12 21.2a2.6 2.6 0 0 1-3.7-3.7l8.9-8.9a5 5 0 0 1-2.4-2.4Z" />
    ),
  };

  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none">
      {content[name]}
    </svg>
  );
}
