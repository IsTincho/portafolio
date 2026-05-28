import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import './Nav.css'

const links = [
  { id: 'about', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'contact', key: 'nav.contact' },
]

export default function Nav() {
  const { t, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <button className="nav__brand" onClick={() => go('top')} aria-label="Inicio">
          <span className="nav__mono">M.SEGNINI</span>
          <span className="nav__cursor" />
        </button>

        <nav className="nav__links" aria-label="Principal">
          {links.map((l) => (
            <button key={l.id} className="nav__link" onClick={() => go(l.id)}>
              {t(l.key)}
            </button>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="nav__lang" onClick={toggle} aria-label="Cambiar idioma">
            <span className={lang === 'es' ? 'on' : ''}>ES</span>
            <span className="nav__lang-sep">/</span>
            <span className={lang === 'en' ? 'on' : ''}>EN</span>
          </button>
          <a className="nav__cv" href="/Martin-Segnini-CV.pdf" download>
            <Download size={15} strokeWidth={2.2} />
            <span>{t('nav.cv')}</span>
          </a>
          <button className="nav__burger" onClick={() => setOpen((v) => !v)} aria-label="Menú">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {links.map((l, i) => (
              <button key={l.id} className="nav__drawer-link" onClick={() => go(l.id)}>
                <span className="nav__drawer-idx">0{i + 1}</span>
                {t(l.key)}
              </button>
            ))}
            <a className="nav__drawer-cv" href="/Martin-Segnini-CV.pdf" download>
              <Download size={16} /> {t('nav.cv')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
