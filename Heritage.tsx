'use client'

import { motion } from 'framer-motion'
import { Calendar, Trophy, Users, Flag } from 'lucide-react'

const Heritage = () => {
  const milestones = [
    {
      year: '1947',
      title: 'The First Ferrari',
      description: 'Enzo Ferrari creates the 125 S, the first car to bear the Ferrari name.',
      icon: Calendar
    },
    {
      year: '1950',
      title: 'Formula 1 Debut',
      description: 'Ferrari enters Formula 1 racing, beginning a legendary journey.',
      icon: Flag
    },
    {
      year: '1963',
      title: '250 GTO',
      description: 'The iconic 250 GTO becomes one of the most valuable cars ever made.',
      icon: Trophy
    },
    {
      year: '1987',
      title: 'F40 Launch',
      description: 'The F40 becomes the world\'s fastest production car of its time.',
      icon: Users
    },
    {
      year: '2002',
      title: 'Enzo Ferrari',
      description: 'The Enzo Ferrari supercar is launched, named after the founder.',
      icon: Calendar
    },
    {
      year: '2019',
      title: 'SF90 Stradale',
      description: 'The most powerful Ferrari ever built for the road is unveiled.',
      icon: Trophy
    }
  ]

  return (
    <section id="heritage" className="section-padding bg-gradient-to-b from-ferrari-dark to-ferrari-gray">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Our <span className="text-gradient">Heritage</span>
          </h2>
          <p className="text-xl text-ferrari-silver max-w-3xl mx-auto">
            For over 75 years, Ferrari has been the symbol of Italian excellence, 
            passion, and innovation in the automotive world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-ferrari-red mb-2">75+</div>
            <div className="text-ferrari-silver">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-ferrari-red mb-2">16</div>
            <div className="text-ferrari-silver">F1 Championships</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-ferrari-red mb-2">10,000+</div>
            <div className="text-ferrari-silver">Cars Built</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-ferrari-red mb-2">1</div>
            <div className="text-ferrari-silver">Legend</div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-ferrari-red/30 h-full hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8 space-y-4 lg:space-y-0`}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                  <div className="bg-ferrari-gray rounded-2xl p-8 card-hover">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-ferrari-red rounded-full flex items-center justify-center">
                        <milestone.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-ferrari-red">{milestone.year}</div>
                        <h3 className="text-xl font-display font-bold text-white">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-ferrari-silver leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                <div className="relative lg:flex-1 flex justify-center">
                  <div className="w-4 h-4 bg-ferrari-red rounded-full border-4 border-ferrari-dark z-10"></div>
                </div>

                <div className="lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-ferrari-gray rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="text-6xl text-ferrari-red mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-display font-medium text-white mb-6 leading-relaxed">
              "I have built a car that is the expression of my dream. 
              It is not just a car, it is a Ferrari."
            </blockquote>
            <cite className="text-ferrari-silver text-lg">— Enzo Ferrari</cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


export default Heritage 
