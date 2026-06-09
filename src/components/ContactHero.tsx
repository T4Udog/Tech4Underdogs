import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="bg-cream overflow-hidden">
      <div className="section-container section-y">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">

          {/* ── Left col ────────────────────────────────── */}
          <div className="flex flex-col">
            <p className="eyebrow mb-5">
              <span className="eyebrow-mark">✺</span>
              Contact Tech 4 Underdogs
            </p>

            <h1
              className="h-section text-navy mb-6 text-balance"
              style={{ fontSize: "clamp(2.2rem, 4.6vw, 4.25rem)" }}
            >
              Tell us what&apos;s{" "}
              <span className="italic text-orange whitespace-nowrap">going on.</span>{" "}
              We&apos;ll{" "}
              <span className="italic text-outlined-navy whitespace-nowrap">take it from there.</span>
            </h1>

            {/* Mobile-only Archie image */}
            <div className="lg:hidden flex justify-center mb-8">
              <Image
                src="/images/Archie-On-Your-Side.png"
                alt="Archie the Tech 4 Underdogs mascot, ready to help"
                width={560}
                height={620}
                priority
                className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain"
              />
            </div>

            <p className="body-text lg:max-w-[480px] mb-9 text-[1.05rem]">
              IT support, a new website, or help getting found online — start
              here. Tell us a little about your business and what you&apos;re
              dealing with. We respond within one business day. No pressure,
              no pitch.
            </p>

            <p className="tagline text-navy">
              Steady. Reliable.{" "}
              <span className="italic text-orange">On your side.</span>
            </p>
          </div>

          {/* ── Right col ───────────────────────────────── */}
          <div className="hidden lg:flex justify-end">
            <Image
              src="/images/Archie-On-Your-Side.png"
              alt="Archie the Tech 4 Underdogs mascot, ready to help"
              width={620}
              height={620}
              priority
              className="w-full max-w-[420px] xl:max-w-[470px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
