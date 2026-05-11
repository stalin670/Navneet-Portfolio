import { memo } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { profile, skills, languages, strengths } from '../data'

function AboutBase() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Seven years on the floor and still. <em className="italic text-gold">obsessed</em> with the close.</>}
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-paper/80 text-lg sm:text-xl lg:text-2xl leading-[1.5] font-display font-light text-balance"
          >
            {profile.bio}
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 pl-6 border-l-2 border-gold/60"
          >
            <p className="font-display italic text-paper/85 text-xl sm:text-2xl lg:text-3xl leading-snug">
              "{profile.tagline}"
            </p>
          </motion.blockquote>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-2xl border hairline bg-ink-2/40 p-5 lg:p-6"
          >
            <p className="text-xs tracking-[0.28em] uppercase text-paper/50">Skills & Strengths</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.02 * i }}
                  className="px-3.5 py-1.5 text-sm rounded-full border hairline text-paper/85 hover:border-gold/40 hover:text-paper transition-colors cursor-default"
                >
                  {s}
                </motion.li>
              ))}
            </ul>

            <div className="mt-7 pt-5 border-t hairline grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-paper/50 text-xs tracking-[0.2em] uppercase">Based</p>
                <p className="mt-1 text-paper">{profile.location}</p>
              </div>
              <div>
                <p className="text-paper/50 text-xs tracking-[0.2em] uppercase">Currently</p>
                <p className="mt-1 text-paper">Makunai Global · Noida</p>
              </div>
            </div>
          </motion.div>

          {/* Strengths + Languages strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 grid gap-5"
          >
            <div className="rounded-2xl border hairline bg-ink-2/40 p-5 lg:p-6">
              <p className="text-xs tracking-[0.28em] uppercase text-paper/50">Strengths</p>
              <ul className="mt-4 space-y-3">
                {strengths.map((s) => (
                  <li key={s.title} className="flex gap-3">
                    <span className="mt-1.5 text-gold text-xs">✦</span>
                    <div>
                      <p className="text-paper font-medium">{s.title}</p>
                      <p className="text-paper/65 text-sm leading-relaxed">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border hairline bg-ink-2/40 p-5 lg:p-6">
              <p className="text-xs tracking-[0.28em] uppercase text-paper/50">Languages</p>
              <ul className="mt-4 space-y-3">
                {languages.map((l) => (
                  <li key={l.name}>
                    <div className="flex justify-between text-sm">
                      <span className="text-paper">{l.name}</span>
                      <span className="text-paper/55">{l.level}</span>
                    </div>
                    <div className="mt-1.5 h-[3px] rounded-full bg-paper/10 overflow-hidden">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="block h-full bg-gold"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default memo(AboutBase)
