export const projects = [
  {
    id: 'zaigest',
    name: 'ZAIGEST',
    index: '01',
    year: '2026',
    url: 'https://zaigest.com.ar',
    domain: 'zaigest.com.ar',
    flagship: true,
    tagline: {
      es: 'SaaS multi-tenant de gestión inmobiliaria con IA, facturación electrónica AFIP y cobros online.',
      en: 'Multi-tenant real-estate SaaS with AI, AFIP electronic invoicing, and online payments.',
    },
    role: {
      es: 'Co-fundador técnico · Full-stack end-to-end',
      en: 'Technical co-founder · End-to-end full-stack',
    },
    status: {
      es: 'En producción · cliente real',
      en: 'In production · real client',
    },
    stack: ['React 18', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Groq LLM', 'AFIP SOAP', 'MercadoPago', 'WhatsApp API', 'Cloudflare', 'Railway'],
    metrics: [
      { value: '89K+', label: { es: 'líneas de código', en: 'lines of code' } },
      { value: '48', label: { es: 'routers REST', en: 'REST routers' } },
      { value: '8', label: { es: 'capacidades IA', en: 'AI capabilities' } },
      { value: '9', label: { es: 'cron jobs', en: 'cron jobs' } },
    ],
    highlights: {
      es: [
        'Aislamiento multi-tenant verificado en cada query (scoping por empresaId), no solo en la UI.',
        'Facturación electrónica AFIP: SOAP/WSAA, certificados encriptados con AES-GCM por empresa, RG 5616 / 4291.',
        'Webhooks firmados con HMAC (MercadoPago y Meta WhatsApp) sobre raw body, con orden de middleware cuidado.',
        '8 capacidades de IA sobre Groq LLM con fallback de modelos y key resguardada server-side.',
        'Code-split que bajó el bundle inicial de 815 KB a 369 KB (−55%).',
      ],
      en: [
        'Multi-tenant isolation enforced on every query (empresaId scoping), not just in the UI.',
        'AFIP electronic invoicing: SOAP/WSAA, per-company AES-GCM encrypted certificates, RG 5616 / 4291 compliance.',
        'HMAC-signed webhooks (MercadoPago and Meta WhatsApp) over raw body, with careful middleware ordering.',
        '8 AI capabilities on Groq LLM with model fallback and server-side key protection.',
        'Code-splitting that cut the initial bundle from 815 KB to 369 KB (−55%).',
      ],
    },
  },
  {
    id: 'kingslv',
    name: 'KingsLV',
    index: '02',
    year: '2025',
    url: 'https://kingslvstore.com',
    domain: 'kingslvstore.com',
    tagline: {
      es: 'E-commerce multi-tienda full-stack: dos marcas, un checkout, pasarela de pagos y panel de diseño propio.',
      en: 'Full-stack multi-store e-commerce: two brands, one checkout, payment gateway, and a custom admin panel.',
    },
    role: {
      es: 'Diseño, desarrollo full-stack y operación',
      en: 'Design, full-stack development, and operation',
    },
    status: {
      es: 'En producción · pagos reales',
      en: 'In production · live payments',
    },
    stack: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Redux', 'React Query', 'MercadoPago', 'Cloudinary', 'Firebase', 'Render'],
    metrics: [
      { value: '2', label: { es: 'tiendas, una base', en: 'stores, one codebase' } },
      { value: '~95%', label: { es: 'menos peso en assets', en: 'lighter assets' } },
      { value: '10', label: { es: 'secciones de admin', en: 'admin sections' } },
      { value: '3', label: { es: 'tipos de ítem', en: 'cart item types' } },
    ],
    highlights: {
      es: [
        'Vectorgas —una de las dos tiendas— es la marca de Los Vectorgas, mi propio grupo de creadores de contenido gaming: construí la plataforma para mi propia audiencia.',
        'Arquitectura multi-tenant ligera: dos identidades visuales sobre una sola base de código y un único checkout.',
        'Pasarela Mercado Pago con webhook verificado por HMAC-SHA256 en tiempo constante y validación de stock server-side.',
        'Optimización de imágenes vía Cloudinary: de 2–5 MB a 30–100 KB por asset (~95% menos).',
        'Back-office Apple-style de diseño propio: design tokens, glassmorphism, animaciones framer-motion.',
      ],
      en: [
        'Vectorgas —one of the two stores— is the brand of Los Vectorgas, my own gaming content-creator group: I built the platform for my own audience.',
        'Lightweight multi-tenant architecture: two visual identities on one codebase and a single checkout.',
        'Mercado Pago gateway with constant-time HMAC-SHA256 webhook verification and server-side stock validation.',
        'Cloudinary image optimization: from 2–5 MB down to 30–100 KB per asset (~95% lighter).',
        'Custom Apple-style back-office: design tokens, glassmorphism, framer-motion animations.',
      ],
    },
  },
  {
    id: 'cfr',
    name: 'Club Fans Remeras',
    index: '03',
    year: '2025',
    url: null,
    domain: 'github.com/IsTincho',
    tagline: {
      es: 'E-commerce de cultura pop con identidad cyberpunk, monorepo y esquemas Zod compartidos cliente/servidor.',
      en: 'Pop-culture e-commerce with a cyberpunk identity, monorepo, and shared client/server Zod schemas.',
    },
    role: {
      es: 'Full-stack · identidad visual · infraestructura',
      en: 'Full-stack · visual identity · infrastructure',
    },
    status: {
      es: 'MVP funcional · listo para deploy',
      en: 'Working MVP · deploy-ready',
    },
    stack: ['React 18', 'Vite', 'Redux Toolkit', 'RTK Query', 'Tailwind', 'Express', 'Mongoose', 'Zod', 'pnpm'],
    metrics: [
      { value: '27', label: { es: 'endpoints REST', en: 'REST endpoints' } },
      { value: '20+', label: { es: 'esquemas Zod', en: 'Zod schemas' } },
      { value: '7', label: { es: 'efectos visuales custom', en: 'custom visual effects' } },
      { value: '1', label: { es: 'fuente de verdad', en: 'source of truth' } },
    ],
    highlights: {
      es: [
        'Monorepo pnpm con paquete @cfr/schemas: una sola definición Zod valida frontend y backend, sin drift.',
        'Checkout con integridad de stock y precio: el servidor recalcula precios y decrementa stock de forma atómica (409 anti-oversell).',
        'Snapshot denormalizado en pedidos: el comprobante histórico es inmutable aunque el producto cambie.',
        'Identidad cyberpunk a mano: scanlines, glow, glitch RGB y clip-path, todo respetando prefers-reduced-motion.',
      ],
      en: [
        'pnpm monorepo with @cfr/schemas package: a single Zod definition validates frontend and backend, no drift.',
        'Checkout with stock & price integrity: the server recomputes prices and decrements stock atomically (409 anti-oversell).',
        'Denormalized order snapshot: the historical receipt stays immutable even if the product changes later.',
        'Hand-built cyberpunk identity: scanlines, glow, RGB glitch, and clip-path, all respecting prefers-reduced-motion.',
      ],
    },
  },
]
