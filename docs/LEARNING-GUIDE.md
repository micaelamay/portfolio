# Learning Guide

## The core ideas

Next.js organizes the website, routes, metadata, production build, and server/client boundary. React components are functions that return interface markup. Each component owns one understandable part of the page.

TypeScript checks the shapes of values before the code runs. Props are the named values passed into a component—for example, `SectionHeading` receives a label, title, and optional copy.

Arrays in `data/site.ts` store repeated content. `.map()` visits every entry and returns one card or link for it. This is why adding a project object automatically adds a project card without copying JSX.

## Styling and responsiveness

The site imports Tailwind CSS, and its custom editorial system is defined in `app/globals.css`. CSS variables store reusable colors. Grid and flexbox arrange content. Media queries change columns, spacing, and navigation at tablet and phone sizes so the same HTML works across devices.

## State and interaction

State is a component’s short-term memory. The mobile header stores whether its menu is open. The contact form stores validation errors. An effect watches scrolling so the header can gain a background, and another dismisses the short loading screen.

The form prevents a pretend submission, reads values with `FormData`, validates required fields, and exposes errors with `role="alert"`. A future server action or provider will replace this placeholder behavior.

## Deployment

`npm run build` transforms the TypeScript, React, styles, and routes into production output. A hosting provider runs that output at a public domain. Environment variables supply future private configuration without committing secrets to GitHub.
