"use client"

import { useEffect, useState } from "react"
import { Phone, ArrowUp, X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useApp } from "@/contexts/app-context"

// ---------------- TRANSLATIONS ----------------
const translations = {
    uz: {
        title: "Biz bilan bog‘laning",
        name: "Ismingiz",
        phone: "Telefon raqami",
        message: "Xabar",
        email: "Emailingiz",
        send: "Yuborish",
        validationError: "Majburiy maydonlarni to‘ldiring",
        newCall: "Yangi murojaat",
        toast: {
            success: "Xabaringiz yuborildi",
            error: "Xatolik yuz berdi, qayta urinib ko‘ring",
        },
    },
    ru: {
        title: "Свяжитесь с нами",
        name: "Ваше имя",
        phone: "Телефон",
        message: "Сообщение",
        email: "Электронная почта",
        send: "Отправить",
        validationError: "Заполните обязательные поля",
        newCall: "Новая заявка",
        toast: {
            success: "Ваше сообщение отправлено",
            error: "Произошла ошибка, попробуйте снова",
        },
    },
    en: {
        title: "Contact Us",
        name: "Name",
        phone: "Phone",
        message: "Message",
        email: "Email",
        send: "Send",
        validationError: "Please fill all required fields",
        newCall: "New request",
        toast: {
            success: "Your message has been sent",
            error: "An error occurred, please try again",
        },
    },
}

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

export function FloatingActions() {
    const { language } = useApp()
    const t = translations[language]

    const [open, setOpen] = useState(false)
    const [showTop, setShowTop] = useState(false)
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 300)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const submit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!form.name || !form.phone || !form.message) {
            alert(t.validationError)
            return
        }

        const text = `
📩 <b>${t.newCall}</b>

👤 <b>${t.name}:</b> ${form.name}
📞 <b>${t.phone}:</b> ${form.phone}
📧 <b>${t.email}:</b> ${form.email || "-"}
💬 <b>${t.message}:</b>
${form.message}
    `

        try {
            await sendTelegramMessage(text)
            alert(t.toast.success)
            setForm({ name: "", email: "", phone: "", message: "" })
            setOpen(false)
        } catch {
            alert(t.toast.error)
        }
    }

    return (
        <>
            {/* PHONE BUTTON */}
            <motion.button
                onClick={() => setOpen(true)}
                initial={{ scale: 0.9 }}
                animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                        "0 0 0px rgba(34,197,94,0.5)",
                        "0 0 20px rgba(34,197,94,0.8)",
                        "0 0 0px rgba(34,197,94,0.5)",
                    ],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="fixed bottom-6 right-6 z-50 bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer border border-white"
            >
                <Phone />
            </motion.button>

            {/* SCROLL TO TOP */}
            <AnimatePresence>
                {showTop && (
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-24 right-6 z-40 bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer border border-white"
                    >
                        <ArrowUp />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* MODAL */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            onClick={() => setOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-50"
                        />

                        {/* MODAL CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="fixed inset-0 z-50 flex items-center justify-center px-4"
                        >
                            <form
                                onSubmit={submit}
                                className="bg-background rounded-3xl p-8 w-full max-w-md space-y-4"
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-bold">{t.title}</h2>
                                    <X onClick={() => setOpen(false)} className="cursor-pointer" />
                                </div>

                                <input
                                    placeholder={t.name}
                                    className="w-full px-4 py-3 rounded-xl border"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />

                                <input
                                    type="email"
                                    placeholder={t.email}
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border"
                                />

                                <input
                                    placeholder={t.phone}
                                    className="w-full px-4 py-3 rounded-xl border"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                />

                                <textarea
                                    placeholder={t.message}
                                    className="w-full px-4 py-3 rounded-xl border"
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                />

                                <button className="w-full py-3 rounded-xl bg-primary text-white font-bold flex gap-2 justify-center">
                                    {t.send} <Send size={16} />
                                </button>
                            </form>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
