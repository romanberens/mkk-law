import ContactForm from "./ui/contact-form";

const services = [
  ["Rozwody", "Pomoc w przygotowaniu dokumentów, negocjacjach i reprezentacji przed sądem."],
  ["Alimenty", "Wsparcie w sprawach o ustalenie, podwyższenie lub obniżenie alimentów."],
  ["Podział majątku", "Doradztwo, negocjacje oraz prowadzenie postępowania o podział majątku wspólnego."],
  ["Mediacje", "Poszukiwanie rozwiązań pozwalających ograniczyć czas, koszty i stres związany ze sporem."],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#start">MKK</a>
        <nav aria-label="Główna nawigacja">
          <a href="#o-kancelarii">O kancelarii</a><a href="#uslugi">Zakres pomocy</a><a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero" id="start">
        <div className="hero-copy">
          <p className="eyebrow">Kancelaria Radcy Prawnego · Włocławek</p>
          <h1>Prawo wymaga wiedzy.<br />Twoja sprawa — uważności.</h1>
          <p className="lead">Rzetelna pomoc prawna w sprawach rodzinnych. Jasno wyjaśnione możliwości, indywidualna strategia i wsparcie na każdym etapie.</p>
          <div className="actions"><a className="button" href="#kontakt">Umów konsultację</a><a className="text-link" href="#uslugi">Poznaj zakres pomocy →</a></div>
        </div>
        <div className="hero-mark" aria-hidden="true"><span>§</span></div>
      </section>

      <section className="section split" id="o-kancelarii">
        <div><p className="eyebrow">O kancelarii</p><h2>Spokojnie przez trudne decyzje</h2></div>
        <div className="copy"><p>Kancelaria Małgorzaty Krępeć-Kowalskiej zapewnia pomoc prawną dopasowaną do sytuacji klienta. Każda sprawa zaczyna się od uważnej rozmowy, rozpoznania ryzyk i przedstawienia możliwych dróg działania.</p><p>Priorytetem jest rzeczowa komunikacja oraz poszukiwanie rozwiązania, które chroni interes klienta — w negocjacjach, mediacji lub postępowaniu sądowym.</p></div>
      </section>

      <section className="section services" id="uslugi">
        <p className="eyebrow">Zakres pomocy</p><h2>Sprawy rodzinne</h2>
        <div className="service-grid">{services.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section contact" id="kontakt">
        <div><p className="eyebrow">Kontakt</p><h2>Opowiedz krótko o swojej sprawie</h2><p className="contact-note">Przesłanie formularza nie powoduje zawarcia umowy ani udzielenia porady prawnej. Nie przesyłaj dokumentów ani szczególnie wrażliwych danych.</p></div>
        <ContactForm />
      </section>

      <footer><span>© {new Date().getFullYear()} Kancelaria Radcy Prawnego Małgorzata Krępeć-Kowalska</span><span>Włocławek</span></footer>
    </main>
  );
}
