// Renders the 1200x630 link-preview card (WhatsApp, Facebook, LinkedIn, X,
// Slack...) to src/app/opengraph-image.jpg and twitter-image.jpg. Next picks
// those files up and emits og:image with the correct type, width and height.
//
// Source is the hero screenshot at public/image.png. Run after replacing it:
//   node scripts/generate-og-image.mjs
//
// JPEG on purpose: WhatsApp's scraper is fussy about WebP, PNG and large
// files, and the card has to stay well under 300KB to render reliably there.
import sharp from "sharp";
import { copyFile, stat } from "node:fs/promises";

const W = 1200;
const H = 630;
const SOURCE = "public/image.png";
const OUT = "src/app/opengraph-image.jpg";

// The screenshot is wider than 1.91:1, so fit it to the width and pad the
// leftover height by repeating the edge rows (the gradient frame), rather
// than cropping off the sides of the page.
const fitted = await sharp(SOURCE)
  .flatten({ background: "#1a1a2e" })
  .resize({ width: W, height: H, fit: "inside" })
  .toBuffer({ resolveWithObject: true });

const padY = H - fitted.info.height;
const padX = W - fitted.info.width;

await sharp(fitted.data)
  .extend({
    top: Math.floor(padY / 2),
    bottom: Math.ceil(padY / 2),
    left: Math.floor(padX / 2),
    right: Math.ceil(padX / 2),
    extendWith: "copy",
  })
  // Baseline (not progressive): some WhatsApp clients fail on progressive JPEGs.
  .jpeg({ quality: 85, progressive: false, chromaSubsampling: "4:2:0" })
  .toFile(OUT);

await copyFile(OUT, "src/app/twitter-image.jpg");
const { size } = await stat(OUT);
console.log(`Wrote ${OUT} and src/app/twitter-image.jpg (${Math.round(size / 1024)}KB)`);
if (size > 300 * 1024) console.warn("Over 300KB: WhatsApp may drop the preview. Lower the quality.");
