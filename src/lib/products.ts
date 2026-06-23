import tecniFlex from "@/assets/products/tecni-flex.webp";
import tecniPega from "@/assets/products/tecni-pega-ceramica.webp";
import porcelanatoGris from "@/assets/products/porcelanato-gris.webp";
import porcelanatoBlanco from "@/assets/products/porcelanato-blanco.webp";
import tecniPlus from "@/assets/products/tecni-plus.webp";
import vinilo1 from "@/assets/products/vinilo-tipo1.webp";
import vinilo2 from "@/assets/products/vinilo-tipo2.webp";
import vinilo3 from "@/assets/products/vinilo-tipo3.webp";
import esmalte from "@/assets/products/esmalte-3en1.webp";
import anticorrosivo from "@/assets/products/anticorrosivo.webp";
import tecniEstuco from "@/assets/products/tecni-estuco-acrilico.webp";
import puliPlast from "@/assets/products/puli-plast.webp";
import estuplast from "@/assets/products/estuplast.webp";
import tecniMastik from "@/assets/products/tecni-mastik.webp";
import boquilla from "@/assets/products/tecni-boquilla.webp";
import minerales from "@/assets/products/minerales-max-color.webp";
import tecnofill from "@/assets/products/tecnofill.webp";
import granoFachada from "@/assets/products/grano-fachada.webp";
import estucoExt from "@/assets/products/estuco-exterior.webp";
import estucoInt from "@/assets/products/estuco-interior.webp";
import tecniFlexG1 from "@/assets/products/gallery/tecni-flex/1.png";
import tecniFlexG2 from "@/assets/products/gallery/tecni-flex/2.png";
import tecniFlexG3 from "@/assets/products/gallery/tecni-flex/3.png";

export type Category =
  | "Pegantes"
  | "Pinturas"
  | "Estucos"
  | "Boquillas"
  | "Aditivos"
  | "Revestimientos";

export type Product = {
  slug: string;
  name: string;
  short: string;
  category: Category;
  image: string;
  gallery?: string[];
  features?: { title: string; desc: string }[];
  specs?: { label: string; value: string }[];
  uso: ("Interior" | "Exterior")[];
  presentaciones: string[];
  colorRefs?: string[]; // hex
  highlight?: string;
};

