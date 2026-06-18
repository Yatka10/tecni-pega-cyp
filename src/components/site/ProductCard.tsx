import { MessageCircle, ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { whatsappForProduct } from "@/lib/products";

const categoryAccent: Record<string, string> = {
  Pegantes: "bg-brand-blue text-white",
  Pinturas: "bg-brand-red text-white",
  Estucos: "bg-brand-blue text-white",
  Boquillas: "bg-amber-500 text-white",
  Aditivos: "bg-emerald-600 text-white",
  Revestimientos: "bg-slate-800 text-white",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:border-brand-red/40 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3] bg-brand-gray-soft overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="size-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
        <span className={`absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryAccent[product.category]}`}>
          {product.category}
        </span>
        {product.highlight && (
          <span className="absolute top-3 right-3 chip !bg-brand-red/10 !text-brand-red !border-brand-red/20">
            {product.highlight}
          </span>
        )}
      </div>

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
          <a
            href="/#visualizador"
            className="inline-flex items-center justify-center gap-1.5 flex-1 rounded-lg px-3 py-2 text-sm font-semibold bg-brand-blue text-white hover:bg-brand-blue-deep transition-colors"
          >
            Ver detalle <ArrowRight className="size-3.5" />
          </a>
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
    </article>
  );
}
