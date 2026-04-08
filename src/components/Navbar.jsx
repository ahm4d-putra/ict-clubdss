import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion' // Pastikan ada kurung kurawal {}
import { Menu, X, Cpu } from 'lucide-react'
import { NAV_LINKS } from '../utils/constants'

// ... (sisa kode Navbar sama persis seperti sebelumnya)
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
            }}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-xl blur-lg group-hover:bg-primary/50 transition-all duration-300" />
              <div className="relative p-2 rounded-xl bg-gradient-to-br from-primary to-accent-blue">
                <Cpu className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors">
              ICT Club
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="relative text-gray-300 hover:text-white font-medium transition-colors group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <motion.a
            href="#join"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#join')
            }}
            className="hidden md:block relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-primary/30 rounded-xl blur-lg group-hover:bg-primary/50 transition-all duration-300" />
            <div className="relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent-blue text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Gabung Sekarang
            </div>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg glass"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 mx-4 overflow-hidden"
          >
            <div className="glass-card rounded-2xl p-4 space-y-2">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-primary/10 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#join"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#join')
                }}
                className="block px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent-blue text-white text-center font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Gabung Sekarang
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar