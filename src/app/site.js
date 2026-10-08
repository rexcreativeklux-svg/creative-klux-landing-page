// The bare domain 307s to www, so www is the canonical host. Pointing og:url
// or og:image at the bare domain makes WhatsApp's scraper hit a redirect and
// drop the preview card.
export const SITE_URL = "https://www.creativeklux.com";

// A route that sets its own `openGraph` replaces the root one wholesale, which
// drops the opengraph-image.jpg card. Subpages spread this back in.
export const sharedOpenGraph = {
  type: "website",
  siteName: "Creative Klux",
  locale: "en_US",
  images: [
    {
      url: "/opengraph-image.jpg",
      width: 1200,
      height: 630,
      type: "image/jpeg",
      alt: "Creative Klux: your design team now lives in WhatsApp. A phone chat shows Instagram ad creatives generated and scheduled from a message.",
    },
  ],
};
