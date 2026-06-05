import { motion } from 'framer-motion'
import { portfolio, sectionIntro } from '../data/portfolio'

export function Technologies() {
  return (
    <motion.section
      aria-labelledby="technologies-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto max-w-6xl border-t border-[#1f1f1f] px-5 py-20 sm:px-6 lg:px-8"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#888888]">
        {sectionIntro.technologies}
      </p>
      <h2 id="technologies-title" className="mt-4 text-3xl font-semibold text-[#ededed] sm:text-4xl">
        Technologies I use to ship.
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {portfolio.technologies.map((group) => (
          <article key={group.title}>
            <h3 className="text-base font-semibold text-[#ededed]">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#242424] bg-[#111111] px-3.5 py-1.5 text-sm font-medium text-[#d6d6d6]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
