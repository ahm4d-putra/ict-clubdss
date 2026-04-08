import { motion } from 'framer-motion' // Pastikan ada kurung kurawal {}
import { Target, Rocket, Users, Lightbulb } from 'lucide-react'
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../hooks/useScrollAnimation'
import { CLUB_INFO } from '../utils/constants'

// ... (sisa kode About sama persis)

const About = () => {
  const { ref, isInView } = useScrollAnimation()
  const { ref: ref2, isInView: isInView2 } = useScrollAnimation()

  const features = [
    {
      icon: Target,
      title: 'Fokus Praktik',
      description: 'Belajar langsung dengan project nyata dan studi kasus industri'
    },
    {
      icon: Rocket,
      title: 'Inovasi Terkini',
      description: 'Mengikuti perkembangan teknologi terbaru di dunia IT'
    },
    {
      icon: Users,
      title: 'Kolaborasi Tim',
      description: 'Bekerja sama dalam tim untuk menyelesaikan proyek bersama'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Melatih kemampuan berpikir kritis dan memecahkan masalah'
    }
  ]

  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-medium mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Apa itu <span className="text-gradient">ICT Club</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Komunitas belajar teknologi informasi dan komunikasi yang berfokus pada pengembangan skill digital siswa.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Visual */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-blue/20 rounded-3xl blur-3xl" />
              
              {/* Main Card */}
              <div className="relative glass-card rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-accent-blue">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Our Mission</h3>
                    <p className="text-gray-400 text-sm">{CLUB_INFO.motto}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  ICT Club adalah wadah bagi siswa yang memiliki passion di bidang teknologi. 
                  Kami menyediakan lingkungan yang supportive untuk belajar, berbagi, dan berkembang 
                  bersama dalam berbagai bidang IT seperti programming, cyber security, design, dan networking.
                </p>

                <div className="flex flex-wrap gap-3">
                  {['Innovative', 'Collaborative', 'Future-Ready'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 p-4 rounded-2xl glass-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">5+</div>
                  <div className="text-xs text-gray-400">Tahun Aktif</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            ref={ref2}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView2 ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group p-6 rounded-2xl glass-card hover:bg-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent-blue/20 mb-4 w-fit group-hover:from-primary/30 group-hover:to-accent-blue/30 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl" />
          <div className="relative py-12 px-4">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-display text-white mb-4">
              "Teknologi terbaik adalah yang membawa orang bersama"
            </blockquote>
            <cite className="text-gray-500">— Matt Mullenweg</cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About