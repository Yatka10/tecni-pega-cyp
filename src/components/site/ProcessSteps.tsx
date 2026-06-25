import { MessageSquare, ClipboardList, Truck, HeartHandshake } from "lucide-react";
import processImg from "@/assets/showcase/slide-fachadas.jpg";

const steps = [
  { n: "01", Icon: MessageSquare, title: "Solicita tu cotización", desc: "Escríbenos por WhatsApp o llena el formulario con tus requerimientos." },
  { n: "02", Icon: ClipboardList, title: "Asesoría técnica", desc: "Te recomendamos el producto y presentación ideal para tu obra." },
  { n: "03", Icon: Truck, title: "Despacho oportuno", desc: "Logística a toda Colombia con tiempos y empaque garantizados." },
  { n: "04", Icon: HeartHandshake, title: "Acompañamiento post-venta", desc: "Soporte continuo durante y después de la aplicación." },
];

export function ProcessSteps() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* bg image */}
      <div className="absolute inset-0 -z-10">
        <img src={processImg} alt="" className="size-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-brand-blue-deep/92" />
      </div>

      <div className="container-x text-white">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip !bg-white/10 !text-white !border-white/20">— Nuestro proceso</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Cómo trabajamos <span className="text-brand-red">contigo</span>
          </h2>
          <p className="mt-4 text-white/75">
            Un proceso simple y transparente diseñado para que tu obra avance sin contratiempos.
          </p>
        </div>

        <div className="mt-14 relative">
          {/* connector line */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((s) => (
              <div key={s.n} className="relative text-center lg:px-4">
                <div className="mx-auto size-24 rounded-full bg-brand-blue grid place-items-center border-4 border-brand-blue-deep relative">
                  <s.Icon className="size-10 text-white" />
                  <span className="absolute -top-2 -right-2 size-9 rounded-full bg-brand-red text-white font-display font-extrabold text-sm grid place-items-center shadow-card">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-white/75">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
