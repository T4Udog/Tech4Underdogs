import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-cream overflow-hidden">
      <div className="section-container section-y">
        <div className="hero-layout">

          {/* ── Left col ────────────────────────────────── */}
          <div className="flex flex-col pt-2 w-full lg:max-w-[680px]">
            <p className="eyebrow mb-5">
              <span className="eyebrow-mark">✺</span>
              Never underestimate an underdog
            </p>

            <h1 className="h-section text-navy mb-6 break-words">
              You&apos;ve built
              <br className="hidden lg:inline" />
              {" "}something{" "}
              <span className="italic text-outlined-navy">real.</span>
              <br className="hidden lg:inline" />
              {" "}<span className="italic">It&apos;s time your tech</span>
              <br className="hidden lg:inline" />
              {" "}<span className="italic">had{" "}</span>
              <span className="italic text-orange">your back.</span>
            </h1>

            {/* Mobile-only Archie image */}
            <div className="lg:hidden flex justify-center mb-8">
              <Image
                src="/images/Archie-Toolbelt-e1773949293728.png"
                alt="Archie, the Tech 4 Underdogs mascot, ready for work"
                width={560}
                height={620}
                priority
                className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain"
              />
            </div>

            <p className="body-text lg:max-w-[440px] mb-9 text-[1.05rem]">
              Tech 4 Underdogs provides reliable, affordable IT, websites, and
              online marketing for small, local businesses — built for the ones
              doing serious work when every decision matters.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
              <a href="#contact" className="btn btn-primary justify-center sm:justify-start">
                Talk to a Real Person <span aria-hidden="true">✦</span>
              </a>
              <a href="#services" className="btn btn-secondary justify-center sm:justify-start">
                See How We Help <span aria-hidden="true">✦</span>
              </a>
            </div>

            <p className="tagline whitespace-nowrap" style={{ fontSize: "0.9rem", letterSpacing: "-0.01em" }}>
              Built tough.{" "}
              <span className="italic text-orange">Still standing.</span>
            </p>
          </div>

          {/* ── Right col ───────────────────────────────── */}
          <div className="hidden lg:flex flex-col items-end lg:w-[320px] xl:w-[360px] self-center relative">
            <div className="relative z-10 w-full">
              <Image
                src="/images/Archie-Toolbelt-e1773949293728.png"
                alt="Archie, the Tech 4 Underdogs mascot, ready for work"
                width={560}
                height={620}
                priority
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="absolute top-[55%] -left-40 z-0 bg-cream border border-navy/15 rounded-2xl shadow-lg px-4 py-3 max-w-[260px]">
              <p className="font-exo font-extrabold text-[0.65rem] tracking-[0.22em] uppercase text-navy/70 mb-1.5">
                <span className="text-orange font-black">+</span> Meet Archie
              </p>
              <p className="font-exo font-medium text-[0.78rem] text-navy/75 leading-[1.6]">
                He built his business from scratch, handles everything himself,
                and is done letting his tech slow him down.{" "}
                <em className="font-semibold">Sound familiar?</em>
              </p>
              <span
                className="absolute top-5 -right-2 w-0 h-0"
                style={{
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderLeft: `6px solid #F8F0E6`,
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
