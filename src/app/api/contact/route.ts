import nodemailer from "nodemailer";

export const runtime = "nodejs";

const getRecipient = () => {
  const customTo = process.env.CONTACT_TO?.trim();
  if (customTo && customTo.includes("@")) {
    return customTo;
  }
  return "contact@growwithdigitaledge.com";
};

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field
  if (clean(body.company)) return Response.json({ ok: true });

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const service = clean(body.service, 80);
  const message = clean(body.message, 4000);

  if (!name || !phone) {
    return Response.json({ error: "Name and phone are required" }, { status: 400 });
  }

  // International phone number validation:
  const digitsOnly = phone.replace(/\D/g, "");
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    return Response.json(
      { error: "Please enter a valid phone number (7 to 15 digits)" },
      { status: 400 }
    );
  }

  // India-specific mobile validation (+91 or starts with 91 followed by 10 digits):
  if (phone.startsWith("+91") || phone.startsWith("91")) {
    const indianDigits = phone.replace(/^(\+91|91)\s*/, "").replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(indianDigits)) {
      return Response.json(
        {
          error:
            "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9",
        },
        { status: 400 }
      );
    }
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email" }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP_* environment variables are not set");
    return Response.json({ error: "Email is not configured yet" }, { status: 500 });
  }

  const port = Number(SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 10000,
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["Phone / WhatsApp", phone],
    ["Email", email || "—"],
    ["Interested in", service || "—"],
    ["Message", message || "—"],
  ];

  try {
    await transporter.sendMail({
      from: `"Digital Edge Website" <${SMTP_USER}>`,
      to: getRecipient(),
      replyTo: email || undefined,
      subject: `New enquiry: ${name}${service ? ` (${service})` : ""}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `
        <h2 style="margin:0 0 16px;font-family:sans-serif">New website enquiry</h2>
        <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="color:#666;vertical-align:top;white-space:nowrap"><b>${k}</b></td><td style="white-space:pre-wrap">${escape(v)}</td></tr>`
            )
            .join("")}
        </table>`,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return Response.json({ error: "Could not send your message. Please try again." }, { status: 500 });
  }
}
