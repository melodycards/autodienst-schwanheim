import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");
const outputDir = path.join(publicDir, "assets", "optimized");

const assets = [
  {
    input: "hero-desktop.jpg",
    name: "hero-desktop",
    widths: [960, 1200, 1448],
    avifQuality: 58,
    webpQuality: 80,
  },
  {
    input: "hero-mobile.png",
    name: "hero-mobile",
    widths: [480, 720, 941],
    avifQuality: 58,
    webpQuality: 80,
  },
  {
    input: "werkstatt-aussen.png",
    name: "werkstatt-aussen",
    widths: [768, 960, 1536],
    avifQuality: 58,
    webpQuality: 78,
  },
  ...[
    ["radmontage", "jpg"],
    ["standort-ueberblick", "jpg"],
    ["werkstatt-eingang", "png"],
    ["hebebuehne", "jpg"],
    ["werkstatt-team", "jpg"],
    ["bremsanlage", "png"],
    ["werkstatthallen", "png"],
    ["werkstattalltag", "jpg"],
  ].map(([name, extension]) => ({
    input: `photos/${name}.${extension}`,
    name: `foto-${name}`,
    widths: [480, 768, 1200, 1440],
    avifQuality: 60,
    webpQuality: 82,
  })),
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
