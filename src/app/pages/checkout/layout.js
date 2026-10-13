import { Suspense } from "react";

// page.jsx is a client component and can't export metadata, so it lives here.
export const metadata = {
  title: "Checkout",
  robots: { index: false, follow: false },
};

export default function CheckoutLayout({ children }) {
  // The page reads useSearchParams, which needs a Suspense boundary to prerender.
  return <Suspense>{children}</Suspense>;
}
