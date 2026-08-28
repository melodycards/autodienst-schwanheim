import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <Link href="/" className="legal-back">Zur Startseite</Link>
      <h1>Datenschutz</h1>
      <section>
        <h2>Kontakt</h2>
        <p>
          Autodienst Schwanheim
          <br />
          Rheinlandstraße 3
          <br />
          60529 Frankfurt am Main
        </p>
        <p>
          E-Mail:{" "}
          <a href="mailto:autodienstschwanheim@gmail.com">
            autodienstschwanheim@gmail.com
          </a>
        </p>
      </section>
      <section>
        <h2>Hinweis</h2>
        <p>Weitere Datenschutzangaben werden ergänzt, sobald sie vorliegen.</p>
      </section>
    </main>
  );
}
