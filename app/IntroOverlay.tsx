"use client";

/* eslint-disable @next/next/no-img-element */

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const introStatements = [
  "Direkter Kontakt.",
  "Klare Absprachen.",
  "Saubere Arbeit.",
];

export function IntroOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 4300);
    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="intro-overlay" aria-label="Website-Intro">
      <img
        className="intro-photo"
        src="/werkstatt-aussen.png"
        alt=""
        width="1536"
        height="1024"
      />
      <div className="intro-light" />
      <div className="intro-statements">
        {introStatements.map((statement, index) => (
          <div
            className="intro-statement"
            key={statement}
            style={{ "--intro-step": index } as CSSProperties}
          >
            <strong>{statement}</strong>
            <svg className="intro-check" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="14" r="12" />
              <path d="M8 14.4l4 4 8-9" />
            </svg>
          </div>
        ))}
      </div>
      <button className="intro-skip" type="button" onClick={() => setVisible(false)}>
        Intro überspringen
      </button>
    </div>
  );
}
