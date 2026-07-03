import { useEffect, useState } from "react";
import { BookOpen, Palette, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import slidePinturas from "@/assets/showcase/slide-pinturas.jpg";
import slidePegantes from "@/assets/showcase/slide-pegantes.jpg";
import slideEstucos from "@/assets/showcase/slide-estucos.jpg";
import slideFachadas from "@/assets/showcase/slide-fachadas.jpg";

type Slide = {
  img: string;
  kicker: string;
  title: string;
  highlight: string;
  desc: string;
  ctaPrimary: { label: string; href: string; Icon: typeof BookOpen };
  ctaSecondary?: { label: string; href: string; Icon: typeof Palette };
  accent: string; // tailwind text color class for highlight
};

const slides: Slide[] = [
  {
    img: slidePinturas,
    kicker: "Pinturas y Esmaltes",
    title: "Color que transforma",
    highlight: "espacios",
    desc: "Vinilos Tipo 1 y 2, esmaltes 3 en 1 y anticorrosivos con cubrimiento profesional en más de 23 tonos.",
    ctaPrimary: { label: "Ver Catálogo", href: "/catalogo", Icon: BookOpen },
    ctaSecondary: { label: "Visualizador de Colores", href: "#visualizador", Icon: Palette },
    accent: "text-brand-red",
  },
  {
    img: slidePegantes,
    kicker: "Pegantes Especializados",
    title: "Adherencia que",
    highlight: "no falla",
    desc: "TECNI-PEGA, TECNI-FLEX y pegantes para porcelanato — formulación profesional para cada tipo de superficie.",
    ctaPrimary: { label: "Línea Pegantes", href: "/catalogo?cat=pegantes", Icon: ArrowRight },
    accent: "text-amber-400",
  },
  {
    img: slideEstucos,
    kicker: "Estucos y Masillas",
    title: "Acabados de",
    highlight: "alta gama",
    desc: "Estucos acrílicos, interior, exterior y masillas multiusos para superficies impecables listas para pintar.",
    ctaPrimary: { label: "Línea Estucos", href: "/catalogo?cat=estucos", Icon: ArrowRight },
    accent: "text-brand-red",
  },
  {
    img: slideFachadas,
    kicker: "Revestimientos y Fachadas",
    title: "Protección que",
    highlight: "perdura",
    desc: "TECNOFILL, granofachada e impermeabilizantes con resistencia probada al clima tropical colombiano.",
    ctaPrimary: { label: "Línea Fachadas", href: "/catalogo?cat=revestimientos", Icon: ArrowRight },
    accent: "text-emerald-300",
  },
];

export function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  const go = (n: number) => setIdx((n + slides.length) % slides.length);

  return (
    <section
      className="relative overflow-hidden text-white h-[640px] md:h-[680px] lg:h-[720px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* slides stack */}
      {slides.map((s, i) => (
        <div
          key={s.img}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${i === idx ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          aria-hidden={i !== idx}
        >
          <img
            src={s.img}
            alt={s.kicker}
            className={`absolute inset-0 size-full object-cover will-change-transform ${i === idx ? "animate-hero-ken" : "scale-[1.06]"}`}
            loading={i === 0 ? "eager" : "lazy"}
            width={1920}
            height={1080}
          />
          {/* cinematic gradient — dark blue brand wash from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-deep/95 via-brand-blue-deep/70 to-brand-blue-deep/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/80 via-transparent to-transparent" />
        </div>
      ))}

      {/* content */}
      {(() => {
        const s = slides[idx];
        const PrimaryIcon = s.ctaPrimary.Icon;
        const SecondaryIcon = s.ctaSecondary?.Icon;
        return (
          <div className="container-x relative h-full flex flex-col justify-center pt-20 pb-14">
            <div key={idx} className="max-w-3xl animate-hero-rise">
              <span className="chip !bg-white/10 !text-white !border-white/25 backdrop-blur">
                {s.kicker}
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.02] tracking-tight">
                {s.title}{" "}
                <span className={s.accent}>{s.highlight}</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                {s.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={s.ctaPrimary.href} className="btn-primary">
                  <PrimaryIcon className="size-5" />
                  {s.ctaPrimary.label}
                </a>
                {s.ctaSecondary && SecondaryIcon && (
                  <a href={s.ctaSecondary.href} className="btn-outline-white">
                    <SecondaryIcon className="size-5" />
                    {s.ctaSecondary.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* controls */}
      <button
        onClick={() => go(idx - 1)}
        aria-label="Anterior"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 size-11 md:size-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 grid place-items-center transition-colors"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={() => go(idx + 1)}
        aria-label="Siguiente"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 size-11 md:size-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 grid place-items-center transition-colors"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* dots + progress */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-brand-red" : "w-5 bg-white/40 hover:bg-white/60"}`}
          />
        ))}
      </div>

      {/* diagonal bottom cut */}
      <svg className="absolute bottom-0 left-0 right-0 w-full z-10" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
        <path d="M0,60 L1440,0 L1440,60 Z" fill="white" />
      </svg>
    </section>
  );
}
