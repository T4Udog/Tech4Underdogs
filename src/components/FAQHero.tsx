import Image from "next/image";

const jumpLinks = [
  { label: "IT Support & Security", href: "#it-support-faq" },
  { label: "Web Design & Hosting", href: "#web-design-faq" },
  { label: "Online Marketing", href: "#online-marketing-faq" },
];

export default function FAQHero() {
  return (
    <section className="bg-cream overflow-hidden">
      <div className="section-container section-y">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">

          {/* Left col */}
          <div className="flex flex-col">
            <p className="eyebrow mb-5">
              <span className="eyebrow-mark">✺</span>
              Frequently Asked Questions
            </p>

            <h1 className="h-section text-navy mb-6">
              <span className="italic text-outlined-navy">Real answers</span>
              <span> to the questions </span>
              <span>small business owners </span>
              <span className="italic text-orange">ask most.</span>
            </h1>

            {/* Mobile Archie */}
            <div className="lg:hidden flex justify-center mb-8">
              <Image
                src="/images/Archie-FAQ.png"
                alt="Archie answering questions"
                width={620}
                height={626}
                priority
                className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain"
              />
            </div>

            <p className="body-text max-w-[640px] text-[1.05rem]">
              What IT support actually costs, how long SEO takes, whether you
              really own your website — answered clearly, without the runaround.
            </p>
          </div>

          {/* Right col — Desktop Archie */}
          <div className="hidden lg:flex justify-end">
            <Image
              src="/images/Archie-FAQ.png"
              alt="Archie answering questions"
              width={620}
              height={626}
              priority
              className="w-full max-w-[460px] xl:max-w-[520px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Jump nav — full width, single row */}
        <div className="mt-10 lg:mt-12 bg-white rounded-2xl shadow-md border border-navy/10 p-4 lg:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <span className="font-exo font-extrabold text-xs lg:text-sm tracking-[0.22em] uppercase text-orange flex-shrink-0 sm:border-r sm:border-navy/10 sm:pr-5">
              Jump to ↓
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
              {jumpLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-exo font-bold text-xs lg:text-[0.85rem] tracking-[0.14em] uppercase text-navy text-center bg-cream/60 hover:bg-orange hover:text-white border border-navy/10 transition-colors rounded-lg px-4 py-3"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
