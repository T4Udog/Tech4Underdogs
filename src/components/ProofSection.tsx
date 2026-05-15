import Image from "next/image";

export default function ProofSection() {
  return (
    <>
      {/* ── Proof / Commitment ─────────────────────────── */}
      <section className="relative z-10 bg-white section-y">
        <div className="section-container">
          <div className="grid lg:grid-cols-[160px_1fr] xl:grid-cols-[200px_1fr] gap-8 lg:gap-12 items-start">

            <div
              className="text-orange font-eurostile select-none hidden lg:block overflow-visible"
              style={{ fontSize: "9rem", lineHeight: 1 }}
              aria-hidden="true"
            >
              *
            </div>

            <div>
              <h2 className="h-section mb-8">
                <span className="text-navy">You&apos;ve </span>
                <span className="italic text-orange">fought hard</span>
                <span className="text-navy"> to build your </span>
                <span className="italic text-outlined-navy">business.</span>
                <br />
                <span className="text-navy">We help you </span>
                <span className="italic text-orange">protect it.</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6 max-w-[760px]">
                <p className="body-text">
                  We work with business owners who&apos;ve been underestimated,
                  overlooked, or priced out by larger firms. We take our
                  responsibility seriously because we know what&apos;s at stake
                  for you.
                </p>
                <p className="body-text">
                  When your technology is solid, you can stop guarding every
                  corner and focus on growing what you&apos;ve built.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dark CTA ────────────────────────────────────── */}
      <section
        id="contact"
        className="section-y scroll-mt-20 overflow-hidden bg-teal-gradient"
      >
        <div className="section-container">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

            <div className="flex-shrink-0 flex justify-center lg:justify-start">
              <Image
                src="/images/Archie-Toolbelt-e1773949293728.png"
                alt="Archie the Tech 4 Underdogs mascot"
                width={340}
                height={340}
                className="w-[220px] lg:w-[300px] xl:w-[340px] object-contain drop-shadow-xl"
              />
            </div>

            <div className="flex flex-col items-start">
              <p className="eyebrow eyebrow-dark mb-5">
                <span className="eyebrow-mark">✺</span>
                Loyal support, there when you need it.
              </p>

              <h2 className="h-section mb-6">
                <span className="text-white">So, what&apos;s got you </span>
                <span className="italic text-outlined-white">chasing your tail?</span>
                <br />
                <span className="text-white">Let&apos;s </span>
                <span className="italic text-orange">discuss it.</span>
              </h2>

              <p className="body-text body-text-dark max-w-[500px] mb-9">
                No commitment. No sales pitch. Just a real conversation about
                your business and whether we&apos;re the right fit to help.
              </p>

              <a href="mailto:contact@tech4underdogs.com" className="btn btn-primary btn-lg">
                Schedule a Free Consultation <span aria-hidden="true">✦</span>
              </a>

              <p className="font-exo font-semibold text-white/50 text-xs tracking-[0.2em] uppercase mt-5">
                We respond within one business day. No sales pressure, ever.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
