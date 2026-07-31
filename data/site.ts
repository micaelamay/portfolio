export const siteConfig = {
  name: "Micaela Quizon",
  role: "Software Developer",
  location: "California, USA",
  description: "Software developer portfolio of Micaela Quizon, featuring technical skills, current projects, development journey, and modern web application work.",
  url: "https://micaela-portfolio.example.com",
  github: "https://github.com/micaelamay",
  linkedin: "https://www.linkedin.com/in/yourusername",
  email: "your-email@example.com",
  resume: "/micaela-quizon-resume.pdf",
} as const;

export const navigation = [
  ["Home", "#home"], ["About", "#about"], ["Skills", "#skills"],
  ["Projects", "#projects"], ["Journey", "#journey"], ["Learning", "#learning"], ["Contact", "#contact"],
] as const;

export type Status = "Foundation" | "Practicing" | "Currently Learning" | "Building With";

export const skillGroups = [
  { title: "Frontend", detail: "Interfaces that are responsive, readable, and thoughtfully structured.", skills: [["HTML & CSS", "Foundation"], ["JavaScript", "Foundation"], ["Responsive Design", "Foundation"], ["React", "Practicing"], ["Next.js", "Building With"], ["Tailwind CSS", "Building With"]] },
  { title: "Backend + Data", detail: "Strengthening the systems behind useful web applications.", skills: [["Database Concepts", "Foundation"], ["Node.js", "Currently Learning"], ["PostgreSQL", "Currently Learning"], ["Supabase", "Practicing"], ["REST APIs", "Currently Learning"], ["Authentication", "Currently Learning"]] },
  { title: "Tools + Workflow", detail: "A practical workflow for planning, building, and shipping.", skills: [["Git", "Foundation"], ["GitHub", "Foundation"], ["WordPress", "Foundation"], ["TypeScript", "Practicing"], ["Testing", "Currently Learning"], ["Deployment", "Practicing"]] },
  { title: "Development Strengths", detail: "The habits that keep software understandable and useful.", skills: [["UI Implementation", "Foundation"], ["Troubleshooting", "Foundation"], ["Organized Code", "Practicing"], ["Software Quality", "Currently Learning"]] },
] as const;

export const projects = [
  { index: "01", name: "Developer Portfolio", status: "In Development", description: "A responsive Next.js portfolio documenting my skills, learning process, and future software projects.", features: ["Reusable components", "Project case studies", "Learning log", "Accessibility optimization"], stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"], repo: "https://github.com/micaelamay/portfolio" },
  { index: "02", name: "Business CRM", status: "Planning", description: "A customer and lead-management platform for organizing contacts, tasks, notes, and follow-ups.", features: ["User authentication", "Lead pipeline", "Customer records", "Search and filtering"], stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"], repo: null },
  { index: "03", name: "Inventory Management System", status: "Research", description: "A business application for tracking products, stock levels, suppliers, and inventory alerts.", features: ["Product management", "Stock adjustments", "Inventory alerts", "CSV import and export"], stack: ["React", "TypeScript", "PostgreSQL", "REST API"], repo: null },
] as const;

export const journey = [
  ["Software Development Education", "Completed an associate degree in Software Development and built a foundation in programming, databases, web technologies, software concepts, and problem-solving."],
  ["Refreshing the Foundation", "Reviewing frontend development, JavaScript, Git, responsive design, debugging, and application structure through hands-on development."],
  ["Modern Web Development", "Expanding into TypeScript, React, Next.js, databases, APIs, authentication, testing, and cloud deployment."],
  ["Current Goal", "Building production-style portfolio projects and preparing for junior, part-time, freelance, or collaborative opportunities."],
] as const;

export const learning = [
  ["React Component Architecture", "Practicing", "Breaking interfaces into reusable components while keeping responsibilities organized."],
  ["TypeScript Fundamentals", "Practicing", "Using types to make application behavior clearer and safer."],
  ["Next.js App Router", "Building With", "Learning layouts, server components, metadata, and modern routing."],
  ["Database Relationships", "Currently Learning", "Designing clean connections between application records."],
  ["Authentication + Authorization", "Currently Learning", "Understanding identity, sessions, and protected actions."],
  ["Form Validation", "Practicing", "Making forms helpful, accessible, and honest about errors."],
  ["Debugging + Error Handling", "Practicing", "Tracing problems and designing useful fallback states."],
  ["Git + GitHub Workflow", "Foundation", "Tracking changes and working with branches and repositories."],
  ["Deployment with Vercel", "Practicing", "Taking a local application through a production build."],
  ["Responsive Interfaces", "Building With", "Designing layouts that remain useful across screen sizes."],
] as const;
