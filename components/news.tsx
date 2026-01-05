import { useApp } from "@/contexts/app-context"
import { NEWS } from "@/data/news"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const NewsComponent = () => {

    const { language } = useApp()
    const suggested = NEWS
    const router = useRouter()


    return (
        <div>

            {/* HERO */}
            <section className="py-10 px-6 bg-muted/20">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
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
                            onClick={() => router.push(`/blogs/${article?.id}`)}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer border border-border/50 group"
                        >
                            <div className="w-full sm:w-40 h-40 rounded-2xl overflow-hidden shrink-0">
                                <img
                                    src={`${article?.image}`}
                                    alt={article.title[language]}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-xl font-bold mb-2 line-clamp-4 group-hover:text-primary transition-colors leading-tight">
                                    {article?.title[language]}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default NewsComponent