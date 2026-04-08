import { motion } from 'framer-motion' // Pastikan ada kurung kurawal {}
import { GraduationCap, Trophy, Briefcase, Users, CheckCircle2 } from 'lucide-react'
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '../hooks/useScrollAnimation'
import { BENEFITS } from '../utils/constants'

// ... (sisa kode Benefits sama persis)

const iconMap = {
  GraduationCap: GraduationCap,
  Trophy: Trophy,
  Briefcase: Briefcase,
  Users: Users,
}

const Benefits = () => {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px]" />
      </div>

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
            Keuntungan
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Kenapa Harus <span className="text-gradient">ICT Club</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bergabung dengan ICT Club memberikan akses ke berbagai kesempatan dan pengalaman berharga.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {BENEFITS.map((benefit) => {
            const IconComponent = iconMap[benefit.icon]
            
            return (
              <motion.div
                key={benefit.id}
                variants={staggerItem}
                className="group text-center"
              >
                <div className="relative mb-6">
                  {/* Glow Ring */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Icon Container */}
                  <div className="relative mx-auto w-20 h-20 rounded-2xl glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Info Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-blue/10 rounded-3xl blur-2xl" />
          
          <div className="relative glass-card rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Perjalanan Belajar Terstruktur
                </h3>
                <p className="text-gray-400 mb-6">
                  Kami menyediakan roadmap belajar yang jelas dari level dasar hingga mahir. 
                  Setiap anggota akan dibimbing oleh mentor berpengalaman di bidangnya.
                </p>
                
                {/* Checklist */}
                <ul className="space-y-3">
                  {[
                    'Materi terstruktur dan update',
                    'Mentoring 1-on-1',
                    'Project-based learning',
                    'Sertifikat keikutsertaan'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="flex gap-8 lg:gap-12">
                {[
                  { value: '50+', label: 'Mentor' },
                  { value: '30+', label: 'Modul' },
                  { value: '100+', label: 'Project' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits