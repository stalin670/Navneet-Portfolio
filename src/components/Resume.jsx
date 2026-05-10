import { memo } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { profile, certifications } from '../data'

function ResumeBase() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title={<>The full <em className="italic text-gold">dossier</em>.</>}
      kicker="Six years of revenue work, training programs, and pipelines — distilled into one page. Read it online or take a copy with you."
    >
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-7">
        {/* Resume CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 relative overflow-hidden rounded-2xl border hairline bg-ink-2/40 p-5 sm:p-6 lg:p-8"
        >
          <span aria-hidden className="absolute -top-32 -right-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative flex flex-col h-full">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.28em] uppercase text-gold">PDF · 1 page</p>
                <h3 className="mt-2 font-display text-xl sm:text-2xl lg:text-3xl text-paper leading-tight">
                  Navneet Singh — Sales & Marketing Specialist
                </h3>
                <p className="mt-2 text-paper/65 text-[14px] sm:text-[15px] leading-relaxed max-w-md">
                  Senior Manager, six years across SaaS, FinTech, EdTech and premium retail.
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-end shrink-0 text-right">
                <span className="text-[10px] tracking-[0.3em] uppercase text-paper/45">Updated</span>
                <span className="font-display text-paper text-lg">2026</span>
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-3 gap-2 sm:gap-3 text-[13px]">
              {[
                ['6+', 'years'],
                ['4', 'companies'],
                ['Gold', 'medalist'],
              ].map(([v, l]) => (
                <li key={l} className="rounded-xl border hairline px-3 sm:px-4 py-3">
                  <p className="font-display text-paper text-lg sm:text-xl">{v}</p>
                  <p className="text-paper/55 uppercase tracking-[0.18em] text-[9px] sm:text-[10px] mt-0.5">{l}</p>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold text-ink font-medium hover:bg-gold-bright transition-colors text-sm"
              >
                View resume
                <span className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border hairline text-paper/85 hover:text-paper hover:border-gold/40 transition-colors text-sm"
              >
                Download PDF
                <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 rounded-2xl border hairline bg-ink-2/40 p-5 sm:p-6 lg:p-7"
        >
          <p className="text-xs tracking-[0.28em] uppercase text-gold">Certifications</p>
          <ul className="mt-5 divide-y divide-paper/10">
            {certifications.map((c) => (
              <li key={c.name} className="py-4 first:pt-0 last:pb-0">
                <p className="font-display text-paper text-lg leading-tight">{c.name}</p>
                <p className="text-paper/60 text-sm mt-0.5">{c.issuer}</p>
                <p className="text-paper/45 text-[13px] mt-1.5 leading-relaxed">{c.note}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}

export default memo(ResumeBase)
