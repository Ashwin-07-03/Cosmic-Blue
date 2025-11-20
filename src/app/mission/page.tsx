"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

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
            {/* Hero Section */}
            <section className="py-32 bg-black relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-body">
                            Our Mission
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Making space accessible, affordable, and sustainable for everyone
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={ref} className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="text-7xl md:text-8xl font-bold text-white tracking-tight mb-4 font-body leading-none">
                                        <ScrambleText text={stat.value} trigger={isInView} />
                                    </div>
                                    <div className="text-sm uppercase tracking-[0.3em] text-cosmic-blue font-bold font-body">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
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
        </main>
    );
}
