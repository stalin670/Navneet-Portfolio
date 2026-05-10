import { memo } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { mentorship } from '../data'

function MentorshipBase() {
  return (
    <Section
      id="mentorship"
      eyebrow="Mentorship"
      title={<>The room where reps become <em className="italic text-gold">closers</em>.</>}
      kicker={mentorship.intro}
    >
      <div className="grid md:grid-cols-2 gap-5 lg:gap-7">
        {mentorship.pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border hairline bg-ink-2/40 p-6 lg:p-7 hover:border-gold/40 transition-colors"
          >
            <span aria-hidden className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative">
              <span className="font-display text-gold text-sm">0{i + 1}</span>
              <h3 className="mt-2 font-display text-2xl lg:text-3xl text-paper leading-tight tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="mt-3 text-paper/70 text-[15px] leading-relaxed text-pretty">
                {p.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* moving marquee */}
      <div className="mt-16 overflow-hidden border-y hairline py-6 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee-track flex whitespace-nowrap gap-12 font-display text-paper/30 text-3xl md:text-5xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 items-center">
              {['Pipeline', 'Discovery', 'Negotiation', 'Closing', 'Coaching', 'Mindset', 'Retention'].map((w) => (
                <span key={w + k} className="flex items-center gap-12">
                  {w}
                  <span aria-hidden className="text-gold/40 text-2xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default memo(MentorshipBase)
