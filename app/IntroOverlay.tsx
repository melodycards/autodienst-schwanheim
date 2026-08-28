"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

export function IntroOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const key = "autodienst-intro-seen";
    if (window.sessionStorage.getItem(key) === "true") {
      return;
    }

    window.sessionStorage.setItem(key, "true");
    const frame = window.requestAnimationFrame(() => setVisible(true));
    const timer = window.setTimeout(() => setVisible(false), 2300);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="intro-overlay" aria-hidden="true">
      <img
        className="intro-photo"
        src="/werkstatt-aussen.png"
        alt=""
        width="1536"
        height="1024"
      />
      <div className="intro-light" />
      <img
        className="intro-logo"
        src="/autodienst-logo.png"
        alt=""
        width="340"
        height="227"
      />
      <div className="intro-type">
        <strong>Autodienst Schwanheim</strong>
        <span>Kfz-Service • Diagnose • Reparatur</span>
      </div>
    </div>
  );
}
