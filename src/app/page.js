// app/page.js
import Image from "next/image";
import Header from "./components/Header";
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
  metadataBase: new URL("https://www.creativeklux.com/"),

  // Primary SEO
  title: {
    default: "Creative Klux | AI-Powered Design, Templates & Content for Creators",
    template: "%s | Creative Klux",
  },
  description:
    "Creative Klux is the all-in-one platform for creators, managers & brands. Get stunning templates, AI-generated content, design tools, client dashboards, and monetization — all in one place.",
  keywords:
    "creative platform, design templates, AI content generator, creator tools, brand kits, client dashboard, portfolio builder, content calendar, social media scheduler, digital assets, no-code design, monetization for creators",

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

  // Open Graph
  openGraph: {
    title: "Creative Klux | AI-Powered Design, Templates & Content for Creators",
    description:
      "Design, write, schedule, and monetize — all in one platform. AI templates, brand kits, client portals, and content tools built for creators and agencies.",
    url: "https://creative-klux-landing-page.vercel.app",
    siteName: "Creative Klux",
    images: [
      {
        url: "https://creative-klux-landing-page.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Creative Klux – All-in-One Platform for Creators",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Creative Klux | AI-Powered Design, Templates & Content for Creators",
    description:
      "The ultimate platform for creators: AI design templates, content generation, client dashboards, and monetization tools — all in one.",
    images: ["https://creative-klux-landing-page.vercel.app/og-image.jpg"],
    creator: "@creativeklux",
    site: "@creativeklux",
  },

  // App & icons
  applicationName: "Creative Klux",
  appleWebApp: {
    title: "Creative Klux",
    statusBarStyle: "default",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  // Canonical
  alternates: {
    canonical: "https://creative-klux-landing-page.vercel.app",
  },

  // Google verification (replace with your code)
  verification: {
    google: "your-google-verification-code-here",
  },
};

/* -----------------------------------------------------------------
   PAGE COMPONENT
----------------------------------------------------------------- */
export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-purple-100 to-pink-100">
      <Header />
      <Hero />

      <section id="creators">
        <CarouselSlider />
        <CreativeSection />
      </section>

       <AIFunnelSection />

      <section id="managers">
        <MoreSection />
        <ImageSection />
      </section>

      <section id="brands">
        <GetStartedSection />
        <AiSection />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>

      <CustomStack />
     

      <ShowcaseCarouselSection />
      <TestimonialSection />
      <BlueSection />
      <Footer />
    </div>
  );
}