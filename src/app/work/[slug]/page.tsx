import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { projectDetailContent as content } from "@/data/projectDetail";
import { seoContent } from "@/data/seo";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: seoContent.projectNotFoundTitle };
  return { title: project.name, description: project.summary, openGraph: { title: `${project.name} — ${site.name}`, description: project.summary, images: [project.image] } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <section className="project-detail-page">
      <Container>
        <Link href="/work" className="back-link"><ArrowLeft size={15} /> {content.backAction}</Link>
        <div className="project-detail-heading"><p className="eyebrow">{project.category} · {project.year}</p><h1>{project.name}</h1><p>{project.summary}</p></div>
        <div className={`project-detail-visual project-card-${project.theme}`}><Image src={project.image} alt={project.imageAlt} width={1600} height={900} /></div>
        <div className="project-detail-content">
          <div><p className="eyebrow">{content.overviewEyebrow}</p><h2>{content.overviewTitle}</h2></div>
          <div><p className="project-detail-description">{project.description}</p><div className="project-services"><span>{content.servicesLabel}</span>{project.services.map((service) => <i key={service}>{service}</i>)}</div><Button href={project.liveUrl} external variant="secondary">{content.visitAction}</Button></div>
        </div>
        <div className="project-next"><span>{content.nextProjectPrompt}</span><Link href="/contact">{content.nextProjectAction} <ArrowUpRight size={17} /></Link></div>
      </Container>
    </section>
  );
}
