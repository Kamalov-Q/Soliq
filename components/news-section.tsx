"use client"

import { Card } from "./ui/card"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"

export function NewsSection() {
  const { language } = useApp()
  const t = translations[language].news

  const newsItems = [
    {
      tag: "Regulation",
      title: t.article1Title,
      description: t.article1Desc,
      image: "/modern-building-tashkent.jpg",
    },
    {
      tag: "Digital",
      title: t.article2Title,
      description: t.article2Desc,
      image: "/business-digital-data.jpg",
    },
    {
      tag: "Growth",
      title: t.article3Title,
      description: t.article3Desc,
      image: "/office-collaboration-professional.jpg",
    },
  ]

  return (
    <section id="news" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-bold tracking-tight">{t.title}</h2>
          <p className="text-muted-foreground max-w-xs text-right hidden md:block">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <Card key={i} className="group border-none bg-transparent overflow-hidden">
              <div className="aspect-4/5 relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {item.tag}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
