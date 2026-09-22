import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, servicesBySlug, serviceGroups } from "../../data/services";
import { contact } from "../../data/contact";
import { ContactActions } from "../../components/SiteChrome";
import { Icon } from "../../components/Icon";

export const dynamicParams = false;
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesBySlug[slug];
  if (!service) notFound();
  const title = `${service.title} in Frankfurt | Autodienst Schwanheim`;
  return { title, description: service.description, openGraph: { title, description: service.description }, twitter: { title, description: service.description } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesBySlug[slug];
  if (!service) notFound();
  const group = serviceGroups.find(item => item.services.includes(service.title));
  return (
    <main className="service-page">
      <div className="service-page-head">
        <Link className="back-link" href="/#leistungen">← Zur Leistungsübersicht</Link>
        <p className="kicker">{group?.title}</p>
        <h1>{service.title}</h1>
        <p className="service-intro">{service.intro}</p>
        {service.notice && <aside className="service-notice"><Icon name="calendar" /><div><strong>{service.notice}</strong><p>Bitte nehmen Sie vorher Kontakt auf, um den Termin abzustimmen.</p></div></aside>}
      </div>
      <div className="service-reading">
        <article>
          <section><h2>Wofür ist das wichtig?</h2><p>{service.purpose}</p></section>
          <section className="service-signs"><h2>Wann ist eine Prüfung sinnvoll?</h2><ul>{service.signs.map(sign => <li key={sign}><Icon name="check" /><span>{sign}</span></li>)}</ul></section>
          <section><h2>Was wird grundsätzlich geprüft oder gemacht?</h2><p>{service.checks}</p></section>
          <section><h2>Ihr nächster Schritt</h2><p>{service.next}</p></section>
        </article>
        <aside className="related-services" aria-labelledby="related-title">
          <h2 id="related-title">Verwandte Leistungen</h2>
          {service.related.map(slug => <Link key={slug} href={`/leistungen/${slug}`}><span>{servicesBySlug[slug].title}</span><Icon name="arrow" /></Link>)}
          <Link className="back-link" href="/#leistungen">Alle Leistungen ansehen</Link>
        </aside>
      </div>
      <section className="service-contact" aria-labelledby="service-contact-title">
        <div><p className="kicker">Autodienst Schwanheim</p><h2 id="service-contact-title">Persönlich abstimmen.</h2><p>{contact.street} · {contact.city}</p><a className="contact-number" href={contact.landlineHref}>{contact.landline}</a><a className="service-email" href={contact.emailHref}>{contact.email}</a></div>
        <ContactActions />
      </section>
    </main>
  );
}
