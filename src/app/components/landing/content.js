// Links and copy the landing page shares across sections. Anything marked
// "set me" is unknown to the codebase — fill it in and the page picks it up.

export const LOGIN_URL = "https://app.creativeklux.com/";
export const SUPPORT_EMAIL = "support@creativeklux.com";

// Demo video (also used by the old AIFunnelSection)
export const DEMO_YOUTUBE_ID = "uk7Dq7j-jX0";

// Lifetime deal end date for the top bar. Leave null and the bar omits it.
export const DEAL_ENDS = null; // e.g. "December 31, 2026"

// Root-relative so the same links work from the subpages (/pages/...) too
export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Creatives", href: "/#creatives" },
  { label: "Integrations", href: "/#integrations" },
  { label: "Pricing", href: "/#deal" },
  { label: "FAQ", href: "/#faq" },
];

export const PLATFORMS = [
  { id: "facebook", name: "Facebook" },
  { id: "instagram", name: "Instagram" },
  { id: "tiktok", name: "TikTok" },
  { id: "linkedin", name: "LinkedIn" },
  { id: "x", name: "X" },
  { id: "youtube", name: "YouTube" },
  { id: "pinterest", name: "Pinterest" },
  { id: "meta", name: "Meta Ads" },
  { id: "whatsapp", name: "WhatsApp" },
  { id: "telegram", name: "Telegram" },
];

// Real reviews only. With two or more, the slider shows its arrows and
// auto-advances every 5s. `image` (optional) is a square photo, e.g.
// "/images/landing/rex-morgan.jpg"; without one the card shows initials.
export const TESTIMONIALS = [
  {
    quote:
      "Creativeklux completely replaced my design workflow. I generate ad creatives, thumbnails, and social posts in minutes — what used to take me hours with a designer.",
    name: "Rex Morgan",
    role: "Social Media Manager",
    rating: 5,
  },
  // SAMPLE reviews for previewing the slider. They only render in development
  // (see TESTIMONIALS below); replace them with real ones before shipping.
  ...(process.env.NODE_ENV === "development"
    ? [
        {
          quote:
            "Klux answers our Instagram DMs faster than we ever did. Booking questions get handled overnight, and I only step in when it's about a refund.",
          name: "Amara Okafor",
          role: "Owner, Glow Studio",
          rating: 5,
        },
        {
          quote:
            "We run five client brands from one dashboard now. Each has its own brand kit and copilot, and the weekly content plan is ready before Monday.",
          name: "Daniel Reyes",
          role: "Founder, Northline Agency",
          rating: 5,
        },
        {
          quote:
            "The ad spend limit is what sold me. Klux moved budget to our best creative and our cost per click dropped within the first week.",
          name: "Sophie Lindqvist",
          role: "Marketing Lead, Fjord Skincare",
          rating: 4,
        },
      ]
    : []),
];
