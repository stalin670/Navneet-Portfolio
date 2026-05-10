import { useEffect } from 'react'
import Lenis from 'lenis'

export function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches

    const lenis = new Lenis({
      duration: isTouch ? 0.9 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: isTouch ? 0.12 : 0.09,
      syncTouch: false,
      touchMultiplier: 1.6,
    })

    let raf
    const tick = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onAnchor = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href').slice(1)
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      const offset = window.innerWidth < 768 ? -64 : -72
      lenis.scrollTo(el, { offset, duration: isTouch ? 1.0 : 1.4 })
    }
    document.addEventListener('click', onAnchor)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      document.removeEventListener('click', onAnchor)
    }
  }, [])
}
