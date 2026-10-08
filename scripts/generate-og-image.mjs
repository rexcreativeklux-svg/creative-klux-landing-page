// Renders the 1200x630 link-preview card (WhatsApp, Facebook, LinkedIn, X,
// Slack...) to src/app/opengraph-image.jpg and twitter-image.jpg. Next picks
// those files up and emits og:image with the correct type, width and height.
//
// Source is the designed card at public/creativeklux-seo-image.jpeg. Run after
// replacing it:
//   node scripts/generate-og-image.mjs
//
// JPEG on purpose: WhatsApp's scraper is fussy about WebP, PNG and large
// files, and the card has to stay well under 300KB to render reliably there.
import sharp from "sharp";
import { copyFile, stat } from "node:fs/promises";

const W = 1200;
const H = 630;
const SOURCE = "public/creativeklux-seo-image.jpeg";
const OUT = "src/app/opengraph-image.jpg";

// The source is already ~1.91:1, so cover-fit loses only a few pixels at the
// sides rather than padding the card with bars.
await sharp(SOURCE)
  .flatten({ background: "#1d4ed8" })
  .resize({ width: W, height: H, fit: "cover" })
  // Baseline (not progressive): some WhatsApp clients fail on progressive JPEGs.
  .jpeg({ quality: 85, progressive: false, chromaSubsampling: "4:2:0" })
  .toFile(OUT);

await copyFile(OUT, "src/app/twitter-image.jpg");
const { size } = await stat(OUT);
console.log(`Wrote ${OUT} and src/app/twitter-image.jpg (${Math.round(size / 1024)}KB)`);
if (size > 300 * 1024) console.warn("Over 300KB: WhatsApp may drop the preview. Lower the quality.");
