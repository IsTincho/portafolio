import { Sparkles, Bot, Check } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import './AiSection.css'

export default function AiSection() {
  const { t } = useLang()
  const p1 = t('ai.p1')
  const p2 = t('ai.p2')
  const tools = t('ai.tools')

  const pillars = [
    { icon: Sparkles, label: t('ai.p1Label'), title: t('ai.p1Title'), points: p1 },
    { icon: Bot, label: t('ai.p2Label'), title: t('ai.p2Title'), points: p2 },
  ]

  return (
    <section className="section ai" id="ai">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t('ai.kicker')}</span>
          <h2 className="section-title">{t('ai.title')}</h2>
          <p className="ai__sub">{t('ai.sub')}</p>
        </Reveal>

        <div className="ai__grid">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal i={i} className="ai__pillar" key={i}>
                <div className="ai__pillar-head">
                  <span className="ai__pillar-icon"><Icon size={18} strokeWidth={2} /></span>
                  <span className="ai__pillar-label mono">{p.label}</span>
                </div>
                <h3 className="ai__pillar-title">{p.title}</h3>
                <ul className="ai__points">
                  {Array.isArray(p.points) && p.points.map((pt, j) => (
                    <li key={j}><Check size={15} strokeWidth={2.4} /><span>{pt}</span></li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>

        <Reveal i={1} className="ai__tools">
          <span className="ai__tools-label mono">{t('ai.toolsLabel')}</span>
          <ul>
            {Array.isArray(tools) && tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
