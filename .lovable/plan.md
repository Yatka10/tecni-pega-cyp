## Objetivo

Adoptar la estética moderna del referente (Transport Logistic): hero con foto grande + barra superior de contacto, composiciones asimétricas de imágenes, secciones con chip + título de dos líneas (segunda línea en rojo de marca), stats sobre bloque azul oscuro con mapa, proceso de 4 pasos con línea conectora, FAQ tipo acordeón, newsletter con ilustración. Todo con la paleta actual (azul `#1A3A6B`, rojo, grises, fondos suaves) — sin verde teal del ejemplo.

## Paleta y tipografía (sin cambios)

Se mantiene: `brand-blue`, `brand-red`, `brand-gray-soft`, fuentes Montserrat + Inter ya cargadas. Solo se ajustan utilidades de layout y secciones nuevas.

## Estructura final de la Home

```text
1. TopBar fina (tel · email · dirección · horario)            [nueva]
2. Navbar (existente, refinada)
3. Hero con foto grande + chip "Pegantes, Pinturas..."        [refactor]
4. About — "Soluciones confiables para un mundo conectado"    [nueva: collage de fotos + 98% on-time]
5. Servicios — 4 categorías como cards con icono              [refactor de catálogo destacado]
6. Stats sobre panel azul oscuro con mapa de Colombia         [nueva]
7. Proceso 4 pasos con línea conectora                        [nueva]
8. Productos destacados (slider de cards existente)           [se mantiene]
9. Visualizador de color (ya rediseñado)                      [se mantiene]
10. FAQ acordeón con foto lateral + CTA WhatsApp              [nueva]
11. Newsletter / Contacto rápido con ilustración              [nueva]
12. Footer ampliado (4 columnas)                              [refactor]
```

## Secciones que se omiten

- **Testimonios** — descartado por el usuario.
- **Equipo / Blog** — no hay contenido real; se reemplazan por bloques de marca (Proceso y Calidad/Certificaciones).

## Imágenes nuevas a generar (6)

Estilo fotográfico realista, luz cálida, coherente con marca:

1. `ambient-hero.jpg` — albañil aplicando pegante en pared con llana dentada, fondo cálido.
2. `ambient-about-1.jpg` — manos mezclando pintura color terracota.
3. `ambient-about-2.jpg` — fachada residencial recién pintada, cielo despejado.
4. `ambient-about-3.jpg` — instalación de cerámica con boquilla, vista cenital.
5. `ambient-process.jpg` — bodega industrial con tarros de pintura organizados.
6. `ambient-faq.jpg` — asesor técnico con catálogo conversando con cliente en obra.

Se almacenan como Lovable Assets (CDN) para no inflar el repo.

## Cambios técnicos por archivo

- **`src/components/site/TopBar.tsx`** (nuevo) — barra superior fina con contacto y horario.
- **`src/components/site/Navbar.tsx`** — restilizar con underline activo y "Track" → botón "Cotizar".
- **`src/components/site/Hero.tsx`** (nuevo, reemplaza HeroSlider en home) — layout split: texto izquierda con chip, foto grande derecha con badge flotante "Trusted by …" adaptado a "+15 años de experiencia".
- **`src/components/site/AboutCollage.tsx`** (nuevo) — collage 3 imágenes + badge circular "98% satisfacción".
- **`src/components/site/ServicesGrid.tsx`** (nuevo) — 4 cards: Pegantes, Pinturas, Estucos, Boquillas.
- **`src/components/site/StatsPanel.tsx`** (nuevo) — bloque azul con 4 stats + silueta de mapa Colombia SVG.
- **`src/components/site/ProcessSteps.tsx`** (nuevo) — 4 pasos: Cotiza → Asesoría → Despacho → Soporte.
- **`src/components/site/FAQ.tsx`** (nuevo) — acordeón con `@radix-ui` ya disponible.
- **`src/components/site/Newsletter.tsx`** (nuevo) — input email + ilustración + CTA WhatsApp.
- **`src/components/site/Footer.tsx`** — ampliar a 4 columnas (Marca, Enlaces, Productos, Contacto).
- **`src/routes/index.tsx`** — recomponer con las nuevas secciones.
- **`src/styles.css`** — añadir utilidades `.section-title`, `.chip-line`, badges y sombras suaves.

## Lo que NO se toca

- Paleta de colores y tokens existentes.
- Productos (`src/lib/products.ts`), ColorVisualizer ya rediseñado, página de detalle de producto, catálogo.
- Lógica de WhatsApp y rutas existentes.

## Quality bar

- Animaciones sutiles (fade-up + parallax suave en hero) con CSS, sin librerías nuevas.
- Mobile-first; el grid del ejemplo (2 columnas desktop) colapsa limpio en móvil.
- Sin texto placeholder visible: todo en español, datos reales de TECNI-PEGA.

Confírmame y arranco con la generación de imágenes y los componentes en paralelo.