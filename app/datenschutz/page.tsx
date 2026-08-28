import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz | Autodienst Schwanheim",
  description:
    "Datenschutzerklärung von Autodienst Schwanheim in Frankfurt am Main.",
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <Link href="/" className="legal-back">Zur Startseite</Link>
      <p className="legal-kicker">Datenschutzerklärung</p>
      <h1>Datenschutz</h1>

      <section>
        <h2>Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          <strong>Autodienst Schwanheim</strong>
          <br />
          Rheinlandstraße 3
          <br />
          60529 Frankfurt am Main
        </p>
        <p>
          Telefon: <a href="tel:+496915392723">069 15 39 27 23</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:autodienstschwanheim@gmail.com">
            autodienstschwanheim@gmail.com
          </a>
        </p>
        <p>
          Rechtsform und vertretungsberechtigte Person:{" "}
          <span className="legal-placeholder">[bitte ergänzen]</span>
        </p>
      </section>

      <section>
        <h2>Allgemeine Hinweise</h2>
        <p>
          Der Schutz personenbezogener Daten ist uns wichtig. Personenbezogene Daten
          sind alle Informationen, mit denen eine Person direkt oder indirekt
          identifiziert werden kann. Diese Datenschutzerklärung informiert darüber,
          welche Daten beim Besuch dieser Website und bei der Kontaktaufnahme
          verarbeitet werden.
        </p>
      </section>

      <section>
        <h2>Zugriffsdaten und Hosting</h2>
        <p>
          Beim Aufruf dieser Website werden durch den technischen Hosting-Anbieter
          automatisch Daten verarbeitet, die für die Bereitstellung der Website,
          Stabilität und Sicherheit erforderlich sind. Dazu können insbesondere
          IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL,
          Browsertyp, Betriebssystem, übertragene Datenmenge und Statuscodes gehören.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse
          liegt im sicheren und zuverlässigen Betrieb dieser Website.
        </p>
        <p>
          Hosting-Anbieter und Auftragsverarbeitung:{" "}
          <span className="legal-placeholder">
            [bitte Hosting-Anbieter und Vereinbarung zur Auftragsverarbeitung ergänzen]
          </span>
        </p>
      </section>

      <section>
        <h2>Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns telefonisch, per Mobiltelefon oder per E-Mail kontaktieren,
          verarbeiten wir die von Ihnen übermittelten Angaben, um Ihre Anfrage zu
          bearbeiten und mit Ihnen kommunizieren zu können. Dazu können Name,
          Telefonnummer, E-Mail-Adresse, Fahrzeuginformationen und der Inhalt Ihrer
          Anfrage gehören.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage mit
          vorvertraglichen Maßnahmen oder einem Auftrag zusammenhängt. In anderen
          Fällen erfolgt die Verarbeitung auf Grundlage unseres berechtigten Interesses
          an der Bearbeitung von Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </section>

      <section>
        <h2>Telefonlinks, E-Mail-Links und Routenfunktion</h2>
        <p>
          Diese Website enthält anklickbare Telefon- und E-Mail-Links. Beim Anklicken
          wird die jeweilige Anwendung Ihres Geräts geöffnet. Die eigentliche
          Kontaktaufnahme erfolgt erst, wenn Sie den Anruf starten oder die E-Mail
          versenden.
        </p>
        <p>
          Die Funktion „Route starten“ führt zu einem externen Kartendienst. Beim
          Anklicken verlassen Sie diese Website; der externe Anbieter kann dabei eigene
          Datenverarbeitungen vornehmen.
        </p>
      </section>

      <section>
        <h2>Session-Speicher</h2>
        <p>
          Für die Darstellung des Intro-Effekts kann im Browser ein Eintrag im
          Session-Speicher gesetzt werden. Dieser Eintrag dient ausschließlich dazu,
          die Anzeige während der aktuellen Browsersitzung zu steuern. Der Eintrag wird
          nicht für Analyse- oder Marketingzwecke verwendet.
        </p>
      </section>

      <section>
        <h2>Cookies, Analyse und Marketing</h2>
        <p>
          Nach aktuellem Stand werden auf dieser Website keine eigenen Analyse- oder
          Marketing-Cookies eingesetzt. Sollten zukünftig entsprechende Dienste
          eingebunden werden, wird diese Datenschutzerklärung angepasst und, soweit
          erforderlich, eine Einwilligung eingeholt.
        </p>
      </section>

      <section>
        <h2>Speicherdauer</h2>
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie es für die
          jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten
          bestehen. Kontaktanfragen werden gelöscht, sobald die Bearbeitung abgeschlossen
          ist und keine gesetzlichen Pflichten entgegenstehen.
        </p>
      </section>

      <section>
        <h2>Ihre Rechte</h2>
        <p>
          Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft,
          Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
          sowie Widerspruch gegen bestimmte Verarbeitungen. Wenn eine Verarbeitung auf
          Einwilligung beruht, können Sie diese Einwilligung jederzeit mit Wirkung für
          die Zukunft widerrufen.
        </p>
        <p>
          Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
          beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
          personenbezogenen Daten gegen Datenschutzrecht verstößt.
        </p>
      </section>

      <section>
        <h2>SSL- bzw. TLS-Verschlüsselung</h2>
        <p>
          Diese Website nutzt aus Sicherheitsgründen eine verschlüsselte Verbindung.
          Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
          Browsers mit „https://“ beginnt.
        </p>
      </section>

      <section>
        <h2>Aktualisierung dieser Datenschutzerklärung</h2>
        <p>
          Diese Datenschutzerklärung kann angepasst werden, wenn sich die Website, die
          eingesetzten technischen Dienste oder rechtliche Anforderungen ändern.
        </p>
        <p className="legal-muted">Stand: August 2026</p>
      </section>
    </main>
  );
}
