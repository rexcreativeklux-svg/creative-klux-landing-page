// app/page.js
import "./globals.css";
import Hero from "./components/landing/Hero";
import { PlatformMarquee, AboutStatement } from "./components/landing/Platforms";
import FeatureTabs from "./components/landing/FeatureTabs";
import { OneDashboard, FeatureStack } from "./components/landing/Showcase";
import { RealResults, FloatingStatement } from "./components/landing/Advantages";
import CreativesMarquee from "./components/landing/CreativesMarquee";
import UseCases from "./components/landing/UseCases";
import Integrations from "./components/landing/Integrations";
import { ResultsBento, CoreValues, Analytics } from "./components/landing/Results";
import Testimonials from "./components/landing/Testimonials";
import HowItWorks from "./components/landing/HowItWorks";
import Pricing from "./components/landing/Pricing";
import Faq from "./components/landing/Faq";
import FinalCta from "./components/landing/FinalCta";
import LandingFooter from "./components/landing/LandingFooter";
import { TIERS } from "./pricing";
import { SITE_URL } from "./site";

/* -----------------------------------------------------------------
   STRUCTURED DATA (JSON-LD) — site-wide metadata lives in layout.js
----------------------------------------------------------------- */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Creative Klux",
      url: SITE_URL,
      logo: `${SITE_URL}/images/klux-logo-dark.png`,
      email: "support@creativeklux.com",
      parentOrganization: { "@type": "Organization", name: "Netsprin" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Creative Klux",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "Creative Klux",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: SITE_URL,
      description:
        "The AI that runs your social media and ads. Klux designs your posts, ads, product photos and videos, publishes on every platform, answers every DM and comment, and puts your ad budget behind what works.",
      slogan: "The AI that runs your social media & ads for you.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: String(Math.min(...TIERS.map((t) => t.packages.lifetime.price))),
        priceCurrency: "USD",
        url: `${SITE_URL}/#deal`,
      },
    },
  ],
};

/* -----------------------------------------------------------------
   PAGE COMPONENT
----------------------------------------------------------------- */
export default function Home() {
  return (
    <div className="font-landing overflow-x-clip bg-white leading-[normal] text-[#0b1220]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <main>
        <PlatformMarquee />
        <AboutStatement />
        <FeatureTabs />
        <OneDashboard />
        <FeatureStack />
        <RealResults />
        <FloatingStatement />
        <CreativesMarquee />
        <UseCases />
        <Integrations />
        <ResultsBento />
        <CoreValues />
        <Analytics />
        <Testimonials />
        <HowItWorks />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <LandingFooter />
    </div>
  );
}
