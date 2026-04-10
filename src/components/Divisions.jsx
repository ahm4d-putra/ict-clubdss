import { motion } from 'framer-motion' 
import { Code, Shield, Palette, Network, ArrowRight } from 'lucide-react'
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '../hooks/useScrollAnimation'
import { DIVISIONS } from '../utils/constants'

const iconMap = {
  Code: Code,
  Shield: Shield,
  Palette: Palette,
  Network: Network,
}

const Divisions = () => {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="divisions" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-medium mb-4">
            Pilih Jalurmu
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Empat <span className="text-gradient">Divisi</span> Unggulan
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Temukan bidang yang sesuai dengan minat dan bakatmu. Setiap divisi memiliki kurikulum terstruktur dan mentor berpengalaman.
          </p>
        </motion.div>

        {/* Divisions Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {DIVISIONS.map((division) => {
            const IconComponent = iconMap[division.icon]
            
            return (
              <motion.div
                key={division.id}
                variants={staggerItem}
                className="group relative"
                whileHover={{ y: -8 }}
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${division.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`} />
                
                {/* Card */}
                <div className="relative h-full glass-card rounded-3xl p-6 overflow-hidden group-hover:border-primary/30 transition-all duration-300">
                  {/* Top Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${division.gradient}`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${division.gradient} mb-5`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {division.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {division.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {division.skills.slice(0, 2).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 rounded-lg bg-dark-600/50 text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Learn More */}
                  <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span>Pelajari lebih</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Tidak yakin pilih divisi mana? Tenang, kamu bisa explore semua divisi sebagai anggota.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Divisions