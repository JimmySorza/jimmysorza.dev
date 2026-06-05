import { portfolio } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[#888888] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        <a href="#home" className="transition hover:text-[#ededed]">
          Back to top
        </a>
      </div>
    </footer>
  )
}
