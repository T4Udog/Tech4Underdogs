import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Testimonials from "@/components/sections/Testimonials";
import { PrimaryCta, SecondaryCta } from "@/components/PrimaryCta";

export const metadata: Metadata = {
  title: "Web Design & Hosting | Tech 4 Underdogs",
  description:
    "Fast, professional websites built for local search visibility. Hosting, maintenance, and security included. Built and supported by the same team.",
};

/* ── Icons ─────────────────────────────────────────────────── */

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function GaugeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 14l4-4" />
      <path d="M3.51 15a9 9 0 1 1 16.98 0" />
    </svg>
  );
}
function PaintbrushIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18.37 2.63 14 7l-1-1L8.27 10.73 2 17v5h5l6.27-6.27L18 11l-1-1 4.37-4.37a2.12 2.12 0 0 0-3-3z" />
    </svg>
  );
}
function ServerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
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

/* ── Data ──────────────────────────────────────────────────── */

const features = [
  {
    Icon: GaugeIcon,
    title: "Fast & Performance-Optimized",
    description:
      "Sites that load fast, score well on Google, and don't make visitors wait. Speed is a feature — we treat it like one.",
  },
  {
    Icon: PaintbrushIcon,
    title: "Designed Around Your Business",
    description:
      "Not a template dropped on your logo. Clean, modern design that reflects your brand and gives customers a reason to stay.",
  },
  {
    Icon: MapPinIcon,
    title: "Built for Local Search",
    description:
      "Structured to rank when someone nearby searches for what you do. Local SEO foundations baked in from day one.",
  },
  {
    Icon: ServerIcon,
    title: "Hosting & Maintenance Included",
    description:
      "Managed hosting on infrastructure we control, with security, backups, and updates handled. No extra vendor to chase.",
  },
];

const inclusions = [
  "Custom design or AI-built starter",
  "Mobile-first responsive layout",
  "Local SEO foundations & keyword targeting",
  "Google Business Profile integration",
  "SSL certificate & security hardening",
  "Managed hosting on infrastructure we control",
  "Uptime monitoring & automated backups",
  "Software updates & security patches",
  "Contact forms & call tracking setup",
  "Analytics & conversion tracking",
  "Ongoing content edits & maintenance",
  "Same team builds it and supports it",
];


/* ── Page ──────────────────────────────────────────────────── */

