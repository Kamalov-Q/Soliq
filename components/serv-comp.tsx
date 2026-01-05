'use client'
import Image from "next/image";
import { SERVICES, Services } from "../data/services";
import { useApp } from "@/contexts/app-context";
import { Footer } from "./footer";

export default function ServicesComponent() {
    const { language } = useApp();
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-10">
                <h1 className="text-4xl font-bold text-center mb-12">Bizning Xizmatlarimiz</h1>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service: Services) => (
                        <section
                            key={service.id}
                            id={`service-${service.id}`}
                            className="rounded-2xl shadow-lg overflow-hidden border flex flex-col"
                        >
                            <div className="relative h-64 w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title[language]}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-2xl font-semibold mb-4">{service.title[language]}</h2>
                                <ul className="list-disc list-inside space-y-2 flex-1">
                                    {service.serv1 && <li>{service.serv1[language]}</li>}
                                    {service.serv2 && <li>{service.serv2[language]}</li>}
                                    {service.serv3 && <li>{service.serv3[language]}</li>}
                                </ul>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
