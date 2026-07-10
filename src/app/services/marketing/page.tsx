import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Testimonials from "@/components/sections/Testimonials";
import { PrimaryCta, SecondaryCta } from "@/components/PrimaryCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Online Marketing | Tech 4 Underdogs",
  description:
    "Local SEO, Google Ads, and Google Business Profile management for small, local businesses. Honest pricing, plain-language reporting, real results.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Online Marketing",
  name: "Online Marketing",
  url: "https://tech4underdogs.com/services/marketing",
  provider: {
    "@type": "Organization",
    name: "Tech 4 Underdogs",
    url: "https://tech4underdogs.com",
  },
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "Small businesses",
  },
  description:
    "Local SEO, Google Ads, and Google Business Profile management for small, local businesses — plain-language reporting, no long-term lock-in.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Online Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Local SEO" },
        price: "299",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Google Ads (PPC)" },
        price: "399",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Google Business Profile" },
        price: "199",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Google Local Services" },
        price: "199",
        priceCurrency: "USD",
      },
    ],
  },
};

/* ── Icons ─────────────────────────────────────────────────── */

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function MegaphoneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11l18-8v18l-18-8v-2z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </svg>
  );
}

/* ── Data ──────────────────────────────────────────────────── */

const features = [
  {
    Icon: SearchIcon,
    title: "Local SEO",
    description:
      "We optimize your site and online presence so local customers find you when they search — not your competitor down the street. The foundation everything else is built on.",
  },
  {
    Icon: MegaphoneIcon,
    title: "Google Ads (PPC & Local Services)",
    description:
      "Put your business in front of customers ready to act right now. We set it up, manage it, and make sure your budget is working — not disappearing.",
  },
  {
    Icon: MapPinIcon,
    title: "Google Business Profile",
    description:
      "First thing most local customers see. We keep it accurate, optimized, and active — always working for you, even when you're not watching.",
  },
  {
    Icon: ChartIcon,
    title: "Clear Reporting",
    description:
      "You'll know what's happening in plain language — not agency-speak. No mystery metrics. Just a clear picture of what's working and what we're improving.",
  },
];

const inclusions = [
  "Keyword research & local search targeting",
  "On-page SEO optimization",
  "Citation building & directory management",
  "Google Business Profile setup & optimization",
  "Review monitoring & response strategy",
  "Google Ads campaign setup & management",
  "Local Services Ads setup & lead routing",
  "Landing page conversion optimization",
  "Conversion & call tracking setup",
  "Competitor visibility monitoring",
  "Monthly performance reporting",
  "Plain-language strategy reviews",
];


/* ── Page ──────────────────────────────────────────────────── */

