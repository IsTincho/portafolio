import { useLang } from '../i18n/LanguageContext.jsx'
import { skillGroups } from '../data/skills.js'
import Reveal from './Reveal.jsx'
import './Skills.css'

export default function Skills() {
  const { t, lang } = useLang()

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <Reveal className="section-head skills__head">
          <div>
            <span className="kicker">{t('skills.kicker')}</span>
            <h2 className="section-title">{t('skills.title')}</h2>
          </div>
          <p className="skills__sub">{t('skills.sub')}</p>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((g, i) => (
            <Reveal i={i % 3} className="skillcard" key={g.id}>
              <div className="skillcard__top">
                <span className="skillcard__idx">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="skillcard__label">{g.label[lang]}</h3>
              </div>
              <ul className="skillcard__chips">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
