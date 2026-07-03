import { Resend } from "resend";
import { DISCLAIMER, getCategory } from "../spec";
import type { ScorecardResult } from "../scoring";

let cachedResend: Resend | null = null;
function resend(): Resend {
  if (cachedResend) return cachedResend;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not set");
  cachedResend = new Resend(key);
  return cachedResend;
}

interface SendLeadEmailArgs {
  lead: { name: string; business: string; email: string };
  result: ScorecardResult;
  pdfBuffer: Buffer;
  ctaUrl: string;
}

const BRAND = {
  navy: "#1E2A3A",
  orange: "#FF6633",
  cream: "#F8F0E6",
  muted: "rgba(30,42,58,0.7)",
};

function leadHtml(args: SendLeadEmailArgs): string {
  const { lead, result, ctaUrl } = args;
  const weak = getCategory(result.biggest);
  const fontStack = "'Helvetica Neue', Arial, sans-serif";
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:${BRAND.cream};font-family:${fontStack};color:${BRAND.navy};">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${BRAND.cream};padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:14px;overflow:hidden;max-width:600px;">
        <tr><td style="background:${BRAND.navy};color:#fff;padding:28px 32px;">
          <p style="margin:0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:${BRAND.orange};font-weight:700;">✺ Your Scorecard is in</p>
          <h1 style="margin:10px 0 0;font-size:30px;line-height:1.05;letter-spacing:-0.01em;">
            ${escape(lead.name)}, you scored <span style="color:${BRAND.orange};">${result.overall}/100</span>
          </h1>
          <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.78);">Tier: <strong style="color:#fff;">${escape(result.tier)}</strong></p>
        </td></tr>
        <tr><td style="padding:28px 32px 8px;">
          <p style="margin:0 0 14px;font-size:16px;line-height:1.55;color:${BRAND.muted};">
            Here's the honest headline: your weakest area is <strong style="color:${BRAND.navy};">${escape(weak.name)} (${result.biggestResult.score}/100)</strong>, and it's the one worth your attention first.
          </p>
          <p style="margin:0 0 22px;font-size:15px;line-height:1.6;color:${BRAND.muted};">
            ${escape(weak.opportunity.weakLine)}
          </p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 22px;">
            ${result.categories
              .map(
                (c) => `
            <tr><td style="padding:6px 0;font-size:14px;color:${BRAND.navy};">
              <strong>${escape(c.name)}</strong> — ${c.score}/100
              <span style="color:${BRAND.muted};font-size:12px;">(${bandLabel(c.band)})</span>
            </td></tr>`,
              )
              .join("")}
          </table>
          <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:${BRAND.muted};">
            Your full breakdown — all four areas, your scores, and what each one means — is attached as a PDF.
          </p>
          <p style="margin:0 0 24px;text-align:center;">
            <a href="${ctaUrl}" style="display:inline-block;background:${BRAND.orange};color:#fff;text-decoration:none;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;font-size:13px;padding:16px 28px;border-radius:8px;">
              Book your free 15-minute consultation →
            </a>
          </p>
          <p style="margin:0 0 22px;font-size:14px;line-height:1.6;color:${BRAND.muted};">
            15 minutes, free, no pitch. Just a straight read on the one or two moves that'll do the most for you. If we're a fit to handle it, great. If not, you keep the plan.
          </p>
          <p style="margin:0;font-size:14px;color:${BRAND.navy};">— Tech 4 Underdogs</p>
        </td></tr>
        <tr><td style="padding:18px 32px 28px;border-top:1px solid rgba(30,42,58,0.08);">
          <p style="margin:0;font-size:11px;line-height:1.5;color:rgba(30,42,58,0.55);">
            ${escape(DISCLAIMER.footer)}
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function bandLabel(band: string): string {
  return band === "at-risk" ? "At Risk" : band === "needs-work" ? "Needs Work" : "Strong";
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendLeadEmail(args: SendLeadEmailArgs): Promise<void> {
  const from = process.env.RESEND_FROM || "Tech 4 Underdogs <info@tech4underdogs.com>";
  const subject = `Your Local Business Scorecard — ${args.result.overall}/100 (${args.result.tier})`;
  const filename = `Local-Business-Scorecard-${args.lead.business.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.pdf`;
  const { error } = await resend().emails.send({
    from,
    to: args.lead.email,
    subject,
    html: leadHtml(args),
    attachments: [{ filename, content: args.pdfBuffer.toString("base64") }],
  });
  if (error) throw new Error(`Resend lead email failed: ${error.message}`);
}

export async function sendInternalAlert(args: {
  lead: { name: string; business: string; email: string; phone?: string | null };
  result: ScorecardResult;
}): Promise<void> {
  const to = process.env.INTERNAL_NOTIFY_EMAIL;
  if (!to) return; // optional
  const from = process.env.RESEND_FROM || "Tech 4 Underdogs <info@tech4underdogs.com>";
  const { lead, result } = args;
  const rows = result.categories
    .map((c) => `<tr><td>${escape(c.name)}</td><td>${c.score}/100</td><td>${bandLabel(c.band)}</td></tr>`)
    .join("");
  const html = `<!doctype html><html><body style="font-family:Helvetica,Arial,sans-serif;color:#1E2A3A;">
    <h2 style="margin:0 0 8px;">New Scorecard lead — ${escape(lead.name)} · ${escape(lead.business)}</h2>
    <p style="margin:0 0 16px;font-size:14px;">Overall: <strong>${result.overall}/100 (${escape(result.tier)})</strong> · Weakest: <strong>${escape(result.biggestResult.name)} (${result.biggestResult.score}/100)</strong></p>
    <table cellpadding="6" cellspacing="0" border="1" style="border-collapse:collapse;font-size:13px;">
      <thead><tr style="background:#F8F0E6;"><th align="left">Category</th><th align="left">Score</th><th align="left">Band</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <p style="margin:18px 0 6px;font-size:14px;"><strong>Email:</strong> ${escape(lead.email)}</p>
    <p style="margin:0;font-size:14px;"><strong>Phone:</strong> ${escape(lead.phone || "—")}</p>
  </body></html>`;
  await resend().emails.send({
    from,
    to,
    subject: `[Scorecard] ${lead.business} — ${result.overall}/100`,
    html,
  });
}
