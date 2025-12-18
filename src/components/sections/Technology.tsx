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
        <section id="technology" className="py-32 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-cosmic-blue text-[10px] font-light tracking-[0.3em] mb-6 uppercase block"
                    >
                        Technology
                    </motion.span>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-light text-white mb-6"
                    >
                        Engineering the Future
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-sm text-gray-400 font-light leading-relaxed"
                    >
                        Our vehicles incorporate cutting-edge innovations to maximize performance and minimize cost.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="group p-8 bg-surface-elevated/50 hover:bg-surface-interactive/50 transition-all duration-500 cursor-default"
                        >
                            <div className="mb-6 inline-flex p-3 text-gray-500 group-hover:text-cosmic-blue transition-colors duration-500">
                                <tech.icon className="w-5 h-5" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-sm font-medium text-white mb-3 tracking-wide">
                                {tech.title}
                            </h4>
                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                {tech.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
