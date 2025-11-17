import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Estatic - Roblox Developer & Creator",
  description: "Building innovative gaming experiences that captivate millions of players worldwide",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
