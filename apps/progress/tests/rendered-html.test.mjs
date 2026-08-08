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
  assert.match(html, /Role hierarchy aligned/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("static export includes the social preview and generated assets", async () => {
  const files = await readdir(new URL("../out", import.meta.url));
  assert.ok(files.includes("og.png"));
  assert.ok(files.includes("index.html"));
  assert.ok(files.includes("_next"));
});
