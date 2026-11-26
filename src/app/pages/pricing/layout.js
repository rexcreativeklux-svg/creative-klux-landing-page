import { sharedOpenGraph } from "@/app/site";

// page.jsx is a client component and can't export metadata, so it lives here.
export const metadata = {
  title: "Pricing",
  description:
    "Monthly, annual and lifetime plans for Creativeklux, the AI that designs your creatives, posts everywhere, answers every DM and comment, and runs your ads.",
  alternates: { canonical: "/pages/pricing" },
  openGraph: { ...sharedOpenGraph, url: "/pages/pricing", title: "Creativeklux Pricing" },
};

export default function PricingLayout({ children }) {
  return children;
}
