"use client";

import { useState, type ReactNode } from "react";
import { testimonials as defaultData, type Testimonial } from "@/lib/testimonials";

type Props = {
  limit?: number;
  data?: Testimonial[];
  heading?: ReactNode;
  eyebrow?: string;
  variant?: "light" | "dark";
  layout?: "slider" | "grid";
  className?: string;
};

export default function Testimonials({
  limit,
  data = defaultData,
  heading,
  eyebrow = "Real words from real owners",
  variant = "light",
  layout = "slider",
  className = "",
}: Props) {
  const items = limit ? data.slice(0, limit) : data;
  const [active, setActive] = useState(0);
  if (items.length === 0) return null;

  const dark = variant === "dark";
  const cardBg = dark
    ? "bg-white/8 border-white/20"
    : "bg-white border-navy/10 shadow-sm";
  const quoteColor = dark ? "text-white/90" : "text-navy/85";
  const captionName = "text-orange";
  const captionMeta = dark ? "text-white/55" : "text-navy/55";

  const showSlider = layout === "slider" && items.length > 1;

  return (
    <div className={className}>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
        {heading ? (
          <div>{heading}</div>
        ) : (
          <h2 className={`h-compact text-balance ${dark ? "text-white" : "text-navy"}`}>
            What{" "}
            <span className="italic text-orange">small business</span>{" "}
            owners{" "}
            <span className="italic text-orange">say.</span>
          </h2>
        )}
        <p className={`eyebrow flex-shrink-0 ${dark ? "eyebrow-dark" : ""}`}>
          <span className="eyebrow-mark">✺</span>
          {eyebrow}
        </p>
      </div>

      {showSlider ? (
        <>
          <div className="relative">
            <ul className="overflow-hidden">
              {items.map((t, i) => (
                <li
                  key={`${t.business}-${i}`}
                  aria-hidden={i === active ? undefined : true}
                  className={`${i === active ? "block" : "hidden"}`}
                >
                  <figure className={`${cardBg} border rounded-2xl p-8 lg:p-10 flex flex-col max-w-[860px] mx-auto`}>
                    <span
                      className="font-eurostile text-orange text-[3.5rem] leading-none mb-4"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <blockquote className={`font-exo font-medium text-[1.05rem] lg:text-[1.15rem] leading-[1.7] mb-7 text-pretty ${quoteColor}`}>
                      {t.quote}
                    </blockquote>
                    <figcaption>
                      <p className={`font-exo font-extrabold text-xs tracking-[0.18em] uppercase mb-0.5 ${captionName}`}>
                        {t.name}
                      </p>
                      <p className={`font-exo font-medium text-xs tracking-wide uppercase ${captionMeta}`}>
                        {t.business}
                        {t.role ? ` · ${t.role}` : ""}
                      </p>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center gap-2.5 mt-8" role="tablist" aria-label="Testimonial pagination">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-label={`Show testimonial ${i + 1}`}
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  i === active
                    ? "bg-orange w-8"
                    : dark
                    ? "bg-white/30 hover:bg-white/55 w-2.5"
                    : "bg-navy/25 hover:bg-navy/50 w-2.5"
                }`}
              />
            ))}
          </div>
        </>
      ) : (
        <div
          className={`grid gap-5 lg:gap-6 ${
            items.length >= 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {items.map((t, i) => (
            <figure
              key={`${t.business}-${i}`}
              className={`${cardBg} border rounded-2xl p-7 flex flex-col`}
            >
              <span
                className="font-eurostile text-orange text-[3rem] leading-none mb-3"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className={`font-exo font-medium text-[0.95rem] leading-[1.7] mb-6 flex-1 text-pretty ${quoteColor}`}>
                {t.quote}
              </blockquote>
              <figcaption>
                <p className={`font-exo font-extrabold text-xs tracking-[0.18em] uppercase mb-0.5 ${captionName}`}>
                  {t.name}
                </p>
                <p className={`font-exo font-medium text-xs tracking-wide uppercase ${captionMeta}`}>
                  {t.business}
                  {t.role ? ` · ${t.role}` : ""}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
