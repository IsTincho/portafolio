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
    id: 'allegri',
    name: 'Pablo Allegri',
    index: '02',
    year: '2026',
    url: 'https://pabloallegri.com.ar',
    domain: 'pabloallegri.com.ar',
    tagline: {
      es: 'Renovación del sitio de una inmobiliaria de Rosario: catálogo en vivo y SEO resuelto en el edge.',
      en: 'Rebuild of a Rosario real-estate agency website: live listings and SEO solved at the edge.',
    },
    role: {
      es: 'Diseño, desarrollo y operación · Cliente real',
      en: 'Design, development and operation · Real client',
    },
    status: {
      es: 'En producción · dominio propio',
      en: 'In production · custom domain',
    },
    stack: ['React', 'Vite', 'Cloudflare Pages', 'Pages Worker', 'ZAIGEST API', 'SEO técnico'],
    metrics: [
      { value: '3', label: { es: 'diseños propuestos', en: 'designs proposed' } },
      { value: '0', label: { es: 'palabras antes del fix', en: 'words before the fix' } },
      { value: '24', label: { es: 'propiedades en el HTML', en: 'listings in the HTML' } },
      { value: '15', label: { es: 'rutas con head propio', en: 'routes with own head' } },
    ],
    highlights: {
      es: [
        'Le propuse tres diseños y publicamos el que eligió. El sitio es suyo, con su dominio: no una plantilla alquilada.',
        'El catálogo sale en vivo de ZAIGEST: carga una propiedad en el CRM y aparece en la web, sin que nadie toque el sitio.',
        'La página la dibuja React entera, así que el HTML no le mostraba una sola palabra a Google: ni el nombre de la inmobiliaria, ni la ciudad, ni una propiedad.',
        'Un Worker de Cloudflare reescribe el head con los datos reales de cada página: /venta/departamento/rosario/centro devuelve “Departamentos en venta en Centro, Rosario”.',
        'Contenido de arranque estático que dice lo mismo que la página real, para quien entra sin ejecutar JavaScript.',
      ],
      en: [
        'I proposed three designs and shipped the one the client picked. The site is his, on his own domain — not a rented template.',
        'The catalog comes live from ZAIGEST: he adds a listing in the CRM and it shows up on the site, with nobody touching the site.',
        'React draws the whole page, so the HTML showed Google nothing at all: not the agency name, not the city, not a single listing.',
        'A Cloudflare Worker rewrites the head with each page’s real data: /venta/departamento/rosario/centro returns “Departamentos en venta en Centro, Rosario”.',
        'A static startup block that says the same thing as the real page, for anyone arriving without JavaScript.',
      ],
    },
    caseStudy: {
      es: {
        overview: 'Sitio de una inmobiliaria de Rosario, en producción y con dominio propio. Publica el catálogo real desde ZAIGEST y resuelve el SEO en el edge, sin servidor propio.',
        sections: [
          { title: 'El encargo', body: 'Pablo necesitaba una web que mostrara sus propiedades y que se pudiera encontrar en Google. Le armé tres propuestas de diseño distintas y publicamos la que eligió.' },
          { title: 'El catálogo', body: 'Las propiedades no se cargan dos veces: salen de ZAIGEST, el mismo sistema donde la inmobiliaria opera todos los días. Publicar una propiedad en el CRM la publica en la web.' },
          { title: 'El problema real', body: 'Toda la página la dibuja React en el navegador. Eso significa que el HTML que recibe un buscador estaba vacío: ni el nombre de la inmobiliaria, ni Rosario, ni una sola propiedad. Una inmobiliaria invisible en Google es una inmobiliaria sin consultas.' },
          { title: 'La solución en el edge', body: 'Un Worker de Cloudflare Pages intercepta cada request y reemplaza el head con los datos reales de esa página antes de que salga: la portada con la inmobiliaria y su zona, y cada búsqueda con su propio título. Sin servidor propio y sin duplicar el sitio.' },
          { title: 'Resultado', body: '15 rutas en el sitemap, cada una con su título y descripción propios, y 24 propiedades visibles en el HTML inicial. El contenido de arranque dice lo mismo que la página real, así que no hay un sitio para Google y otro para las personas.' },
        ],
      },
      en: {
        overview: 'Website for a Rosario real-estate agency, in production on its own domain. It publishes the real catalog from ZAIGEST and solves SEO at the edge, with no server of its own.',
        sections: [
          { title: 'The brief', body: 'Pablo needed a site that showed his listings and could actually be found on Google. I put together three different design proposals and we shipped the one he chose.' },
          { title: 'The catalog', body: 'Listings are never entered twice: they come from ZAIGEST, the same system the agency runs on every day. Publishing a listing in the CRM publishes it on the site.' },
          { title: 'The real problem', body: 'React draws the entire page in the browser, which means the HTML a crawler receives was empty: no agency name, no Rosario, not a single listing. An agency invisible on Google is an agency with no enquiries.' },
          { title: 'The fix, at the edge', body: 'A Cloudflare Pages Worker intercepts each request and swaps the head for that page’s real data before it ships: the homepage with the agency and its area, each search with its own title. No server, and no duplicate site to maintain.' },
          { title: 'Outcome', body: '15 routes in the sitemap, each with its own title and description, and 24 listings visible in the initial HTML. The startup content says the same thing as the real page, so there is no separate site for Google and for people.' },
        ],
      },
    },
  },
  {
    id: 'kingslv',
    name: 'KingsLV',
    index: '03',
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
          { title: 'Próximo módulo: gamificación', body: 'Estamos integrando Vectorga Quiz como sistema de puntos: los fans juegan el quiz, ganan puntos y los canjean por descuentos en la tienda. Un loop de engagement entre creadores, comunidad y e-commerce.' },
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
          { title: 'Next module: gamification', body: 'We are integrating Vectorga Quiz as a points system: fans play the quiz, earn points and redeem them for store discounts. An engagement loop between creators, community and e-commerce.' },
        ],
      },
    },
  },
  {
    id: 'vectorga-quiz',
    name: 'Vectorga Quiz',
    index: '04',
    year: '2026',
    url: null,
    domain: 'standalone · .zip',
    tagline: {
      es: 'Quiz web para fans de Los Vectorgas: adiviná el video por audio o miniatura. Vanilla JS, sin frameworks, sin build tools, sin dependencias.',
      en: 'A web quiz for Los Vectorgas fans: guess the video by audio or thumbnail. Vanilla JS, no frameworks, no build tools, no dependencies.',
    },
    role: {
      es: 'Diseño, desarrollo y distribución',
      en: 'Design, development & distribution',
    },
    status: {
      es: 'MVP funcional · listo para distribuir',
      en: 'Working MVP · ready to ship',
    },
    stack: ['Vanilla JS', 'HTML', 'CSS', 'YouTube Data API v3', 'YouTube IFrame API', 'Web Audio API', 'PowerShell'],
    metrics: [
      { value: '0', label: { es: 'dependencias', en: 'dependencies' } },
      { value: '1', label: { es: 'archivo HTML', en: 'HTML file' } },
      { value: '2', label: { es: 'modos de juego', en: 'game modes' } },
      { value: '12h', label: { es: 'auto-refresh', en: 'auto-refresh' } },
    ],
    highlights: {
      es: [
        'Producto para mi propio grupo de creadores (Los Vectorgas, fans de @Vector y @VectorMVP): conozco a la audiencia desde adentro.',
        'Audio y efectos sintetizados con Web Audio API: cero archivos de sonido, peso 0 KB en assets.',
        'Hybrid loading: lista de videos incrustada + refresh contra YouTube API en background cada 12h. Nunca pantalla vacía.',
        'Distribución standalone: 1 HTML + serve.ps1 + JUGAR.cmd. Doble click y juega, sin instalar nada.',
      ],
      en: [
        'A product for my own creator collective (Los Vectorgas, fans of @Vector and @VectorMVP): I know the audience from the inside.',
        'Audio and effects synthesized with the Web Audio API: zero sound files, 0 KB in assets.',
        'Hybrid loading: embedded video list + background YouTube API refresh every 12h. Never an empty screen.',
        'Standalone distribution: 1 HTML + serve.ps1 + JUGAR.cmd. Double-click and play, no install.',
      ],
    },
    caseStudy: {
      es: {
        overview: 'Quiz web para fans de los canales Vector y VectorMVP. Adiviná de qué video se trata por audio o miniatura censurada, ganás puntos. Vanilla JS, distribución standalone.',
        sections: [
          { title: 'El desafío', body: 'Distribuir un juego para mi comunidad sin que el usuario instale nada, sin frameworks, y que se mantenga al día solo cuando subimos videos nuevos.' },
          { title: 'La solución', body: '1 HTML autocontenido con todo el código y la lista de videos incrustada. Un mini-server local en PowerShell (JUGAR.cmd → serve.ps1) abre el navegador en localhost para que YouTube no bloquee el audio embebido.' },
          { title: 'Audio sin archivos', body: 'Todos los efectos del juego se generan en vivo con Web Audio API: acierto, error, victoria, reveal. Cero KB de assets de sonido, funciona offline después de la primera carga.' },
          { title: 'Catálogo que se actualiza solo', body: 'Esquema híbrido: pinta al instante con la lista incrustada y en segundo plano consulta la YouTube Data API guardando en localStorage. Refresh máximo cada 12h para no quemar la cuota.' },
          { title: 'Hacia dónde va', body: 'Lo vamos a integrar a KingsLV como sistema de gamificación: los puntos del quiz se van a canjear por descuentos en la tienda. Cierra producto, comunidad y e-commerce en un solo loop.' },
        ],
      },
      en: {
        overview: 'A web quiz for fans of the Vector and VectorMVP YouTube channels. Guess the video by audio or censored thumbnail and earn points. Vanilla JS, standalone distribution.',
        sections: [
          { title: 'The challenge', body: 'Ship a game to my community without anyone installing anything, with no frameworks, and have it stay up to date on its own as new videos go live.' },
          { title: 'The solution', body: 'A single self-contained HTML with all code and the video list embedded. A small local PowerShell server (JUGAR.cmd → serve.ps1) opens the browser at localhost so YouTube does not block embedded audio.' },
          { title: 'Audio without files', body: 'All game effects are synthesized live with the Web Audio API: hit, miss, victory, reveal. Zero KB of sound assets, works offline after the first load.' },
          { title: 'A self-updating catalog', body: 'Hybrid scheme: instant paint from the embedded list, plus a background YouTube Data API call cached in localStorage. Refresh at most every 12h to spare quota.' },
          { title: 'Where it is headed', body: 'We are going to plug it into KingsLV as a gamification system: quiz points will be redeemable for store discounts. Closes the loop between product, community and e-commerce.' },
        ],
      },
    },
  },
]
