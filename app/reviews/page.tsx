"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { useApp } from "@/contexts/app-context"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { REVIEWS } from "@/data/reviews"

export default function ReviewsPage() {
  const { language } = useApp()
  const t = translations[language].reviews



  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-24 px-6 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">{t.title}</h2>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">{t.subtitle}</h1>
          </motion.div>
        </div>
      </section>

      {/* Featured Carousel Section */}
      <section className="py-24 px-6 border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <ReviewsCarousel />
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-10 rounded-[2.5rem] border border-border/50 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 relative group"
              >
                <div className="absolute top-8 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <Quote size={60} />
                </div>

                <div className="relative z-10">
                  <div className="flex gap-1 text-primary mb-8">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-10 text-foreground font-medium italic">"{review.comment}"</p>

                  <div className="flex items-center gap-4">
                    {/* <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary font-bold text-lg">
                      {review.author}
                    </div> */}
                    <div>
                      <div className="font-bold text-lg leading-tight">{review.author}</div>
                      <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">
                        {review.company}
                      </div>
                    </div>
                  </div>
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
