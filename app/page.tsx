import Link from "next/link";
import { Icon, type IconName } from "./components/Icon";
import { contact } from "./data/contact";
import { serviceGroups, servicesByTitle } from "./data/services";
import Image from "next/image";
import { IntroOverlay } from "./IntroOverlay";


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


const workshopPhotos = {
  "radmontage": { alt: "Mitarbeiter bei der Radmontage in der Werkstatt", width: 1672, height: 941, position: "65% 50%" },
  "standort-ueberblick": { alt: "Überblick über den Werkstatthof und das Gebäude von Autodienst Schwanheim", width: 1672, height: 941, position: "50% 55%" },
  "werkstatt-eingang": { alt: "Eingang und Beschilderung von Autodienst Schwanheim mit Fahrzeugen vor den Werkstatttoren", width: 1672, height: 941, position: "50% 45%" },
  "hebebuehne": { alt: "Fahrzeug auf der Hebebühne mit sichtbarem Unterboden und Werkstattausstattung", width: 1672, height: 941, position: "50% 40%" },
  "werkstatt-team": { alt: "Zwei Mitarbeiter bei Arbeiten am Unterboden eines angehobenen Fahrzeugs", width: 1672, height: 941, position: "50% 55%" },
  "bremsanlage": { alt: "Bremsscheibe und roter Bremssattel am angehobenen Fahrzeug", width: 1448, height: 1086, position: "42% 40%" },
  "werkstatthallen": { alt: "Geöffnete blaue Werkstatttore mit Blick auf Arbeitsplätze und Ausstattung", width: 1672, height: 941, position: "50% 50%" },
  "werkstattalltag": { alt: "Mitarbeiter und Fahrzeuge bei Arbeiten vor den geöffneten Werkstatttoren", width: 1672, height: 941, position: "65% 55%" },
};

type WorkshopPhotoName = keyof typeof workshopPhotos;
const gallery: WorkshopPhotoName[] = ["standort-ueberblick", "werkstatthallen", "werkstattalltag"];
const servicePhotos: Partial<Record<string, WorkshopPhotoName>> = {
  "Wartung und Inspektion": "hebebuehne",
  "Reifen und Fahrwerk": "radmontage",
  "Bremsen und Abgasanlage": "bremsanlage",
};

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



function srcSet(name: string, widths: number[], extension: "avif" | "webp") {
  return widths
    .map((width) => `/assets/optimized/${name}-${width}.${extension} ${width}w`)
    .join(", ");
}

