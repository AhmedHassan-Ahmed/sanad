import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SANAD — A smarter way to move',
  description: 'SANAD is a smart wearable concept designed to help you build better everyday posture habits.',
  generator: 'v.app',
  icons: {
    icon: [
      {
        url: '/740779549_122096035749394045_187041232969110960_n.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/740779549_122096035749394045_187041232969110960_n.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/740779549_122096035749394045_187041232969110960_n.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/740779549_122096035749394045_187041232969110960_n.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
