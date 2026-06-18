import { useMemo, useState } from "react";
import {
  Palette,
  Sofa,
  BedDouble,
  UtensilsCrossed,
  Building2,
  Briefcase,
  Share2,
  MessageCircle,
  Eye,
  Sparkles,
} from "lucide-react";
import { colors, colorFamilies } from "@/lib/colors";
import { WHATSAPP_URL } from "@/lib/products";

import sala from "@/assets/rooms/sala.jpg";
import habitacion from "@/assets/rooms/habitacion.jpg";
import cocina from "@/assets/rooms/cocina.jpg";
import fachada from "@/assets/rooms/fachada.jpg";
import oficina from "@/assets/rooms/oficina.jpg";

import salaMask from "@/assets/rooms/sala-mask.png";
import habitacionMask from "@/assets/rooms/habitacion-mask.png";
import cocinaMask from "@/assets/rooms/cocina-mask.png";
import fachadaMask from "@/assets/rooms/fachada-mask.png";
import oficinaMask from "@/assets/rooms/oficina-mask.png";

type RoomKey = "sala" | "habitacion" | "cocina" | "fachada" | "oficina";

const rooms: {
  key: RoomKey;
  label: string;
  img: string;
  mask: string;
  Icon: typeof Sofa;
}[] = [
  { key: "sala", label: "Sala", img: sala, mask: salaMask, Icon: Sofa },
  { key: "habitacion", label: "Habitación", img: habitacion, mask: habitacionMask, Icon: BedDouble },
  { key: "cocina", label: "Cocina", img: cocina, mask: cocinaMask, Icon: UtensilsCrossed },
  { key: "fachada", label: "Fachada", img: fachada, mask: fachadaMask, Icon: Building2 },
  { key: "oficina", label: "Oficina", img: oficina, mask: oficinaMask, Icon: Briefcase },
];

const productOptions = [
  "Pintura Vinílica Tipo 1",
  "Pintura Vinílica Tipo 2",
  "Estuco Acrílico",
  "Grano Fachada",
];

