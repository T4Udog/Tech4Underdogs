import Image from "next/image";
import Testimonials from "@/components/sections/Testimonials";
import { PrimaryCta } from "@/components/PrimaryCta";

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
                <span className="italic text-navy">business.</span>
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

      {/* ── Homepage testimonials (above primary CTA) ── */}
      <section className="bg-cream overflow-hidden">
        <div className="section-container section-y">
          <div className="max-w-[1100px] mx-auto">
            <Testimonials
              limit={3}
              eyebrow="Real words from real owners"
              heading={
                <h2 className="h-compact text-navy text-balance">
                  What{" "}
                  <span className="italic text-orange">small business</span>{" "}
                  owners{" "}
                  <span className="italic text-orange">say.</span>
                </h2>
              }
            />
          </div>
        </div>
      </section>

      {/* ── Dark CTA ────────────────────────────────────── */}
      <section
        id="contact"
        className="section-y scroll-mt-20 overflow-hidden bg-teal-gradient"
      >
        <div className="section-container">
          <div className="grid lg:grid-cols-[minmax(360px,_44%)_1fr] gap-10 lg:gap-16 items-center">

            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/Archie-On-Your-Side.png"
                alt="Archie the Tech 4 Underdogs mascot, on your side"
                width={520}
                height={520}
                loading="lazy"
                className="w-[260px] sm:w-[320px] lg:w-full lg:max-w-[460px] xl:max-w-[520px] h-auto object-contain drop-shadow-xl"
              />
            </div>

            <div className="flex flex-col items-start lg:pl-4 xl:pl-8">
              <p className="eyebrow eyebrow-dark mb-5">
                <span className="eyebrow-mark">✺</span>
                Loyal support, there when you need it.
              </p>

              <h2 className="h-section mb-6">
                <span className="text-white">So, what&apos;s got you </span>
                <span className="italic text-white">chasing your tail?</span>
                <br />
                <span className="text-white">Let&apos;s </span>
                <span className="italic text-orange">discuss it.</span>
              </h2>

              <p className="body-text body-text-dark max-w-[520px] mb-9">
                No commitment. No sales pitch. Just a real conversation about
                your business and whether we&apos;re the right fit to help.
              </p>

              <PrimaryCta size="lg" />

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
