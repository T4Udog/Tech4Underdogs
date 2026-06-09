import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "invalid-body" }, { status: 400 });
  }

  const { firstName, businessName, email, phone, service, message } = body as Record<string, unknown>;

  if (!firstName || !businessName || !email) {
    return NextResponse.json({ ok: false, error: "missing-fields" }, { status: 400 });
  }

  // TODO(Andrew): wire to email provider (Resend, Postmark, etc.) or CRM webhook.
  console.log("[contact form]", { firstName, businessName, email, phone, service, message });

  return NextResponse.json({ ok: true });
}
