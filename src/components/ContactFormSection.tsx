"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, type FormEvent } from "react";

type ServiceValue =
  | "it-support"
  | "web-design"
  | "marketing"
  | "not-sure";

const serviceLinks: { value: ServiceValue; icon: string; title: string; href: string }[] = [
  {
    value: "it-support",
    icon: "/images/Asset-1T4U.svg",
    title: "IT Support & Security",
    href: "/services/it-support",
  },
  {
    value: "web-design",
    icon: "/images/Asset-2T4U.svg",
    title: "Web Design & Hosting",
    href: "/services/web-design",
  },
  {
    value: "marketing",
    icon: "/images/Asset-3T4U.svg",
    title: "Online Marketing",
    href: "/services/marketing",
  },
];

export default function ContactFormSection() {
  const [service, setService] = useState<ServiceValue>("not-sure");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("submit-failed");
      setStatus("success");
      formRef.current?.reset();
      setService("not-sure");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* ── Form (now first) ─────────────────────────── */}
      <section id="form" className="scroll-mt-20 overflow-hidden bg-teal-gradient">
        <div className="section-container section-y">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">

            {/* Left: copy + trust */}
            <div className="flex flex-col">
              <p className="eyebrow eyebrow-dark mb-5">
                <span className="eyebrow-mark">✺</span>
                Let&apos;s talk
              </p>

              <h2 className="h-section mb-6">
                <span className="text-white">No commitment. </span>
                <span className="italic text-outlined-white">No pitch.</span>
                <br />
                <span className="text-white">Just a </span>
                <span className="italic text-orange">real conversation.</span>
              </h2>

              <p className="body-text body-text-dark max-w-[480px] mb-9">
                A straightforward talk about your technology, your website, or
                your marketing — and whether we&apos;re the right fit to help.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Response within one business day",
                  "Talk to a real person, not a script",
                  "No sales pressure, ever",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-white/80 font-exo font-medium text-[0.95rem]">
                    <span className="text-orange mt-1" aria-hidden="true">✦</span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="hidden lg:block">
                <Image
                  src="/images/Archie-Capable.png"
                  alt=""
                  width={200}
                  height={220}
                  className="w-[180px] h-auto object-contain opacity-95"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Right: form card */}
            <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-xl">
              {status === "success" ? (
                <div className="py-10 text-center">
                  <p className="eyebrow mb-4 justify-center inline-flex">
                    <span className="eyebrow-mark text-orange">✺</span>
                    Message sent
                  </p>
                  <h3 className="h-compact text-navy mb-4">
                    <span>Thanks — we&apos;ve </span>
                    <span className="italic text-orange">got it from here.</span>
                  </h3>
                  <p className="body-text max-w-[400px] mx-auto">
                    A real person will reach out within one business day. In the
                    meantime, feel free to email us directly.
                  </p>
                  <a
                    href="mailto:contact@tech4underdogs.com"
                    className="font-exo font-bold text-orange text-sm tracking-[0.18em] uppercase mt-6 inline-block hover:underline"
                  >
                    contact@tech4underdogs.com
                  </a>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="First name" name="firstName" required autoComplete="given-name" />
                    <Field label="Business name" name="businessName" required autoComplete="organization" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email" name="email" type="email" required autoComplete="email" />
                    <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="service" className="font-exo font-bold text-xs tracking-[0.18em] uppercase text-navy/70 mb-2">
                      What do you need help with?
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value as ServiceValue)}
                      className="font-exo font-medium text-[0.95rem] text-navy bg-cream/60 border border-navy/15 rounded-md px-4 py-3 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30 transition-colors cursor-pointer"
                    >
                      <option value="it-support">IT Support & Security</option>
                      <option value="web-design">Web Design & Hosting</option>
                      <option value="marketing">Online Marketing</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message" className="font-exo font-bold text-xs tracking-[0.18em] uppercase text-navy/70 mb-2">
                      What&apos;s going on? <span className="font-medium text-navy/40 normal-case tracking-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us a little about your situation."
                      className="font-exo font-medium text-[0.95rem] text-navy bg-cream/60 border border-navy/15 rounded-md px-4 py-3 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30 transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn-primary btn-lg justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending…" : "Talk to a Real Person"} <span aria-hidden="true">✦</span>
                  </button>

                  <p className="font-exo font-semibold text-navy/50 text-[0.7rem] tracking-[0.18em] uppercase text-center">
                    We respond within one business day. No sales pressure, ever.
                  </p>

                  {status === "error" && (
                    <p role="alert" className="font-exo font-medium text-orange text-sm text-center">
                      Something went wrong sending that. Email us directly at{" "}
                      <a href="mailto:contact@tech4underdogs.com" className="underline">
                        contact@tech4underdogs.com
                      </a>.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service jump cards (now after form) ─────── */}
      <section className="bg-sky overflow-hidden">
        <div className="section-container py-14 lg:py-20">
          <div className="max-w-[1100px] mx-auto">
            <p className="font-exo font-bold text-xs tracking-[0.22em] uppercase text-navy/55 text-center mb-6">
              Or learn more about what we do
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {serviceLinks.map((s) => (
                <Link
                  key={s.value}
                  href={s.href}
                  className="group bg-white rounded-2xl p-6 border border-navy/10 hover:border-orange/60 hover:shadow-md transition-all flex items-center gap-4 cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={s.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-eurostile uppercase text-navy text-[0.9rem] tracking-wide group-hover:text-orange transition-colors leading-tight">
                      {s.title}
                    </p>
                  </div>
                  <span className="text-navy/30 group-hover:text-orange transition-colors flex-shrink-0" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
};

function Field({ label, name, type = "text", required, autoComplete }: FieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-exo font-bold text-xs tracking-[0.18em] uppercase text-navy/70 mb-2">
        {label}{required && <span className="text-orange ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="font-exo font-medium text-[0.95rem] text-navy bg-cream/60 border border-navy/15 rounded-md px-4 py-3 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30 transition-colors"
      />
    </div>
  );
}
