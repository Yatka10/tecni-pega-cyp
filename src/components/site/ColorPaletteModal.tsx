import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Check, X } from "lucide-react";
import { colors as colorLib } from "@/lib/colors";
import { WHATSAPP_URL } from "@/lib/products";

type Props = {
  open: boolean;
  onClose: () => void;
  productName: string;
  productImage: string;
  hexes: string[];
};

type Swatch = { hex: string; name: string; ref: string };

function isLight(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 170;
}

function buildSwatches(hexes: string[]): Swatch[] {
  return hexes.map((hex) => {
    const match = colorLib.find((c) => c.hex.toLowerCase() === hex.toLowerCase());
    return match
      ? { hex: match.hex, name: match.name, ref: match.ref }
      : { hex, name: "Color personalizado", ref: hex.toUpperCase() };
  });
}

export function ColorPaletteModal({ open, onClose, productName, productImage, hexes }: Props) {
  const swatches = useMemo(() => buildSwatches(hexes), [hexes]);
  const [selected, setSelected] = useState<Swatch | null>(swatches[0] ?? null);

  useEffect(() => { if (open) setSelected(swatches[0] ?? null); }, [open, swatches]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open, onClose]);

  if (!open) return null;

  const cta = selected
    ? `${WHATSAPP_URL}&text=${encodeURIComponent(`Hola TECNI-PEGA, quiero cotizar ${productName} en color ${selected.name} (${selected.ref}).`)}`
    : WHATSAPP_URL;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-end sm:place-items-center animate-in fade-in-0 duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={`Paleta de colores ${productName}`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full sm:w-[min(960px,95vw)] max-h-[92vh] sm:max-h-[88vh] overflow-hidden rounded-t-3xl sm:rounded-3xl shadow-card-hover flex flex-col animate-in zoom-in-95 fade-in-0 duration-300"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-10 size-9 grid place-items-center rounded-full bg-white/90 hover:bg-white text-brand-blue border border-border shadow-sm transition-colors"
        >
          <X className="size-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-y-auto">
          {/* Preview */}
          <div className="relative bg-brand-gray-soft aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden">
            <img
              src={productImage}
              alt={productName}
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            {selected && (
              <div
                className="absolute inset-0 mix-blend-multiply transition-colors duration-500"
                style={{ backgroundColor: selected.hex, opacity: 0.55 }}
                aria-hidden
              />
            )}
            {selected && (
              <div className="absolute left-4 bottom-4 right-4 bg-white/95 backdrop-blur rounded-xl border border-border p-3 flex items-center gap-3 shadow-card">
                <span
                  className="size-10 rounded-lg border border-border shrink-0"
                  style={{ background: selected.hex }}
                />
                <div className="min-w-0">
                  <div className="font-display font-bold text-brand-blue truncate">{selected.name}</div>
                  <div className="text-[11px] font-mono text-muted-foreground">{selected.ref}</div>
                </div>
              </div>
            )}
          </div>

          {/* Swatches */}
          <div className="p-5 md:p-7 flex flex-col">
            <span className="chip w-fit">Paleta disponible</span>
            <h3 className="mt-3 font-display font-extrabold text-xl md:text-2xl text-brand-blue leading-tight pr-10">
              {productName}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {swatches.length} {swatches.length === 1 ? "color disponible" : "colores disponibles"}. Selecciona uno para previsualizarlo.
            </p>

            <div className="mt-5 grid grid-cols-4 sm:grid-cols-5 gap-3">
              {swatches.map((s) => {
                const isSel = selected?.hex === s.hex;
                return (
                  <button
                    key={s.hex + s.ref}
                    type="button"
                    onClick={() => setSelected(s)}
                    title={`${s.name} · ${s.ref}`}
                    aria-label={`${s.name} ${s.ref}`}
                    aria-pressed={isSel}
                    className={`group relative aspect-square rounded-xl border transition-all duration-200 will-change-transform hover:scale-[1.08] hover:shadow-card ${
                      isSel ? "border-brand-red ring-2 ring-brand-red/30 scale-[1.04]" : "border-border"
                    } ${isLight(s.hex) ? "shadow-inner" : ""}`}
                    style={{ background: s.hex }}
                  >
                    {isSel && (
                      <span className={`absolute inset-0 grid place-items-center ${isLight(s.hex) ? "text-brand-blue" : "text-white"}`}>
                        <Check className="size-4" strokeWidth={3} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <a
              href={cta}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--whatsapp)" }}
            >
              <MessageCircle className="size-4" />
              Cotizar {selected ? `${selected.name}` : "este color"} por WhatsApp
            </a>

            <p className="mt-2 text-[11px] text-muted-foreground text-center">
              Los tonos pueden variar ligeramente por brillo del monitor. Solicita muestra física al asesor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
