import { SITE_URL } from "./site";

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/pages/pricing`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/pages/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/pages/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/pages/refund`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
