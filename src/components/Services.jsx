import { Building2, ShoppingBag, Globe, Check, ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import './Services.css'

export default function Services({ standalone = false }) {
  const { t } = useLang()

  const verticals = [
    {
      icon: Globe,
      entry: true,
      label: t('services.v0Label'),
      title: t('services.v0Title'),
      desc: t('services.v0Desc'),
      items: t('services.v0Items'),
      setup: t('services.v0Setup'),
      monthly: t('services.v0Monthly'),
    },
    {
      icon: Building2,
      label: t('services.v1Label'),
      title: t('services.v1Title'),
      desc: t('services.v1Desc'),
      items: t('services.v1Items'),
      setup: t('services.v1Setup'),
      monthly: t('services.v1Monthly'),
    },
    {
      icon: ShoppingBag,
      label: t('services.v2Label'),
      title: t('services.v2Title'),
      desc: t('services.v2Desc'),
      items: t('services.v2Items'),
      setup: t('services.v2Setup'),
      monthly: t('services.v2Monthly'),
    },
  ]

  const process = t('services.process')

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={`section services ${standalone ? 'services--standalone' : ''}`} id="services">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t('services.kicker')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="services__sub">{t('services.sub')}</p>
        </Reveal>

        <div className="services__grid">
          {verticals.map((v, i) => {
            const Icon = v.icon
            return (
              <Reveal i={i} className={`svc ${v.entry ? 'svc--entry' : ''}`} key={v.label}>
                {v.entry && <span className="svc__badge mono">{t('services.entryBadge')}</span>}
                <div className="svc__head">
                  <span className="svc__icon"><Icon size={20} strokeWidth={1.8} /></span>
                  <div>
                    <span className="svc__label mono">{v.label}</span>
                    <h3 className="svc__title">{v.title}</h3>
                  </div>
                </div>
                <p className="svc__desc">{v.desc}</p>
                <ul className="svc__items">
                  {Array.isArray(v.items) && v.items.map((it, j) => (
                    <li key={j}><Check size={14} strokeWidth={2.4} /><span>{it}</span></li>
                  ))}
                </ul>
                <div className="svc__price">
                  <span className="svc__price-label mono">{t('services.pricingLabel')}</span>
                  <div className="svc__price-rows">
                    <div className="svc__price-row">
                      <span className="svc__price-key mono">{t('services.pricingSetup')}</span>
                      <span className="svc__price-val">{v.setup}</span>
                    </div>
                    <div className="svc__price-row">
                      <span className="svc__price-key mono">{t('services.pricingMonthly')}</span>
                      <span className="svc__price-val">{v.monthly}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal i={2} className="services__note mono">
          {t('services.pricingNote')}
        </Reveal>

        <Reveal i={1} className="services__process">
          <span className="services__process-label mono">{t('services.processLabel')}</span>
          <ol>
            {Array.isArray(process) && process.map((step, i) => (
              <li key={i}>
                <span className="services__step-idx mono">0{i + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal i={2} className="services__cta">
          <p className="services__cta-text">{t('services.cta')}</p>
          <button className="btn btn--primary" onClick={() => go('contact')}>
            {t('services.ctaBtn')} <ArrowUpRight size={17} strokeWidth={2.2} />
          </button>
        </Reveal>
      </div>
    </section>
  )
}
