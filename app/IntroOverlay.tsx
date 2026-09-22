"use client";

import { useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { finishIntro, getIntroSnapshot, getServerIntroSnapshot, subscribeToIntro } from "./introSession";

const introStatements = [
  "Direkter Kontakt.",
  "Klare Absprachen.",
  "Saubere Arbeit.",
];

export function IntroOverlay() {
  const visible = useSyncExternalStore(subscribeToIntro, getIntroSnapshot, getServerIntroSnapshot);
  const pathname = usePathname();
  useEffect(() => { if (pathname !== "/") finishIntro(); }, [pathname]);

  if (!visible) {
    return null;
  }

  return (
    <div className="intro-overlay" aria-label="Website-Intro">
      <picture className="intro-picture">
        <source
          media="(max-width: 680px)"
          type="image/avif"
          srcSet="/assets/optimized/intro-mobile-480.avif 480w, /assets/optimized/intro-mobile-720.avif 720w, /assets/optimized/intro-mobile-941.avif 941w"
          sizes="100vw"
        />
        <source
          media="(max-width: 680px)"
          type="image/webp"
          srcSet="/assets/optimized/intro-mobile-480.webp 480w, /assets/optimized/intro-mobile-720.webp 720w, /assets/optimized/intro-mobile-941.webp 941w"
          sizes="100vw"
        />
        <source media="(max-width: 680px)" srcSet="/intro-mobile.png" />
        <source
          type="image/avif"
          srcSet="/assets/optimized/intro-desktop-960.avif 960w, /assets/optimized/intro-desktop-1280.avif 1280w, /assets/optimized/intro-desktop-1672.avif 1672w"
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet="/assets/optimized/intro-desktop-960.webp 960w, /assets/optimized/intro-desktop-1280.webp 1280w, /assets/optimized/intro-desktop-1672.webp 1672w"
          sizes="100vw"
        />
        <img
          className="intro-photo"
          src="/intro-desktop.png"
          alt=""
          width="1672"
          height="941"
          fetchPriority="high"
        />
      </picture>
      <div className="intro-composition">
        <div className="intro-light" />
        <div className="intro-stage">
          <div className="intro-brand-mark">
            <strong>AUTODIENST SCHWANHEIM</strong>
            <span>KFZ-SERVICE • DIAGNOSE • REPARATUR</span>
          </div>
          <div className="intro-statements">
            {introStatements.map((statement) => (
              <div className="intro-statement" key={statement}>
                <strong>{statement}</strong>
                <svg className="intro-check" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <circle cx="14" cy="14" r="12" />
                  <path d="M8 14.4l4 4 8-9" />
                </svg>
              </div>
            ))}
          </div>
        </div>
        <button className="intro-skip" type="button" onClick={finishIntro}>
          INTRO ÜBERSPRINGEN
        </button>
      </div>
    </div>
  );
}
