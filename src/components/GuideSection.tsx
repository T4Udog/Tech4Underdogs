import Image from "next/image";

export default function GuideSection() {
  return (
    <section className="bg-cream overflow-hidden relative">

      <div
        className="hidden md:block absolute right-0 top-0 text-orange font-eurostile leading-none select-none pointer-events-none"
        style={{
          fontSize: "clamp(8rem, 22vw, 22rem)",
          lineHeight: 0.85,
          opacity: 0.9,
          right: "-2rem",
          top: "-1rem",
        }}
        aria-hidden="true"
      >
        *
      </div>

      <div className="section-container section-y relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div>
            <p className="eyebrow mb-5">
              <span className="eyebrow-mark">✺</span>
              Let us take the lead
            </p>

            <h2 className="h-section text-navy mb-7">
              That&apos;s{" "}
              <span className="italic text-orange">exactly</span>
              <br />
              why{" "}
              <span className="italic text-navy">we exist.</span>
            </h2>

            <p className="body-text max-w-[480px] mb-5">
              Tech 4 Underdogs was built for small businesses that have been
              burned, overlooked, or priced out by companies that were never
              really built for them. We act as your behind-the-scenes partner —
              keeping your technology quiet, your website steady, and your local
              presence working the way it should.
            </p>

            <p className="font-exo font-bold text-navy text-[1rem] leading-[1.65] max-w-[480px] mb-9">
              No jargon. No runaround. Just a reliable team that already has its
              eyes on your business.
            </p>

            <p className="tagline text-navy">
              Calm. Capable.{" "}
              <span className="italic text-orange">On your side.</span>
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/Archie-Capable.png"
              alt="Archie calm and capable at his desk"
              width={520}
              height={520}
              loading="lazy"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
