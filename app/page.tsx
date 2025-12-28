"use client"

import { Navbar } from "../components/navbar"
import { Hero } from "../components/hero"
import { Services } from "../components/services"
import { NewsSection } from "../components/news-section"
import { ContactSection } from "../components/contact-section"
import { ReviewsCarousel } from "../components/reviews-carousel"
import { Footer } from "../components/footer"
import { useApp } from "../contexts/app-context"
import { translations } from "../lib/translations"
import { motion } from "framer-motion"
import { TrendingUp, Users, Award, Briefcase, CheckCircle2, Shield, Target, Clock, Zap } from "lucide-react"
import { StatsSection } from "@/components/stats-section"

export default function SoliqPage() {
  const { language } = useApp()
  const t = translations[language]

  const stats = [
    { icon: <Users size={32} />, value: "500+", label: t.about.clients, color: "bg-blue-500/10 text-blue-500" },
    {
      icon: <TrendingUp size={32} />,
      value: "10+",
      label: t.about.experience,
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: <Award size={32} />,
      value: "1000+",
      label: t.about.projects,
      color: "bg-purple-500/10 text-purple-500",
    },
    { icon: <Briefcase size={32} />, value: "25+", label: t.about.experts, color: "bg-orange-500/10 text-orange-500" },
  ]

  const advantages = [
    {
      icon: <Award size={28} />,
      title: t.whyUs.reason1Title,
      desc: t.whyUs.reason1Desc,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: <Clock size={28} />,
      title: t.whyUs.reason2Title,
      desc: t.whyUs.reason2Desc,
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: <Zap size={28} />,
      title: t.whyUs.reason3Title,
      desc: t.whyUs.reason3Desc,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: <Shield size={28} />,
      title: t.whyUs.reason4Title,
      desc: t.whyUs.reason4Desc,
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      icon: <Target size={28} />,
      title: t.whyUs.reason5Title,
      desc: t.whyUs.reason5Desc,
      color: "bg-pink-500/10 text-pink-500",
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: t.whyUs.reason6Title,
      desc: t.whyUs.reason6Desc,
      color: "bg-cyan-500/10 text-cyan-500",
    },
  ]

  const partners = [
    { name: "Uzcard", logo: "/uzcard-logo.jpg" },
    { name: "Humo", logo: "/humo-payment-logo.jpg" },
    { name: "Payme", logo: "/payme-logo.jpg" },
    { name: "Click", logo: "/click-payment-logo.jpg" },
    { name: "Uzum", logo: "/uzum-logo.jpg" },
    { name: "MyTaxi", logo: "/mytaxi-uzbekistan-logo.jpg" },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <section className="py-24 px-6 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>

        <StatsSection t={t} />

      </section>

      <Services />

      <section className="py-24 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">{t.whyUs.title}</h2>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{t.whyUs.subtitle}</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 h-full">
                  <div className={`w-16 h-16 rounded-2xl ${advantage.color} flex items-center justify-center mb-6`}>
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 px-6 bg-background text-center border-y border-foreground/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{t.reviews.title}</h2>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{t.reviews.subtitle}</h1>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      <section className="py-24 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">{t.partners.title}</h2>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.partners.subtitle}</h1>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="rounded-full transition-all flex items-center hover:scale-105 justify-center h-32 cursor-pointer">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NewsSection />
      {/* <ContactSection /> */}

      <Footer />
    </main>
  )
}
