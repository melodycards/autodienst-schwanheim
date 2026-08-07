const contact = {
  phone: "069 15392723",
  phoneHref: "tel:+496915392723",
  addressLines: ["Rheinlandstraße 3", "60529 Frankfurt am Main"],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Rheinlandstra%C3%9Fe%203%2C%2060529%20Frankfurt%20am%20Main",
};

const placeholderCards = [
  {
    kicker: "Leistungen",
    title: "Details werden ergänzt",
    text: "Eine verbindliche Leistungsübersicht liegt noch nicht vor. Bis dahin bleibt dieser Bereich bewusst neutral.",
  },
  {
    kicker: "Öffnungszeiten",
    title: "Noch offen",
    text: "Die Öffnungszeiten können hier eingetragen werden, sobald sie bestätigt sind.",
  },
  {
    kicker: "Termine",
    title: "Kontakt nach Absprache",
    text: "Für konkrete Anliegen ist aktuell der telefonische Kontakt der klare nächste Schritt.",
  },
];

const trustItems = [
  "Klare Kontaktmöglichkeit",
  "Standort in Frankfurt-Schwanheim",
  "Platz für bestätigte Werkstattinformationen",
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Hauptnavigation">
        <a className="brand" href="#start" aria-label="Autodienst Schwanheim">
          <span className="brand-mark" aria-hidden="true">
            AS
          </span>
          <span>
            <strong>Autodienst Schwanheim</strong>
            <small>Frankfurt am Main</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Seitenbereiche">
          <a href="#kontakt">Kontakt</a>
          <a href="#standort">Standort</a>
          <a href="#informationen">Informationen</a>
        </nav>
        <a className="topbar-call" href={contact.phoneHref}>
          Anrufen
        </a>
      </header>

      <section id="start" className="hero">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Autowerkstatt in Frankfurt-Schwanheim</p>
          <h1>Autodienst Schwanheim</h1>
          <p className="hero-copy">
            Moderne Startseite für eine professionelle Werkstattpräsenz mit
            klarer Adresse, direktem Telefonkontakt und neutralen Bereichen für
            noch zu bestätigende Informationen.
          </p>
          <div className="hero-actions" aria-label="Kontaktaktionen">
            <a className="button primary" href={contact.phoneHref}>
              {contact.phone}
            </a>
            <a className="button secondary" href="#standort">
              Standort ansehen
            </a>
          </div>
        </div>
      </section>

      <section className="quick-info" aria-label="Kurzinfos">
        <article>
          <span>Telefon</span>
          <a href={contact.phoneHref}>{contact.phone}</a>
        </article>
        <article>
          <span>Adresse</span>
          <p>
            {contact.addressLines[0]}
            <br />
            {contact.addressLines[1]}
          </p>
        </article>
        <article>
          <span>Status</span>
          <p>Weitere Angaben werden ergänzt</p>
        </article>
      </section>

      <section className="intro-section" aria-labelledby="intro-title">
        <div>
          <p className="section-label">Werkstattpräsenz</p>
          <h2 id="intro-title">Seriös, übersichtlich und auf den Punkt.</h2>
        </div>
        <p>
          Diese Startseite stellt die bekannten Informationen prominent dar und
          lässt bewusst Raum für später bestätigte Inhalte. So bleibt der
          Auftritt professionell, ohne unbelegte Bewertungen, Preise,
          Öffnungszeiten oder Leistungsversprechen zu verwenden.
        </p>
      </section>

      <section id="informationen" className="info-grid" aria-label="Informationen">
        {placeholderCards.map((card) => (
          <article className="info-card" key={card.kicker}>
            <p>{card.kicker}</p>
            <h3>{card.title}</h3>
            <span>{card.text}</span>
          </article>
        ))}
      </section>

      <section className="trust-band" aria-label="Schwerpunkte">
        <div>
          <p className="section-label">Aufbau</p>
          <h2>Bereit für echte Inhalte, sobald sie vorliegen.</h2>
        </div>
        <ul>
          {trustItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="standort" className="location-section" aria-labelledby="location-title">
        <div className="location-copy">
          <p className="section-label">Standort</p>
          <h2 id="location-title">Rheinlandstraße 3 in Frankfurt am Main</h2>
          <p>
            Der Standort ist für Besucherinnen und Besucher klar ausgewiesen.
            Die Routenplanung öffnet die Adresse in Google Maps.
          </p>
          <a className="button primary" href={contact.mapsHref} target="_blank" rel="noreferrer">
            Route planen
          </a>
        </div>
        <div className="address-panel" id="kontakt">
          <span>Kontakt</span>
          <h3>Autodienst Schwanheim</h3>
          <p>
            {contact.addressLines[0]}
            <br />
            {contact.addressLines[1]}
          </p>
          <a href={contact.phoneHref}>{contact.phone}</a>
        </div>
      </section>
    </main>
  );
}
