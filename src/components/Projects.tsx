import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { portfolio, sectionIntro } from '../data/portfolio'

export function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto max-w-6xl scroll-mt-28 border-t border-[#1f1f1f] px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#888888]">
            {sectionIntro.projects}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#ededed] sm:text-4xl">
            Work shaped around useful outcomes.
          </h2>
        </div>
      </div>
      <div className="mt-10 grid gap-4">
        {portfolio.projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-lg border border-[#1f1f1f] p-6 transition hover:border-[#ededed]/50"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-[#ededed]">{project.title}</h3>
                  <span className="rounded-full border border-[#1f1f1f] px-3 py-1 text-xs text-[#888888]">
                    {project.status}
                  </span>
                  {project.featured ? (
                    <span className="rounded-full border border-[#1f1f1f] px-3 py-1 text-xs text-[#888888]">
                      Featured
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 max-w-3xl text-base leading-7 text-[#888888]">
                  {project.description}
                </p>
                {project.problem ? (
                  <p className="mt-5 max-w-3xl text-sm leading-6 text-[#888888]">
                    <span className="font-medium text-[#ededed]">Problem:</span> {project.problem}
                  </p>
                ) : null}
                {project.solution ? (
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-[#888888]">
                    <span className="font-medium text-[#ededed]">Solution:</span> {project.solution}
                  </p>
                ) : null}
              </div>
              <div className="flex shrink-0 items-center gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    aria-label={`${project.title} live demo`}
                    className="text-[#888888] transition group-hover:text-[#ededed]"
                  >
                    <ExternalLink aria-hidden="true" size={20} />
                  </a>
                ) : null}
                {project.repositoryUrl ? (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Source Code"
                    aria-label={`${project.title} source code`}
                    className="text-[#888888] transition group-hover:text-[#ededed]"
                  >
                    <ArrowUpRight aria-hidden="true" size={20} />
                  </a>
                ) : null}
              </div>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#242424] bg-[#111111] px-3.5 py-1.5 text-xs font-medium text-[#d6d6d6]"
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
