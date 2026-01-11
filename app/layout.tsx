import './globals.css'
import React from 'react'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Serfiliana B2B',
  description: 'Plataforma B2B'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
