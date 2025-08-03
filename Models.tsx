'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

const Models = () => {
  const models = [
    {
      id: 1,
      name: 'SF90 Stradale',
      category: 'Supercar',
      price: '$625,000',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: {
        power: '1000 HP',
        acceleration: '2.5s',
        topSpeed: '211 mph'
      },
      badge: 'New'
    },
    {
      id: 2,
      name: '296 GTB',
      category: 'Supercar',
      price: '$322,986',
      image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: {
        power: '830 HP',
        acceleration: '2.9s',
        topSpeed: '205 mph'
      }
    },
    {
      id: 3,
      name: '812 Superfast',
      category: 'GT',
      price: '$335,000',
      image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: {
        power: '789 HP',
        acceleration: '2.9s',
        topSpeed: '211 mph'
      }
    },
    {
      id: 4,
      name: 'F8 Tributo',
      category: 'Supercar',
      price: '$276,550',
      image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: {
        power: '710 HP',
        acceleration: '2.9s',
        topSpeed: '211 mph'
      }
    }
  ]

  return (
    <section id="models" className="section-padding bg-ferrari-dark">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Our <span className="text-gradient">Models</span>
          </h2>
          <p className="text-xl text-ferrari-silver max-w-3xl mx-auto">
            Discover the complete range of Ferrari models, each representing the perfect 
            balance of performance, design, and Italian craftsmanship.
          </p>
        </motion.div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-ferrari-gray rounded-2xl overflow-hidden card-hover">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${model.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ferrari-dark/80 to-transparent"></div>
                  
                  {/* Badge */}
                  {model.badge && (
                    <div className="absolute top-4 left-4 bg-ferrari-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {model.badge}
                    </div>
                  )}
                  
                  {/* Price */}
                  <div className="absolute bottom-4 right-4 bg-ferrari-dark/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                    <div className="text-sm text-ferrari-silver">Starting at</div>
                    <div className="text-lg font-bold text-ferrari-red">{model.price}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-sm text-ferrari-silver mb-1">{model.category}</div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">{model.name}</h3>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-ferrari-red">{model.specs.power}</div>
                      <div className="text-xs text-ferrari-silver">POWER</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-ferrari-red">{model.specs.acceleration}</div>
                      <div className="text-xs text-ferrari-silver">0-60</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-ferrari-red">{model.specs.topSpeed}</div>
                      <div className="text-xs text-ferrari-silver">TOP SPEED</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full btn-secondary flex items-center justify-center space-x-2"
                  >
                    <span>Explore</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center space-x-2 mx-auto"
          >
            <span>View All Models</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Models 