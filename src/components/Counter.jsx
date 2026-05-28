import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Animates the leading number inside a string like "89K+", "~95%", "48".
export default function Counter({ value, duration = 1400 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(value)

  const match = String(value).match(/^([^\d]*)(\d+)(.*)$/)

  useEffect(() => {
    if (!inView || !match) return
    const [, prefix, numStr, suffix] = match
    const target = parseInt(numStr, 10)
    if (target === 0) {
      setDisplay(value)
      return
    }
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(`${prefix}${Math.round(eased * target)}${suffix}`)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView]) // eslint-disable-line react-hooks/exhaustive-deps

  return <span ref={ref}>{match ? display : value}</span>
}
