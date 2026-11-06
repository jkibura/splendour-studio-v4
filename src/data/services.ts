import type { Service } from "@/types";

export const services: Service[] = [
  {
    number: "01",
    slug: "website-design-development",
    title: "Website design & development",
    description:
      "A considered online presence that communicates your value clearly, builds trust and gives customers a better way to engage with your business.",
    details: [
      "Business and audience discovery",
      "Website structure and user experience",
      "Responsive interface design",
      "Modern frontend development",
      "Search-friendly technical foundations",
      "Launch support"
    ]
  },
  {
    number: "02",
    slug: "ecommerce-solutions",
    title: "E-commerce solutions",
    description:
      "Thoughtful online stores designed to make discovering products, making decisions and completing purchases feel straightforward.",
    details: [
      "Storefront design and development",
      "Product and category presentation",
      "Responsive shopping experience",
      "Cart and checkout integration",
      "Payment and delivery integration planning",
      "Store handover and guidance"
    ]
  },
  {
    number: "03",
    slug: "custom-digital-solutions",
    title: "Custom digital solutions",
    description:
      "Purpose-built digital tools and experiences for businesses with needs that go beyond a standard website.",
    details: [
      "Business requirements discovery",
      "Custom interfaces and workflows",
      "API and third-party integrations",
      "Internal tools and dashboards",
      "Ongoing improvement and support"
    ]
  }
];


export const servicesPageContent = {
  metadata: {
    title: "Services",
    description: "Website design, e-commerce and custom digital solutions by SPLENDOUR Studio."
  },
  intro: {
    eyebrow: "Our services",
    title: "The right digital work for what comes next.",
    description: "We create useful, considered digital experiences that help businesses communicate clearly and move forward with confidence."
  },
  discussAction: "Discuss this service",
  note: "Not sure which direction is right? That's okay. We'll start with a conversation about your business and what you're trying to achieve."
} as const;
