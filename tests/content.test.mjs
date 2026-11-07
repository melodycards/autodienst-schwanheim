import assert from "node:assert/strict";
import test from "node:test";
import { existsSync } from "node:fs";
import { services, findService } from "../app/data/services.ts";
import { businessStructuredData, serviceStructuredData, businessId } from "../app/structuredData.ts";
import { siteUrl } from "../app/seo.ts";

test("only declared service slugs resolve, never Object prototype properties", () => {
  for (const slug of ["constructor", "__proto__", "toString", "hasOwnProperty", "missing"]) assert.equal(findService(slug), undefined);
  for (const service of services) {
    assert.equal(findService(service.slug), service);
    for (const slug of service.related) assert.ok(findService(slug));
  }
});

test("business markup uses visible facts and existing images without invented ratings", () => {
  const business = JSON.parse(JSON.stringify(businessStructuredData));
  assert.equal(business["@type"], "AutoRepair");
  assert.equal(business["@id"], businessId);
  assert.equal(business.address.postalCode, "60529");
  assert.equal(business.telephone, "+496915392723");
  assert.equal(business.openingHoursSpecification[0].opens, "08:30");
  assert.equal(business.openingHoursSpecification[1].closes, "13:00");
  for (const key of ["aggregateRating", "review", "priceRange", "geo"]) assert.equal(business[key], undefined);
  for (const key of ["image", "logo"]) assert.ok(existsSync(`public${new URL(business[key]).pathname}`));
});

test("each service has its own valid canonical breadcrumb and stable provider", () => {
  for (const service of services) {
    const [entity, trail] = serviceStructuredData(service)["@graph"];
    assert.equal(entity.url, `${siteUrl}/leistungen/${service.slug}`);
    assert.equal(entity.provider["@id"], businessId);
    assert.deepEqual(trail.itemListElement.map(item => item.position), [1, 2]);
    assert.equal(trail.itemListElement[1].item, entity.url);
    assert.equal(trail.itemListElement[1].name, service.title);
  }
});
