import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AppProvider } from "@/contexts/app-context"
import "./globals.css"
import { FloatingActions } from "@/components/FloatingActions"
import { StructuredData } from "@/components/structured-data"
import { generateSEOMetadata } from "@/lib/seo"

const _geist = Geist({ subsets: ["latin", "cyrillic"] })
const _geistMono = Geist_Mono({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = generateSEOMetadata({
  title: "TaxOFF Partners - Professional Tax Services",
  description: "Leading tax consulting and accounting services in Uzbekistan. Soliq maslahati, soliq maslahat yordami, soliq konsaltingi, buxgalteriya xizmatlari. Налоговые консультации, налоговый консалтинг. Tax consulting, tax advice, accounting services.",
  path: "/",
  image: "/logo.png",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <StructuredData />
        <AppProvider>
          {children}
          <FloatingActions />
        </AppProvider>
        <Analytics />
      </body>
    </html>
  )
}
