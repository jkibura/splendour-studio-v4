import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { seoContent } from "@/data/seo";

export default function NotFound() {
  const content = seoContent.notFound;
  return (
    <section className="not-found">
      <p className="eyebrow">{content.eyebrow}</p><h1>{content.title}</h1><p>{content.description}</p>
      <Link href="/" className="button button-primary"><ArrowLeft size={16} /> {content.action}</Link>
    </section>
  );
}
