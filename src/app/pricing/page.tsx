import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Tech 4 Underdogs",
  description:
    "Transparent pricing for IT Support, Web Design & Hosting, and Online Marketing — built for small business budgets. No hidden fees, no long-term lock-in.",
};

/* ── Icons ─────────────────────────────────────────────────── */

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function MegaphoneIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11l18-8v18l-18-8v-2z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

/* ── Data ──────────────────────────────────────────────────── */

const itTiers = [
  {
    name: "On Watch",
    price: "$35",
    response: "Next business day",
    bestFor: "Businesses that need visibility and basic coverage",
    features: [
      "System monitoring & alerts",
      "Next-business-day helpdesk response",
      "Basic threat detection",
      "Patch & update management",
      "Safe email practice support",
    ],
    popular: false,
  },
  {
    name: "On Guard",
    price: "$55",
    response: "4 business hours",
    bestFor: "Businesses handling sensitive data or growing fast",
    features: [
      "Everything in On Watch",
      "4-hour response time",
      "Security protection suite",
      "Monthly system checkup",
    ],
    popular: true,
  },
  {
    name: "On Call",
    price: "$75",
    response: "1–2 hour priority",
    bestFor: "Businesses where downtime costs real money",
    features: [
      "Everything in On Guard",
      "1–2 hour priority response",
      "Dedicated point of contact",
      "Full security suite + layered defenses",
      "Proactive quarterly reviews",
      "Microsoft Office Suite included",
    ],
    popular: false,
  },
];

const webPlans = [
  {
    eyebrow: "Local SEO Website",
    name: "Ready to Run",
    price: "$149",
    unit: "/mo",
    description: "A fast, performance-optimized site built for local search visibility — hosted, secured, and maintained by us.",
    features: [
      "Custom AI-built or branded design",
      "Clean, performance-optimized site",
      "Built for local search visibility",
      "Hosting, security & uptime included",
      "Ongoing maintenance & updates",
      "Month-to-month service agreement",
    ],
    bestFor: "Businesses that need a credible online presence fast",
    cta: { label: "Get a Free Consultation", href: "/contact?service=web" },
    popular: true,
  },
  {
    eyebrow: "Custom / Full Stack Build",
    name: "Built to Last",
    price: "Custom",
    unit: " quote",
    description: "A fully bespoke build for businesses with specific needs or complex requirements — designed around your brand and customers.",
    features: [
      "Full custom or WordPress build",
      "Designed around your brand & customers",
      "Hosting, security & maintenance included",
      "Same team builds and supports it",
      "No ongoing contract — your site is yours",
    ],
    bestFor: "Businesses with specific needs or complex requirements",
    cta: { label: "Call for Details", href: "/contact?service=web" },
    popular: false,
  },
];

const marketingServices = [
  {
    Icon: SearchIcon,
    name: "Local SEO",
    price: "Starting at $299/mo",
    description:
      "Foundation local search optimization — keyword targeting, on-page SEO, citation building, and monthly reporting. Includes Google Business Profile setup if needed.",
  },
  {
    Icon: MegaphoneIcon,
    name: "Google Ads (PPC)",
    price: "Starting at $399/mo + ad spend",
    description:
      "Campaign setup, ongoing management, and monthly performance reporting. Ad spend billed separately, directly to your account — no markup.",
  },
  {
    Icon: MapPinIcon,
    name: "Google Business Profile",
    price: "Starting at $199/mo — included with Local SEO",
    description:
      "Profile optimization, regular posting, review monitoring, and ongoing updates. Available as a standalone service if that's all you need.",
  },
  {
    Icon: GlobeIcon,
    name: "Google Local Services",
    price: "Starting at $199/mo",
    description:
      "Setup and ongoing management of Google Local Services Ads — get the green Google Guaranteed badge and pay per qualified lead.",
  },
];

const jumpLinks = [
  { label: "IT Support & Security", href: "#it-pricing", Icon: ShieldIcon },
  { label: "Web Design & Hosting", href: "#web-pricing", Icon: GlobeIcon },
  { label: "Online Marketing", href: "#marketing-pricing", Icon: MegaphoneIcon },
];

/* ── Page ──────────────────────────────────────────────────── */

