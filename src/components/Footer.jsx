import { useLang } from '../i18n/LanguageContext.jsx'
import { homeHref } from '../routes.js'
import './Footer.css'

export default function Footer() {
  const { t, lang } = useLang()
  const year = new Date().getFullYear()

  // #top only exists on the home page; elsewhere the brand goes home instead.
  const toTop = () => {
    const el = document.getElementById('top')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.location.href = homeHref(lang)
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <button className="footer__brand" onClick={toTop}>
          <span className="footer__mono">ISTINCHO</span>
          <span className="footer__cursor" />
        </button>
        <p className="footer__built mono">{t('footer.built')}</p>
        <p className="footer__copy mono">© {year} IsTincho — {t('footer.rights')}</p>
      </div>
    </footer>
  )
}
