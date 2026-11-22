import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO || "contact@growwithdigitaledge.com";

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
      to: TO,
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
