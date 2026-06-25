import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { WHATSAPP_PHONE, COMPANY_EMAIL } from "@/lib/products";

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white mt-20">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-display text-2xl font-extrabold tracking-tight">
            TECNI-<span className="text-brand-red">PEGA</span>
          </div>
          <p className="mt-3 text-sm text-white/75 max-w-xs">
            Calidad y resistencia que construyen confianza. Fabricamos productos para
            construcción en Colombia desde hace más de una década.
          </p>
          <div className="mt-5 flex gap-3">
            <a aria-label="Facebook" href="#" className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-brand-red transition-colors">
              <Facebook className="size-4" />
            </a>
            <a aria-label="Instagram" href="#" className="size-9 grid place-items-center rounded-full bg-white/10 hover:bg-brand-red transition-colors">
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Catálogo</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {["Pegantes", "Pinturas y Esmaltes", "Estucos y Masillas", "Boquillas y Minerales", "Aditivos", "Revestimientos"].map((c) => (
              <li key={c}><a href="/catalogo" className="hover:text-white">{c}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Empresa</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><a href="/" className="hover:text-white">Inicio</a></li>
            <li><a href="/#categorias" className="hover:text-white">Categorías</a></li>
            <li><a href="/#aliados" className="hover:text-white">Aliados</a></li>
            <li><a href="/#contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-2 items-start"><Phone className="size-4 mt-0.5 shrink-0 text-brand-red" /> {WHATSAPP_PHONE}</li>
            <li className="flex gap-2 items-start"><Mail className="size-4 mt-0.5 shrink-0 text-brand-red" /> <span className="break-all">{COMPANY_EMAIL}</span></li>
            <li className="flex gap-2 items-start"><MapPin className="size-4 mt-0.5 shrink-0 text-brand-red" /> Barranquilla, Colombia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/60 flex flex-wrap items-center justify-between gap-2">
          <span>© 2026 TECNI-PEGA C&amp;P S.A.S. — Todos los derechos reservados.</span>
          <span>Hecho con pasión en Colombia 🇨🇴</span>
        </div>
      </div>
    </footer>
  );
}
