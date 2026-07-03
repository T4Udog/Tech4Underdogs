import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactFormSection from "@/components/ContactFormSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Tech 4 Underdogs | IT, Web & Marketing Support for Small Business",
  description:
    "Ready to talk? Tech 4 Underdogs provides IT support, web design, and local marketing for small businesses. No pressure. No sales script. Just a real conversation.",
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Tech 4 Underdogs",
  url: "https://tech4underdogs.com/contact",
  contactPoint: {
    "@type": "ContactPoint",
    email: site.email,
    contactType: "customer support",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactHero />
      <ContactFormSection />
    </>
  );
}
