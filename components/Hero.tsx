"use client";

import { ArrowDownRight, ArrowUpRight, Code2, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="hero section-grid" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> Open to opportunities <span className="muted-separator">/</span> <MapPin size={14} /> California</div>
        <p className="hero-kicker">SOFTWARE DEVELOPER</p>
        <h1>Micaela<br/><em>Quizon</em></h1>
        <p className="hero-lead">I build practical web applications and digital systems that solve real-world problems.</p>
        <p className="hero-support">Software Development graduate strengthening my skills through hands-on projects in modern frontend development, backend systems, databases, APIs, authentication, deployment, and troubleshooting.</p>
        <div className="hero-actions">
          <a className="button" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
          <a className="button button-secondary" href={siteConfig.github} target="_blank" rel="noreferrer"><Code2 size={17} /> View GitHub</a>
          <a className="text-link" href={siteConfig.resume}>Download resume <ArrowUpRight size={14} /></a>
        </div>
        <div className="tech-row" aria-label="Technologies used"><span>TypeScript</span><span>React</span><span>Next.js</span><span>Tailwind CSS</span><span>Git</span><span>Vercel</span></div>
      </div>
      <aside className="console" aria-label="Current developer status">
        <div className="console-bar"><span/><span/><span/><code>current_status.json</code></div>
        <pre>{`{
  "role": "Software Developer",
  "location": "California",
  "currently_building":
    "Developer Portfolio",
  "status": "Open to opportunities"
}`}</pre>
        <div className="console-footer"><span className="status-dot" /> system ready <span>UTF-8</span></div>
      </aside>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDownRight size={18}/></a>
    </section>
  );
}
