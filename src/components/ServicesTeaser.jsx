import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { servicesHref } from '../routes.js'
import Reveal from './Reveal.jsx'
import './ServicesTeaser.css'

export default function ServicesTeaser() {
  const { t, lang } = useLang()

  return (
    <section className="section teaser" id="services">
      <div className="container">
        <Reveal className="teaser__box">
          <div className="teaser__text">
            <span className="kicker">{t('teaser.kicker')}</span>
            <h2 className="teaser__title">{t('teaser.title')}</h2>
            <p className="teaser__body">{t('teaser.body')}</p>
          </div>
          <a className="btn btn--primary teaser__cta" href={servicesHref(lang)}>
            {t('teaser.cta')} <ArrowUpRight size={17} strokeWidth={2.2} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