export const products: Product[] = [
  // Pegantes
  {
    slug: "tecni-pega-ceramica-gris",
    name: "TECNI-PEGA C&P — Pegante Cerámica Gris",
    short: "Pegante cementoso de alto agarre para piso y pared en interiores secos.",
    category: "Pegantes",
    image: tecniPega,
    uso: ["Interior"],
    presentaciones: ["10 kg"],
  },
  {
    slug: "porcelanato-gris-latex",
    name: "TECNI-PEGA C&P — Pegante Porcelanato Gris con Látex",
    short: "Adherencia extrema para porcelanato y formatos grandes.",
    category: "Pegantes",
    image: porcelanatoGris,
    uso: ["Interior", "Exterior"],
    presentaciones: ["25 kg"],
  },
  {
    slug: "porcelanato-blanco-latex",
    name: "TECNI-PEGA C&P — Pegante Porcelanato Blanco con Látex",
    short: "Ideal para piezas claras, mármol y mosaicos donde el color es crítico.",
    category: "Pegantes",
    image: porcelanatoBlanco,
    uso: ["Interior", "Exterior"],
    presentaciones: ["25 kg"],
  },
  {
    slug: "tecni-plus",
    name: "TECNI-PLUS C&P — Pegante Cerámico Económico",
    short: "Solución eficiente para obra residencial en interiores.",
    category: "Pegantes",
    image: tecniPlus,
    uso: ["Interior"],
    presentaciones: ["25 kg"],
  },
  {
    slug: "tecni-flex",
    name: "TECNI-FLEX — Pegante Especial Piscinas y Fachadas",
    short: "Pegante de alta flexibilidad para zonas húmedas y exteriores exigentes.",
    category: "Pegantes",
    image: tecniFlex,
    gallery: [tecniFlexG2, tecniFlexG1, tecniFlexG3],
    features: [
      { title: "Resistente al agua", desc: "Mantiene la adherencia tras inmersión prolongada." },
      { title: "Alta adherencia", desc: "Aditivos tipo látex que garantizan resultados superiores." },
      { title: "Máxima durabilidad", desc: "Soporta intemperie, cambios térmicos y humedad constante." },
      { title: "Ideal para exteriores", desc: "Piscinas, fachadas, fuentes y zonas húmedas." },
    ],
    specs: [
      { label: "Mezcla", value: "Agua" },
      { label: "Tiempo de reposo", value: "5 a 10 minutos" },
      { label: "Duración de la mezcla", value: "3 horas" },
      { label: "Rendimiento", value: "≈ 5 m² por 25 kg" },
    ],
    uso: ["Exterior"],
    presentaciones: ["25 kg"],
    highlight: "Anti-humedad",
  },

  // Pinturas
  {
    slug: "vinilo-tipo-1",
    name: "Vinilo Tipo 1 TECNI-COLOR",
    short: "Pintura vinílica premium, lavable y de alta cubrición. 23 tonos.",
    category: "Pinturas",
    image: vinilo1,
    uso: ["Interior", "Exterior"],
    presentaciones: ["Galón", "Balde", "Cuñete"],
    colorRefs: ["#FFFFFF", "#F5EDD6", "#2E6DA4", "#52BE80", "#E31F26", "#F4D03F", "#6B7280"],
    highlight: "23 tonos",
  },
  {
    slug: "vinilo-tipo-2",
    name: "Vinilo Tipo 2 TECNI-COLOR",
    short: "Acabado mate interior, rinde y aplica fácil sobre estuco.",
    category: "Pinturas",
    image: vinilo2,
    uso: ["Interior"],
    presentaciones: ["Galón", "Balde", "Cuñete"],
    colorRefs: ["#FFFFFF", "#F0E8D0", "#C9D1D9", "#F4A7B9", "#27AE60"],
    highlight: "23 tonos",
  },
  {
    slug: "vinilo-tipo-3",
    name: "Vinilo Tipo 3 TECNI-COLOR",
    short: "Vinilo económico para obra blanca y mantenimientos masivos.",
    category: "Pinturas",
    image: vinilo3,
    uso: ["Interior"],
    presentaciones: ["Cuñete"],
    colorRefs: ["#FFFFFF", "#F5EDD6"],
  },
  {
    slug: "esmalte-3en1",
    name: "Esmalte Anticorrosivo 3 en 1 TECNI-PEGA",
    short: "Imprimante, anticorrosivo y acabado en una sola aplicación.",
    category: "Pinturas",
    image: esmalte,
    uso: ["Interior", "Exterior"],
    presentaciones: ["1/4", "Galón"],
    colorRefs: ["#1A1A1A", "#FFFFFF", "#E31F26", "#2E6DA4"],
  },
  {
    slug: "anticorrosivo-cp",
    name: "ANTICORROSIVO C&P — Esmalte Técnico 3 en 1",
    short: "Protección antióxido para estructuras metálicas expuestas.",
    category: "Pinturas",
    image: anticorrosivo,
    uso: ["Exterior"],
    presentaciones: ["1/4", "Galón"],
    colorRefs: ["#F4D03F", "#2E6DA4", "#FFFFFF", "#1A1A1A", "#E31F26", "#27AE60"],
  },

  // Estucos
  {
    slug: "tecni-estuco-acrilico",
    name: "TECNI-ESTUCO Acrílico C&P",
    short: "Estuco acrílico listo para usar, acabado fino sin lijado intensivo.",
    category: "Estucos",
    image: tecniEstuco,
    uso: ["Interior"],
    presentaciones: ["1/4", "Galón", "Balde", "Cuñete"],
  },
  {
    slug: "estuco-interior",
    name: "TECNI-ESTUCO Interior",
    short: "Para nivelar y dar acabado liso a muros interiores en obra blanca.",
    category: "Estucos",
    image: estucoInt,
    uso: ["Interior"],
    presentaciones: ["Galón", "Cuñete"],
  },
  {
    slug: "estuco-exterior",
    name: "TECNI-ESTUCO Exterior",
    short: "Formulado para resistir intemperie en fachadas y aleros.",
    category: "Estucos",
    image: estucoExt,
    uso: ["Exterior"],
    presentaciones: ["Galón", "Cuñete"],
  },
  {
    slug: "puli-plast",
    name: "Masilla Acrílica PULI-PLAST",
    short: "Masilla fina interior/exterior para reparación y acabado.",
    category: "Estucos",
    image: puliPlast,
    uso: ["Interior", "Exterior"],
    presentaciones: ["Galón", "Balde"],
  },
  {
    slug: "estuplast",
    name: "Masilla Acrílica ESTUPLAST",
    short: "Relleno de paredes con alta cubrición y bajo encogimiento.",
    category: "Estucos",
    image: estuplast,
    uso: ["Interior", "Exterior"],
    presentaciones: ["Galón", "Cuñete"],
  },
  {
    slug: "tecni-mastik",
    name: "Masilla Multiusos TECNI-MASTIK",
    short: "Especial drywall y juntas: trabajable, sin grietas y de fácil lija.",
    category: "Estucos",
    image: tecniMastik,
    uso: ["Interior"],
    presentaciones: ["Galón", "Balde"],
  },

  // Boquillas
  {
    slug: "tecni-boquilla",
    name: "TECNI-BOQUILLA C&P — Extra Fina con Látex",
    short: "Boquilla flexible para juntas finas, anti-hongos y resistente al agua.",
    category: "Boquillas",
    image: boquilla,
    uso: ["Interior", "Exterior"],
    presentaciones: ["2 kg"],
    colorRefs: ["#FFFFFF", "#6B7280", "#1A1A1A", "#7B4A2C"],
  },
  {
    slug: "minerales-max-color",
    name: "MINERALES MAX COLOR C&P — Pigmento Mineral",
    short: "Óxido de hierro para teñir mortero y cemento en obra civil.",
    category: "Boquillas",
    image: minerales,
    uso: ["Interior", "Exterior"],
    presentaciones: ["1 kg", "5 kg"],
    colorRefs: ["#F4D03F", "#FFFFFF", "#1A1A1A", "#922B21"],
  },

  // Revestimientos
  {
    slug: "tecnofill",
    name: "TECNOFILL — Recubrimiento Acrílico Impermeable",
    short: "Impermeabilizante anti-hongos para cubiertas, muros y zonas húmedas.",
    category: "Revestimientos",
    image: tecnofill,
    uso: ["Exterior"],
    presentaciones: ["1/2", "Cuñete"],
    highlight: "Anti-hongos",
  },
  {
    slug: "grano-fachada",
    name: "GRANO FACHADA C&P — Revestimiento Texturizado",
    short: "Acabado texturizado decorativo y protector para fachadas.",
    category: "Revestimientos",
    image: granoFachada,
    uso: ["Exterior"],
    presentaciones: ["Galón", "Balde", "Cuñete"],
    colorRefs: ["#FFFFFF", "#F5EDD6", "#E59866", "#6B7280"],
  },
];

export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=573153406538";
export const WHATSAPP_PHONE = "+57 315 3406538";
export const COMPANY_EMAIL = "tecnipegacypsas@gmail.com";

export function whatsappForProduct(name: string) {
  const msg = encodeURIComponent(`Hola TECNI-PEGA, me interesa cotizar: ${name}`);
  return `${WHATSAPP_URL}&text=${msg}`;
}
