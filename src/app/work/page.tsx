import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, workPageContent } from "@/data/projects";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = workPageContent.metadata;

export default function WorkPage() {
  return (
    <>
      <PageIntro {...workPageContent.intro} />
      <section className="section work-page-section">
        <Container>
          <div className="project-grid">
            {projects.map((project, index) => (
              <Link href={`/work/${project.slug}`} className={`project-card project-card-${project.theme}`} key={project.id}>
                <div className="project-image-wrap"><Image src={project.image} alt={project.imageAlt} width={1200} height={675} className="project-image" /><span className="project-index">0{index + 1}</span><span className="project-open"><ArrowUpRight size={18} /></span></div>
                <div className="project-meta"><div><h2>{project.name}</h2><p>{project.summary}</p></div><span className="project-category">{project.category}</span></div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
