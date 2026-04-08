import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Divisions from './components/Divisions'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div 
        className="progress-bar"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="blob blob-1 -top-48 -left-48" />
        <div className="blob blob-2 top-1/2 -right-32" />
        <div className="blob blob-3 -bottom-32 left-1/3" />
      </div>

      {/* Main Content */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Divisions />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App