export default function WebDesignPage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <section className="bg-cream overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">

            <div className="flex flex-col">
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                Web Design & Hosting for Small Business
              </p>

              <h1 className="h-section text-navy mb-7 break-words">
                A website that{" "}
                <span className="italic text-orange">earns its keep</span> —
                and{" "}
                <span className="italic text-outlined-navy">stays out of your way.</span>
              </h1>

              {/* Mobile Archie */}
              <div className="lg:hidden flex justify-center mb-8">
                <Image
                  src="/images/Archie-Website.png"
                  alt="Archie building a website"
                  width={620}
                  height={626}
                  priority
                  className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain"
                />
              </div>

              <p className="body-text lg:max-w-[540px] mb-9 text-[1.05rem]">
                Fast, professional sites built for local search — with
                hosting, maintenance, and security handled by the same team
                that built it. No vendors to juggle. No mystery bills. Just a
                site that works for your business every day.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <PrimaryCta className="justify-center sm:justify-start" />
                <SecondaryCta className="justify-center sm:justify-start" href="/pricing#web-pricing" label="See Pricing" />
              </div>
            </div>

            {/* Desktop Archie */}
            <div className="hidden lg:flex justify-end">
              <Image
                src="/images/Archie-Website.png"
                alt="Archie building a website"
                width={620}
                height={626}
                priority
                className="w-full max-w-[460px] xl:max-w-[520px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Problem + Pain points (visually richer) ──── */}
      <section className="bg-white overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">

            <div>
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                The hard truth
              </p>

              <h2 className="h-section text-navy mb-7">
                A bad website doesn&apos;t just{" "}
                <span className="italic text-orange">sit there.</span>{" "}
                <span className="italic text-navy">It costs you customers.</span>
              </h2>

              <p className="body-text">
                Slow loading. Broken on mobile. Hard to find on Google. Old
                info no one updates. Most small business sites were built
                once, handed off, and forgotten — leaking trust every day
                they stay broken.
              </p>
            </div>

            <div className="bg-cream rounded-2xl border border-navy/10 p-6 lg:p-7">
              <p className="font-exo font-extrabold text-orange text-xs tracking-[0.22em] uppercase mb-4">
                Sound familiar?
              </p>
              <ul className="flex flex-col gap-3.5">
                {[
                  "You wince every time you share your URL",
                  "It looks broken on a phone",
                  "Edits cost more than the site is worth",
                  "Nobody can find you in local search",
                  "You're not sure who's even hosting it",
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

      {/* ── 3. Proof bar ────────────────────────────────── */}
      <section className="bg-teal-gradient overflow-hidden">
        <div className="section-container py-16 lg:py-24">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="h-section">
              <span className="text-white">A site is{" "}</span>
              <span className="italic text-white">a tool,</span>{" "}
              <span className="text-white">not an art project.</span>
              <br />
              <span className="text-white">We build the kind that{" "}</span>
              <span className="italic text-orange">brings in business.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── 4 + 5. What We Do + Feature Grid ────────────── */}
      <section id="what-we-do" className="bg-cream scroll-mt-20 overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 lg:items-center">

            <div>
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                What we do
              </p>

              <h2 className="h-section text-navy mb-7">
                Fast, professional websites built for{" "}
                <span className="italic text-orange">local visibility</span> —{" "}
                <span className="italic text-navy">backed by real support.</span>
              </h2>

              <p className="body-text mb-6">
                Two paths, depending on what your business needs. Our Local
                SEO Website ($149/mo) is the fastest way to a credible online
                presence — clean design, local search baked in, hosted and
                maintained by us. Our Custom Builds are bespoke, fully owned,
                and designed around the way your business actually works.
              </p>

              <p className="font-exo font-bold text-navy text-[1rem] leading-[1.65] max-w-[480px]">
                Both include hosting, security, and ongoing maintenance.
                Same team builds it and supports it — no handoffs, no
                vendors to chase.
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
                  Every site ships with{" "}
                  <span className="italic text-orange">everything it needs</span>{" "}
                  to{" "}
                  <span className="italic text-navy">earn its keep.</span>
                </h2>
              </div>
              <Link
                href="/pricing#web-pricing"
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
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-center max-w-[1100px] mx-auto">

            <div>
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                One team, start to finish.
              </p>

              <h2 className="h-section text-navy mb-6">
                The same people who{" "}
                <span className="italic text-navy">build it</span>{" "}
                are the ones who{" "}
                <span className="italic text-orange">support it.</span>
              </h2>

              <p className="body-text max-w-[540px] mb-6">
                No handoffs to a junior dev who doesn&apos;t know your site.
                No outsourced support reading from a script. When something
                needs attention, you reach the same team that built it — and
                we already know what to do.
              </p>

              <p className="tagline text-navy">
                Fast. Findable.{" "}
                <span className="italic text-orange">Yours for the long haul.</span>
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/Archie-Capable.png"
                alt="Archie keeping the site running"
                width={500}
                height={500}
                loading="lazy"
                className="w-full max-w-[320px] lg:max-w-[400px] h-auto object-contain"
              />
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
                  Real{" "}
                  <span className="italic text-orange">site owners.</span>{" "}
                  <span className="italic text-orange">Real results.</span>
                </h2>
              }
            />
          </div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────── */}
      <section
        id="web-cta"
        className="section-y scroll-mt-20 overflow-hidden bg-teal-gradient"
      >
        <div className="section-container">
          <div className="max-w-[760px] mx-auto text-center">
            <p className="eyebrow eyebrow-dark mb-5 justify-center">
              <span className="eyebrow-mark">✺</span>
              Ready when you are
            </p>

            <h2 className="h-section mb-6">
              <span className="text-white">Let&apos;s build a site that{" "}</span>
              <span className="italic text-white">works for you.</span>
            </h2>

            <p className="body-text body-text-dark mb-9 max-w-[560px] mx-auto">
              See pricing for both paths, or talk it through first. Either
              way, no commitment — just a real conversation about what your
              business needs.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 mb-6">
              <PrimaryCta size="lg" className="justify-center" />
              <Link
                href="/pricing#web-pricing"
                className="btn btn-lg justify-center border border-white/30 text-white hover:bg-white/10"
              >
                See Pricing <span aria-hidden="true">✦</span>
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
