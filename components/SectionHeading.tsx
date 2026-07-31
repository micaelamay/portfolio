export function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <div className="section-heading"><p className="section-label">{label}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}
