"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useApp } from "@/contexts/app-context"
import { translations } from "@/lib/translations"
import { motion, AnimatePresence } from "framer-motion"
import { PlayCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { BLOGS } from "@/data/blogs"

const MOBILE_LIMIT = 3
const DESKTOP_LIMIT = 9
const SM_BREAKPOINT = 640

export default function BlogPage() {
    const { language } = useApp()
    const t = translations[language].news

    const [isMobile, setIsMobile] = useState(false)
    const [visibleCount, setVisibleCount] = useState(DESKTOP_LIMIT)

    const allArticles = [
        {
            id: 1,
            title: t.article1Title,
            desc: t.article1Desc,
            content: t.article1Content,
            date: "20.03.2024",
            tag: "Legislation",
            author: "Aziz Alimov",
        },
        {
            id: 2,
            title: t.article2Title,
            desc: t.article2Desc,
            content: t.article2Content,
            date: "15.03.2024",
            tag: "Small Business",
            author: "Dilnoza Sodiqova",
        },
        {
            id: 3,
            title: t.article3Title,
            desc: t.article3Desc,
            content: t.article3Content,
            date: "10.03.2024",
            tag: "Digital",
            author: "Sardor Karimov",
        },
        {
            id: 4,
            title: t.article4Title,
            desc: t.article4Desc,
            content: t.article4Content,
            date: "05.03.2024",
            tag: "Export",
            author: "Elena Petrova",
        },
        {
            id: 5,
            title: t.article5Title,
            desc: t.article5Desc,
            content: t.article5Content,
            date: "01.03.2024",
            tag: "IT Sector",
            author: "Rustam Turayev",
        },
        {
            id: 6,
            title: t.article6Title,
            desc: t.article6Desc,
            content: t.article6Content,
            date: "25.02.2024",
            tag: "Investment",
            author: "Malika Ismoilova",
        },
    ]

    const suggested = allArticles.slice(2)
    const router = useRouter()

    // Detect screen size
    useEffect(() => {
        const check = () => {
            const mobile = window.innerWidth < SM_BREAKPOINT
            setIsMobile(mobile)
            setVisibleCount(mobile ? MOBILE_LIMIT : DESKTOP_LIMIT)
        }

        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    const visibleBlogs = BLOGS.slice(0, visibleCount)

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + (isMobile ? MOBILE_LIMIT : DESKTOP_LIMIT))
    }

    return (
        <main className="pt-[72px] min-h-screen">
            <Navbar />

            {/* HERO */}
            <section className="py-10 px-6 bg-muted/20">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        {"Soliq bo'yicha tegishli yangiliklar"}
                    </motion.h1>
                </div>
            </section>

            <section className="py-10 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {suggested.map((article, i) => (
                        <motion.div
                            key={i}
                            onClick={() => router.push(`/blogs/123`)}
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
            </section>

            {/* HERO */}
            <section className="py-10 px-6 bg-muted/20">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        {"Soliq bo'yicha tegishli ma'lumotlar"}
                    </motion.h1>
                </div>
            </section>

            {/* GRID */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div
                        className="
              grid gap-8
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-2
              xl:grid-cols-3
            "
                    >
                        <AnimatePresence>
                            {visibleBlogs.map((blog) => (
                                <motion.article
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-card border border-border rounded-3xl overflow-hidden"
                                >
                                    <div className="relative aspect-video bg-black h-[500px] w-full">
                                        <video
                                            src={blog.videoUrl}
                                            muted
                                            controls
                                            playsInline
                                            preload="metadata"
                                            className="w-full h-full object-contain"
                                        />
                                        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full flex gap-1">
                                            <PlayCircle size={14} /> Video
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="font-bold">
                                            {blog.title[language]}
                                        </h3>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* SHOW MORE */}
                    {visibleCount < BLOGS.length && (
                        <div className="mt-12 flex justify-center">
                            <button
                                onClick={handleShowMore}
                                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90"
                            >
                                Show more
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
