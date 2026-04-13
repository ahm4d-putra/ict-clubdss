import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Cpu } from 'lucide-react'
import { CLUB_INFO, NAV_LINKS } from '../utils/constants'
import MapEmbed from './MapEmbed'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-800/50 to-transparent pointer-events-none" />
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent-blue">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                {CLUB_INFO.name}
              </span>
            </div>

            <p className="text-gray-400 text-sm">
              Komunitas IT untuk siswa yang ingin berkembang di dunia teknologi.
            </p>

            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{CLUB_INFO.school}</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-primary text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">

              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+62 895 0152 4223</span>
              </li>

              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>ictclub@school.id</span>
              </li>

            </ul>
          </div>
        </div>

        {/* MAP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="text-white font-semibold mb-4">
            Lokasi Kami
          </h4>

          <MapEmbed />
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-dark-700 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          <p>© {currentYear} {CLUB_INFO.name}</p>
        </div>

        {/* Ketua */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-center text-xs text-gray-600"
        >
          Ketua: {CLUB_INFO.ketua}
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer