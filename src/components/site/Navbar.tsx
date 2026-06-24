import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone, Mail } from "lucide-react";
import logo from "@/assets/products/logo.png";
import { WHATSAPP_URL, WHATSAPP_PHONE, COMPANY_EMAIL } from "@/lib/products";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-brand-red text-white text-xs">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-1.5">
          <div className="flex items-center gap-4">
            <a href={`tel:+573153406538`} className="inline-flex items-center gap-1.5 hover:opacity-90">
              <Phone className="size-3.5" /> {WHATSAPP_PHONE}
            </a>
            <a href={`mailto:${COMPANY_EMAIL}`} className="hidden sm:inline-flex items-center gap-1.5 hover:opacity-90">
              <Mail className="size-3.5" /> {COMPANY_EMAIL}
            </a>
          </div>
          <span className="hidden md:block opacity-90">Fabricamos en Colombia · Despacho nacional</span>
        </div>
      </div>

      <nav
        className={`bg-white transition-shadow ${scrolled ? "shadow-card" : ""}`}
      >
        <div className="container-x flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2.5 min-w-0">
            <img src={logo} alt="TECNI-PEGA" className="h-10 w-auto" />
            <div className="leading-tight">
              <div className="font-display font-extrabold text-brand-blue text-lg tracking-tight">
                TECNI-<span className="text-brand-red">PEGA</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">C&amp;P S.A.S.</div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-7 text-sm font-semibold text-brand-blue">
            <li><Link to="/" className="hover:text-brand-red transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:scale-x-0 after:bg-brand-red hover:after:scale-x-100 after:transition-transform after:origin-left">Inicio</Link></li>
            <li><Link to="/catalogo" className="hover:text-brand-red transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:scale-x-0 after:bg-brand-red hover:after:scale-x-100 after:transition-transform after:origin-left">Catálogo</Link></li>
            <li><a href="/#visualizador" className="hover:text-brand-red transition-colors">Visualizador</a></li>
            <li><a href="/#categorias" className="hover:text-brand-red transition-colors">Categorías</a></li>
            <li><a href="/#productos" className="hover:text-brand-red transition-colors">Productos</a></li>
            <li><a href="/#contacto" className="hover:text-brand-red transition-colors">Contacto</a></li>
          </ul>

          <div className="hidden lg:block">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-whatsapp">
              <MessageCircle className="size-4" />
              Cotizar por WhatsApp
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-brand-blue"
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-brand-blue-deep text-white p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="font-display font-bold">Menú</span>
              <button onClick={() => setOpen(false)} aria-label="Cerrar"><X className="size-6" /></button>
            </div>
            <ul className="flex flex-col gap-1 text-base">
              {[
                ["Inicio", "/"],
                ["Catálogo", "/catalogo"],
                ["Visualizador de Colores", "/#visualizador"],
                ["Categorías", "/#categorias"],
                ["Productos", "/#productos"],
                ["Contacto", "/#contacto"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block py-3 border-b border-white/10 hover:text-brand-red transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-whatsapp w-full">
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </aside>
        </div>
      )}
    </header>
  );
}
