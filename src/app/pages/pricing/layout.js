import { sharedOpenGraph } from "@/app/site";

// page.jsx is a client component and can't export metadata, so it lives here.
export const metadata = {
  title: "Pricing",
  description:
    "Simple plans for AI ad creatives and social media designs. Start a free trial of Creative Klux and generate creatives for every channel in seconds.",
  alternates: { canonical: "/pages/pricing" },
  openGraph: { ...sharedOpenGraph, url: "/pages/pricing", title: "Creative Klux Pricing" },
};

export default function PricingLayout({ children }) {
  return children;
}
