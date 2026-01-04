"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useApp } from "@/contexts/app-context"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  const { language } = useApp()
  const t = translations[language].news

  const allArticles = [
    {
      title: t.article1Title,
      desc: t.article1Desc,
      content: t.article1Content,
      date: "20.03.2024",
      tag: "Legislation",
      author: "Aziz Alimov",
    },
    {
      title: t.article2Title,
      desc: t.article2Desc,
      content: t.article2Content,
      date: "15.03.2024",
      tag: "Small Business",
      author: "Dilnoza Sodiqova",
    },
    {
      title: t.article3Title,
      desc: t.article3Desc,
      content: t.article3Content,
      date: "10.03.2024",
      tag: "Digital",
      author: "Sardor Karimov",
    },
    {
      title: t.article4Title,
      desc: t.article4Desc,
      content: t.article4Content,
      date: "05.03.2024",
      tag: "Export",
      author: "Elena Petrova",
    },
    {
      title: t.article5Title,
      desc: t.article5Desc,
      content: t.article5Content,
      date: "01.03.2024",
      tag: "IT Sector",
      author: "Rustam Turayev",
    },
    {
      title: t.article6Title,
      desc: t.article6Desc,
      content: t.article6Content,
      date: "25.02.2024",
      tag: "Investment",
      author: "Malika Ismoilova",
    },
  ]

  const featured = allArticles[0]
  const list = allArticles.slice(1, 4)
  const suggested = allArticles.slice(4)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">{t.title}</h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{t.subtitle}</h1>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-4xl overflow-hidden bg-card border border-border/50 shadow-2xl shadow-primary/5"
          >
            <div className="relative aspect-16/10 lg:aspect-auto">
              <img
                src="/uzbekistan-business-news-.jpg?height=800&width=1200&query=uzbekistan business news feature"
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <Badge className="rounded-full bg-primary/10 text-primary border-none px-4 py-1">{featured.tag}</Badge>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-widest">
                  <Calendar size={14} /> {featured.date}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 hover:text-primary transition-colors cursor-pointer leading-tight">
                {featured.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{featured.content}</p>
              <div className="flex items-center justify-between pt-8 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary">
                    <User size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">{featured.author}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">Editor</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="gap-2 font-bold text-primary group uppercase tracking-widest text-xs"
                >
                  {t.readMore} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News List Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {list.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-none bg-transparent group cursor-pointer">
                  <div className="aspect-16/10 relative rounded-2xl overflow-hidden mb-6 shadow-lg shadow-primary/5">
                    <img
                      src={`/uzbekistan-business-news-.jpg?height=400&width=600&query=uzbek business ${i + 1}`}
                      alt={article.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                        {article.tag}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        {article.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors leading-snug mb-3">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">{article.desc}</p>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary group-hover:gap-4 transition-all">
                      {t.readMore} <ArrowRight size={12} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested News Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">{t.suggestedTitle}</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{t.chosen_news}</h3>
            </div>
            <Link href="/news" className="hidden md:block">
              <Button
                variant="outline"
                className="rounded-full px-8 uppercase tracking-widest text-xs font-bold gap-2 bg-transparent"
              >
                {t.allNews} <ArrowRight size={14} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {suggested.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer border border-border/50 group"
              >
                <div className="w-full sm:w-40 h-40 rounded-2xl overflow-hidden shrink-0">
                  <img
                    src={`/uzbekistan-business-news-.jpg?height=200&width=200&query=suggested news ${i}`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <Badge
                    variant="secondary"
                    className="w-fit mb-3 rounded-full text-[10px] uppercase font-bold tracking-widest"
                  >
                    {article.tag}
                  </Badge>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h4>
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-widest">{article.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
