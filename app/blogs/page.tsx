"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useApp } from "@/contexts/app-context"
import { translations } from "@/lib/translations"
import { motion, AnimatePresence } from "framer-motion"
import { PlayCircle } from "lucide-react"

const BLOGS = [
    ...Array.from({ length: 12 }).map((_, i) => ({
        id: i + 1,
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
    })),
]

const MOBILE_LIMIT = 3
const SM_BREAKPOINT = 640 // Tailwind sm

export default function BlogPage() {
    const { language } = useApp()
    const [showAll, setShowAll] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Detect screen size
    useEffect(() => {
        const check = () => {
            setIsMobile(window.innerWidth < SM_BREAKPOINT)
        }

        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    const visibleBlogs = isMobile
        ? showAll
            ? BLOGS
            : BLOGS.slice(0, MOBILE_LIMIT)
        : BLOGS // desktop/tablet = ALL

    return (
        <main className="pt-[72px] min-h-screen">
            <Navbar />

            {/* HERO */}
            <section className="py-24 px-6 bg-muted/20">
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
                                        {/* <p className="text-sm text-muted-foreground">
                                            {blog.description[language]}
                                        </p> */}
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* SHOW MORE — MOBILE ONLY */}
                    {isMobile && !showAll && BLOGS.length > MOBILE_LIMIT && (
                        <div className="mt-12 flex justify-center">
                            <button
                                onClick={() => setShowAll(true)}
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
