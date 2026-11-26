import SiteShell from "@/app/components/landing/SiteShell";
import Pricing from "@/app/components/landing/Pricing";
import Faq from "@/app/components/landing/Faq";
import FinalCta from "@/app/components/landing/FinalCta";

// The landing page's own pricing, FAQ and call-to-action sections, so the two
// pages always show the same plans. Opens on monthly, as this page always has.
export default function PricingPage() {
  return (
    <SiteShell>
      <Pricing initialCycle="monthly" />
      <Faq />
      <FinalCta />
    </SiteShell>
  );
}
