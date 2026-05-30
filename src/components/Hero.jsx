import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Counter from './Counter.jsx'
import './Hero.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const stats = [
  { value: '3', key: 'stats.production' },
  { value: '89K+', key: 'stats.loc' },
  { value: '8', key: 'stats.integrations' },
  { value: '4', key: 'stats.years' },
]

export default function Hero() {
  const { t } = useLang()
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <motion.div className="hero__main" variants={container} initial="hidden" animate="show">
          <motion.div className="hero__status" variants={item}>
            <span className="hero__dot" />
            {t('hero.status')}
          </motion.div>

          <motion.p className="hero__role kicker" variants={item}>
            {t('hero.role')}
          </motion.p>

          <h1 className="hero__title">
            <motion.span variants={item} className="hero__line">{t('hero.titleA')}</motion.span>
            <motion.span variants={item} className="hero__line">{t('hero.titleB')}</motion.span>
            <motion.span variants={item} className="hero__line hero__line--accent">{t('hero.titleC')}</motion.span>
          </h1>

          <motion.p className="hero__lede" variants={item}>{t('hero.lede')}</motion.p>

          <motion.div className="hero__cta" variants={item}>
            <button className="btn btn--primary" onClick={() => go('projects')}>
              {t('hero.ctaProjects')} <ArrowDown size={17} strokeWidth={2.2} />
            </button>
            <button className="btn btn--ghost" onClick={() => go('contact')}>
              {t('hero.ctaContact')} <ArrowUpRight size={17} strokeWidth={2.2} />
            </button>
          </motion.div>
        </motion.div>

        <motion.aside
          className="hero__spec"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="spec__bar">
            <span className="spec__dotrow"><i /><i /><i /></span>
            <span className="spec__path">~/istincho</span>
          </div>
          <dl className="spec__body">
            <div><dt>ROLE</dt><dd>Full-Stack Dev</dd></div>
            <div><dt>BASE</dt><dd className="spec__loc"><MapPin size={12} /> {t('hero.loc')}</dd></div>
            <div><dt>CORE</dt><dd>React · Node · Mongo</dd></div>
            <div><dt>EDU</dt><dd>UTN FRRO</dd></div>
            <div><dt>STATUS</dt><dd className="spec__ok"><span className="hero__dot" /> available</dd></div>
          </dl>
        </motion.aside>
      </div>

      <motion.div
        className="hero__stats container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {stats.map((s, i) => (
          <div className="hstat" key={s.key}>
            <span className="hstat__idx">[{String(i + 1).padStart(2, '0')}]</span>
            <span className="hstat__value"><Counter value={s.value} /></span>
            <span className="hstat__label">{t(s.key)}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
