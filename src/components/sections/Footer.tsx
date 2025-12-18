"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background text-white py-16 border-t border-white/5">
            <div className="container mx-auto px-6">
                {/* Main Footer Content */}
                <div className="flex flex-col items-center text-center space-y-8 mb-12">
                    <span className="text-[10px] font-light tracking-[0.4em] uppercase text-gray-500">
                        Cosmic Blue
                    </span>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        <Link href="/#mission" className="text-[11px] font-light text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]">
                            Mission
                        </Link>
                        <Link href="/#vehicle" className="text-[11px] font-light text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]">
                            Vehicle
                        </Link>
                        <Link href="/#capabilities" className="text-[11px] font-light text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]">
                            Capabilities
                        </Link>
                        <Link href="/careers" className="text-[11px] font-light text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]">
                            Careers
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-light text-gray-600 tracking-wider">
                        &copy; {new Date().getFullYear()} Cosmic Blue. All rights reserved.
                    </p>
                    <a
                        href="https://www.linkedin.com/company/cosmicblue/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-light text-gray-500 hover:text-white transition-colors duration-300 uppercase tracking-[0.2em]"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
