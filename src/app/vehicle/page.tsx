"use client";

import Navbar from "@/components/sections/Navbar";
import StageInfo from "@/components/sections/StageInfo";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";

export default function VehiclePage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />

            {/* Hero / Intro for Vehicle Page */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-[#0f172a]">
                    {/* Technical Grid Pattern */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, #ffffff 1px, transparent 1px),
                                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px',
                        }}
                    />
                </div>
                <div className="container mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading tracking-tight"
                    >
                        COSMIC ONE
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        The world&apos;s first fully reusable medium-lift launch vehicle.
                    </motion.p>
                </div>
            </section>

            <StageInfo
                subtitle="Stage 1"
                title="The Booster"
                description="Powered by 9 Prometheus engines, the first stage provides the initial thrust to escape Earth's gravity well. Fully reusable and capable of autonomous landing."
                specs={[
                    { label: "Engine Cycle", value: "8x Full-flow Staged Combustion" },
                    { label: "Propellant", value: "LCH4 / LOX" },
                    { label: "ISP", value: "340s - 380s" },
                    { label: "Total Thrust", value: "713,000 kgf" }
                ]}
                imageSrc="/images/booster-grid-fins.jpg" // Placeholder
                isDark={true}
            />

            <StageInfo
                subtitle="Stage 2"
                title="Payload Delivery"
                description="The vacuum-optimized second stage ensures precise orbital insertion. Featuring a single expanded-nozzle engine for maximum efficiency in the void of space."
                isDark={true}
                isReversed={true}
                specs={[
                    { label: "Thrust", value: "1,900 kN" },
                    { label: "Payload to LEO", value: "6ton" }
                ]}
                imageSrc="/images/stage2-engine.jpg" // Placeholder
            />

            <Footer />
        </main>
    );
}
