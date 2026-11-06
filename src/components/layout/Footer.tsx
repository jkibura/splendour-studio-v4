import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { footerContent } from "@/data/footer";

export function Footer() {
  const content = footerContent;
  const socialHref = (type: string) => type === "email" ? `mailto:${site.email}` : site.socials[type as keyof typeof site.socials];
  return (
    <footer className="site-footer">
      <div className="container-shell">
        <div className="footer-top">
          <div><p className="eyebrow">{content.eyebrow}</p><h2>{content.heading[0]}<br /><span>{content.heading[1]}</span></h2></div>
          <Link href="/contact" className="footer-contact-link">{content.contactAction} <ArrowUpRight size={18} /></Link>
        </div>
        <div className="footer-bottom">
          <Link href="/" className="wordmark footer-wordmark"><span className="wordmark-main">{site.shortName}</span><span className="wordmark-sub">{site.brandDescriptor}</span></Link>
          <p>{content.tagline}</p>
          <div className="footer-links">{content.links.filter((link) => link.hrefType === "email" || Boolean(site.socials[link.hrefType as keyof typeof site.socials])).map((link) => <a key={link.hrefType} href={socialHref(link.hrefType)} target={link.hrefType === "email" ? undefined : "_blank"} rel={link.hrefType === "email" ? undefined : "noreferrer"}>{link.label}</a>)}</div>
          <span className="copyright">© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
