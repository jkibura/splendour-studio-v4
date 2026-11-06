"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation, navigationContent } from "@/data/navigation";
import { site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="wordmark" aria-label={navigationContent.brandAccessibleLabel} onClick={() => setOpen(false)}>
          <span className="wordmark-main">{site.shortName}</span><span className="wordmark-sub">{site.brandDescriptor}</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
        <Link href="/contact" className="nav-cta">{navigationContent.primaryAction} <ArrowUpRight size={15} aria-hidden="true" /></Link>
        <button className="menu-toggle" aria-label={open ? navigationContent.mobileCloseLabel : navigationContent.mobileOpenLabel} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${open ? "mobile-nav-open" : ""}`}>
        {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)}>{navigationContent.primaryAction} <ArrowUpRight size={16} /></Link>
        <p>{site.location} {navigationContent.locationSuffix}</p>
      </div>
    </header>
  );
}
