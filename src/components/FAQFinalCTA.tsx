import Link from "next/link";

export default function FAQFinalCTA() {
  return (
    <section className="bg-teal-gradient overflow-hidden">
      <div className="section-container section-y">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="eyebrow eyebrow-dark mb-5 justify-center inline-flex">
            <span className="eyebrow-mark">✺</span>
            Ready when you are
          </p>

          <h2 className="h-section mb-6">
            <span className="text-white">Still have questions? </span>
            <span className="italic text-orange">That&apos;s what the first conversation is for.</span>
          </h2>

          <p className="body-text body-text-dark max-w-[620px] mx-auto mb-9">
            We don&apos;t start with a pitch. We start by understanding your
            business, what&apos;s working, and what isn&apos;t — a
            straightforward conversation with someone who already knows the
            terrain.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn btn-primary btn-lg justify-center">
              Talk to a Real Person <span aria-hidden="true">✦</span>
            </Link>
            <Link href="/#services" className="btn btn-secondary btn-lg justify-center">
              See How We Help <span aria-hidden="true">✦</span>
            </Link>
          </div>

          <p className="font-exo font-semibold text-white/50 text-xs tracking-[0.2em] uppercase mt-6">
            We respond within one business day. No sales pressure, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
