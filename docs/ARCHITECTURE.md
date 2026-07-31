# Architecture

## Organization

The homepage route lives in `app/page.tsx`. It composes focused section components rather than storing the entire page in one file. `app/layout.tsx` owns global metadata and Person structured data. `app/sitemap.ts` and `app/robots.ts` create search-engine routes.

Most components are server components: they render HTML without shipping component logic to the browser. `Header`, `LoadingScreen`, and `GitHubContact` are client components because they use state, effects, or browser form events.

## Data flow and reuse

`data/site.ts` is the content source. Arrays such as `projects`, `learning`, and `skillGroups` are mapped into repeated UI cards. This keeps content edits separate from layout. `SectionHeading` supplies a consistent heading structure across sections.

## Routing and metadata

This version uses one App Router page with semantic section anchors. Next.js creates the document from `layout.tsx` and the route from `page.tsx`. Metadata includes canonical, Open Graph, X/Twitter, robots, sitemap, and JSON-LD Person information. Replace the placeholder production URL before launch.

## Styling

`app/globals.css` defines the dark visual system, responsive breakpoints, focus states, reduced-motion rules, and component classes. Tailwind is available for future additions, while descriptive CSS keeps this editorial layout readable in one place.

## Extending the site

Add new content to the central data arrays first. Create a new component when a feature has its own behavior or repeated structure. Keep secrets and GitHub API tokens server-side. Add a route handler or server action when the contact form gains a provider.
