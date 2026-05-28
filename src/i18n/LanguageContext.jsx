import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { strings } from './translations.js'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'ms-lang'

function getInitialLang() {
  if (typeof window === 'undefined') return 'es'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'es' || saved === 'en') return saved
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = useCallback(() => setLang((l) => (l === 'es' ? 'en' : 'es')), [])

  // t('hero.title') -> string for current lang
  const t = useCallback(
    (path) => {
      const parts = path.split('.')
      let node = strings[lang]
      for (const p of parts) {
        node = node?.[p]
        if (node === undefined) return path
      }
      return node
    },
    [lang],
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
