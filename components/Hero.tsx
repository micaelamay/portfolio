"use client";

import { ArrowDownRight, ArrowUpRight, Code2, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export function Hero() {
  const reduced = useReducedMotion();
  const enter = (delay: number) => reduced ? {} : {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <section className="hero section-grid" id="home">
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
      <div className="hero-copy">
        <motion.div {...enter(.05)} className="eyebrow"><span className="status-dot" /> Open to opportunities <span className="muted-separator">/</span> <MapPin size={14} /> California</motion.div>
        <motion.p {...enter(.12)} className="hero-kicker">SOFTWARE DEVELOPER</motion.p>
        <motion.h1 {...enter(.18)}>Micaela<br/><em>Quizon</em></motion.h1>
        <motion.p {...enter(.28)} className="hero-lead">I build practical web applications and digital systems that solve real-world problems.</motion.p>
        <motion.p {...enter(.34)} className="hero-support">Software Development graduate strengthening my skills through hands-on projects in modern frontend development, backend systems, databases, APIs, authentication, deployment, and troubleshooting.</motion.p>
        <motion.div {...enter(.4)} className="hero-actions">
          <a className="button" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
          <a className="button button-secondary" href={siteConfig.github} target="_blank" rel="noreferrer"><Code2 size={17} /> View GitHub</a>
          <a className="text-link" href={siteConfig.resume}>Download resume <ArrowUpRight size={14} /></a>
        </motion.div>
        <motion.div {...enter(.47)} className="tech-row" aria-label="Technologies used"><span>TypeScript</span><span>React</span><span>Next.js</span><span>Tailwind CSS</span><span>Git</span><span>Vercel</span></motion.div>
      </div>
      <div className="hero-visual">
        <motion.div initial={reduced ? false : { opacity: 0, scale: .92, y: 26 }} animate={reduced ? undefined : { opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: .2, ease: [0.22, 1, 0.36, 1] }} className="portrait-stage">
          <span className="portrait-code" aria-hidden="true">01<br/>MQ<br/>DEV</span>
          <Image src="/micaela-quizon-portrait.png" width={767} height={1020} sizes="(max-width: 680px) 90vw, (max-width: 980px) 560px, 470px" priority alt="Micaela Quizon working on a laptop" />
          <div className="portrait-label"><span className="status-dot"/><strong>Micaela Quizon</strong><small>Software Developer · California</small></div>
        </motion.div>
        <motion.aside initial={reduced ? false : { opacity: 0, x: 42, rotate: 1.5 }} animate={reduced ? undefined : { opacity: 1, x: 0, rotate: 0 }} transition={{ duration: .9, delay: .42, ease: [0.22, 1, 0.36, 1] }} className="console" aria-label="Current developer status">
          <div className="console-bar"><span/><span/><span/><code>current_status.json</code></div>
          <pre>{`{
  "role": "Software Developer",
  "location": "California",
  "currently_building":
    "Developer Portfolio",
  "status": "Open to opportunities"
}`}</pre>
          <div className="console-footer"><span className="status-dot" /> system ready <span>UTF-8</span></div>
          <span className="console-scan" aria-hidden="true" />
        </motion.aside>
      </div>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDownRight size={18}/></a>
    </section>
  );
}
