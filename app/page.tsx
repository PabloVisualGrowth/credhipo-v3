import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MortgageCalculator from "@/components/MortgageCalculator";
import About from "@/components/About";
import Storytelling from "@/components/Storytelling";
import Blog from "@/components/Blog";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import LeadModal from "@/components/LeadModal";
import ScrollNav from "@/components/ScrollNav";

export const metadata: Metadata = {
  title: "CredHipo | Bróker Hipotecario en Barcelona – Donde tu Hogar Comienza",
  description:
    "CredHipo es tu bróker hipotecario de confianza en Barcelona. Expertos en intermediación hipotecaria regulados por el Banco de España. Conseguimos la mejor hipoteca del mercado para ti.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Intermediación de crédito inmobiliario",
    provider: {
      "@type": "Organization",
      name: "CredHipo",
      url: "https://credhipo.es",
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    description:
      "CredHipo gestiona y negocia tu hipoteca con los bancos para conseguirte las mejores condiciones del mercado.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />
      <ScrollNav />
      <main>
        <Hero />
        <Services />
        <MortgageCalculator />
        <Storytelling />
        <About />
        <Blog />
        <ContactCTA />
      </main>
      <Footer />
      <CookieConsent />
      <LeadModal />
    </>
  );
}
