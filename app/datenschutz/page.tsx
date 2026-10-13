import type { Metadata } from "next";
import Link from "next/link";
import { pageSeo } from "../seo";

export const metadata: Metadata = pageSeo(
  "/datenschutz",
  "Datenschutz | Autodienst Schwanheim",
  "Datenschutzerklärung von Autodienst Schwanheim in Frankfurt am Main.",
);

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <Link href="/" className="legal-back">Zur Startseite</Link>
      <p className="legal-kicker">Datenschutzerklärung</p>
      <h1>Datenschutz</h1>

      <section>
        <h2>Verantwortlicher und Kontakt</h2>
        <p>
          Wir informieren Sie hier über die Verarbeitung personenbezogener Daten
          beim Besuch von www.autodienst-schwanheim.de und bei Ihrer Kontaktaufnahme
          mit unserer Werkstatt. Verantwortlich für diese Website ist:
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
          <a href="mailto:autodienstschwanheim@gmail.com">autodienstschwanheim@gmail.com</a>
        </p>
        <p>
          Unter diesen Kontaktdaten können Sie auch Ihre Datenschutzrechte geltend
          machen. Die auf der Website genannten Ansprechpartner sind Kontaktpersonen
          der Werkstatt; damit ist keine Aussage über eine Inhaber- oder
          Geschäftsführerstellung verbunden.
        </p>
      </section>

      <section>
        <h2>Hosting und technische Zugriffsdaten</h2>
        <p>
          Unsere Website wird bei Vercel Inc., 440 N Barranca Avenue #4133,
          Covina, CA 91723, USA, betrieben. Das Hosting erfolgt über das
          Vercel-Pro-Konto unseres technischen Dienstleisters. Beim Abruf der
          Website verarbeitet Vercel insbesondere Ihre IP-Adresse, den
          Abrufzeitpunkt, die angeforderte Adresse und die vom Browser übermittelten
          Browser- und Geräteinformationen. Hinzu kommen technische Informationen
          über die Antwort des Servers und auftretende Fehler. Diese Daten werden
          für die Auslieferung der Seiten sowie in Betriebs- und
          Sicherheitsprotokollen verarbeitet.
        </p>
        <p>
          Die Verarbeitung dient der Bereitstellung, Stabilität, Fehlerbehebung und
          Sicherheit unserer Website, insbesondere der Erkennung und Abwehr
          missbräuchlicher Zugriffe. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO;
          unser berechtigtes Interesse ist ein zuverlässiger und geschützter
          Websitebetrieb. Empfänger sind Vercel, die für den Hostingbetrieb
          eingesetzten Unterauftragnehmer sowie unser administrativ berechtigter
          technischer Dienstleister.
        </p>
        <p>
          Zugriffsdaten werden für die Bearbeitung des Abrufs und darüber hinaus
          nur so lange vorgehalten, wie sie für den jeweiligen Betriebs- oder
          Sicherheitszweck benötigt werden. Die Verfügbarkeit von Protokollen
          richtet sich nach der Protokollart, dem gebuchten Vercel-Dienst und dessen
          Aufbewahrungsregeln. Bei einem konkreten Fehler oder Sicherheitsvorfall
          ist die notwendige Aufklärung beziehungsweise Beweissicherung maßgeblich.
          Eine darüber hinausgehende Speicherung setzt einen fortbestehenden Zweck
          oder eine gesetzliche Pflicht voraus; danach sind die Daten zu löschen
          oder zu anonymisieren.
        </p>
      </section>

      <section>
        <h2>Internationale Verarbeitung bei Vercel</h2>
        <p>
          Vercel nutzt eine internationale Infrastruktur. Personenbezogene Daten
          werden dabei auch in den USA und in weiteren Ländern verarbeitet, in
          denen Vercel oder seine Unterauftragnehmer tätig sind. Eine ausschließlich
          deutsche oder europäische Speicherung wird nicht zugesichert.
        </p>
        <p>
          Vercel erklärt in seinen Datenschutzhinweisen seine Zertifizierung unter
          dem EU-US Data Privacy Framework. Für davon erfasste Übermittlungen an
          zertifizierte US-Unternehmen kommt der Angemessenheitsbeschluss nach
          Art. 45 DSGVO zur Anwendung. Das Data Processing Addendum von Vercel
          sieht für einschlägige Übermittlungen außerdem die
          EU-Standardvertragsklauseln als Garantien nach Art. 46 DSGVO vor.
          Welche Grundlage greift, hängt vom Empfänger und der jeweiligen
          Übermittlung ab. Die Anbieterbedingungen ersetzen nicht die erforderliche
          vertragliche Regelung der Auftragsverarbeitung nach Art. 28 DSGVO.
        </p>
        <p>
          Einzelheiten zu Verarbeitungen, Empfängern und Schutzmaßnahmen finden Sie
          in den <a href="https://vercel.com/legal/privacy-notice" rel="noreferrer">Datenschutzhinweisen von Vercel</a>{" "}
          und im <a href="https://vercel.com/legal/dpa" rel="noreferrer">Vercel Data Processing Addendum</a>.
          Informationen zu den für Ihre Daten einschlägigen Garantien können Sie
          auch über unsere oben genannten Kontaktdaten anfordern.
        </p>
      </section>

      <section>
        <h2>Technische Betreuung</h2>
        <p>
          Die technische Betreuung der Website und die Verwaltung des Hostingkontos
          erfolgen durch einen externen Dienstleister für Webdesign und
          Websitebetrieb mit Sitz in Deutschland. Aufgrund seiner administrativen
          Berechtigungen kann dieser Dienstleister auf die bei Vercel verfügbaren
          technischen Zugriffs- und Sicherheitsprotokolle zugreifen. Dies dient dem
          Betrieb, der Fehlerbehebung und der Absicherung der Website. Verantwortlich
          für die Website und die Bearbeitung Ihrer Anfragen bleibt Autodienst Schwanheim.
        </p>
        <p>
          Die Verarbeitung technischer Protokolldaten erfolgt zu den beim Hosting
          genannten Zwecken auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO und nach
          den dort beschriebenen Speicherkriterien. Die Hostingverwaltung beinhaltet
          keinen Zugriff auf unser E-Mail-Postfach oder auf die dort eingehenden
          Kundenanfragen.
        </p>
        <p>
          Der Quellcode wird über GitHub verwaltet. Beim normalen Besuch der
          Website werden keine Inhalte von GitHub nachgeladen. Die Domain ist
          über United Domains registriert; United Domains betreibt nicht unser
          E-Mail-Postfach. Die Registrierung einer Domain ist von der nachfolgend
          beschriebenen E-Mail-Verarbeitung getrennt.
        </p>
      </section>

      <section>
        <h2>Kontakt per E-Mail und Telefon</h2>
        <p>
          Wenn Sie uns kontaktieren, verarbeiten wir Ihre Kontaktdaten, den Inhalt
          Ihrer Nachricht oder Ihres Gesprächs sowie gegebenenfalls mitgeteilte
          Fahrzeugdaten, etwa Kennzeichen, Fahrzeugtyp oder Angaben zu einer
          Störung. Wir verwenden diese Informationen, um Ihre Anfrage zu beantworten,
          Termine und Arbeiten abzustimmen und Werkstattaufträge zu bearbeiten.
          Die Angaben erhalten die mit Ihrer Anfrage oder Ihrem Auftrag befassten
          Personen in unserer Werkstatt sowie die für den gewählten Kontaktweg
          beteiligten E-Mail- beziehungsweise Telekommunikationsanbieter.
        </p>
        <p>
          Soweit es um einen Auftrag oder vorvertragliche Maßnahmen auf Ihre
          Anfrage geht, ist Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage.
          Sonstige Anfragen bearbeiten wir auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO, um berechtigte Anliegen beantworten zu können. Soweit wir
          geschäftliche Unterlagen aufgrund handels- oder steuerrechtlicher
          Vorschriften aufbewahren müssen, beruht dies auf Art. 6 Abs. 1 lit. c DSGVO.
        </p>
        <p>
          Anfragen ohne weiteren Geschäftsbezug werden nach abschließender
          Bearbeitung gelöscht, sobald keine Rückfragen oder berechtigten
          Nachweiszwecke mehr bestehen. Bei auftragsbezogenen Unterlagen bestimmen
          die Durchführung des Auftrags, gesetzliche Aufbewahrungspflichten
          insbesondere nach HGB und AO sowie gegebenenfalls die Geltendmachung
          oder Abwehr von Ansprüchen die Speicherdauer. Die jeweilige Frist richtet
          sich nach der Unterlagenart und ihrem gesetzlichen Fristbeginn. Bis zum
          Wegfall einer Aufbewahrungspflicht wird die Nutzung auf den verbleibenden
          Zweck beschränkt.
        </p>
        <p>
          Die Telefon- und E-Mail-Schaltflächen öffnen die zugehörige Anwendung
          Ihres Geräts. Die eigentliche Kontaktaufnahme erfolgt erst, wenn Sie
          anrufen oder eine Nachricht versenden. Auf der Website gibt es kein
          Kontaktformular und keine Online-Terminbuchung. Sie müssen uns keine
          Nachricht senden, um die Website zu nutzen. Für eine Antwort oder einen
          Auftrag benötigen wir jedoch die dafür erforderlichen Kontakt- und
          Sachangaben.
        </p>
      </section>

      <section>
        <h2>E-Mail-Verarbeitung über Gmail</h2>
        <p>
          Unser Postfach autodienstschwanheim@gmail.com gehört der Werkstatt und
          wird über Gmail betrieben. Anbieter für Nutzer im Europäischen
          Wirtschaftsraum ist Google Ireland Limited, Gordon House, Barrow Street,
          Dublin 4, Irland. Google verarbeitet bei der Übermittlung und Speicherung
          von E-Mails auch Absender- und Empfängeradressen, Nachrichteninhalte,
          Anhänge und technische Verbindungsdaten. Die Nutzung zur Bearbeitung
          Ihrer Nachricht erfolgt zu den zuvor genannten Zwecken und Rechtsgrundlagen.
        </p>
        <p>
          Bei Google findet auch eine Verarbeitung in den USA und anderen Ländern
          statt. Google beschreibt für internationale Übermittlungen
          Angemessenheitsbeschlüsse einschließlich des EU-US Data Privacy Framework
          für erfasste zertifizierte Empfänger sowie Standardvertragsklauseln für
          Übermittlungen ohne solchen Beschluss. Details zur eigenen Verarbeitung
          und Speicherung durch Google stehen in der{" "}
          <a href="https://policies.google.com/privacy?hl=de&amp;gl=de" rel="noreferrer">Google-Datenschutzerklärung</a>{" "}
          und den <a href="https://policies.google.com/privacy/frameworks?hl=de" rel="noreferrer">Hinweisen zu Datenübermittlungen</a>.
          Für die von uns aufbewahrte Korrespondenz gelten die oben genannten
          Lösch- und Aufbewahrungskriterien.
        </p>
      </section>

      <section>
        <h2>Externer Routenlink zu Google Maps</h2>
        <p>
          Die Schaltfläche „Zur Werkstatt“ und der Adresslink öffnen Google Maps
          mit unserer Werkstattadresse in einem neuen Tab beziehungsweise in Ihrer
          Kartenanwendung. Es ist keine Karte eingebettet. Durch die Routenfunktion
          werden vor dem Anklicken keine Verbindungen zu Google aufgebaut. Unsere
          Website fragt auch keinen Gerätestandort ab.
        </p>
        <p>
          Erst beim Öffnen des Links erhält Google die für den Aufruf erforderlichen
          Daten, insbesondere IP-Adresse, Browserinformationen und die Zieladresse.
          Bei Nutzung weiterer Maps-Funktionen können eigene Eingaben, ein
          angemeldetes Google-Konto oder eine von Ihnen freigegebene Standortangabe
          hinzukommen. Für diesen externen Dienst gelten die oben verlinkten
          Google-Datenschutzhinweise einschließlich der dort beschriebenen
          Rechtsgrundlagen, Speicherregeln und internationalen Übermittlungen.
          Wir stellen den Link im berechtigten Interesse an einer einfachen
          Anfahrtshilfe bereit, Art. 6 Abs. 1 lit. f DSGVO. Wir speichern weder Ihre
          Route noch Ihren Standort.
        </p>
      </section>

      <section>
        <h2>Intro und Browser-Speicherung</h2>
        <p>
          Die Intro-Steuerung liest im Session-Speicher Ihres Browsers den Eintrag
          „autodienst:intro-seen“ und setzt dort automatisch den Wert „1“.
          Dadurch wird das Intro bei interner Navigation nicht erneut gestartet;
          ein vollständiges Neuladen der Startseite startet es erneut. Der Eintrag
          enthält keine individuelle Kennung und wird nicht an unseren Server
          übertragen oder für Werbung und Besuchsanalysen verwendet.
        </p>
        <p>
          Der Eintrag bleibt während der jeweiligen Tab-Sitzung erhalten und wird
          normalerweise mit deren Ende entfernt. Eine Sitzungswiederherstellung
          des Browsers kann ihn wiederherstellen. Sie können ihn durch Löschen
          der Website-Daten selbst entfernen. Ist der Session-Speicher gesperrt,
          bleibt die Website nutzbar; die Steuerung innerhalb des geöffneten
          Dokuments erfolgt zusätzlich im Arbeitsspeicher.
        </p>
        <p>
          Zweck ist die Vermeidung wiederholter Intro-Anzeigen beim Wechsel
          zwischen Seiten. Soweit dabei personenbezogene Daten verarbeitet werden,
          dient dies unserem Interesse an einer störungsarmen Navigation nach
          Art. 6 Abs. 1 lit. f DSGVO. Davon getrennt gelten für das Speichern und
          Auslesen auf Ihrem Gerät die Anforderungen des § 25 TDDDG; ein
          berechtigtes Interesse ersetzt eine danach erforderliche Einwilligung
          nicht. Für diesen Intro-Eintrag wird derzeit keine Einwilligung abgefragt.
        </p>
      </section>

      <section>
        <h2>Cookies, Schriften und weitere Einbindungen</h2>
        <p>
          Die Website setzt im eigenen Anwendungscode keine Cookies und nutzt
          keinen dauerhaften Local Storage. Es sind keine Analyse- oder
          Marketingdienste, Tracking-Pixel, Social-Media-Plugins oder externen
          Schriftendienste eingebunden. Die Schriften stammen aus den auf Ihrem
          Gerät verfügbaren Systemschriften; Bilder und Videos werden über
          dieselbe Website ausgeliefert. Der beschriebene Session-Speicher ist
          davon zu unterscheiden. Technische Zugriffsdaten beim Hosting fallen
          unabhängig davon an.
        </p>
        <p>
          Externe Links, etwa der Webdesign-Hinweis im Footer, laden beim bloßen
          Anzeigen der Seite keine Inhalte des verlinkten Anbieters. Beim Öffnen
          eines solchen Links gelten die Datenschutzinformationen der Zielseite.
        </p>
      </section>

      <section>
        <h2>Ihre Rechte und Ihr Widerspruchsrecht</h2>
        <p>
          Nach Maßgabe der gesetzlichen Voraussetzungen haben Sie das Recht auf
          Auskunft über Ihre personenbezogenen Daten (Art. 15 DSGVO), Berichtigung
          (Art. 16), Löschung (Art. 17) und Einschränkung der Verarbeitung (Art. 18).
          Bei automatisierter Verarbeitung auf Grundlage einer Einwilligung oder
          eines Vertrags besteht außerdem das Recht auf Datenübertragbarkeit
          (Art. 20). Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können
          Sie diese jederzeit für die Zukunft widerrufen; die Rechtmäßigkeit der
          bisherigen Verarbeitung bleibt davon unberührt.
        </p>
        <p>
          <strong>Widerspruch nach Art. 21 DSGVO:</strong> Gegen Verarbeitungen auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO können Sie aus Gründen, die sich
          aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch einlegen.
          Wir verarbeiten die betreffenden Daten dann nicht weiter, sofern wir
          keine zwingenden schutzwürdigen Gründe nachweisen können, die Ihre
          Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung der
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient.
          Wenden Sie sich dazu an die oben genannte Werkstattadresse.
        </p>
      </section>

      <section>
        <h2>Beschwerde bei einer Aufsichtsbehörde</h2>
        <p>
          Sie können sich nach Art. 77 DSGVO bei einer Datenschutzaufsichtsbehörde
          beschweren, insbesondere an Ihrem Aufenthaltsort, Ihrem Arbeitsplatz
          oder am Ort des vermuteten Verstoßes. Für unsere Werkstatt in Hessen ist
          der Hessische Beauftragte für Datenschutz und Informationsfreiheit
          zuständig, Postfach 3163, 65021 Wiesbaden.
        </p>
        <p>
          E-Mail: <a href="mailto:poststelle@datenschutz.hessen.de">poststelle@datenschutz.hessen.de</a>
          <br />
          <a href="https://datenschutz.hessen.de/service/beschwerde-uebermitteln" rel="noreferrer">Beschwerde beim Hessischen Datenschutzbeauftragten übermitteln</a>
        </p>
      </section>

      <section>
        <h2>Sicherheit</h2>
        <p>
          Die Website verwendet HTTPS/TLS, um Daten bei der Übertragung zwischen
          Ihrem Browser und dem Hostingdienst zu verschlüsseln. Dies schützt nicht
          automatisch eine anschließend über eine andere Anwendung versandte
          E-Mail Ende zu Ende. Bitte übermitteln Sie nur die für Ihr Anliegen
          erforderlichen Informationen.
        </p>
        <p>
          Die für Entwicklung und Hostingverwaltung genutzten GitHub- und
          Vercel-Konten sind durch Zwei-Faktor-Authentifizierung abgesichert.
          Diese Maßnahme erschwert unberechtigte Zugriffe, ist aber weder eine
          Garantie vollständiger Sicherheit noch allein ein Nachweis der
          Datenschutzkonformität.
        </p>
        <p className="legal-muted">Stand: Oktober 2026</p>
      </section>
    </main>
  );
}
