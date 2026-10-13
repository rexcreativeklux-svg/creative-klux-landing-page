// The nine packages, mirroring the admin Packages form: three tiers, each sold
// monthly, annually and as a lifetime plan. Tokens and creatives are per month
// on every package, lifetime included.
export const BILLING_CYCLES = [
  { id: "monthly", label: "Monthly", period: "/month", shortPeriod: "/mo", billed: "Billed monthly", duration: 30 },
  { id: "annual", label: "Annual", period: "/year", shortPeriod: "/yr", billed: "Billed annually", duration: 365, note: "2 months free" },
  { id: "lifetime", label: "Lifetime", period: " once", shortPeriod: "", billed: "One-time payment", duration: 36500 },
];

export const TIERS = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for freelancers & creators just getting started",
    badge: "FOR BEGINNERS",
    badgeColor: "bg-black text-white",
    popular: false,
    rotation: -2,
    brands: 1,
    teams: 1,
    integrations: 3,
    copilots: 1,
    storage: 5,
    packages: {
      monthly: { price: 15, tokens: 45000, creatives: 50, resells: 0 },
      annual: { price: 150, tokens: 45000, creatives: 50, resells: 0 },
      lifetime: { price: 59, tokens: 15000, creatives: 20, resells: 0 },
    },
  },
  {
    id: "growth",
    name: "Growth",
    description: "For growing teams and serious marketers",
    badge: "MOST POPULAR",
    badgeColor: "bg-gradient-to-r from-pink-500 to-red-500 text-white",
    popular: true,
    rotation: 0,
    brands: 5,
    teams: 5,
    integrations: 10,
    copilots: 5,
    storage: 25,
    packages: {
      monthly: { price: 39, tokens: 110000, creatives: 150, resells: 0 },
      annual: { price: 390, tokens: 110000, creatives: 150, resells: 0 },
      lifetime: { price: 129, tokens: 36000, creatives: 50, resells: 0 },
    },
  },
  {
    id: "agency",
    name: "Agency",
    description: "For agencies & brands running high-volume campaigns",
    badge: "FOR TEAMS",
    badgeColor: "bg-black text-white",
    popular: false,
    rotation: 2,
    brands: 20,
    teams: 20,
    integrations: 25,
    copilots: 20,
    storage: 100,
    packages: {
      monthly: { price: 89, tokens: 250000, creatives: 400, resells: 25 },
      annual: { price: 890, tokens: 250000, creatives: 400, resells: 25 },
      lifetime: { price: 249, tokens: 60000, creatives: 100, resells: 10 },
    },
  },
];

const plural = (count, noun) => `${count} ${noun}${count === 1 ? "" : "s"}`;

export function getFeatures(tier, cycle) {
  const pkg = tier.packages[cycle];
  const features = [
    `${pkg.creatives} creatives/mo`,
    `${pkg.tokens.toLocaleString("en-US")} tokens/mo`,
    plural(tier.brands, "brand"),
    plural(tier.teams, "team"),
    plural(tier.integrations, "integration"),
    plural(tier.copilots, "copilot"),
    `${tier.storage} GB storage`,
  ];
  if (pkg.resells > 0) features.push(plural(pkg.resells, "resell"));
  return features;
}
