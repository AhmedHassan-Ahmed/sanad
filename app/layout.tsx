import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'


export const metadata: Metadata = {
  metadataBase: new URL('https://sanad-one-hazel.vercel.app'),

  title: 'SANAD CORE — سند كور | جهاز ذكي لمتابعة وضعية الجسم',

  description:
    'تعرّف على سند كور، جهاز ذكي قابل للارتداء يساعدك على متابعة وضعية الجسم وبناء عادات يومية أفضل.',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'SANAD CORE — سند كور',
    description:
      'اكتشف جهاز سند كور الذكي لمتابعة وضعية الجسم.',
    url: 'https://sanad-one-hazel.vercel.app/',
    siteName: 'SANAD CORE',
    locale: 'ar_EG',
    type: 'website',
  },
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
