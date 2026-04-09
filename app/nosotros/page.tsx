import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Nosotros | CredHipo – Equipo Experto en Hipotecas",
  description:
    "Conoce al equipo de CredHipo: intermediarios de crédito inmobiliario registrados, con años de experiencia ayudando a familias a conseguir la mejor hipoteca.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <About />
        <Team />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
