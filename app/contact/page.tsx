"use client"

import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { ContactMap } from "../../components/contact-map"
import { useApp } from "../../contexts/app-context"
import { translations } from "../../lib/translations"
import { motion } from "framer-motion"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, ChevronRight } from "lucide-react"

export default function ContactPage() {
  const { language } = useApp()
  const t = translations[language].contact

  const contactDetails = [
    {
      icon: <MapPin size={24} />,
      title: t.address,
      value: t.addressValue,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: <Phone size={24} />,
      title: t.phone2,
      value: t.phoneValue,
      subValue: t.phone3,
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: <Mail size={24} />,
      title: t.email2,
      value: t.emailValue,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: <Clock size={24} />,
      title: t.workingHours,
      value: t.workingHoursValue,
      color: "bg-orange-500/10 text-orange-500",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">{t.title}</h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">{t.subtitle}</h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-1">{item.value}</p>
                {item.subValue && <p className="text-muted-foreground text-sm leading-relaxed">{item.subValue}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-10 md:p-14 rounded-[2.5rem] border border-border/50 shadow-2xl shadow-primary/5"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Send us a message</h3>
                  <p className="text-sm text-muted-foreground">We typically reply within 2 hours</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                      {t.name}
                    </label>
                    <Input
                      placeholder="Aziz Karimov"
                      className="bg-muted/50 border-none h-14 px-6 rounded-2xl focus-visible:ring-primary text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                      {t.email}
                    </label>
                    <Input
                      type="email"
                      placeholder="aziz@company.uz"
                      className="bg-muted/50 border-none h-14 px-6 rounded-2xl focus-visible:ring-primary text-sm font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    {t.phone}
                  </label>
                  <Input
                    placeholder="+998 (90) 123-45-67"
                    className="bg-muted/50 border-none h-14 px-6 rounded-2xl focus-visible:ring-primary text-sm font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    {t.message}
                  </label>
                  <Textarea
                    placeholder="Tell us about your tax needs..."
                    className="bg-muted/50 border-none min-h-[160px] px-6 py-5 rounded-2xl focus-visible:ring-primary text-sm font-medium resize-none"
                  />
                </div>
                <Button className="w-full h-16 rounded-2xl text-lg font-bold bg-primary hover:bg-primary/90 text-white transition-all shadow-xl shadow-primary/20 gap-3 group">
                  {t.send}{" "}
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Button>
              </form>
            </motion.div>

            {/* Interactive Yandex Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <ContactMap />

              {/* FAQ / Support Brief */}
              <div className="p-10 rounded-[2.5rem] bg-primary text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <MessageSquare size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Need urgent help?</h3>
                <p className="text-white/80 mb-8 relative z-10 text-lg leading-relaxed">
                  Our team of senior tax consultants is ready to assist you with any emergency inquiries. Call us
                  directly for immediate support.
                </p>
                <Button className="bg-white text-primary hover:bg-white/90 rounded-xl px-8 py-6 font-bold uppercase tracking-widest text-xs gap-2 relative z-10">
                  Call Support <ChevronRight size={16} />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
