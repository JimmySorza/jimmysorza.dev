import { Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1f1f1f]/80 bg-[#0a0a0a]/85 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          className="text-sm font-medium tracking-normal text-[#ededed] transition hover:text-white"
        >
          {portfolio.name}
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {portfolio.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#888888] transition hover:text-[#ededed]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {portfolio.socials.map((social) => {
            const Icon = social.icon
            const isGitHub = social.label === 'GitHub'

            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                className={`inline-flex h-9 items-center justify-center rounded-full border border-[#444444] bg-transparent text-[#ededed] transition hover:border-[#ffffff] hover:text-[#ffffff] ${
                  isGitHub ? 'w-auto gap-2 px-3' : 'w-9'
                }`}
              >
                <Icon aria-hidden="true" size={16} />
                {isGitHub ? <span className="hidden text-sm font-medium sm:inline">GitHub</span> : null}
              </a>
            )
          })}
          <a
            href={`mailto:${portfolio.email}`}
            className="hidden items-center justify-center gap-2 rounded-full border border-[#444444] bg-transparent px-4 py-2 text-sm font-medium text-[#ededed] transition hover:border-[#ffffff] hover:text-[#ffffff] sm:inline-flex"
          >
            <Mail aria-hidden="true" size={15} />
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
