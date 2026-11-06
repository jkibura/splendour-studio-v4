import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { homeContent } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesPreview() {
  const content = homeContent.services;
  return (
    <section className="section section-services">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        <div className="services-list">
          {services.map((service) => (
            <Link href="/services" className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow"><ArrowUpRight size={20} /></span>
            </Link>
          ))}
        </div>
        <Link href="/services" className="text-link services-more">{content.action} <ArrowUpRight size={16} /></Link>
      </Container>
    </section>
  );
}
