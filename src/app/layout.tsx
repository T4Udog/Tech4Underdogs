import type { Metadata } from "next";
import Script from "next/script";
import MarqueeBanner from "@/components/MarqueeBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech 4 Underdogs | IT, Web & Marketing for Small Business",
  description:
    "Tech 4 Underdogs provides reliable, affordable IT, websites, and online marketing for small, local businesses – built for the ones doing serious work when every decision matters.",
  icons: {
    icon: "/images/cropped-Asset-16T4U.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WTGFXYG1SK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WTGFXYG1SK');
          `}
        </Script>
        <MarqueeBanner />
        <Navbar />
        <main className="font-rajdhani">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

