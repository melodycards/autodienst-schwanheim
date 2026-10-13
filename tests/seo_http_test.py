"""Run against a local production build, optionally also a VERCEL_ENV=preview server."""
import os
import unittest
from html.parser import HTMLParser
from urllib.error import HTTPError
from urllib.parse import urlsplit
from urllib.request import Request, urlopen
from xml.etree import ElementTree

ORIGIN = os.environ.get("SEO_TEST_ORIGIN", "http://localhost:3001")
PRODUCTION = "https://www.autodienst-schwanheim.de"
HOST = urlsplit(PRODUCTION).netloc


class MetadataParser(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.canonicals = []
        self.meta = {}
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href"))
        if tag == "meta":
            key = attrs.get("name", attrs.get("property"))
            self.meta.setdefault(key, []).append(attrs.get("content", ""))


def request(path, host=HOST, origin=ORIGIN):
    req = Request(origin + path, headers={"Host": host})
    try:
        response = urlopen(req, timeout=30)
    except HTTPError as error:
        response = error
    with response:
        return response.status, response.headers, response.read().decode(), response.geturl()


class SeoResponses(unittest.TestCase):
    def test_sitemap_pages_and_production_metadata(self):
        status, _, xml, _ = request("/sitemap.xml")
        self.assertEqual(status, 200)
        urls = [node.text for node in ElementTree.fromstring(xml).iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
        self.assertEqual(len(urls), 17)
        self.assertEqual(len(set(urls)), 17)
        self.assertEqual(sum("/leistungen/" in url for url in urls), 14)
        for url in urls:
            with self.subTest(url=url):
                self.assertTrue(url == PRODUCTION or url.startswith(PRODUCTION + "/"))
                self.assertFalse(url.endswith("/"))
                path = urlsplit(url).path or "/"
                status, headers, html, final = request(path)
                self.assertEqual(status, 200)
                self.assertEqual(final, ORIGIN + path, "sitemap must not include redirects")
                metadata = MetadataParser(html)
                self.assertEqual(metadata.canonicals, [url])
                self.assertEqual(metadata.meta["og:url"], [url])
                self.assertEqual(metadata.meta["og:image"], [PRODUCTION + "/og.png"])
                self.assertNotIn("noindex", headers.get("X-Robots-Tag", ""))
                self.assertFalse(any("noindex" in value for value in metadata.meta.get("robots", [])))
                self.assertNotIn("autodienst-schwanheim.vercel.app", html)

    def test_production_robots(self):
        status, headers, body, _ = request("/robots.txt")
        self.assertEqual(status, 200)
        self.assertIn("Allow: /", body)
        self.assertNotIn("Disallow: /", body)
        self.assertIn("Sitemap: " + PRODUCTION + "/sitemap.xml", body)
        self.assertNotIn("noindex", headers.get("X-Robots-Tag", ""))

    def test_nonproduction_hosts(self):
        for host in ["localhost:3001", "autodienst-schwanheim.vercel.app", "test.vercel.app"]:
            for path in ["/", "/leistungen/inspektion", "/impressum", "/datenschutz"]:
                with self.subTest(host=host, path=path):
                    status, headers, html, _ = request(path, host)
                    self.assertEqual(status, 200)
                    self.assertEqual(headers.get("X-Robots-Tag"), "noindex, nofollow")
                    self.assertIn("noindex, nofollow", MetadataParser(html).meta["robots"])
            self.assertIn("Disallow: /", request("/robots.txt", host)[2])

    def test_missing_pages_remain_excluded(self):
        for path in ["/nicht-vorhanden", "/leistungen/nicht-vorhanden"]:
            status, _, html, _ = request(path)
            self.assertEqual(status, 404)
            metadata = MetadataParser(html)
            self.assertEqual(metadata.canonicals, [])
            self.assertTrue(any("noindex" in value for value in metadata.meta["robots"]))

    @unittest.skipUnless(os.environ.get("SEO_TEST_PREVIEW_ORIGIN"), "preview server not supplied")
    def test_preview_environment_even_with_production_host(self):
        origin = os.environ["SEO_TEST_PREVIEW_ORIGIN"]
        for path in ["/", "/leistungen/inspektion"]:
            status, headers, html, _ = request(path, HOST, origin)
            self.assertEqual(status, 200)
            self.assertEqual(headers.get("X-Robots-Tag"), "noindex, nofollow")
            self.assertIn("noindex, nofollow", MetadataParser(html).meta["robots"])
        self.assertIn("Disallow: /", request("/robots.txt", HOST, origin)[2])


if __name__ == "__main__":
    unittest.main(verbosity=2)
