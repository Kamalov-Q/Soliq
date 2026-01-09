import { Metadata } from "next"
import { generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Blog maqolasi | Blog Article | Статья блога",
  description: "Soliq bo'yicha batafsil maqola va maslahatlar. Tax article and detailed advice.",
  path: "/blogs",
  type: "article",
})

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

