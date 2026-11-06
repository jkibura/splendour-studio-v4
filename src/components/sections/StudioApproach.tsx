import { ArrowUpRight, Compass, Layers3, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { homeContent } from "@/data/home";

const icons = { compass: Compass, layers: Layers3, handshake: HeartHandshake };

export function StudioApproach() {
  const { approach } = homeContent;
  return (
    <section className="section section-approach">
      <Container>
        <div className="approach-layout">
          <div className="approach-intro">
            <p className="eyebrow">{approach.eyebrow}</p>
            <h2>{approach.title[0]} <span>{approach.title[1]}</span></h2>
            <p>{approach.description}</p>
            <Button href="/about" variant="secondary">{approach.action}</Button>
          </div>
          <div className="principles-list">
            {approach.principles.map((item, index) => {
              const Icon = icons[item.icon];
              return (
                <div className="principle" key={item.title}>
                  <div className="principle-icon"><Icon size={21} strokeWidth={1.7} /></div>
                  <div><span className="principle-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div>
                  <ArrowUpRight className="principle-arrow" size={18} />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
