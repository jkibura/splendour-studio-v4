import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";
import { homeContent } from "@/data/home";

export function ProcessPreview() {
  const content = homeContent.process;
  return (
    <section className="section section-process">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.number}>
              <span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
