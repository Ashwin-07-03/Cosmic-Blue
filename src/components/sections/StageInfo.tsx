"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../ui/Button";

interface Spec {
    label: string;
    value: string;
}

interface StageInfoProps {
    title: string;
    subtitle: string;
    description?: string;
    specs: Spec[];
    imageSrc?: string; // Optional, using placeholder if not provided
    isReversed?: boolean;
    isDark?: boolean; // Kept for compatibility but logic updated for light theme
    badge?: string;
}

export default function StageInfo({
    title,
    subtitle,
    specs,
    imageSrc,
    isReversed = false,
    isDark = true,
    badge,
}: StageInfoProps) {
    // Determine which stage to render
    const isStage1 = subtitle.toLowerCase().includes("stage 1");
    const isStage2 = subtitle.toLowerCase().includes("stage 2");

    return (
        <section className="py-16 relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-black">
            {/* Technical Background */}
            <div className="absolute inset-0 z-0 opacity-10">
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

            <div className="container mx-auto px-6 relative z-10">
                <div className={cn(
                    "flex flex-col lg:flex-row items-center gap-12",
                    isReversed ? "lg:flex-row-reverse" : ""
                )}>
                    {/* Specs Content */}
                    <div className="lg:w-1/2 z-10">
                        <motion.div
                            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <h2 className="text-blue-400 font-medium tracking-[0.2em] uppercase text-sm drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]">
                                    {subtitle}
                                </h2>
                                {badge && (
                                    <span className="px-3 py-1 rounded-full border border-blue-400 text-blue-400 text-xs font-bold tracking-wider">
                                        {badge}
                                    </span>
                                )}
                            </div>

                            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white uppercase tracking-wide">
                                {title}
                            </h3>

                            <div className="grid grid-cols-1 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/10">
                                {specs.map((spec, index) => (
                                    <div
                                        key={index}
                                        className="p-4 flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        <span className="font-medium text-gray-400 text-sm">
                                            {spec.label}
                                        </span>
                                        <span className="font-bold text-white">
                                            {spec.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* SVG Diagram */}
                    <div className="lg:w-1/2 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative flex justify-center items-center h-[500px] w-full"
                        >
                            <svg viewBox="0 0 200 600" className="h-full w-auto drop-shadow-[0_0_10px_rgba(96,165,250,0.3)]">
                                <defs>
                                    <linearGradient id={`line-gradient-${subtitle}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                                        <stop offset="20%" stopColor="white" stopOpacity="1" />
                                        <stop offset="80%" stopColor="white" stopOpacity="1" />
                                        <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>

                                {/* Center Line */}
                                <line x1="100" y1="100" x2="100" y2="500" stroke="white" strokeOpacity="0.1" strokeDasharray="4 4" />

                                {isStage1 && (
                                    /* Stage 1 Only - Booster */
                                    <g stroke={`url(#line-gradient-${subtitle})`} strokeWidth="2" fill="none">
                                        {/* Booster Body */}
                                        <path d="M70 150 L70 450 L130 450 L130 150" />

                                        {/* Grid Fins */}
                                        <path d="M70 180 L55 175 L55 195 L70 190" />
                                        <path d="M130 180 L145 175 L145 195 L130 190" />

                                        {/* Landing Legs (Deployed) */}
                                        <path d="M70 450 L50 490 L75 450" />
                                        <path d="M130 450 L150 490 L125 450" />

                                        {/* Engine Nozzles */}
                                        <circle cx="85" cy="460" r="8" />
                                        <circle cx="100" cy="465" r="8" />
                                        <circle cx="115" cy="460" r="8" />

                                        {/* Label */}
                                        <text x="150" y="300" fill="white" fontSize="10" fontFamily="monospace" opacity="0.8">STAGE 1</text>
                                        <line x1="135" y1="300" x2="145" y2="300" stroke="white" strokeWidth="1" />
                                    </g>
                                )}

                                {isStage2 && (
                                    /* Stage 2 Only - Upper Stage */
                                    <g stroke={`url(#line-gradient-${subtitle})`} strokeWidth="2" fill="none">
                                        {/* Fairing / Nose Cone */}
                                        <path d="M100 120 L130 190 L130 300 L70 300 L70 190 Z" />

                                        {/* Payload Section Divider */}
                                        <line x1="70" y1="300" x2="130" y2="300" />

                                        {/* Upper Stage Body */}
                                        <path d="M70 300 L70 450 L130 450 L130 300" />

                                        {/* Engine Nozzle (Single, Vacuum Optimized) */}
                                        <path d="M85 450 L80 480 L120 480 L115 450" />

                                        {/* Label */}
                                        <text x="150" y="350" fill="white" fontSize="10" fontFamily="monospace" opacity="0.8">STAGE 2</text>
                                        <line x1="135" y1="350" x2="145" y2="350" stroke="white" strokeWidth="1" />
                                    </g>
                                )}
                            </svg>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="text-xs text-gray-500 italic mt-4 text-center"
                        >
                            Note: This model is for reference only. The final design is coming soon.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
