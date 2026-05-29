import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Lock } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { projects } from '../data/projects.js'
import Counter from './Counter.jsx'
import Reveal from './Reveal.jsx'
import './Projects.css'

const shotUrl = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&waitUntil=networkidle2&waitForTimeout=4000&embed=screenshot.url`

function ProjectPreview({ p }) {
  const { t } = useLang()
  const [status, setStatus] = useState('loading') // loading | ok | error

  return (
    <a
      className={`pcard__preview is-${status}`}
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t('projects.visit')}: ${p.name}`}
    >
      <span className="pcard__chrome">
        <span className="pcard__chrome-dots"><i /><i /><i /></span>
        <span className="pcard__chrome-url"><Lock size={11} /> {p.domain}</span>
        <ArrowUpRight size={15} className="pcard__chrome-go" />
      </span>
      <span className="pcard__shot">
        <span className="pcard__shot-ph mono">
          {status === 'error' ? t('projects.previewUnavailable') : t('projects.loadingPreview')}
        </span>
        <img
          src={shotUrl(p.url)}
          alt={`${p.name} — preview`}
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus('ok')}
          onError={() => setStatus('error')}
        />
      </span>
    </a>
  )
}

function ProjectCard({ p }) {
  const { t, lang } = useLang()

  return (
    <motion.article
      className={`pcard ${p.flagship ? 'pcard--flagship' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="pcard__bar">
        <span className="pcard__index">{p.index}</span>
        <span className="pcard__rule" />
        <h3 className="pcard__name">{p.name}</h3>
        {p.flagship && <span className="pcard__flag">flagship</span>}
        <span className="pcard__year mono">{p.year}</span>
      </div>

      {p.url && <ProjectPreview p={p} />}

      <div className="pcard__head">
        <p className="pcard__tagline">{p.tagline[lang]}</p>
        <div className="pcard__meta">
          <div className="pcard__metarow">
            <span className="pcard__metakey">{t('projects.role')}</span>
            <span className="pcard__metaval">{p.role[lang]}</span>
          </div>
          <div className="pcard__metarow">
            <span className="pcard__metakey">{t('projects.status')}</span>
            <span className="pcard__metaval pcard__statusval">
              <span className="pcard__statusdot" />{p.status[lang]}
            </span>
          </div>
        </div>
      </div>

      <div className="pcard__metrics">
        {p.metrics.map((m) => (
          <div className="pmetric" key={m.label.en}>
            <span className="pmetric__value"><Counter value={m.value} /></span>
            <span className="pmetric__label">{m.label[lang]}</span>
          </div>
        ))}
      </div>

      <ul className="pcard__highlights">
        {p.highlights[lang].map((h, i) => (
          <li key={i}><Check size={15} className="pcard__check" strokeWidth={2.4} /><span>{h}</span></li>
        ))}
      </ul>

      <div className="pcard__footer">
        <ul className="pcard__stack">
          {p.stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
        {p.url ? (
          <a className="pcard__link" href={p.url} target="_blank" rel="noopener noreferrer">
            {t('projects.visit')} <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>
        ) : (
          <span className="pcard__domain mono">{p.domain}</span>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const { t } = useLang()
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t('projects.kicker')}</span>
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="projects__sub">{t('projects.sub')}</p>
        </Reveal>

        <div className="projects__list">
          {projects.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}
