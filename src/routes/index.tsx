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
import { HeroSlider } from "@/components/site/HeroSlider";
import { products, WHATSAPP_URL, WHATSAPP_PHONE, COMPANY_EMAIL } from "@/lib/products";
import catPegantes from "@/assets/categories/pegantes.jpg";
import catPinturas from "@/assets/categories/pinturas.jpg";
import catEstucos from "@/assets/categories/estucos.jpg";
import catBoquillas from "@/assets/categories/boquillas.jpg";
import catAditivos from "@/assets/categories/aditivos.jpg";
import catRevestimientos from "@/assets/categories/revestimientos.jpg";

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
  { name: "Pegantes", subs: "Cerámica · Porcelanato · Especiales", Icon: Layers, accent: "bg-brand-blue", image: catPegantes, tint: "from-brand-blue/95 via-brand-blue/70 to-brand-blue/10" },
  { name: "Pinturas y Esmaltes", subs: "Vinilos T1 y T2 · Anticorrosivos", Icon: PaintBucket, accent: "bg-brand-red", badge: "23 tonos", image: catPinturas, tint: "from-brand-red/95 via-brand-red/70 to-brand-red/10" },
  { name: "Estucos y Masillas", subs: "Acrílicos · Interior · Exterior · Drywall", Icon: Wrench, accent: "bg-brand-blue", image: catEstucos, tint: "from-brand-blue-deep/95 via-brand-blue/65 to-brand-blue/10" },
  { name: "Boquillas y Minerales", subs: "Extra Fina · Cerámica · Pigmentos", Icon: Package, accent: "bg-amber-500", image: catBoquillas, tint: "from-amber-700/95 via-amber-600/70 to-amber-500/10" },
  { name: "Aditivos", subs: "Mortero · Cemento", Icon: Droplet, accent: "bg-emerald-600", image: catAditivos, tint: "from-emerald-800/95 via-emerald-600/70 to-emerald-500/10" },
  { name: "Revestimientos", subs: "Fachadas · Impermeabilizante · Texturizado", Icon: Building2, accent: "bg-slate-800", badge: "TECNOFILL", image: catRevestimientos, tint: "from-slate-900/95 via-slate-800/70 to-slate-700/10" },
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

      {/* HERO SLIDER */}
      <HeroSlider />

      {/* STATS STRIP */}
      <section className="bg-white border-b border-border">
        <div className="container-x py-8">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ Icon, value, label }) => (
              <li key={label} className="flex items-center gap-3">
                <div className="size-12 rounded-xl bg-brand-blue-soft text-brand-blue grid place-items-center shrink-0">
                  <Icon className="size-6" />
                </div>
                <div className="min-w-0">
                  <div className="font-display font-extrabold text-2xl leading-none text-brand-blue">{value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{label}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
                className="group relative isolate overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 aspect-[4/5] sm:aspect-[5/6] flex flex-col justify-end"
              >
                {/* Imagen de fondo */}
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                {/* Difuminado de color por categoría */}
                <div className={`absolute inset-0 bg-gradient-to-t ${c.tint}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Badge */}
                {c.badge && (
                  <span className="absolute top-4 right-4 z-10 chip !bg-white/95 !text-brand-blue !border-white/40 backdrop-blur shadow-sm">
                    {c.badge}
                  </span>
                )}

                {/* Icono */}
                <div className={`absolute top-4 left-4 z-10 size-12 rounded-xl grid place-items-center text-white ${c.accent} shadow-lg ring-2 ring-white/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <c.Icon className="size-6" />
                </div>

                {/* Contenido */}
                <div className="relative z-10 p-6 text-white">
                  <h3 className="font-display text-2xl font-extrabold leading-tight drop-shadow-md">{c.name}</h3>
                  <p className="mt-1.5 text-sm text-white/85 drop-shadow">{c.subs}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-3 transition-all">
                    Explorar
                    <span className="inline-grid place-items-center size-7 rounded-full bg-white/15 backdrop-blur border border-white/30 group-hover:bg-white group-hover:text-brand-blue transition-colors">
                      <ArrowRight className="size-3.5" />
                    </span>
                  </span>
                </div>
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
