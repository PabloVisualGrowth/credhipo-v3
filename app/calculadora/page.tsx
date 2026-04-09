import type { Metadata } from "next";
import Header from "@/components/Header";
import MortgageCalculator from "@/components/MortgageCalculator";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Calculadora Hipoteca | CredHipo – Calcula Tu Cuota Mensual",
  description:
    "Calcula la cuota mensual de tu hipoteca con nuestra herramienta gratuita. Ajusta el importe, plazo e interés para estimar tus pagos mensuales.",
  alternates: { canonical: "/calculadora" },
};

export default function CalculadoraPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <MortgageCalculator />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
