"use client";

import { useRef, useEffect } from "react";
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
                    playsInline
                    loop
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/74926-554074582_medium.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay as per specs */}
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* 3. Hero Content - Center Aligned */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center items-center h-full text-center">
                <div className="max-w-[900px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2.5, ease: "easeOut", delay: 1.0 }}
                    >
                        <h1 className="text-4xl md:text-[64px] font-light text-white mb-0 tracking-normal leading-[1.2]">
                            Let&apos;s make space more affordable,<br />
                            accessible and repeatable
                        </h1>

                        <p className="text-[14px] text-white/80 mt-8 uppercase tracking-[0.15em] font-normal">
                            MAKING LAUNCHES AS ROUTINE AS RIDES
                        </p>

                        <div className="mt-12">
                            <a
                                href="#mission"
                                className="inline-block px-10 py-4 text-white text-[12px] font-normal tracking-[0.12em] uppercase border border-white hover:bg-white/5 hover:scale-[1.02] transition-all duration-300"
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
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="text-white/50 w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
}
