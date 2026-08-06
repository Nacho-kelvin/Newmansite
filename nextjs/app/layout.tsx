import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Newman Electrical Services',
  description: 'Licensed electrical contractors — Nairobi',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white text-ink">
          {children}
        </div>
      </body>
    </html>
  )
}
