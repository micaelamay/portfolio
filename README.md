# Micaela Quizon — Developer Portfolio

A production-ready, data-driven portfolio for a Software Development graduate actively building modern web applications. The copy intentionally separates established foundations from skills currently being practiced.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS, Lucide React, Framer Motion (available for future subtle interactions), ESLint, and the Sites/Vite deployment runtime.

## Start locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Create a production build with `npm run build`, run code checks with `npm run lint`, and run the HTML smoke test with `npm test`.

## Project map

- `app/` — routes, metadata, sitemap, robots, and global styles
- `components/` — navigation, content sections, forms, and reusable headings
- `data/site.ts` — profile, navigation, skills, projects, journey, and learning content
- `docs/` — architecture, learning, and troubleshooting guides
- `public/` — static files, social image, and the future resume

## Updating content

Edit `data/site.ts` to change links, profile details, skills, learning topics, or projects. Add a project object to `projects`; the project section maps that array into matching cards automatically. Keep statuses factual.

Replace the placeholder `url`, email, and LinkedIn fields in `siteConfig`. Add the real resume as `public/micaela-quizon-resume.pdf`; until then, browsers may show a missing-file page when the resume link is selected.

## Contact form

The form currently validates input locally and explicitly says it is not connected. To make it send, connect Formspree, Resend through a server action, or another server-side provider. Keep API keys on the server in environment variables—never in a client component.

## GitHub data

The GitHub section works without an API. To add live data, fetch public repository data in a server component or route handler and pass a normalized result into the section. Store tokens as deployment secrets and provide a fallback when GitHub is unavailable.

## Deploying

The project is ready for Sites and can also be imported into Vercel from GitHub. For Vercel, select the repository, keep the detected Next.js settings, add any future environment variables, and deploy. Update `siteConfig.url` to the final production domain so canonical, Open Graph, robots, and sitemap URLs are correct.

## Common checks

- If packages are missing, run `npm install`.
- If port 3000 is busy, stop the other process or use the alternate URL printed by the development server.
- If a resume link fails, add the PDF at the documented path.
- If a build fails, read the first error, fix it, then rerun `npm run build`.

See [Architecture](docs/ARCHITECTURE.md), [Learning Guide](docs/LEARNING-GUIDE.md), and [Troubleshooting](docs/TROUBLESHOOTING.md).
