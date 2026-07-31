"use client";

import { ArrowUpRight, Check, GitBranch } from "lucide-react";
import { projects, journey } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function ProjectsJourney() {
  return <>
    <section className="section" id="projects">
      <SectionHeading label="03 / CURRENTLY BUILDING" title="Practical systems, built in public." copy="Projects designed to demonstrate real workflows, application architecture, and honest problem-solving." />
      <div className="project-list">{projects.map(project => <article className="project-card" key={project.name}><div className="project-index">{project.index}</div><div className="project-main"><div className="project-title-row"><h3>{project.name}</h3><span className={`status-badge status-${project.status.toLowerCase().replace(" ", "-")}`}>{project.status}</span></div><p>{project.description}</p><ul className="feature-list">{project.features.map(feature => <li key={feature}><Check size={14}/>{feature}</li>)}</ul><div className="stack-row">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div><div className="project-actions">{project.repo ? <a href={project.repo} target="_blank" rel="noreferrer"><GitBranch size={16}/> Repository</a> : <span aria-disabled="true">Repository · soon</span>}<span>Development notes · soon</span><ArrowUpRight className="project-arrow"/></div></article>)}</div>
    </section>
    <section className="section journey" id="journey">
      <SectionHeading label="04 / DEVELOPMENT JOURNEY" title="Learning through complete builds." copy="No invented dates—just a clear progression from foundations to production-style projects." />
      <div className="timeline">{journey.map(([title, copy], index) => <article key={title}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div><p className="timeline-meta">PHASE {String(index + 1).padStart(2, "0")}</p><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </section>
  </>;
}
