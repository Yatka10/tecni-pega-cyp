import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import a1 from "@/assets/ambient/about1.jpg";
import a2 from "@/assets/ambient/about2.jpg";
import a3 from "@/assets/ambient/about3.jpg";

const points = [
  { title: "Fabricación nacional", desc: "Planta en Colombia con control de calidad por lote." },
  { title: "Asesoría técnica real", desc: "Te acompañamos antes, durante y después de la obra." },
  { title: "Despacho a todo el país", desc: "Logística confiable y tiempos cumplidos." },
];

export function AboutCollage() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div>
          <span className="chip">— Sobre nosotros</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-blue leading-[1.1]">
            Soluciones confiables para <br className="hidden md:block" />
            un <span className="text-brand-red">mundo en construcción</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base lg:text-lg max-w-xl">
            Desde nuestra planta en Barranquilla fabricamos pegantes, pinturas,
            estucos y revestimientos pensados para resistir el clima y las
            exigencias de la construcción colombiana.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p.title} className="flex items-start gap-3">
                <span className="mt-0.5 size-9 rounded-full bg-brand-blue-soft text-brand-blue grid place-items-center shrink-0">
                  <CheckCircle2 className="size-5" />
                </span>
                <div>
                  <div className="font-bold text-brand-blue">{p.title}</div>
                  <div className="text-sm text-muted-foreground">{p.desc}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link to="/catalogo" className="btn-primary">
              Conoce nuestros productos <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Collage */}
        <div className="relative">
          <div className="grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4 h-[480px] sm:h-[560px]">
            <div className="col-span-4 row-span-3 rounded-2xl overflow-hidden shadow-card">
              <img src={a2} alt="Fachada residencial" className="size-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-2 row-span-3 rounded-2xl overflow-hidden shadow-card">
              <img src={a1} alt="Mezcla de pintura" className="size-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-3 row-span-3 rounded-2xl overflow-hidden shadow-card">
              <img src={a3} alt="Instalación de boquilla" className="size-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-3 row-span-3 rounded-2xl overflow-hidden shadow-card relative bg-gradient-to-br from-brand-blue to-brand-blue-deep text-white p-5 flex flex-col justify-between">
              <div className="text-[11px] uppercase tracking-widest opacity-80">Satisfacción cliente</div>
              <div>
                <div className="font-display text-5xl sm:text-6xl font-extrabold leading-none">98%</div>
                <div className="mt-2 text-sm opacity-90">de proyectos entregados sin reproceso técnico.</div>
              </div>
              <div className="absolute -bottom-6 -right-6 size-32 rounded-full bg-brand-red/30 blur-2xl" />
            </div>
          </div>

          {/* floating chip */}
          <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-card-hover px-4 py-3 hidden md:block">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Lotes con</div>
            <div className="text-brand-blue font-bold">Control de calidad</div>
          </div>
        </div>
      </div>
    </section>
  );
}
