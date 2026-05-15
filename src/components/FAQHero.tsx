const jumpLinks = [
  { label: "IT Support & Security", href: "#it-support-faq" },
  { label: "Web Design & Hosting", href: "#web-design-faq" },
  { label: "Online Marketing", href: "#online-marketing-faq" },
];

export default function FAQHero() {
  return (
    <section className="bg-cream">
      <div className="section-container section-y">
        <div className="max-w-[820px]">
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

          <p className="body-text max-w-[640px] mb-10 text-[1.05rem]">
            What IT support actually costs, how long SEO takes, whether you
            really own your website — answered clearly, without the runaround.
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-exo font-bold text-xs tracking-[0.18em] uppercase text-navy/50 mr-1">
              Jump to:
            </span>
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-exo font-bold text-xs tracking-[0.14em] uppercase text-navy bg-white border border-navy/15 hover:border-orange hover:text-orange transition-colors rounded-full px-4 py-2.5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
