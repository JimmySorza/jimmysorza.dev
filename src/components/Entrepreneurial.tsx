import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { portfolio, sectionIntro } from '../data/portfolio'

export function Entrepreneurial() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto grid max-w-6xl grid-cols-1 gap-8 border-t border-[#1f1f1f] px-5 py-20 sm:px-6 md:grid-cols-[0.7fr_1.3fr] lg:px-8"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#888888]">
        {sectionIntro.entrepreneurial}
      </p>
      <div>
        <h2 className="text-3xl font-semibold text-[#ededed] sm:text-4xl">
          {portfolio.entrepreneurial.title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#888888]">
          {portfolio.entrepreneurial.description}
        </p>
        <ul className="mt-6 max-w-3xl space-y-5">
          {portfolio.entrepreneurial.points.map((point) => (
            <li key={point} className="flex gap-3 text-lg leading-8 text-[#888888]">
              <Check aria-hidden="true" className="mt-1.5 shrink-0 text-[#ededed]" size={18} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}
