import { learning } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function LearningPrinciples() {
  const principles = [["Clarity", "Code and interfaces should be easy to understand."], ["Reliability", "Applications should handle errors and unexpected states gracefully."], ["Usability", "Users should not have to struggle to understand the product."], ["Continuous Learning", "Every project should improve both the software and the developer behind it."]];
  return <>
    <section className="section" id="learning"><SectionHeading label="05 / LEARNING LOG" title="Notes from the workbench." copy="Documenting what I learn while building real applications."/><div className="learning-grid">{learning.map(([topic, status, copy], i) => <article key={topic}><span className="learning-index">{String(i + 1).padStart(2, "0")}</span><small>{status}</small><h3>{topic}</h3><p>{copy}</p><span className="coming-soon">Article coming later ↗</span></article>)}</div></section>
    <section className="principles section"><p className="section-label">DEVELOPMENT PRINCIPLES</p><blockquote>Good software is not only functional.<br/><em>It should also be understandable, reliable, accessible, and easy to use.</em></blockquote><div className="principle-grid">{principles.map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
  </>;
}
