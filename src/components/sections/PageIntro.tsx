export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro">
      <div className="container-shell">
        <p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro-description">{description}</p>
      </div>
    </section>
  );
}
