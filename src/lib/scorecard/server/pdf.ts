import type { ScorecardResult } from "../scoring";

export interface PdfPayload {
  lead: {
    name: string;
    business: string;
    email: string;
  };
  result: ScorecardResult;
  cta_url: string;
}

export async function renderPdf(payload: PdfPayload): Promise<Buffer> {
  const base = process.env.PDF_SERVICE_URL;
  if (!base) throw new Error("PDF_SERVICE_URL is not set");
  const res = await fetch(`${base.replace(/\/$/, "")}/render`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
    // Railway cold start can take 5–10s
    signal: AbortSignal.timeout(45_000),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`PDF service ${res.status}: ${text.slice(0, 200)}`);
  }
  const ab = await res.arrayBuffer();
  return Buffer.from(ab);
}
