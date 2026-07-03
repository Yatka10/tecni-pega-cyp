import { MessageCircle, ArrowRight, Palette } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/lib/products";
import { whatsappForProduct } from "@/lib/products";
import { ColorPaletteModal } from "@/components/site/ColorPaletteModal";

const categoryAccent: Record<string, string> = {
  Pegantes: "bg-brand-blue text-white",
  Pinturas: "bg-brand-red text-white",
  Estucos: "bg-brand-blue text-white",
  Boquillas: "bg-amber-500 text-white",
  Aditivos: "bg-emerald-600 text-white",
  Revestimientos: "bg-slate-800 text-white",
};

export function ProductCard({ product }: { product: Product }) {
  const images = product.cardGallery && product.cardGallery.length > 0
    ? product.cardGallery
    : product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image];
  const useCover = !!(product.cardGallery || product.gallery);
  const hasSlider = images.length > 1;
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);
  const isVinyl = product.slug.startsWith("vinilo");
  const hasPalette = isVinyl && !!product.colorRefs && product.colorRefs.length > 0;

  useEffect(() => {
    if (!hasSlider || paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 3200);
    return () => clearInterval(t);
  }, [hasSlider, paused, images.length]);

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="group bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:border-brand-red/40 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <Link
        to="/producto/$slug"
        params={{ slug: product.slug }}
        onClick={hasPalette ? (e) => { e.preventDefault(); setPaletteOpen(true); } : undefined}
        className="relative block aspect-[4/3] bg-gradient-to-br from-brand-gray-soft to-white overflow-hidden"
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={product.name}
            loading="lazy"
            className={`absolute inset-0 size-full ${useCover ? "object-cover" : "object-contain p-6"} transition-all duration-700 ease-out ${
              i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } group-hover:scale-[1.04]`}
          />
        ))}

        <span className={`absolute top-3 left-3 z-10 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryAccent[product.category]}`}>
          {product.category}
        </span>
        {product.highlight && (
          <span className="absolute top-3 right-3 z-10 chip !bg-white/90 !text-brand-red !border-brand-red/20 backdrop-blur">
            {product.highlight}
          </span>
        )}

        {hasSlider && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/45 backdrop-blur">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Imagen ${i + 1}`}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIdx(i); }}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`}
              />
            ))}
          </div>
        )}
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-brand-blue text-base leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.short}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.presentaciones.map((p) => (
            <span key={p} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-brand-gray-soft text-brand-blue border border-border">
              {p}
            </span>
          ))}
        </div>

        {product.colorRefs && (
          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-[11px] text-muted-foreground">Colores:</span>
            <div className="flex -space-x-1">
              {product.colorRefs.slice(0, 6).map((c, i) => (
                <span key={i} className="size-5 rounded-full border-2 border-white shadow-sm" style={{ background: c }} />
              ))}
              {product.colorRefs.length > 6 && (
                <span className="ml-2 text-[11px] text-muted-foreground">+{product.colorRefs.length - 6}</span>
              )}
            </div>
          </div>
        )}

        <div className="mt-auto pt-5 flex gap-2">
          {hasPalette ? (
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="inline-flex items-center justify-center gap-1.5 flex-1 rounded-lg px-3 py-2 text-sm font-semibold bg-brand-blue text-white hover:bg-brand-blue-deep transition-colors"
            >
              <Palette className="size-3.5" /> Ver colores
            </button>
          ) : (
            <Link
              to="/producto/$slug"
              params={{ slug: product.slug }}
              className="inline-flex items-center justify-center gap-1.5 flex-1 rounded-lg px-3 py-2 text-sm font-semibold bg-brand-blue text-white hover:bg-brand-blue-deep transition-colors"
            >
              Ver detalle <ArrowRight className="size-3.5" />
            </Link>
          )}
          <a
            href={whatsappForProduct(product.name)}
            target="_blank"
            rel="noopener"
            aria-label={`Cotizar ${product.name} por WhatsApp`}
            className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold text-white"
            style={{ background: "var(--whatsapp)" }}
          >
            <MessageCircle className="size-4" />
          </a>
        </div>
      </div>

      {hasPalette && (
        <ColorPaletteModal
          open={paletteOpen}
          onClose={() => setPaletteOpen(false)}
          productName={product.name}
          productImage={product.image}
          hexes={product.colorRefs!}
        />
      )}
    </article>
  );
}
