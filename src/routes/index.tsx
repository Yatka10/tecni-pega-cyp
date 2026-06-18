import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen, Palette, Star, Users, Handshake, Package,
  Layers, PaintBucket, Wrench, Droplet, Building2, ArrowRight,
  Phone, Mail, MapPin, Truck, GraduationCap, Tag, Megaphone, CreditCard, BookMarked, Send,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ColorVisualizer } from "@/components/site/ColorVisualizer";
import { ProductCard } from "@/components/site/ProductCard";
import { products, WHATSAPP_URL, WHATSAPP_PHONE, COMPANY_EMAIL } from "@/lib/products";
import heroTexture from "@/assets/hero-texture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TECNI-PEGA C&P S.A.S. — Acabados que hablan por tu obra" },
      { name: "description", content: "Pegantes, pinturas, estucos y revestimientos de alto desempeño fabricados en Colombia. Visualiza colores en tu pared antes de aplicarlos." },
      { property: "og:title", content: "TECNI-PEGA C&P S.A.S. — Acabados que hablan por tu obra" },
      { property: "og:description", content: "Productos para construcción fabricados en Colombia. +25 productos · +500 clientes." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const categories = [
  { name: "Pegantes", subs: "Cerámica · Porcelanato · Especiales", Icon: Layers, accent: "bg-brand-blue" },
  { name: "Pinturas y Esmaltes", subs: "Vinilos T1 y T2 · Anticorrosivos", Icon: PaintBucket, accent: "bg-brand-red", badge: "23 tonos" },
  { name: "Estucos y Masillas", subs: "Acrílicos · Interior · Exterior · Drywall", Icon: Wrench, accent: "bg-brand-blue" },
  { name: "Boquillas y Minerales", subs: "Extra Fina · Cerámica · Pigmentos", Icon: Package, accent: "bg-amber-500" },
  { name: "Aditivos", subs: "Mortero · Cemento", Icon: Droplet, accent: "bg-emerald-600" },
  { name: "Revestimientos", subs: "Fachadas · Impermeabilizante · Texturizado", Icon: Building2, accent: "bg-slate-800", badge: "TECNOFILL" },
];

const stats = [
  { Icon: Package, value: "+25", label: "productos" },
  { Icon: Star, value: "4.5★", label: "calificación" },
  { Icon: Users, value: "+500", label: "clientes satisfechos" },
  { Icon: Handshake, value: "+50", label: "aliados en Colombia" },
];

const aliadosBeneficios = [
  { Icon: Tag, title: "Precios preferenciales", desc: "Tarifas directas de fábrica sin intermediarios." },
  { Icon: GraduationCap, title: "Respaldo y capacitación", desc: "Soporte técnico y formación para tu equipo." },
  { Icon: Megaphone, title: "Material POP", desc: "Apoyo de ventas, displays y muestrarios." },
  { Icon: Truck, title: "Despacho nacional", desc: "Logística a todo el territorio colombiano." },
  { Icon: CreditCard, title: "Línea de crédito", desc: "Cupos comerciales para distribuidores activos." },
  { Icon: BookMarked, title: "Catálogo digital", desc: "Acceso a catálogo exclusivo y novedades." },
];

function Home() {
  const featured = products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 gradient-brand" />
        <img
          src={heroTexture}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover opacity-15 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-deep/30 via-transparent to-brand-red/15" />

        <div className="container-x relative py-20 md:py-28 lg:py-32">
          <span className="chip !bg-white/10 !text-white !border-white/20">
            Fabricantes colombianos desde 2010
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] max-w-4xl">
            Acabados que <span className="text-brand-red">hablan</span> por tu obra
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl">
            Pegantes, pinturas, estucos y revestimientos de alto desempeño
            fabricados en Colombia para cada proyecto.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/catalogo" className="btn-primary">
              <BookOpen className="size-5" /> Ver Catálogo
            </a>
            <a href="#visualizador" className="btn-outline-white">
              <Palette className="size-5" /> Visualizador de Colores
            </a>
          </div>

          <ul className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {stats.map(({ Icon, value, label }) => (
              <li key={label} className="bg-white/10 backdrop-blur border border-white/15 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="size-10 rounded-lg bg-brand-red/90 grid place-items-center shrink-0">
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-extrabold text-xl leading-none">{value}</div>
                  <div className="text-xs text-white/80 mt-0.5">{label}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Diagonal cut */}
        <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
          <path d="M0,60 L1440,0 L1440,60 Z" fill="white" />
        </svg>
      </section>

      {/* VISUALIZADOR */}
      <ColorVisualizer />

      {/* CATEGORÍAS */}
      <section id="categorias" className="py-20">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <span className="chip">Nuestro portafolio</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-blue">
                Categorías de productos
              </h2>
              <p className="mt-3 text-muted-foreground">
                Soluciones especializadas para cada etapa de la obra — desde la base hasta el acabado final.
              </p>
            </div>
            <a href="/catalogo" className="inline-flex items-center gap-1.5 text-brand-red font-semibold hover:gap-2.5 transition-all">
              Ver catálogo completo <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => (
              <a
                key={c.name}
                href="/catalogo"
                className="group bg-white rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover hover:border-brand-red/40 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className={`size-12 rounded-xl grid place-items-center text-white ${c.accent}`}>
                    <c.Icon className="size-6" />
                  </div>
                  {c.badge && (
                    <span className="chip !bg-brand-red/10 !text-brand-red !border-brand-red/20">{c.badge}</span>
                  )}
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-blue">{c.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.subs}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-brand-red transition-colors">
                  Explorar <ArrowRight className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section id="productos" className="py-20 bg-brand-gray-soft">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="chip">Más vendidos</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-blue">Productos destacados</h2>
            </div>
            <a href="/catalogo" className="inline-flex items-center gap-1.5 text-brand-red font-semibold hover:gap-2.5 transition-all">
              Ver los {products.length} productos <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* ALIADOS */}
      <section id="aliados" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-brand opacity-95" />
        <div className="container-x relative text-white">
          <div className="max-w-2xl">
            <span className="chip !bg-white/10 !text-white !border-white/20">Red de distribuidores</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
              Conviértete en distribuidor <span className="text-brand-red">TECNI-PEGA</span>
            </h2>
            <p className="mt-3 text-white/85 text-lg">
              Únete a nuestra red de más de 50 aliados en Colombia.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aliadosBeneficios.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-colors">
                <div className="size-11 rounded-lg bg-brand-red grid place-items-center mb-3">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm text-white/80 mt-1">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hola, quiero ser distribuidor TECNI-PEGA.")}`}
              target="_blank"
              rel="noopener"
              className="btn-primary text-base"
            >
              <Handshake className="size-5" /> Quiero ser distribuidor
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <span className="chip">Contacto</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-blue">
              Cuéntanos sobre tu proyecto
            </h2>
            <p className="mt-3 text-muted-foreground">
              Te asesoramos en la selección del producto y presentación ideal para tu obra.
            </p>

            <ul className="mt-7 space-y-4">
              <li className="flex items-start gap-3">
                <div className="size-10 rounded-lg bg-brand-blue-soft text-brand-blue grid place-items-center shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Teléfono / WhatsApp</div>
                  <a href="tel:+573153406538" className="font-semibold text-brand-blue">{WHATSAPP_PHONE}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="size-10 rounded-lg bg-brand-blue-soft text-brand-blue grid place-items-center shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-brand-blue break-all">{COMPANY_EMAIL}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="size-10 rounded-lg bg-brand-blue-soft text-brand-blue grid place-items-center shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Sede</div>
                  <div className="font-semibold text-brand-blue">Barranquilla, Colombia</div>
                </div>
              </li>
            </ul>
          </div>

          <form
            className="lg:col-span-3 bg-white rounded-2xl border border-border shadow-card p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const text = `Hola TECNI-PEGA, soy ${fd.get("nombre")} de ${fd.get("empresa") || "—"}. Me interesa: ${fd.get("producto")} (cantidad: ${fd.get("cantidad") || "—"}). ${fd.get("mensaje") || ""}`;
              window.open(`${WHATSAPP_URL}&text=${encodeURIComponent(text)}`, "_blank");
            }}
          >
            <Field label="Nombre" name="nombre" required />
            <Field label="Empresa" name="empresa" />
            <div className="md:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Producto de interés</label>
              <select name="producto" required className="mt-1.5 w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30">
                <option value="">Selecciona una categoría</option>
                {categories.map((c) => <option key={c.name}>{c.name}</option>)}
              </select>
            </div>
            <Field label="Cantidad estimada" name="cantidad" placeholder="Ej. 10 cuñetes" />
            <Field label="Ciudad" name="ciudad" />
            <div className="md:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mensaje</label>
              <textarea name="mensaje" rows={4} className="mt-1.5 w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30" placeholder="Cuéntanos sobre tu proyecto" />
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="btn-primary w-full md:w-auto">
                <Send className="size-4" /> Enviar cotización
              </button>
              <p className="text-xs text-muted-foreground mt-2">Te responderemos por WhatsApp para confirmar.</p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Field({ label, name, required, placeholder }: { label: string; name: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="text-brand-red"> *</span>}
      </label>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
      />
    </div>
  );
}
