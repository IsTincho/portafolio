# Portafolio — Martín Segnini

Mi portafolio personal como desarrollador full stack. Single page, bilingüe (ES/EN), tema oscuro con acento rojo. Lo armé para mostrar los proyectos en los que vengo trabajando (ZAIGEST, KingsLV, CFR) junto con mi experiencia y mi stack.

## Stack

- **React 18** + **Vite** — base del proyecto y dev server.
- **Framer Motion** — animaciones de entrada, scroll y transiciones.
- **lucide-react** — iconos.
- **CSS puro con variables** (design tokens) — sin framework de UI, todo el diseño es propio.
- **i18n propio** — contexto de React + diccionario, sin librería externa. El idioma se guarda en `localStorage`.

## Características

- Bilingüe ES/EN con toggle (recuerda la preferencia).
- Tema oscuro, grid tipo blueprint y métricas estilo telemetría.
- Responsive mobile-first, con drawer en mobile.
- Contadores animados y reveals al hacer scroll.
- Descarga del CV en PDF.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # genera dist/
npm run preview    # sirve el build localmente
```

## Estructura

```
src/
  components/   secciones (Hero, About, Skills, Projects, Experience, Contact, Footer) + UI
  data/         proyectos, experiencia y skills
  i18n/         contexto de idioma + traducciones
public/         CV, favicon y _redirects
```

## Deploy

Cloudflare Pages.

- Build command: `npm run build`
- Output directory: `dist`

El archivo `public/_redirects` maneja el fallback de la SPA.
