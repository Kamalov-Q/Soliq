import { Metadata } from "next"
import { generateSEOMetadata } from "@/lib/seo"

export const metadata: Metadata = generateSEOMetadata({
  title: "Biz haqimizda | About Us | О нас",
  description: "O'zbekistondagi eng ishonchli soliq kompaniyasi. 19 yillik tajriba, 300+ mamnun mijoz, professional soliq xizmatlari. Самая надежная налоговая компания в Узбекистане. The most trusted tax company in Uzbekistan.",
  path: "/about",
  keywords: [
    "Soliq kompaniyasi",
    "Soliq xizmatlari haqida",
    "Налоговая компания",
    "О налоговых услугах",
    "Tax company about",
    "About tax services",
  ],
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

