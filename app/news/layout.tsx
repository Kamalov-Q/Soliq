import { Metadata } from "next"
import { generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Yangiliklar | News | Новости",
  description: "Soliq bo'yicha so'nggi yangiliklar va o'zgarishlar. O'zbekistondagi soliq qonunchiligidagi yangiliklar. Последние новости по налогам. Latest tax news and updates in Uzbekistan.",
  path: "/news",
  type: "website",
  keywords: [
    "Soliq yangiliklari",
    "Soliq qonunchiligi",
    "Soliq o'zgarishlari",
    "Налоговые новости",
    "Налоговое законодательство",
    "Tax news",
    "Tax legislation",
    "Tax updates",
  ],
})

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

