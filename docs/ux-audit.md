# Audyt UX i rejestr decyzji — MKK Law

Data: 2026-10-08

## Przeanalizowane projekty Next.js

- OneNetwork: architektura treści, karty artykułów, filtrowanie i podstawy SEO.
- Album: kompletne stany interfejsu, błędy z możliwością ponowienia, dostępność, limity żądań i bezpieczna wysyłka e-mail.
- Wirtualna Redakcja: dostępne menu mobilne, obsługa fokusu i klawiatury, postęp czytania oraz interfejs artykułów.
- CV Builder: natychmiastowy podgląd, ocena kompletności i trwały stan formularzy.
- Paragonowy Asystent: czytelne etapy operacji, progres, PWA i komunikaty zależne od urządzenia.
- UKJobs: prosta architektura strony docelowej.

## Wdrożone do MKK Law

- dostępne menu mobilne z obsługą Escape i zarządzaniem fokusem;
- blokada przewijania tła przy otwartym menu;
- poprawione stany focus i wielkość elementów dotykowych;
- sekcja przebiegu współpracy;
- dostępne FAQ;
- licznik znaków i precyzyjne komunikaty formularza;
- komunikaty dla limitu żądań i niedostępnego SMTP;
- `aria-live` dla statusu formularza;
- respektowanie `prefers-reduced-motion`;
- dane strukturalne `LegalService`;
- poprawione przewijanie do sekcji pod przyklejonym nagłówkiem.

## Świadomie pominięte

- PWA i instalacja strony jako aplikacji;
- zapisywanie treści formularza w `localStorage`;
- upload dokumentów i danych wrażliwych;
- śledzenie zachowania użytkowników bez ustalonej polityki prywatności.

## Dalszy backlog

1. Uzupełnić zweryfikowane dane kancelarii i profil radcy prawnego.
2. Skonfigurować SMTP oraz wykonać test dostarczania wiadomości.
3. Dodać widoczny kontakt telefoniczny na urządzeniach mobilnych.
4. Zaprojektować poradnik prawny i panel publikacji po audycie Promax Blog oraz Tata Jest Ważny.
5. Dodać pomiar skuteczności po zatwierdzeniu zasad prywatności i analityki.

## Audyt paneli Promax Blog i Tata Jest Ważny

### Promax Blog / panel katalogowy

Panel jest wyspecjalizowanym systemem PHP zintegrowanym ze Strapi. Aktualna baza zawiera 292 produkty, 32 grupy, 2 zastosowania i 2 pliki w bibliotece mediów.

Najważniejsze funkcje:

- dashboard rozdzielony na widok biznesowy i techniczny;
- metryki aktywnych i nieaktywnych treści oraz ostatnio zmieniane rekordy;
- stan integracji ze Strapi, kompletność danych i ostrzeżenia diagnostyczne;
- ośmiostopniowy kreator: grupa, dane podstawowe, opisy, atrybuty, media, dokumenty, SEO i podsumowanie;
- zapisywanie wersji roboczej pomiędzy etapami;
- kontrolowane przechodzenie między ukończonymi krokami;
- automatyczny slug z podglądem i możliwością regeneracji;
- osobny etap SEO oraz podsumowanie przed publikacją;
- walidacja pól, CSRF, komunikaty flash i testy integracyjne.

Warto przenieść do MKK: wskaźnik kompletności artykułu, etap SEO, podsumowanie przed publikacją, rozdzielenie kondycji treści od kondycji systemu oraz czytelne statusy.

### Tata Jest Ważny / CMS blogowy

Panel jest własnym CMS-em PHP/SQLite. Aktualna baza zawiera 15 wpisów, 5 stron, 5 pozycji menu, 14 plików multimedialnych i 1 folder mediów.

Najważniejsze funkcje:

- lista wpisów oraz formularz tworzenia i edycji;
- szkic, publikacja natychmiastowa i data publikacji;
- tytuł, slug, lead, treść HTML i obraz główny;
- biblioteka mediów z folderami, filtrowaniem i licznikiem użycia pliku;
- wybór obrazu bezpośrednio z formularza wpisu;
- strony, bloki treści, menu, użytkownicy i ustawienia;
- historia operacji;
- import wpisów i obrazów z LinkedIn;
- PWA panelu administracyjnego i mobilny drawer;
- ochrona CSRF, polityki dostępu oraz testy bezpieczeństwa.

Warto przenieść do MKK: prosty status szkic/opublikowany, zaplanowaną publikację, bibliotekę mediów, podgląd wpisu, historię zmian oraz wygodny panel mobilny.

### Rekomendowany panel poradnika MKK

1. Dashboard: szkice, opublikowane artykuły, zaplanowane publikacje, treści wymagające aktualizacji i stan serwisu.
2. Kreator artykułu: temat → treść → obraz → SEO → podgląd → publikacja.
3. Pola: tytuł, slug, lead, treść blokowa lub Markdown, autor, kategoria, data publikacji, data przeglądu prawnego, źródła i obraz główny.
4. Statusy: szkic, do weryfikacji, zatwierdzony, zaplanowany, opublikowany i zarchiwizowany.
5. Biblioteka mediów z tekstem alternatywnym, informacją o wykorzystaniu i blokadą usunięcia używanego pliku.
6. Historia wersji oraz możliwość przywrócenia poprzedniej treści.
7. Podgląd identyczny z publiczną stroną przed publikacją.
8. SEO: title, description, canonical, Open Graph i dane strukturalne artykułu.
9. Bezpieczeństwo: osobne konta, role, CSRF, rate limiting, dziennik operacji i brak publicznego panelu bez dodatkowej ochrony.

Nie należy przenosić edycji surowego HTML jako głównego sposobu pisania. Dla kancelarii lepszy jest ograniczony edytor blokowy lub Markdown z bezpiecznym renderowaniem i etapem zatwierdzenia merytorycznego.
