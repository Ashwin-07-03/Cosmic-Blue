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
    isDark = true, // Default value kept, but we'll override behavior
    badge,
}: StageInfoProps) {
    // In dark theme, we alternate between black and very dark gray
    // We'll use isDark prop to determine if it's the "darker" (black) section or lighter (white) section
    const bgClass = isDark ? "bg-black" : "bg-white";
    const textClass = isDark ? "text-white" : "text-black";
    const subTextClass = isDark ? "text-gray-400" : "text-gray-600";
    const borderClass = isDark ? "border-white/10" : "border-black/10";
    const itemBgClass = isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10";

    return (
        <section
            className={cn(
                "py-24 relative overflow-hidden",
                bgClass,
                textClass
            )}
        >
            <div className="container mx-auto px-6">
                <div
                    className={cn(
                        "flex flex-col lg:flex-row items-center gap-16",
                        isReversed ? "lg:flex-row-reverse" : ""
                    )}
                >
                    {/* Specs Content */}
                    <div className="lg:w-1/2 z-10">
                        <motion.div
                            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <h2 className="text-cosmic-blue font-medium tracking-[0.2em] uppercase drop-shadow-[0_0_5px_rgba(79,195,247,0.5)]">
                                    {subtitle}
                                </h2>
                                {badge && (
                                    <span className="px-3 py-1 rounded-full border border-cosmic-blue text-cosmic-blue text-xs font-bold tracking-wider">
                                        {badge}
                                    </span>
                                )}
                            </div>

                            <h3
                                className={cn(
                                    "text-4xl md:text-5xl font-heading font-bold mb-8",
                                    textClass
                                )}
                            >
                                {title}
                            </h3>

                            <div className={cn("grid grid-cols-1 gap-px bg-white/10 rounded-lg overflow-hidden border", borderClass)}>
                                {specs.map((spec, index) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            "p-4 flex justify-between items-center transition-colors",
                                            itemBgClass
                                        )}
                                    >
                                        <span className={cn("font-medium", subTextClass)}>
                                            {spec.label}
                                        </span>
                                        <span className={cn("font-bold", textClass)}>
                                            {spec.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Content */}
                    <div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center">
                        {/* Placeholder for visual if no image provided */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative w-full h-full"
                        >
                            {imageSrc ? (
                                <Image src={imageSrc} alt={title} fill className="object-contain" />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 flex items-center justify-center">
                                    <span className="text-gray-500 font-heading text-2xl uppercase tracking-widest">
                                        {title} Visual
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
