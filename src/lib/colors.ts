export type ColorSwatch = {
  name: string;
  ref: string;
  hex: string;
  family: string;
};

export const colorFamilies = [
  "Blancos & Neutros",
  "Grises",
  "Azules",
  "Verdes",
  "Rojos & Cálidos",
  "Tierra",
  "Oscuros",
] as const;

export const colors: ColorSwatch[] = [
  { name: "Blanco Puro", ref: "TC-001", hex: "#FFFFFF", family: "Blancos & Neutros" },
  { name: "Blanco Arena", ref: "TC-002", hex: "#F5EDD6", family: "Blancos & Neutros" },
  { name: "Blanco Hueso", ref: "TC-003", hex: "#F0E8D0", family: "Blancos & Neutros" },
  { name: "Champaña", ref: "TC-004", hex: "#E8D5A3", family: "Blancos & Neutros" },

  { name: "Gris Basalto", ref: "TC-010", hex: "#6B7280", family: "Grises" },
  { name: "Gris Nube", ref: "TC-011", hex: "#C9D1D9", family: "Grises" },

  { name: "Azul Mediterráneo", ref: "TC-020", hex: "#2E6DA4", family: "Azules" },
  { name: "Azul Oceánico", ref: "TC-021", hex: "#1A5276", family: "Azules" },
  { name: "Azul Pacífico", ref: "TC-022", hex: "#154360", family: "Azules" },

  { name: "Verde Primavera", ref: "TC-030", hex: "#52BE80", family: "Verdes" },
  { name: "Verde Seda", ref: "TC-031", hex: "#27AE60", family: "Verdes" },
  { name: "Verde Chartreuse", ref: "TC-032", hex: "#D4E157", family: "Verdes" },
  { name: "Verde Oscuro", ref: "TC-033", hex: "#1E5631", family: "Verdes" },

  { name: "Rojo Colonial", ref: "TC-040", hex: "#922B21", family: "Rojos & Cálidos" },
  { name: "Rojo Vivo", ref: "TC-041", hex: "#E31F26", family: "Rojos & Cálidos" },
  { name: "Magenta", ref: "TC-042", hex: "#C0392B", family: "Rojos & Cálidos" },
  { name: "Palo de Rosa", ref: "TC-043", hex: "#F4A7B9", family: "Rojos & Cálidos" },

  { name: "Amarillo Otoñal", ref: "TC-050", hex: "#F4D03F", family: "Tierra" },
  { name: "Trigo", ref: "TC-051", hex: "#E59866", family: "Tierra" },
  { name: "Mandarina Tropical", ref: "TC-052", hex: "#E67E22", family: "Tierra" },
  { name: "Melón", ref: "TC-053", hex: "#F0A500", family: "Tierra" },

  { name: "Negro Carbón", ref: "TC-060", hex: "#1A1A1A", family: "Oscuros" },
  { name: "Lila Real", ref: "TC-061", hex: "#8E44AD", family: "Oscuros" },
];
