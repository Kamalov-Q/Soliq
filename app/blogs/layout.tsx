import { Metadata } from "next"
import { generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Bloglar | Blogs | Блоги",
  description: "Soliq bo'yicha foydali ma'lumotlar va maslahatlar. Soliq maslahati, soliq rejalashtirish, soliq muammolari haqida maqolalar. Полезная информация и советы по налогам. Useful tax information and advice.",
  path: "/blogs",
  type: "website",
  keywords: [
    "Soliq maqolalari",
    "Soliq maslahatlari",
    "Soliq haqida ma'lumot",
    "Налоговые статьи",
    "Налоговые советы",
    "Tax articles",
    "Tax advice",
    "Tax information",
  ],
})

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

