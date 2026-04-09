import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://credhipo.es";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CredHipo | Bróker Hipotecario en Barcelona – Donde tu Hogar Comienza",
    template: "%s | CredHipo",
  },
  description:
    "CredHipo es tu bróker hipotecario de confianza en Barcelona. Expertos en intermediación hipotecaria regulados por el Banco de España. Conseguimos la mejor hipoteca del mercado para ti.",
  keywords: [
    "bróker hipotecario",
    "intermediario hipotecario",
    "hipoteca Barcelona",
    "mejor hipoteca",
    "hipoteca para extranjeros",
    "subrogación hipoteca",
    "asesor hipotecario",
    "crédito inmobiliario",
    "CredHipo",
  ],
  authors: [{ name: "CredHipo", url: BASE_URL }],
  creator: "CredHipo",
  publisher: "CredHipo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: BASE_URL,
    siteName: "CredHipo",
    title: "CredHipo | Bróker Hipotecario en Barcelona",
    description:
      "Expertos en intermediación hipotecaria regulados por el Banco de España. Conseguimos la mejor hipoteca del mercado para ti, con total transparencia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CredHipo – Bróker Hipotecario en Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CredHipo | Bróker Hipotecario en Barcelona",
    description:
      "Expertos en intermediación hipotecaria regulados por el Banco de España.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "CredHipo",
    url: BASE_URL,
    logo: `${BASE_URL}/credhipo-logo.png`,
    description:
      "Bróker hipotecario inscrito en el Registro de Intermediarios de Crédito Inmobiliario del Banco de España conforme a la Ley 5/2019.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C/LONDRES, 6, ENT 3ª",
      addressLocality: "Barcelona",
      postalCode: "08029",
      addressCountry: "ES",
    },
    email: "info@credhipo.es",
    areaServed: "ES",
    serviceType: "Intermediación de crédito inmobiliario",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Registro Intermediarios Crédito Inmobiliario – Banco de España",
    },
    sameAs: [],
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
