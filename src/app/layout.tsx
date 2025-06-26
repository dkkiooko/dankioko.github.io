import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dan Kioko - Full Stack Developer',
  description: 'Personal portfolio website of Dan Kioko, a passionate full-stack developer specializing in modern web technologies',
  keywords: ['Dan Kioko', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Dan Kioko' }],
  creator: 'Dan Kioko',
  openGraph: {
    title: 'Dan Kioko - Full Stack Developer',
    description: 'Personal portfolio website of Dan Kioko, a passionate full-stack developer',
    url: 'https://dankioko.dev',
    siteName: 'Dan Kioko Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dan Kioko - Full Stack Developer',
    description: 'Personal portfolio website of Dan Kioko, a passionate full-stack developer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}