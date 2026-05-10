import { memo } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data'

function Item({ item, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid md:grid-cols-12 gap-5 md:gap-10 py-8 sm:py-10 border-t hairline first:border-t-0"
    >
      {/* timeline dot */}
      <div aria-hidden className="hidden md:block absolute left-[calc(33.33%-5px)] top-10 w-2.5 h-2.5 rounded-full bg-gold ring-4 ring-ink" />

      <div className="md:col-span-4 flex flex-wrap items-baseline md:flex-col md:items-start gap-x-3 gap-y-2">
        <p className={`font-display text-base sm:text-lg ${item.current ? 'text-gold' : 'text-paper/80'}`}>
          {item.period}
        </p>
        <span className="text-[10px] sm:text-xs tracking-[0.22em] uppercase text-paper/45">
          {item.location} · {item.type}
        </span>
      </div>

      <div className="md:col-span-8">
        <div className="flex items-baseline justify-between gap-3 flex-wrap">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-paper leading-tight tracking-[-0.01em]">
            {item.role}
          </h3>
          {item.current && (
            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-emerald-300/90">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Now
            </span>
          )}
          {item.featured && (
            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-gold px-2.5 py-1 rounded-full border border-gold/40 bg-gold/5">
              <span aria-hidden></span>
              Featured
            </span>
          )}
        </div>
        <p className="mt-1 text-paper/65 text-base">
          <span className="text-paper/85">{item.company}</span>
        </p>
        {item.sub && (
          <p className="mt-1 text-paper/45 text-sm italic">{item.sub}</p>
        )}

        <ul className="mt-5 space-y-2.5">
          {item.points.map((p) => (
            <li key={p} className="flex gap-3 text-paper/75 leading-relaxed">
              <span className="mt-2 h-px w-4 bg-gold/60 shrink-0" />
              <span className="text-pretty">{p}</span>
            </li>
          ))}
        </ul>

        {item.clients && (
          <div className="mt-7 rounded-2xl border hairline bg-ink-2/40 overflow-hidden">
            <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b hairline">
              <p className="text-[10px] sm:text-xs tracking-[0.28em] uppercase text-gold">
                Clients I brought in
              </p>
              <p className="text-[10px] tracking-[0.22em] uppercase text-paper/45">
                {item.clients.length} accounts
              </p>
            </div>
            <ul className="divide-y divide-paper/10">
              {item.clients.map((c) => (
                <li
                  key={c.name}
                  className="grid grid-cols-12 gap-2 sm:gap-4 px-4 sm:px-5 py-3 text-[13px] sm:text-sm items-center"
                >
                  <span className="col-span-6 sm:col-span-5 font-display text-paper truncate">
                    {c.name}
                  </span>
                  <span className="col-span-3 sm:col-span-4 text-paper/55 text-[11px] sm:text-xs tracking-wide truncate">
                    {c.scale}
                  </span>
                  <span className="col-span-3 text-right tabular-nums text-gold font-medium">
                    {c.deal}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.article>
  )
}

function ExperienceBase() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A track record built one quota at a time.</>}
      kicker="Ordered by craft, not calendar — starting with the premium retail floors at Apple, then the SaaS rooms at Makunai, the credit-card desks at American Express, and the EdTech consults at BYJU'S."
    >
      <div className="relative">
        {/* vertical rail */}
        <div aria-hidden className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-paper/15 to-transparent" />
        {experience.map((item, i) => (
          <Item key={item.role + item.period} item={item} i={i} />
        ))}
      </div>
    </Section>
  )
}

export default memo(ExperienceBase)
