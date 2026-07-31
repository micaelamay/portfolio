# Troubleshooting

For every problem, read the first useful error rather than the final summary.

## `npm install` errors

**Meaning:** a package, network, Node version, or cache issue. **Inspect:** the first npm error and `node --version`. **Run:** `npm install`. **Fix:** use Node 22+, retry the connection, and avoid deleting the lockfile unless dependency resolution is genuinely broken. **Verify:** `npm run build`.

## Port already in use

**Meaning:** another local server owns port 3000. **Inspect:** the terminal for an alternate URL. **Run:** `lsof -i :3000`. **Fix:** stop the known process or use the alternate printed port. **Verify:** open the printed Local URL.

## Module not found

**Meaning:** an import path is wrong or dependencies are absent. **Inspect:** the module named in the error and its casing. **Run:** `npm install`. **Fix:** correct the import or install the intended package. **Verify:** rerun `npm run dev`.

## TypeScript errors

**Meaning:** values do not match expected types. **Inspect:** the first file and line reported. **Run:** `npx tsc --noEmit`. **Fix:** correct the data shape instead of using `any`. **Verify:** the command exits successfully.

## Tailwind styles not appearing

**Meaning:** CSS is not imported or the dev server needs a refresh. **Inspect:** `app/layout.tsx` imports `globals.css` and the file begins with `@import "tailwindcss"`. **Run:** `npm run dev`. **Fix:** correct the import, then restart. **Verify:** inspect a known styled button.

## Image path errors

**Meaning:** the file is absent or referenced outside `public`. **Inspect:** file spelling and case. **Run:** `ls public`. **Fix:** put the asset in `public` and reference it from `/filename`. **Verify:** open that path locally.

## Resume file missing

**Meaning:** the placeholder PDF has not been added. **Inspect:** `public/micaela-quizon-resume.pdf`. **Run:** `ls public/micaela-quizon-resume.pdf`. **Fix:** copy the final PDF to that exact path. **Verify:** click Resume.

## Vercel build failure

**Meaning:** production compilation or configuration failed. **Inspect:** the first build error and Node version. **Run:** `npm run build`. **Fix:** reproduce locally, correct the reported file, and redeploy. **Verify:** the deployment reaches Ready.

## Environment variables missing

**Meaning:** future contact or GitHub integration expects a secret. **Inspect:** provider settings and variable names. **Run:** `printenv VARIABLE_NAME` locally without sharing its output. **Fix:** add the value to `.env.local` and the hosting dashboard. **Verify:** restart and test the server-side feature.

## Hydration mismatch

**Meaning:** server HTML differs from the first browser render. **Inspect:** browser console and client components. **Run:** `npm run build`. **Fix:** move browser-only reads into `useEffect` and avoid random or locale-dependent initial output. **Verify:** reload with no console warning.

## Mobile menu not working

**Meaning:** client JavaScript failed or the header component changed. **Inspect:** console errors and `Header.tsx`. **Run:** `npm run lint`. **Fix:** preserve `"use client"`, button state, and the click handlers. **Verify:** open and close the menu with keyboard and touch.

## Git push problems

**Meaning:** the remote, branch, authentication, or permissions are wrong. **Inspect:** `git status`, `git branch --show-current`, and `git remote -v`. **Run:** `git push -u origin main` only after confirming the intended repository. **Fix:** connect the correct GitHub account and remote. **Verify:** the commit appears on GitHub.
