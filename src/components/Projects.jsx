import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Lock, BookOpen, X } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { projects, moreProjects } from '../data/projects.js'
import Counter from './Counter.jsx'
import Reveal from './Reveal.jsx'
import './Projects.css'

const shotUrl = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}` +
  `&screenshot=true&meta=false&waitUntil=networkidle2&waitForTimeout=4000` +
  `&viewport.width=1280&viewport.height=800&viewport.deviceScaleFactor=1` +
  `&embed=screenshot.url`

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

function ProjectCard({ p, onOpenCase }) {
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
        <div className="pcard__actions">
          {p.caseStudy && (
            <button className="pcard__case" onClick={() => onOpenCase(p)}>
              <BookOpen size={15} strokeWidth={2.2} /> {t('projects.caseStudy')}
            </button>
          )}
          {p.url ? (
            <a className="pcard__link" href={p.url} target="_blank" rel="noopener noreferrer">
              {t('projects.visit')} <ArrowUpRight size={16} strokeWidth={2.2} />
            </a>
          ) : (
            p.domain && <span className="pcard__domain mono">{p.domain}</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function ProjectModal({ project, onClose }) {
  const { t, lang } = useLang()

  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="pmodal__overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="pmodal"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pmodal__bar">
              <span className="pmodal__index mono">{project.index}</span>
              <h3 className="pmodal__name">{project.name}</h3>
              {project.flagship && <span className="pcard__flag">flagship</span>}
              <button className="pmodal__close" onClick={onClose} aria-label={t('projects.close')}>
                <X size={20} />
              </button>
            </div>

            <div className="pmodal__body">
              <p className="pmodal__overview">{project.caseStudy[lang].overview}</p>

              <ul className="pmodal__stack">
                {project.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>

              <div className="pmodal__sections">
                {project.caseStudy[lang].sections.map((s, i) => (
                  <div className="pmodal__sec" key={i}>
                    <span className="pmodal__sec-idx mono">0{i + 1}</span>
                    <div className="pmodal__sec-content">
                      <h4>{s.title}</h4>
                      <p>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {project.url && (
                <a className="btn btn--primary pmodal__visit" href={project.url} target="_blank" rel="noopener noreferrer">
                  {t('projects.visit')} <ArrowUpRight size={16} strokeWidth={2.2} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MoreProjects() {
  const { t, lang } = useLang()
  return (
    <div className="more">
      <Reveal className="more__head">
        <h3 className="more__title">{t('projects.moreTitle')}</h3>
        <span className="more__sub mono">{t('projects.moreSub')}</span>
      </Reveal>
      <div className="more__grid">
        {moreProjects.map((m, i) => (
          <Reveal i={i % 3} className="mcard" key={m.id}>
            <div className="mcard__top">
              <span className="mcard__tag mono">{m.tag}</span>
              <span className="mcard__year mono">{m.year}</span>
            </div>
            <h4 className="mcard__name">{m.name}</h4>
            <p className="mcard__desc">{m.desc[lang]}</p>
            <ul className="mcard__stack">
              {m.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useLang()
  const [openProject, setOpenProject] = useState(null)

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">{t('projects.kicker')}</span>
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="projects__sub">{t('projects.sub')}</p>
        </Reveal>

        <div className="projects__list">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} onOpenCase={setOpenProject} />
          ))}
        </div>

        <MoreProjects />
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  )
}
