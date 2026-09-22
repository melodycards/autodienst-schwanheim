"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Section = "start" | "leistungen" | "werkstatt" | "galerie" | "kontakt";
let pendingSection: Section | null = null;

function scrollToSection(section: Section, replace: boolean) {
  const target = document.getElementById(section);
  if (!target) return;
  const url = `/#${section}`;
  if (replace) window.history.replaceState(window.history.state, "", url);
  else window.history.pushState(window.history.state, "", url);
  target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
}

export function SectionNavigation() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/" && pendingSection) {
      scrollToSection(pendingSection, true);
      pendingSection = null;
    }
  }, [pathname]);
  return null;
}

export function SectionLink({ section, children, className, "aria-label": label }: {
  section: Section;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  return <Link href={`/#${section}`} className={className} aria-label={label} onNavigate={event => {
    event.preventDefault();
    if (pathname === "/") scrollToSection(section, false);
    else {
      // Navigate without a fragment so cached route URLs cannot duplicate an old hash.
      pendingSection = section;
      router.push("/", { scroll: false });
    }
  }}>{children}</Link>;
}
