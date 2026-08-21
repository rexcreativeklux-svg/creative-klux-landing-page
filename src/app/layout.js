// app/layout.js
import { Geist, Geist_Mono, Poppins, Caveat } from "next/font/google";
import "./globals.css";
import NavigationProgress from "./components/NavigationProgress";
import { Suspense } from "react";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Display + handwritten annotation faces used by the hero
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

// Only viewport here
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1447e6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${caveat.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>
        {children}

        {/* Pixel Code for https://app.woxelo.com/ */}
        <Script
          id="woxelo-livechat"
          src="https://app.woxelo.com/livechat/settings.js"
          data-widget="6rpUkQ2nZaDjndk3ZkdDYt3F8IBtevo8FdilkR9T"
          strategy="afterInteractive"
        />
        {/* END Pixel Code */}
      </body>
    </html>
  );
}