import { useLang } from '../i18n/LanguageContext.jsx'
import './Footer.css'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <button className="footer__brand" onClick={() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="footer__mono">ISTINCHO</span>
          <span className="footer__cursor" />
        </button>
        <p className="footer__built mono">{t('footer.built')}</p>
        <p className="footer__copy mono">© {year} IsTincho — {t('footer.rights')}</p>
      </div>
    </footer>
  )
}
