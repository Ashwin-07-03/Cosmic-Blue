"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const profiles = [
    {
        id: "leo",
        title: "LEO",
        subtitle: "Low Earth Orbit",
        capacity: "6,000kg",
        description: "Deploy satellite constellations, cargo missions to Space Station, or large payloads to low Earth orbit with high cadence and low cost.",
        x: 20, // Percentage position on X axis
        y: 80, // Percentage position on Y axis (inverted, so 80 is low)
    },
    {
        id: "gto",
        title: "GTO",
        subtitle: "Geostationary Transfer Orbit",
        capacity: "1,500kg",
        description: "Direct insertion for communication satellites. Faster time to orbit, reduced satellite fuel consumption.",
        x: 50,
        y: 50,
    },
    {
        id: "tli",
        title: "TLI",
        subtitle: "Trans-Lunar Injection",
        capacity: "1,200kg",
        description: "Gateway to the Moon and beyond. Support lunar landers, cargo, and deep space missions with reusable architecture.",
        x: 80,
        y: 20,
    },
];

export default function MissionProfiles() {
    return (
        <section id="capabilities" className="py-20 bg-background relative overflow-hidden min-h-[600px] flex flex-col justify-center">
            {/* Background Image - Earthrise Animation */}
            <motion.div
                initial={{ y: 100, opacity: 0, scale: 1.1 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
                className="absolute inset-0 z-0"
            >
                <Image // Replaced img tag with Next.js Image component
                    src="/images/earth-horizon-clean.png"
                    alt="Earth Horizon"
                    fill // Added fill prop for background image
                    className="object-cover opacity-100" // w-full h-full is implied by fill
                />
                {/* Minimal overlay for text readability at edges only */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
            </motion.div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    {/* Removed "Capabilities" text */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide"
                    >
                        Mission Profiles
                    </motion.h3>
                </div>

                {/* Trajectory Container */}
                <div className="relative w-full max-w-6xl mx-auto h-[600px] hidden md:block">
                    {/* SVG Trajectory Line */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                        <defs>
                            <linearGradient id="trajectoryGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#333" />
                                <stop offset="50%" stopColor="#4FC3F7" />
                                <stop offset="100%" stopColor="#fff" />
                            </linearGradient>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {/* The Curve Path */}
                        <motion.path
                            d="M0,550 C200,550 400,300 1000,50"
                            fill="none"
                            stroke="url(#trajectoryGradient)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        />
                    </svg>

                    {/* Data Points */}
                    {profiles.map((profile, index) => (
                        <motion.div
                            key={profile.id}
                            className="absolute"
                            style={{ left: `${profile.x}%`, top: `${profile.y}%` }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 + index * 0.3 }}
                            viewport={{ once: true }}
                        >
                            {/* Node Circle on the line */}
                            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-2 border-cosmic-blue shadow-[0_0_15px_rgba(79,195,247,0.8)] z-20" />

                            {/* Connector Line & Content Container */}
                            <div className={`absolute flex items-center gap-4 ${index === 1 ? "flex-row-reverse -translate-x-full -translate-y-full pb-8 pr-8" : "pb-8 pl-8"}`}>

                                {/* Diagonal Connector Line */}
                                <div className={`absolute w-16 h-[1px] bg-gradient-to-r from-cosmic-blue/50 to-transparent
                                    ${index === 1 ? "bottom-4 right-0 rotate-45 origin-bottom-right" : "bottom-4 left-0 -rotate-45 origin-bottom-left"}`}
                                />

                                {/* Text Content */}
                                <div className={`min-w-[280px] ${index === 1 ? "text-right" : "text-left"}`}>
                                    <div className={`flex items-baseline gap-3 mb-2 ${index === 1 ? "justify-end" : "justify-start"}`}>
                                        <h4 className="text-5xl font-bold text-white">{profile.capacity}</h4>
                                        <span className="text-lg text-cosmic-blue font-bold tracking-widest">{profile.title}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-medium">{profile.subtitle}</p>

                                    {/* Description with Blinking Vertical Line */}
                                    <div className={`flex gap-4 ${index === 1 ? "flex-row-reverse" : "flex-row"}`}>
                                        <motion.div
                                            className="w-1 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                            animate={{ opacity: [0.2, 1, 0.2] }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                delay: index * 1,
                                                repeatDelay: 2, // (3 items - 1) * duration
                                                ease: "easeInOut"
                                            }}
                                        />
                                        <p className="text-sm text-gray-300 leading-relaxed">
                                            {profile.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View (Vertical Timeline) */}
                <div className="md:hidden space-y-12 mt-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-800 via-cosmic-blue to-white" />

                    {profiles.map((profile, index) => (
                        <motion.div
                            key={profile.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="pl-12 relative"
                        >
                            {/* Node Dot */}
                            <div className="absolute left-[11px] top-2 w-4 h-4 rounded-full bg-black border-2 border-cosmic-blue" />

                            <h4 className="text-4xl font-bold text-white mb-1">{profile.capacity}</h4>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-cosmic-blue font-bold tracking-widest">{profile.title}</span>
                                <span className="text-gray-500 text-xs uppercase tracking-wider">| {profile.subtitle}</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {profile.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
