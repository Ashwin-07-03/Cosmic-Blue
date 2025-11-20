"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";

const stats = [
    {
        id: "reuses",
        label: "Reuses",
        value: "50+",
    },
    {
        id: "leo",
        label: "To LEO",
        value: "6,000kg",
    },
    {
        id: "cost",
        label: "Cost Per kg",
        value: "<$1,500",
    },
];

const ScrambleText = ({ text, trigger }: { text: string; trigger: boolean }) => {
    const [display, setDisplay] = useState("");
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

    useEffect(() => {
        if (!trigger) return;

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text, trigger]);

    return <span>{display}</span>;
};

export default function MissionPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/mission-hero.png"
                        alt="Mission Control Spaceport"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 font-heading tracking-tight drop-shadow-2xl">
                            OUR MISSION
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto mb-16 drop-shadow-lg">
                            Making space accessible, affordable, and sustainable for everyone.
                        </p>

                        {/* Integrated Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/20 pt-12 backdrop-blur-sm bg-white/5 rounded-2xl p-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                                    className="text-center group"
                                >
                                    <div className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-2 font-body group-hover:text-cosmic-blue transition-colors duration-300">
                                        <ScrambleText text={stat.value} trigger={true} />
                                    </div>
                                    <div className="text-sm uppercase tracking-[0.3em] text-gray-400 font-bold font-body group-hover:text-white transition-colors duration-300">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
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
                                    Our mission is to make space access as routine and affordable as commercial air travel.
                                    Through innovative reusable rocket technology and efficient operations, we're bringing down
                                    the barriers that have kept space exploration exclusive.
                                </p>
                                <p>
                                    With our fully reusable launch system, we can achieve over 50 reuses per vehicle,
                                    deliver 6,000kg to Low Earth Orbit, and maintain launch costs under $1,500 per kilogram—
                                    revolutionizing the economics of space access.
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
