import Image from "next/image";

const badges = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "Real people. No call centers.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    label: "One partner. IT, Web & Marketing.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    label: "Fast to respond to your needs.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-navy overflow-hidden">

      {/* ── Feature badge strip ─────────────────────────── */}
      <div className="section-container pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-b border-white/10 pb-8">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center justify-center gap-3 py-4 sm:py-5 px-6"
            >
              <div className="text-white/50 flex-shrink-0">{b.icon}</div>
              <span className="font-exo font-semibold text-white text-xs tracking-[0.18em] uppercase">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main content ────────────────────────────────── */}
      <div className="section-container section-y">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left – illustration */}
          <div className="relative">
            <Image
              src="/images/Archie-Computers.png"
              alt="Archie surrounded by tech problems — broken monitors, notifications, and a 404 error"
              width={580}
              height={540}
              priority
              sizes="(min-width: 1024px) 580px, 100vw"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right – headline + copy */}
          <div>
            <p className="eyebrow eyebrow-dark mb-5">
              <span className="eyebrow-mark">✺</span>
              We know your pain
            </p>

            <h2 className="h-section mb-7">
              <span className="text-white">You handle </span>
              <span className="italic text-white">everything.</span>
              <br />
              <span className="italic text-orange">Your tech shouldn&apos;t</span>
              <br />
              <span className="italic text-orange">be one more thing to wrestle.</span>
            </h2>

            <p className="body-text body-text-dark max-w-[440px] mb-8">
              You open early, close late, and deal with problems as they come.
              But when your systems break, your website lags, or your marketing
              goes nowhere, you&apos;re on your own — no IT department down the
              hall, no time to chase vendors. You just need things to work.
            </p>

            <p className="tagline text-white">
              Too many hats.{" "}
              <span className="italic text-orange">Too many headaches.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
