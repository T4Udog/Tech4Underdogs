import { NextResponse } from "next/server";
import { computeScorecard, type AnswerMap } from "@/lib/scorecard/scoring";
import { TOTAL_QUESTIONS, QUESTIONS_FLAT } from "@/lib/scorecard/spec";
import { supabaseAdmin } from "@/lib/scorecard/server/supabase";
import { renderPdf } from "@/lib/scorecard/server/pdf";
import { sendLeadEmail, sendInternalAlert } from "@/lib/scorecard/server/email";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmitBody = {
  name?: unknown;
  business?: unknown;
  email?: unknown;
  phone?: unknown;
  answers?: unknown;
};

function isAnswerMap(v: unknown): v is AnswerMap {
  if (!v || typeof v !== "object") return false;
  for (const [k, val] of Object.entries(v as Record<string, unknown>)) {
    if (typeof k !== "string") return false;
    if (typeof val !== "number" || !Number.isInteger(val) || val < 0 || val > 3) return false;
  }
  return true;
}

function validAnswers(answers: AnswerMap): boolean {
  if (Object.keys(answers).length !== TOTAL_QUESTIONS) return false;
  const ids = new Set(QUESTIONS_FLAT.map((q) => q.id));
  for (const id of Object.keys(answers)) {
    if (!ids.has(id)) return false;
  }
  for (const q of QUESTIONS_FLAT) {
    const choice = answers[q.id];
    if (typeof choice !== "number" || !q.options[choice]) return false;
  }
  return true;
}

export async function POST(request: Request) {
  let body: SubmitBody;
  try {
    body = (await request.json()) as SubmitBody;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid-json" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const business = typeof body.business === "string" ? body.business.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone =
    typeof body.phone === "string" && body.phone.trim() ? body.phone.trim() : null;

  if (!name || !business) {
    return NextResponse.json({ ok: false, error: "missing-fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid-email" }, { status: 400 });
  }
  if (!isAnswerMap(body.answers) || !validAnswers(body.answers)) {
    return NextResponse.json({ ok: false, error: "invalid-answers" }, { status: 400 });
  }

  const answers = body.answers;
  const result = computeScorecard(answers);
  const ctaUrl =
    process.env.NEXT_PUBLIC_CAL_COM_URL || "https://cal.com/tech-4-underdogs/15min";

  // 1. Insert lead (don't block on email/pdf — keep row even if delivery fails)
  const lead = { name, business, email };
  const ua = request.headers.get("user-agent");
  const referer = request.headers.get("referer");

  let leadId: string | null = null;
  try {
    const { data, error } = await supabaseAdmin()
      .from("scorecard_leads")
      .insert({
        name,
        business,
        email,
        phone,
        overall_score: result.overall,
        overall_tier: result.tier,
        website_score: result.categories.find((c) => c.key === "website")!.score,
        website_band: result.categories.find((c) => c.key === "website")!.band,
        presence_score: result.categories.find((c) => c.key === "presence")!.score,
        presence_band: result.categories.find((c) => c.key === "presence")!.band,
        management_score: result.categories.find((c) => c.key === "management")!.score,
        management_band: result.categories.find((c) => c.key === "management")!.band,
        it_score: result.categories.find((c) => c.key === "it")!.score,
        it_band: result.categories.find((c) => c.key === "it")!.band,
        biggest_opportunity: result.biggest,
        answers,
        user_agent: ua,
        referer,
      })
      .select("id")
      .single();
    if (error) throw error;
    leadId = data?.id ?? null;
  } catch (e) {
    console.error("[scorecard.submit] supabase insert failed", e);
    // Hard fail — without a row we can't recover the lead later.
    return NextResponse.json({ ok: false, error: "lead-store-failed" }, { status: 500 });
  }

  // 2. Render PDF + send emails. Soft-fail individually so lead still gets results on screen.
  let pdfBuffer: Buffer | null = null;
  try {
    pdfBuffer = await renderPdf({ lead, result, cta_url: ctaUrl });
  } catch (e) {
    console.error("[scorecard.submit] pdf render failed", e);
  }

  if (pdfBuffer) {
    try {
      await sendLeadEmail({ lead, result, pdfBuffer, ctaUrl });
      if (leadId) {
        await supabaseAdmin()
          .from("scorecard_leads")
          .update({ email_sent_at: new Date().toISOString() })
          .eq("id", leadId);
      }
    } catch (e) {
      console.error("[scorecard.submit] lead email failed", e);
    }
  }

  try {
    await sendInternalAlert({ lead: { ...lead, phone }, result });
  } catch (e) {
    console.error("[scorecard.submit] internal alert failed", e);
  }

  return NextResponse.json({ ok: true, result });
}
