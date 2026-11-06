import { site } from "@/data/site";

export function organizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.siteUrl,
    email: site.email,
    areaServed: {
      "@type": "Country",
      name: site.location
    },
    knowsAbout: [
      "Website design",
      "Web development",
      "E-commerce solutions",
      "Custom digital solutions"
    ]
  };
}
