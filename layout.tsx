import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ferrari - Passion. Performance. Perfection.',
  description: 'Discover the world of Ferrari. Experience the ultimate in luxury, performance, and Italian craftsmanship. Explore our latest models, heritage, and racing legacy.',
  keywords: 'Ferrari, luxury cars, sports cars, Italian cars, supercars, racing, F1, automotive, performance',
  authors: [{ name: 'Ferrari' }],
  creator: 'Ferrari',
  publisher: 'Ferrari',
  robots: 'index, follow',
  openGraph: {
    title: 'Ferrari - Passion. Performance. Perfection.',
    description: 'Discover the world of Ferrari. Experience the ultimate in luxury, performance, and Italian craftsmanship.',
    url: 'https://ferrari.com',
    siteName: 'Ferrari',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ferrari - Passion. Performance. Perfection.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferrari - Passion. Performance. Perfection.',
    description: 'Discover the world of Ferrari. Experience the ultimate in luxury, performance, and Italian craftsmanship.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#FF2800',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 