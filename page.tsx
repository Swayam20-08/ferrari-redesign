'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Play, ArrowRight, Star } from 'lucide-react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Models from '@/components/Models'
import Heritage from '@/components/Heritage'
import Racing from '@/components/Racing'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-ferrari-dark flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-24 h-24 border-4 border-ferrari-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="text-2xl font-display text-ferrari-red">FERRARI</h1>
          <p className="text-ferrari-silver mt-2">Loading...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-ferrari-dark">
      <Header />
      <Hero />
      <Models />
      <Heritage />
      <Racing />
      <Experience />
      <Footer />
    </main>
  )
} 