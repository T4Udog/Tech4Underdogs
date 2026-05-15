export default function PortfolioSection() {
  return (
    <section className="bg-sky overflow-hidden">
      <div className="section-container section-y">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="h-section text-navy">
              <span className="italic text-orange">Port</span>folio
            </h2>

            <p className="body-text max-w-[560px] mt-4">
              We&apos;ve helped local business owners get their tech working for
              them — not against them. From websites to IT support, here&apos;s
              a sample of what we&apos;ve built together.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary flex-shrink-0 self-start sm:self-auto">
            Work With Us <span aria-hidden="true">✦</span>
          </a>
        </div>
      </div>
    </section>
  );
}
