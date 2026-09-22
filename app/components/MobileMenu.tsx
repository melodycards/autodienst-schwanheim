"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const trigger = button.current;
    const y = window.scrollY;
    const saved = { position: body.style.position, top: body.style.top, width: body.style.width, overflow: body.style.overflow };
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    const background = [...document.querySelectorAll<HTMLElement>("body > main, body > footer")];
    const inertBefore = background.map(element => element.inert);
    background.forEach(element => { element.inert = true; });
    navigation.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); setOpen(false); }
      if (event.key === "Tab") {
        const controls = [...document.querySelectorAll<HTMLElement>(".topbar a, .topbar button")].filter(element => element.getClientRects().length && !element.classList.contains("menu-backdrop"));
        const first = controls[0];
        const last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const media = window.matchMedia("(min-width: 981px)");
    const onResize = () => { if (media.matches) setOpen(false); };
    const onLink = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest(".topbar a")) flushSync(() => setOpen(false));
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onLink, true);
    media.addEventListener("change", onResize);
    return () => {
      Object.assign(body.style, saved);
      background.forEach((element, index) => { element.inert = inertBefore[index]; });
      window.scrollTo({ top: y, behavior: "instant" });
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onLink, true);
      media.removeEventListener("change", onResize);
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <div className="mobile-menu">
      <button ref={button} className="menu-toggle" type="button" aria-label={open ? "Menü schließen" : "Menü öffnen"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>
      {open && <button className="menu-backdrop" aria-label="Menü schließen" tabIndex={-1} onClick={() => setOpen(false)} />}
      <nav ref={navigation} id="mobile-navigation" className="mobile-navigation" aria-label="Mobile Seitenbereiche" hidden={!open}>
        {[["leistungen", "Leistungen"], ["werkstatt", "Werkstatt"], ["galerie", "Galerie"], ["kontakt", "Kontakt"]].map(([id, title]) => (
          <Link key={id} href={`/#${id}`}>{title}<span aria-hidden="true">→</span></Link>
        ))}
      </nav>
    </div>
  );
}
