// app/page.js
import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import SectionNav from "./components/SectionNav";
import Hero from "./components/Hero";
import "./globals.css";
import CarouselSlider from "./components/CarouselSlider";
import CreativeSection from "./components/CreativesSection";
import MoreSection from "./components/MoreSection";
import GetStartedSection from "./components/GetStartedSection";
import PricingSection from "./components/PricingSection";
import AiSection from "./components/AiSection";
import ShowcaseCarouselSection from "./components/ShowcaseCarouselSection";
import TestimonialSection from "./components/TestimonialSection";
import BlueSection from "./components/BlueSection";
import Footer from "./components/Footer";
import ImageSection from "./components/ImageSection";
import CustomStack from "./components/CustomStackSection";
import AIFunnelSection from "./components/AIFunnelSection";

/* -----------------------------------------------------------------
   FULL METADATA – now lives in the page file (clean <head>)
----------------------------------------------------------------- */
export const metadata = {
  metadataBase: new URL("https://creativeklux.com"),

  // Primary SEO
  title: {
    default:
      "Creative Klux - AI-Powered Creatives for Your Ads, Social, and Brand",
    template: "%s | Creative Klux",
  },
  description:
    "Create high-performing ad creatives, social media content, and brand assets in seconds with AI. Creative Klux helps business owners, marketers, agencies, and social media managers generate professional-quality creatives without designers, delays, or complicated tools.",
  keywords:
    "AI creatives, ad creatives, social media creatives, brand assets, AI design tool, advertising creatives, marketing creatives, social media graphics, creative automation, AI advertising, AI marketing, creative generator, design platform, business creatives, agency creatives",
  authors: [{ name: "Creative Klux" }],
  applicationName: "Creative Klux",

  // Robots
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

  // Canonical
  alternates: {
    canonical: "https://creativeklux.com",
  },

  // Open Graph
  openGraph: {
    type: "website",
    siteName: "Creative Klux",
    url: "https://creativeklux.com",
    title: "AI-Powered Creatives for Your Ads, Social, and Brand",
    description:
      "One platform. Every creative you'll ever need. Generate professional ad creatives, social media content, and brand assets in seconds with AI.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Creative Klux AI Creative Generator",
      },
    ],
    locale: "en_US",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Creatives for Your Ads, Social, and Brand",
    description:
      "Create ad creatives, social content, and brand assets in seconds with AI. Built for businesses, marketers, agencies, and creators.",
    images: [{ url: "/og-image.jpg", alt: "Creative Klux AI Creative Generator" }],
    creator: "@creativeklux",
    site: "@creativeklux",
  },

  // App & icons
  appleWebApp: {
    title: "Creative Klux",
    statusBarStyle: "default",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.jpg",
  },
  manifest: "/site.webmanifest",

  // Legacy Windows tile color (kept on-brand)
  other: {
    "msapplication-TileColor": "#1447e6",
  },
};

/* -----------------------------------------------------------------
   STRUCTURED DATA (JSON-LD)
----------------------------------------------------------------- */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Creative Klux",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  url: "https://creativeklux.com",
  description:
    "Create high-performing ad creatives, social media content, and brand assets in seconds with AI.",
  slogan: "One platform. Every creative you'll ever need.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Organization",
    name: "Netsprin",
  },
};

/* -----------------------------------------------------------------
   PAGE COMPONENT
----------------------------------------------------------------- */
export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-purple-100 to-pink-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <Hero />

      <section id="creators">
        <CarouselSlider />
      </section>

      {/* Section tab bar — sticky under the header for the rest of the page */}
      <SectionNav />

      <div id="creatives" className="scroll-mt-32">
        <CreativeSection />
      </div>

      <div id="features" className="scroll-mt-32">
        <AIFunnelSection />
      </div>

      <section id="managers">
        <div id="platform" className="scroll-mt-32">
          <MoreSection />
        </div>
        <div id="showcase" className="scroll-mt-32">
          <ImageSection />
        </div>
      </section>

      <section id="brands">
        <div id="for-creators" className="scroll-mt-32">
          <GetStartedSection />
        </div>
        <div id="ai-tools" className="scroll-mt-32">
          <AiSection />
        </div>
      </section>

      <section id="pricing" className="scroll-mt-32">
        <PricingSection />
      </section>

      <div id="integrations" className="scroll-mt-32">
        <CustomStack />
      </div>

      <div id="gallery" className="scroll-mt-32">
        <ShowcaseCarouselSection />
      </div>

      <div id="testimonials" className="scroll-mt-32">
        <TestimonialSection />
      </div>
      {/* <BlueSection /> */}
      <Footer />
    </div>
  );
}
