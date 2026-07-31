"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, GitBranch } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects, journey } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function ProjectsJourney() {
  const reduced = useReducedMotion();
  return <>
    <section className="section" id="projects">
      <SectionHeading label="03 / CURRENTLY BUILDING" title="Practical systems, built in public." copy="Projects designed to demonstrate real workflows, application architecture, and honest problem-solving." />
      <div className="project-list">{projects.map((project, index) => <motion.article initial={reduced ? false : { opacity: 0, x: -24 }} whileInView={reduced ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .55, delay: index * .08 }} whileHover={reduced ? undefined : { x: 8 }} className="project-card" key={project.name}>
        <div className="project-index">{project.index}</div>
        <div className="project-main"><div className="project-title-row"><h3>{project.name}</h3><span className={`status-badge status-${project.status.toLowerCase().replace(" ", "-")}`}>{project.status}</span></div><p>{project.description}</p><ul className="feature-list">{project.features.map(feature => <li key={feature}><Check size={14}/>{feature}</li>)}</ul><div className="stack-row">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div>
        <div className="project-actions"><Link className="project-learn-more" href={`/projects/${project.slug}`}>Learn more <ArrowRight size={16}/></Link>{project.repo ? <a href={project.repo} target="_blank" rel="noreferrer"><GitBranch size={16}/> Repository</a> : <span aria-disabled="true">Repository · private for now</span>}<ArrowUpRight className="project-arrow"/></div>
      </motion.article>)}</div>
    </section>
    <section className="section journey" id="journey">
      <SectionHeading label="04 / DEVELOPMENT JOURNEY" title="Learning through complete builds." copy="No invented dates—just a clear progression from foundations to production-style projects." />
      <div className="timeline">{journey.map(([title, copy], index) => <motion.article initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .5 }} key={title}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div><p className="timeline-meta">PHASE {String(index + 1).padStart(2, "0")}</p><h3>{title}</h3><p>{copy}</p></div></motion.article>)}</div>
    </section>
  </>;
}
