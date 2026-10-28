import React from 'react'
import ReactDOM from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      {/* "user": with OS reduced motion on, framer keeps fades and drops movement */}
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </LanguageProvider>
  </React.StrictMode>,
)
