import { motion } from 'framer-motion'
import { portfolio, sectionIntro } from '../data/portfolio'

export function Highlights() {
  return (
    <motion.section
      aria-labelledby="highlights-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 lg:px-8"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#888888]">
        {sectionIntro.highlights}
      </p>
      <h2 id="highlights-title" className="sr-only">
        Professional highlights
      </h2>
      <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-[#1f1f1f] bg-[#1f1f1f] sm:grid-cols-2 lg:grid-cols-5">
        {portfolio.highlights.map((item) => (
          <article key={item.metric} className="bg-[#0a0a0a] p-6">
            <p className="text-2xl font-semibold text-[#ededed]">{item.metric}</p>
            <p className="mt-3 text-sm leading-6 text-[#888888]">{item.label}</p>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
