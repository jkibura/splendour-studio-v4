import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/data/home";

export function ContactCTA() {
  const content = homeContent.contactCta;
  return (
    <section className="section section-contact-cta">
      <Container>
        <div className="contact-cta-panel">
          <div className="cta-decoration"><span /><span /><span /></div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.title[0]}<br /><span>{content.title[1]}</span></h2>
          <p>{content.description}</p>
          <Link href="/contact" className="button button-light">{content.action} <ArrowUpRight size={16} /></Link>
        </div>
      </Container>
    </section>
  );
}
