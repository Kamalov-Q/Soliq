"use client"

import { useState } from "react"
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { ContactMap } from "../../components/contact-map"
import { useApp } from "../../contexts/app-context"
import { translations } from "../../lib/translations"
import { motion } from "framer-motion"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react"

// ---------------- TRANSLATIONS ----------------
// const translations = {
//   uz: {
//     toast: {
//       success: "Xabaringiz yuborildi",
//       error: "Xatolik yuz berdi, qayta urinib ko‘ring",
//     },
//   },
//   ru: {
//     toast: {
//       success: "Ваше сообщение отправлено",
//       error: "Произошла ошибка, попробуйте снова",
//     },
//   },
//   en: {
//     toast: {
//       success: "Your message has been sent",
//       error: "An error occurred, please try again",
//     },
//   },
// }

const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;

async function sendTelegramMessage(text: string) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "HTML",
    }),
  })
}

export default function ContactPage() {
  const { language } = useApp()
  const t = translations[language].contact

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name || !form.phone || !form.message) {
      alert(t.toast.error)
      return
    }

    setLoading(true)

    const text = `
📩 <b>New Contact Message</b>

👤 <b>Name:</b> ${form.name}
📞 <b>Phone:</b> ${form.phone}
📧 <b>Email:</b> ${form.email || "-"}
💬 <b>Message:</b>
${form.message}
    `

    try {
      await sendTelegramMessage(text)
      alert(t.toast.success)
      setForm({ name: "", email: "", phone: "", message: "" })
    } catch {
      alert(t.toast.error)
    } finally {
      setLoading(false)
    }
  }

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
            {[
              {
                icon: <MapPin />,
                title: t.address,
                value: t.addressValue,
                color: "bg-blue-500/10 text-blue-500",
              },
              {
                icon: <Phone />,
                title: t.phone2,
                value: t.phoneValue,
                color: "bg-green-500/10 text-green-500",
              },
              {
                icon: <Mail />,
                title: t.email2,
                value: t.emailValue,
                color: "bg-purple-500/10 text-purple-500",
              },
              {
                icon: <Clock />,
                title: t.workingHours,
                value: t.workingHoursValue,
                color: "bg-orange-500/10 text-orange-500",
              },
            ].map((item, i) => (
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
                {/* {item.subValue && <p className="text-muted-foreground text-sm leading-relaxed">{item.subValue}</p>} */}
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    {t.name}
                  </label>
                  <Input
                    placeholder={t.name}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-muted/50 border-none h-14 px-6 rounded-2xl focus-visible:ring-primary text-sm font-medium"
                  />
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    {t.email}
                  </label>
                  <Input
                    type="email"
                    placeholder={t.email}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-muted/50 border-none h-14 px-6 rounded-2xl focus-visible:ring-primary text-sm font-medium"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    {t.phone}
                  </label>
                  <Input
                    placeholder={t.phone}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-muted/50 border-none h-14 px-6 rounded-2xl focus-visible:ring-primary text-sm font-medium"
                  />
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    {t.message}
                  </label>
                  <Textarea
                    placeholder={t.message}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-muted/50 border-none min-h-[160px] px-6 py-5 rounded-2xl focus-visible:ring-primary text-sm font-medium resize-none"
                  />
                </div>

                <Button
                  disabled={loading}
                  className="w-full h-16 rounded-2xl text-lg font-bold bg-primary hover:bg-primary/90 text-white transition-all shadow-xl shadow-primary/20 gap-3 group"
                >
                  {t.send} <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <ContactMap />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
