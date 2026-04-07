import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '1 Day Astro Vastu Course Mumbai | Ashissh Kumaar | 24 May 2026',
  description: 'Join India\'s #1 Astro-Vastu Expert Ashissh Kumaar for a 1-day foundation course in Mumbai. Learn Vastu, Numerology & Astro Remedies. Global Icon Award 2023 Winner. Limited seats — Book Now!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-off-white text-[#1A1A1A]">
        {children}
      </body>
    </html>
  )
}
