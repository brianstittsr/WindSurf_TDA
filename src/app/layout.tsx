import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TDA Enterprise - Environmental Health & Safety Solutions',
  description: 'Professional Environmental Health and Safety services including training, consulting, and compliance solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedBackground />
        <Header />
        <main className="mt-[140px]"> {/* Adjusted margin-top to account for fixed header */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
