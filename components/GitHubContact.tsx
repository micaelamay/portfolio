"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, FileText, Code2, BriefcaseBusiness, Mail } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/data/site";

export function GitHubContact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); const form = new FormData(event.currentTarget); const next: Record<string, string> = {};
    if (!String(form.get("name") || "").trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(form.get("email") || ""))) next.email = "Please enter a valid email address.";
    if (String(form.get("message") || "").trim().length < 20) next.message = "Please share at least 20 characters.";
    setErrors(next);
  };
  return <>
    <section className="section github-section" id="github"><SectionHeading label="06 / GITHUB" title="The work, as it grows."/><div className="github-shell"><div className="github-profile"><Code2 size={28}/><div><span>github.com</span><h3>@micaelamay</h3><p>My GitHub is becoming a record of the projects I build, the problems I solve, and the skills I continue developing.</p><a href={siteConfig.github} target="_blank" rel="noreferrer">View profile <ArrowUpRight size={15}/></a></div></div><div className="contribution-card"><div className="contribution-head"><span>CONTRIBUTION LOG</span><small>Placeholder · API ready</small></div><div className="contribution-grid" aria-label="Placeholder contribution visualization">{Array.from({length: 84}, (_, i) => <span key={i} className={i % 11 === 0 || i % 17 === 0 ? "active" : i % 7 === 0 ? "mid" : ""}/>)}</div><p>Repositories will be featured here as projects are completed. Server-side GitHub fetching can be connected without exposing private tokens.</p></div></div></section>
    <section className="section contact" id="contact"><div className="contact-intro"><p className="section-label">07 / CONTACT</p><h2>Let’s build<br/><em>something useful.</em></h2><p>I’m open to junior developer roles, part-time opportunities, freelance projects, and collaborative work where I can continue learning while contributing practical solutions.</p><div className="contact-links"><a href={`mailto:${siteConfig.email}`}><Mail size={17}/> Email</a><a href={siteConfig.github}><Code2 size={17}/> GitHub</a><a href={siteConfig.linkedin}><BriefcaseBusiness size={17}/> LinkedIn</a><a href={siteConfig.resume}><FileText size={17}/> Resume</a></div></div><form className="contact-form" onSubmit={onSubmit} noValidate><div className="form-row"><label>Name<input name="name" placeholder="Your name" aria-describedby={errors.name ? "name-error" : undefined}/>{errors.name && <small id="name-error" role="alert">{errors.name}</small>}</label><label>Email<input type="email" name="email" placeholder="you@company.com" aria-describedby={errors.email ? "email-error" : undefined}/>{errors.email && <small id="email-error" role="alert">{errors.email}</small>}</label></div><label>Company or organization<input name="company" placeholder="Optional"/></label><label>Opportunity type<select name="type" defaultValue=""><option value="" disabled>Select one</option><option>Junior Developer Role</option><option>Part-Time Role</option><option>Freelance Project</option><option>Collaboration</option><option>Other</option></select></label><label>Message<textarea name="message" rows={5} placeholder="Tell me about the role, project, or idea." aria-describedby={errors.message ? "message-error" : undefined}/>{errors.message && <small id="message-error" role="alert">{errors.message}</small>}</label><button className="button" type="submit">Check message <ArrowUpRight size={16}/></button><p className="form-note">Form submission will be connected soon. Please contact me directly by email.</p></form></section>
  </>;
}
