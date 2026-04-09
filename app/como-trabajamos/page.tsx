import type { Metadata } from "next";
import Header from "@/components/Header";
import Storytelling from "@/components/Storytelling";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Cómo Trabajamos | CredHipo – El Proceso Hipotecario Paso a Paso",
  description:
    "Descubre el proceso de CredHipo: desde el primer contacto con los bancos hasta la firma en notaría. Transparente, eficaz y sin sorpresas.",
  alternates: { canonical: "/como-trabajamos" },
};

export default function ComoTrabajamosPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <Storytelling />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
