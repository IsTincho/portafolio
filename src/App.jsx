import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import AiSection from './components/AiSection.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Services from './components/Services.jsx'
import ServicesTeaser from './components/ServicesTeaser.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useLang } from './i18n/LanguageContext.jsx'
import { canonicalFor, homeHref, isServicesPath } from './routes.js'

const HOME_LINKS = [
  { id: 'about', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'ai', key: 'nav.ai' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'services', key: 'nav.services' },
  { id: 'contact', key: 'nav.contact' },
]

const SERVICES_LINKS = [{ id: 'contact', key: 'nav.contact' }]

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/** Keeps title, description and canonical in sync with page + language. */
function useDocumentMeta(services, lang, t) {
  useEffect(() => {
    const title = t(services ? 'seo.servicesTitle' : 'seo.homeTitle')
    const desc = t(services ? 'seo.servicesDesc' : 'seo.homeDesc')
    const canonical = canonicalFor(services, lang)

    document.title = title
    setMeta('meta[name="description"]', 'content', desc)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', desc)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', desc)
    setMeta('link[rel="canonical"]', 'href', canonical)
    setMeta('meta[property="og:url"]', 'content', canonical)
  }, [services, lang, t])
}

function ServicesPage() {
  const { t, lang } = useLang()
  return (
    <>
      <Nav links={SERVICES_LINKS} backHref={homeHref(lang)} backLabel={t('services.backHome')} />
      <main>
        <Services standalone />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function HomePage() {
  return (
    <>
      <Nav links={HOME_LINKS} />
      <main>
        <Hero />
        <About />
        <Skills />
        <AiSection />
        <Projects />
        <Experience />
        <ServicesTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const { lang, t } = useLang()
  const services = isServicesPath()
  useDocumentMeta(services, lang, t)

  return services ? <ServicesPage /> : <HomePage />
}
