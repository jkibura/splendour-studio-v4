import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { StudioApproach } from "@/components/sections/StudioApproach";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { seoContent } from "@/data/seo";

export const metadata: Metadata = { title: seoContent.home.title, description: seoContent.home.description };

export default function HomePage() {
  return <><Hero /><SelectedWork /><ServicesPreview /><StudioApproach /><ProcessPreview /><ContactCTA /></>;
}
