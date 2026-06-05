import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import profilePhoto from '../assets/jimmy-profile.jpg'
import { portfolio } from '../data/portfolio'

export function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.22fr_0.78fr] lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-4xl"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#888888]">
          {portfolio.location}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] text-[#ededed] sm:text-5xl lg:text-6xl">
          {portfolio.role}
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-8 text-[#ededed] sm:text-2xl sm:leading-9">
          {portfolio.intro}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#888888] sm:text-lg">
          {portfolio.heroSupport}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffffff] px-5 py-3 text-sm font-medium text-[#0a0a0a] transition hover:bg-[#e5e5e5] hover:text-[#0a0a0a]"
          >
            View Projects
            <ArrowDown aria-hidden="true" size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#444444] bg-transparent px-5 py-3 text-sm font-medium text-[#ededed] transition hover:border-[#ffffff] hover:text-[#ffffff]"
          >
            Contact Me
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        className="mx-auto w-full max-w-[18rem] justify-self-center lg:max-w-[20rem] lg:justify-self-end"
      >
        <div className="overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#111111]">
          <img
            src={profilePhoto}
            alt={`${portfolio.name} professional portrait`}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}
