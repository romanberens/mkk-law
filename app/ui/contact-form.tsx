"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [messageLength, setMessageLength] = useState(0);
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");
    const form = event.currentTarget;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    if (response.ok) {
      form.reset(); setMessageLength(0); setStatus("sent"); setFeedback("Wiadomość została wysłana. Kancelaria skontaktuje się po zapoznaniu z jej treścią.");
    } else {
      const payload = await response.json().catch(() => null) as { error?: string } | null;
      setStatus("error");
      setFeedback(payload?.error === "rate_limit" ? "Wysłano zbyt wiele prób. Odczekaj 15 minut i spróbuj ponownie." : payload?.error === "mail_unavailable" ? "Formularz jest chwilowo niedostępny. Skorzystaj z kontaktu telefonicznego lub e-mailowego." : "Nie udało się wysłać wiadomości. Sprawdź pola i spróbuj ponownie.");
    }
  }

  return (
    <form onSubmit={submit}>
      <label>Imię i nazwisko<input name="name" autoComplete="name" minLength={2} maxLength={100} required /></label>
      <label>E-mail<input name="email" type="email" autoComplete="email" maxLength={160} required /></label>
      <label>Telefon (opcjonalnie)<input name="phone" type="tel" autoComplete="tel" maxLength={30} /></label>
      <label>Krótki opis sprawy<textarea name="message" minLength={20} maxLength={3000} rows={6} required aria-describedby="message-hint" onChange={(event) => setMessageLength(event.target.value.length)} /><small id="message-hint">Minimum 20 znaków · {messageLength}/3000</small></label>
      <label className="consent"><input name="consent" type="checkbox" value="yes" required /> Wyrażam zgodę na kontakt w odpowiedzi na wiadomość i zapoznałem(-am) się z informacją powyżej.</label>
      <input className="website" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Wysyłanie…" : "Wyślij wiadomość"}</button>
      <p className={`form-status ${status}`} role="status" aria-live="polite">{feedback}</p>
    </form>
  );
}
