import { useEffect, useMemo, useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { colors } from "@/lib/colors";
import { WHATSAPP_URL } from "@/lib/products";

import sala from "@/assets/rooms/sala.jpg";
import salaMask from "@/assets/rooms/sala-mask.png";

type Product = "Pinturas" | "Estucos";

type RGB = { r: number; g: number; b: number };

const clamp = (v: number, min = 0, max = 255) => Math.max(min, Math.min(max, v));

function hexToRgb(hex: string): RGB {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function renderPaintedWalls(photoSrc: string, maskSrc: string, color: string) {
  const [photo, mask] = await Promise.all([loadImage(photoSrc), loadImage(maskSrc)]);
  const width = photo.naturalWidth;
  const height = photo.naturalHeight;
  const canvas = document.createElement("canvas");
  const maskCanvas = document.createElement("canvas");
  canvas.width = maskCanvas.width = width;
  canvas.height = maskCanvas.height = height;

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
  if (!ctx || !maskCtx) return null;

  ctx.drawImage(photo, 0, 0, width, height);
  maskCtx.drawImage(mask, 0, 0, width, height);

  const imageData = ctx.getImageData(0, 0, width, height);
  const maskData = maskCtx.getImageData(0, 0, width, height).data;
  const data = imageData.data;
  const target = hexToRgb(color);

  for (let i = 0; i < data.length; i += 4) {
    const maskAlpha = maskData[i + 3] / 255;
    if (maskAlpha < 0.08) {
      data[i + 3] = 0;
      continue;
    }

    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    const shade = 0.6 + (clamp((luminance - 0.48) * 1.12 + 0.52, 0, 1)) * 0.62;
    const highlight = Math.max(0, luminance - 0.78) * 0.3;

    const paintR = clamp(target.r * shade + 255 * highlight);
    const paintG = clamp(target.g * shade + 255 * highlight);
    const paintB = clamp(target.b * shade + 255 * highlight);

    const strength = 0.86;
    data[i] = clamp(r * (1 - strength) + paintR * strength);
    data[i + 1] = clamp(g * (1 - strength) + paintG * strength);
    data[i + 2] = clamp(b * (1 - strength) + paintB * strength);
    data[i + 3] = Math.round(255 * maskAlpha);
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL("image/webp", 0.92);
}

function hexLightness(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function ColorVisualizer() {
  const [product, setProduct] = useState<Product>("Pinturas");
  const [colorIdx, setColorIdx] = useState(6); // Azul Mediterráneo as default
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [painted, setPainted] = useState<string | null>(null);

  const selected = colors[colorIdx];

  useEffect(() => {
    let cancelled = false;
    setPainted(null);
    renderPaintedWalls(sala, salaMask, selected.hex).then((url) => {
      if (!cancelled) setPainted(url);
    });
    return () => {
      cancelled = true;
    };
  }, [selected.hex]);

  const tooltipColor = hoverIdx !== null ? colors[hoverIdx] : null;

  const ctaHref = useMemo(
    () =>
      `${WHATSAPP_URL}&text=${encodeURIComponent(
        `Hola TECNI-PEGA, me interesa ${product === "Pinturas" ? "la pintura" : "el estuco"} en color ${selected.name} (${selected.ref}).`,
      )}`,
    [product, selected],
  );

  return (
    <section
      id="visualizador"
      className="relative py-20 md:py-24 overflow-hidden bg-[radial-gradient(900px_400px_at_50%_-10%,hsl(var(--brand-blue)/0.06),transparent_60%),linear-gradient(180deg,#FBF8F2_0%,#F7F3EA_100%)]"
    >
      <div className="container-x">
        {/* Header centrado */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-red">
            <Sparkles className="size-3" /> Visualizador en vivo
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-brand-blue">
            Previsualiza el color <span className="block md:inline">en tu pared</span>
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Elige una pintura o un estuco y el acabado al instante sobre la pared. El color
            se aplica solo al muro, igual que en una pintada real.
          </p>

          {/* Segmented control */}
          <div className="mt-6 inline-flex p-1 rounded-full bg-white border border-border shadow-card">
            {(["Pinturas", "Estucos"] as Product[]).map((p) => (
              <button
                key={p}
                onClick={() => setProduct(p)}
                className={`px-6 md:px-8 py-2 text-sm font-semibold rounded-full transition-all ${
                  product === p
                    ? "bg-brand-blue text-white shadow-[0_6px_16px_-8px_hsl(var(--brand-blue)/0.7)]"
                    : "text-brand-blue/70 hover:text-brand-blue"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Layout principal */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Preview */}
          <div className="relative">
            <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-[0_30px_60px_-30px_hsl(var(--brand-blue)/0.45)] border border-border bg-neutral-100">
              <img
                src={sala}
                alt="Ambiente sala"
                className="absolute inset-0 size-full object-cover"
                width={1280}
                height={1024}
                loading="lazy"
              />
              {painted && (
                <img
                  src={painted}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 size-full object-cover pointer-events-none transition-opacity duration-300"
                />
              )}
            </div>

            {/* Floating product chip */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 bg-white rounded-2xl border border-border shadow-card px-4 py-2.5 flex items-center gap-3 min-w-[230px]">
              <div
                className="size-9 rounded-lg border border-border shrink-0"
                style={{ background: selected.hex }}
              />
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue/60">
                  TECNI-COLOR
                </div>
                <div className="text-sm font-bold text-brand-blue truncate">
                  {selected.name}
                </div>
              </div>
            </div>
          </div>

          {/* Color grid */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue/70">
                {colors.length} tonos disponibles
              </div>
              <div className="text-[11px] font-mono text-muted-foreground">
                Ref. {selected.ref}
              </div>
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-7 md:grid-cols-8 gap-2 sm:gap-2.5">
              {colors.map((c, i) => {
                const active = colorIdx === i;
                const light = hexLightness(c.hex) > 0.78;
                return (
                  <button
                    key={c.ref}
                    onClick={() => setColorIdx(i)}
                    onMouseEnter={() => setHoverIdx(i)}
                    onMouseLeave={() => setHoverIdx((v) => (v === i ? null : v))}
                    aria-label={`${c.name} — ${c.ref}`}
                    style={{
                      background: c.hex,
                      animationDelay: `${i * 22}ms`,
                    }}
                    className={`group relative aspect-square rounded-xl transition-all duration-300 ease-out animate-scale-in will-change-transform ${
                      active
                        ? "ring-2 ring-brand-blue ring-offset-2 ring-offset-[#FBF8F2] scale-110 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.35)]"
                        : "ring-1 ring-black/5 hover:scale-[1.15] hover:-translate-y-0.5 hover:shadow-[0_8px_18px_-8px_rgba(0,0,0,0.3)] hover:z-10"
                    } ${light && !active ? "ring-black/10" : ""}`}
                  >
                    {active && (
                      <Check
                        className={`absolute inset-0 m-auto size-4 animate-scale-in ${
                          light ? "text-brand-blue" : "text-white drop-shadow"
                        }`}
                        strokeWidth={3}
                      />
                    )}
                    {/* Tooltip */}
                    <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-md bg-neutral-900 text-white text-[11px] font-semibold px-2.5 py-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-20 shadow-lg">
                      {c.name}
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 size-2 rotate-45 bg-neutral-900" />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* CTA card */}
            <div className="mt-6 rounded-2xl border border-border bg-white p-4 md:p-5 shadow-card">
              <p className="text-sm text-brand-blue">
                ¿Te gusta{" "}
                <span className="font-bold">
                  {(tooltipColor ?? selected).name}
                </span>
                ? Solicítala aquí.
              </p>
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener"
                className="btn-primary w-full mt-3 justify-center"
              >
                Ver {product.toLowerCase()} <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
