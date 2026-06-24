import { Package, Star, Users, Handshake, CheckCircle2 } from "lucide-react";

const stats = [
  { Icon: Package, value: "+25", label: "productos fabricados" },
  { Icon: Users, value: "+500", label: "clientes satisfechos" },
  { Icon: Handshake, value: "+50", label: "aliados en Colombia" },
  { Icon: Star, value: "4.5★", label: "calificación promedio" },
];

const why = [
  "Precios directos de fábrica",
  "Soporte técnico especializado",
  "Despacho a todo Colombia",
  "Garantía técnica certificada",
];

export function StatsPanel() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x grid lg:grid-cols-5 gap-10 items-center">
        {/* left text */}
        <div className="lg:col-span-2">
          <span className="chip">— ¿Por qué TECNI-PEGA?</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-blue leading-tight">
            Más que productos. <br />
            <span className="text-brand-red">Construimos confianza.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nuestro compromiso con la calidad, la transparencia y el servicio al cliente
            nos ha convertido en el aliado preferido de cientos de proyectos.
          </p>

          <ul className="mt-7 space-y-3">
            {why.map((w) => (
              <li key={w} className="flex items-center gap-3 text-sm font-medium text-brand-blue">
                <CheckCircle2 className="size-5 text-brand-red shrink-0" /> {w}
              </li>
            ))}
          </ul>
        </div>

        {/* right panel */}
        <div className="lg:col-span-3 relative overflow-hidden rounded-3xl gradient-brand text-white p-8 lg:p-10 shadow-card-hover">
          {/* Colombia silhouette */}
          <svg
            viewBox="0 0 400 400"
            className="absolute -right-12 -bottom-16 w-[420px] h-[420px] opacity-15"
            aria-hidden
          >
            <path
              fill="white"
              d="M210 30c25 8 40 28 50 55 8 22 5 45 18 65 14 22 41 30 50 55 8 24-7 50-3 78 3 22 22 38 18 60-5 27-39 39-45 65-4 21 12 41 1 60-10 18-37 18-55 28-22 12-39 36-65 38-30 2-54-21-80-32-26-12-58-13-77-35-18-22-7-54-15-82-7-25-32-43-32-69 0-25 24-43 32-67 7-22-3-48 9-69 12-22 41-26 56-46 12-17 13-41 30-55 18-15 47-15 67-32 13-12 18-30 41-17z"
            />
          </svg>

          <div className="relative">
            <div className="text-sm uppercase tracking-widest text-white/70">Cobertura nacional</div>
            <h3 className="mt-1 font-display text-2xl lg:text-3xl font-extrabold">
              Presencia en todo Colombia 🇨🇴
            </h3>

            <div className="mt-8 grid grid-cols-2 gap-5">
              {stats.map(({ Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/15 hover:bg-white/15 transition-colors"
                >
                  <div className="size-10 rounded-xl bg-brand-red grid place-items-center mb-3">
                    <Icon className="size-5" />
                  </div>
                  <div className="font-display text-3xl lg:text-4xl font-extrabold">{value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/80 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
