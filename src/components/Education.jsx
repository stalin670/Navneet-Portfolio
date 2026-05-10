import { memo } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { education, recognitions } from '../data'

function EducationBase() {
  const main = education[0]
  return (
    <Section
      id="education"
      eyebrow="Education & Recognition"
      title={<>Trained in <em className="italic text-gold">history</em>. Wired for the present.</>}
    >
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Spotlight degree */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 relative overflow-hidden rounded-2xl border hairline bg-ink-2/40 p-7 lg:p-9"
        >
          <span aria-hidden className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
          <span className="relative inline-flex items-center gap-2 text-[10px] tracking-[0.32em] uppercase text-gold">
            <span className="w-6 h-px bg-gold/60" />
            Master's · {main.period}
          </span>
          <h3 className="relative mt-4 font-display text-3xl lg:text-5xl text-paper leading-[1.05] tracking-[-0.01em]">
            {main.school}
          </h3>
          <p className="relative mt-4 text-paper/75 text-lg">
            {main.degree}
          </p>
          {main.note && (
            <p className="relative mt-5 inline-block text-xs tracking-[0.22em] uppercase text-paper/65 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5">
              ✦ {main.note}
            </p>
          )}
          <div className="relative mt-7 grid grid-cols-3 gap-3 text-[13px] max-w-md">
            {[
              ['Field', 'History'],
              ['Honour', 'Gold Medalist'],
              ['Strand', 'Dev. Ethics'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border hairline px-3.5 py-3">
                <p className="text-[10px] tracking-[0.25em] uppercase text-paper/45">{k}</p>
                <p className="mt-1 text-paper">{v}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recognitions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 rounded-2xl border hairline bg-ink-2/40 p-6 lg:p-7"
        >
          <p className="text-xs tracking-[0.28em] uppercase text-gold">Recognitions</p>
          <ul className="mt-5 divide-y divide-paper/10">
            {recognitions.map((r) => (
              <li key={r.badge + r.org} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-display text-paper text-lg leading-tight">{r.badge}</p>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-paper/45 shrink-0">{r.org}</span>
                </div>
                <p className="mt-1.5 text-paper/55 text-[13px] leading-relaxed">{r.note}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}

export default memo(EducationBase)
