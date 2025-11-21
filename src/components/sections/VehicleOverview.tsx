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
        <section id="vehicle" className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-cosmic-blue font-medium tracking-[0.2em] mb-4 uppercase drop-shadow-[0_0_5px_rgba(79,195,247,0.5)]"
                        >
                            The Vehicle
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-wide"
                        >
                            Cosmic One
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-400 leading-relaxed mb-12"
                        >
                            A fully reusable two-stage launch vehicle designed for reliability and rapid turnaround.
                            Cosmic One is built to make space access routine.
                        </motion.p>
                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                                    viewport={{ once: true }}
                                    className="pb-6 border-b border-gray-700 last:border-0"
                                >
                                    <h4 className="text-2xl font-bold text-white mb-2">{feature.title}</h4>
                                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            viewport={{ once: true }}
                            className="mt-12"
                        >
                            <Link
                                href="/vehicle"
                                className="inline-block px-8 py-3 border border-white/30 text-white font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Know More
                            </Link>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center items-center"
                    >
                        <img
                            src="/images/cosmic-one-render.png"
                            alt="Cosmic One Rocket"
                            className="max-w-full h-auto drop-shadow-[0_0_20px_rgba(79,195,247,0.5)]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
