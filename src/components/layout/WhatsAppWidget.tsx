"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { site } from "@/data/site";
import { whatsappContent } from "@/data/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string>(whatsappContent.prompts[0]);
  const number = site.whatsappNumber.replace(/\D/g, "");
  const validNumber = number.length >= 10 && !number.includes("X");
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  function togglePanel() {
    if (!open) trackEvent("whatsapp_open");
    setOpen((value) => !value);
  }

  return (
    <div className="whatsapp-widget">
      {open ? (
        <section className="whatsapp-panel" aria-label={whatsappContent.title}>
          <div className="whatsapp-panel-head">
            <div className="whatsapp-avatar"><MessageCircle size={20} /></div>
            <div><strong>{whatsappContent.title}</strong><span>{whatsappContent.availability}</span></div>
            <button className="whatsapp-close" onClick={() => setOpen(false)} aria-label={whatsappContent.closeLabel}><X size={19} /></button>
          </div>
          <div className="whatsapp-panel-body">
            <p className="chat-bubble">{whatsappContent.greeting}</p>
            <label htmlFor="whatsapp-message">{whatsappContent.promptLabel}</label>
            <select id="whatsapp-message" value={message} onChange={(event) => setMessage(event.target.value)}>
              {whatsappContent.prompts.map((prompt) => <option key={prompt} value={prompt}>{prompt}</option>)}
            </select>
            <p className="chat-note">{whatsappContent.note}</p>
            {validNumber ? (
              <a className="chat-send" href={href} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_message_click", { message_type: "suggested" })}>
                Continue to WhatsApp <Send size={15} />
              </a>
            ) : <p className="chat-note chat-config-note">{whatsappContent.fallback}</p>}
          </div>
        </section>
      ) : null}
      <button className="whatsapp-fab" onClick={togglePanel} aria-label={open ? whatsappContent.closeLabel : whatsappContent.openLabel} aria-expanded={open}>
        {open ? <X size={23} /> : <MessageCircle size={23} />}<span>{open ? whatsappContent.closeLabel : whatsappContent.openLabel}</span>
      </button>
    </div>
  );
}
