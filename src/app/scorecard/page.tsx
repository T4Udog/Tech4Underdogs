import type { Metadata } from "next";
import ScorecardApp from "./ScorecardApp";

export const metadata: Metadata = {
  title: "The Local Business Scorecard | Tech 4 Underdogs",
  description:
    "A 3-minute gut check. Score your website, online presence, maintenance, and IT — and see where you're quietly losing customers.",
};

const scorecardSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "The Local Business Scorecard",
  url: "https://tech4underdogs.com/scorecard",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  description:
    "A 3-minute self-assessment that scores a small business's website, online presence, maintenance, and IT — and shows where it's quietly losing customers.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  provider: {
    "@type": "Organization",
    name: "Tech 4 Underdogs",
    url: "https://tech4underdogs.com",
  },
};

export default function ScorecardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scorecardSchema) }}
      />
      <ScorecardApp calComUrl={process.env.NEXT_PUBLIC_CAL_COM_URL || "https://cal.com/tech-4-underdogs/15min"} />
    </>
  );
}
