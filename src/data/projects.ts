import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "keli",
    slug: "keli-ecommerce",
    name: "Keli",
    category: "E-commerce",
    summary: "An online shopping experience for household and lifestyle products.",
    description:
      "An e-commerce experience created to help customers explore household and lifestyle products online. This project represents SPLENDOUR's first client engagement and an important step in the studio's journey.",
    image: "/images/projects/keli-cover.svg",
    imageAlt: "Abstract preview artwork for the Keli e-commerce project",
    liveUrl: "https://keli-ecom.vercel.app",
    featured: true,
    services: ["E-commerce design", "Frontend development"],
    year: "2026",
    theme: "peach"
  },
  {
    id: "psychologist",
    slug: "psychologist-website",
    name: "Psychologist",
    category: "Professional services",
    summary: "A calm, approachable digital presence for a psychology practice.",
    description:
      "A professional website concept for a psychology practice, with an emphasis on clarity, approachability and helping visitors understand the services available.",
    image: "/images/projects/psychologist-cover.svg",
    imageAlt: "Abstract preview artwork for a psychologist website",
    liveUrl: "https://psyd-two.vercel.app",
    featured: true,
    services: ["Website design", "Frontend development"],
    year: "2026",
    theme: "blue"
  },
  {
    id: "cleaning",
    slug: "cleaning-company-website",
    name: "Cleaning company",
    category: "Business website",
    summary: "A clear online presence for a cleaning services business.",
    description:
      "A business website built to present cleaning services clearly and make it easier for prospective customers to understand the offering and get in touch.",
    image: "/images/projects/cleaning-cover.svg",
    imageAlt: "Abstract preview artwork for a cleaning company website",
    liveUrl: "https://cleaning-4.vercel.app",
    featured: true,
    services: ["Website design", "Frontend development"],
    year: "2026",
    theme: "green"
  }
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}


export const workPageContent = {
  metadata: {
    title: "Selected work",
    description: "Explore selected digital projects by SPLENDOUR Studio."
  },
  intro: {
    eyebrow: "Selected work",
    title: "Work shaped around purpose.",
    description: "A growing collection of digital experiences, each approached with the needs of the business and its customers in mind."
  }
} as const;
