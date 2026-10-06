// app/page.js
import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import SectionNav from "./components/SectionNav";
import CursorFollower from "./components/CursorFollower";
import Hero from "./components/Hero";
import "./globals.css";
import CreativeTaxSection from "./components/CreativeTaxSection";
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
import CopilotSection from "./components/CopilotSection";
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
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      url: SITE_URL,
      description:
        "Create, publish and manage your ads and social designs on autopilot. Generate ad creatives, social media posts and brand assets in seconds with AI.",
      slogan: "One platform. Every creative you'll ever need.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "49",
        priceCurrency: "USD",
        url: `${SITE_URL}/pages/pricing`,
      },
    },
  ],
};

/* -----------------------------------------------------------------
   PAGE COMPONENT
----------------------------------------------------------------- */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CursorFollower />
      <SiteHeader />
      <Hero />

      {/* The creator strip that used to sit here folded into the hero carousel;
          the nav's "For Creators" anchor moves onto the section that follows. */}
      <section id="creators" className="scroll-mt-32">
        <CreativeTaxSection />
      </section>

      {/* Section tab bar — sticky under the header only while inside the
          creatives sections. A sticky element can't leave its parent, so this
          wrapper makes the bar scroll away once Ad Intelligence ends. */}
      <div>
        <SectionNav />

        <div id="creatives" className="scroll-mt-32">
          <CreativeSection />
        </div>
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
        <div id="copilot" className="scroll-mt-32">
          <CopilotSection />
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
