export const moreProjects = [
  {
    id: 'utn',
    name: 'Proyecto Final UTN',
    year: '2024',
    tag: 'MERN',
    desc: {
      es: 'Aplicación full-stack como trabajo final de carrera (MERN), con documentación técnica y especificación de requisitos funcionales.',
      en: 'Full-stack app as my degree final project (MERN), with technical documentation and functional requirements spec.',
    },
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    id: 'clima',
    name: 'App del Clima',
    year: '2022',
    tag: 'API REST',
    desc: {
      es: 'App web que consume una API REST pública para mostrar datos climáticos en tiempo real, con frontend responsive.',
      en: 'Web app consuming a public REST API to show real-time weather data, with a responsive frontend.',
    },
    stack: ['React', 'CSS', 'REST API'],
  },
  {
    id: 'gestion',
    name: 'Sistema de Gestión',
    year: '2023',
    tag: 'Desktop',
    desc: {
      es: 'Sistema de gestión universitario de escritorio con C# y Entity Framework sobre MySQL.',
      en: 'University management desktop system built with C# and Entity Framework over MySQL.',
    },
    stack: ['C#', 'Entity Framework', 'MySQL'],
  },
]

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
    caseStudy: {
      es: {
        overview: 'SaaS multi-tenant de gestión inmobiliaria, en producción con un cliente real (~80 propiedades). Soy co-fundador técnico y lo desarrollé de punta a punta.',
        sections: [
          { title: 'El desafío', body: 'Una inmobiliaria necesitaba operar todo su ciclo —alquileres, ventas, facturación fiscal, cobros y comunicación— en un solo sistema, multiempresa, sin que los datos de un cliente se filtren a otro.' },
          { title: 'La solución', body: 'SaaS multi-tenant donde cada consulta lleva empresaId resuelto del JWT en un middleware de tenant. 18 modelos, 48 routers y 9 cron jobs en el backend; frontend React/Vite con estado de servidor en React Query.' },
          { title: 'Lo más difícil: AFIP', body: 'Facturación electrónica fiscal vía SOAP/WSAA, con certificados encriptados con AES-GCM por empresa y cumplimiento RG 5616 / 4291. Pocas integraciones perdonan menos un error que una fiscal.' },
          { title: 'IA y seguridad', body: '8 capacidades de IA sobre Groq (OCR, scoring, contratos, predictor…) con fallback de modelos y key server-side. Seguridad auditada: webhooks HMAC, iCal firmado, anti mass-assignment, rate limiting y mongo-sanitize.' },
          { title: 'Resultado', body: '~89k líneas en producción. Recibos, liquidaciones, punitorios y scoring corren solos por cron. Bundle inicial reducido de 815 KB a 369 KB.' },
        ],
      },
      en: {
        overview: 'Multi-tenant real-estate management SaaS, in production with a real client (~80 properties). I am technical co-founder and built it end to end.',
        sections: [
          { title: 'The challenge', body: 'An agency needed to run its whole cycle —rentals, sales, tax invoicing, payments and communication— in a single multi-company system, with no data leaking between clients.' },
          { title: 'The solution', body: 'A multi-tenant SaaS where every query carries an empresaId resolved from the JWT in a tenant middleware. 18 models, 48 routers and 9 cron jobs on the backend; a React/Vite frontend with server state in React Query.' },
          { title: 'The hardest part: AFIP', body: 'Tax-grade electronic invoicing over SOAP/WSAA, with per-company AES-GCM encrypted certificates and RG 5616 / 4291 compliance. Few integrations are less forgiving of mistakes than a fiscal one.' },
          { title: 'AI and security', body: '8 AI capabilities on Groq (OCR, scoring, contracts, predictor…) with model fallback and a server-side key. Audited security: HMAC webhooks, signed iCal, anti mass-assignment, rate limiting and mongo-sanitize.' },
          { title: 'Outcome', body: '~89k lines in production. Receipts, settlements, late fees and scoring run on their own via cron. Initial bundle cut from 815 KB to 369 KB.' },
        ],
      },
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
    caseStudy: {
      es: {
        overview: 'E-commerce multi-tienda en producción con pagos reales. Dos marcas —Kings y Vectorgas (mi grupo de creadores)— sobre una sola base de código.',
        sections: [
          { title: 'El desafío', body: 'Dos marcas con identidad visual propia que comparten carrito, checkout y back-office. Y cobrar de verdad, sin sobrevender stock.' },
          { title: 'La solución', body: 'Multi-tenant ligero con tema dinámico por ruta (claro en Kings, oscuro en Vectorgas) y carrito con 3 tipos de ítem: producto, promoción y multiproducto. React Query como capa de datos compartida.' },
          { title: 'Pagos seguros', body: 'Mercado Pago con Wallet Brick embebido + webhook verificado por HMAC-SHA256 en tiempo constante, validación de stock contra la base antes de cobrar y cooldown anti-spam de preferencias.' },
          { title: 'Performance', body: 'Imágenes en Cloudinary con transformaciones por URL: de 2–5 MB a 30–100 KB (~95% menos). Índices Mongo, eliminación de N+1 y code splitting del bundle de admin.' },
          { title: 'Resultado', body: 'En producción, procesando pagos reales y gestionando stock por variante y talle. Back-office Apple-style de diseño propio con 10 secciones.' },
        ],
      },
      en: {
        overview: 'Multi-store e-commerce in production with live payments. Two brands —Kings and Vectorgas (my creator group)— on a single codebase.',
        sections: [
          { title: 'The challenge', body: 'Two brands with their own visual identity sharing cart, checkout and back-office. And taking real payments, without overselling stock.' },
          { title: 'The solution', body: 'Lightweight multi-tenant with a per-route dynamic theme (light for Kings, dark for Vectorgas) and a cart with 3 item types: product, promo and multi-product. React Query as a shared data layer.' },
          { title: 'Secure payments', body: 'Mercado Pago with an embedded Wallet Brick + a constant-time HMAC-SHA256 verified webhook, server-side stock validation before charging, and an anti-spam preference cooldown.' },
          { title: 'Performance', body: 'Cloudinary images with URL transforms: from 2–5 MB down to 30–100 KB (~95% lighter). Mongo indexes, N+1 removal and code-splitting of the admin bundle.' },
          { title: 'Outcome', body: 'In production, processing real payments and managing stock per variant and size. A custom Apple-style back-office with 10 sections.' },
        ],
      },
    },
  },
  {
    id: 'cfr',
    name: 'Club Fans Remeras',
    index: '03',
    year: '2025',
    url: 'https://cfr-repo.pages.dev/',
    domain: 'cfr-repo.pages.dev',
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
    caseStudy: {
      es: {
        overview: 'E-commerce de cultura pop (anime, bandas, deportes, gaming) para un retailer de Once, Buenos Aires. MVP funcional con identidad cyberpunk hecha a mano.',
        sections: [
          { title: 'El desafío', body: 'Una tienda con doble precio (minorista y mayorista), inventario real de indumentaria (variantes de color/modelo y stock por talle) y un MVP de bajo costo, sin la fricción de una pasarela de pago.' },
          { title: 'La solución', body: 'Monorepo pnpm con un paquete @cfr/schemas: los esquemas Zod se definen una vez y validan cliente y servidor. Una sola fuente de verdad, sin desincronización entre capas. El checkout confirma el pedido por email.' },
          { title: 'Integridad del checkout', body: 'El servidor nunca confía en los precios del cliente: los recalcula desde el producto real. Decremento de stock atómico con operadores posicionales de Mongo y respuesta 409 si el stock cambió, para no sobrevender.' },
          { title: 'Identidad cyberpunk', body: 'Sistema de diseño propio: scanlines CRT, text-glow, bordes LED, glitch RGB en hover y esquinas chanfleadas con clip-path — todo respetando prefers-reduced-motion.' },
          { title: 'Resultado', body: '27 endpoints REST, 20+ esquemas Zod y snapshot denormalizado en los pedidos para que el comprobante histórico sea inmutable aunque el producto cambie.' },
        ],
      },
      en: {
        overview: 'Pop-culture e-commerce (anime, bands, sports, gaming) for a retailer in Once, Buenos Aires. A working MVP with a hand-built cyberpunk identity.',
        sections: [
          { title: 'The challenge', body: 'A store with dual pricing (retail and wholesale), real apparel inventory (color/model variants and per-size stock) and a low-cost MVP, without the friction of a payment gateway.' },
          { title: 'The solution', body: 'A pnpm monorepo with a @cfr/schemas package: Zod schemas are defined once and validate both client and server. A single source of truth, no drift between layers. Checkout confirms the order by email.' },
          { title: 'Checkout integrity', body: 'The server never trusts client prices: it recomputes them from the real product. Atomic stock decrement with Mongo positional operators and a 409 response if stock changed, to avoid overselling.' },
          { title: 'Cyberpunk identity', body: 'A custom design system: CRT scanlines, text-glow, LED borders, RGB glitch on hover and chamfered corners via clip-path — all respecting prefers-reduced-motion.' },
          { title: 'Outcome', body: '27 REST endpoints, 20+ Zod schemas and a denormalized order snapshot so the historical receipt stays immutable even if the product changes.' },
        ],
      },
    },
  },
]
