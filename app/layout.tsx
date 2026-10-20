import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SANAD CORE — سند كور | A smarter way to move',
  description: 'تعرّف على سند كور، جهاز ذكي قابل للارتداء لدعم الوعي بوضعية الجسم من خلال تنبيهات مخصصة وتطبيق مرافق. Meet SANAD CORE, a smart wearable designed to support posture awareness.',
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
    { media: '(prefers-color-scheme: light)', color: '#f4f8fb' },
    { media: '(prefers-color-scheme: dark)', color: '#06121f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
