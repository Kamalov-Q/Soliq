"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useApp } from "@/contexts/app-context"
import { translations } from "@/lib/translations"
import { motion, useAnimation } from "framer-motion"
import { PlayCircle, Calendar, Tag } from "lucide-react"

const SCROLL_DURATION = 50

const BLOGS = [
    // {
    //     id: 1,
    //     title: {
    //         uz: "QQS (VAT) nima va qanday hisoblanadi?",
    //         ru: "Что такое НДС и как он рассчитывается?",
    //         en: "What is VAT and how is it calculated?",
    //     },
    //     description: {
    //         uz: "QQS tushunchasi va real misollar bilan tushuntirish.",
    //         ru: "Пояснение НДС с реальными примерами.",
    //         en: "VAT explained with real-world examples.",
    //     },
    //     videoUrl: "/videos/video1.mp4",
    //     category: "VAT",
    //     date: "2025-01-10",
    // },

    ...Array.from({ length: 12 }).map((_, i) => ({
        id: i + 2,
        title: {
            uz: `Soliq darsi #${i + 1}`,
            ru: `Налоговый урок #${i + 1}`,
            en: `Tax lesson #${i + 1}`,
        },
        description: {
            uz: "Soliqlar oddiy tilda tushuntiriladi.",
            ru: "Налоги простым языком.",
            en: "Taxes explained simply.",
        },
        videoUrl: `/videos/video${(i % 5) + 1}.mp4`,
        category: "Education",
        date: "2025-01-02",
    })),
]

export default function BlogPage() {
    const { language } = useApp()
    const t = translations[language]
    const controls = useAnimation()

    return (
        <main className="pt-[72px] min-h-screen overflow-hidden">
            <Navbar />

            {/* HERO */}
            <section className="py-24 px-6 bg-muted/20">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        {"Soliq bo'yicha tegishli ma'lumotlar"}
                    </motion.h1>

                    {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t.blog?.subtitle ||
                            "Auto-playing tax lessons and updates in video format"}
                    </p> */}
                </div>
            </section>

            {/* AUTO SWIPER */}
            <section className="py-24 px-6">
                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-10 w-max"
                        animate={controls}
                        initial={{ x: "0%" }}
                        onHoverStart={() => controls.stop()}
                        onHoverEnd={() =>
                            controls.start({
                                x: ["0%", "-50%"],
                                transition: {
                                    repeat: Infinity,
                                    duration: SCROLL_DURATION,
                                    ease: "linear",
                                },
                            })
                        }
                    >
                        {[...BLOGS, ...BLOGS].map((blog, i) => (
                            <article
                                key={`${blog.id}-${i}`}
                                className="w-[320px] bg-card border border-border rounded-3xl overflow-hidden shrink-0 flex flex-col h-full items-center"
                            >
                                {/* VIDEO */}
                                <div className="relative aspect-video bg-black">
                                    <video
                                        src={blog.videoUrl}
                                        muted
                                        autoPlay
                                        controls
                                        loop
                                        playsInline
                                        preload="metadata"
                                        className="w-full h-full object-contain"
                                    />

                                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                                        <PlayCircle size={14} />
                                        Video
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="p-5 flex justify-between flex-col">
                                    <h3 className="font-bold mb-2">
                                        {blog.title[language]}
                                    </h3>

                                    <p className="text-sm text-muted-foreground mb-4">
                                        {blog.description[language]}
                                    </p>

                                    {/* <div className="flex justify-between text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={12} /> {blog.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Tag size={12} /> {blog.category}
                                        </span>
                                    </div> */}
                                </div>
                            </article>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
