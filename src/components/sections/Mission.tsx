"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Mission() {
    const ref = useRef(null);

    return (
        <section id="mission" className="py-40 bg-background relative overflow-hidden min-h-[800px]" ref={ref}>
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                    onEnded={(e) => {
                        const video = e.currentTarget;
                        video.currentTime = 0;
                        video.play();
                    }}
                >
                    <source src="/videos/189455-885804454_medium.mp4" type="video/mp4" />
                </video>
                {/* Gradient overlay for right side text area */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 h-full pt-16">
                {/* Mission Text - No box, strong text styling */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                    className="absolute right-6 top-16 max-w-md"
                >
                    <span
                        className="text-cosmic-blue text-[11px] font-semibold tracking-[0.3em] mb-4 uppercase block"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,1), 0 4px 20px rgba(0,0,0,0.8)' }}
                    >
                        Our Mission
                    </span>
                    <h4
                        className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-wide"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,1), 0 4px 25px rgba(0,0,0,0.9)' }}
                    >
                        Space for Everyone
                    </h4>
                    <p
                        className="text-sm text-white leading-relaxed mb-10 font-normal"
                        style={{ textShadow: '0 2px 8px rgba(0,0,0,1), 0 4px 15px rgba(0,0,0,0.8)' }}
                    >
                        We believe that humanity&apos;s future lies among the stars. By reducing the cost of launch,
                        we open the door to a new era of exploration, innovation, and discovery.
                    </p>

                    {/* Know More Button */}
                    <a
                        href="/mission"
                        className="group inline-flex items-center gap-3 text-white text-[11px] font-medium tracking-[0.25em] uppercase border-b border-white/50 pb-2 hover:border-cosmic-blue transition-all duration-500"
                        style={{ textShadow: '0 2px 8px rgba(0,0,0,1)' }}
                    >
                        <span>Know More</span>
                        <span className="w-4 h-[1px] bg-white/60 group-hover:w-6 group-hover:bg-cosmic-blue transition-all duration-500" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
