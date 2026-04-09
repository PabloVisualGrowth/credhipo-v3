import type { Metadata } from "next";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Blog | CredHipo – Consejos y Noticias sobre Hipotecas",
  description:
    "Artículos y guías sobre hipotecas, Euríbor, tipos de interés y todo lo que necesitas saber para tomar la mejor decisión financiera.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <Blog />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
