import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Autodienst Schwanheim",
  description:
    "Impressum und Anbieterkennzeichnung von Autodienst Schwanheim in Frankfurt am Main.",
};

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
        <p>
          Rechtsform: <span className="legal-placeholder">[bitte ergänzen]</span>
          <br />
          Vertretungsberechtigte Person:{" "}
          <span className="legal-placeholder">[bitte ergänzen]</span>
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
        <h2>Register, Steuern und Aufsicht</h2>
        <p>
          Registereintrag:{" "}
          <span className="legal-placeholder">
            [bitte ergänzen, falls vorhanden]
          </span>
          <br />
          Registernummer:{" "}
          <span className="legal-placeholder">
            [bitte ergänzen, falls vorhanden]
          </span>
          <br />
          Umsatzsteuer-ID oder Wirtschafts-ID:{" "}
          <span className="legal-placeholder">
            [bitte ergänzen, falls vorhanden]
          </span>
          <br />
          Zuständige Aufsichtsbehörde:{" "}
          <span className="legal-placeholder">
            [bitte ergänzen, falls erforderlich]
          </span>
        </p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          Verantwortlich im Sinne des § 18 Abs. 2 MStV, sofern journalistisch-redaktionelle Inhalte angeboten werden:
          <br />
          <span className="legal-placeholder">[bitte ergänzen]</span>
        </p>
      </section>

      <section>
        <h2>Streitbeilegung</h2>
        <p>
          Angabe zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle:{" "}
          <span className="legal-placeholder">[bitte ergänzen]</span>
        </p>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen
          werden. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Diese Website kann Links zu externen Websites Dritter enthalten. Auf deren
          Inhalte besteht kein Einfluss. Für fremde Inhalte wird daher keine Gewähr
          übernommen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber verantwortlich.
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

      <section>
        <h2>Hinweis zu fehlenden Angaben</h2>
        <p>
          Einzelne rechtlich relevante Betreiberangaben sind noch als Platzhalter markiert
          und müssen mit den tatsächlichen Unternehmensdaten ergänzt werden.
        </p>
        <p className="legal-muted">Stand: August 2026</p>
      </section>
    </main>
  );
}
