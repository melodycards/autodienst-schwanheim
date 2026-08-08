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
  { label: "Austausch von Luft- und Innenraumfiltern", icon: "filter" },
];

const longServices = new Set([
  "Austausch von Luft- und Innenraumfiltern",
]);

const openingHours = [
  ["Montag", "08:30–18:00"],
  ["Dienstag", "08:30–18:00"],
  ["Mittwoch", "08:30–18:00"],
  ["Donnerstag", "08:30–18:00"],
  ["Freitag", "08:30–18:00"],
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
  | "filter";

type BenefitIconName = "calendar" | "tag" | "shieldTool";

function LineIcon({ name }: { name: string }) {
  const paths: Record<BenefitIconName, ReactNode> = {
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16M8 14h3M13 14h3" />
      </>
    ),
    tag: (
      <>
        <path d="M4 11.2V5h6.2L20 14.8 14.8 20 4 11.2Z" />
        <circle cx="8.2" cy="8.2" r="1.2" />
      </>
    ),
    shieldTool: (
      <>
        <path d="M12 3 19 6v5.4c0 4.1-2.7 7.7-7 9.6-4.3-1.9-7-5.5-7-9.6V6l7-3Z" />
        <path d="m9 14 2.1-2.1M13.2 9.8l1.4-1.4M8.7 14.3l1 1 5.9-5.9-1-1-5.9 5.9Z" />
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
        <path d="M32 4 45.8 9.8 60 24 54.2 40.2 40 60 23.8 54.2 4 40 9.8 23.8 24 9.8 32 4Z" fill="#244b85" />
        <path d="M32 7.8 44 12.9 56.2 25.1 51.1 39 39 56.2 25.1 51.1 7.8 39 12.9 25.1 25.1 12.9 32 7.8Z" fill="#f5f7fb" opacity=".95" />
        <path d="M32 12.5 42 16.6 51.5 26.1 47.4 38 38 51.5 26.1 47.4 12.5 38 16.6 26.1 26.1 16.6 32 12.5Z" fill="#2f67ac" />
        <path d="M19 29h26v15H19z" fill="#f6f8fb" />
        <text x="32" y="39" fill="#1b2635" fontSize="13" fontWeight="800" textAnchor="middle">TÜV</text>
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
    battery: "🔋",
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
        <img
          className="hero-photo"
          src="/werkstatt-aussen.png"
          alt="Außenansicht von Autodienst Schwanheim mit Fahrzeugen vor der Werkstatt"
        />
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
              className={`service-item ${longServices.has(service.label) ? "service-wide" : ""}`}
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
            src="/werkstatt-service.png"
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
          <img src="/autodienst-logo.png" alt="Autodienst Schwanheim Logo" />
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
