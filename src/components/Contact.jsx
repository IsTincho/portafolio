import { useState } from 'react'
import { Mail, Github, Linkedin, Download, ArrowUpRight, Send, Check, AlertCircle } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { requestCv } from '../requestCv.js'
import Reveal from './Reveal.jsx'
import './Contact.css'

const EMAIL = 'tinchosegnini@gmail.com'
const GITHUB = 'https://github.com/IsTincho'
const LINKEDIN = 'https://www.linkedin.com/in/martin-segnini/'

// Set VITE_WEB3FORMS_KEY to enable the form. Without it the section falls back
// to the plain mailto links, so a missing key never leaves a dead form on screen.
const FORM_KEY = import.meta.env.VITE_WEB3FORMS_KEY
const FORM_ENDPOINT = 'https://api.web3forms.com/submit'

function ContactForm() {
  const { t, lang } = useLang()
  const [state, setState] = useState('idle') // idle | sending | ok | error

  const onSubmit = async (e) => {
    e.preventDefault()
    if (state === 'sending') return
    setState('sending')

    const data = Object.fromEntries(new FormData(e.target).entries())
    if (data.botcheck) return // honeypot tripped: silently drop

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: FORM_KEY,
          subject: `[${data.kind}] ${data.name} — tincho.pages.dev`,
          from_name: data.name,
          replyto: data.email,
          name: data.name,
          email: data.email,
          kind: data.kind,
          message: data.message,
          lang,
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.message || 'send failed')
      setState('ok')
      e.target.reset()
    } catch {
      setState('error')
    }
  }

  if (state === 'ok') {
    return (
      <p className="cform__result cform__result--ok">
        <Check size={17} strokeWidth={2.4} /> {t('contact.formOk')}
      </p>
    )
  }

  return (
    <form className="cform" onSubmit={onSubmit} noValidate={false}>
      <input type="checkbox" name="botcheck" className="cform__hp" tabIndex={-1} autoComplete="off" />

      <div className="cform__row">
        <label className="cform__field">
          <span className="cform__label mono">{t('contact.formName')}</span>
          <input name="name" type="text" required maxLength={80} autoComplete="name" />
        </label>
        <label className="cform__field">
          <span className="cform__label mono">{t('contact.formEmail')}</span>
          <input name="email" type="email" required maxLength={120} autoComplete="email" />
        </label>
      </div>

      <label className="cform__field">
        <span className="cform__label mono">{t('contact.formKind')}</span>
        <select name="kind" defaultValue={t('contact.formKindProject')}>
          <option>{t('contact.formKindProject')}</option>
          <option>{t('contact.formKindJob')}</option>
        </select>
      </label>

      <label className="cform__field">
        <span className="cform__label mono">{t('contact.formMessage')}</span>
        <textarea name="message" rows={5} required maxLength={2000} />
      </label>

      <div className="cform__actions">
        <button className="btn btn--primary" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? t('contact.formSending') : t('contact.formSend')}
          <Send size={16} strokeWidth={2.2} />
        </button>
        <span className="cform__alt mono">
          {t('contact.formOr')} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </span>
      </div>

      {state === 'error' && (
        <p className="cform__result cform__result--err">
          <AlertCircle size={16} strokeWidth={2.2} /> {t('contact.formErr')}
        </p>
      )}
    </form>
  )
}

export default function Contact() {
  const { t } = useLang()

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact__inner">
          <span className="kicker">{t('contact.kicker')}</span>
          <h2 className="contact__title">{t('contact.title')}</h2>
          <p className="contact__sub">{t('contact.sub')}</p>

          {FORM_KEY ? (
            <ContactForm />
          ) : (
            <>
              <a className="contact__email" href={`mailto:${EMAIL}`}>
                <Mail size={26} strokeWidth={1.8} />
                <span>{EMAIL}</span>
                <ArrowUpRight className="contact__email-arrow" size={24} />
              </a>

              <div className="contact__actions">
                <a className="btn btn--primary" href={`mailto:${EMAIL}`}>
                  {t('contact.cta')} <Mail size={16} />
                </a>
              </div>
            </>
          )}

          <div className="contact__actions contact__actions--secondary">
            <button className="btn btn--ghost" onClick={() => requestCv(t('contact.formKindJob'))}>
              {t('contact.cvCta')} <Download size={16} />
            </button>
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
