"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { motion } from "framer-motion";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const sections = navigation.map(([, href]) => document.querySelector(href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(`#${entry.target.id}`);
    }), { rootMargin: "-35% 0px -55%", threshold: 0 });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-shell">
        <a className="brand" href="#home" aria-label="Micaela Quizon home"><span>MQ</span><small>micaela.quizon</small></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => <a className={active === href ? "active" : ""} href={href} key={href}>{label}{active === href && <motion.span layoutId="nav-active" />}</a>)}
        </nav>
        <a className="button button-small desktop-resume" href={siteConfig.resume}><FileDown size={15} /> Resume</a>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}<span>↗</span></a>)}<a className="button" href={siteConfig.resume}><FileDown size={16} /> Download resume</a></nav>}
    </header>
  );
}
