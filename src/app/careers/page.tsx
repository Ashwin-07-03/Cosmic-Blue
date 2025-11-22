"use client";

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { motion } from 'framer-motion';

export default function CareersPage() {
    return (
        <main className="min-h-screen relative overflow-hidden">
            <Navbar theme="dark" />

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/careers-bg.png"
                    alt="Futuristic Space Colony"
                    className="w-full h-full object-cover"
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 pt-20">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Hero Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <h2 className="text-blue-400 font-medium tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]">
                            Join Our Mission
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight drop-shadow-lg">
                            BUILDING THE FUTURE FOR OURSELVES AND THOSE WHO FOLLOW
                        </h1>
                    </motion.div>

                    {/* Right Column: Mission & Apply (Glassmorphism) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-2xl shadow-2xl"
                    >
                        <div className="text-gray-100 space-y-6 text-lg leading-relaxed font-light">
                            <p>
                                The primary objective of Cosmic Blue is to enhance life and satisfy the curiosity inherent in humanity. The founders believe that we're not just a space company—we're so much more.
                            </p>
                            <p>
                                Our goal as a company is to inspire people and spark their curiosity about science and space. We want to show them that you don't need to be a scientist to explore science. You don't need a science degree to satisfy your curiosity and work on innovative ideas.
                            </p>
                            <p>
                                As a company, we ensure that schools and colleges don't kill a child's curiosity.
                            </p>
                            <p className="font-medium text-white pt-4 border-t border-white/10">
                                If you are an individual who is committed to creating something remarkable that will shape the future of both space and this nation, then you should consider pursuing a career with Cosmic Blue.
                            </p>
                        </div>

                        {/* Apply Action */}
                        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col items-center">
                            <a
                                href="mailto:ashwin.vk71@gmail.com?subject=Application for [Role Name] - [Your Name]&body=Dear Hiring Team,%0D%0A%0D%0AI am writing to apply for the [Role Name] position.%0D%0A%0D%0AHere are my details:%0D%0A- Role: [Role Name]%0D%0A- Why I fit: [Your explanation]%0D%0A- Contribution: [Your contribution]%0D%0A- Current Salary: [Amount]%0D%0A- Expected Salary: [Amount]%0D%0A%0D%0AI have attached my CV for your review.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
                                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-widest uppercase rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)]"
                            >
                                <span>Initiate Application</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                            <p className="text-xs text-blue-200/70 mt-4 uppercase tracking-widest">
                                Launch Your Career
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="relative z-10 mt-20">
                <Footer />
            </div>
        </main>
    );
}
