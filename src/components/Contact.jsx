import { Mail, Github, Linkedin, Download, ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import './Contact.css'

const EMAIL = 'tinchosegnini@gmail.com'
const GITHUB = 'https://github.com/IsTincho'
const LINKEDIN = 'https://www.linkedin.com/in/martin-segnini/'

export default function Contact() {
  const { t } = useLang()

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact__inner">
          <span className="kicker">{t('contact.kicker')}</span>
          <h2 className="contact__title">{t('contact.title')}</h2>
          <p className="contact__sub">{t('contact.sub')}</p>

          <a className="contact__email" href={`mailto:${EMAIL}`}>
            <Mail size={26} strokeWidth={1.8} />
            <span>{EMAIL}</span>
            <ArrowUpRight className="contact__email-arrow" size={24} />
          </a>

          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${EMAIL}`}>
              {t('contact.cta')} <Mail size={16} />
            </a>
            <a className="btn btn--ghost" href="/Martin-Segnini-CV.pdf" download>
              {t('contact.cvCta')} <Download size={16} />
            </a>
          </div>

          <div className="contact__socials">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="contact__social">
              <Github size={17} /> GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact__social">
              <Linkedin size={17} /> LinkedIn
            </a>
          </div>

          <p className="contact__avail mono">{t('contact.availability')}</p>
        </Reveal>
      </div>
    </section>
  )
}
