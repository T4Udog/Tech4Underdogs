"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  BAND_META,
  CATEGORIES,
  DISCLAIMER,
  QUESTIONS_FLAT,
  TOTAL_QUESTIONS,
  getCategory,
} from "@/lib/scorecard/spec";
import { computeScorecard, type AnswerMap, type ScorecardResult } from "@/lib/scorecard/scoring";

type Stage = "hero" | "quiz" | "gate" | "submitting" | "results" | "error";

interface Lead {
  name: string;
  business: string;
  email: string;
  phone: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ARCHIE = {
  toolbelt: "/images/Archie-Toolbelt-e1773949293728.png",
  side: "/images/Archie-On-Your-Side.png",
  it: "/images/Archie-Tech-Support.png",
  icon: "/images/Archie-Icon.png",
};

export default function ScorecardApp({ calComUrl }: { calComUrl: string }) {
  const [stage, setStage] = useState<Stage>("hero");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [lead, setLead] = useState<Lead>({ name: "", business: "", email: "", phone: "" });
  const [result, setResult] = useState<ScorecardResult | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Smooth scroll to top on stage / question change
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }, [stage, idx]);

  function selectAnswer(qid: string, optIdx: number) {
    setAnswers((prev) => ({ ...prev, [qid]: optIdx }));
    window.setTimeout(() => {
      if (idx + 1 >= TOTAL_QUESTIONS) setStage("gate");
      else setIdx(idx + 1);
    }, 260);
  }

  async function submit() {
    setStage("submitting");
    setSubmitError(null);
    try {
      const res = await fetch("/api/scorecard/submit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: lead.name.trim(),
          business: lead.business.trim(),
          email: lead.email.trim(),
          phone: lead.phone.trim() || null,
          answers,
        }),
      });
      const data = (await res.json()) as { ok: boolean; result?: ScorecardResult; error?: string };
      if (!res.ok || !data.ok || !data.result) {
        // Compute client-side as fallback so user still sees results
        setResult(computeScorecard(answers));
        setSubmitError(data.error || `submit-${res.status}`);
        setStage("results");
        return;
      }
      setResult(data.result);
      setStage("results");
    } catch (e) {
      setResult(computeScorecard(answers));
      setSubmitError(e instanceof Error ? e.message : "network");
      setStage("results");
    }
  }

  function restart() {
    setAnswers({});
    setIdx(0);
    setLead({ name: "", business: "", email: "", phone: "" });
    setResult(null);
    setSubmitError(null);
    setStage("hero");
  }

  return (
    <>
      {stage === "hero" && <Hero onStart={() => setStage("quiz")} />}
      {stage === "quiz" && (
        <Quiz
          idx={idx}
          answers={answers}
          onAnswer={selectAnswer}
          onBack={() => (idx === 0 ? setStage("hero") : setIdx(idx - 1))}
        />
      )}
      {stage === "gate" && (
        <Gate
          lead={lead}
          setLead={setLead}
          onBack={() => {
            setStage("quiz");
            setIdx(TOTAL_QUESTIONS - 1);
          }}
          onSubmit={submit}
        />
      )}
      {stage === "submitting" && <Submitting />}
      {stage === "results" && result && (
        <Results lead={lead} result={result} calComUrl={calComUrl} submitError={submitError} onRestart={restart} />
      )}
    </>
  );
}

/* ────────────────────────────────── HERO ────────────────────────────────── */

