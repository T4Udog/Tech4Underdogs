"use client";

import Link from "next/link";
import { useState } from "react";

export type FAQItem = { q: string; a: string };

type Props = {
  id: string;
  bg: "white" | "sky" | "cream";
  eyebrow: string;
  headline: React.ReactNode;
  faqs: FAQItem[];
  ctaIntro: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

const bgClass = {
  white: "bg-white",
  sky: "bg-cream",
  cream: "bg-cream",
};

export default function FAQCategorySection({
  id,
  bg,
  eyebrow,
  headline,
  faqs,
  ctaIntro,
  primaryCta,
  secondaryCta,
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={id} className={`scroll-mt-24 ${bgClass[bg]}`}>
      <div className="section-container section-y">
        <div className="max-w-[860px] mx-auto">
          <p className="eyebrow mb-5">
            <span className="eyebrow-mark">✺</span>
            {eyebrow}
          </p>

          <h2 className="h-section text-navy mb-10">{headline}</h2>

          <div className="bg-white rounded-2xl border border-navy/10 shadow-sm overflow-hidden">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-navy/10 last:border-b-0">
                  <button
                    type="button"
                    className="w-full flex items-start gap-4 text-left px-6 sm:px-8 py-5 cursor-pointer group"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`${id}-panel-${i}`}
                  >
                    <span
                      className="text-orange font-extrabold text-lg flex-shrink-0 w-5 text-center leading-none mt-0.5 transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span className="font-eurostile text-navy text-[0.9rem] sm:text-[1rem] tracking-wide uppercase flex-1 leading-[1.35]">
                      {faq.q}
                    </span>
                  </button>

                  <div
                    id={`${id}-panel-${i}`}
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="font-exo font-medium text-navy/75 text-[0.95rem] leading-[1.75] pl-[3.25rem] sm:pl-[3.75rem] pr-6 sm:pr-8 pb-6">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section CTA */}
          <div className="mt-10 text-center">
            <p className="font-exo font-semibold text-navy/60 text-sm tracking-wide mb-4">
              {ctaIntro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={primaryCta.href} className="btn btn-primary justify-center">
                {primaryCta.label} <span aria-hidden="true">✦</span>
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn btn-secondary justify-center">
                  {secondaryCta.label} <span aria-hidden="true">✦</span>
                </Link>
              )}
            </div>
            <p className="font-exo font-semibold text-navy/45 text-[0.7rem] tracking-[0.2em] uppercase mt-5">
              We respond within one business day. No sales pressure, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
