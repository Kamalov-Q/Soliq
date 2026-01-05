"use client"

import { Navbar } from "../components/navbar"
import { Hero } from "../components/hero"
import { Services } from "../components/services"
import { ReviewsCarousel } from "../components/reviews-carousel"
import { Footer } from "../components/footer"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"
import { motion } from "framer-motion"
import {
  Award,
  CheckCircle2,
  Shield,
  Target,
  Clock,
  Zap,
} from "lucide-react"
import { StatsSection } from "@/components/stats-section"
import NewsComponent from "@/components/news"
import ServicesComponent from "@/components/serv-comp"

export default function SoliqPage() {
  const { language } = useApp()
  const t = translations[language]

  const advantages = [
    { icon: <Award size={28} />, title: t.whyUs.reason1Title, desc: t.whyUs.reason1Desc, color: "bg-blue-500/10 text-blue-500" },
    { icon: <Clock size={28} />, title: t.whyUs.reason2Title, desc: t.whyUs.reason2Desc, color: "bg-green-500/10 text-green-500" },
    { icon: <Zap size={28} />, title: t.whyUs.reason3Title, desc: t.whyUs.reason3Desc, color: "bg-purple-500/10 text-purple-500" },
    { icon: <Shield size={28} />, title: t.whyUs.reason4Title, desc: t.whyUs.reason4Desc, color: "bg-orange-500/10 text-orange-500" },
    { icon: <Target size={28} />, title: t.whyUs.reason5Title, desc: t.whyUs.reason5Desc, color: "bg-pink-500/10 text-pink-500" },
    { icon: <CheckCircle2 size={28} />, title: t.whyUs.reason6Title, desc: t.whyUs.reason6Desc, color: "bg-cyan-500/10 text-cyan-500" },
  ]

  return (
    <main className="min-h-screen pt-[72px] container-lg mx-auto">
      <Navbar />
      <Hero />

      <section className="py-24 px-6 bg-primary text-white relative overflow-hidden">
        <StatsSection t={t} />
      </section>

      <Services />

      {/* WHY US */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
              {t.whyUs.title}
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold">
              {t.whyUs.subtitle}
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition h-full">
                  <div className={`w-16 h-16 rounded-2xl ${a.color} flex items-center justify-center mb-6`}>
                    {a.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{a.title}</h3>
                  <p className="text-muted-foreground">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 text-center border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-primary font-bold uppercase text-sm mb-4">
            {t.reviews.title}
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-12">
            {t.reviews.subtitle}
          </h1>
          <ReviewsCarousel />
        </div>
      </section>


      <NewsComponent />

      <ServicesComponent />

      <Footer />
    </main>
  )
}
