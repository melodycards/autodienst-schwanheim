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
  { label: "TÜV & AU-Service", icon: "checklist" },
  { label: "Inspektion", icon: "wrench" },
  { label: "Ölwechsel", icon: "oil" },
  { label: "Reifenservice", icon: "wheel" },
  { label: "Fahrzeugdiagnose", icon: "carDiagnostic" },
  { label: "Fehlerauslesen", icon: "scanner" },
  { label: "Motordiagnose", icon: "engine" },
  { label: "Klima-Check", icon: "snowflake" },
  { label: "Akku", icon: "battery" },
  { label: "Auspuff", icon: "exhaust" },
  { label: "Getriebe", icon: "gear" },
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

type IconName =
  | "calendar"
  | "tag"
  | "shieldTool"
  | "checklist"
  | "wrench"
  | "oil"
  | "wheel"
  | "carDiagnostic"
  | "scanner"
  | "engine"
  | "snowflake"
  | "battery"
  | "exhaust"
  | "gear"
  | "alignment"
  | "filter";

function LineIcon({ name }: { name: string }) {
  const paths: Record<IconName, ReactNode> = {
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
    checklist: (
      <>
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h6M7.2 8l.6.6 1.1-1.3M7.2 12l.6.6 1.1-1.3" />
      </>
    ),
    wrench: (
      <>
        <path d="M14.7 5.3a4.2 4.2 0 0 0 4.9 5.4l-8.9 8.9a2.1 2.1 0 0 1-3-3l8.9-8.9a4.2 4.2 0 0 0-1.9-2.4Z" />
        <path d="M7.9 17.8h.1" />
      </>
    ),
    oil: (
      <>
        <path d="M7 14h8l4-4-3-3-4 4H7v3Z" />
        <path d="M6 14v4h8v-4M17.5 15.5c1.1 1.2 1.5 2.1 1.5 2.8a1.5 1.5 0 0 1-3 0c0-.7.4-1.6 1.5-2.8Z" />
      </>
    ),
    wheel: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2.1" />
        <path d="M12 4v5.9M12 14.1V20M4 12h5.9M14.1 12H20M6.4 6.4l4.2 4.2M13.4 13.4l4.2 4.2M17.6 6.4l-4.2 4.2M10.6 13.4l-4.2 4.2" />
      </>
    ),
    carDiagnostic: (
      <>
        <path d="M5 14h14l-1.6-5.2A2.4 2.4 0 0 0 15.1 7H8.9a2.4 2.4 0 0 0-2.3 1.8L5 14Z" />
        <path d="M6 14v3M18 14v3M7 17h2M15 17h2M10 11h4M16.5 5.5l2-2M18.5 5.5l-2-2" />
      </>
    ),
    scanner: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M8 9h8M8 13h5M8 17h2M15 16l2 2M17 16l-2 2" />
      </>
    ),
    engine: (
      <>
        <path d="M7 10h3V7h4v3h3l2 2v5h-3l-1.5 2h-5L8 17H5v-5l2-2Z" />
        <path d="M10 7V5h5M6 14H4M19 14h2M11 14h2" />
      </>
    ),
    snowflake: (
      <>
        <path d="M12 3v18M5.6 6.6l12.8 10.8M18.4 6.6 5.6 17.4" />
        <path d="m9 5 3 3 3-3M9 19l3-3 3 3M4.8 10.2l4.1 1.1-1.1 4.1M19.2 10.2l-4.1 1.1 1.1 4.1" />
      </>
    ),
    battery: (
      <>
        <rect x="4" y="8" width="15" height="8" rx="2" />
        <path d="M21 11v2M8 12h4M10 10v4M14.5 12H17" />
      </>
    ),
    exhaust: (
      <>
        <path d="M4 14h9v4H4v-4ZM13 16h3.5c1.9 0 3.5-1.6 3.5-3.5V8" />
        <path d="M7 14v-3h5M18 6.5c1.3-.8 2.4-.8 3.3 0M17.5 3.8c1.8-1 3.4-1 4.8 0" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M4.2 7.5l2.6 1.5M17.2 15l2.6 1.5M4.2 16.5 6.8 15M17.2 9l2.6-1.5M6 12H3M21 12h-3" />
      </>
    ),
    alignment: (
      <>
        <circle cx="7" cy="12" r="3" />
        <circle cx="17" cy="12" r="3" />
        <path d="M7 5v3M7 16v3M17 5v3M17 16v3M10 12h4M4 7l-2 2M20 7l2 2M4 17l-2-2M20 17l2-2" />
      </>
    ),
    filter: (
      <>
        <path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z" />
        <path d="M7 9h10M9 12h6" />
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
      {paths[name as IconName]}
    </svg>
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
                <span className="item-content">
                  <span>{service.label}</span>
                  <LineIcon name={service.icon} />
                </span>
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
