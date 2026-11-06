import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { homeContent } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SelectedWork() {
  const content = homeContent.selectedWork;
  return (
    <section className="section section-work" id="selected-work">
      <Container>
        <div className="section-topline">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
          <Link href="/work" className="text-link section-side-link">{content.action} <ArrowUpRight size={16} /></Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <Link href={`/work/${project.slug}`} className={`project-card project-card-${project.theme}`} key={project.id}>
              <div className="project-image-wrap">
                <Image src={project.image} alt={project.imageAlt} width={1200} height={675} className="project-image" />
                <span className="project-index">0{index + 1}</span>
                <span className="project-open"><ArrowUpRight size={18} /></span>
              </div>
              <div className="project-meta">
                <div><h3>{project.name}</h3><p>{project.summary}</p></div>
                <span className="project-category">{project.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
