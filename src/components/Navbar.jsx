import { memo, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sections } from '../data'
import { useScrollSpy } from '../hooks/useScrollSpy'

function NavbarBase() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(sections.map((s) => s.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    return () => document.body.classList.remove('no-scroll')
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (e) => { if (e.matches) setOpen(false) }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-ink/70 border-b hairline'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="relative w-11 h-11 rounded-full overflow-hidden ring-1 ring-gold/50 shadow-[0_0_0_3px_rgba(11,11,15,1)]">
            <img src="/navneet.jpeg" alt="" width="44" height="44" loading="eager" decoding="async" className="w-full h-full object-cover object-[center_15%]" />
          </span>
          <span className="font-display text-paper text-lg tracking-tight">
            Navneet<span className="text-gold">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {sections.map((s) => {
            const isActive = active === s.id
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`relative px-3.5 py-2 rounded-full transition-colors ${
                    isActive ? 'text-paper' : 'text-paper/55 hover:text-paper'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-paper/[0.06] border border-gold/25"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{s.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-gold text-ink font-medium hover:bg-gold-bright transition-colors"
        >
          Let's talk
          <span aria-hidden>→</span>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="md:hidden w-10 h-10 grid place-items-center rounded-full border hairline"
        >
          <span className="relative block w-4 h-3">
            <span className={`absolute inset-x-0 top-0 h-px bg-paper transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`absolute inset-x-0 top-1.5 h-px bg-paper transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute inset-x-0 top-3 h-px bg-paper transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t hairline bg-ink/95 backdrop-blur-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <ul className="px-5 sm:px-6 py-4 flex flex-col gap-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3 border-b hairline ${
                      active === s.id ? 'text-gold' : 'text-paper/80'
                    }`}
                  >
                    <span className="font-display text-xl">{s.label}</span>
                    <span className="text-xs tracking-[0.2em] text-paper/40">0{sections.indexOf(s) + 1}</span>
                  </a>
                </li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 text-center py-3 rounded-full bg-gold text-ink font-medium"
              >
                Let's talk →
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default memo(NavbarBase)
