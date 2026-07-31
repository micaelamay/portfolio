import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, GitBranch } from "lucide-react";
import { notFound } from "next/navigation";
import { projects, siteConfig } from "@/data/site";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} | Micaela Quizon`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${project.name} | Micaela Quizon`, description: project.description, url: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const previous = projects[(projectIndex - 1 + projects.length) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="case-study-page">
      <a className="skip-link" href="#project-content">Skip to project details</a>
      <header className="case-study-header">
        <Link className="brand" href="/#home" aria-label="Micaela Quizon — home"><span>MQ</span><small>MICAELA QUIZON</small></Link>
        <Link className="case-study-back" href="/#projects"><ArrowLeft size={15}/> All projects</Link>
      </header>

      <main id="project-content">
        <article>
          <section className="case-study-hero">
            <div className="case-study-kicker"><span>{project.index}</span><span>{project.phase}</span><span className={`status-badge status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>{project.status}</span></div>
            <h1>{project.name}</h1>
            <p className="case-study-deck">{project.description}</p>
            <div className="case-study-links">
              {project.repo ? <a className="button" href={project.repo} target="_blank" rel="noreferrer"><GitBranch size={16}/> View repository <ArrowUpRight size={15}/></a> : <span className="case-study-repo-note">Repository will be shared when development begins.</span>}
            </div>
          </section>

          <section className="case-study-overview" aria-labelledby="overview-title">
            <div><p className="case-study-label">01 / Overview</p><h2 id="overview-title">The project, at a glance.</h2></div>
            <p>{project.overview}</p>
          </section>

          <section className="case-study-split">
            <div><p className="case-study-label">02 / The challenge</p><h2>Why this project matters.</h2><p>{project.challenge}</p></div>
            <div><p className="case-study-label">03 / The direction</p><h2>How I’m approaching it.</h2><p>{project.solution}</p></div>
          </section>

          <section className="case-study-system" aria-labelledby="system-title">
            <div className="case-study-section-head"><div><p className="case-study-label">04 / Product map</p><h2 id="system-title">What the experience needs to do.</h2></div><p>Each capability is planned around a real user task, then connected to a maintainable technical foundation.</p></div>
            <div className="system-map">
              <div className="system-core"><span>PROJECT {project.index}</span><strong>{project.name}</strong><small>{project.status}</small></div>
              <div className="system-features">{project.features.map((feature, index) => <div key={feature}><span>0{index + 1}</span><p>{feature}</p></div>)}</div>
            </div>
          </section>

          <section className="case-study-columns">
            <div><p className="case-study-label">05 / Project goals</p><h2>What success should look like.</h2><ul>{project.goals.map((goal) => <li key={goal}><Check size={17}/><span>{goal}</span></li>)}</ul></div>
            <div><p className="case-study-label">06 / Technical approach</p><h2>How the build stays thoughtful.</h2><ol>{project.approach.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></div>
          </section>

          <section className="case-study-tech">
            <div><p className="case-study-label">07 / Technology</p><h2>Tools selected for the job.</h2></div>
            <ul>{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          </section>

          <section className="case-study-next-steps">
            <div><p className="case-study-label">08 / Current status</p><h2>This case study grows with the project.</h2><p>{project.status === "In Development" ? "Development is active. I’ll document new decisions and outcomes here as the work progresses." : `This project is currently in the ${project.status.toLowerCase()} phase. The details below are planned next steps, not finished results.`}</p></div>
            <ol>{project.nextSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
          </section>

          <nav className="case-study-pagination" aria-label="Project navigation">
            <Link href={`/projects/${previous.slug}`}><span><ArrowLeft size={15}/> Previous project</span><strong>{previous.name}</strong></Link>
            <Link href={`/projects/${next.slug}`}><span>Next project <ArrowRight size={15}/></span><strong>{next.name}</strong></Link>
          </nav>
        </article>
      </main>

      <footer className="case-study-footer"><p>© {new Date().getFullYear()} {siteConfig.name}</p><Link href="/#projects">Back to all projects <ArrowUpRight size={14}/></Link></footer>
    </div>
  );
}
