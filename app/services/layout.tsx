import { Metadata } from "next"
import { generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Xizmatlar | Services | Услуги",
  description: "Soliq maslahati, buxgalteriya xizmatlari, soliq audit, soliq muammolari yechimi. Налоговые консультации, бухгалтерские услуги, налоговый аудит. Tax consulting, accounting services, tax audit, tax solutions.",
  path: "/services",
  keywords: [
    "Soliq maslahati",
    "Soliq maslahat yordami",
    "Buxgalteriya xizmatlari",
    "Soliq audit",
    "Soliq muammolari",
    "Налоговые консультации",
    "Налоговая помощь",
    "Бухгалтерские услуги",
    "Налоговый аудит",
    "Tax consulting",
    "Tax advice",
    "Accounting services",
    "Tax audit",
  ],
})

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

