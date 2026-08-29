/* eslint-disable @next/next/no-img-element */
import type { ImgHTMLAttributes, ReactNode } from "react";
import { IntroOverlay } from "./IntroOverlay";

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
    phone: "0174 9608500",
    href: "tel:+491749608500",
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
  { label: "Schnell & günstig", icon: "boltTag" },
  { label: "Kompetenter Service", icon: "shieldCheck" },
];

const serviceGroups = [
  {
    title: "Wartung und Inspektion",
    icon: "wrench",
    description:
      "Regelmäßige Arbeiten für Werterhalt, Zuverlässigkeit und eine klare Einschätzung des Fahrzeugzustands.",
    services: ["TÜV & AU-Service", "Inspektion", "Ölwechsel"],
  },
  {
    title: "Diagnose und Elektronik",
    icon: "scan",
    description:
      "Systematische Prüfung elektronischer Fahrzeugsysteme mit nachvollziehbarer Diagnose.",
    services: ["Fahrzeugdiagnose", "Fehlerauslesen", "Motordiagnose"],
  },
  {
    title: "Reifen und Fahrwerk",
    icon: "wheel",
    description:
      "Service rund um Reifen, Räder und die präzise Ausrichtung des Fahrwerks.",
    services: ["Reifenservice", "Radeinstellung"],
  },
  {
    title: "Motor und Getriebe",
    icon: "engine",
    description:
      "Gezielte Prüfung und Arbeiten an zentralen Komponenten des Antriebsstrangs.",
    services: ["Batterie und Akku", "Getriebe"],
  },
  {
    title: "Bremsen und Abgasanlage",
    icon: "brake",
    description:
      "Kontrolle und Service an sicherheitsrelevanten Komponenten und der Abgasanlage.",
    services: ["Bremsenservice", "Auspuff"],
  },
  {
    title: "Klima und Filter",
    icon: "snow",
    description:
      "Für Luftqualität, Komfort und funktionierende Klimatisierung im Fahrzeug.",
    services: ["Klima-Check", "Austausch von Luft- und Innenraumfiltern"],
  },
];

const gallery = [
  {
    src: "/werkstatt-detail-1.jpg",
    optimizedName: "werkstatt-detail-1",
    alt: "Außenbereich von Autodienst Schwanheim mit Fahrzeugen vor dem Betrieb",
    width: 2200,
    height: 1650,
  },
  {
    src: "/werkstatt-service-new.jpg",
    optimizedName: "werkstatt-service-new",
    alt: "Werkstattbereich von Autodienst Schwanheim mit geöffneten Toren",
    width: 1206,
    height: 879,
  },
  {
    src: "/werkstatt-detail-2.jpg",
    optimizedName: "werkstatt-detail-2",
    alt: "Werkstattalltag bei Autodienst Schwanheim mit Fahrzeugen auf dem Hof",
    width: 2200,
    height: 1650,
  },
];

const processSteps = [
  ["Kontakt", "Anrufen, schreiben oder direkt die Route starten."],
  ["Prüfung", "Fahrzeug ansehen und den nächsten Schritt abstimmen."],
  ["Reparatur", "Die vereinbarten Arbeiten werden nachvollziehbar durchgeführt."],
  ["Abholung", "Fahrzeug abholen und wieder mobil sein."],
];

const openingHours = [
  ["Mo – Fr", "08:30 – 18:00"],
  ["Samstag", "09:00 – 13:00"],
  ["Sonntag", "Geschlossen"],
];

type IconName =
  | "arrow"
  | "battery"
  | "boltTag"
  | "brake"
  | "calendar"
  | "check"
  | "engine"
  | "mail"
  | "map"
  | "phone"
  | "scan"
  | "shieldCheck"
  | "snow"
  | "wheel"
  | "wrench";

