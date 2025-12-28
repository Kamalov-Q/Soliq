"use client"

import { motion } from "framer-motion"
import { Award, Briefcase, TrendingUp, Users } from "lucide-react"
import { Counter } from "./counter"

export function StatsSection({ t }: { t: any }) {
    const stats = [
        {
            icon: <Users size={42} />,
            value: 500,
            suffix: "+",
            label: t.about.clients,
        },
        {
            icon: <TrendingUp size={42} />,
            value: 10,
            suffix: "+",
            label: t.about.experience,
        },
        {
            icon: <Award size={42} />,
            value: 1000,
            suffix: "+",
            label: t.about.projects,
        },
        {
            icon: <Briefcase size={42} />,
            value: 25,
            suffix: "+",
            label: t.about.experts,
        },
    ]

    return (
        <section className="relative py-32 ">
            <div className="max-w-7xl mx-auto relative z-10 px-6">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t.stats.title}
                    </h2>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }} // 🔥 important
                            transition={{ delay: i * 0.1 }}
                            className="text-center group"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <div className="text-white">{stat.icon}</div>
                                </div>
                            </div>

                            {/* Counter */}
                            <div className="text-5xl md:text-6xl font-bold mb-3 text-white">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>

                            {/* Label */}
                            <div className="text-white/80 text-lg font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
