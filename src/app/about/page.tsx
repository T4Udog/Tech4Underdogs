import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Testimonials from "@/components/sections/Testimonials";
import { PrimaryCta, SecondaryCta } from "@/components/PrimaryCta";

export const metadata: Metadata = {
  title: "About | Tech 4 Underdogs",
  description:
    "Tech 4 Underdogs was built for small businesses the big firms overlook. 30+ years of combined experience in IT, web, and marketing — put to work for the businesses that need it most.",
};

const features = [
  {
    title: "Priced for Small Business",
    description:
      "No enterprise pricing, no minimum retainers sized for large firms. Packages built around what small businesses actually need — and can afford.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "A Real Person. Every Time.",
    description:
      "No call centers. When something needs attention, you reach someone who already knows your business — not someone reading from a script.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: "We Stay With You",
    description:
      "We don't disappear after the first invoice. Our model is built on long-term relationships — because that's when we actually become useful.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Reliability over promises.",
    body: "We don't oversell what we can do. We show up, do the work, and make sure your systems, your website, and your marketing keep working — day after day.",
  },
  {
    title: "Clarity over jargon.",
    body: "You shouldn't need a translator to understand your own technology. We explain things plainly, keep you informed, and never hide behind complexity.",
  },
  {
    title: "Loyalty over transactions.",
    body: "We're most useful when we've been with you long enough to know your business. We're in your corner for the long haul — not just until the contract renews.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────────── */}
      <section className="bg-cream overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">

            <div className="flex flex-col">
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                About Tech 4 Underdogs
              </p>

              <h1 className="h-section text-navy mb-7 break-words">
                We built this for the{" "}
                <span className="italic text-outlined-navy">businesses</span>{" "}
                the big firms{" "}
                <span className="italic text-orange">overlook.</span>
              </h1>

              {/* Mobile-only Archie */}
              <div className="lg:hidden flex justify-center mb-8">
                <Image
                  src="/images/Archie-Toolbelt-e1773949293728.png"
                  alt="Archie, the Tech 4 Underdogs mascot"
                  width={560}
                  height={620}
                  priority
                  className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain"
                />
              </div>

              <p className="body-text lg:max-w-[500px] mb-9 text-[1.05rem]">
                Tech 4 Underdogs is a technology, web, and marketing company
                built for small, locally-based businesses. With 30+ years of
                combined experience, we exist to give serious small business
                owners the reliable, affordable support they deserve.
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <PrimaryCta className="justify-center sm:justify-start" />
                <SecondaryCta className="justify-center sm:justify-start" href="/#services" />
              </div>
            </div>

            {/* Desktop Archie */}
            <div className="hidden lg:flex justify-end">
              <Image
                src="/images/Archie-Toolbelt-e1773949293728.png"
                alt="Archie, the Tech 4 Underdogs mascot"
                width={560}
                height={620}
                priority
                className="w-full max-w-[380px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Mission (split 2-col w/ pull quote) ─ */}
      <section className="bg-white overflow-hidden relative">
        {/* Decorative giant asterisk */}
        <div
          className="hidden lg:block absolute -left-8 top-12 text-orange/10 font-eurostile leading-none select-none pointer-events-none"
          style={{ fontSize: "20rem", lineHeight: 0.85 }}
          aria-hidden="true"
        >
          *
        </div>

        <div className="section-container section-y relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 lg:items-center">

            <div>
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                Why we exist
              </p>

              <h2 className="h-section text-navy mb-6">
                Most tech companies aren&apos;t built for{" "}
                <span className="italic text-orange">small businesses.</span>
                <br />
                <span className="italic text-navy">We are.</span>
              </h2>

              <p className="body-text">
                Small business owners run lean. No IT department down the hall,
                no marketing team on staff, no web developer on call. When
                something breaks, it falls on them — and the vendors meant to
                help often make things harder.
              </p>
            </div>

            <aside className="lg:pl-8 lg:border-l-4 lg:border-orange relative lg:max-w-[520px]">
              <span
                className="hidden lg:block absolute -left-3 top-0 text-orange font-eurostile text-[2.5rem] leading-none bg-white px-1"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="font-eurostile uppercase text-navy text-[1.4rem] sm:text-[1.55rem] lg:text-[1.7rem] leading-[1.25] mb-6 text-balance">
                Small businesses are the{" "}
                <span className="italic text-orange">backbone</span>{" "}
                of local communities — and they deserve partners that take
                their needs{" "}
                <span className="italic text-navy">as seriously as they do.</span>
              </p>
              <p className="font-exo font-medium text-navy/65 text-[0.95rem] leading-[1.7] text-pretty">
                We started Tech 4 Underdogs because that gap was too big to
                ignore. Same team, same care, every project — built around
                what actually moves the needle for the people doing the work.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Section 3: Credibility Anchor (split + stats) ─ */}
      <section className="bg-teal-gradient overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center max-w-[1100px] mx-auto">

            {/* Left: big stat */}
            <div className="text-center lg:text-left">
              <p className="eyebrow eyebrow-dark mb-5 justify-center lg:justify-start">
                <span className="eyebrow-mark">✺</span>
                Experience that earns the right
              </p>
              <p
                className="font-eurostile text-white leading-none mb-3 tabular-nums"
                style={{ fontSize: "clamp(5rem, 12vw, 11rem)" }}
              >
                30<span className="text-orange">+</span>
              </p>
              <p className="font-eurostile uppercase text-white text-[1.1rem] lg:text-[1.3rem] tracking-wide">
                Years of combined experience
              </p>
            </div>

            {/* Right: stat trio + body */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-3 sm:gap-5">
                {[
                  { stat: "3", label: "Disciplines mastered", sub: "IT · Web · Marketing" },
                  { stat: "100%", label: "Small business focus", sub: "By design, not default" },
                  { stat: "1", label: "Team start to finish", sub: "Same people, every project" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 lg:p-5"
                  >
                    <p className="font-eurostile text-orange text-[1.5rem] lg:text-[2rem] leading-none mb-2 tabular-nums">
                      {s.stat}
                    </p>
                    <p className="font-exo font-extrabold text-white text-[0.7rem] lg:text-[0.75rem] tracking-[0.14em] uppercase mb-1 leading-tight">
                      {s.label}
                    </p>
                    <p className="font-exo font-medium text-white/55 text-[0.7rem] leading-[1.45]">
                      {s.sub}
                    </p>
                  </div>
                ))}
              </div>

              <p className="body-text body-text-dark">
                Three decades in the trenches of design, technology, and
                marketing. That experience doesn&apos;t go to a big-agency
                client list — it goes to work for{" "}
                <span className="text-white font-semibold">your business.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Positioning + Feature cards ──────── */}
      <section className="bg-cream overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16">

            <div>
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                Who we&apos;re built for
              </p>

              <h2 className="h-section text-navy mb-7">
                We don&apos;t serve{" "}
                <span className="italic text-navy">everyone.</span>
                <br />
                We serve the ones the big firms{" "}
                <span className="italic text-orange">overlook.</span>
              </h2>

              <p className="body-text mb-6">
                Large IT firms and marketing agencies are built for large
                clients. Their pricing, processes, and attention reflect that.
                Small businesses — 2 employees or 20, real community footprint
                — get handed off to junior staff or priced out entirely.
              </p>

              <p className="tagline text-navy">
                We stay focused.{" "}
                <span className="italic text-orange">That&apos;s why we&apos;re good at it.</span>
              </p>
            </div>

            {/* Feature cards */}
            <div className="flex flex-col gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl border border-navy/10 p-6 flex gap-5 items-start"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange/10 text-orange flex items-center justify-center flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-eurostile uppercase text-navy text-[0.95rem] tracking-wide mb-2">
                      {f.title}
                    </h3>
                    <p className="font-exo font-medium text-navy/70 text-[0.92rem] leading-[1.65]">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Values (flipped — zigzag) ────────── */}
      <section className="bg-cream overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">

            {/* Values list — now LEFT */}
            <ul className="flex flex-col gap-6 order-2 lg:order-1">
              {values.map((v, i) => (
                <li
                  key={v.title}
                  className="flex gap-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-navy/10 p-5 lg:p-6"
                >
                  <span
                    className="font-eurostile text-orange text-[2rem] leading-none tabular-nums flex-shrink-0 mt-1"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-eurostile uppercase text-navy text-[1.05rem] mb-2 tracking-wide">
                      {v.title}
                    </h3>
                    <p className="body-text">{v.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Heading column — now RIGHT, sticky on lg */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-28">
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                How we work
              </p>

              <h2 className="h-section text-navy mb-6">
                We take{" "}
                <span className="italic text-orange">three things</span>{" "}
                seriously.
                <br />
                <span className="italic text-navy">Everything else follows.</span>
              </h2>

              <p className="tagline text-navy">
                Calm. Capable.{" "}
                <span className="italic text-orange">In your corner.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Testimonials ─────────────────────── */}
      <section className="bg-white overflow-hidden">
        <div className="section-container section-y">
          <div className="max-w-[1100px] mx-auto">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* ── Section 7: Closing CTA ──────────────────────── */}
      <section
        id="about-cta"
        className="section-y scroll-mt-20 overflow-hidden bg-teal-gradient"
      >
        <div className="section-container">
          <div className="max-w-[760px] mx-auto text-center">
            <p className="eyebrow eyebrow-dark mb-5 justify-center">
              <span className="eyebrow-mark">✺</span>
              Let&apos;s have a real conversation
            </p>

            <h2 className="h-section mb-6">
              <span className="text-white">If you&apos;re tired of vendors who don&apos;t </span>
              <span className="italic text-white">show up,</span>
              <br />
              <span className="text-white">let&apos;s </span>
              <span className="italic text-orange">talk.</span>
            </h2>

            <p className="body-text body-text-dark mb-9 max-w-[560px] mx-auto">
              No pressure. No pitch. Just a straightforward conversation about
              your technology, your website, or your marketing — and whether
              we&apos;re the right fit to help.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 mb-6">
              <PrimaryCta size="lg" className="justify-center" />
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
