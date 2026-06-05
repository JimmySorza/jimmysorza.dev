import { motion } from 'framer-motion'
import { portfolio, sectionIntro } from '../data/portfolio'

export function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto grid max-w-6xl scroll-mt-28 grid-cols-1 gap-8 border-t border-[#1f1f1f] px-5 py-20 sm:px-6 md:grid-cols-[0.7fr_1.3fr] lg:px-8"
    >
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#888888]">
          {sectionIntro.experience}
        </p>
      </div>
      <div className="space-y-12">
        {portfolio.experience.map((item) => (
          <article
            key={`${item.company}-${item.role}-${item.period}`}
            className="border-b border-[#1f1f1f] pb-12 last:border-b-0 last:pb-0"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-[#ededed]">{item.role}</h2>
                <p className="mt-1 text-sm text-[#888888]">
                  {item.company} · {item.location}
                </p>
              </div>
              <p className="text-sm text-[#888888]">{item.period}</p>
            </div>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#888888]">{item.description}</p>
            <ul className="mt-6 space-y-4">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-base leading-7 text-[#888888]">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ededed]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
