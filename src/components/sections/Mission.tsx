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
        <section id="mission" className="py-40 bg-black relative overflow-hidden min-h-[800px]" ref={ref}>
            {/* Video Background - Dual videos for seamless loop */}
            <div className="absolute inset-0 z-0">
                {/* Video 1 */}
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                    onEnded={(e) => {
                        // Restart immediately when ended
                        const video = e.currentTarget;
                        video.currentTime = 0;
                        video.play();
                    }}
                >
                    <source src="/videos/189455-885804454_medium.mp4" type="video/mp4" />
                </video>
                {/* Light gradient overlay only */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
            </div>

            <div className="container mx-auto px-6 relative z-10 h-full pt-16">
                {/* Mission Text - Positioned Absolute Right */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute right-6 top-16 max-w-md"
                >
                    <h3 className="text-sm font-medium text-blue-400 mb-2 font-heading uppercase tracking-[0.2em]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                        Our Mission
                    </h3>
                    <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading uppercase tracking-wide" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
                        Space for Everyone
                    </h4>
                    <p className="text-base text-gray-300 leading-relaxed mb-8 max-w-lg" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.9)' }}>
                        We believe that humanity's future lies among the stars. By reducing the cost of launch,
                        we open the door to a new era of exploration, innovation, and discovery.
                    </p>

                    {/* Know More Button */}
                    <a
                        href="/mission"
                        className="inline-block px-6 py-3 text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-cosmic-blue transition-all duration-300"
                    >
                        Know More →
                    </a>
                </motion.div>
            </div>
        </section >
    );
}
