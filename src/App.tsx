import { About } from './components/About'
import { Contact } from './components/Contact'
import { Entrepreneurial } from './components/Entrepreneurial'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Technologies } from './components/Technologies'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Experience />
        <Services />
        <Projects />
        <Technologies />
        <Entrepreneurial />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
