import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/sections/Testimonials";
import { PrimaryCta } from "@/components/PrimaryCta";

export default function ProofSection() {
  return (
    <>
      {/* ── Proof / Commitment ─────────────────────────── */}
      <section className="relative z-10 bg-white overflow-hidden">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left col – illustration */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/Archie-Tech-Support.png"
                alt="Archie at the workstation, protecting your business"
                width={620}
                height={626}
                loading="lazy"
                className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] h-auto object-contain"
              />
            </div>

            {/* Right col – headline + copy */}
            <div>
              <p className="eyebrow mb-5">
                <span className="eyebrow-mark">✺</span>
                Built for the long haul
              </p>

              <h2 className="h-section mb-7">
                <span className="text-navy">You&apos;ve </span>
                <span className="italic text-orange">fought hard</span>
                <span className="text-navy"> to build your </span>
                <span className="italic text-navy">business.</span>{" "}
                <span className="text-navy">We help you </span>
                <span className="italic text-orange">protect it.</span>
              </h2>

              <p className="body-text mb-5 max-w-[560px]">
                We work with business owners who&apos;ve been underestimated,
                overlooked, or priced out by larger firms. We take our
                responsibility seriously because we know what&apos;s at stake
                for you.
              </p>

              <p className="tagline text-navy">
                Calm. Capable.{" "}
                <span className="italic text-orange">On your side.</span>
              </p>
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
          <div className="max-w-[860px] mx-auto text-center">
            <p className="eyebrow eyebrow-dark mb-5 justify-center inline-flex">
              <span className="eyebrow-mark">✺</span>
              Loyal support, there when you need it.
            </p>

            <h2 className="h-section mb-6">
              <span className="text-white">So, what&apos;s got you </span>
              <span className="italic text-white">chasing your tail?</span>{" "}
              <span className="text-white">Let&apos;s </span>
              <span className="italic text-orange">discuss it.</span>
            </h2>

            <p className="body-text body-text-dark max-w-[600px] mx-auto mb-9">
              No commitment. No sales pitch. Just a real conversation about
              your business and whether we&apos;re the right fit to help.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
              <PrimaryCta size="lg" className="justify-center" />
              <Link href="/#services" className="btn btn-lg justify-center border border-white/30 text-white hover:bg-white/10">
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
