'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    models: [
      'SF90 Stradale',
      '296 GTB',
      '812 Superfast',
      'F8 Tributo',
      'Roma',
      'Portofino M'
    ],
    racing: [
      'Formula 1',
      'Ferrari Challenge',
      'Corse Clienti',
      'GT Racing',
      'Historical Racing'
    ],
    experience: [
      'Driving Experience',
      'Museum Tours',
      'Factory Tours',
      'Events',
      'Ferrari Store'
    ],
    company: [
      'About Ferrari',
      'Careers',
      'Press',
      'Investors',
      'Sustainability'
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-ferrari-dark border-t border-ferrari-gray">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-ferrari-red rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">F</span>
                  </div>
                  <span className="text-2xl font-display font-bold text-white">
                    FERRARI
                  </span>
                </div>
                <p className="text-ferrari-silver leading-relaxed mb-6">
                  For over 75 years, Ferrari has been the symbol of Italian excellence, 
                  passion, and innovation in the automotive world.
                </p>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-ferrari-gray rounded-full flex items-center justify-center text-ferrari-silver hover:text-ferrari-red transition-colors duration-300"
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Models</h3>
              <ul className="space-y-2">
                {footerLinks.models.map((model) => (
                  <li key={model}>
                    <a 
                      href="#" 
                      className="text-ferrari-silver hover:text-ferrari-red transition-colors duration-300"
                    >
                      {model}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Racing</h3>
              <ul className="space-y-2">
                {footerLinks.racing.map((racing) => (
                  <li key={racing}>
                    <a 
                      href="#" 
                      className="text-ferrari-silver hover:text-ferrari-red transition-colors duration-300"
                    >
                      {racing}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Experience</h3>
              <ul className="space-y-2">
                {footerLinks.experience.map((experience) => (
                  <li key={experience}>
                    <a 
                      href="#" 
                      className="text-ferrari-silver hover:text-ferrari-red transition-colors duration-300"
                    >
                      {experience}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((company) => (
                  <li key={company}>
                    <a 
                      href="#" 
                      className="text-ferrari-silver hover:text-ferrari-red transition-colors duration-300"
                    >
                      {company}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-ferrari-gray py-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <MapPin className="text-ferrari-red" size={20} />
              <div>
                <div className="text-white font-semibold">Headquarters</div>
                <div className="text-ferrari-silver">Maranello, Italy</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-ferrari-red" size={20} />
              <div>
                <div className="text-white font-semibold">Contact</div>
                <div className="text-ferrari-silver">+39 0536 949111</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-ferrari-red" size={20} />
              <div>
                <div className="text-white font-semibold">Email</div>
                <div className="text-ferrari-silver">info@ferrari.com</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-ferrari-gray py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-ferrari-silver text-sm">
              © 2024 Ferrari N.V. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-ferrari-silver hover:text-ferrari-red transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-ferrari-silver hover:text-ferrari-red transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-ferrari-silver hover:text-ferrari-red transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-ferrari-red rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-600 transition-colors duration-300 z-50"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}


export default Footer 
