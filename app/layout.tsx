import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'

import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-garamond',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Highveld Guest House | Boutique Accommodation in Nigel, Gauteng',
  description:
    'Experience true South African hospitality at Highveld Guest House. Luxury boutique accommodation in Nigel, Gauteng - only 30 minutes from Johannesburg. Book via WhatsApp.',
  keywords: [
    'guest house',
    'Nigel',
    'Gauteng',
    'South Africa',
    'accommodation',
    'boutique',
    'Johannesburg',
  ],
}

export const viewport: Viewport = {
  themeColor: '#C4622D',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${lato.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
