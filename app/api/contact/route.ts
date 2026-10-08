import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(30).optional().default(""),
  message: z.string().trim().min(20).max(3000),
  consent: z.literal("yes"),
  website: z.string().max(0).optional().default(""),
});

const attempts = new Map<string, { count: number; reset: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const current = attempts.get(ip);
  if (current && current.reset > now && current.count >= 5) return Response.json({ error: "rate_limit" }, { status: 429 });
  attempts.set(ip, !current || current.reset <= now ? { count: 1, reset: now + 15 * 60_000 } : { ...current, count: current.count + 1 });

  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "invalid" }, { status: 400 });

  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_TO", "CONTACT_FROM"] as const;
  if (required.some((key) => !process.env[key])) return Response.json({ error: "mail_unavailable" }, { status: 503 });

  const { name, email, phone, message } = parsed.data;
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transport.sendMail({
    from: process.env.CONTACT_FROM,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `Formularz kancelarii — ${name}`,
    text: `Imię i nazwisko: ${name}\nE-mail: ${email}\nTelefon: ${phone || "nie podano"}\n\n${message}`,
  });
  return Response.json({ ok: true });
}
