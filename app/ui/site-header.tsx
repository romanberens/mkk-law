"use client";

import { useEffect, useId, useRef, useState } from "react";

const links = [
  ["O kancelarii", "#o-kancelarii"],
  ["Zakres pomocy", "#uslugi"],
  ["Jak działamy", "#wspolpraca"],
  ["Pytania", "#faq"],
  ["Kontakt", "#kontakt"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && close();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="nav">
      <a className="brand" href="#start" aria-label="Kancelaria MKK — strona główna">MKK</a>
      <nav className="desktop-nav" aria-label="Główna nawigacja">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <button ref={triggerRef} className="menu-trigger" type="button" aria-expanded={open} aria-controls={menuId} onClick={() => setOpen((value) => !value)}>
        <span>{open ? "Zamknij" : "Menu"}</span><i aria-hidden="true" className={open ? "open" : ""} />
      </button>
      <div className={`menu-overlay ${open ? "open" : ""}`} aria-hidden={!open} onClick={close} />
      <nav id={menuId} className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobilna nawigacja" aria-hidden={!open}>
        <p>Przejdź do sekcji</p>
        {links.map(([label, href], index) => <a key={href} ref={index === 0 ? firstLinkRef : undefined} href={href} onClick={close}>{label}<span aria-hidden="true">→</span></a>)}
      </nav>
    </header>
  );
}
