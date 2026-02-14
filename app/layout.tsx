import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Viaggio a Bali - Agosto 2026',
  description: 'Planning completo per 7 giorni a Bali - Paradiso tropicale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
