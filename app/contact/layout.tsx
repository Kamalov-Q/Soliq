import { Metadata } from "next"
import { generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Aloqa | Contact | Контакты",
  description: "Soliq maslahati uchun bepul konsultatsiya. Toshkent, Chilonzor. Bepul soliq maslahat yordami. Бесплатная консультация по налогам. Free tax consultation. Contact us for tax advice.",
  path: "/contact",
  keywords: [
    "Soliq maslahati konsultatsiya",
    "Bepul soliq maslahati",
    "Toshkent soliq maslahati",
    "Налоговая консультация",
    "Бесплатная налоговая консультация",
    "Tax consultation",
    "Free tax advice",
    "Contact tax consultant",
  ],
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

