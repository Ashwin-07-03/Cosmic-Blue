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
            className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2.5, ease: "easeOut", delay: 2.0 }}
                    >
                        <h1 className="text-2xl md:text-4xl font-body font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
                            Let&apos;s make space more affordable, accessible and repeatable
                        </h1>

                        <p className="text-sm md:text-base text-gray-300 mb-10 uppercase tracking-[0.2em] font-body">
                            MAKING LAUNCHES AS ROUTINE AS RIDES
                        </p>

                        <div>
                            <a
                                href="#mission"
                                className="inline-block px-8 py-3 text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-cosmic-blue hover:shadow-[0_0_20px_rgba(79,195,247,0.4)] transition-all duration-300 rounded-sm"
                            >
                                Watch Launch
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