function Icon({ name }: { name: IconName }) {
  const content: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    battery: (
      <>
        <path d="M6 9h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" />
        <path d="M20 12v4M9 14h5M11.5 11.5v5" />
      </>
    ),
    boltTag: (
      <>
        <path d="M4 12.5V5h7.5L21 14.5 14.5 21 4 12.5Z" />
        <path d="m13 8-3 5h4l-3 5" />
        <circle cx="8" cy="8" r="1.2" />
      </>
    ),
    brake: (
      <>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="2.4" />
        <path d="M18.5 5.5c2 1.8 3.1 4.2 3.1 6.8 0 3.2-1.6 6-4.1 7.7l-2.2-4a4.5 4.5 0 0 0 1.7-3.6 4.8 4.8 0 0 0-1.7-3.7l3.2-3.2Z" />
      </>
    ),
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16M8 14h3M13 14h3M8 17h3" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12.3 2.2 2.2 4.8-5.2" />
      </>
    ),
    engine: (
      <>
        <path d="M7 13h3V9h5v4h3l3 3v4h-4l-2 2h-5l-2-2H4v-4l3-3Z" />
        <path d="M10 9V6h6M4 17H2M22 17h-2" />
      </>
    ),
    mail: (
      <>
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="m4.5 7.5 7.5 5.2 7.5-5.2" />
      </>
    ),
    map: (
      <>
        <path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.3" />
      </>
    ),
    phone: (
      <path d="M7 4h3l1.4 4-2 1.2a11 11 0 0 0 5.4 5.4l1.2-2 4 1.4v3a2 2 0 0 1-2.1 2A15.9 15.9 0 0 1 5 6.1 2 2 0 0 1 7 4Z" />
    ),
    scan: (
      <>
        <path d="M7 8h10a3 3 0 0 1 3 3v3H4v-3a3 3 0 0 1 3-3Z" />
        <path d="M6 14v4h12v-4M8 18v2M12 18v2M16 18v2M8 11h8" />
      </>
    ),
    shieldCheck: (
      <>
        <path d="M12 3 20 6.5v5.8c0 4.4-3.1 7.5-8 8.7-4.9-1.2-8-4.3-8-8.7V6.5L12 3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    snow: (
      <>
        <path d="M12 3v18M5.6 6.5l12.8 11M18.4 6.5l-12.8 11" />
        <path d="m9 5.2 3 2.1 3-2.1M9 18.8l3-2.1 3 2.1M4.9 10.3l3.4.4.5-3.4M19.1 13.7l-3.4-.4-.5 3.4M19.1 10.3l-3.4.4-.5-3.4M4.9 13.7l3.4-.4.5 3.4" />
      </>
    ),
    wheel: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="2.2" />
        <path d="M12 3.5v6.3M12 14.2v6.3M3.5 12h6.3M14.2 12h6.3M6 6l4.4 4.4M13.6 13.6 18 18M18 6l-4.4 4.4M10.4 13.6 6 18" />
      </>
    ),
    wrench: (
      <path d="M14.8 6.2a5 5 0 0 0 6.1 6.1L12 21.2a2.6 2.6 0 0 1-3.7-3.7l8.9-8.9a5 5 0 0 1-2.4-2.4Z" />
    ),
  };

  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none">
      {content[name]}
    </svg>
  );
}

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "sizes"> & {
  fallbackSrc: string;
  name: string;
  pictureClassName?: string;
  sizes: string;
  widths: number[];
};

function srcSet(name: string, widths: number[], extension: "avif" | "webp") {
  return widths
    .map((width) => `/assets/optimized/${name}-${width}.${extension} ${width}w`)
    .join(", ");
}