function Hero({ onStart }: { onStart: () => void }) {
  return (
    <section className="bg-cream">
      <div className="section-container section-y text-center">
        <Image
          src={ARCHIE.toolbelt}
          alt="Archie, the Tech 4 Underdogs mascot, ready to work"
          width={220}
          height={220}
          priority
          className="mx-auto h-auto w-40 md:w-52 drop-shadow-[0_18px_26px_rgba(30,42,58,0.22)]"
        />
        <p className="eyebrow justify-center mt-6">
          <span className="eyebrow-mark">✺</span>A 3-minute gut check
        </p>
        <h1 className="h-section text-navy mt-5 max-w-3xl mx-auto">
          Is your business <span className="text-orange italic">winning or losing</span> customers online?
        </h1>
        <p className="body-text mt-6 max-w-[34rem] mx-auto">
          Answer 20 quick questions and get a straight, plain-English read on where you&apos;re solid — and where
          you&apos;re quietly leaking customers.
        </p>
        <div className="mt-10">
          <button type="button" onClick={onStart} className="btn btn-primary btn-lg">
            Start the Scorecard <span aria-hidden="true">✦</span>
          </button>
          <p className="mt-4 text-xs tracking-[0.14em] uppercase font-bold text-navy/55">
            ~3 minutes · Free · No login
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((c) => (
            <li
              key={c.key}
              className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-3.5 py-1.5 text-[0.78rem] font-semibold text-navy/75"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange" aria-hidden="true" />
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ────────────────────────────────── QUIZ ────────────────────────────────── */

function Quiz({
  idx,
  answers,
  onAnswer,
  onBack,
}: {
  idx: number;
  answers: AnswerMap;
  onAnswer: (qid: string, optIdx: number) => void;
  onBack: () => void;
}) {
  const q = QUESTIONS_FLAT[idx];
  const cat = useMemo(() => CATEGORIES.find((c) => c.questions.some((qq) => qq.id === q.id))!, [q.id]);
  const selected = answers[q.id];
  const progress = ((idx + 1) / TOTAL_QUESTIONS) * 100;

  return (
    <section className="bg-navy text-white min-h-[calc(100vh-120px)]">
      <div className="max-w-[640px] mx-auto px-6 py-10 md:py-14">
        <div className="mb-7">
          <div className="flex justify-between items-center mb-3">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase font-bold text-orange">
              <Image
                src={ARCHIE.icon}
                alt=""
                width={22}
                height={22}
                className="rounded-full bg-white/10"
                aria-hidden="true"
              />
              {cat.name}
            </span>
            <span className="text-xs font-semibold text-white/55">
              {idx + 1} / {TOTAL_QUESTIONS}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-white/12 overflow-hidden">
            <div
              className="h-full bg-orange rounded-full transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div
          key={idx}
          className="scorecard-question-enter"
        >
          <p className="italic text-white/55 text-sm font-medium mb-3">{cat.sub}</p>
          <h2 className="h-section text-white mb-7">{q.prompt}</h2>

          <div className="flex flex-col gap-3" role="radiogroup" aria-label={q.prompt}>
            {q.options.map((opt, vi) => {
              const isSel = selected === vi;
              return (
                <button
                  key={vi}
                  type="button"
                  role="radio"
                  aria-checked={isSel}
                  onClick={() => onAnswer(q.id, vi)}
                  className={`flex items-center gap-4 text-left w-full rounded-xl px-4 py-4 transition-all duration-200 border ${
                    isSel
                      ? "bg-orange border-orange text-white"
                      : "bg-white/5 border-white/15 text-white/90 hover:border-orange/60 hover:bg-white/8"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                      isSel ? "bg-white border-white" : "border-white/30"
                    }`}
                    aria-hidden="true"
                  >
                    {isSel && <span className="w-2.5 h-2.5 rounded-full bg-orange" />}
                  </span>
                  <span className="font-exo font-medium text-[0.97rem] leading-snug">{opt.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="mt-7 self-start font-exo text-xs font-bold tracking-[0.14em] uppercase text-white/55 hover:text-orange transition-colors"
        >
          ← Back
        </button>
      </div>
    </section>
  );
}

/* ────────────────────────────────── GATE ────────────────────────────────── */

function Gate({
  lead,
  setLead,
  onBack,
  onSubmit,
}: {
  lead: Lead;
  setLead: (l: Lead) => void;
  onBack: () => void;
  onSubmit: () => void;
}) {
  const valid =
    lead.name.trim().length > 0 &&
    lead.business.trim().length > 0 &&
    EMAIL_RE.test(lead.email.trim());

  function update<K extends keyof Lead>(k: K, v: string) {
    setLead({ ...lead, [k]: v });
  }

  return (
    <section className="bg-navy text-white min-h-[calc(100vh-120px)]">
      <div className="max-w-[560px] mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-5">
          <Image
            src={ARCHIE.side}
            alt="Archie has your scorecard ready"
            width={130}
            height={130}
            className="mx-auto h-auto w-28 drop-shadow-[0_14px_22px_rgba(0,0,0,0.35)]"
          />
        </div>
        <p className="eyebrow eyebrow-dark justify-center mb-2">
          <span className="eyebrow-mark">✺</span>Your score is ready
        </p>
        <h2 className="h-section text-white text-center mb-3">
          Where should we send your <span className="text-orange italic">full Scorecard</span>?
        </h2>
        <p className="body-text body-text-dark text-center mb-7">
          Your results show on the next screen. We&apos;ll also email you a keepable PDF — keep it, act on it, share it.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (valid) onSubmit();
          }}
          className="space-y-4"
          noValidate
        >
          <Field label="First name" value={lead.name} onChange={(v) => update("name", v)} placeholder="Archie" />
          <Field
            label="Business name"
            value={lead.business}
            onChange={(v) => update("business", v)}
            placeholder="Archie's Home Services"
          />
          <Field
            label="Email"
            type="email"
            value={lead.email}
            onChange={(v) => update("email", v)}
            placeholder="you@yourbusiness.com"
          />
          <Field
            label="Phone"
            type="tel"
            value={lead.phone}
            onChange={(v) => update("phone", v)}
            placeholder="(555) 123-4567"
            optional
            help="Optional — only if you'd rather we call than email."
          />

          <div className="pt-2">
            <button
              type="submit"
              disabled={!valid}
              className="btn btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
            >
              See My Results <span aria-hidden="true">✦</span>
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-xs text-white/45 font-medium">
          No spam, ever. We respond within one business day.
        </p>
        <div className="text-center">
          <button
            type="button"
            onClick={onBack}
            className="mt-5 font-exo text-xs font-bold tracking-[0.14em] uppercase text-white/55 hover:text-orange transition-colors"
          >
            ← Back
          </button>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  optional,
  help,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  optional?: boolean;
  help?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold tracking-wide text-white/60 mb-1.5">
        {label}
        {optional && <span className="font-medium text-white/40"> (optional)</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg bg-white/5 border border-white/15 px-4 py-3.5 text-base font-medium text-white placeholder:text-white/30 focus:border-orange focus:bg-white/8 outline-none transition-colors"
      />
      {help && <span className="block text-[0.7rem] text-white/40 mt-1.5">{help}</span>}
    </label>
  );
}

/* ──────────────────────────────── SUBMITTING ────────────────────────────── */

function Submitting() {
  return (
    <section className="bg-navy text-white min-h-[calc(100vh-120px)] flex items-center justify-center">
      <div className="text-center px-6">
        <div
          className="w-12 h-12 mx-auto rounded-full border-[3px] border-white/15 border-t-orange animate-spin"
          aria-hidden="true"
        />
        <p className="mt-6 h-compact text-white">Scoring your business…</p>
        <p className="body-text body-text-dark mt-3 max-w-sm mx-auto">
          Building your Scorecard, rendering your PDF, and sending it your way. Hang tight.
        </p>
      </div>
    </section>
  );
}

/* ────────────────────────────────── RESULTS ─────────────────────────────── */

function Results({
  lead,
  result,
  calComUrl,
  submitError,
  onRestart,
}: {
  lead: Lead;
  result: ScorecardResult;
  calComUrl: string;
  submitError: string | null;
  onRestart: () => void;
}) {
  const firstName = lead.name.trim() || "there";
  const bizName = lead.business.trim() || "your business";
  const weak = getCategory(result.biggest);

  const [count, setCount] = useState(0);
  const [revealBars, setRevealBars] = useState(false);
  const raf = useRef<number | null>(null);
  useEffect(() => {
    const start = performance.now();
    const dur = 1300;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * result.overall));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    const bt = window.setTimeout(() => setRevealBars(true), 600);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.clearTimeout(bt);
    };
  }, [result.overall]);

  return (
    <>
      {/* TIER REVEAL */}
      <section className="bg-cream">
        <div className="section-container pt-12 pb-6 text-center">
          <p className="eyebrow justify-center">
            <span className="eyebrow-mark">✺</span>Your Scorecard
          </p>
          <p className="mt-4 body-text">
            {firstName}, here&apos;s where <strong className="text-navy">{bizName}</strong> stands.
          </p>

          <div className="my-4 flex items-baseline justify-center gap-1">
            <span
              className="font-rajdhani font-bold text-navy leading-none"
              style={{ fontSize: "clamp(5.5rem, 22vw, 9.5rem)" }}
            >
              {count}
            </span>
            <span
              className="font-rajdhani font-semibold text-navy/40"
              style={{ fontSize: "clamp(2rem, 7vw, 3rem)" }}
            >
              /100
            </span>
          </div>

          <div className="inline-flex items-center gap-2.5 bg-navy rounded-full px-5 py-2.5">
            <span className="w-2 h-2 rounded-full bg-orange" aria-hidden="true" />
            <span className="font-rajdhani font-bold text-orange tracking-wide text-xl">
              {result.tier}
            </span>
          </div>

          <p className="body-text mt-6 max-w-md mx-auto">
            Four areas, scored out of 100 each. Here&apos;s how they break down.
          </p>
        </div>
      </section>

      {/* CATEGORY BARS */}
      <section className="bg-cream">
        <div className="section-container pb-2">
          <div className="max-w-[640px] mx-auto">
            {result.categories.map((c, i) => {
              const isWeak = c.key === result.biggest;
              const meta = BAND_META[c.band];
              const cat = getCategory(c.key);
              const paragraph = cat.paragraphs[c.band];
              return (
                <article
                  key={c.key}
                  className={`bg-white rounded-2xl p-5 md:p-6 mb-3.5 shadow-[0_16px_38px_-30px_rgba(30,42,58,0.4)] border ${
                    isWeak ? "border-orange/45" : "border-navy/8"
                  }`}
                >
                  <div className="flex justify-between items-baseline gap-3 mb-3">
                    <h3 className="font-rajdhani font-bold text-navy text-lg md:text-xl">{c.name}</h3>
                    <span className="whitespace-nowrap text-sm">
                      <strong className="font-rajdhani font-bold text-navy text-2xl">{c.score}</strong>
                      <span className="text-navy/50">/100</span>
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full bg-navy/8 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-[width] duration-[950ms] ease-out"
                      style={{
                        width: revealBars ? `${c.score}%` : "0%",
                        background: meta.hex,
                        transitionDelay: `${i * 130}ms`,
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-2.5 my-3">
                    <span
                      className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white rounded-full px-2.5 py-0.5"
                      style={{ background: meta.hex }}
                    >
                      {meta.label}
                    </span>
                    {isWeak && (
                      <span className="text-[0.65rem] font-bold tracking-wide uppercase text-orange">
                        ◆ Lowest score
                      </span>
                    )}
                  </div>
                  <p className="body-text text-[0.95rem] leading-[1.65]">{paragraph}</p>
                  {c.blindSpot && c.key === "website" && (
                    <p className="mt-3 text-[0.78rem] font-semibold text-navy/60 italic">
                      Blind spot: you haven&apos;t sized yourself up against competitors — worth doing.
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BIGGEST OPPORTUNITY */}
      <section className="bg-cream">
        <div className="section-container pb-4">
          <div className="max-w-[640px] mx-auto">
            <div className="bg-navy rounded-3xl p-6 md:p-8 flex flex-wrap items-center gap-5">
              <Image
                src={ARCHIE.it}
                alt="Archie on tech support"
                width={120}
                height={120}
                className="w-24 h-auto flex-shrink-0 drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)]"
              />
              <div className="flex-1 min-w-[220px]">
                <p className="eyebrow eyebrow-dark mb-2">
                  <span className="eyebrow-mark">✺</span>Your biggest opportunity
                </p>
                <h3 className="h-compact text-white mb-2">
                  {weak.name} — {result.biggestResult.score}/100
                </h3>
                <p className="body-text body-text-dark text-[0.95rem] leading-[1.62]">
                  <strong className="text-white">{weak.opportunity.headline}</strong> {weak.opportunity.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + DISCLAIMER */}
      <section className="bg-cream">
        <div className="section-container pb-16">
          <div className="max-w-[640px] mx-auto">
            <div className="bg-white border border-navy/8 rounded-3xl p-7 md:p-9 text-center shadow-[0_24px_56px_-32px_rgba(30,42,58,0.5)]">
              <h3 className="h-compact text-navy mb-5 max-w-md mx-auto">
                Want to know what this actually <span className="italic text-orange">means</span> for your business?
              </h3>
              <a href={calComUrl} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
                Book your free 15-minute consultation <span aria-hidden="true">✦</span>
              </a>
              <p className="body-text mt-5 max-w-md mx-auto text-[0.85rem] leading-[1.6]">
                {DISCLAIMER.cta.replace("here →", "").trim()}
              </p>
            </div>

            {submitError && (
              <p className="mt-4 text-center text-xs text-navy/55">
                Heads up: there was a hiccup delivering your PDF by email. We&apos;ll follow up.{" "}
                <span className="text-navy/35">({submitError})</span>
              </p>
            )}

            <div className="text-center">
              <button
                type="button"
                onClick={onRestart}
                className="mt-7 font-exo text-xs font-bold tracking-[0.14em] uppercase text-navy/55 hover:text-orange transition-colors"
              >
                ↺ Retake the Scorecard
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
