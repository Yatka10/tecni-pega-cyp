import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft, MessageCircle, ChevronLeft, ChevronRight,
  ShieldCheck, Droplets, Link2, Home, CheckCircle2, Sparkles, Palette,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ProductCard } from "@/components/site/ProductCard";
import { ColorPaletteModal } from "@/components/site/ColorPaletteModal";
import { products, whatsappForProduct } from "@/lib/products";


export const Route = createFileRoute("/producto/$slug")({
  validateSearch: (search: Record<string, unknown>) => ({
    colores: search.colores === 1 || search.colores === "1" ? 1 : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Producto — TECNI-PEGA C&P S.A.S." },
      { name: "description", content: "Detalle de producto TECNI-PEGA: ficha técnica, galería y beneficios." },
    ],
  }),

  errorComponent: ({ error, reset }) => {
    if (typeof console !== "undefined") console.error(error);
    return (
      <div className="min-h-screen grid place-items-center p-8 text-center">
        <div>
          <p className="text-brand-red font-semibold">Algo salió mal</p>
          <p className="text-sm text-muted-foreground mt-2">Intenta recargar la página o vuelve al catálogo.</p>
          <button onClick={reset} className="mt-6 btn-primary">Reintentar</button>
        </div>
      </div>
    );
  },
  notFoundComponent: () => <ProductNotFound />,
  component: ProductPage,
});

const featureIcons = [ShieldCheck, Link2, Sparkles, Home, Droplets, CheckCircle2];

function ProductNotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="container-x py-32 text-center flex-1">
        <h1 className="text-3xl font-extrabold text-brand-blue">Producto no encontrado</h1>
        <Link to="/catalogo" className="mt-6 inline-flex btn-primary">Volver al catálogo</Link>
      </main>
      <Footer />
    </div>
  );
}

function ProductPage() {
  const { slug } = Route.useParams();
  const { colores } = Route.useSearch();
  const product = products.find((p) => p.slug === slug);
  if (!product) return <ProductNotFound />;

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const [idx, setIdx] = useState(0);
  const [auto, setAuto] = useState(true);
  const hasPalette = product.slug.startsWith("vinilo") && !!product.colorRefs && product.colorRefs.length > 0;
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    if (colores === 1 && hasPalette) setPaletteOpen(true);
  }, [colores, hasPalette]);

  useEffect(() => {
    if (!auto || images.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 4500);
    return () => clearInterval(t);
  }, [auto, images.length]);

  const go = (d: number) => {
    setAuto(false);
    setIdx((i) => (i + d + images.length) % images.length);
  };

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />


      {/* Breadcrumb */}
      <div className="bg-brand-gray-soft border-b border-border">
        <div className="container-x py-3 text-xs text-muted-foreground flex items-center gap-2">
          <Link to="/" className="hover:text-brand-red">Inicio</Link>
          <span>/</span>
          <Link to="/catalogo" className="hover:text-brand-red">Catálogo</Link>
          <span>/</span>
          <span className="text-brand-blue font-semibold truncate">{product.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-10 md:py-16">
        <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Gallery */}
          <div>
            <div
              onMouseEnter={() => setAuto(false)}
              onMouseLeave={() => setAuto(true)}
              className="relative aspect-[4/5] md:aspect-[4/5] rounded-3xl overflow-hidden shadow-card-hover bg-gradient-to-br from-brand-blue-soft to-white"
            >
              {images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${product.name} - vista ${i + 1}`}
                  className={`absolute inset-0 size-full ${product.gallery ? "object-cover" : "object-contain p-10"} transition-all duration-700 ease-out ${
                    i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}

              {/* Top badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="chip !bg-brand-blue !text-white !border-brand-blue/0">{product.category}</span>
                {product.highlight && (
                  <span className="chip !bg-brand-red !text-white !border-brand-red/0">{product.highlight}</span>
                )}
              </div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => go(-1)}
                    aria-label="Anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-white/90 hover:bg-white shadow-card grid place-items-center text-brand-blue transition-all hover:scale-110"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-white/90 hover:bg-white shadow-card grid place-items-center text-brand-blue transition-all hover:scale-110"
                  >
                    <ChevronRight className="size-5" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-3 py-2 rounded-full bg-black/45 backdrop-blur">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Imagen ${i + 1}`}
                        onClick={() => { setAuto(false); setIdx(i); }}
                        className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbs */}
            {images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => { setAuto(false); setIdx(i); }}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      i === idx ? "border-brand-red shadow-card-hover scale-[1.02]" : "border-border hover:border-brand-blue/40"
                    }`}
                  >
                    <img src={src} alt="" className={`size-full ${product.gallery ? "object-cover" : "object-contain p-2"}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span className="chip self-start">{product.category}</span>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-brand-blue leading-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.short}</p>

            {/* Uso & presentaciones */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border p-4 bg-white">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Uso recomendado</div>
                <div className="mt-1 font-semibold text-brand-blue">{product.uso.join(" · ")}</div>
              </div>
              <div className="rounded-xl border border-border p-4 bg-white">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Presentaciones</div>
                <div className="mt-1 font-semibold text-brand-blue">{product.presentaciones.join(" · ")}</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              {hasPalette && (
                <button
                  type="button"
                  onClick={() => setPaletteOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-blue text-white font-semibold hover:bg-brand-blue-deep transition-colors"
                >
                  <Palette className="size-5" /> Ver colores disponibles
                </button>
              )}
              <a href={whatsappForProduct(product.name)} target="_blank" rel="noopener" className="btn-whatsapp">
                <MessageCircle className="size-5" /> Cotizar por WhatsApp
              </a>
              <Link to="/catalogo" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-brand-blue font-semibold hover:bg-brand-gray-soft transition-colors">
                <ArrowLeft className="size-4" /> Volver al catálogo
              </Link>
            </div>


            {/* Specs */}
            {product.specs && product.specs.length > 0 && (
              <div className="mt-8 rounded-2xl border border-border bg-white p-5">
                <h2 className="font-display font-bold text-brand-blue">Ficha técnica</h2>
                <dl className="mt-3 divide-y divide-border">
                  {product.specs.map((s) => (
                    <div key={s.label} className="flex justify-between py-2.5 text-sm">
                      <dt className="text-muted-foreground">{s.label}</dt>
                      <dd className="font-semibold text-brand-blue text-right">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      {product.features && product.features.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-brand-gray-soft to-white">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto">
              <span className="chip">Beneficios clave</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-blue">
                ¿Por qué elegir este producto?
              </h2>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {product.features.map((f, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                return (
                  <div key={f.title} className="bg-white rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all">
                    <div className="size-12 rounded-xl bg-brand-blue-soft text-brand-blue grid place-items-center">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-4 font-bold text-brand-blue">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA banner */}
      <section className="py-14">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl gradient-brand p-8 md:p-12 text-white">
            <div className="relative max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-extrabold">
                ¿Lo necesitas para tu obra? Cotiza ahora <span className="text-brand-red">{product.name.split("—")[0].trim()}</span>
              </h3>
              <p className="mt-2 text-white/85">Recibe asesoría técnica y precios mayoristas directamente con un asesor.</p>
              <a href={whatsappForProduct(product.name)} target="_blank" rel="noopener" className="btn-whatsapp mt-6">
                <MessageCircle className="size-5" /> Hablar con un asesor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="pb-20">
          <div className="container-x">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-blue">Productos relacionados</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
