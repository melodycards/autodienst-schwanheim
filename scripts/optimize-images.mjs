import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");
const outputDir = path.join(publicDir, "assets", "optimized");

const assets = [
  {
    input: "werkstatt-aussen.png",
    name: "werkstatt-aussen",
    widths: [768, 960, 1536],
    avifQuality: 58,
    webpQuality: 78,
  },
  {
    input: "werkstatt-detail-1.jpg",
    name: "werkstatt-detail-1",
    widths: [640, 960, 1200],
    avifQuality: 56,
    webpQuality: 76,
  },
  {
    input: "werkstatt-detail-2.jpg",
    name: "werkstatt-detail-2",
    widths: [640, 960, 1200],
    avifQuality: 56,
    webpQuality: 76,
  },
  {
    input: "werkstatt-service-new.jpg",
    name: "werkstatt-service-new",
    widths: [640, 960, 1200],
    avifQuality: 56,
    webpQuality: 76,
  },
  {
    input: "autodienst-logo.png",
    name: "autodienst-logo",
    widths: [160, 240, 320],
    avifQuality: 62,
    webpQuality: 82,
  },
];

await mkdir(outputDir, { recursive: true });

for (const asset of assets) {
  const inputPath = path.join(publicDir, asset.input);

  for (const width of asset.widths) {
    const base = sharp(inputPath).rotate().resize({
      width,
      withoutEnlargement: true,
    });

    await base
      .clone()
      .avif({ quality: asset.avifQuality, effort: 6 })
      .toFile(path.join(outputDir, `${asset.name}-${width}.avif`));

    await base
      .clone()
      .webp({ quality: asset.webpQuality, effort: 5 })
      .toFile(path.join(outputDir, `${asset.name}-${width}.webp`));
  }
}

await sharp(path.join(publicDir, "autodienst-logo.png"))
  .rotate()
  .resize({ width: 160, withoutEnlargement: true })
  .png({ compressionLevel: 9, palette: true })
  .toFile(path.join(outputDir, "autodienst-logo-160.png"));
