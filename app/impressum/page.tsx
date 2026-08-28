import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <Link href="/" className="legal-back">Zur Startseite</Link>
      <h1>Impressum</h1>
      <section>
        <h2>Autodienst Schwanheim</h2>
        <p>
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
      </section>
      <section>
        <h2>Hinweis</h2>
        <p>Weitere rechtlich erforderliche Angaben werden ergänzt, sobald sie vorliegen.</p>
      </section>
    </main>
  );
}
