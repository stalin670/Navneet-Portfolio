import { memo } from 'react'
import { motion } from 'framer-motion'
import { profile, stats } from '../data'
import CountUp from './CountUp'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

function HeroBase() {
  return (
    <section id="home" className="relative min-h-[100svh] vignette grain overflow-hidden">
      {/* decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #F5F0E8 1px, transparent 1px), linear-gradient(to bottom, #F5F0E8 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-end">
          {/* Left — type */}
          <div className="lg:col-span-7 relative">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-paper/60"
            >
              <span className="w-10 h-px bg-gold" />
              {profile.location} · Available worldwide
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-6 font-display font-light leading-[0.92] tracking-[-0.02em] text-paper text-[clamp(2.75rem,12vw,8.5rem)]"
            >
              Navneet
              <br />
              <span className="italic font-normal text-gold">Singh</span><span className="text-gold">.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-7 max-w-xl text-paper/70 text-base sm:text-lg leading-relaxed text-pretty"
            >
              {profile.tagline2}. Currently <span className="text-paper">Manager at Makunai Global, Noida</span> —
              previously American Express, BYJU'S and Apple.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3.5 rounded-full bg-gold text-ink font-medium hover:bg-gold-bright transition-colors"
              >
                Book a mentorship call
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3.5 rounded-full border hairline text-paper/85 hover:text-paper hover:border-gold/40 transition-colors"
              >
                See journey
              </a>
            </motion.div>
          </div>

          {/* Right — portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:ml-auto">
              {/* layered frames */}
              <div className="absolute -inset-3 border hairline rounded-[2rem] rotate-[1.5deg]" />
              <div className="absolute -inset-1 border border-gold/30 rounded-[1.75rem] -rotate-[1deg]" />

              <div className="relative w-full h-full overflow-hidden rounded-[1.5rem] ring-gold group">
                <img
                  src={profile.photo}
                  alt="Navneet Singh"
                  width="640"
                  height="800"
                  fetchpriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />

                {/* live dot */}
                <span className="absolute top-4 right-4 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* stats strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 border-y hairline divide-x divide-paper/10"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 py-5 sm:px-5 sm:py-6 ${i >= 2 ? 'border-t hairline md:border-t-0' : ''}`}
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-paper tabular-nums">
                <CountUp value={s.value} />
              </p>
              <p className="mt-1 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-paper/55">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* trusted by strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-5% 0px' }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-px bg-paper/20" />
            <span className="text-[10px] tracking-[0.32em] uppercase text-paper/45">Floors I've sold on</span>
            <span className="flex-1 h-px bg-paper/10" />
          </div>
          <div className="marquee-track flex whitespace-nowrap gap-10 sm:gap-14 font-display italic text-paper/40 text-xl sm:text-2xl md:text-3xl">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-10 sm:gap-14 items-center">
                {['Makunai Global', 'American Express', "BYJU'S", 'Apple', 'Premium Retail', 'SaaS B2B'].map((w) => (
                  <span key={w + k} className="flex items-center gap-10 sm:gap-14">
                    {w}
                    <span aria-hidden className="text-gold/50 text-base not-italic">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-10 flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-paper/45"
        >
          <span className="block w-px h-10 bg-gradient-to-b from-gold to-transparent" />
          Scroll
        </motion.div>
      </div>
    </section>
  )
}

export default memo(HeroBase)
