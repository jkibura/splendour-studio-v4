import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { services, servicesPageContent } from "@/data/services";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = servicesPageContent.metadata;

export default function ServicesPage() {
  return (
    <>
      <PageIntro {...servicesPageContent.intro} />
      <section className="section services-page-section">
        <Container>
          <div className="service-detail-list">
            {services.map((service) => (
              <article className="service-detail" id={service.slug} key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-detail-main"><h2>{service.title}</h2><p>{service.description}</p></div>
                <ul>{service.details.map((detail) => <li key={detail}><Check size={15} />{detail}</li>)}</ul>
                <Link href="/contact" className="text-link">{servicesPageContent.discussAction} <ArrowUpRight size={16} /></Link>
              </article>
            ))}
          </div>
          <p className="services-note">{servicesPageContent.note}</p>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
