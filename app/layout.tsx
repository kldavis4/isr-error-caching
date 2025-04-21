import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ISR Demo",
  description: "Demonstrating different ISR behaviors",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-slate-800 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">ISR Demo</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/normal" className="hover:underline">
                    Normal Page
                  </Link>
                </li>
                <li>
                  <Link href="/always-error" className="hover:underline">
                    Always Error
                  </Link>
                </li>
                <li>
                  <Link href="/build-error" className="hover:underline">
                    Build Error
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
