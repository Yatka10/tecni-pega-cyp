import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ColorVisualizer } from "@/components/site/ColorVisualizer";
import { ProductCard } from "@/components/site/ProductCard";
import { Hero } from "@/components/site/Hero";
import { AboutCollage } from "@/components/site/AboutCollage";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { StatsPanel } from "@/components/site/StatsPanel";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { FAQ } from "@/components/site/FAQ";
import { Newsletter } from "@/components/site/Newsletter";
import { products } from "@/lib/products";

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

function Home() {
  const featured = products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <Hero />

      <AboutCollage />

      <ServicesGrid />

      <StatsPanel />

      <ProcessSteps />

      {/* PRODUCTOS DESTACADOS */}
      <section id="productos" className="py-20 lg:py-24 bg-white">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="chip">— Más vendidos</span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-blue leading-tight">
                Productos <span className="text-brand-red">destacados</span>
              </h2>
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

      {/* VISUALIZADOR */}
      <ColorVisualizer />

      <FAQ />

      <Newsletter />

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