function ResponsiveImage({
  fallbackSrc,
  name,
  pictureClassName,
  sizes,
  widths,
  ...imageProps
}: ResponsiveImageProps) {
  return (
    <picture className={pictureClassName}>
      <source type="image/avif" srcSet={srcSet(name, widths, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(name, widths, "webp")} sizes={sizes} />
      <img {...imageProps} src={fallbackSrc} />
    </picture>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <IntroOverlay />

      <header className="topbar" aria-label="Hauptnavigation">
        <a className="brand" href="#start" aria-label="Autodienst Schwanheim">
          <ResponsiveImage
            name="autodienst-logo"
            widths={[160, 240, 320]}
            sizes="(max-width: 680px) 75px, 99px"
            fallbackSrc="/autodienst-logo.png"
            alt=""
            width="156"
            height="104"
          />
          <span>
            <strong>Autodienst Schwanheim</strong>
            <small>Frankfurt-Schwanheim</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Seitenbereiche">
          <a href="#leistungen">Leistungen</a>
          <a href="#werkstatt">Werkstatt</a>
          <a href="#galerie">Galerie</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section id="start" className="hero" aria-labelledby="hero-title">
        <ResponsiveImage
          pictureClassName="hero-picture"
          name="werkstatt-aussen"
          widths={[768, 960, 1536]}
          sizes="100vw"
          fallbackSrc="/werkstatt-aussen.png"
          className="hero-image"
          alt="Außenansicht von Autodienst Schwanheim"
          width="1536"
          height="1024"
          fetchPriority="high"
        />
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-content">
          <p className="kicker">Autowerkstatt in Frankfurt-Schwanheim</p>
          <h1 id="hero-title">
            Autodienst
            <span>Schwanheim</span>
          </h1>
          <p className="hero-subtitle">Ihr moderner Kfz-Service in Frankfurt-Schwanheim</p>
          <div className="hero-actions" aria-label="Kontaktaktionen">
            <a className="button button-primary" href={contact.landlineHref}>
              Jetzt anrufen
            </a>
            <a
              className="button button-secondary"
              href={contact.mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              Route starten
            </a>
          </div>
          <div className="proof-line" aria-label="Kurzvorteile">
            {benefits.map((benefit) => (
              <span key={benefit.label}>
                <Icon name={benefit.icon as IconName} />
                {benefit.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="leistungen" className="service-section" aria-labelledby="service-title">
        <div className="section-head">
          <p className="kicker">Service / Leistungen</p>
          <h2 id="service-title">Kfz-Service</h2>
        </div>

        <div className="service-accordion">
          {serviceGroups.map((group, index) => (
            <details className="service-panel" key={group.title} open={index === 0}>
              <summary>
                <span className="service-title">
                  <Icon name={group.icon as IconName} />
                  {group.title}
                </span>
                <span className="summary-arrow">
                  <Icon name="arrow" />
                </span>
              </summary>
              <div className="service-detail">
                <p>{group.description}</p>
                <ul>
                  {group.services.map((service) => (
                    <li key={service}>
                      <Icon name="check" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="werkstatt" className="workshop-section" aria-labelledby="workshop-title">
        <div className="workshop-copy reveal">
          <p className="kicker">Ihre Werkstatt in Schwanheim</p>
          <h2 id="workshop-title">Technischer Service mit direkter persönlicher Abstimmung.</h2>
          <p>
            Autodienst Schwanheim ist in der Rheinlandstraße 3 in Frankfurt am Main
            erreichbar. Sie können telefonisch Kontakt aufnehmen, eine Route starten
            oder sich vor Ort zum passenden nächsten Schritt abstimmen.
          </p>
          <div className="workshop-facts">
            <span>
              <Icon name="phone" />
              Persönliche Beratung
            </span>
            <span>
              <Icon name="scan" />
              Moderne Fahrzeugdiagnose
            </span>
            <span>
              <Icon name="wrench" />
              Umfassender Kfz-Service
            </span>
          </div>
        </div>
        <div className="workshop-media reveal">
          <ResponsiveImage
            name="werkstatt-komprimiert"
            widths={[640, 960, 1024]}
            sizes="(max-width: 680px) calc(100vw - 36px), 47vw"
            fallbackSrc="/werkstatt-komprimiert.webp"
            alt="Servicefahrzeug von Autodienst Schwanheim vor der Werkstatt"
            width="1024"
            height="768"
            loading="lazy"
          />
        </div>
      </section>

      <section id="galerie" className="gallery-section" aria-labelledby="gallery-title">
        <div className="section-head">
          <p className="kicker">Galerie</p>
          <h2 id="gallery-title">Echte Einblicke in den Standort.</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure className={index === 0 ? "gallery-large reveal" : "reveal"} key={image.src}>
              <ResponsiveImage
                name={image.optimizedName}
                widths={[640, 960, 1200]}
                sizes="(max-width: 680px) calc(100vw - 36px), 96vw"
                fallbackSrc={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="section-head">
          <p className="kicker">Ablauf</p>
          <h2 id="process-title">Kontakt. Prüfung. Reparatur. Abholung.</h2>
        </div>
        <div className="process-line">
          {processSteps.map(([title, text]) => (
            <div className="process-step reveal" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kontakt" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-stage">
          <div>
            <p className="kicker">Kontakt</p>
            <h2 id="contact-title">Direkt erreichen oder Route starten.</h2>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href={contact.landlineHref}>
              Jetzt anrufen
            </a>
            <a
              className="button button-secondary"
              href={contact.mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              Route starten
            </a>
            <a className="button button-glass" href={contact.emailHref}>
              E-Mail senden
            </a>
          </div>
        </div>

        <div className="contact-layout">
          <div className="contact-video" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/contact-video.mov" type="video/quicktime" />
            </video>
          </div>
          <div className="contact-data">
            <a href={contact.landlineHref}>
              <Icon name="phone" />
              <span>Telefon</span>
              <strong>{contact.landline}</strong>
            </a>
            <a className="mail-link" href={contact.emailHref}>
              <Icon name="mail" />
              <span>E-Mail</span>
              <strong>{contact.email}</strong>
            </a>
            <a href={contact.mapsHref} target="_blank" rel="noreferrer">
              <Icon name="map" />
              <span>Adresse</span>
              <strong>
                <span className="keep-together">{contact.street}</span>
                <br />
                {contact.city}
              </strong>
            </a>
          </div>
          <div className="hours-module">
            <h3>Öffnungszeiten</h3>
            <dl>
              {openingHours.map(([day, time]) => (
                <div key={day}>
                  <dt>{day}</dt>
                  <dd>{time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="people-module">
            <h3>Ansprechpartner</h3>
            {people.map((person) => (
              <a href={person.href} key={person.name}>
                <span>{person.label}</span>
                <strong>{person.name}</strong>
                <em>{person.phone}</em>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#start" aria-label="Autodienst Schwanheim">
          <ResponsiveImage
            name="autodienst-logo"
            widths={[160, 240, 320]}
            sizes="81px"
            fallbackSrc="/autodienst-logo.png"
            alt=""
            width="118"
            height="79"
            loading="lazy"
          />
          <span>
            <strong>Autodienst Schwanheim</strong>
            <small>
              {contact.street} · {contact.city}
            </small>
          </span>
        </a>
        <nav aria-label="Rechtliches">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href={contact.emailHref}>{contact.email}</a>
        </nav>
      </footer>
    </main>
  );
}
