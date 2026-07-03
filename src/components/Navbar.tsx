"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

type NavLink =
  | { label: string; href: string; children?: undefined }
  | {
      label: string;
      children: { label: string; href: string; description: string }[];
      href?: undefined;
    };

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    children: [
      {
        label: "IT Support & Security",
        href: "/services/it-support",
        description: "Monitoring, helpdesk, threat protection.",
      },
      {
        label: "Web Design & Hosting",
        href: "/services/web-design",
        description: "Local-SEO websites, custom builds, hosted by us.",
      },
      {
        label: "Online Marketing",
        href: "/services/marketing",
        description: "Local SEO, Google Ads, GBP management.",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Scorecard", href: "/scorecard" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  // Close desktop dropdown on outside click + Escape
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="bg-cream sticky top-0 z-50 border-b border-navy/5">
      <nav
        className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4 lg:px-14"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          aria-label="Tech 4 Underdogs home"
          className="flex-shrink-0"
          onClick={closeAll}
        >
          <Image
            src="/images/Tech-4-Underdogs-logo.png"
            alt="Tech 4 Underdogs"
            width={180}
            height={58}
            priority
            className="h-auto w-36 lg:w-44"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <ul className="flex items-center gap-7 lg:gap-8">
            {navLinks.map((l) => {
              if (l.children) {
                return (
                  <li
                    key={l.label}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className="font-exo font-bold text-xs tracking-[0.18em] uppercase text-navy/70 hover:text-orange transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      {l.label}
                      <ChevronDown open={servicesOpen} />
                    </button>

                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                        servicesOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                      role="menu"
                    >
                      <div className="bg-white border border-navy/10 rounded-xl shadow-xl p-3 w-[320px]">
                        <ul className="flex flex-col">
                          {l.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                role="menuitem"
                                onClick={() => setServicesOpen(false)}
                                className="block px-4 py-3 rounded-lg hover:bg-cream group transition-colors"
                              >
                                <p className="font-eurostile uppercase text-navy text-[0.85rem] tracking-wide group-hover:text-orange transition-colors mb-0.5">
                                  {c.label}
                                </p>
                                <p className="font-exo font-medium text-navy/55 text-[0.78rem] leading-[1.45]">
                                  {c.description}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              }
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-exo font-bold text-xs tracking-[0.18em] uppercase text-navy/70 hover:text-orange transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href={site.cta.primary.href} className="btn btn-primary btn-sm">
            Get Started <span aria-hidden="true">✦</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
        >
          <span
            className={`block w-6 h-0.5 bg-navy transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-all ${mobileOpen ? "opacity-0" : ""}`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            aria-hidden="true"
          />
        </button>
      </nav>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t border-navy/10 ${mobileOpen ? "max-h-[640px]" : "max-h-0"}`}
      >
        <ul className="flex flex-col py-2 px-6 bg-cream">
          {navLinks.map((l) => {
            if (l.children) {
              return (
                <li key={l.label} className="border-b border-navy/5">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    className="w-full py-4 font-exo font-bold text-sm tracking-[0.18em] uppercase text-navy hover:text-orange transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>{l.label}</span>
                    <ChevronDown open={mobileServicesOpen} />
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-out ${mobileServicesOpen ? "max-h-[400px]" : "max-h-0"}`}
                  >
                    <ul className="pb-3 pl-3 border-l-2 border-orange/30 ml-1">
                      {l.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={closeAll}
                            className="block py-2.5 px-3 font-exo font-semibold text-[0.8rem] tracking-[0.12em] uppercase text-navy/75 hover:text-orange transition-colors"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={closeAll}
                  className="block py-4 font-exo font-bold text-sm tracking-[0.18em] uppercase text-navy hover:text-orange transition-colors border-b border-navy/5"
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li className="py-4">
            <Link
              href={site.cta.primary.href}
              onClick={closeAll}
              className="btn btn-primary w-full justify-center"
            >
              Get Started <span aria-hidden="true">✦</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
