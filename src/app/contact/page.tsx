import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/data/site";
import { contactContent } from "@/data/contact";

export const metadata: Metadata = contactContent.metadata;

export default function ContactPage() {
  const { intro, aside } = contactContent;
  return (
    <>
      <PageIntro {...intro} />
      <section className="section contact-page-section">
        <Container>
          <div className="contact-layout">
            <div className="contact-aside">
              <p className="eyebrow">{aside.eyebrow}</p><h2>{aside.title}</h2><p>{aside.description}</p>
              <a href={`mailto:${site.email}`} className="contact-detail"><Mail size={18} /><span><small>{aside.emailLabel}</small>{site.email}</span></a>
              <div className="contact-detail"><MapPin size={18} /><span><small>{aside.locationLabel}</small>{site.location} {aside.locationSuffix}</span></div>
              <div className="contact-detail"><MessageCircle size={18} /><span><small>{aside.whatsappLabel}</small>{aside.whatsappFallback}</span></div>
            </div>
            <div className="contact-form-wrap"><ContactForm /></div>
          </div>
        </Container>
      </section>
    </>
  );
}
