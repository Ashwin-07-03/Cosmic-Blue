"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    const ref = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <section
            ref={ref}
            className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center"
        >
            {/* 1. Video Background (Static Position, Fade In) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/74926-554074582_medium.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay for better visibility + text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
            </motion.div>

            {/* 3. Hero Content - Lower Third, Cinematic Fade */}
            <div className="relative z-10 container mx-auto px-6 pb-32 flex flex-col justify-end h-full text-center">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.5 }}
                    >
                        <h1 className="text-2xl md:text-4xl font-body font-light text-white mb-6 tracking-tight leading-tight">
                            Let&apos;s make space more <span className="font-medium">affordable</span>, <span className="font-medium">accessible</span> and <span className="font-medium">repeatable</span>
                        </h1>

                        <p className="text-xs md:text-sm text-gray-400 mb-12 uppercase tracking-[0.3em] font-light">
                            Making launches as routine as rides
                        </p>

                        <div>
                            <a
                                href="#mission"
                                className="group inline-flex items-center gap-3 px-8 py-3.5 text-white text-[11px] font-light tracking-[0.25em] uppercase border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-cosmic-blue/50 transition-all duration-500 rounded-sm"
                            >
                                <span>Watch Launch</span>
                                <span className="w-4 h-[1px] bg-white/30 group-hover:w-6 group-hover:bg-cosmic-blue transition-all duration-500" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="text-white/30 w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
}
