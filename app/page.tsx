const contact = {
  landline: "069 15 39 27 23",
  landlineHref: "tel:+496915392723",
  email: "autodienstschwanheim@gmail.com",
  emailHref: "mailto:autodienstschwanheim@gmail.com",
  addressLines: ["Rheinlandstraße 3", "60529 Frankfurt am Main"],
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

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Hauptnavigation">
        <a className="brand" href="#start" aria-label="Autodienst Schwanheim">
          <span className="logo-shell">
            <img src="/autodienst-logo.png" alt="" />
          </span>
          <span>
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

      <section id="start" className="hero">
        <img
          className="hero-photo"
          src="/werkstatt-aussen.png"
          alt="Außenansicht von Autodienst Schwanheim mit Fahrzeugen vor der Werkstatt"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <img
            className="hero-logo"
            src="/autodienst-logo.png"
            alt="Autodienst Schwanheim Logo"
          />
          <p className="eyebrow">Autowerkstatt in Frankfurt-Schwanheim</p>
          <h1>Autodienst Schwanheim</h1>
          <p className="hero-copy">
            Kompetenter Kfz-Service in der Rheinlandstraße 3. Direkt anrufen,
            Route starten oder die Leistungen der Werkstatt auf einen Blick
            ansehen.
          </p>
          <div className="hero-actions" aria-label="Kontaktaktionen">
            <a className="button primary" href={contact.landlineHref}>
              Jetzt anrufen
            </a>
            <a
              className="button secondary"
              href={contact.mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              Route starten
            </a>
          </div>
        </div>
      </section>

      <section className="quick-info" aria-label="Kurzinfos">
        <article>
          <span>Telefon</span>
          <a href={contact.landlineHref}>{contact.landline}</a>
        </article>
        <article>
          <span>E-Mail</span>
          <a href={contact.emailHref}>{contact.email}</a>
        </article>
        <article>
          <span>Adresse</span>
          <p>
            {contact.addressLines[0]}
            <br />
            {contact.addressLines[1]}
          </p>
        </article>
      </section>

      <section className="intro-section" aria-labelledby="intro-title">
        <div>
          <p className="section-label">Ihre Werkstatt</p>
          <h2 id="intro-title">Schnelle Hilfe, klare Wege, direkter Kontakt.</h2>
        </div>
        <div className="benefit-list" aria-label="Vorteile">
          {benefits.map((benefit) => (
            <p key={benefit}>{benefit}</p>
          ))}
        </div>
      </section>

      <section id="leistungen" className="services-section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="section-label">Service / Leistungen</p>
          <h2 id="services-title">Alles übersichtlich auf einen Blick.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service}>
              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="bilder" className="photo-feature" aria-labelledby="photos-title">
        <div className="photo-copy">
          <p className="section-label">Werkstattbilder</p>
          <h2 id="photos-title">Ein realer Blick auf den Standort.</h2>
          <p>
            Klare Werkstattatmosphäre, direkte Zufahrt und ein Auftritt, der
            den Standort in Frankfurt-Schwanheim hochwertig präsentiert.
          </p>
        </div>
        <div className="photo-gallery" aria-label="Werkstattfotos">
          <figure className="workshop-image">
            <img
              src="/werkstatt-service.png"
              alt="Werkstattbereich von Autodienst Schwanheim mit geöffneten Toren"
            />
          </figure>
          <figure className="gallery-image">
            <img
              src="/werkstatt-detail-1.jpg"
              alt="Außenbereich von Autodienst Schwanheim mit Fahrzeugen vor dem Betrieb"
            />
          </figure>
          <figure className="gallery-image">
            <img
              src="/werkstatt-detail-2.jpg"
              alt="Werkstattalltag bei Autodienst Schwanheim mit Fahrzeugen auf dem Hof"
            />
          </figure>
        </div>
      </section>

      <section id="kontakt" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="section-label">Kontakt</p>
          <h2 id="contact-title">Anrufen, schreiben oder direkt hinfinden.</h2>
          <div className="contact-actions">
            <a className="button primary" href={contact.landlineHref}>
              Jetzt anrufen
            </a>
            <a
              className="button dark"
              href={contact.mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              Route starten
            </a>
            <a className="button light" href={contact.emailHref}>
              E-Mail senden
            </a>
          </div>
        </div>
        <div className="contact-panel">
          <div className="contact-logo">
            <img src="/autodienst-logo.png" alt="Autodienst Schwanheim Logo" />
          </div>
          <div className="people-grid">
            {people.map((person) => (
              <article className="person-card" key={person.name}>
                <span>Ansprechpartner</span>
                <h3>{person.name}</h3>
                <p>{person.label}</p>
                <a href={person.href}>{person.phone}</a>
              </article>
            ))}
          </div>
          <div className="address-card">
            <span>Festnetz</span>
            <a href={contact.landlineHref}>{contact.landline}</a>
            <span>E-Mail</span>
            <a href={contact.emailHref}>{contact.email}</a>
            <span>Adresse</span>
            <p>
              {contact.addressLines[0]}
              <br />
              {contact.addressLines[1]}
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer" aria-label="Footer">
        <a className="footer-brand" href="#start" aria-label="Autodienst Schwanheim">
          <span className="logo-shell footer-logo">
            <img src="/autodienst-logo.png" alt="" />
          </span>
          <span>
            <strong>Autodienst Schwanheim</strong>
            <small>{contact.addressLines.join(" · ")}</small>
          </span>
        </a>
        <div className="footer-actions">
          <a href={contact.landlineHref}>{contact.landline}</a>
          <a href={contact.emailHref}>{contact.email}</a>
          <a href={contact.mapsHref} target="_blank" rel="noreferrer">
            Route starten
          </a>
        </div>
      </footer>
    </main>
  );
}
