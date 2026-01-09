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
  description: "Soliq xizmatlari - O'zbekistondagi yetakchi soliq maslahati va buxgalteriya xizmatlari. Soliq maslahati, soliq maslahat yordami, soliq konsaltingi, buxgalteriya xizmatlari Toshkent. Налоговые услуги, налоговые консультации в Узбекистане. Tax services, tax consulting, accounting services in Uzbekistan.",
  path: "/",
  image: "/logo.png",
  keywords: [
    "Soliq xizmatlari",
    "Soliq maslahati",
    "Soliq maslahat yordami",
    "Toshkent soliq xizmatlari",
  ],
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
