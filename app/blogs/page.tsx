"use client"
import axios from 'axios'
import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useApp } from "@/contexts/app-context"
import { motion, AnimatePresence } from "framer-motion"
import { PlayCircle } from "lucide-react"
import NewsComponent from "@/components/news"
import { translations } from "@/lib/translations"
import { Blog, BLOGS } from "@/data/blogs"

interface BlogFromBackend {
    id: string;
    titleEn: string;
    titleRu: string;
    titleUz: string;
    videoUrl: string;
}

const MOBILE_LIMIT = 3
const DESKTOP_LIMIT = 9
const SM_BREAKPOINT = 640

export default function BlogPage() {
    const { language } = useApp()

    const [blogs, setBlogs] = useState<BlogFromBackend[] | []>([]);
    const t = translations[language].news;

    const [isMobile, setIsMobile] = useState(false);
    const [visibleCount, setVisibleCount] = useState(DESKTOP_LIMIT)

    const backLang = language.charAt(0)?.toUpperCase() + language.slice(1)?.toLowerCase();
    const baseUrl = process.env.NEXT_API_URL;


    const getBlogs = async () => {
        const data = await axios.get<BlogFromBackend>(`https://soliq-backend.onrender.com/blogs`);
        setBlogs(data.data);
    }

    useEffect(() => {
        getBlogs();
    }, [])

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

    const visibleBlogs = [...BLOGS]
        .reverse()
        .slice(0, visibleCount);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + (isMobile ? MOBILE_LIMIT : DESKTOP_LIMIT))
    }

    console.log(baseUrl, 'Base Url');
    console.log(backLang, 'Backend lang');
    // console.log(blogs[0]?.title, 'Blogs coming')
    // console.log(`Lang coming from i18: ${language}, ${blogs && blogs[0][`title${backLang}`]}`);

    return (
        <main className="pt-[72px] min-h-screen">
            <Navbar />

            <NewsComponent />

            {/* HERO */}
            <section className="py-10 px-6 bg-muted/20">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
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
                            {visibleBlogs && Array.from(visibleBlogs)?.map((blog) => (
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
                                            src={blog?.videoUrl}
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
                                            {/* {blog?.[`title${backLang}`]} */}
                                            {blog?.title[language]}
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
                                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 cursor-pointer"
                            >
                                {t.showMore}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
