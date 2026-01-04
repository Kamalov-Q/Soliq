"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useApp } from "@/contexts/app-context"
import { translations } from "@/lib/translations"
import { motion } from "framer-motion"
import Image from "next/image"
import { Target, Eye, ShieldCheck, Zap, TrendingUp, Users } from "lucide-react"

export default function AboutPage() {
  const { language } = useApp()
  const t = translations[language].about

  const values = [
    { icon: <ShieldCheck size={28} />, title: t.value1, desc: t.value1Desc },
    { icon: <Users size={28} />, title: t.value2, desc: t.value2Desc },
    { icon: <Zap size={28} />, title: t.value3, desc: t.value3Desc },
    { icon: <TrendingUp size={28} />, title: t.value4, desc: t.value4Desc },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">{t.title}</h2>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">{t.subtitle}</h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">{t.description}</p>

              <div className="grid grid-cols-2 gap-10">
                {[
                  { label: t.experience, value: "19+" },
                  { label: t.clients, value: "300+" },
                  { label: t.experts, value: "10+" },
                  { label: t.projects, value: "200" },
                ].map((stat, i) => (
                  <div key={i} className="group">
                    <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-left">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-muted shadow-2xl shadow-primary/10">
              <Image
                src="/professional-team-in-modern-office-tashkent.jpg"
                alt="Our professional team"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[2.5rem] bg-primary text-white shadow-2xl shadow-primary/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Target size={180} />
              </div>
              <h3 className="text-3xl font-bold mb-6 relative z-10">{t.mission}</h3>
              <p className="text-white/80 text-lg leading-relaxed relative z-10">{t.missionText}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[2.5rem] bg-muted border border-border/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:-rotate-12 transition-transform duration-700 text-primary">
                <Eye size={180} />
              </div>
              <h3 className="text-3xl font-bold mb-6 relative z-10">{t.vision}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed relative z-10">{t.visionText}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">{t.values}</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{t.sub_desc}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-4xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
