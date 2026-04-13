"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const sections = [
  { id: "inicio",          label: "Inicio" },
  { id: "servicios",       label: "Servicios" },
  { id: "calculadora",     label: "Calculadora" },
  { id: "como-trabajamos", label: "Cómo trabajamos" },
  { id: "nosotros",        label: "Nosotros" },
  { id: "blog",            label: "Blog" },
  { id: "contacto",        label: "Contacto" },
];

const ScrollNav = () => {
  const pathname = usePathname();
  const [active, setActive] = useState("inicio");

  // Only show on homepage
  if (pathname !== "/") return null;

  // Track which section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 hidden md:flex">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          title={label}
          className={`block w-2 h-2 rounded-full transition-all duration-300 ${
            active === id
              ? "bg-primary scale-150"
              : "bg-primary/30 hover:bg-primary/60"
          }`}
        />
      ))}
    </nav>
  );
};

export default ScrollNav;
