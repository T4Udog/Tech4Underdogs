import Image from "next/image";

export default function FAQReassurance() {
  return (
    <section className="bg-cream">
      <div className="section-container section-y">
        <div className="max-w-[820px] mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/Archie-Capable.png"
              alt=""
              width={200}
              height={220}
              className="w-[140px] h-auto object-contain"
              aria-hidden="true"
            />
          </div>

          <p className="eyebrow mb-5 justify-center inline-flex">
            <span className="eyebrow-mark">✺</span>
            No pressure. Just clarity.
          </p>

          <h2 className="h-section text-navy mb-6">
            <span>Still have questions? </span>
            <span className="italic text-orange">That&apos;s what the first conversation is for.</span>
          </h2>

          <p className="body-text max-w-[600px] mx-auto">
            We don&apos;t start with a pitch. We start by understanding your
            business, what&apos;s working, and what isn&apos;t — a
            straightforward conversation with someone who already knows the
            terrain.
          </p>
        </div>
      </div>
    </section>
  );
}
