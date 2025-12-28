"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { useApp } from "@/contexts/app-context"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"
import { Star, Quote, MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReviewsPage() {
  const { language } = useApp()
  const t = translations[language].reviews

  const reviews = [
    { text: t.review1, author: t.review1Author, pos: t.review1Position, rating: 5 },
    { text: t.review2, author: t.review2Author, pos: t.review2Position, rating: 5 },
    { text: t.review3, author: t.review3Author, pos: t.review3Position, rating: 5 },
    { text: t.review4, author: t.review4Author, pos: t.review4Position, rating: 5 },
    { text: t.review5, author: t.review5Author, pos: t.review5Position, rating: 5 },
    { text: t.review6, author: t.review6Author, pos: t.review6Position, rating: 5 },
  ]

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
            {reviews.map((review, i) => (
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
                  <p className="text-lg leading-relaxed mb-10 text-foreground font-medium italic">"{review.text}"</p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary font-bold text-lg">
                      {review.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-lg leading-tight">{review.author}</div>
                      <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">
                        {review.pos}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/5">
            <MessageSquare size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Ready to share your experience?</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            Your feedback helps us improve and provides valuable insights for other businesses in Uzbekistan looking for
            reliable tax support.
          </p>
          <Button className="rounded-full px-12 py-8 bg-primary hover:bg-primary/90 text-white font-bold text-lg uppercase tracking-widest shadow-2xl shadow-primary/20 gap-3 group">
            Write a Review <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
