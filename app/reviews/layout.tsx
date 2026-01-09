import { Metadata } from "next"
import { generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Sharhlar | Reviews | Отзывы",
  description: "Mijozlarimizning sharhlari va fikrlari. TaxOFF Partners xizmatlari bo'yicha mijozlar sharhlari. Отзывы наших клиентов. Client reviews and testimonials about TaxOFF Partners tax services.",
  path: "/reviews",
  keywords: [
    "Soliq xizmatlari sharhlari",
    "Mijozlar sharhlari",
    "Soliq maslahati sharhlari",
    "Отзывы налоговых услуг",
    "Отзывы клиентов",
    "Tax service reviews",
    "Client testimonials",
    "Tax consulting reviews",
  ],
})

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

