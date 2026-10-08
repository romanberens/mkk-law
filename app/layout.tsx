import type { Metadata } from "next";
import "./globals.css";

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
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
