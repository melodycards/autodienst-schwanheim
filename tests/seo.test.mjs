import assert from "node:assert/strict";
import test from "node:test";
import { isProductionHost, pageSeo, siteUrl } from "../app/seo.ts";

test("only the production host in a production runtime is indexable", () => {
  assert.equal(isProductionHost("www.autodienst-schwanheim.de", "production", "production"), true);
  assert.equal(isProductionHost("www.autodienst-schwanheim.de", "", "production"), true);
  for (const host of [null, "localhost:3001", "127.0.0.1:3001", "autodienst-schwanheim.vercel.app", "preview.vercel.app", "autodienst-schwanheim.de", "www.autodienst-schwanheim.de.example.com"]) {
    assert.equal(isProductionHost(host, "production", "production"), false);
  }
  for (const deployment of ["preview", "development", "staging"]) {
    assert.equal(isProductionHost("www.autodienst-schwanheim.de", deployment, "production"), false);
  }
  assert.equal(isProductionHost("www.autodienst-schwanheim.de", "production", "development"), false);
});

test("canonicals and social URLs use the production origin and no trailing slash", () => {
  for (const path of ["", "/", "/impressum", "/datenschutz", "/leistungen/inspektion/"]) {
    const metadata = pageSeo(path);
    const expected = `${siteUrl}${path.replace(/\/+$/, "")}`;
    assert.equal(metadata.alternates.canonical, expected);
    assert.equal(metadata.openGraph.url, expected);
    assert.equal(metadata.openGraph.images[0].url, `${siteUrl}/og.png`);
    assert.equal(metadata.robots, undefined, "page metadata must not override inherited preview protection");
  }
});
