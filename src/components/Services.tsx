import { motion } from 'framer-motion'
import { portfolio, sectionIntro } from '../data/portfolio'

export function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto max-w-6xl scroll-mt-28 border-t border-[#1f1f1f] px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#888888]">
          {sectionIntro.services}
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[#ededed] sm:text-4xl">
          Product-minded engineering support.
        </h2>
      </div>
      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-[#1f1f1f] bg-[#1f1f1f] md:grid-cols-2 lg:grid-cols-3">
        {portfolio.services.map((service) => {
          const Icon = service.icon

          return (
            <article key={service.title} className="bg-[#0a0a0a] p-6">
              <Icon aria-hidden="true" className="text-[#ededed]" size={22} />
              <h3 className="mt-5 text-lg font-semibold text-[#ededed]">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#888888]">{service.description}</p>
            </article>
          )
        })}
      </div>
    </motion.section>
  )
}
