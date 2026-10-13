import type { Metadata } from "next";
import Link from "next/link";
import { pageSeo } from "../seo";

export const metadata: Metadata = pageSeo(
  "/impressum",
  "Impressum | Autodienst Schwanheim",
  "Impressum und Anbieterkennzeichnung von Autodienst Schwanheim in Frankfurt am Main.",
);

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <Link href="/" className="legal-back">Zur Startseite</Link>
      <p className="legal-kicker">Anbieterkennzeichnung</p>
      <h1>Impressum</h1>
      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          <strong>Autodienst Schwanheim</strong>
          <br />
          Rheinlandstraße 3
          <br />
          60529 Frankfurt am Main
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+496915392723">069 15 39 27 23</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:autodienstschwanheim@gmail.com">
            autodienstschwanheim@gmail.com
          </a>
        </p>
        <p>
          Ansprechpartner:
          <br />
          Ömür Ete, Mobil: <a href="tel:+491749608500">0174 9608500</a>
          <br />
          Muhammed Göküzüm, Mobil:{" "}
          <a href="tel:+491632507342">0163 25 07 342</a>
        </p>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Wir erstellen und pflegen die Inhalte unserer Website mit Sorgfalt.
          Unsere Verantwortung für eigene Inhalte richtet sich nach den
          gesetzlichen Vorschriften.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Unsere Website enthält Links zu externen Websites. Deren Inhalte werden
          vom jeweiligen Anbieter verantwortet. Wenn uns konkrete Rechtsverletzungen
          bei einem verlinkten Angebot bekannt werden, prüfen wir den Hinweis und
          entfernen den Link erforderlichenfalls.
        </p>
      </section>

      <section>
        <h2>Urheberrecht</h2>
        <p>
          Die auf dieser Website veröffentlichten Inhalte, Fotos, Videos und Gestaltungen
          unterliegen dem deutschen Urheberrecht. Jede Verwertung außerhalb der Grenzen
          des Urheberrechts bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers.
        </p>
      </section>

      <p className="legal-muted">Stand: Oktober 2026</p>
    </main>
  );
}
