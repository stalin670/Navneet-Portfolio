import { memo } from 'react'
import { motion } from 'framer-motion'

function SectionBase({ id, eyebrow, title, kicker, children, align = 'left' }) {
  return (
    <section id={id} className="relative py-20 sm:py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`mb-10 sm:mb-14 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}
        >
          <p className="flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.32em] uppercase text-gold">
            <span className="w-8 h-px bg-gold/60" />
            {eyebrow}
          </p>
          <h2 className="mt-4 sm:mt-5 font-display font-light tracking-[-0.02em] text-paper text-[clamp(1.9rem,6.5vw,4.5rem)] leading-[1.05]">
            {title}
          </h2>
          {kicker && (
            <p className="mt-4 sm:mt-5 text-paper/65 text-base sm:text-lg leading-relaxed text-pretty">
              {kicker}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}

export default memo(SectionBase)
