import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { portfolio, sectionIntro } from '../data/portfolio'

export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto max-w-6xl scroll-mt-28 border-t border-[#1f1f1f] px-5 py-20 sm:px-6 lg:px-8"
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#888888]">
        {sectionIntro.contact}
      </p>
      <div className="mt-5 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[#ededed] sm:text-5xl">
            {portfolio.contactTitle}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#888888]">
            {portfolio.contactText}
          </p>
        </div>
        <a
          href={`mailto:${portfolio.email}`}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ffffff] px-5 py-3 text-sm font-medium text-[#0a0a0a] transition hover:bg-[#e5e5e5] hover:text-[#0a0a0a]"
        >
          Email Jimmy
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        {portfolio.socials.map((social) => {
          const Icon = social.icon

          return (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-[#444444] bg-transparent px-4 py-2 text-sm text-[#ededed] transition hover:border-[#ffffff] hover:text-[#ffffff]"
            >
              <Icon aria-hidden="true" size={16} />
              {social.label}
            </a>
          )
        })}
      </div>
    </motion.section>
  )
}
