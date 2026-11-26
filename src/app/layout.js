// app/layout.js
import { Geist, Geist_Mono, Poppins, Caveat, Inter, Inter_Tight, Instrument_Serif } from "next/font/google";
import "./globals.css";
import NavigationProgress from "./components/NavigationProgress";
import { Suspense } from "react";
import Script from "next/script";
import { SITE_URL } from "./site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Display + handwritten annotation faces used by the hero
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

// Landing page: Inter for body copy, Inter Tight for headings (.font-display)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});
// Italic accent words in landing headings (.font-accent)
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

const description =
  "Creativeklux is the AI that runs your social media and ads. Klux designs your posts, ads, product photos and videos, publishes on every platform, answers every DM and comment, and puts your ad budget behind what works.";

const shareTitle = "Creativeklux · The AI that runs your social media & ads";
const shareDescription =
  "Designs your creatives, posts everywhere, answers every DM and comment, and runs your ads. Pay once, keep it for life.";

/* -----------------------------------------------------------------
   SITE-WIDE METADATA — every route inherits this and overrides what
   it needs. og:image / twitter:image come from opengraph-image.jpg
   and twitter-image.jpg in this folder (see scripts/generate-og-image.mjs).
----------------------------------------------------------------- */
export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Creativeklux · The AI That Runs Your Social Media & Ads",
    template: "%s | Creativeklux",
  },
  description,
  keywords: [
    "AI social media manager",
    "AI ads manager",
    "social media automation",
    "AI ad creatives",
    "AI ad generator",
    "auto post to social media",
    "AI social media inbox",
    "AI DM and comment replies",
    "social media scheduler",
    "Meta ads automation",
    "link in bio",
    "AI marketing tool",
    "lifetime deal",
    "Creativeklux",
    "Creative Klux",
  ],
  authors: [{ name: "Creativeklux" }],
  creator: "Creativeklux",
  publisher: "Netsprin",
  applicationName: "Creativeklux",
  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "Creativeklux",
    url: "/",
    title: shareTitle,
    description: shareDescription,
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    creator: "@creativeklux",
    site: "@creativeklux",
  },

  appleWebApp: {
    title: "Creativeklux",
    statusBarStyle: "default",
  },
  icons: {
    icon: "/images/klux-favicon.png",
    apple: "/apple-touch-icon.jpg",
  },
  manifest: "/site.webmanifest",
  formatDetection: { telephone: false },

  // Legacy Windows tile color (kept on-brand)
  other: {
    "msapplication-TileColor": "#1447e6",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1447e6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${caveat.variable} ${inter.variable} ${interTight.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>
        {children}

        {/* Pixel Code for https://app.woxelo.com/ */}
        <Script
          id="woxelo-livechat"
          src="https://app.woxelo.com/livechat/settings.js"
          data-widget="6rpUkQ2nZaDjndk3ZkdDYt3F8IBtevo8FdilkR9T"
          strategy="afterInteractive"
        />
        {/* END Pixel Code */}
      </body>
    </html>
  );
}