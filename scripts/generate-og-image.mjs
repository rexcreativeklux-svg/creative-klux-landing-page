// Renders the 1200x630 link-preview card (WhatsApp, Facebook, LinkedIn, X,
// Slack...) to src/app/opengraph-image.jpg and twitter-image.jpg. Next picks
// those files up and emits og:image with the correct type, width and height.
//
// Run: node scripts/generate-og-image.mjs
//
// JPEG on purpose: WhatsApp's scraper is fussy about WebP and large files, and
// the card has to stay well under 300KB to render reliably there.
import sharp from "sharp";
import { copyFile } from "node:fs/promises";

const W = 1200;
const H = 630;
const FONT = "Poppins, 'Segoe UI', Arial, sans-serif";

const background = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glowBlue" cx="88%" cy="8%" r="60%">
      <stop offset="0%" stop-color="#1447e6" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#1447e6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowCoral" cx="4%" cy="100%" r="45%">
      <stop offset="0%" stop-color="#EF6D57" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#EF6D57" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="rule" x1="0" x2="1">
      <stop offset="0%" stop-color="#1447e6"/>
      <stop offset="55%" stop-color="#7c5cff"/>
      <stop offset="100%" stop-color="#EF6D57"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#1a1a2e"/>
  <rect width="100%" height="100%" fill="url(#glowBlue)"/>
  <rect width="100%" height="100%" fill="url(#glowCoral)"/>

  <rect x="80" y="186" rx="19" width="356" height="38" fill="#F2C77E"/>
  <circle cx="102" cy="205" r="4" fill="#3B2A11" fill-opacity="0.6"/>
  <text x="116" y="211" font-family="${FONT}" font-size="17" font-weight="600" fill="#3B2A11">AI creatives for ads, social &amp; brand</text>

  <text font-family="${FONT}" font-weight="700" font-size="58" letter-spacing="-1.5" fill="#F7F7FB">
    <tspan x="80" y="306">Create, publish and manage your</tspan>
    <tspan x="80" y="376">ads and social designs</tspan>
    <tspan x="80" y="446" fill="#F2C77E">on autopilot.</tspan>
  </text>

  <rect x="80" y="500" width="420" height="5" rx="2.5" fill="url(#rule)"/>
  <text x="80" y="556" font-family="${FONT}" font-size="24" fill="#C2C2D8">One platform. Every creative you'll ever need.</text>
  <text x="${W - 80}" y="556" text-anchor="end" font-family="${FONT}" font-size="24" font-weight="600" fill="#F7F7FB">creativeklux.com</text>
</svg>`;

const logo = await sharp("public/images/logo-klux.png").resize({ width: 330 }).toBuffer();

await sharp(Buffer.from(background))
  .composite([{ input: logo, left: 74, top: 60 }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile("src/app/opengraph-image.jpg");

await copyFile("src/app/opengraph-image.jpg", "src/app/twitter-image.jpg");
console.log("Wrote src/app/opengraph-image.jpg and src/app/twitter-image.jpg");
