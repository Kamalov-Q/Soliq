"use client"
import { useApp } from "@/contexts/app-context"
import { motion, AnimatePresence } from "framer-motion"
import { PlayCircle } from "lucide-react"
import { translations } from "@/lib/translations"
import { BLOGS } from "@/data/blogs"

export default function BlogComponent() {
    const { language } = useApp()
    const t = translations[language].news;
    const visibleBlogs = BLOGS.reverse().slice(36)

    return (
        <main className="pt-[72px] min-h-screen">

            {/* HERO */}
            <section className="py-10 px-6 bg-muted/20">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        {t.subtitle_blog}
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
                </div>
            </section>
        </main>
    )
}