function WorkshopPhoto({ name, sizes }: { name: WorkshopPhotoName; sizes: string }) {
  const photo = workshopPhotos[name];
  const asset = `foto-${name}`;
  return (
    <picture className="workshop-photo">
      <source type="image/avif" srcSet={srcSet(asset, [480, 768, 1200, 1440], "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(asset, [480, 768, 1200, 1440], "webp")} sizes={sizes} />
      <Image
        src={`/assets/optimized/${asset}-1200.webp`}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        style={{ objectPosition: photo.position }}
        loading="lazy"
        decoding="async"
        unoptimized
      />
    </picture>
  );
}


function HeroImage() {
  return (
    <picture className="hero-picture">
      <source
        media="(max-width: 680px)"
        type="image/avif"
        srcSet={srcSet("hero-mobile", [480, 720, 941], "avif")}
        sizes="100vw"
      />
      <source
        media="(max-width: 680px)"
        type="image/webp"
        srcSet={srcSet("hero-mobile", [480, 720, 941], "webp")}
        sizes="100vw"
      />
      <source
        media="(max-width: 680px)"
        srcSet="/hero-mobile.png"
        type="image/png"
      />
      <source
        media="(min-width: 681px)"
        type="image/avif"
        srcSet={srcSet("hero-desktop", [960, 1200, 1448], "avif")}
        sizes="100vw"
      />
      <source
        media="(min-width: 681px)"
        type="image/webp"
        srcSet={srcSet("hero-desktop", [960, 1200, 1448], "webp")}
        sizes="100vw"
      />
      <img
        className="hero-image"
        src="/hero-desktop.jpg"
        alt="Außenansicht von Autodienst Schwanheim mit Fahrzeugen vor der Werkstatt"
        width="1448"
        height="1086"
        fetchPriority="high"
        decoding="async"
      />
    </picture>
  );
}

function WorkshopWatermark({ skyline = false }: { skyline?: boolean }) {
  return (
    <div className={`workshop-watermark${skyline ? " workshop-watermark-skyline" : ""}`} aria-hidden="true">
      {skyline ? (
        <svg viewBox="0 0 640 320" fill="none">
          <path d="M20 260h38V150h32v110h28V108h38v152h32V74l16-30 16 30v186h34V130h42v130h28V62h8V24h8v38h22v198h32V110h40v150h24V166h46v94h28V140h36v120h54" />
          <path d="M188 74h32M204 44V12M254 154h42M254 180h42M324 94h38M324 126h38M394 138h40M394 166h40M118 132h38M118 160h38M0 284c170-20 342-20 640 6M0 305c170-20 342-20 640 6" />
        </svg>
      ) : (
        <>
          <Icon name="wrench" />
          <Icon name="wheel" />
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <IntroOverlay />


      <section id="start" className="hero" aria-labelledby="hero-title">
        <HeroImage />
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-copy">
            <p className="kicker">Autowerkstatt in Frankfurt-Schwanheim</p>
            <h1 id="hero-title">
              <span className="hero-title-main">Autodienst Schwanheim</span>
              <span>in Frankfurt</span>
            </h1>
            <p className="hero-subtitle">Ihr moderner Kfz-Service in Frankfurt-Schwanheim</p>
          </div>
          <div className="hero-footer">
            <div className="hero-actions" aria-label="Kontaktaktionen">
              <a className="button button-primary" href={contact.landlineHref}>
                <Icon name="phone" />
                <span>Jetzt anrufen</span>
              </a>
              <a
                className="button button-secondary"
                href={contact.mapsHref}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="map" />
                <span>Zur Werkstatt</span>
                <Icon name="arrow" />
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
        </div>
      </section>

      <section id="leistungen" className="service-section" aria-labelledby="service-title">
        <WorkshopWatermark />
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
                      <Link href={`/leistungen/${servicesByTitle[service].slug}`}>
                        <Icon name="check" />
                        <span>{service}{service === "TÜV & AU-Service" && <small>TÜV jeden Mittwoch</small>}</span>
                        <Icon name="arrow" />
                      </Link>
                    </li>
                  ))}
                </ul>
                {servicePhotos[group.title] && (
                  <div className="service-photo">
                    <WorkshopPhoto name={servicePhotos[group.title]!} sizes="(max-width: 680px) calc(100vw - 76px), (max-width: 1240px) 85vw, 1024px" />
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="werkstatt" className="workshop-section" aria-labelledby="workshop-title">
        <WorkshopWatermark skyline />
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
          <WorkshopPhoto name="werkstatt-team" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 980px) 90vw, 540px" />
        </div>
      </section>

      <section id="galerie" className="gallery-section" aria-labelledby="gallery-title">
        <div className="section-head">
          <p className="kicker">Galerie</p>
          <h2 id="gallery-title">Echte Einblicke in den Standort.</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((name, index) => (
            <figure className={index === 0 ? "gallery-large reveal" : "reveal"} key={name}>
              <WorkshopPhoto name={name} sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1240px) 86vw, 1080px" />
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
              <Icon name="phone" />
              <span>Jetzt anrufen</span>
            </a>
            <a
              className="button button-secondary"
              href={contact.mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="map" />
              <span>Zur Werkstatt</span>
            </a>
            <a className="button button-glass" href={contact.emailHref}>
              <Icon name="mail" />
              <span>E-Mail senden</span>
            </a>
          </div>
        </div>

        <div className="contact-location">
          <WorkshopPhoto name="werkstatt-eingang" sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 1400px) 90vw, 1240px" />
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

    </main>
  );
}
