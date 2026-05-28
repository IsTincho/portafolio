import { GraduationCap } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { experience, education } from '../data/experience.js'
import Reveal from './Reveal.jsx'
import './Experience.css'

const loc = (v, lang) => (typeof v === 'string' ? v : v[lang])

export default function Experience() {
  const { t, lang } = useLang()

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t('experience.kicker')}</span>
          <h2 className="section-title">{t('experience.title')}</h2>
        </Reveal>

        <div className="exp__grid">
          <ol className="exp__timeline">
            {experience.map((e, i) => (
              <Reveal as="li" i={i} className={`expitem ${e.current ? 'expitem--current' : ''}`} key={e.id}>
                <div className="expitem__node" />
                <span className="expitem__period mono">{loc(e.period, lang)}</span>
                <div className="expitem__body">
                  <h3 className="expitem__role">
                    {loc(e.role, lang)}
                    <span className="expitem__org">@ {loc(e.org, lang)}</span>
                  </h3>
                  <span className="expitem__place mono">{loc(e.place, lang)}</span>
                  <ul className="expitem__points">
                    {e.points[lang].map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal i={1} className="exp__edu">
            <span className="exp__edu-label"><GraduationCap size={16} /> {t('experience.eduTitle')}</span>
            <ul>
              {education.map((ed) => (
                <li key={ed.id}>
                  <span className="exp__edu-period mono">{ed.period}</span>
                  <span className="exp__edu-title">{loc(ed.title, lang)}</span>
                  <span className="exp__edu-org">{loc(ed.org, lang)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
