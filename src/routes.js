// Path-based routing without a router: the site is static on Cloudflare Pages and
// `_redirects` serves index.html for every path, so links are plain <a href> and a
// navigation is a full document load. The path also picks the initial language, so
// /servicios and /services are the same page in two languages and each gets its own
// canonical URL for crawlers.

export const SITE = 'https://tincho.pages.dev'

export function currentPath() {
  if (typeof window === 'undefined') return '/'
  return window.location.pathname.replace(/\/+$/, '') || '/'
}

export function isServicesPath(path = currentPath()) {
  return path === '/servicios' || path === '/services'
}

/** Language implied by the path, or null when the path does not pin one. */
export function langFromPath(path = currentPath()) {
  if (path === '/en' || path === '/services') return 'en'
  if (path === '/servicios') return 'es'
  return null
}

/** Canonical URL for a given page + language. */
export function canonicalFor(services, lang) {
  if (services) return `${SITE}${lang === 'en' ? '/services' : '/servicios'}`
  return lang === 'en' ? `${SITE}/en` : `${SITE}/`
}

/** href of the services page in the given language. */
export function servicesHref(lang) {
  return lang === 'en' ? '/services' : '/servicios'
}

/** href of the home page in the given language. */
export function homeHref(lang) {
  return lang === 'en' ? '/en' : '/'
}

/** Public path of the CV PDF for the given language. */
export function cvHref(lang) {
  return lang === 'en'
    ? '/cv/Martin-Segnini-CV-EN.pdf'
    : '/cv/Martin-Segnini-CV-ES.pdf'
}