export default function PricingPage() {
  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────────── */}
      <section className="bg-cream overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">

            <div className="flex flex-col">
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                Simple, transparent pricing for small business
              </p>

              <h1 className="h-section text-navy mb-7 break-words">
                <span className="italic text-orange">Straightforward pricing.</span>{" "}
                <span className="italic text-outlined-navy">No surprises.</span>{" "}
                No runaround.
              </h1>

              {/* Mobile Archie */}
              <div className="lg:hidden flex justify-center mb-8">
                <Image
                  src="/images/Archie-Capable.png"
                  alt="Archie, the Tech 4 Underdogs mascot"
                  width={560}
                  height={520}
                  priority
                  className="w-full max-w-[300px] sm:max-w-[360px] h-auto object-contain"
                />
              </div>

              <p className="body-text lg:max-w-[540px] text-[1.05rem]">
                You should know exactly what you&apos;re paying for before you
                make a single call. Below: pricing for IT Support & Security,
                Web Design & Hosting, and Online Marketing — broken down clearly,
                with everything that&apos;s included. No hidden fees. No
                locked-in packages you can&apos;t understand.
              </p>
            </div>

            {/* Desktop Archie */}
            <div className="hidden lg:flex justify-end">
              <Image
                src="/images/Archie-Capable.png"
                alt="Archie, the Tech 4 Underdogs mascot"
                width={560}
                height={520}
                priority
                className="w-full max-w-[380px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Jump nav (integrated, floating pills) */}
      <section className="bg-cream relative">
        <div className="section-container pb-12 lg:pb-16 -mt-2">
          <div className="max-w-[1000px] mx-auto bg-white rounded-2xl shadow-xl border border-navy/10 p-5 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <p className="font-exo font-extrabold text-xs tracking-[0.22em] uppercase text-orange flex-shrink-0 sm:border-r sm:border-navy/10 sm:pr-5">
                Jump to ↓
              </p>
              <div className="grid sm:grid-cols-3 gap-2 flex-1">
                {jumpLinks.map(({ label, href, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    className="group hover:bg-cream rounded-lg px-3 py-2.5 flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <span className="text-orange flex-shrink-0">
                      <Icon />
                    </span>
                    <span className="font-eurostile uppercase text-navy text-[0.8rem] tracking-wide flex-1 group-hover:text-orange transition-colors">
                      {label}
                    </span>
                    <span className="text-navy/30 group-hover:text-orange transition-colors flex-shrink-0">
                      <ArrowRight />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: IT Pricing ───────────────────────── */}
      <section id="it-pricing" className="bg-sky scroll-mt-20 overflow-hidden">
        <div className="section-container section-y">

          <div className="max-w-[760px] mb-12">
            <p className="eyebrow mb-5">
              <span className="eyebrow-mark">✺</span>
              IT Support & Security
            </p>

            <h2 className="h-section text-navy mb-6">
              Protection sized for{" "}
              <span className="italic text-orange">your business</span> —{" "}
              <span className="italic text-outlined-navy">not an enterprise budget.</span>
            </h2>

            <p className="body-text mb-3">
              Priced per user, per month — so you only pay for the people who
              actually need coverage. All three tiers include proactive
              monitoring and real human support. The difference is response
              time, depth of security, and access.
            </p>
            <p className="font-exo font-semibold text-navy/70 text-[0.9rem] tracking-wide">
              3-user minimum on all packages. Month-to-month service agreement, no long-term lock-in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {itTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl bg-white p-7 lg:p-8 flex flex-col border ${
                  tier.popular
                    ? "border-orange shadow-xl lg:scale-[1.03] lg:-my-2"
                    : "border-navy/10"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white font-exo font-extrabold text-[0.65rem] tracking-[0.22em] uppercase px-3 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="font-eurostile uppercase text-navy text-[1.25rem] tracking-wide mb-2">
                  {tier.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-eurostile text-navy text-[2.75rem] leading-none">
                    {tier.price}
                  </span>
                  <span className="font-exo font-medium text-navy/55 text-[0.85rem]">
                    /user/mo
                  </span>
                </div>
                <p className="font-exo font-medium text-navy/50 text-xs tracking-wide mb-5">
                  3-user minimum
                </p>

                <div className="bg-navy/5 rounded-lg px-3 py-2 mb-5 inline-flex items-center gap-2">
                  <span className="text-orange flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <span className="font-exo font-bold text-navy text-xs tracking-[0.12em] uppercase">
                    Response: {tier.response}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5 items-start text-navy/80 font-exo text-[0.9rem] leading-[1.55]">
                      <span className="text-orange"><Check /></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-exo font-semibold text-navy/55 text-xs leading-[1.5] mb-6 pt-5 border-t border-navy/10">
                  <span className="font-bold text-navy/70 uppercase tracking-wide block mb-1">Best for</span>
                  {tier.bestFor}
                </p>

                <Link
                  href="/contact?service=it"
                  className={`btn justify-center w-full ${
                    tier.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  Talk to a Real Person <span aria-hidden="true">✦</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Web Pricing ──────────────────────── */}
      <section id="web-pricing" className="bg-cream scroll-mt-20 overflow-hidden">
        <div className="section-container section-y">

          <div className="max-w-[760px] mb-12">
            <p className="eyebrow mb-5">
              <span className="eyebrow-mark">✺</span>
              Web Design & Hosting
            </p>

            <h2 className="h-section text-navy mb-6">
              A{" "}
              <span className="italic text-orange">fast, professional</span>{" "}
              website built for{" "}
              <span className="italic text-outlined-navy">local visibility.</span>
            </h2>

            <p className="body-text">
              Two paths, depending on what your business needs. Both include
              hosting, maintenance, security, and updates — built and supported
              by the same team. No vendors to juggle. No mystery bills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {webPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl bg-white p-7 lg:p-9 flex flex-col border ${
                  plan.popular ? "border-orange shadow-xl" : "border-navy/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white font-exo font-extrabold text-[0.65rem] tracking-[0.22em] uppercase px-3 py-1.5 rounded-full">
                    Best Value
                  </span>
                )}

                <p className="font-exo font-bold text-xs tracking-[0.22em] uppercase text-orange mb-2">
                  {plan.eyebrow}
                </p>
                <h3 className="font-eurostile uppercase text-navy text-[1.5rem] tracking-wide mb-4">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-5">
                  <span className="font-eurostile text-navy text-[2.75rem] leading-none">
                    {plan.price}
                  </span>
                  <span className="font-exo font-medium text-navy/55 text-[0.95rem]">
                    {plan.unit}
                  </span>
                </div>

                <p className="font-exo font-medium text-navy/70 text-[0.95rem] leading-[1.65] mb-6">
                  {plan.description}
                </p>

                <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 items-start text-navy/80 font-exo text-[0.92rem] leading-[1.55]">
                      <span className="text-orange"><Check /></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-exo font-semibold text-navy/55 text-xs leading-[1.5] mb-6 pt-5 border-t border-navy/10">
                  <span className="font-bold text-navy/70 uppercase tracking-wide block mb-1">Best for</span>
                  {plan.bestFor}
                </p>

                <Link
                  href={plan.cta.href}
                  className={`btn justify-center w-full ${
                    plan.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {plan.cta.label} <span aria-hidden="true">✦</span>
                </Link>
              </div>
            ))}
          </div>

          <p className="font-exo font-medium text-navy/55 text-[0.85rem] mt-8 max-w-[760px]">
            Monthly packages include a simple service agreement. Custom builds
            require no ongoing contract — your site is yours.
          </p>
        </div>
      </section>

      {/* ── Section 5: Marketing Pricing ────────────────── */}
      <section id="marketing-pricing" className="bg-white scroll-mt-20 overflow-hidden">
        <div className="section-container section-y">

          <div className="max-w-[760px] mb-12">
            <p className="eyebrow mb-5">
              <span className="eyebrow-mark">✺</span>
              Online Marketing
            </p>

            <h2 className="h-section text-navy mb-6">
              Local marketing that{" "}
              <span className="italic text-orange">works</span> — without the{" "}
              <span className="italic text-outlined-navy">agency markup</span>{" "}
              or the mystery.
            </h2>

            <p className="body-text">
              Three things that move the needle for small, local businesses:
              getting you found in local search, running Google Ads that earn
              their keep, and keeping your Google Business Profile working for
              you every day. Pricing starts where it makes sense and scales
              with your market.
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            {marketingServices.map(({ Icon, name, price, description }) => {
              // split "Starting at $299/mo + ad spend" → prefix + amount + suffix
              const match = price.match(/^(.*?)(\$[\d.]+)([\/\w\s+—-]*)$/);
              const prefix = match ? match[1].trim() : price;
              const amount = match ? match[2] : "";
              const suffix = match ? match[3].trim() : "";

              return (
                <div
                  key={name}
                  className="bg-cream rounded-2xl border border-navy/10 hover:border-orange/40 transition-colors p-6 lg:p-7 grid md:grid-cols-[auto_1fr_auto] gap-5 md:gap-8 items-start md:items-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-orange/10 text-orange flex items-center justify-center flex-shrink-0">
                    <Icon />
                  </div>

                  <div>
                    <h3 className="font-eurostile uppercase text-navy text-[1.15rem] lg:text-[1.25rem] tracking-wide mb-2">
                      {name}
                    </h3>
                    <p className="font-exo font-medium text-navy/70 text-[0.92rem] leading-[1.65]">
                      {description}
                    </p>
                  </div>

                  <div className="md:text-right md:border-l md:border-navy/10 md:pl-7 lg:pl-8 md:min-w-[180px]">
                    {prefix && (
                      <p className="font-exo font-extrabold text-orange text-[0.65rem] tracking-[0.22em] uppercase mb-1">
                        {prefix}
                      </p>
                    )}
                    <div className="flex items-baseline md:justify-end gap-1">
                      <span className="font-eurostile text-navy text-[2rem] lg:text-[2.25rem] leading-none tabular-nums">
                        {amount}
                      </span>
                      {suffix && (
                        <span className="font-exo font-medium text-navy/55 text-[0.85rem] leading-none">
                          {suffix.startsWith("/") ? suffix : ` ${suffix}`}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Standalone CTA card */}
          <div className="bg-navy rounded-2xl p-7 lg:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="md:max-w-[560px]">
              <p className="font-exo font-extrabold text-orange text-xs tracking-[0.22em] uppercase mb-2">
                Not sure where to start?
              </p>
              <p className="font-eurostile text-white uppercase text-[1.15rem] lg:text-[1.35rem] tracking-wide leading-[1.2]">
                Every engagement starts with a{" "}
                <span className="italic text-orange">scoping conversation</span>{" "}
                — no contracts, just clarity.
              </p>
            </div>
            <Link
              href="/contact?service=marketing"
              className="btn btn-primary btn-lg flex-shrink-0 justify-center"
            >
              Talk to a Real Person <span aria-hidden="true">✦</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 6: Proof bar ────────────────────────── */}
      <section className="bg-teal-gradient overflow-hidden">
        <div className="section-container py-16 lg:py-24">
          <div className="max-w-[860px] mx-auto text-center">
            <p className="h-section">
              <span className="text-white">We{" "}</span>
              <span className="italic text-outlined-white">don&apos;t charge</span>{" "}
              <span className="text-white">for things you{" "}</span>
              <span className="italic text-orange">don&apos;t need.</span>
            </p>
            <p className="body-text body-text-dark max-w-[640px] mx-auto mt-6">
              Every package is built around what small businesses actually use
              — and what they can actually afford.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 7: Reassurance ──────────────────────── */}
      <section className="bg-cream overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-center max-w-[1100px] mx-auto">

            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <Image
                src="/images/Archie-On-Your-Side.png"
                alt="Archie calm and ready to help"
                width={500}
                height={500}
                loading="lazy"
                className="w-full max-w-[320px] lg:max-w-[380px] h-auto object-contain"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                No pressure. Just clarity.
              </p>

              <h2 className="h-section text-navy mb-6">
                Not sure where to start? That&apos;s exactly what the{" "}
                <span className="italic text-orange">first conversation</span>{" "}
                <span className="italic text-outlined-navy">is for.</span>
              </h2>

              <p className="body-text max-w-[540px] mb-6">
                A lot of small business owners come to us having been oversold,
                overcharged, or just ignored. We don&apos;t start with a pitch.
                We start by understanding what you&apos;re dealing with and
                what actually makes sense for your business.
              </p>

              <p className="tagline text-navy">
                No pressure.{" "}
                <span className="italic text-orange">Watching your back from day one.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Final CTA ────────────────────────── */}
      <section
        id="pricing-cta"
        className="section-y scroll-mt-20 overflow-hidden bg-teal-gradient"
      >
        <div className="section-container">
          <div className="max-w-[760px] mx-auto text-center">
            <p className="eyebrow eyebrow-dark mb-5 justify-center">
              <span className="eyebrow-mark">✺</span>
              Let&apos;s have a real conversation
            </p>

            <h2 className="h-section mb-6">
              <span className="italic text-outlined-white">Ready to talk?</span>{" "}
              <span className="text-white">We&apos;ll take it{" "}</span>
              <span className="italic text-orange">from there.</span>
            </h2>

            <p className="body-text body-text-dark mb-9 max-w-[520px] mx-auto">
              No commitment. No sales pressure. Just a real conversation
              about whether we&apos;re the right fit to help.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 mb-6">
              <Link href="/contact" className="btn btn-primary btn-lg justify-center">
                Talk to a Real Person <span aria-hidden="true">✦</span>
              </Link>
              <Link
                href="/#services"
                className="btn btn-lg justify-center border border-white/30 text-white hover:bg-white/10"
              >
                See How We Help <span aria-hidden="true">✦</span>
              </Link>
            </div>

            <p className="font-exo font-semibold text-white/55 text-xs tracking-[0.2em] uppercase">
              We respond within one business day. No sales pressure, ever.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
