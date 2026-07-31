"use client";

import { Code2, Database, GitBranch, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "@/data/site";

const icons = [Code2, Database, GitBranch, Wrench];

export function AboutSkills() {
  return <>
    <section className="section about" id="about">
      <SectionHeading label="ABOUT.MD" title="Turning real workflows into useful software." />
      <div className="about-layout">
        <div className="document-card"><div className="document-bar"><span>about.md</span><span>modified</span></div><div className="document-copy"><span className="line-number">01</span><p>I’m Micaela, a Software Development graduate focused on turning ideas and real-world workflows into practical, user-friendly software.</p><span className="line-number">02</span><p>My current goal is to strengthen my experience by building complete applications—from planning and interface design through development, debugging, testing, and deployment.</p><span className="line-number">03</span><p>I’m especially interested in frontend development, business software, database-backed systems, troubleshooting, and interfaces that are organized and easy to use.</p></div></div>
        <dl className="profile-card"><div><dt>Name</dt><dd>Micaela Quizon</dd></div><div><dt>Location</dt><dd>California, USA</dd></div><div><dt>Education</dt><dd>Associate Degree in Software Development</dd></div><div><dt>Current focus</dt><dd>Modern Web Application Development</dd></div><div><dt>Interested in</dt><dd>Frontend · Full-stack fundamentals · Business applications · UI engineering · Troubleshooting</dd></div></dl>
      </div>
    </section>
    <section className="section" id="skills">
      <SectionHeading label="02 / TECHNICAL SKILLS" title="A growing toolkit, clearly labeled." copy="A practical foundation today, with modern full-stack skills developing through hands-on work." />
      <div className="skill-grid">{skillGroups.map((group, index) => { const Icon = icons[index]; return <article className="skill-card" key={group.title}><div className="skill-card-head"><Icon size={20}/><span>0{index + 1}</span></div><h3>{group.title}</h3><p>{group.detail}</p><ul>{group.skills.map(([name, status]) => <li key={name}><span>{name}</span><small>{status}</small></li>)}</ul></article> })}</div>
    </section>
  </>;
}
