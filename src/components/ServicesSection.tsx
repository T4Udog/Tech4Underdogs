import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const services = [
  {
    icon: "/images/Asset-1T4U.svg",
    title: "IT Support & Security",
    description:
      "Your systems stay monitored, protected, and supported. When something goes wrong, you reach a real person — not a ticket queue.",
    href: "/services/it-support",
  },
  {
    icon: "/images/Asset-2T4U.svg",
    title: "Web Design & Hosting",
    description:
      "A professional website that loads fast, looks right, and stays online. Built for your business, maintained by us.",
    href: "/services/web-design",
  },
  {
    icon: "/images/Asset-3T4U.svg",
    title: "Marketing & SEO",
    description:
      "Local SEO and Google Ads that help real customers find you — honest, straightforward, and built to earn their keep.",
    href: "/services/marketing",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden scroll-mt-20 bg-teal-gradient"
    >
      <div className="section-container section-y relative z-10">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14 lg:mb-16">
          <div>
            <p className="eyebrow eyebrow-dark mb-5">
              <span className="eyebrow-mark">✺</span>
              The solution
            </p>

            <h2 className="h-section mb-5">
              <span className="text-white">One partner.</span>
              <br />
              <span className="italic text-orange">Three things</span>
              <br />
              <span className="italic text-white">done right.</span>
            </h2>

            <p className="body-text body-text-dark max-w-[520px]">
              Instead of juggling vendors and chasing callbacks, you get one
              accountable team that understands your business — and stays with you
              for the long haul.
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center flex-shrink-0 text-center">
            <p
              className="font-eurostile uppercase leading-[1]"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.65rem)" }}
            >
              <span className="text-white">The basics,</span>
              <br />
              <span className="italic text-orange border-2 border-orange/70 rounded-full px-4 py-0.5 inline-block mt-1">
                done right.
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl p-8 flex flex-col items-center text-center border border-white/10"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div className="mb-6 w-16 h-16 flex items-center justify-center">
                <Image
                  src={s.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-eurostile text-white tracking-wide mb-4" style={{ fontSize: "1.35rem", lineHeight: 1.15, textTransform: "uppercase" }}>
                {s.title}
              </h3>

              <p className="font-exo font-medium text-white/80 text-[0.95rem] leading-[1.7] mb-6 flex-1">
                {s.description}
              </p>

              <a
                href={s.href}
                className="btn btn-primary btn-sm mt-auto w-full justify-center"
              >
                Learn More <span aria-hidden="true">✦</span>
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white/10 border border-white/15 rounded-2xl px-6 py-5 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left">
          <p className="font-eurostile uppercase text-white text-[0.95rem] lg:text-[1.05rem] tracking-wide leading-tight text-balance">
            <span className="italic text-orange">{site.pricing.startingPrice}</span>{" "}
            — month-to-month, no long-term contracts.
          </p>
          <Link
            href={site.pricing.href}
            className="font-exo font-extrabold text-xs tracking-[0.18em] uppercase text-orange hover:text-white transition-colors inline-flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            See Pricing <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className="font-exo font-semibold text-white/50 text-xs tracking-[0.18em] uppercase text-center flex items-center justify-center gap-2">
          <span className="text-orange/60">✺</span> No unnecessary extras. Just
          the basics done right, by people who know what&apos;s actually at
          stake for you.
        </p>
      </div>
    </section>
  );
}
