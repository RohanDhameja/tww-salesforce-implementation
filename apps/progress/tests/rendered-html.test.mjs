import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

test("static export contains the public progress dashboard", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /Together We Will/);
  assert.match(html, /Building the foundation for/);
  assert.match(html, /Phase 0 is active/);
  assert.match(html, /Done/);
  assert.match(html, /In progress/);
  assert.match(html, /Four deliberate phases/);
  assert.match(html, /Account business validation/);
  assert.match(html, /Review the open questions/);
  assert.match(html, /Interface design is underway/);
  assert.match(html, /Application interface design brief/);
  assert.match(html, /Application and Account wireframes/);
  assert.match(html, /Explore the proposed TWW application/);
  assert.match(html, /Open the prototype/);
  assert.match(html, /\/prototype\//);
  assert.match(html, /docs\/ux\/interface-design-brief\.md/);
  assert.match(html, /docs\/ux\/wireframes\.md/);
  assert.match(html, /Role hierarchy aligned/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("static export contains the clickable UX prototype", async () => {
  const html = await readFile(new URL("../out/prototype/index.html", import.meta.url), "utf8");
  assert.match(html, /Clickable UX prototype/);
  assert.match(html, /Volunteer Coordinator/);
  assert.match(html, /People &amp; Organizations/);
  assert.match(html, /Rahul Sharma/);
  assert.match(html, /Possible duplicates/);
  assert.match(html, /No Salesforce changes/);
});


test("static export includes the social preview and generated assets", async () => {
  const files = await readdir(new URL("../out", import.meta.url));
  assert.ok(files.includes("og.png"));
  assert.ok(files.includes("index.html"));
  assert.ok(files.includes("_next"));
});
