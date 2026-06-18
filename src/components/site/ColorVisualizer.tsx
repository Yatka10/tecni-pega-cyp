import { useMemo, useState } from "react";
import { Palette, Sofa, BedDouble, UtensilsCrossed, Building2, Briefcase, Share2, MessageCircle } from "lucide-react";
import { colors, colorFamilies } from "@/lib/colors";
import { WHATSAPP_URL } from "@/lib/products";

import sala from "@/assets/rooms/sala.jpg";
import habitacion from "@/assets/rooms/habitacion.jpg";
import cocina from "@/assets/rooms/cocina.jpg";
import fachada from "@/assets/rooms/fachada.jpg";
import oficina from "@/assets/rooms/oficina.jpg";

type RoomKey = "sala" | "habitacion" | "cocina" | "fachada" | "oficina";

const rooms: { key: RoomKey; label: string; img: string; Icon: typeof Sofa }[] = [
  { key: "sala", label: "Sala", img: sala, Icon: Sofa },
  { key: "habitacion", label: "Habitación", img: habitacion, Icon: BedDouble },
  { key: "cocina", label: "Cocina", img: cocina, Icon: UtensilsCrossed },
  { key: "fachada", label: "Fachada", img: fachada, Icon: Building2 },
  { key: "oficina", label: "Oficina", img: oficina, Icon: Briefcase },
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

  const selectedColor = colors[colorIdx];
  const activeRoom = rooms.find((r) => r.key === room)!;

  const overlayOpacity = finish === "Mate" ? 0.92 : 0.82;

  const groupedColors = useMemo(() => {
    return colorFamilies.map((f) => ({
      family: f,
      items: colors.map((c, i) => ({ ...c, i })).filter((c) => c.family === f),
    }));
  }, []);

  return (
    <section id="visualizador" className="py-20 bg-gradient-to-b from-white to-brand-blue-soft/50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="chip"><Palette className="size-3 mr-1" /> Herramienta exclusiva</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-brand-blue">
            Visualiza el color en tu pared <span className="text-brand-red">— antes de aplicarlo</span>
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Selecciona un producto y un color, y mira cómo queda en diferentes ambientes reales.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {/* Left panel */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-card p-6 md:p-7 border border-border">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Producto</label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {productOptions.map((p) => (
                <button
                  key={p}
                  onClick={() => setProduct(p)}
                  className={`text-sm rounded-lg px-3 py-2 border transition-all text-left ${
                    product === p
                      ? "bg-brand-blue text-white border-brand-blue"
                      : "bg-white border-border hover:border-brand-blue/50 text-brand-blue"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Paleta de colores</label>
              <div className="mt-3 space-y-4 max-h-72 overflow-y-auto pr-1">
                {groupedColors.map((g) => (
                  <div key={g.family}>
                    <div className="text-xs text-muted-foreground mb-1.5">{g.family}</div>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((c) => (
                        <button
                          key={c.ref}
                          onClick={() => setColorIdx(c.i)}
                          title={`${c.name} · ${c.ref}`}
                          aria-label={c.name}
                          className={`size-9 rounded-full border-2 transition-transform hover:scale-110 ${
                            colorIdx === c.i ? "border-brand-blue scale-110 ring-2 ring-brand-blue/30" : "border-white shadow-card"
                          }`}
                          style={{ background: c.hex }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div
                className="size-12 rounded-xl border border-border shrink-0"
                style={{ background: selectedColor.hex }}
              />
              <div className="min-w-0">
                <div className="font-display font-bold text-brand-blue truncate">{selectedColor.name}</div>
                <div className="text-xs font-mono text-muted-foreground">
                  Ref. {selectedColor.ref} · {selectedColor.hex.toUpperCase()}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Acabado</label>
              <div className="mt-2 inline-flex p-1 bg-brand-gray-soft rounded-lg">
                {(["Mate", "Semimate"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFinish(f)}
                    className={`px-4 py-1.5 text-sm rounded-md font-medium transition-all ${
                      finish === f ? "bg-white text-brand-blue shadow-card" : "text-muted-foreground"
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

          {/* Right panel */}
          <div className="lg:col-span-3">
            <div className="flex flex-wrap gap-2 mb-3">
              {rooms.map((r) => (
                <button
                  key={r.key}
                  onClick={() => setRoom(r.key)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium border transition-all ${
                    room === r.key
                      ? "bg-brand-blue text-white border-brand-blue shadow-card"
                      : "bg-white text-brand-blue border-border hover:border-brand-blue/50"
                  }`}
                >
                  <r.Icon className="size-4" />
                  {r.label}
                </button>
              ))}
            </div>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-card border border-border bg-black">
              <img
                key={activeRoom.key}
                src={activeRoom.img}
                alt={`Ambiente ${activeRoom.label}`}
                className="absolute inset-0 size-full object-cover"
                width={1280}
                height={832}
                loading="lazy"
              />
              {/* Color overlay using multiply on bright walls */}
              <div
                className="absolute inset-0 transition-[background-color,opacity] duration-500 ease-out pointer-events-none mix-blend-multiply"
                style={{ backgroundColor: selectedColor.hex, opacity: overlayOpacity }}
              />
              {/* Re-light layer to keep shadows readable */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/0 via-black/0 to-black/10" />

              <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
                <div className="bg-white/95 backdrop-blur rounded-lg px-3 py-1.5 text-xs text-brand-blue font-medium shadow-card">
                  Vista previa — los colores pueden variar según iluminación y superficie.
                </div>
                <button
                  className="bg-brand-blue/90 hover:bg-brand-blue backdrop-blur text-white rounded-lg px-3 py-1.5 text-xs font-medium shadow-card inline-flex items-center gap-1.5"
                  onClick={() => {
                    if (typeof navigator !== "undefined" && navigator.share) {
                      navigator.share({
                        title: "TECNI-PEGA Visualizador",
                        text: `Mira este color: ${selectedColor.name} en ${activeRoom.label}`,
                        url: typeof window !== "undefined" ? window.location.href : "",
                      }).catch(() => {});
                    } else if (typeof navigator !== "undefined") {
                      navigator.clipboard?.writeText(window.location.href);
                    }
                  }}
                >
                  <Share2 className="size-3.5" /> Compartir
                </button>
              </div>

              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur rounded-lg px-3 py-2 shadow-card flex items-center gap-2.5">
                <div className="size-6 rounded-md border border-border" style={{ background: selectedColor.hex }} />
                <div className="leading-tight">
                  <div className="text-xs font-semibold text-brand-blue">{selectedColor.name}</div>
                  <div className="text-[10px] font-mono text-muted-foreground">{product} · {finish}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
