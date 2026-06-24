import { Layers, PaintBucket, Wrench, Package, Droplet, Building2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const services = [
  { name: "Pegantes", desc: "Cerámica, porcelanato y especiales para zonas húmedas.", Icon: Layers, accent: "from-brand-blue to-brand-blue-deep" },
  { name: "Pinturas y Esmaltes", desc: "Vinilos T1, T2, T3 y anticorrosivos en 23 tonos.", Icon: PaintBucket, accent: "from-brand-red to-[#8a0f15]" },
  { name: "Estucos y Masillas", desc: "Acrílicos, interior, exterior y línea drywall.", Icon: Wrench, accent: "from-amber-500 to-amber-700" },
  { name: "Boquillas y Minerales", desc: "Extra fina, pigmentos mineral y juntas finas.", Icon: Package, accent: "from-slate-700 to-slate-900" },
  { name: "Aditivos", desc: "Para mortero, cemento y mezclas técnicas.", Icon: Droplet, accent: "from-emerald-600 to-emerald-800" },
  { name: "Revestimientos", desc: "Texturizados e impermeabilizantes de fachada.", Icon: Building2, accent: "from-brand-blue-deep to-slate-900" },
];

export function ServicesGrid() {
  return (
    <section id="categorias" className="py-20 lg:py-28 bg-brand-gray-soft">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">— Nuestro portafolio</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-blue leading-tight">
            Soluciones integrales <br />
            <span className="text-brand-red">para cada etapa de la obra</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Desde la base hasta el acabado final, con respaldo técnico y entrega oportuna.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.name}
              to="/catalogo"
              className="group relative bg-white rounded-2xl border border-border p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all overflow-hidden"
            >
              {/* hover accent line */}
              <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.accent} scale-x-0 group-hover:scale-x-100 origin-left transition-transform`} />

              <div className={`size-14 rounded-2xl bg-gradient-to-br ${s.accent} text-white grid place-items-center shadow-card`}>
                <s.Icon className="size-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-brand-blue group-hover:text-brand-red transition-colors">
                {s.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-3 transition-all">
                Explorar <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
