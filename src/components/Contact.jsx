import { memo } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

function ContactBase() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-40 vignette grain overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 text-xs tracking-[0.32em] uppercase text-gold"
        >
          <span className="w-8 h-px bg-gold/60" />
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 sm:mt-6 font-display font-light tracking-[-0.02em] text-paper leading-[0.98] text-[clamp(2.25rem,9vw,7rem)]"
        >
          Let's <em className="italic text-gold">make</em>
          <br />
          something close.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 sm:mt-8 max-w-2xl text-paper/70 text-base sm:text-lg leading-relaxed"
        >
          Hiring sales leadership, building a founding GTM team, or just want a second
          pair of eyes on your pipeline? Drop a note — I read everything.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group rounded-2xl border hairline bg-ink-2/40 p-5 sm:p-6 lg:p-7 hover:border-gold/50 transition-colors"
          >
            <p className="text-xs tracking-[0.28em] uppercase text-paper/50">Email</p>
            <p className="mt-2 font-display text-lg sm:text-xl lg:text-2xl text-paper break-all group-hover:text-gold transition-colors">
              {profile.email}
            </p>
            <p className="mt-4 text-sm text-paper/55 flex items-center gap-2">
              Send a message
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border hairline bg-ink-2/40 p-5 sm:p-6 lg:p-7 hover:border-gold/50 transition-colors"
          >
            <p className="text-xs tracking-[0.28em] uppercase text-paper/50">LinkedIn</p>
            <p className="mt-2 font-display text-lg sm:text-xl lg:text-2xl text-paper group-hover:text-gold transition-colors">
              /in/singh-navneet
            </p>
            <p className="mt-4 text-sm text-paper/55 flex items-center gap-2">
              Connect on LinkedIn
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </p>
          </a>

          <a
            href={`tel:${profile.phoneRaw}`}
            className="group rounded-2xl border hairline bg-ink-2/40 p-5 sm:p-6 lg:p-7 hover:border-gold/50 transition-colors"
          >
            <p className="text-xs tracking-[0.28em] uppercase text-paper/50">Phone</p>
            <p className="mt-2 font-display text-lg sm:text-xl lg:text-2xl text-paper group-hover:text-gold transition-colors">
              {profile.phone}
            </p>
            <p className="mt-4 text-sm text-paper/55 flex items-center gap-2">
              Tap to call
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </p>
          </a>
        </motion.div>

        <motion.a
          href={`mailto:${profile.email}`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-4 rounded-full bg-gold text-ink font-medium hover:bg-gold-bright transition-colors"
        >
          Start the conversation
          <span aria-hidden>↗</span>
        </motion.a>
      </div>
    </section>
  )
}

export default memo(ContactBase)
