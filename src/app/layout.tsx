import type { Metadata } from "next";
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
        <MarqueeBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
