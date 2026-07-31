import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the complete portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Micaela Quizon \| Software Developer<\/title>/i);
  assert.match(html, /I build practical web applications/);
  assert.match(html, /Currently Building/i);
  assert.match(html, /Learning Log/i);
  assert.match(html, /Let’s build/);
  assert.match(html, /href="#main"/);
  assert.match(html, /role="status"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("renders a detailed page for each project", async () => {
  for (const [path, title] of [["/projects/developer-portfolio", "Developer Portfolio"], ["/projects/business-crm", "Business CRM"], ["/projects/inventory-management-system", "Inventory Management System"]]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>${title} \\| Micaela Quizon</title>`, "i"));
    assert.match(html, /The project, at a glance/);
    assert.match(html, /Current status/);
  }
});

test("keeps content data-driven and respects reduced motion", async () => {
  const [page, data, css, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../data/site.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  assert.match(page, /<Hero \/>/);
  assert.match(page, /<GitHubContact \/>/);
  assert.match(data, /micaelamay\/portfolio/);
  assert.match(data, /Currently Learning/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(layout, /application\/ld\+json/);
  assert.match(packageJson, /lucide-react/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
