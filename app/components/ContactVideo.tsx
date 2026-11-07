"use client";

import { useEffect, useRef } from "react";

export function ContactVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const load = () => {
      video.src = "/contact-video-web.mp4";
      video.load();
      void video.play().catch(() => { /* Browser autoplay preferences take precedence. */ });
    };
    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      load();
      observer.disconnect();
    }, { rootMargin: "600px" });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return <video ref={ref} autoPlay muted loop playsInline preload="none" poster="/contact-video-poster.webp" />;
}
