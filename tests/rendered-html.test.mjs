import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the PrismPath landing page securely", async () => {
  const response = await render();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(
    response.headers.get("referrer-policy"),
    "strict-origin-when-cross-origin",
  );

  const html = await response.text();
  assert.match(html, /PrismPath/);
  assert.match(html, /Take a stronger path to/);
  assert.match(html, /Blue Prism browser automations to be more stable!/);
  assert.match(html, /buymeacoffee\.com\/jacksarg/);
  assert.match(html, /github\.com\/JackSarg\/PrismPath/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Starter Project/);
  assert.doesNotMatch(html, /Selector library/);
});

test("ships only the required public brand assets", async () => {
  const requiredAssets = [
    "../public/icons/chrome.png",
    "../public/icons/edge.svg",
    "../public/icons/github.svg",
    "../public/prismpath-icon.png",
    "../public/prismpath-promo.png",
    "../public/screenshots/generated.png",
    "../public/screenshots/sidepanel-generated.png",
  ];

  await Promise.all(requiredAssets.map((path) => access(new URL(path, import.meta.url))));

  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(page, /dangerouslySetInnerHTML|javascript:/i);
});
