import { memo } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { projects } from '../data'

function Card({ p, i }) {
  return (
    <motion.a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative block overflow-hidden rounded-2xl border hairline bg-ink-2/40 p-5 sm:p-6 lg:p-8 hover:border-gold/45 transition-colors"
    >
      <span
        aria-hidden
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />

      <div className="relative flex flex-col h-full">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold">
            {p.accent}
          </span>
          <span className="text-[10px] tracking-[0.22em] uppercase text-paper/45">
            {p.period}
          </span>
        </div>

        <h3 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl text-paper leading-tight tracking-[-0.01em]">
          {p.name}
        </h3>
        <p className="mt-1 text-paper/55 text-sm">{p.role}</p>

        <p className="mt-4 text-paper/72 text-[14px] sm:text-[15px] leading-relaxed text-pretty">
          {p.blurb}
        </p>

        {p.stats && (
          <ul className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
            {p.stats.map((s) => (
              <li key={s.label} className="rounded-xl border hairline px-3 py-2.5">
                <p className="font-display text-paper text-base sm:text-lg tabular-nums">{s.value}</p>
                <p className="mt-0.5 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-paper/50">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        )}

        {p.verticals && (
          <div className="mt-5">
            <p className="text-[10px] tracking-[0.28em] uppercase text-paper/45">Verticals</p>
            <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5 text-[13px] text-paper/80">
              {p.verticals.map((v, i) => (
                <li key={v} className="flex items-center gap-3">
                  {i > 0 && <span aria-hidden className="text-gold/40 text-xs">·</span>}
                  {v}
                </li>
              ))}
            </ul>
          </div>
        )}

        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li
              key={t}
              className="px-3 py-1 text-[11px] sm:text-xs rounded-full border hairline text-paper/80"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
          {p.cta}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
        </div>
      </div>
    </motion.a>
  )
}

function ProjectsBase() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Side bets that <em className="italic text-gold">earn</em> their stripes.</>}
      kicker="Independent ventures and client engagements that sit outside the day job — built to ship, not to decorate a deck."
    >
      <div className="grid md:grid-cols-2 gap-5 lg:gap-7">
        {projects.map((p, i) => (
          <Card key={p.name} p={p} i={i} />
        ))}
      </div>
    </Section>
  )
}

export default memo(ProjectsBase)
