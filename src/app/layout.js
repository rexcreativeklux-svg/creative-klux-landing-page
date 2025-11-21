// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationProgress from "./components/NavigationProgress";
import { Suspense } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Only viewport here
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1447e6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>
        {children}
      </body>
    </html>
  );
}