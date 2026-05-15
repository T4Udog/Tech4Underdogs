import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Support & Security | Tech 4 Underdogs",
  description:
    "Proactive IT support and security built for small, local businesses. Monitoring, helpdesk, threat protection, and ongoing maintenance — at small business pricing.",
};

/* ── Icons ─────────────────────────────────────────────────── */

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function WrenchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function RefreshIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

/* ── Data ──────────────────────────────────────────────────── */

const features = [
  {
    Icon: EyeIcon,
    title: "Monitoring & Alerts",
    description:
      "We watch your systems around the clock, staying alert so disruptions don't catch you off guard.",
  },
  {
    Icon: WrenchIcon,
    title: "Support When Things Break",
    description:
      "Fast, clear help from people who know your business — not a call center reading from a script.",
  },
  {
    Icon: ShieldIcon,
    title: "Security Protection",
    description:
      "Threat detection, safe email practices, and layered defenses sized for your business and budget.",
  },
  {
    Icon: RefreshIcon,
    title: "Ongoing Maintenance",
    description:
      "Updates, patches, and regular checkups that keep things running smoothly between calls.",
  },
];

const inclusions = [
  "System & network monitoring",
  "Helpdesk support (real human, not a queue)",
  "Patch & update management",
  "Threat detection & response",
  "Safe email practices & phishing defense",
  "Microsoft 365 setup & administration",
  "Business-class VoIP & phone systems",
  "Endpoint security & antivirus",
  "Cloud backup & disaster recovery",
  "Hardware procurement guidance",
  "Wi-Fi & network optimization",
  "Quarterly system health reviews",
];

const testimonials = [
  {
    quote:
      "Before Tech 4 Underdogs, I was constantly putting out fires. Now my systems just work. I don't think about it anymore.",
    name: "Sarah M.",
    role: "Local Retail Owner",
  },
  {
    quote:
      "I've worked with bigger IT firms and felt completely ignored. These guys actually pick up the phone.",
    name: "James T.",
    role: "Service Business Owner",
  },
  {
    quote:
      "I didn't know how exposed my business was until they did a review. Now I actually feel protected.",
    name: "Maria R.",
    role: "Small Business Owner",
  },
];

/* ── Page ──────────────────────────────────────────────────── */

