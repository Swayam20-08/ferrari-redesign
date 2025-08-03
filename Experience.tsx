'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Star, ArrowRight } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Ferrari Driving Experience',
      description: 'Experience the thrill of driving a Ferrari on world-class circuits.',
      location: 'Fiorano Circuit, Italy',
      duration: '1-3 Days',
      price: 'From €2,500',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5.0,
      reviews: 128
    },
    {
      title: 'Ferrari Museum Tour',
      description: 'Explore the rich history and heritage of Ferrari at our museum.',
      location: 'Maranello, Italy',
      duration: 'Half Day',
      price: 'From €25',
      image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 89
    },
    {
      title: 'Ferrari Factory Tour',
      description: 'Witness the craftsmanship behind every Ferrari at our factory.',
      location: 'Maranello, Italy',
      duration: 'Full Day',
      price: 'From €150',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 5.0,
      reviews: 67
    }
  ]

  const upcomingEvents = [
    {
      title: 'Ferrari Challenge Europe',
      date: 'June 15-16, 2024',
      location: 'Monza Circuit, Italy',
      type: 'Racing Event'
    },
    {
      title: 'Ferrari Owners Club Meet',
      date: 'July 8, 2024',
      location: 'Fiorano Circuit, Italy',
      type: 'Social Event'
    },
    {
      title: 'Ferrari Innovation Day',
      date: 'August 12, 2024',
      location: 'Maranello, Italy',
      type: 'Technology'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-ferrari-gray to-ferrari-dark">
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
            The <span className="text-gradient">Ferrari</span> Experience
          </h2>
          <p className="text-xl text-ferrari-silver max-w-3xl mx-auto">
            Immerse yourself in the world of Ferrari through exclusive experiences, 
            events, and behind-the-scenes access to our passion for excellence.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-ferrari-dark rounded-2xl overflow-hidden card-hover">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${experience.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ferrari-dark/80 to-transparent"></div>
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-ferrari-dark/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg flex items-center space-x-1">
                    <Star size={16} className="text-ferrari-gold fill-current" />
                    <span className="text-sm font-semibold">{experience.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-ferrari-silver mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-ferrari-silver">
                      <MapPin size={16} />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-ferrari-silver">
                      <Calendar size={16} />
                      <span className="text-sm">{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-ferrari-silver">
                      <Users size={16} />
                      <span className="text-sm">{experience.reviews} reviews</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-ferrari-red font-bold">{experience.price}</div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary flex items-center space-x-2"
                    >
                      <span>Book Now</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-ferrari-gray rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Upcoming Events
            </h3>
            <p className="text-ferrari-silver">
              Join us for exclusive events and experiences throughout the year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-ferrari-dark rounded-xl p-6 card-hover"
              >
                <div className="text-sm text-ferrari-red font-semibold mb-2">
                  {event.type}
                </div>
                <h4 className="text-lg font-display font-bold text-white mb-3">
                  {event.title}
                </h4>
                <div className="space-y-2 text-ferrari-silver text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary w-full mt-4 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-ferrari-red/10 to-ferrari-gold/10 rounded-2xl p-12">
            <h3 className="text-3xl font-display font-bold text-white mb-6">
              Ready to Experience Ferrari?
            </h3>
            <p className="text-ferrari-silver mb-8 max-w-2xl mx-auto">
              Whether you're a lifelong enthusiast or new to the world of Ferrari, 
              we have experiences designed to ignite your passion for automotive excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Book an Experience</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 