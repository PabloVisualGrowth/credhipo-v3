"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const pages = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/calculadora", label: "Calculadora" },
  { href: "/como-trabajamos", label: "Cómo trabajamos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

const ScrollNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 hidden md:flex">
      {pages.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          title={label}
          className={`block w-2 h-2 rounded-full transition-all duration-300 ${
            pathname === href
              ? "bg-primary scale-150"
              : "bg-primary/30 hover:bg-primary/60"
          }`}
        />
      ))}
    </nav>
  );
};

export default ScrollNav;
