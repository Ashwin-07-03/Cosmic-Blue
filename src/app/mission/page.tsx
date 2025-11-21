"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";

export default function MissionPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-end pb-32 justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/videos/88207-602915574.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading tracking-tight drop-shadow-2xl">
                            OUR MISSION
                        </h1>
                        <p className="text-xl md:text-2xl text-white font-bold leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                            Making space accessible, affordable, and sustainable for everyone to make life better on earth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Details */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-white mb-8 font-body">
                                Space for Everyone
                            </h2>
                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                <p>
                                    We believe that humanity's future lies among the stars. By reducing the cost of launch,
                                    we open the door to a new era of exploration, innovation, and discovery.
                                </p>
                                <p>
                                    At Cosmic Blue, we are pioneering a transformative vision for the future of space exploration.
                                    Our main goal is to develop a fully reusable 2 stage medium lift launch vehicle technology
                                    that not only significantly lowers the costs associated with satellite launches but also
                                    accelerates the entire launch process. This innovation is crucial in a world where the demand
                                    for satellite deployment is rapidly increasing. Each of our launch vehicles is meticulously
                                    engineered to withstand over 50 flights with minimal maintenance required.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="mt-12"
                        >
                            <Link
                                href="/"
                                className="inline-block px-8 py-4 text-white text-sm font-bold tracking-[0.2em] uppercase border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-cosmic-blue transition-all duration-300"
                            >
                                ← Back to Home
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Product Roadmap Section */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold text-white mb-2 font-body text-center">
                            Cosmic Blue Product Roadmap
                        </h2>
                        <h3 className="text-2xl text-cosmic-blue font-bold mb-4 text-center tracking-wider">
                            2025-2027
                        </h3>
                        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                            Starting with Full-Flow Staged Combustion (FFSC) engine development.
                        </p>

                        <div className="relative space-y-8">
                            {/* Vertical Line */}
                            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-cosmic-blue via-white/20 to-transparent md:left-1/2 md:-ml-[1px]" />

                            {[
                                { phase: "Phase 1", title: "Engine Design & Analysis" },
                                { phase: "Phase 2", title: "Engine Component Development" },
                                { phase: "Phase 3", title: "Integrated Subsystem Testing (IST)", subtitle: "(Fluid Path Integration)" },
                                { phase: "Phase 4", title: "Single Engine Qualification" },
                                { phase: "Phase 5", title: "Cluster Integration & Flight Qualification" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                                >
                                    {/* Content Side */}
                                    <div className="flex-1 md:text-right">
                                        <div className={`bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:border-cosmic-blue/50 transition-colors ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                            <span className="text-cosmic-blue text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                                                {item.phase}
                                            </span>
                                            <h4 className="text-xl font-bold text-white">
                                                {item.title}
                                            </h4>
                                            {item.subtitle && (
                                                <p className="text-gray-400 text-sm mt-1">{item.subtitle}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center z-10">
                                        <div className="w-4 h-4 bg-black border-2 border-cosmic-blue rounded-full shadow-[0_0_10px_rgba(79,195,247,0.5)]" />
                                    </div>

                                    {/* Empty Side for Desktop Balance */}
                                    <div className="hidden md:block flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
