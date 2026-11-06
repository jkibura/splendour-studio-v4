import type { Metadata } from "next";
import { Compass, Eye, Handshake } from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { aboutContent } from "@/data/about";

export const metadata: Metadata = aboutContent.metadata;
const icons = { compass: Compass, eye: Eye, handshake: Handshake };

export default function AboutPage() {
  const { intro, story, values } = aboutContent;
  return (
    <>
      <PageIntro {...intro} />
      <section className="section about-story">
        <Container>
          <div className="about-story-grid">
            <p className="eyebrow">{story.eyebrow}</p>
            <div><h2>{story.title}</h2>{story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </Container>
      </section>
      <section className="section about-values">
        <Container>
          <p className="eyebrow">{values.eyebrow}</p><h2 className="about-values-heading">{values.title}</h2>
          <div className="values-grid">
            {values.items.map((item, index) => {
              const Icon = icons[item.icon];
              return <article className="value-card" key={item.title}><span>0{index + 1}</span><Icon size={24} strokeWidth={1.6} /><h3>{item.title}</h3><p>{item.text}</p></article>;
            })}
          </div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
