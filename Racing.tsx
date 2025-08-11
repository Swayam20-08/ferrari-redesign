'use client'

import { motion } from 'framer-motion'
import { Trophy, Flag, Users, Zap } from 'lucide-react'

const Racing = () => {
  const achievements = [
    {
      icon: Trophy,
      number: '16',
      label: 'F1 Championships',
      description: 'Constructors\' titles'
    },
    {
      icon: Users,
      number: '15',
      label: 'Driver Championships',
      description: 'Individual titles'
    },
    {
      icon: Flag,
      number: '243',
      label: 'Race Victories',
      description: 'Grand Prix wins'
    },
    {
      icon: Zap,
      number: '1,000+',
      label: 'Podium Finishes',
      description: 'Top 3 results'
    }
  ]

  const currentDrivers = [
    {
      name: 'Charles Leclerc',
      number: '16',
      nationality: 'Monaco',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Carlos Sainz',
      number: '55',
      nationality: 'Spain',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  return (
    <section id="racing" className="section-padding bg-ferrari-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            <span className="text-gradient">Racing</span> Legacy
          </h2>
          <p className="text-xl text-ferrari-silver max-w-3xl mx-auto">
            From the very beginning, racing has been at the heart of Ferrari. 
            Our Formula 1 team continues to push the boundaries of what's possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-ferrari-gray rounded-2xl p-6 card-hover"
            >
              <div className="w-16 h-16 bg-ferrari-red rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="text-white" size={32} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-ferrari-red mb-2">
                {achievement.number}
              </div>
              <div className="text-white font-semibold mb-1">{achievement.label}</div>
              <div className="text-ferrari-silver text-sm">{achievement.description}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-ferrari-red/10 to-ferrari-gold/10 rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              2024 Formula 1 Season
            </h3>
            <p className="text-ferrari-silver">
              Scuderia Ferrari continues its pursuit of excellence in the pinnacle of motorsport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentDrivers.map((driver, index) => (
              <motion.div
                key={driver.name}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-ferrari-gray rounded-2xl p-6 flex items-center space-x-6"
              >
                <div className="relative">
                  <div 
                    className="w-20 h-20 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${driver.image}')` }}
                  ></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-ferrari-red rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{driver.number}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-white mb-1">
                    {driver.name}
                  </h4>
                  <p className="text-ferrari-silver">{driver.nationality}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-display font-bold text-white mb-6">
              The Prancing Horse
            </h3>
            <p className="text-ferrari-silver leading-relaxed mb-6">
              The iconic prancing horse logo has become synonymous with speed, 
              power, and victory. From the early days of Formula 1 to the modern era, 
              Ferrari has consistently pushed the boundaries of automotive engineering.
            </p>
            <p className="text-ferrari-silver leading-relaxed mb-8">
              Our racing heritage directly influences every road car we build, 
              ensuring that the passion and performance of the track are 
              translated into every Ferrari that leaves our factory.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Explore Racing History
            </motion.button>
          </div>

          <div className="relative">
            <div 
              className="w-full h-96 rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-ferrari-dark/50 to-transparent rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


export default Racing 
