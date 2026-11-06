import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { homeContent } from "@/data/home";

export function Hero() {
  const { hero } = homeContent;
  return (
    <section className="hero-section">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="container-shell hero-inner">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="kicker-dot" /> {hero.eyebrow}</div>
          <h1>{hero.heading[0]}<br /><span>{hero.heading[1]}</span></h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <Button href={hero.primaryAction.href}>{hero.primaryAction.label}</Button>
            <Link href={hero.secondaryAction.href} className="text-link">{hero.secondaryAction.label} <ArrowUpRight size={16} /></Link>
          </div>
          <div className="hero-footnote"><Sparkles size={15} /> {hero.footnote}</div>
        </div>
        <div className="hero-art" aria-label={hero.art.accessibleLabel}>
          <div className="art-window">
            <div className="art-window-top"><span /><span /><span /><i>{hero.art.windowLabel}</i></div>
            <div className="art-window-content">
              <div className="art-side-label">{hero.art.sideLabel[0]}<br />{hero.art.sideLabel[1]}</div>
              <div className="art-visual">
                <div className="art-ring" />
                <div className="art-block art-block-blue" />
                <div className="art-block art-block-coral" />
                <div className="art-block art-block-cream" />
                <div className="art-caption">{hero.art.caption}</div>
              </div>
            </div>
            <div className="art-window-footer">{hero.art.disciplines.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
          <div className="art-note">{hero.art.note[0]}<br />{hero.art.note[1]}</div>
        </div>
        <a href="#selected-work" className="hero-scroll"><ArrowDown size={15} /> {hero.scrollLabel}</a>
      </div>
    </section>
  );
}
