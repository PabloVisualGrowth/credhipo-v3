import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Contacto | CredHipo – Habla con un Asesor Hipotecario",
  description:
    "Contacta con CredHipo y habla con un asesor hipotecario en menos de 24 horas. Sin compromiso. Te conseguimos la mejor hipoteca del mercado.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <ContactCTA />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
