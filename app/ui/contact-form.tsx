"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    if (response.ok) { form.reset(); setStatus("sent"); } else setStatus("error");
  }

  return (
    <form onSubmit={submit}>
      <label>Imię i nazwisko<input name="name" autoComplete="name" minLength={2} maxLength={100} required /></label>
      <label>E-mail<input name="email" type="email" autoComplete="email" maxLength={160} required /></label>
      <label>Telefon (opcjonalnie)<input name="phone" type="tel" autoComplete="tel" maxLength={30} /></label>
      <label>Krótki opis sprawy<textarea name="message" minLength={20} maxLength={3000} rows={6} required /></label>
      <label className="consent"><input name="consent" type="checkbox" value="yes" required /> Wyrażam zgodę na kontakt w odpowiedzi na wiadomość i zapoznałem(-am) się z informacją powyżej.</label>
      <input className="website" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Wysyłanie…" : "Wyślij wiadomość"}</button>
      <p className={`form-status ${status}`} role="status">{status === "sent" ? "Wiadomość została wysłana." : status === "error" ? "Nie udało się wysłać wiadomości. Spróbuj ponownie później." : ""}</p>
    </form>
  );
}
