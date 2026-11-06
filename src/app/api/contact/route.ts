import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/data/site";
import { contactContent } from "@/data/contact";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  business?: string;
  service?: string;
  budget?: string;
  message?: string;
  website?: string;
};

const clean = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: contactContent.api.invalidRequest }, { status: 400 });
  }

  // Honeypot field: bots often fill every field, while humans never see this one.
  if (clean(payload.website, 200)) {
    return NextResponse.json({ success: true });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 254);
  const business = clean(payload.business, 160);
  const service = clean(payload.service, 120);
  const budget = clean(payload.budget, 80);
  const message = clean(payload.message, 5000);

  if (!name || !email || !service || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: contactContent.api.validationError }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || site.email;

  if (!apiKey || !from) {
    return NextResponse.json({ error: contactContent.api.notConfigured }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `${contactContent.emailTemplate.subjectPrefix} — ${name}`,
      text: [
        `${contactContent.emailTemplate.labels.name}: ${name}`,
        `${contactContent.emailTemplate.labels.email}: ${email}`,
        `${contactContent.emailTemplate.labels.business}: ${business || contactContent.emailTemplate.notProvided}`,
        `${contactContent.emailTemplate.labels.service}: ${service}`,
        `${contactContent.emailTemplate.labels.budget}: ${budget || contactContent.emailTemplate.notProvided}`,
        "",
        contactContent.emailTemplate.labels.projectDetails + ":",
        message
      ].join("\n")
    });

    if (error) {
      return NextResponse.json({ error: contactContent.api.providerError }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: contactContent.api.unexpectedError }, { status: 500 });
  }
}
