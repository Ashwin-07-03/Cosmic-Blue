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
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Video */}
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading tracking-tight drop-shadow-2xl">
                            OUR MISSION
                        </h1>
                        <p className="text-lg md:text-xl text-white font-bold leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                            Making space accessible, affordable, and sustainable for everyone to make life better on earth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Details - Space for Everyone */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-32">
                {/* Realistic Calm Sky Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/calm-pink-sky.png"
                        alt="Calm Pink Sky"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Subtle overlay for text readability */}
                    <div className="absolute inset-0 bg-white/10" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl font-bold text-slate-900 mb-10 font-heading tracking-tight">
                                Space for Everyone
                            </h2>
                            <div className="space-y-8 text-lg md:text-xl text-slate-800 font-medium leading-relaxed">
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
            {/* Product Roadmap Section - Cosmic Trajectory */}
            <section className="py-16 relative overflow-hidden">
                {/* Cosmic Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/stratosphere-left-angle-clear.png"
                        alt="Cosmic Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading tracking-tight drop-shadow-lg">
                            Cosmic Blue Product Roadmap
                        </h2>
                        <h3 className="text-lg md:text-xl text-blue-400 font-bold tracking-[0.2em] uppercase drop-shadow-md">
                            2025-2027
                        </h3>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Glowing Trajectory Line (SVG) */}
                        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-full h-full pointer-events-none hidden md:block">
                            <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="trajectory-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(96, 165, 250, 0)" />
                                        <stop offset="10%" stopColor="rgba(96, 165, 250, 0.8)" />
                                        <stop offset="90%" stopColor="rgba(96, 165, 250, 0.8)" />
                                        <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
                                    </linearGradient>
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="4" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>
                                <motion.path
                                    d="M 400 0 C 400 50, 250 100, 250 200 C 250 300, 550 350, 550 450 C 550 500, 400 550, 400 600"
                                    fill="none"
                                    stroke="url(#trajectory-gradient)"
                                    strokeWidth="2"
                                    filter="url(#glow)"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                />
                            </svg>
                        </div>

                        {/* Mobile Vertical Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent md:hidden" />

                        <div className="space-y-10 relative">
                            {[
                                { phase: "Phase 1", title: "Engine Design & Analysis", desc: "Initial conceptualization and computational fluid dynamics simulations." },
                                { phase: "Phase 2", title: "Engine Component Development", desc: "Prototyping and testing of turbopumps, injectors, and combustion chambers." },
                                { phase: "Phase 3", title: "Integrated Subsystem Testing", subtitle: "(Fluid Path Integration)", desc: "Full system integration tests to verify fluid dynamics and control systems." },
                                { phase: "Phase 4", title: "Single Engine Qualification", desc: "Rigorous hot-fire testing to certify engine performance and reliability." },
                                { phase: "Phase 5", title: "Cluster Integration & Flight Qualification", desc: "Multi-engine integration and final flight readiness reviews." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                                >
                                    {/* Content Node */}
                                    <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                                        <div className="relative">
                                            <span className="text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase block mb-1 drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]">
                                                {item.phase}
                                            </span>
                                            <h4 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg">
                                                {item.title}
                                            </h4>
                                            {item.subtitle && (
                                                <p className="text-blue-200 text-sm mb-1 font-medium">{item.subtitle}</p>
                                            )}
                                            <p className="text-gray-300 text-sm leading-relaxed max-w-sm ml-0 md:ml-auto md:mr-0">
                                                {index % 2 !== 0 && (
                                                    <span className="md:ml-0 md:mr-auto block">{item.desc}</span>
                                                )}
                                                {index % 2 === 0 && (
                                                    <span className="block">{item.desc}</span>
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Orbital Node (Star) */}
                                    <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10
                                        ${index === 0 ? 'md:translate-x-[-150px]' : ''}
                                        ${index === 1 ? 'md:translate-x-[150px]' : ''}
                                        ${index === 2 ? 'md:translate-x-[-150px]' : ''}
                                        ${index === 3 ? 'md:translate-x-[150px]' : ''}
                                        ${index === 4 ? 'md:translate-x-0' : ''}
                                    `}>
                                        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" />
                                    </div>

                                    {/* Spacer for layout balance */}
                                    <div className="hidden md:block flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
