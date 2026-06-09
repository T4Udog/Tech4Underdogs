import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/lib/portfolio";
import { site } from "@/lib/site";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-cream overflow-hidden">
      <div className="section-container section-y">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="eyebrow mb-5">
              <span className="eyebrow-mark">✺</span>
              Recent work
            </p>
            <h2 className="h-section text-navy text-balance">
              <span className="italic text-orange">Port</span>folio
            </h2>
            <p className="body-text max-w-[560px] mt-4 text-pretty">
              We&apos;ve helped local business owners get their tech working for
              them — not against them. From websites to IT support, here&apos;s
              a sample of what we&apos;ve built together.
            </p>
          </div>

          <Link href={site.cta.primary.href} className="btn btn-primary flex-shrink-0 self-start sm:self-auto">
            {site.cta.primary.label} <span aria-hidden="true">✦</span>
          </Link>
        </div>

        {portfolio.length === 0 ? (
          <div className="bg-white border border-navy/10 rounded-2xl p-10 text-center">
            <p className="body-text">Case studies coming soon.</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {portfolio.map((p) => {
              const Card = (
                <article className="group bg-white border border-navy/10 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-200 hover:border-orange/40 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden bg-navy/5">
                    <Image
                      src={p.image}
                      alt={p.client}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6 lg:p-7">
                    <p className="font-exo font-bold text-xs tracking-[0.18em] uppercase text-navy/55 mb-2">
                      {p.industry}
                    </p>
                    <h3 className="font-eurostile uppercase text-navy text-[1.1rem] tracking-wide leading-tight mb-3">
                      {p.client}
                    </h3>
                    <p className="body-text text-pretty mb-5 flex-1">
                      {p.result}
                    </p>
                    <ul className="flex flex-wrap gap-2 mt-auto">
                      {p.services.map((s) => (
                        <li
                          key={s}
                          className="font-exo font-semibold text-[0.7rem] tracking-[0.14em] uppercase text-navy/70 bg-cream border border-navy/10 rounded-full px-3 py-1"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
              return (
                <li key={p.slug}>
                  {p.href ? (
                    <Link href={p.href} className="block h-full focus:outline-none">
                      {Card}
                    </Link>
                  ) : (
                    Card
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