export default function ITSupportPage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────── */}
      <section className="bg-cream overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">

            <div className="flex flex-col">
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                IT Support & Security for Small Business
              </p>

              <h1 className="h-section text-navy mb-7 break-words">
                Reliable IT support for businesses that{" "}
                <span className="italic text-outlined-navy">can&apos;t afford</span>{" "}
                <span className="italic text-orange">downtime.</span>
              </h1>

              {/* Mobile Archie */}
              <div className="lg:hidden flex justify-center mb-8">
                <Image
                  src="/images/Archie-Toolbelt-e1773949293728.png"
                  alt="Archie, on watch and ready to help"
                  width={560}
                  height={620}
                  priority
                  className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain"
                />
              </div>

              <p className="body-text lg:max-w-[520px] mb-9 text-[1.05rem]">
                When your systems break, your email stops, or a security
                threat slips through — the damage doesn&apos;t wait. We provide
                proactive, hands-on IT support and security built for small,
                local businesses. Calm support. Real people. Small business pricing.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Link href="/contact?service=it" className="btn btn-primary justify-center sm:justify-start">
                  Talk to a Real Person <span aria-hidden="true">✦</span>
                </Link>
                <Link href="#what-we-do" className="btn btn-secondary justify-center sm:justify-start">
                  See How We Help <span aria-hidden="true">✦</span>
                </Link>
              </div>
            </div>

            {/* Desktop Archie */}
            <div className="hidden lg:flex justify-end">
              <Image
                src="/images/Archie-Toolbelt-e1773949293728.png"
                alt="Archie, on watch and ready to help"
                width={560}
                height={620}
                priority
                className="w-full max-w-[380px] h-auto object-contain"
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
                We know the pressure
              </p>

              <h2 className="h-section text-navy mb-7">
                When you&apos;re running lean,{" "}
                <span className="italic text-orange">every disruption</span>{" "}
                <span className="italic text-outlined-navy">hits harder.</span>
              </h2>

              <p className="body-text">
                There&apos;s no IT department down the hall. When your email
                goes down, your systems lag, or a security issue surfaces,
                you&apos;re the one dealing with it — on top of everything
                else. You need someone in your corner who&apos;s already
                paying attention.
              </p>
            </div>

            <div className="bg-cream rounded-2xl border border-navy/10 p-6 lg:p-7">
              <p className="font-exo font-extrabold text-orange text-xs tracking-[0.22em] uppercase mb-4">
                Sound familiar?
              </p>
              <ul className="flex flex-col gap-3.5">
                {[
                  "Email goes down at the worst possible time",
                  "Systems crawl when you need them most",
                  "Phishing attempts slip past your inbox",
                  "Updates and patches you never had time to run",
                  "No one to call when things actually break",
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
                Equal protection, fair price
              </p>
              <p className="h-section">
                <span className="text-white">Small businesses deserve the{" "}</span>
                <span className="italic text-outlined-white">same protection</span>{" "}
                <span className="text-white">as large ones — at a{" "}</span>
                <span className="italic text-orange">price that makes sense.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 + 5. What We Do + Feature grid ────────────── */}
      <section id="what-we-do" className="bg-cream scroll-mt-20 overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">

            <div>
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                What we do
              </p>

              <h2 className="h-section text-navy mb-7">
                Straightforward IT support that keeps your business{" "}
                <span className="italic text-orange">protected</span>{" "}
                <span className="italic text-outlined-navy">and running.</span>
              </h2>

              <p className="body-text mb-6">
                We monitor your systems so problems get caught early. We
                handle issues when they come up — so you&apos;re not left
                waiting on a callback from someone who doesn&apos;t know your
                setup. And we protect your business against the threats that
                target small businesses every day.
              </p>

              <p className="font-exo font-bold text-navy text-[1rem] leading-[1.65] max-w-[480px]">
                No ticketing systems that go nowhere. No call centers that
                don&apos;t know your name. Just direct support from a team
                that treats your business like it matters.
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
                    <h3 className="font-eurostile uppercase text-navy text-[1rem] tracking-wide mb-2">
                      {title}
                    </h3>
                    <p className="font-exo font-medium text-navy/70 text-[0.92rem] leading-[1.65]">
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
                  Everything a{" "}
                  <span className="italic text-orange">small business</span>{" "}
                  IT department would do —{" "}
                  <span className="italic text-outlined-navy">without the overhead.</span>
                </h2>
              </div>
              <Link
                href="/pricing#it-pricing"
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
                alt="Archie keeping watch — protected, supported, covered"
                width={500}
                height={500}
                loading="lazy"
                className="w-full max-w-[320px] lg:max-w-[400px] h-auto object-contain"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                Steady. Dependable. Quiet.
              </p>

              <h2 className="h-section text-navy mb-6">
                You&apos;ve got{" "}
                <span className="italic text-outlined-navy">enough to manage.</span>{" "}
                Your IT shouldn&apos;t be{" "}
                <span className="italic text-orange">one of them.</span>
              </h2>

              <p className="body-text max-w-[540px] mb-6">
                We keep watch so you don&apos;t have to. When something needs
                attention, we&apos;re already on it. When you need help, you
                reach a real person. That&apos;s the kind of steady support
                small businesses deserve — and rarely get.
              </p>

              <p className="tagline text-navy">
                Protected. Supported.{" "}
                <span className="italic text-orange">Covered.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Testimonials ─────────────────────────────── */}
      <section className="bg-sky overflow-hidden">
        <div className="section-container section-y">
          <div className="max-w-[1100px] mx-auto">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <h2 className="h-compact text-navy">
                What{" "}
                <span className="italic text-outlined-orange">small business</span>{" "}
                owners{" "}
                <span className="italic text-orange">say.</span>
              </h2>
              <p className="eyebrow flex-shrink-0">
                <span className="eyebrow-mark">✺</span>
                Real words from real owners
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="bg-white rounded-2xl border border-navy/10 p-7 flex flex-col"
                >
                  <span
                    className="font-eurostile text-orange text-[3rem] leading-none mb-3"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="font-exo font-medium text-navy/80 text-[0.95rem] leading-[1.7] mb-6 flex-1">
                    {t.quote}
                  </blockquote>
                  <figcaption>
                    <p className="font-exo font-extrabold text-orange text-xs tracking-[0.18em] uppercase mb-0.5">
                      {t.name}
                    </p>
                    <p className="font-exo font-medium text-navy/55 text-xs tracking-wide uppercase">
                      {t.role}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────── */}
      <section
        id="it-cta"
        className="section-y scroll-mt-20 overflow-hidden bg-teal-gradient"
      >
        <div className="section-container">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center max-w-[1100px] mx-auto">

            <div>
              <p className="eyebrow eyebrow-dark mb-5">
                <span className="eyebrow-mark">✺</span>
                Let&apos;s talk about your technology
              </p>

              <h2 className="h-section mb-6">
                <span className="text-white">Tell us a little about your{" "}</span>
                <span className="italic text-outlined-white">business.</span>
                <br />
                <span className="text-white">We&apos;ll guide you to the{" "}</span>
                <span className="italic text-orange">right solutions.</span>
              </h2>

              <p className="body-text body-text-dark max-w-[480px]">
                No pressure. No commitment. Just a straightforward conversation
                about your technology — what&apos;s working, what isn&apos;t,
                and how we can help.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 lg:p-9 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <span className="text-orange flex-shrink-0 mt-1">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <p className="font-exo font-extrabold text-white text-xs tracking-[0.18em] uppercase mb-1">
                    Direct line
                  </p>
                  <p className="font-eurostile text-white text-[1.1rem] tracking-wide">
                    Real person on the first call
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-orange flex-shrink-0 mt-1">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div>
                  <p className="font-exo font-extrabold text-white text-xs tracking-[0.18em] uppercase mb-1">
                    Response window
                  </p>
                  <p className="font-eurostile text-white text-[1.1rem] tracking-wide">
                    Within one business day
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-orange flex-shrink-0 mt-1">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                <div>
                  <p className="font-exo font-extrabold text-white text-xs tracking-[0.18em] uppercase mb-1">
                    Zero pressure
                  </p>
                  <p className="font-eurostile text-white text-[1.1rem] tracking-wide">
                    No sales pitch, ever
                  </p>
                </div>
              </div>

              <Link
                href="/contact?service=it"
                className="btn btn-primary btn-lg justify-center w-full mt-2"
              >
                Talk to a Real Person <span aria-hidden="true">✦</span>
              </Link>

              <p className="font-exo font-semibold text-white/55 text-[0.7rem] tracking-[0.2em] uppercase text-center">
                We respond within one business day.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
