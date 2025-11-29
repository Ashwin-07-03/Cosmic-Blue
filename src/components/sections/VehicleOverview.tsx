"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
        <section id="vehicle" className="py-16 relative overflow-hidden min-h-screen flex items-center bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 flex justify-end">
                <Image
                    src="/images/vehicle-section-bg.png"
                    alt="Cosmic One Vehicle Background"
                    fill
                    className="object-contain object-right md:object-center"
                    priority
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-blue-400 font-medium tracking-[0.2em] mb-2 uppercase text-sm drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]"
                        >
                            The Vehicle
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide"
                        >
                            Cosmic One
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-base text-gray-300 leading-relaxed mb-8 max-w-lg"
                        >
                            A fully reusable two-stage launch vehicle designed for reliability and rapid turnaround.
                            Cosmic One is built to make space access routine.
                        </motion.p>
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                                    viewport={{ once: true }}
                                    className="pb-4 border-b border-white/10 last:border-0"
                                >
                                    <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            viewport={{ once: true }}
                            className="mt-8"
                        >
                            <Link
                                href="/vehicle"
                                className="inline-block px-6 py-2 border border-white/30 text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Know More
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right column is now empty as the image is the background */}
                    <div className="hidden lg:block"></div>
                </div>
            </div>
        </section>
    );
}
