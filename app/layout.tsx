import type { Metadata } from "next";
import "./globals.css";
import "./ux.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://radcawewloclawku.pl"),
  title: "Radca prawny we Włocławku | Małgorzata Krępeć-Kowalska",
  description: "Pomoc prawna we Włocławku w sprawach rodzinnych: rozwody, alimenty, podział majątku i mediacje.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Radca prawny Małgorzata Krępeć-Kowalska",
    description: "Pomoc prawna we Włocławku w sprawach rodzinnych.",
    locale: "pl_PL",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Kancelaria Radcy Prawnego Małgorzata Krępeć-Kowalska",
    url: "https://radcawewloclawku.pl",
    areaServed: { "@type": "City", name: "Włocławek" },
  };
  return (
    <html lang="pl">
      <body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }} /></body>
    </html>
  );
}
