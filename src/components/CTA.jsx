import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Zap } from 'lucide-react'
import { REGISTRATION_LINK } from '../utils/constants'
import { fadeInUp, scaleIn } from '../hooks/useScrollAnimation'

const CTA = () => {
  return (
    <section id="join" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent-blue/20 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Outer Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent-cyan/30 to-accent-blue/30 rounded-[40px] blur-3xl opacity-50 pointer-events-none" />
          
          {/* Main Card */}
          <div className="relative glass-card rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden">
            {/* Top Decoration */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent pointer-events-none" />
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-8 -left-8 p-4 rounded-2xl glass-card pointer-events-none"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Zap className="w-6 h-6 text-primary" />
            </motion.div>
            <motion.div
              className="absolute -bottom-8 -right-8 p-4 rounded-2xl glass-card pointer-events-none"
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-accent-blue" />
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Pendaftaran Dibuka
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4"
            >
              Siap Jadi Bagian dari{' '}
              <span className="text-gradient">ICT Club</span>?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-10 max-w-xl mx-auto"
            >
              Bergabunglah dengan ratusan siswa yang telah menemukan passion mereka di dunia teknologi. 
              Jalurmu menuju masa depan digital dimulai dari sini.
            </motion.p>

            {/* CTA Button - FIXED: Pure <a> tag for maximum compatibility */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.a
                href={REGISTRATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-cyan to-accent-blue rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none" />
                
                {/* Button Background */}
                <div className="relative px-10 py-5 rounded-2xl bg-gradient-to-r from-primary via-accent-cyan to-accent-blue text-white font-bold text-lg">
                  <span className="relative z-10 flex items-center gap-3">
                    <Sparkles className="w-5 h-5" />
                    Daftar Sekarang
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.a>
            </motion.div>

            {/* Sub-text */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-gray-500 text-sm"
            >
              Gratis untuk seluruh siswa sekolah
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA