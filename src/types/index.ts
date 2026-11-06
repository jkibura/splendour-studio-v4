export type Project = {
  id: string;
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  liveUrl: string;
  featured: boolean;
  services: string[];
  year: string;
  theme: "blue" | "peach" | "green";
};

export type Service = {
  number: string;
  slug: string;
  title: string;
  description: string;
  details: string[];
};
