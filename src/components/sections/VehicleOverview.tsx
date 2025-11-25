"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
    {
        title: "100% Recovery",
        description: "Complete recovery of booster, fairing, and payload stage for LEO & GTO missions.",
    },
    {
        title: "Full-Flow Staged Combustion",
        description: "Advanced engine cycle delivering maximum efficiency and reliability.",
    },
    {
        title: "Rapid Turnaround",
        description: "Designed for weekly launch cadence with minimal refurbishment.",
    },
    {
        title: "50+ Mission Lifespan",
        description: "Robust thermal protection and structural integrity for long-term reusability.",
    },
];

export default function VehicleOverview() {
    return (
        <section id="vehicle" className="py-[120px] relative overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-black">
            {/* Technical Background */}
            <div className="absolute inset-0 z-0 opacity-10">
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #ffffff 1px, transparent 1px),
                            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        opacity: 0.1
                    }}
                />
            </div>

            <div className="container mx-auto px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-accent font-normal tracking-[0.15em] mb-4 uppercase text-[14px]"
                        >
                            The Vehicle
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-[64px] font-light text-white mb-8 uppercase tracking-normal leading-[1.1]"
                        >
                            Cosmic One
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-[17px] text-white/70 leading-[1.7] mb-16 max-w-[550px] font-light"
                        >
                            A fully reusable two-stage launch vehicle designed for reliability and rapid turnaround.
                            Cosmic One is built to make space access routine.
                        </motion.p>
                        <div className="space-y-[56px]">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                                    viewport={{ once: true }}
                                    className="pb-0 border-b-0"
                                >
                                    <h4 className="text-[28px] font-normal text-white mb-3">{feature.title}</h4>
                                    <p className="text-[16px] text-white/65 leading-[1.6] font-light max-w-[500px]">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            viewport={{ once: true }}
                            className="mt-16"
                        >
                            <Link
                                href="/vehicle"
                                className="inline-block px-8 py-3 border border-white/30 text-white text-[12px] font-normal tracking-[0.12em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Know More
                            </Link>
                        </motion.div>
                    </div>
                    <div className="flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative flex justify-center items-center h-[600px] w-full"
                        >
                            {/* Technical SVG Diagram */}
                            <svg viewBox="0 0 200 600" className="h-full w-auto drop-shadow-[0_0_10px_rgba(96,165,250,0.1)]">
                                <defs>
                                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                                        <stop offset="20%" stopColor="white" stopOpacity="1" />
                                        <stop offset="80%" stopColor="white" stopOpacity="1" />
                                        <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>

                                {/* Center Line */}
                                <line x1="100" y1="20" x2="100" y2="580" stroke="white" strokeOpacity="0.1" strokeDasharray="4 4" />

                                {/* Rocket Outline */}
                                <g stroke="url(#line-gradient)" strokeWidth="1.5" fill="none">
                                    {/* Fairing / Stage 2 */}
                                    <path d="M100 50 L130 120 L130 250 L70 250 L70 120 Z" />
                                    <line x1="70" y1="250" x2="130" y2="250" />

                                    {/* Interstage */}
                                    <path d="M70 250 L70 280 L130 280 L130 250" />

                                    {/* Stage 1 Booster */}
                                    <path d="M70 280 L70 530 L130 530 L130 280" />

                                    {/* Grid Fins (Simplified) */}
                                    <path d="M70 300 L55 295 L55 315 L70 310" />
                                    <path d="M130 300 L145 295 L145 315 L130 310" />

                                    {/* Landing Legs (Stowed) */}
                                    <path d="M70 530 L60 560 L75 530" />
                                    <path d="M130 530 L140 560 L125 530" />
                                </g>

                                {/* Labels */}
                                <g fill="white" fontSize="11" fontFamily="monospace" letterSpacing="0.1em" opacity="0.8">
                                    <text x="150" y="180">STAGE 2</text>
                                    <line x1="135" y1="180" x2="145" y2="180" stroke="white" strokeWidth="1" />

                                    <text x="150" y="400">STAGE 1</text>
                                    <line x1="135" y1="400" x2="145" y2="400" stroke="white" strokeWidth="1" />
                                </g>
                            </svg>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="text-[12px] text-white/40 italic mt-4 text-center font-light"
                        >
                            Note: This model is for reference only. The final design is coming soon.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
