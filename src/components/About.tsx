import { motion } from 'framer-motion'
import { portfolio, sectionIntro } from '../data/portfolio'

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto grid max-w-6xl scroll-mt-28 grid-cols-1 gap-8 border-t border-[#1f1f1f] px-5 py-20 sm:px-6 md:grid-cols-[0.7fr_1.3fr] lg:px-8"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#888888]">
        {sectionIntro.about}
      </p>
      <div>
        <h2 className="text-3xl font-semibold tracking-normal text-[#ededed] sm:text-4xl">
          {portfolio.aboutTitle}
        </h2>
        <div className="mt-6 max-w-3xl space-y-5">
          {portfolio.about.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-[#888888]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
