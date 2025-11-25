"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
    {
        id: "reuses",
        label: "Reuses",
        value: "50+",
    },
    {
        id: "leo",
        label: "To LEO",
        value: "6,000kg",
    },
    {
        id: "cost",
        label: "Cost Per kg",
        value: "<$1,500",
    },
];

const ScrambleText = ({ text, trigger }: { text: string; trigger: boolean }) => {
    const [display, setDisplay] = useState("");
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

    useEffect(() => {
        if (!trigger) return;

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text, trigger]);

    return <span>{display}</span>;
};

export default function Mission() {
    const ref = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Slow down video playback
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <section id="mission" className="py-[120px] bg-black relative overflow-hidden min-h-[800px]" ref={ref}>
            {/* Video Background - Dual videos for seamless loop */}
            <div className="absolute inset-0 z-0">
                {/* Video 1 */}
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src="/videos/189455-885804454_medium.mp4" type="video/mp4" />
                </video>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="container mx-auto px-12 relative z-10 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
                    {/* Mission Text - Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="max-w-[600px]"
                    >
                        <h3 className="text-[14px] font-normal text-accent mb-6 uppercase tracking-[0.15em]">
                            Our Mission
                        </h3>
                        <h4 className="text-5xl md:text-[72px] font-light text-white mb-10 uppercase tracking-wide leading-[1.1]">
                            Space for Everyone
                        </h4>
                        <p className="text-[18px] text-white/75 leading-[1.7] mb-12 font-light">
                            We believe that humanity&apos;s future lies among the stars. By reducing the cost of launch,
                            we open the door to a new era of exploration, innovation, and discovery.
                        </p>

                        {/* Know More Button */}
                        <a
                            href="/mission"
                            className="inline-block px-9 py-3.5 text-white text-[12px] font-normal tracking-[0.12em] uppercase border border-white/30 hover:border-white hover:bg-white/5 transition-all duration-300"
                        >
                            Know More →
                        </a>
                    </motion.div>

                    {/* Right Column - Empty for now, allowing video to show through or for future content */}
                    <div className="hidden md:block"></div>
                </div>
            </div>
        </section >
    );
}
