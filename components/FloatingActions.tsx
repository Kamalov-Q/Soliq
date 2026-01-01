"use client"

import { useEffect, useState } from "react"
import { Phone, ArrowUp, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingActions() {
    const [open, setOpen] = useState(false)
    const [showTop, setShowTop] = useState(false)

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 300)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

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
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition cursor-pointer"
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
                        className="fixed bottom-24 right-6 z-40 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
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
                            <div className="bg-background rounded-3xl p-8 w-full max-w-md shadow-2xl">
                                <div className="flex items-center justify-between pb-8 gap-4">


                                    <h2 className="text-2xl font-bold text-center">
                                        Biz bilan bog‘laning
                                    </h2>

                                    {/* CLOSE BUTTON */}
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="rounded-full hover:bg-muted transition cursor-pointer"
                                        aria-label="Close"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <form className="space-y-4">
                                    <input
                                        placeholder="Ismingiz"
                                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Elektron pochta"
                                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Telefon raqami"
                                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                                    />

                                    <textarea
                                        placeholder="Xabaringiz"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                                    />

                                    <button
                                        type="submit"
                                        className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition cursor-pointer"
                                    >
                                        Yuborish
                                    </button>
                                </form>
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
