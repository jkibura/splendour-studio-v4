"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "@/data/site";
import { contactContent } from "@/data/contact";
import { trackEvent } from "@/lib/analytics";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { fields, serviceOptions, budgetOptions, submit, disclaimer, sentTitle, sentDescription, errorTitle, errorDescription, sending, honeypotLabel } = contactContent.form;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    setStatus("sending");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || errorTitle);
      trackEvent("contact_form_submit", { service_interest: String(payload.service || "unspecified") });
      setStatus("success");
      formElement.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : errorTitle);
    }
  }

  if (status === "success") {
    return <div className="form-success" role="status"><CheckCircle2 size={30} /><h3>{sentTitle}</h3><p>{sentDescription}</p></div>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>{fields.name.label}<input name="name" placeholder={fields.name.placeholder} autoComplete="name" maxLength={120} required /></label>
        <label>{fields.email.label}<input name="email" type="email" placeholder={fields.email.placeholder} autoComplete="email" maxLength={254} required /></label>
      </div>
      <label>{fields.business.label} <span className="optional">{fields.business.optional}</span><input name="business" placeholder={fields.business.placeholder} autoComplete="organization" maxLength={160} /></label>
      <div className="form-grid">
        <label>{fields.service.label}<select name="service" defaultValue="" required><option value="" disabled>{fields.service.placeholder}</option>{serviceOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>{fields.budget.label} <span className="optional">{fields.budget.optional}</span><select name="budget" defaultValue=""><option value="">{fields.budget.placeholder}</option>{budgetOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>
      <label>{fields.message.label}<textarea name="message" rows={5} placeholder={fields.message.placeholder} maxLength={5000} required /></label>
      <div className="form-honeypot" aria-hidden="true"><label>{honeypotLabel}<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? sending : submit} <ArrowUpRight size={16} /></button>
      {status === "error" ? <div className="form-error" role="alert"><AlertCircle size={17} /><span>{errorTitle} {errorMessage || errorDescription} <a href={`mailto:${site.email}`}>{site.email}</a>.</span></div> : null}
      <p className="form-disclaimer">{disclaimer}</p>
    </form>
  );
}
