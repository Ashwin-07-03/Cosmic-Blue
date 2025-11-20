"use client";

import { motion } from "framer-motion";
import { Cpu, Flame, Zap, ShieldCheck, Repeat, Wind } from "lucide-react";

const technologies = [
    {
        title: "Methalox Propulsion",
        description: "Clean-burning methane fuel enables soot-free engine reuse and in-situ resource utilization on Mars.",
        icon: Flame,
    },
    {
        title: "Additive Manufacturing",
        description: "Entire engine chambers printed in days, reducing part count by 90% and cost by 50%.",
        icon: Cpu,
    },
    {
        title: "Autonomous Flight Safety",
        description: "Onboard systems monitor vehicle health and trajectory, eliminating reliance on ground radar.",
        icon: ShieldCheck,
    },
    {
        title: "Electric Pump Cycle",
        description: "Battery-driven pumps for the upper stage simplify plumbing and allow instant restart capability.",
        icon: Zap,
    },
    {
        title: "Rapid Reusability",
        description: "Designed for 24-hour turnaround with automated inspection and refueling systems.",
        icon: Repeat,
    },
    {
        title: "Active Aerodynamics",
        description: "Grid fins and body flaps provide precise control during atmospheric reentry and landing.",
        icon: Wind,
    },
];

export default function Technology() {
    return (
        <section id="technology" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-cosmic-blue font-medium tracking-[0.2em] mb-4 uppercase"
                    >
                        Technology
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-cosmic-black mb-6"
                    >
                        Engineering the Future
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600"
                    >
                        Our vehicles incorporate cutting-edge innovations to maximize performance and minimize cost.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-xl bg-white border border-gray-200 hover:border-cosmic-blue/30 hover:shadow-lg hover:shadow-cosmic-blue/5 transition-all group"
                        >
                            <div className="mb-6 inline-flex p-3 rounded-lg bg-gray-50 text-cosmic-blue group-hover:bg-cosmic-blue group-hover:text-white transition-colors duration-300">
                                <tech.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-cosmic-black mb-3 group-hover:text-cosmic-blue transition-colors">
                                {tech.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {tech.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
