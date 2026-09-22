import Image from "next/image";
import Link from "next/link";
import { contact } from "../data/contact";
import { Icon } from "./Icon";
import { MobileMenu } from "./MobileMenu";
import { SectionLink, SectionNavigation } from "./SectionLink";

function Logo({ footer = false }: { footer?: boolean }) {
  const sizes = footer ? "81px" : "(max-width: 680px) 84px, 99px";
  return (
    <picture>
      <source type="image/avif" srcSet="/assets/optimized/autodienst-logo-160.avif 160w, /assets/optimized/autodienst-logo-240.avif 240w, /assets/optimized/autodienst-logo-320.avif 320w" sizes={sizes} />
      <source type="image/webp" srcSet="/assets/optimized/autodienst-logo-160.webp 160w, /assets/optimized/autodienst-logo-240.webp 240w, /assets/optimized/autodienst-logo-320.webp 320w" sizes={sizes} />
      <Image src="/autodienst-logo.png" alt="" width={footer ? 118 : 156} height={footer ? 79 : 104} unoptimized loading={footer ? "lazy" : "eager"} />
    </picture>
  );
}

export function SiteHeader() {
  return (
    <header className="topbar" aria-label="Hauptnavigation">
      <SectionNavigation />
      <SectionLink className="brand" section="start" aria-label="Autodienst Schwanheim">
        <Logo />
        <span><strong>Autodienst<span className="brand-place"> Schwanheim</span></strong><small>Frankfurt-Schwanheim</small></span>
      </SectionLink>
      <nav className="nav-links" aria-label="Seitenbereiche">
        <SectionLink section="leistungen">Leistungen</SectionLink><SectionLink section="werkstatt">Werkstatt</SectionLink><SectionLink section="galerie">Galerie</SectionLink><SectionLink section="kontakt">Kontakt</SectionLink>
      </nav>
      <MobileMenu />
    </header>
  );
}

export function ContactActions({ email = true }: { email?: boolean }) {
  return (
    <div className="contact-actions">
      <a className="button button-primary" href={contact.landlineHref}><Icon name="phone" /><span>Jetzt anrufen</span></a>
      <a className="button button-secondary" href={contact.mapsHref} target="_blank" rel="noreferrer"><Icon name="map" /><span>Zur Werkstatt</span></a>
      {email && <a className="button button-glass" href={contact.emailHref}><Icon name="mail" /><span>E-Mail senden</span></a>}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <SectionLink className="footer-brand" section="start" aria-label="Autodienst Schwanheim">
        <Logo footer />
        <span><strong>Autodienst Schwanheim</strong><small>{contact.street} · {contact.city}</small></span>
      </SectionLink>
      <nav aria-label="Rechtliches">
        <Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link><a href={contact.emailHref}>{contact.email}</a>
      </nav>
      <div className="footer-credit">
        <a className="footer-credit-link" href="https://tmr-webdesign.de" target="_blank" rel="noopener noreferrer" aria-label="Webdesign TIMUR, tmr-webdesign.de (öffnet in neuem Tab)">
          <span className="footer-credit-brand">
            <span className="footer-credit-mark" aria-hidden="true">T</span>
            <span>Webdesign <strong>TIMUR<span className="footer-credit-dot">.</span></strong></span>
          </span>
          <span className="footer-credit-domain">tmr-webdesign.de <Icon name="arrow" /></span>
        </a>
      </div>
    </footer>
  );
}
