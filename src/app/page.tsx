import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import GuideSection from "@/components/GuideSection";
import ServicesSection from "@/components/ServicesSection";
import TransformationSection from "@/components/TransformationSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import ProofSection from "@/components/ProofSection";
import FAQSection from "@/components/FAQSection";
import { site } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: "https://tech4underdogs.com",
  email: site.email,
  description:
    "Tech 4 Underdogs provides reliable, affordable IT support, web design & hosting, and online marketing for small, local businesses.",
  areaServed: "US",
  priceRange: "$$",
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Support & Security", url: "https://tech4underdogs.com/services/it-support" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design & Hosting", url: "https://tech4underdogs.com/services/web-design" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online Marketing", url: "https://tech4underdogs.com/services/marketing" } },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HeroSection />
      <ProblemSection />
      <GuideSection />
      <ServicesSection />
      <TransformationSection />
      <PortfolioSection />
      <StatsSection />
      <ProofSection />
      <FAQSection />
    </>
  );
}
