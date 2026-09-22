"use client";

import { useEffect, useState } from "react";

const introStatements = [
  "Direkter Kontakt.",
  "Klare Absprachen.",
  "Saubere Arbeit.",
];

export function IntroOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 5300);
    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="intro-overlay" aria-label="Website-Intro">
      <picture className="intro-picture">
        <source
          type="image/avif"
          srcSet="/assets/optimized/werkstatt-aussen-768.avif 768w, /assets/optimized/werkstatt-aussen-960.avif 960w, /assets/optimized/werkstatt-aussen-1536.avif 1536w"
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet="/assets/optimized/werkstatt-aussen-768.webp 768w, /assets/optimized/werkstatt-aussen-960.webp 960w, /assets/optimized/werkstatt-aussen-1536.webp 1536w"
          sizes="100vw"
        />
        <img
          className="intro-photo"
          src="/werkstatt-aussen.png"
          alt=""
          width="1536"
          height="1024"
          fetchPriority="high"
        />
      </picture>
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
      <button className="intro-skip" type="button" onClick={() => setVisible(false)}>
        INTRO ÜBERSPRINGEN
      </button>
    </div>
  );
}