export default function MarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <section className="bg-cream overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">

            <div className="flex flex-col">
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                Online Marketing for Small Business
              </p>

              <h1 className="h-section text-navy mb-7 break-words">
                Get found by{" "}
                <span className="italic text-orange">local customers</span>{" "}
                — and stop paying for marketing that{" "}
                <span className="italic text-outlined-navy">doesn&apos;t work.</span>
              </h1>

              {/* Mobile Archie */}
              <div className="lg:hidden flex justify-center mb-8">
                <Image
                  src="/images/Archie-Local-SEO.png"
                  alt="Archie scouting the local map for SEO"
                  width={620}
                  height={626}
                  priority
                  className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain"
                />
              </div>

              <p className="body-text lg:max-w-[540px] mb-9 text-[1.05rem]">
                We help small, local businesses show up in local search, run
                Google Ads that make sense for your budget, and get the most
                out of a Google Business Profile that works around the clock.
                No jargon. No burning money on guesswork.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <PrimaryCta className="justify-center sm:justify-start" />
                <SecondaryCta className="justify-center sm:justify-start" href="/pricing#marketing-pricing" label="See Pricing" />
              </div>
            </div>

            {/* Desktop Archie */}
            <div className="hidden lg:flex justify-end">
              <Image
                src="/images/Archie-Local-SEO.png"
                alt="Archie scouting the local map for SEO"
                width={620}
                height={626}
                priority
                className="w-full max-w-[400px] xl:max-w-[440px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Problem (split w/ pain points card) ──────── */}
      <section className="bg-white overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">

            <div>
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                The honest truth
              </p>

              <h2 className="h-section text-navy mb-7">
                Most small businesses are{" "}
                <span className="italic text-orange">invisible online</span> — and{" "}
                <span className="italic text-navy">paying too much</span>{" "}
                to stay that way.
              </h2>

              <p className="body-text">
                Paid an agency for marketing and saw nothing change?
                You&apos;re not alone. Small local businesses get sold false
                promises, confusing dashboards, and smoke and mirrors —
                while competitors are showing up in search and you&apos;re
                not. You need three things done well: show up in local
                search, manage your Google presence, and run ads that earn
                their keep.
              </p>
            </div>

            <div className="bg-cream rounded-2xl border border-navy/10 p-6 lg:p-7">
              <p className="font-exo font-extrabold text-orange text-xs tracking-[0.22em] uppercase mb-4">
                Sound familiar?
              </p>
              <ul className="flex flex-col gap-3.5">
                {[
                  "Customers can't find you in local search",
                  "Google Ads feels like burning money",
                  "Your Google profile is wrong, old, or empty",
                  "Last agency disappeared after the contract",
                  "Reports you can't read, results you can't see",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 items-start font-exo font-medium text-navy/80 text-[0.95rem] leading-[1.55]"
                  >
                    <span className="text-orange flex-shrink-0 mt-1.5" aria-hidden="true">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Proof bar (split w/ side accent) ─────────── */}
      <section className="bg-teal-gradient overflow-hidden relative">
        <div
          className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 text-orange/15 font-eurostile leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(10rem, 22vw, 22rem)" }}
          aria-hidden="true"
        >
          *
        </div>
        <div className="section-container py-16 lg:py-24 relative z-10">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center max-w-[1100px] mx-auto">
            <p
              className="font-eurostile text-orange leading-none select-none"
              style={{ fontSize: "clamp(5rem, 10vw, 8rem)" }}
              aria-hidden="true"
            >
              =
            </p>
            <div>
              <p className="eyebrow eyebrow-dark mb-4">
                <span className="eyebrow-mark">✺</span>
                Honest. Clear. Paid for what it does.
              </p>
              <p className="h-section">
                <span className="text-white">Marketing that&apos;s{" "}</span>
                <span className="italic text-white">honest</span>{" "}
                <span className="text-white">about cost and{" "}</span>
                <span className="italic text-orange">clear about what it does.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 + 5. What We Do + Feature grid ────────────── */}
      <section id="what-we-do" className="bg-cream scroll-mt-20 overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 lg:items-center">

            <div>
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                What we do
              </p>

              <h2 className="h-section text-navy mb-7">
                Local SEO that{" "}
                <span className="italic text-orange">gets you found</span> —
                backed by ads and a Google presence that{" "}
                <span className="italic text-navy">does the work for you.</span>
              </h2>

              <p className="body-text mb-6">
                We focus on what actually moves the needle for small, local
                businesses: getting you to show up when someone nearby searches
                for what you do. Local SEO is the foundation. Google Ads picks
                up where organic search leaves off. Your Google Business
                Profile is often the first thing a customer sees — we make
                sure it&apos;s accurate, complete, and working in your favor
                every day.
              </p>

              <p className="font-exo font-bold text-navy text-[1rem] leading-[1.65] max-w-[480px]">
                No long-term agency contracts. No mystery dashboards. Just
                clear, consistent work that builds visibility over time.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl border border-navy/10 p-6 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange/10 text-orange flex items-center justify-center flex-shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-eurostile uppercase text-navy text-[1.2rem] lg:text-[1.3rem] tracking-wide mb-2 leading-tight">
                      {title}
                    </h3>
                    <p className="font-exo font-medium text-navy/70 text-[0.95rem] leading-[1.65]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5b. Full inclusion list ─────────────────────── */}
      <section className="bg-white overflow-hidden">
        <div className="section-container section-y">
          <div className="max-w-[1100px] mx-auto">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow mb-5">
                  <span className="eyebrow-mark">✺</span>
                  What&apos;s included
                </p>
                <h2 className="h-compact text-navy">
                  Real{" "}
                  <span className="italic text-orange">visibility work</span>{" "}
                  — not{" "}
                  <span className="italic text-navy">marketing theater.</span>
                </h2>
              </div>
              <Link
                href="/pricing#marketing-pricing"
                className="font-exo font-extrabold text-xs tracking-[0.18em] uppercase text-orange hover:text-navy transition-colors flex items-center gap-2 flex-shrink-0"
              >
                See pricing tiers <span aria-hidden="true">→</span>
              </Link>
            </div>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {inclusions.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 items-start font-exo font-medium text-navy/80 text-[0.95rem] leading-[1.55]"
                >
                  <span className="text-orange"><Check /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 6. Reassurance ──────────────────────────────── */}
      <section className="bg-cream overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-center max-w-[1100px] mx-auto">

            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <Image
                src="/images/Archie-On-Your-Side.png"
                alt="Archie watching the trail — steady, consistent, on your side"
                width={500}
                height={500}
                loading="lazy"
                className="w-full max-w-[320px] lg:max-w-[400px] h-auto object-contain"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                Steady. Consistent. On your side.
              </p>

              <h2 className="h-section text-navy mb-6">
                We do{" "}
                <span className="italic text-navy">the marketing.</span>
                <br />
                You{" "}
                <span className="italic text-orange">run the business.</span>
              </h2>

              <p className="body-text max-w-[540px] mb-6">
                A lot of small businesses have handed their marketing over to
                an agency and felt like they disappeared into a void — no
                updates, no results, no one to call. We work differently. Same
                team handling your marketing month after month, staying close
                to what&apos;s working and what isn&apos;t. When something
                needs attention, we&apos;re already watching.
              </p>

              <p className="tagline text-navy">
                Calm. Consistent.{" "}
                <span className="italic text-orange">On the trail.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Testimonials ─────────────────────────────── */}
      <section className="bg-cream overflow-hidden">
        <div className="section-container section-y">
          <div className="max-w-[1100px] mx-auto">
            <Testimonials
              eyebrow="What clients say"
              heading={
                <h2 className="h-compact text-navy text-balance">
                  Real results from{" "}
                  <span className="italic text-orange">real owners</span>{" "}
                  <span className="italic text-orange">— in their words.</span>
                </h2>
              }
            />
          </div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────── */}
      <section
        id="marketing-cta"
        className="section-y scroll-mt-20 overflow-hidden bg-teal-gradient"
      >
        <div className="section-container">
          <div className="max-w-[1100px] mx-auto">

            <div className="text-center mb-12">
              <p className="eyebrow eyebrow-dark mb-5 justify-center">
                <span className="eyebrow-mark">✺</span>
                Two ways to start
              </p>

              <h2 className="h-section mb-6">
                <span className="text-white">Ready to see what{" "}</span>
                <span className="italic text-white">straightforward marketing</span>{" "}
                <span className="italic text-orange">looks like?</span>
              </h2>

              <p className="body-text body-text-dark max-w-[640px] mx-auto">
                Start with pricing to see what&apos;s included and what it
                costs — no forms required. Or talk it through first if
                you&apos;d rather have a real conversation about what makes
                sense for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">

              {/* Primary CTA — Talk to a Real Person */}
              <div className="bg-orange rounded-2xl p-7 lg:p-9 flex flex-col">
                <p className="font-exo font-extrabold text-white/70 text-xs tracking-[0.22em] uppercase mb-3">
                  Primary path
                </p>
                <h3 className="font-eurostile uppercase text-white text-[1.4rem] lg:text-[1.65rem] tracking-wide leading-[1.1] mb-4">
                  Have a real conversation.
                </h3>
                <p className="font-exo font-medium text-white/90 text-[0.95rem] leading-[1.65] mb-7 flex-1">
                  Tell us about your business and we&apos;ll guide you to what
                  makes sense. No forms. No commitment. No pitch.
                </p>
                <Link
                  href={site.cta.primary.href}
                  className="font-exo font-extrabold text-xs tracking-[0.18em] uppercase text-orange bg-white hover:bg-cream transition-colors rounded-md py-3.5 px-6 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  {site.cta.primary.label} <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Secondary CTA — See Pricing */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 lg:p-9 flex flex-col">
                <p className="font-exo font-extrabold text-white/55 text-xs tracking-[0.22em] uppercase mb-3">
                  Or start with numbers
                </p>
                <h3 className="font-eurostile uppercase text-white text-[1.4rem] lg:text-[1.65rem] tracking-wide leading-[1.1] mb-4">
                  See the pricing.
                </h3>
                <p className="font-exo font-medium text-white/80 text-[0.95rem] leading-[1.65] mb-7 flex-1">
                  Transparent pricing for Local SEO, Google Ads, and Google
                  Business Profile management.
                </p>
                <Link
                  href="/pricing#marketing-pricing"
                  className="btn btn-secondary justify-center w-full bg-navy hover:bg-navy/85"
                >
                  See Pricing <span aria-hidden="true">✦</span>
                </Link>
              </div>
            </div>

            <p className="font-exo font-semibold text-white/55 text-xs tracking-[0.2em] uppercase text-center mt-8">
              We respond within one business day. No sales pressure, ever.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
