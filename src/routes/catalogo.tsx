import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Filter, X } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ProductCard } from "@/components/site/ProductCard";
import { products, type Category } from "@/lib/products";

type Search = { cat?: Category };

export const Route = createFileRoute("/catalogo")({
  validateSearch: (s: Record<string, unknown>): Search => {
    const allowed: Category[] = ["Pegantes", "Pinturas", "Estucos", "Boquillas", "Aditivos", "Revestimientos"];
    const cat = typeof s.cat === "string" && (allowed as string[]).includes(s.cat) ? (s.cat as Category) : undefined;
    return { cat };
  },
  head: () => ({
    meta: [
      { title: "Catálogo de productos — TECNI-PEGA C&P S.A.S." },
      { name: "description", content: "Explora todos nuestros pegantes, pinturas, estucos, boquillas, aditivos y revestimientos. Filtra por categoría, uso y presentación." },
      { property: "og:title", content: "Catálogo — TECNI-PEGA" },
      { property: "og:description", content: "+25 productos para construcción fabricados en Colombia." },
      { property: "og:url", content: "/catalogo" },
    ],
    links: [{ rel: "canonical", href: "/catalogo" }],
  }),
  component: Catalogo,
});

// Only show categories that actually have products
const allCategories: Category[] = Array.from(new Set(products.map((p) => p.category))) as Category[];
const allPresentaciones = Array.from(new Set(products.flatMap((p) => p.presentaciones)));

function Catalogo() {
  const { cat: initialCat } = Route.useSearch();
  const [cats, setCats] = useState<Set<Category>>(new Set(initialCat ? [initialCat] : []));
  const [uso, setUso] = useState<"all" | "Interior" | "Exterior">("all");
  const [pres, setPres] = useState<Set<string>>(new Set());
  const [conColor, setConColor] = useState<"all" | "yes" | "no">("all");
  const [drawer, setDrawer] = useState(false);


  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (cats.size && !cats.has(p.category)) return false;
      if (uso !== "all" && !p.uso.includes(uso)) return false;
      if (pres.size && !p.presentaciones.some((pp) => pres.has(pp))) return false;
      if (conColor === "yes" && !p.colorRefs) return false;
      if (conColor === "no" && p.colorRefs) return false;
      return true;
    });
  }, [cats, uso, pres, conColor]);

  const toggle = <T,>(set: Set<T>, value: T, setter: (s: Set<T>) => void) => {
    const next = new Set(set);
    next.has(value) ? next.delete(value) : next.add(value);
    setter(next);
  };

  const clearAll = () => {
    setCats(new Set());
    setUso("all");
    setPres(new Set());
    setConColor("all");
  };

  const Filters = (
    <div className="space-y-7">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Categoría</h3>
        <div className="space-y-2">
          {allCategories.map((c) => (
            <label key={c} className="flex items-center gap-2 text-sm text-brand-blue cursor-pointer">
              <input
                type="checkbox"
                checked={cats.has(c)}
                onChange={() => toggle(cats, c, setCats)}
                className="size-4 accent-[color:var(--brand-red)]"
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Uso</h3>
        <div className="inline-flex p-1 bg-brand-gray-soft rounded-lg w-full">
          {(["all", "Interior", "Exterior"] as const).map((u) => (
            <button
              key={u}
              onClick={() => setUso(u)}
              className={`flex-1 px-3 py-1.5 text-sm rounded-md font-medium transition-colors ${uso === u ? "bg-white text-brand-blue shadow-card" : "text-muted-foreground"}`}
            >
              {u === "all" ? "Todos" : u}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Presentación</h3>
        <div className="flex flex-wrap gap-1.5">
          {allPresentaciones.map((p) => (
            <button
              key={p}
              onClick={() => toggle(pres, p, setPres)}
              className={`text-xs font-mono px-2.5 py-1 rounded-md border transition-colors ${
                pres.has(p)
                  ? "bg-brand-blue text-white border-brand-blue"
                  : "bg-white text-brand-blue border-border hover:border-brand-blue/50"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Colores disponibles</h3>
        <div className="inline-flex p-1 bg-brand-gray-soft rounded-lg w-full">
          {([["all", "Todos"], ["yes", "Sí"], ["no", "No"]] as const).map(([v, l]) => (
            <button
              key={v}
              onClick={() => setConColor(v)}
              className={`flex-1 px-3 py-1.5 text-sm rounded-md font-medium transition-colors ${conColor === v ? "bg-white text-brand-blue shadow-card" : "text-muted-foreground"}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <button onClick={clearAll} className="text-sm text-brand-red font-semibold hover:underline">
        Limpiar filtros
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <header className="gradient-brand text-white py-14">
        <div className="container-x">
          <span className="chip !bg-white/10 !text-white !border-white/20">Catálogo</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold">Todos nuestros productos</h1>
          <p className="mt-3 text-white/85 max-w-2xl">
            Filtra por categoría, uso o presentación para encontrar la solución técnica ideal para tu obra.
          </p>
        </div>
      </header>

      <main className="container-x py-12 grid lg:grid-cols-[260px_1fr] gap-10">
        <aside className="hidden lg:block sticky top-32 self-start">
          <div className="bg-white rounded-2xl border border-border shadow-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-brand-blue">Filtros</h2>
              <Filter className="size-4 text-muted-foreground" />
            </div>
            {Filters}
          </div>
        </aside>

        <section>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              {filtered.length} producto{filtered.length !== 1 && "s"}
            </p>
            <button onClick={() => setDrawer(true)} className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border text-sm font-medium text-brand-blue">
              <Filter className="size-4" /> Filtros
            </button>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No encontramos productos con esos filtros. <button onClick={clearAll} className="text-brand-red font-semibold">Limpiar</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          )}
        </section>
      </main>

      {drawer && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDrawer(false)} />
          <aside className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-bold text-brand-blue">Filtros</h2>
              <button onClick={() => setDrawer(false)} aria-label="Cerrar"><X className="size-5" /></button>
            </div>
            {Filters}
          </aside>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
