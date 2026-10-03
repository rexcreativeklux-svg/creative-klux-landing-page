// app/layout.js
import { Geist, Geist_Mono, Poppins, Caveat } from "next/font/google";
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

const description =
  "Create, publish and manage your ads and social designs on autopilot. Creative Klux uses AI to generate high-performing ad creatives, social media posts and brand assets in seconds, with no designers, delays or complicated tools.";

/* -----------------------------------------------------------------
   SITE-WIDE METADATA — every route inherits this and overrides what
   it needs. og:image / twitter:image come from opengraph-image.jpg
   and twitter-image.jpg in this folder (see scripts/generate-og-image.mjs).
----------------------------------------------------------------- */
export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Creative Klux · AI Ad Creatives & Social Media Designs on Autopilot",
    template: "%s | Creative Klux",
  },
  description,
  keywords: [
    "AI ad creatives",
    "AI ad generator",
    "social media design tool",
    "social media post generator",
    "AI graphic design",
    "ad creative automation",
    "marketing creatives",
    "brand assets",
    "AI video ads",
    "AI marketing tool",
    "creatives for agencies",
  ],
  authors: [{ name: "Creative Klux" }],
  creator: "Creative Klux",
  publisher: "Netsprin",
  applicationName: "Creative Klux",
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
    siteName: "Creative Klux",
    url: "/",
    title: "Creative Klux · AI ads & social designs on autopilot",
    description:
      "One platform. Every creative you'll ever need. Generate ad creatives, social posts and brand assets in seconds with AI.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Creative Klux · AI ads & social designs on autopilot",
    description:
      "Generate ad creatives, social posts and brand assets in seconds with AI. Built for businesses, marketers, agencies and creators.",
    creator: "@creativeklux",
    site: "@creativeklux",
  },

  appleWebApp: {
    title: "Creative Klux",
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
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${caveat.variable} antialiased`}
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