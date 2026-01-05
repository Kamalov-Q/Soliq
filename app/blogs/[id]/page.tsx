"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useApp } from "@/contexts/app-context"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useParams, useRouter } from "next/navigation"
import { NEWS } from "@/data/news"
import { User } from "lucide-react"

export default function NewsPage() {
    const { language } = useApp()

    const { id } = useParams();
    const newsId = Number(id);

    const featured = NEWS.filter((news) => news.id === newsId)[0];

    const list = NEWS;
    const router = useRouter();

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Featured News */}
            <section className="py-16 px-6 mt-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto bg-card border border-border/50 rounded-4xl overflow-hidden shadow-2xl shadow-primary/10"
                    >
                        {/* Image at the top */}
                        <div className="relative w-full aspect-video overflow-hidden">
                            <img
                                src={`${featured?.image}`}
                                alt={featured?.title[language]}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content below */}
                        <div className="p-8 md:p-12 flex flex-col gap-6">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight hover:text-primary transition-colors cursor-pointer">
                                {featured?.title[language]}
                            </h2>

                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {featured?.desc[language]}
                            </p>

                            <div className="flex items-center justify-center pt-4 border-t border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold">{featured?.author}</div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-widest">
                                            Editor
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* News List Section */}
            <section className="py-16 px-6 bg-muted/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {list.map((article, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                onClick={() => router.push(`/blogs/${article?.id}`)}
                            >
                                <Card className="h-full pb-4 border-none bg-transparent group cursor-pointer">
                                    <div className="aspect-16/10 relative rounded-2xl overflow-hidden  shadow-lg shadow-primary/5">
                                        <img
                                            src={`${article?.image}`}
                                            alt={article.title[language]}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <CardHeader className="px-4">
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors leading-snug">
                                            {article.title[language]}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-4">
                                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">{article.desc[language]}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <Footer />
        </main>
    )
}
