import { Radio } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import './About.css'

export default function About() {
  const { t, lang } = useLang()
  const focus = t('about.focus')

  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t('about.kicker')}</span>
          <h2 className="section-title">{t('about.title')}</h2>
        </Reveal>

        <div className="about__grid">
          <div className="about__text">
            <Reveal as="p" i={0} className="about__p about__p--lead">{t('about.p1')}</Reveal>
            <Reveal as="p" i={1} className="about__p">{t('about.p2')}</Reveal>
            <Reveal as="p" i={2} className="about__p">{t('about.p3')}</Reveal>
            <Reveal i={3} className="about__beyond">
              <span className="about__beyond-label mono"><Radio size={13} /> {t('about.beyondLabel')}</span>
              <p>{t('about.beyond')}</p>
            </Reveal>
          </div>

          <Reveal i={1} className="about__focus">
            <span className="about__focus-label mono">{t('about.focusLabel')}</span>
            <ul>
              {Array.isArray(focus) && focus.map((f, i) => (
                <li key={i}>
                  <span className="about__focus-idx">0{i + 1}</span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
