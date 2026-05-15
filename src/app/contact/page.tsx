import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Tech 4 Underdogs | IT, Web & Marketing Support for Small Business",
  description:
    "Ready to talk? Tech 4 Underdogs provides IT support, web design, and local marketing for small businesses. No pressure. No sales script. Just a real conversation.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tech 4 Underdogs",
  description:
    "IT support, web design, and local marketing built for small businesses.",
  url: "https://tech4underdogs.com/contact",
  email: "contact@tech4underdogs.com",
  areaServed: "United States",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ContactHero />
      <ContactFormSection />
    </>
  );
}
