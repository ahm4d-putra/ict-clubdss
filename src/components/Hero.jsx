import { motion } from 'framer-motion' // Pastikan ada kurung kurawal {}
import { ChevronDown, Sparkles, Zap, Globe } from 'lucide-react'
import { useScrollAnimation, fadeInUp, scaleIn } from '../hooks/useScrollAnimation'

// ... (sisa kode Hero sama persis seperti sebelumnya)

const Hero = () => {
  const { ref, isInView } = useScrollAnimation()

  const scrollToDivisions = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900" />
        {/* Horizontal Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{ top: `${20 + i * 15}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
          />
        ))}
        {/* Vertical Lines */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent"
            style={{ left: `${10 + i * 15}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-1/4 left-[15%] p-3 rounded-2xl glass-card"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles className="w-6 h-6 text-primary" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-[15%] p-3 rounded-2xl glass-card"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <Zap className="w-6 h-6 text-accent-blue" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-[10%] p-3 rounded-2xl glass-card"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <Globe className="w-6 h-6 text-accent-teal" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm text-gray-300">Pendaftaran Anggota Baru Dibuka</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black mb-6"
        >
          <span className="text-white">ICT</span>
          <span className="text-gradient"> Club</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          Belajar{' '}
          <span className="text-primary font-semibold">Coding</span>,{' '}
          <span className="text-accent-blue font-semibold">Cyber Security</span>, dan{' '}
          <span className="text-accent-teal font-semibold">Teknologi Masa Depan</span>
        </motion.p>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.3 }}
          className="text-base text-gray-500 mb-10"
        >
          Wujudkan potensimu bersama komunitas teknologi terbaik di sekolah
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#join"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-primary/40 rounded-2xl blur-xl group-hover:bg-primary/60 transition-all duration-300" />
            <div className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-primary via-accent-cyan to-accent-blue text-white font-bold text-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
              <Sparkles className="w-5 h-5" />
              Gabung Sekarang
            </div>
          </motion.a>

          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 rounded-2xl glass-card text-white font-semibold hover:bg-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pelajari Lebih Lanjut
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: '36+', label: 'Anggota Aktif' },
            { value: '4', label: 'Divisi' },
            { value: '0', label: 'Prestasi' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToDivisions}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  )
}

export default Hero