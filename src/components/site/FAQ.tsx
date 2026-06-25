import { useState } from "react";
import { Plus, MessageCircle, Phone } from "lucide-react";
import faqImg from "@/assets/rooms/sala.jpg";
import { WHATSAPP_URL, WHATSAPP_PHONE } from "@/lib/products";

const faqs = [
  {
    q: "¿Hacen despachos a todo el país?",
    a: "Sí. Desde nuestra planta en Barranquilla coordinamos despachos a toda Colombia con operadores logísticos confiables. Los tiempos dependen del destino y del volumen.",
  },
  {
    q: "¿Manejan precios para distribuidores?",
    a: "Contamos con un programa de aliados con tarifas preferenciales, material POP, capacitaciones y línea de crédito para distribuidores activos.",
  },
  {
    q: "¿Cómo elijo el pegante correcto para mi obra?",
    a: "Nuestro equipo técnico te asesora según el tipo de pieza, sustrato, exposición a humedad y zona climática. Escríbenos por WhatsApp con las características y te recomendamos la mejor opción.",
  },
  {
    q: "¿Qué tonos manejan en pinturas TECNI-COLOR?",
    a: "La línea Vinilo Tipo 1 y Tipo 2 maneja una paleta de 23 tonos. Puedes visualizar muchos de ellos directamente sobre una pared en nuestro Visualizador de Colores.",
  },
  {
    q: "¿Sus productos tienen garantía técnica?",
    a: "Sí, todos nuestros productos cuentan con respaldo técnico certificado y ficha técnica detallada. Brindamos acompañamiento durante y después de la aplicación.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-brand-gray-soft">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Image + CTA card */}
        <div className="relative lg:sticky lg:top-28">
          <div className="aspect-[5/6] rounded-3xl overflow-hidden shadow-card-hover">
            <img src={faqImg} alt="Asesor TECNI-PEGA" className="size-full object-cover" loading="lazy" />
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-6 bg-white rounded-2xl shadow-card-hover p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform"
          >
            <div className="size-12 rounded-full bg-whatsapp grid place-items-center text-white shrink-0">
              <Phone className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">¿Tienes más preguntas?</div>
              <div className="font-bold text-brand-blue truncate">{WHATSAPP_PHONE}</div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 chip !bg-brand-red !text-white !border-brand-red/0">
              <MessageCircle className="size-3.5" /> WhatsApp
            </span>
          </a>
        </div>

        {/* Accordion */}
        <div>
          <span className="chip">— FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-blue leading-tight">
            Preguntas <br /> <span className="text-brand-red">frecuentes</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Resolvemos las dudas más comunes de arquitectos, contratistas y depósitos.
          </p>

          <ul className="mt-8 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="bg-white rounded-2xl border border-border overflow-hidden shadow-card transition-shadow hover:shadow-card-hover">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-brand-blue">{f.q}</span>
                    <span className={`size-9 rounded-full grid place-items-center shrink-0 transition-all ${isOpen ? "bg-brand-red text-white rotate-45" : "bg-brand-blue-soft text-brand-blue"}`}>
                      <Plus className="size-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pt-0 text-sm text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
