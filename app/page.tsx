import ContactForm from "./ui/contact-form";
import SiteHeader from "./ui/site-header";

const services = [
  ["Rozwody", "Pomoc w przygotowaniu dokumentów, negocjacjach i reprezentacji przed sądem."],
  ["Alimenty", "Wsparcie w sprawach o ustalenie, podwyższenie lub obniżenie alimentów."],
  ["Podział majątku", "Doradztwo, negocjacje oraz prowadzenie postępowania o podział majątku wspólnego."],
  ["Mediacje", "Poszukiwanie rozwiązań pozwalających ograniczyć czas, koszty i stres związany ze sporem."],
];

const steps = [
  ["01", "Pierwsza rozmowa", "Krótko opisujesz sytuację. Ustalamy, czy i w jakim zakresie kancelaria może pomóc."],
  ["02", "Analiza sprawy", "Po zapoznaniu się z informacjami otrzymujesz jasne omówienie możliwych działań i ryzyk."],
  ["03", "Ustalenie strategii", "Wspólnie wybieramy rozwiązanie: negocjacje, mediację lub postępowanie sądowe."],
  ["04", "Prowadzenie sprawy", "Otrzymujesz informacje o kolejnych krokach i wsparcie na każdym etapie."],
];

const faq = [
  ["Czy przesłanie formularza oznacza przyjęcie sprawy?", "Nie. Formularz służy do pierwszego kontaktu. Przyjęcie sprawy wymaga sprawdzenia możliwości jej prowadzenia i odrębnego uzgodnienia warunków współpracy."],
  ["Czy w formularzu należy opisać wszystkie szczegóły?", "Nie. Wystarczy krótki, ogólny opis. Nie przesyłaj dokumentów, numerów identyfikacyjnych ani szczególnie wrażliwych danych."],
  ["Czy każda sprawa musi trafić do sądu?", "Nie zawsze. W zależności od sytuacji możliwe bywają negocjacje lub mediacja. Właściwa droga jest dobierana po analizie konkretnej sprawy."],
  ["Jak przygotować się do pierwszej rozmowy?", "Warto spisać najważniejsze daty, osoby i dotychczasowe działania. Lista dokumentów potrzebnych do dalszej analizy zostanie ustalona indywidualnie."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

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

      <section className="section process" id="wspolpraca">
        <div className="section-heading"><p className="eyebrow">Jak wygląda współpraca</p><h2>Wiesz, co dzieje się dalej</h2><p>Przejrzysty proces pomaga uporządkować sytuację i podejmować świadome decyzje.</p></div>
        <ol className="process-grid">{steps.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </section>

      <section className="section faq" id="faq">
        <div className="section-heading"><p className="eyebrow">Najczęstsze pytania</p><h2>Zanim się skontaktujesz</h2></div>
        <div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="section contact" id="kontakt">
        <div><p className="eyebrow">Kontakt</p><h2>Opowiedz krótko o swojej sprawie</h2><p className="contact-note">Przesłanie formularza nie powoduje zawarcia umowy ani udzielenia porady prawnej. Nie przesyłaj dokumentów ani szczególnie wrażliwych danych.</p></div>
        <ContactForm />
      </section>

      <footer><span>© {new Date().getFullYear()} Kancelaria Radcy Prawnego Małgorzata Krępeć-Kowalska</span><span>Włocławek</span></footer>
    </main>
  );
}
