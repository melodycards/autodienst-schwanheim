import type { ReactNode } from "react";

const contact = {
  landline: "069 15 39 27 23",
  landlineHref: "tel:+496915392723",
  email: "autodienstschwanheim@gmail.com",
  emailHref: "mailto:autodienstschwanheim@gmail.com",
  street: "Rheinlandstraße 3",
  city: "60529 Frankfurt am Main",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Rheinlandstra%C3%9Fe%203%2C%2060529%20Frankfurt%20am%20Main",
};

const people = [
  {
    name: "Ömür Ete",
    label: "Mobil",
    phone: "0157 96 08 500",
    href: "tel:+491579608500",
  },
  {
    name: "Muhammed Göküzüm",
    label: "Mobil",
    phone: "0163 25 07 342",
    href: "tel:+491632507342",
  },
];

const benefits = [
  { label: "Mit oder ohne Terminvereinbarung", icon: "calendar" },
  { label: "Schnell & günstig", icon: "tag" },
  { label: "Kompetenter Service", icon: "shieldTool" },
];

const services = [
  { label: "TÜV & AU-Service", icon: "inspectionBadge" },
  { label: "Inspektion", icon: "wrench" },
  { label: "Ölwechsel", icon: "oilCan" },
  { label: "Reifenservice", icon: "tire" },
  { label: "Fahrzeugdiagnose", icon: "carCheck" },
  { label: "Fehlerauslesen", icon: "scanner" },
  { label: "Motordiagnose", icon: "engine" },
  { label: "Klima-Check", icon: "snowflake" },
  { label: "Akku", icon: "battery" },
  { label: "Auspuff", icon: "exhaust" },
  { label: "Getriebe", icon: "gears" },
  { label: "Radeinstellung", icon: "alignment" },
  { label: "Bremsenservice", icon: "brakes" },
  { label: "Austausch von Luft- und Innenraumfiltern", icon: "filter" },
];

const longServices = new Set([
  "Austausch von Luft- und Innenraumfiltern",
]);

const openingHours = [
  ["Mo – Fr", "08:30 – 18:00"],
  ["Samstag", "09:00–13:00"],
  ["Sonntag", "Geschlossen"],
];

type ServiceIconName =
  | "inspectionBadge"
  | "wrench"
  | "oilCan"
  | "tire"
  | "carCheck"
  | "scanner"
  | "engine"
  | "snowflake"
  | "battery"
  | "exhaust"
  | "gears"
  | "alignment"
  | "brakes"
  | "filter";

type BenefitIconName = "calendar" | "tag" | "shieldTool";

