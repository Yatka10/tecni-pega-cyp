import { Send, MessageCircle, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/products";

export function Newsletter() {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl gradient-brand text-white p-8 md:p-12 grid md:grid-cols-5 gap-8 items-center shadow-card-hover">
          {/* decorative */}
          <div className="pointer-events-none absolute -top-24 -right-10 size-72 rounded-full bg-brand-red/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-10 size-72 rounded-full bg-white/10 blur-3xl" />

          <div className="md:col-span-3 relative">
            <span className="inline-flex items-center gap-2 chip !bg-white/15 !text-white !border-white/25">
              <Sparkles className="size-3.5" /> Distribuidores y profesionales
            </span>
            <h3 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
              Recibe novedades, fichas técnicas <br className="hidden md:block" />
              y <span className="text-brand-red">precios mayoristas</span>
            </h3>
            <p className="mt-3 text-white/80 max-w-lg">
              Sé el primero en conocer lanzamientos, capacitaciones y promociones del programa de aliados.
            </p>
          </div>

          <form
            className="md:col-span-2 relative"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const email = fd.get("email");
              const msg = encodeURIComponent(`Hola TECNI-PEGA, quiero unirme a la lista de novedades. Mi correo: ${email}`);
              window.open(`${WHATSAPP_URL}&text=${msg}`, "_blank");
            }}
          >
            <div className="flex items-center gap-2 bg-white rounded-2xl p-2 shadow-card">
              <input
                name="email"
                type="email"
                required
                placeholder="tu@correo.com"
                className="flex-1 px-3 py-3 text-sm text-brand-blue placeholder:text-muted-foreground focus:outline-none rounded-xl"
              />
              <button type="submit" className="btn-primary !py-3 !px-4 text-sm shrink-0">
                <Send className="size-4" /> Suscribir
              </button>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center gap-2 text-sm text-white/85 hover:text-white"
            >
              <MessageCircle className="size-4" /> o escríbenos por WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
