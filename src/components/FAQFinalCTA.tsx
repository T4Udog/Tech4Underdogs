import Link from "next/link";

export default function FAQFinalCTA() {
  return (
    <section className="bg-teal-gradient overflow-hidden">
      <div className="section-container section-y">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="eyebrow eyebrow-dark mb-5 justify-center inline-flex">
            <span className="eyebrow-mark">✺</span>
            Ready when you are
          </p>

          <h2 className="h-section mb-6">
            <span className="text-white">Ready to talk? </span>
            <span className="italic text-white">We&apos;ll take it</span>
            <br />
            <span className="text-white">from </span>
            <span className="italic text-orange">there.</span>
          </h2>

          <p className="body-text body-text-dark max-w-[560px] mx-auto mb-9">
            No commitment. No sales pressure. Just a real conversation about
            your technology, your website, or your marketing — and whether
            we&apos;re the right fit.
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
