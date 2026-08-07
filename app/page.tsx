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
  "Mit oder ohne Terminvereinbarung",
  "Schnell & günstig",
  "Kompetenter Service",
];

const services = [
  "TÜV + AU-Vorfahrten",
  "Inspektion",
  "Ölwechsel",
  "Reifenservice",
  "Fahrzeugdiagnose",
  "Fehlerauslesen",
  "Motordiagnose",
  "Klima-Check",
  "Kfz-Aufbereitung inklusive Reinigung per Hand",
  "Fahrzeuglackierungen",
  "Fahrzeugbeschriftungen",
];

const longServices = new Set([
  "Kfz-Aufbereitung inklusive Reinigung per Hand",
  "Fahrzeuglackierungen",
  "Fahrzeugbeschriftungen",
]);

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
              className="button button-ghost"
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
            <p key={benefit}>
              <span aria-hidden="true" />
              {benefit}
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
              className={`service-item ${longServices.has(service) ? "service-wide" : ""}`}
              key={service}
            >
              <span aria-hidden="true" />
              <p>{service}</p>
            </div>
          ))}
        </div>
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
              className="button button-ghost"
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
