import { memo, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function CountUpBase({ value, duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState(value)

  // parse numeric portion + suffix/prefix
  const match = String(value).match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/)
  const prefix = match?.[1] ?? ''
  const num = match ? parseFloat(match[2]) : null
  const suffix = match?.[3] ?? ''

  useEffect(() => {
    if (!inView || num == null) return
    let raf
    const start = performance.now()
    const ease = (t) => 1 - Math.pow(1 - t, 3)
    const tick = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000))
      const v = num * ease(t)
      const formatted =
        num % 1 === 0 ? Math.round(v) : v.toFixed(1)
      setDisplay(`${prefix}${formatted}${suffix}`)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    setDisplay(`${prefix}0${suffix}`)
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, num, prefix, suffix, duration])

  return <span ref={ref}>{display}</span>
}

export default memo(CountUpBase)