function LineIcon({ name }: { name: string }) {
  const paths: Record<BenefitIconName, ReactNode> = {
    calendar: (
      <>
        <rect x="4" y="5.5" width="16" height="14.5" rx="2.2" fill="#dfe5ee" stroke="#f8fbff" strokeWidth="1.2" />
        <path d="M4 10h16" stroke="#8d97a4" strokeWidth="1.2" />
        <path d="M8 3.8v3.4M16 3.8v3.4" stroke="#b91619" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="7.3" y="12.6" width="3.3" height="3.3" rx=".7" fill="#b91619" opacity=".88" />
        <rect x="12.4" y="12.6" width="3.3" height="3.3" rx=".7" fill="#7f8996" opacity=".82" />
      </>
    ),
    tag: (
      <>
        <path d="M4 11.1V5h6.2L20 14.8 14.8 20 4 11.1Z" fill="#dfe5ee" stroke="#f8fbff" strokeWidth="1.2" />
        <circle cx="8.4" cy="8.2" r="1.35" fill="#b91619" />
        <path d="M11.2 13.9h5.1M11.2 16.1h3.1" stroke="#6f7884" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M17.7 7.3v4M15.7 9.3h4" stroke="#b91619" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
    shieldTool: (
      <>
        <path d="M12 3.2 19 6.1v5.3c0 4.1-2.6 7.5-7 9.4-4.4-1.9-7-5.3-7-9.4V6.1l7-2.9Z" fill="#dfe5ee" stroke="#f8fbff" strokeWidth="1.2" />
        <path d="M12 5.8 16.6 7.7v3.4c0 2.7-1.7 5-4.6 6.3-2.9-1.3-4.6-3.6-4.6-6.3V7.7L12 5.8Z" fill="#27313d" opacity=".84" />
        <path d="m9.4 12.4 1.6 1.6 3.9-4.2" stroke="#b91619" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  };

  return (
    <svg
      className="item-icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name as BenefitIconName]}
    </svg>
  );
}

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const icons: Record<ServiceIconName, ReactNode> = {
    inspectionBadge: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" fill="#f3f7fc" stroke="#ffffff" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="21" fill="#1f5f9f" stroke="#9fb9d5" strokeWidth="2" />
        <circle cx="32" cy="32" r="15.2" fill="#f8fbff" />
        <text x="32" y="36.5" fill="#1b2f48" fontSize="13" fontWeight="900" textAnchor="middle">TÜV</text>
        <path d="M32 7.5v6.5M32 50v6.5M7.5 32H14M50 32h6.5M14.7 14.7l4.6 4.6M44.7 44.7l4.6 4.6M49.3 14.7l-4.6 4.6M19.3 44.7l-4.6 4.6" stroke="#eef4fb" strokeWidth="2" strokeLinecap="round" opacity=".76" />
        <path d="m25.1 42.5 2.8 2.8 5.7-6" fill="none" stroke="#b91619" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    wrench: "🛠️",
    oilCan: "🛢️💧",
    tire: "🛞",
    carCheck: "🚙🔎",
    scanner: "📟",
    engine: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M16 28h8v-7h16v7h8l7 7v14h-9l-4 6H23l-4-6h-9V35l6-7Z" fill="#c9d0d8" />
        <path d="M18 31h7v-7h14v7h8l5 5v10h-8l-4 6H25l-4-6h-8V36l5-5Z" fill="#8b949e" />
        <circle cx="39" cy="40" r="7" fill="#b91619" />
        <circle cx="39" cy="40" r="3" fill="#f2f5f8" />
        <path d="M25 23v-6h19M10 40H4M60 40h-6" stroke="#e5e9ef" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    snowflake: "❄️",
    battery: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="battery-case" x1="0" x2="1">
            <stop offset="0" stopColor="#2b3138" />
            <stop offset=".52" stopColor="#4f5965" />
            <stop offset="1" stopColor="#15191f" />
          </linearGradient>
          <linearGradient id="battery-top" x1="0" x2="1">
            <stop offset="0" stopColor="#d7dde5" />
            <stop offset="1" stopColor="#7c8794" />
          </linearGradient>
        </defs>
        <rect x="13" y="19" width="38" height="30" rx="4" fill="url(#battery-case)" stroke="#dce2ea" strokeWidth="2.4" />
        <path d="M18 19v-4h8v4M38 19v-4h8v4" fill="none" stroke="url(#battery-top)" strokeWidth="3" strokeLinecap="round" />
        <rect x="18" y="24" width="28" height="5" rx="1.4" fill="#20262d" opacity=".78" />
        <path d="M22 38h8M26 34v8M38 38h8" stroke="#f0f4f8" strokeWidth="3" strokeLinecap="round" />
        <path d="M16 22h12" stroke="#b91619" strokeWidth="3" strokeLinecap="round" />
        <path d="M38 22h10" stroke="#2c7cc3" strokeWidth="3" strokeLinecap="round" />
        <circle cx="20" cy="17" r="4.4" fill="#b91619" stroke="#f4f7fb" strokeWidth="1.4" />
        <circle cx="42" cy="17" r="4.4" fill="#2c7cc3" stroke="#f4f7fb" strokeWidth="1.4" />
      </svg>
    ),
    exhaust: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="exhaust-metal" x1="0" x2="1">
            <stop offset="0" stopColor="#b7bdc5" />
            <stop offset=".5" stopColor="#f0f2f5" />
            <stop offset="1" stopColor="#6f7782" />
          </linearGradient>
        </defs>
        <path d="M20 34h23c6 0 11-5 11-11v-6" fill="none" stroke="#b8c0c9" strokeWidth="7" strokeLinecap="round" />
        <path d="M8 35h25v13H8z" fill="url(#exhaust-metal)" stroke="#f2f5f8" strokeWidth="2" />
        <path d="M6 39h-3M6 45h-3M50 13c4-3 8-3 12 0" stroke="#9fa8b4" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    gears: "⚙️",
    alignment: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="14" fill="#10151c" stroke="#d8dde4" strokeWidth="4" />
        <circle cx="32" cy="32" r="6" fill="#d8dde4" />
        <path d="M14 14v36M50 14v36M10 20h8M10 44h8M46 20h8M46 44h8" stroke="#b91619" strokeWidth="4" strokeLinecap="round" />
        <path d="M22 10 10 22M42 10l12 12M22 54 10 42M42 54l12-12" stroke="#8c96a2" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    brakes: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="20" fill="#c9d0d8" stroke="#eef2f7" strokeWidth="3" />
        <circle cx="32" cy="32" r="9" fill="#10151c" stroke="#8b949e" strokeWidth="3" />
        <path d="M46 15c6 5 9 12 8 20-.9 6.6-4.8 12.1-10.5 15.1L38 39.6c4.3-2.1 6.8-6.4 6.8-11.2 0-3.3-1.3-6.4-3.6-8.7L46 15Z" fill="#b91619" stroke="#f1f4f8" strokeWidth="2" />
        <path d="M22 18.5a17.5 17.5 0 0 0 0 27M32 12v5M32 47v5M12 32h5" fill="none" stroke="#7f8996" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    filter: (
      <svg viewBox="0 0 78 44" aria-hidden="true">
        <rect x="4" y="5" width="24" height="34" rx="2" fill="#f1f4f7" stroke="#aab2bd" strokeWidth="2" />
        <path d="M9 10h14M9 15h14M9 20h14M9 25h14M9 30h14M9 35h14" stroke="#6e7782" strokeWidth="1.5" />
        <path d="M43 10 70 4v30l-27 6V10Z" fill="#d7ecff" stroke="#eef5ff" strokeWidth="2" />
        <path d="M47 13v23M52 12v23M57 10v23M62 9v23M67 7v23" stroke="#2c7cc3" strokeWidth="1.3" />
      </svg>
    ),
  };

  return (
    <span className="service-icon" aria-hidden="true">
      {icons[name]}
    </span>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Hauptnavigation">
        <a className="brand" href="#start" aria-label="Autodienst Schwanheim">
          <span className="brand-mark">
            <img src="/autodienst-logo.png" alt="" />
          </span>
          <span className="brand-text">
            <strong>Autodienst Schwanheim</strong>
            <small>Frankfurt am Main</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Seitenbereiche">
          <a href="#leistungen">Leistungen</a>
          <a href="#bilder">Bilder</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="topbar-call" href={contact.landlineHref}>
          Jetzt anrufen
        </a>
      </header>

      <section id="start" className="hero" aria-labelledby="hero-title">
        <video
          className="hero-photo"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/hero-background.mov" type="video/quicktime" />
        </video>
        <div className="hero-shade" />
        <div className="hero-inner">
          <img
            className="hero-logo"
            src="/autodienst-logo.png"
            alt="Autodienst Schwanheim Logo"
          />
          <p className="eyebrow">Autowerkstatt in Frankfurt-Schwanheim</p>
          <h1 id="hero-title">Autodienst Schwanheim</h1>
          <p>
            Premium-orientierter Kfz-Service in der Rheinlandstraße 3. Direkt
            anrufen, Route starten oder Leistungen übersichtlich ansehen.
          </p>
          <div className="action-row" aria-label="Kontaktaktionen">
            <a className="button button-primary" href={contact.landlineHref}>
              Jetzt anrufen
            </a>
            <a
              className="button button-ghost route-button"
              href={contact.mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              Route starten
            </a>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Kurzinfos">
        <div>
          <span>Telefon</span>
          <a href={contact.landlineHref}>{contact.landline}</a>
        </div>
        <div>
          <span>E-Mail</span>
          <a className="mail-link" href={contact.emailHref}>
            {contact.email}
          </a>
        </div>
        <div>
          <span>Adresse</span>
          <p>
            <span className="keep-together">Rheinlandstraße&nbsp;3</span>
            <br />
            {contact.city}
          </p>
        </div>
      </section>

      <section className="intro-section" aria-labelledby="intro-title">
        <div className="section-copy">
          <p className="section-label">Ihre Werkstatt</p>
          <h2 id="intro-title">Klare Abläufe, direkte Hilfe, sauberer Service.</h2>
        </div>
        <div className="advantage-flow" aria-label="Vorteile">
          {benefits.map((benefit) => (
            <p key={benefit.label}>
              <span className="advantage-dot" aria-hidden="true" />
              <span className="item-content">
                <span>{benefit.label}</span>
                <LineIcon name={benefit.icon} />
              </span>
            </p>
          ))}
        </div>
      </section>

      <section id="leistungen" className="services-section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-label">Service / Leistungen</p>
          <h2 id="services-title">Kfz-Service kompakt und hochwertig strukturiert.</h2>
        </div>
        <div className="service-flow">
          {services.map((service) => (
            <div
              className={`service-item ${longServices.has(service.label) ? "service-wide" : ""} ${service.label === "Bremsenservice" ? "service-brakes" : ""}`}
              key={service.label}
            >
              <span className="service-dot" aria-hidden="true" />
              <p>
                <span className="service-label-text">{service.label}</span>
                <ServiceIcon name={service.icon as ServiceIconName} />
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="hours-section" aria-labelledby="hours-title">
        <div className="hours-heading">
          <p className="section-label">Öffnungszeiten</p>
          <h2 id="hours-title">Vorbeikommen oder Termin abstimmen.</h2>
        </div>
        <dl className="hours-list">
          {openingHours.map(([day, time]) => (
            <div key={day}>
              <dt>{day}</dt>
              <dd>{time}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="bilder" className="atelier-section" aria-labelledby="photos-title">
        <div className="atelier-copy">
          <p className="section-label">Werkstattbilder</p>
          <h2 id="photos-title">Echter Standort, echte Fahrzeuge, klare Präsenz.</h2>
          <p>
            Die Bilder zeigen den Betrieb und den Werkstattalltag in
            Frankfurt-Schwanheim, integriert als ruhige, hochwertige Bildstrecke.
          </p>
        </div>
        <div className="atelier-image atelier-main">
          <img
            src="/werkstatt-service-new.jpg"
            alt="Werkstattbereich von Autodienst Schwanheim mit geöffneten Toren"
          />
        </div>
        <div className="wide-photo">
          <img
            src="/werkstatt-detail-1.jpg"
            alt="Außenbereich von Autodienst Schwanheim mit Fahrzeugen vor dem Betrieb"
          />
        </div>
        <div className="atelier-image">
          <img
            src="/werkstatt-detail-2.jpg"
            alt="Werkstattalltag bei Autodienst Schwanheim mit Fahrzeugen auf dem Hof"
          />
        </div>
      </section>

      <section id="kontakt" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-lead">
          <p className="section-label">Kontakt</p>
          <h2 id="contact-title">Anrufen, schreiben oder direkt hinfinden.</h2>
          <div className="action-row contact-buttons">
            <a className="button button-primary" href={contact.landlineHref}>
              Jetzt anrufen
            </a>
            <a
              className="button button-ghost route-button"
              href={contact.mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              Route starten
            </a>
            <a className="button button-silver" href={contact.emailHref}>
              E-Mail senden
            </a>
          </div>
        </div>

        <div className="contact-system">
          <div className="contact-video">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src="/contact-video.mov" type="video/quicktime" />
            </video>
          </div>
          <div className="contact-grid" aria-label="Kontaktdaten">
            <div>
              <span>Telefon</span>
              <a href={contact.landlineHref}>{contact.landline}</a>
            </div>
            <div>
              <span>E-Mail</span>
              <a className="mail-link" href={contact.emailHref}>
                {contact.email}
              </a>
            </div>
            <div>
              <span>Adresse</span>
              <p>
                <span className="keep-together">Rheinlandstraße&nbsp;3</span>
                <br />
                {contact.city}
              </p>
            </div>
          </div>
          <div className="people-flow" aria-label="Ansprechpartner">
            {people.map((person) => (
              <div key={person.name}>
                <span>Ansprechpartner</span>
                <h3>{person.name}</h3>
                <p>{person.label}</p>
                <a href={person.href}>{person.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer" aria-label="Footer">
        <a className="footer-brand" href="#start" aria-label="Autodienst Schwanheim">
          <span className="footer-mark">
            <img src="/autodienst-logo.png" alt="" />
          </span>
          <span>
            <strong>Autodienst Schwanheim</strong>
            <small>
              <span className="keep-together">Rheinlandstraße&nbsp;3</span> ·{" "}
              {contact.city}
            </small>
          </span>
        </a>
        <div className="footer-links">
          <a href={contact.landlineHref}>{contact.landline}</a>
          <a className="mail-link" href={contact.emailHref}>
            {contact.email}
          </a>
          <a href={contact.mapsHref} target="_blank" rel="noreferrer">
            Route starten
          </a>
        </div>
      </footer>
    </main>
  );
}
