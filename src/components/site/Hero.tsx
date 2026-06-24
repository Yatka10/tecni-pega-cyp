import { ArrowRight, PlayCircle, ShieldCheck, Award } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/ambient/hero.jpg";
import { WHATSAPP_URL } from "@/lib/products";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue-deep text-white">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 size-[420px] rounded-full bg-brand-red/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 size-[520px] rounded-full bg-brand-blue/40 blur-3xl" />

      <div className="container-x relative grid lg:grid-cols-12 gap-10 lg:gap-14 py-16 lg:py-24 items-center">
        {/* Text */}
        <div className="lg:col-span-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 chip !bg-white/10 !text-white !border-white/20">
            <span className="size-1.5 rounded-full bg-brand-red" />
            Pegantes · Pinturas · Estucos · Revestimientos
          </span>

          <h1 className="mt-5 font-display font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Acabados que <br className="hidden sm:block" />
            <span className="text-brand-red">hablan</span> por tu obra
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-white/80">
            Fabricamos en Colombia productos de alto desempeño para construcción.
            Calidad técnica, asesoría real y despacho nacional para arquitectos,
            contratistas y depósitos.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/catalogo" className="btn-primary text-base">
              Ver catálogo <ArrowRight className="size-4" />
            </Link>
            <a href="/#visualizador" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white hover:text-brand-red transition-colors">
              <span className="size-9 grid place-items-center rounded-full bg-white/10 group-hover:bg-white/20">
                <PlayCircle className="size-5" />
              </span>
              Visualizar colores
            </a>
          </div>

          {/* trust row */}
          <div className="mt-10 flex items-center gap-5">
            <div className="flex -space-x-2">
              <span className="size-9 rounded-full ring-2 ring-brand-blue-deep bg-brand-red grid place-items-center text-xs font-bold">T</span>
              <span className="size-9 rounded-full ring-2 ring-brand-blue-deep bg-brand-blue grid place-items-center text-xs font-bold">P</span>
              <span className="size-9 rounded-full ring-2 ring-brand-blue-deep bg-white text-brand-blue grid place-items-center text-xs font-bold">C</span>
              <span className="size-9 rounded-full ring-2 ring-brand-blue-deep bg-amber-500 grid place-items-center text-xs font-bold">+</span>
            </div>
            <div className="text-sm">
              <div className="font-bold">+500 clientes en Colombia</div>
              <div className="text-white/70 text-xs">4.5 ★ · calificación promedio</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-card-hover">
            <img
              src={heroImg}
              alt="Aplicación profesional de pegante cerámico"
              className="absolute inset-0 size-full object-cover scale-105 animate-fade-up"
              width={1280}
              height={1600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/70 via-transparent to-transparent" />
            {/* floating badge */}
            <div className="absolute left-4 bottom-4 right-4 sm:left-6 sm:bottom-6 sm:right-auto bg-white rounded-2xl shadow-card-hover p-4 flex items-center gap-3 max-w-xs">
              <div className="size-12 rounded-xl bg-brand-blue-soft text-brand-blue grid place-items-center shrink-0">
                <Award className="size-6" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-display font-extrabold text-brand-blue leading-none">+15 años</div>
                <div className="text-xs text-muted-foreground mt-1">fabricando calidad en Colombia</div>
              </div>
            </div>
          </div>

          {/* secondary chip */}
          <div className="hidden md:flex absolute -top-4 -right-4 lg:-right-6 bg-brand-red text-white rounded-2xl px-4 py-3 shadow-card-hover items-center gap-2 rotate-3">
            <ShieldCheck className="size-5" />
            <div className="text-xs leading-tight">
              <div className="font-bold uppercase tracking-wider">Garantía</div>
              <div className="opacity-90">técnica certificada</div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp pill below hero */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        className="hidden lg:flex absolute right-6 bottom-6 items-center gap-2 bg-whatsapp text-white rounded-full px-4 py-2 text-sm font-semibold shadow-card-hover hover:scale-105 transition-transform"
      >
        Cotiza ahora · WhatsApp
      </a>
    </section>
  );
}
