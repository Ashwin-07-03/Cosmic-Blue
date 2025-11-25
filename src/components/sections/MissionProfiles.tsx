"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
        <section id="capabilities" className="py-[120px] bg-black relative overflow-hidden min-h-[600px] flex flex-col justify-center">
            {/* Background Image - Earthrise Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="/images/earth-horizon-clean.png"
                    alt="Earth Horizon"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/60" />
            </motion.div>

            <div className="container mx-auto px-12 relative z-10">
                <div className="text-center mb-24">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-[56px] font-light text-white uppercase tracking-[0.08em]"
                    >
                        Mission Profiles
                    </motion.h3>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
                    {profiles.map((profile, index) => (
                        <motion.div
                            key={profile.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            <h4 className="text-[72px] font-light text-white mb-2 leading-none">
                                {profile.capacity}
                            </h4>
                            <span className="text-[16px] text-accent font-medium tracking-[0.12em] mb-6 uppercase">
                                {profile.title}
                            </span>
                            <p className="text-[12px] text-white/50 tracking-[0.1em] mb-5 uppercase">
                                {profile.subtitle}
                            </p>
                            <p className="text-[16px] text-white/70 leading-[1.6] font-light max-w-[350px]">
                                {profile.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
