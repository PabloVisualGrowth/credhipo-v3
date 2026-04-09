import type { Metadata } from "next";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Servicios | CredHipo – Gestión Hipotecaria y Financiación",
  description:
    "Descubre los servicios hipotecarios de CredHipo: gestión de financiación, intermediación estratégica y seguimiento integral del proceso hipotecario.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <Services />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
