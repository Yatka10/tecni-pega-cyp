import { Facebook, Instagram, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/products/logo.png";
import { WHATSAPP_PHONE, COMPANY_EMAIL } from "@/lib/products";

export function Footer() {
  return (
    <footer className="bg-brand-blue-deep text-white">
      <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="TECNI-PEGA" className="h-12 w-auto bg-white rounded-lg p-1" />
            <div>
              <div className="font-display text-2xl font-extrabold tracking-tight">
                TECNI-<span className="text-brand-red">PEGA</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">C&P S.A.S.</div>
            </div>
          </Link>
          <p className="mt-5 text-sm text-white/70 max-w-xs leading-relaxed">
            Fabricamos en Colombia pegantes, pinturas, estucos y revestimientos
            de alto desempeño. Calidad técnica que construye confianza.
          </p>
          <div className="mt-6 flex gap-3">
            <a aria-label="Facebook" href="#" className="size-10 grid place-items-center rounded-full bg-white/10 hover:bg-brand-red transition-colors">
              <Facebook className="size-4" />
            </a>
            <a aria-label="Instagram" href="#" className="size-10 grid place-items-center rounded-full bg-white/10 hover:bg-brand-red transition-colors">
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Catálogo</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {["Pegantes", "Pinturas", "Estucos", "Boquillas", "Revestimientos"].map((c) => (
              <li key={c}><a href="/catalogo" className="hover:text-brand-red transition-colors">{c}</a></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Empresa</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li><a href="/" className="hover:text-brand-red transition-colors">Inicio</a></li>
            <li><a href="/#categorias" className="hover:text-brand-red transition-colors">Categorías</a></li>
            <li><a href="/#visualizador" className="hover:text-brand-red transition-colors">Visualizador</a></li>
            <li><a href="/#contacto" className="hover:text-brand-red transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contacto</h4>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex gap-3 items-start">
              <span className="size-9 rounded-lg bg-white/10 grid place-items-center shrink-0"><Phone className="size-4 text-brand-red" /></span>
              <div>
                <div className="text-[11px] uppercase tracking-widest text-white/50">Tel / WhatsApp</div>
                <a href="tel:+573153406538" className="font-semibold hover:text-brand-red transition-colors">{WHATSAPP_PHONE}</a>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="size-9 rounded-lg bg-white/10 grid place-items-center shrink-0"><Mail className="size-4 text-brand-red" /></span>
              <div>
                <div className="text-[11px] uppercase tracking-widest text-white/50">Email</div>
                <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold break-all hover:text-brand-red transition-colors">{COMPANY_EMAIL}</a>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="size-9 rounded-lg bg-white/10 grid place-items-center shrink-0"><MapPin className="size-4 text-brand-red" /></span>
              <div>
                <div className="text-[11px] uppercase tracking-widest text-white/50">Sede</div>
                <div className="font-semibold">Barranquilla, Colombia</div>
              </div>
            </li>
          </ul>

          <a
            href="/#contacto"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:gap-3 transition-all"
          >
            Solicitar cotización <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/55 flex flex-wrap items-center justify-between gap-2">
          <span>© 2026 TECNI-PEGA C&amp;P S.A.S. — Todos los derechos reservados.</span>
          <span>Hecho con pasión en Colombia 🇨🇴</span>
        </div>
      </div>
    </footer>
  );
}
