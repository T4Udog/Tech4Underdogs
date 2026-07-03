import type { Metadata } from "next";
import ScorecardApp from "./ScorecardApp";

export const metadata: Metadata = {
  title: "The Local Business Scorecard | Tech 4 Underdogs",
  description:
    "A 3-minute gut check. Score your website, online presence, maintenance, and IT — and see where you're quietly losing customers.",
};

export default function ScorecardPage() {
  return <ScorecardApp calComUrl={process.env.NEXT_PUBLIC_CAL_COM_URL || "https://cal.com/tech-4-underdogs/15min"} />;
}