export function ColorVisualizer() {
  const [product, setProduct] = useState(productOptions[0]);
  const [colorIdx, setColorIdx] = useState(0);
  const [room, setRoom] = useState<RoomKey>("sala");
  const [finish, setFinish] = useState<"Mate" | "Semimate">("Mate");
  const [comparing, setComparing] = useState(false);

  const selectedColor = colors[colorIdx];
  const activeRoom = rooms.find((r) => r.key === room)!;

  // Stronger coverage on Mate, lighter on Semimate. Multiply preserves wall shading.
  const overlayOpacity = finish === "Mate" ? 0.95 : 0.82;

  const groupedColors = useMemo(() => {
    return colorFamilies.map((f) => ({
      family: f,
      items: colors.map((c, i) => ({ ...c, i })).filter((c) => c.family === f),
    }));
  }, []);

  return (
    <section
      id="visualizador"
      className="relative py-24 overflow-hidden bg-[radial-gradient(1200px_500px_at_10%_-10%,hsl(var(--brand-blue)/0.08),transparent_60%),radial-gradient(900px_400px_at_100%_0%,hsl(var(--brand-red)/0.06),transparent_60%),linear-gradient(180deg,#fff_0%,hsl(var(--brand-blue-soft)/0.6)_100%)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"
      />

      <div className="container-x">
        <div className="max-w-2xl">
          <span className="chip">
            <Sparkles className="size-3 mr-1" /> Herramienta exclusiva TECNI-COLOR
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-brand-blue tracking-tight">
            Pinta tus muros{" "}
            <span className="text-brand-red">— antes de aplicar la pintura</span>
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Selecciona un producto, un color y un ambiente. Solo se pintan las paredes —
            los muebles, pisos y techos quedan intactos para que veas el resultado real.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Left control panel */}
          <div className="lg:col-span-2 relative rounded-3xl p-[1px] bg-gradient-to-br from-brand-blue/30 via-border to-brand-red/20 shadow-card">
            <div className="rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white p-6 md:p-7">
              {/* Producto */}
              <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue/70">
                Producto
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {productOptions.map((p) => (
                  <button
                    key={p}
                    onClick={() => setProduct(p)}
                    className={`text-sm rounded-xl px-3 py-2.5 border transition-all text-left font-medium ${
                      product === p
                        ? "bg-brand-blue text-white border-brand-blue shadow-[0_8px_24px_-12px_hsl(var(--brand-blue)/0.6)]"
                        : "bg-white border-border hover:border-brand-blue/50 hover:bg-brand-blue-soft/40 text-brand-blue"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              {/* Paleta */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue/70">
                    Paleta de colores
                  </label>
                  <span className="text-[11px] text-muted-foreground">
                    {colors.length} tonos
                  </span>
                </div>
                <div className="mt-3 space-y-4 max-h-80 overflow-y-auto pr-1 -mr-1">
                  {groupedColors.map((g) => (
                    <div key={g.family}>
                      <div className="text-[11px] text-muted-foreground mb-1.5 font-medium">
                        {g.family}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {g.items.map((c) => {
                          const active = colorIdx === c.i;
                          return (
                            <button
                              key={c.ref}
                              onClick={() => setColorIdx(c.i)}
                              title={`${c.name} · ${c.ref}`}
                              aria-label={c.name}
                              className={`relative size-9 rounded-full transition-all hover:scale-110 ${
                                active
                                  ? "ring-2 ring-offset-2 ring-brand-blue scale-110"
                                  : "ring-1 ring-black/5 hover:ring-brand-blue/40 shadow-card"
                              }`}
                              style={{ background: c.hex }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected color card */}
              <div className="mt-6 flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-br from-brand-blue-soft/60 to-white border border-border">
                <div
                  className="size-14 rounded-xl border border-border shrink-0 shadow-card"
                  style={{ background: selectedColor.hex }}
                />
                <div className="min-w-0">
                  <div className="font-display font-bold text-brand-blue truncate">
                    {selectedColor.name}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">
                    Ref. {selectedColor.ref} · {selectedColor.hex.toUpperCase()}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    Familia: {selectedColor.family}
                  </div>
                </div>
              </div>

              {/* Acabado */}
              <div className="mt-5">
                <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue/70">
                  Acabado
                </label>
                <div className="mt-2 inline-flex p-1 bg-brand-gray-soft rounded-xl">
                  {(["Mate", "Semimate"] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFinish(f)}
                      className={`px-4 py-1.5 text-sm rounded-lg font-medium transition-all ${
                        finish === f
                          ? "bg-white text-brand-blue shadow-card"
                          : "text-muted-foreground hover:text-brand-blue"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href={`${WHATSAPP_URL}&text=${encodeURIComponent(
                  `Hola TECNI-PEGA, quiero cotizar ${product} en color ${selectedColor.name} (${selectedColor.ref}), acabado ${finish}.`
                )}`}
                target="_blank"
                rel="noopener"
                className="btn-primary w-full mt-6"
              >
                <MessageCircle className="size-4" /> Cotizar este color
              </a>
            </div>
          </div>

          {/* Right preview */}
          <div className="lg:col-span-3">
            <div className="flex flex-wrap gap-2 mb-3">
              {rooms.map((r) => (
                <button
                  key={r.key}
                  onClick={() => setRoom(r.key)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium border transition-all ${
                    room === r.key
                      ? "bg-brand-blue text-white border-brand-blue shadow-[0_8px_24px_-12px_hsl(var(--brand-blue)/0.6)]"
                      : "bg-white text-brand-blue border-border hover:border-brand-blue/50 hover:bg-brand-blue-soft/40"
                  }`}
                >
                  <r.Icon className="size-4" />
                  {r.label}
                </button>
              ))}
            </div>

            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_30px_60px_-30px_hsl(var(--brand-blue)/0.45)] border border-border bg-black group">
              {/* Base photo */}
              <img
                key={activeRoom.key}
                src={activeRoom.img}
                alt={`Ambiente ${activeRoom.label}`}
                className="absolute inset-0 size-full object-cover"
                width={1280}
                height={832}
                loading="lazy"
              />

              {/* Wall-only color overlay (masked) */}
              {!comparing && (
                <>
                  {/* Multiply layer keeps shadows */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-multiply transition-[background-color,opacity] duration-500 ease-out"
                    style={{
                      backgroundColor: selectedColor.hex,
                      opacity: overlayOpacity,
                      WebkitMaskImage: `url(${activeRoom.mask})`,
                      maskImage: `url(${activeRoom.mask})`,
                      WebkitMaskSize: "100% 100%",
                      maskSize: "100% 100%",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      ...({ WebkitMaskMode: "luminance", maskMode: "luminance" } as React.CSSProperties),
                    }}
                  />
                  {/* Tiny tint layer to bring color closer to selected hex on very dark walls */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-color transition-[background-color] duration-500 ease-out"
                    style={{
                      backgroundColor: selectedColor.hex,
                      opacity: 0.7,
                      WebkitMaskImage: `url(${activeRoom.mask})`,
                      maskImage: `url(${activeRoom.mask})`,
                      WebkitMaskSize: "100% 100%",
                      maskSize: "100% 100%",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      ...({ WebkitMaskMode: "luminance", maskMode: "luminance" } as React.CSSProperties),
                    }}
                  />

                </>
              )}

              {/* Top bar */}
              <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
                <div className="bg-white/95 backdrop-blur rounded-lg px-3 py-1.5 text-[11px] text-brand-blue font-medium shadow-card max-w-[70%]">
                  Vista previa real — solo se pintan las paredes.
                </div>
                <div className="flex gap-2">
                  <button
                    onMouseDown={() => setComparing(true)}
                    onMouseUp={() => setComparing(false)}
                    onMouseLeave={() => setComparing(false)}
                    onTouchStart={() => setComparing(true)}
                    onTouchEnd={() => setComparing(false)}
                    className="bg-white/95 hover:bg-white text-brand-blue rounded-lg px-3 py-1.5 text-[11px] font-medium shadow-card inline-flex items-center gap-1.5"
                    aria-label="Mantén presionado para comparar"
                  >
                    <Eye className="size-3.5" />
                    {comparing ? "Antes" : "Comparar"}
                  </button>
                  <button
                    className="bg-brand-blue/95 hover:bg-brand-blue text-white rounded-lg px-3 py-1.5 text-[11px] font-medium shadow-card inline-flex items-center gap-1.5"
                    onClick={() => {
                      if (typeof navigator !== "undefined" && navigator.share) {
                        navigator
                          .share({
                            title: "TECNI-PEGA Visualizador",
                            text: `Mira este color: ${selectedColor.name} en ${activeRoom.label}`,
                            url:
                              typeof window !== "undefined" ? window.location.href : "",
                          })
                          .catch(() => {});
                      } else if (typeof navigator !== "undefined") {
                        navigator.clipboard?.writeText(window.location.href);
                      }
                    }}
                  >
                    <Share2 className="size-3.5" /> Compartir
                  </button>
                </div>
              </div>

              {/* Bottom info chip */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                <div className="bg-white/95 backdrop-blur rounded-xl px-3 py-2 shadow-card flex items-center gap-2.5">
                  <div
                    className="size-7 rounded-md border border-border shrink-0"
                    style={{ background: selectedColor.hex }}
                  />
                  <div className="leading-tight">
                    <div className="text-xs font-semibold text-brand-blue">
                      {selectedColor.name}
                      <span className="ml-1.5 text-[10px] font-mono text-muted-foreground">
                        {selectedColor.ref}
                      </span>
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      {product} · {finish} · {activeRoom.label}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 bg-black/40 backdrop-blur text-white rounded-lg px-2.5 py-1.5 text-[10px] font-medium">
                  <Palette className="size-3" />
                  Render aproximado
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              * El color final puede variar según iluminación, textura del muro y
              preparación de la superficie. Solicite muestra física antes de la compra
              definitiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
