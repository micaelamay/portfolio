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
  {
    index: "01", slug: "developer-portfolio", name: "Developer Portfolio", status: "In Development", phase: "Design + development",
    description: "A responsive Next.js portfolio documenting my skills, learning process, and future software projects.",
    overview: "This portfolio is both my professional home on the web and a living record of how I approach software development. It brings my background, technical foundation, current learning, and project work into one clear experience.",
    challenge: "A developer portfolio needs to communicate personality and technical ability without becoming noisy or difficult to navigate. The main challenge is balancing expressive visual design with honest content, accessibility, and maintainable code.",
    solution: "I am building a component-based Next.js site with structured project data, dedicated case-study routes, responsive layouts, accessible interactions, and a violet-on-black visual system that feels distinctly mine.",
    features: ["Reusable components", "Project case studies", "Learning log", "Accessibility optimization"],
    goals: ["Explain my skills and growth clearly", "Give every project room for a detailed story", "Create a polished experience on mobile and desktop", "Keep content easy to update as my work evolves"],
    approach: ["Store repeated portfolio content in typed data structures", "Use reusable sections and consistent layout patterns", "Respect reduced-motion preferences and keyboard navigation", "Validate production builds before publishing updates"],
    nextSteps: ["Add real project screenshots as builds progress", "Replace placeholder contact details and resume", "Continue accessibility and performance review", "Expand case studies with decisions and outcomes"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"], repo: "https://github.com/micaelamay/portfolio",
  },
  {
    index: "02", slug: "business-crm", name: "Business CRM", status: "Planning", phase: "Product planning",
    description: "A customer and lead-management platform for organizing contacts, tasks, notes, and follow-ups.",
    overview: "The Business CRM is planned as a focused workspace for small teams that need a simple way to manage relationships without the weight of an enterprise platform.",
    challenge: "Customer information often ends up split between inboxes, documents, and spreadsheets. That makes ownership unclear, follow-ups easy to miss, and relationship history difficult to understand.",
    solution: "The planned application will bring contacts, lead stages, notes, tasks, and activity into one searchable interface. The first version will prioritize clarity and dependable everyday workflows over a long list of advanced features.",
    features: ["User authentication", "Lead pipeline", "Customer records", "Search and filtering"],
    goals: ["Create one reliable source for customer context", "Make the next follow-up immediately visible", "Support a clear lead-to-customer workflow", "Keep the interface approachable for small teams"],
    approach: ["Model organizations, contacts, leads, tasks, and activity separately", "Protect records with authenticated, role-aware access", "Design the pipeline for keyboard and touch interaction", "Build filtering into the data model from the beginning"],
    nextSteps: ["Finalize core user stories", "Create the first database schema", "Prototype the lead pipeline", "Define authentication and permission rules"],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"], repo: null,
  },
  {
    index: "03", slug: "inventory-management-system", name: "Inventory Management System", status: "Research", phase: "Discovery + research",
    description: "A business application for tracking products, stock levels, suppliers, and inventory alerts.",
    overview: "This project explores how a straightforward inventory tool can help a small business understand what is available, what changed, and what needs attention.",
    challenge: "Inventory counts become unreliable when purchases, sales, returns, and manual corrections are recorded inconsistently. A useful system must preserve the reason behind every adjustment—not only the latest number.",
    solution: "The proposed system uses products, locations, suppliers, and an immutable adjustment history to calculate stock accurately. Alerts and import tools will reduce repetitive work while keeping changes traceable.",
    features: ["Product management", "Stock adjustments", "Inventory alerts", "CSV import and export"],
    goals: ["Make current stock easy to understand", "Preserve a clear history of every adjustment", "Identify low-stock items before they become urgent", "Support common spreadsheet-based migration workflows"],
    approach: ["Treat stock changes as transactions instead of overwriting totals", "Validate imports before committing records", "Separate reusable business rules from interface code", "Design API boundaries for future integrations"],
    nextSteps: ["Interview potential users about their current workflow", "Document adjustment and alert rules", "Prototype product and stock screens", "Evaluate reporting requirements"],
    stack: ["React", "TypeScript", "PostgreSQL", "REST API"], repo: null,
  },
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
