"use client";

import { useState } from "react";
const consultantImage = "/consultant-meeting.jpg";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { X, ChevronDown, ChevronUp } from "lucide-react";

const team = [
  {
    name: "Ángel Fernández Simón",
    role: null,
    photo: null,
    bio: [
      "Ángel Fernández Simón es un reconocido empresario del sector inmobiliario y financiero, con una trayectoria consolidada en la creación, desarrollo y gestión de proyectos de alto impacto.",
      "Fundador de la inmobiliaria Don Piso, una de las marcas más relevantes del mercado español, ha sido protagonista directo en la profesionalización y modernización del sector inmobiliario en España. Su visión estratégica y capacidad para identificar oportunidades han marcado su carrera empresarial durante décadas.",
      "En la actualidad, como socio fundador de Credhipo, aporta al proyecto su profundo conocimiento del mercado, una sólida red de contactos y una clara orientación a resultados, contribuyendo al desarrollo de soluciones financieras eficientes y adaptadas a las necesidades reales de clientes e inversores.",
    ],
  },
  {
    name: "Carmen Rosas",
    role: "Asesora financiera en crédito hipotecario según la Ley 5/2019",
    photo: null,
    bio: [
      "Profesional del sector financiero con más de 30 años de experiencia en banca, Carmen Rosas ha desarrollado su carrera en entidades como Bancaja y Bankia, ocupando posiciones de alta responsabilidad en dirección comercial, gestión de redes y desarrollo de negocio en Cataluña.",
      "Especialista en financiación hipotecaria, análisis de riesgo y negociación con entidades financieras, aporta una visión estratégica clave en la estructuración de operaciones y en la optimización de condiciones de financiación.",
      "Licenciada en Ciencias Empresariales por la Universidad de Barcelona, cuenta además con los Títulos de Intermediación en crédito inmobiliario y asesoramiento, homologado por Banco de España, y de Agente de la Propiedad Inmobiliaria.",
      "En Credhipo, aporta su experiencia en banca y su conocimiento del sistema financiero para garantizar operaciones sólidas, viables y con las mejores condiciones de mercado.",
    ],
  },
  {
    name: "Marta Oropesa",
    role: "Asesora financiera en crédito hipotecario según la Ley 5/2019",
    photo: null,
    bio: [
      "Profesional del sector inmobiliario y financiero con más de 10 años de experiencia, Marta Oropesa ha desarrollado su trayectoria en compañías como Aliseda Inmobiliaria, gestionando carteras de activos y operaciones vinculadas a fondos de inversión, así como en entornos de alta exigencia jurídica y financiera.",
      "Especialista en la gestión de operaciones complejas y en el acompañamiento integral en procesos de compraventa y financiación, cuenta con experiencia en procedimientos ejecutivos, subastas y cesiones de remate, aportando soluciones eficaces en contextos de elevada complejidad.",
      "Graduada en Derecho y poseedora del Título de Intermediación en crédito inmobiliario y asesoramiento, homologado por Banco de España, combina un sólido rigor jurídico con una visión práctica del mercado que le permite analizar la viabilidad de cada operación y estructurar soluciones adaptadas.",
      "En Credhipo, lidera el análisis legal de las operaciones, garantizando la seguridad y transparencia en cada proceso.",
    ],
  },
];

const TeamModal = ({ member, onClose }: { member: typeof team[0]; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative bg-primary rounded-t-2xl p-8 pb-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="w-24 h-24 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center mb-4 mx-auto">
          {member.photo ? (
            <img src={member.photo} alt={member.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-3xl font-heading font-bold text-white/60">{member.name.charAt(0)}</span>
          )}
        </div>
        <h3 className="text-2xl font-heading font-bold text-white text-center">{member.name}</h3>
        {member.role && (
          <p className="text-xs font-semibold text-white/70 uppercase tracking-widest text-center mt-2">{member.role}</p>
        )}
      </div>
      <div className="p-8">
        <div className="space-y-4">
          {member.bio.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);
  const [showTeam, setShowTeam] = useState(false);

  return (
    <section id="nosotros" className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <BlurFade inView delay={0}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={consultantImage}
                  alt="Equipo de profesionales CredHipo"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs md:text-sm font-medium text-secondary uppercase tracking-wider mb-2 md:mb-4">
                Sobre Nosotros
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 md:mb-6">
                Donde tu Hogar Comienza
              </h2>
              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                <p>
                  CredHipo nace de la experiencia de profesionales del sector inmobiliario, legal y bancario que comparten un mismo objetivo: ayudar a nuestros clientes a tomar decisiones inmobiliarias e hipotecarias con total seguridad y transparencia.
                </p>
                <p>
                  CredHipo está inscrita en el Registro de Intermediarios de Crédito Inmobiliario del Banco de España, conforme a la Ley 5/2019 reguladora de los contratos de crédito inmobiliario. Esta licencia no es solo un requisito legal: es una garantía para nuestros clientes.
                </p>
                <p>
                  En un sector donde existen intermediarios que operan sin regulación, contar con esta acreditación significa que trabajas con un equipo profesional, supervisado y comprometido con la seguridad de cada decisión.
                </p>
                <p className="font-medium text-foreground">
                  Porque cuando se trata de tu vivienda o tu inversión, la confianza no es opcional.
                </p>
              </div>

              {/* Team toggle button */}
              <Button
                variant="outline"
                className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                onClick={() => setShowTeam(!showTeam)}
              >
                {showTeam ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                El equipo
              </Button>
            </div>
          </div>
        </BlurFade>

        {/* Team cards — full width, below the grid */}
        {showTeam && (
          <BlurFade inView delay={0.1}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0">
                      <span className="text-xl font-heading font-bold text-primary">{member.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-base leading-tight">{member.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{member.bio[0]}</p>
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="mt-1 text-xs font-semibold text-primary uppercase tracking-wider hover:underline text-left"
                  >
                    Ver perfil completo →
                  </button>
                </div>
              ))}
            </div>
          </BlurFade>
        )}
      </div>

      {selectedMember && <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />}
    </section>
  );
};

export default About;
