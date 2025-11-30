"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-heading font-bold tracking-widest uppercase">
                            Cosmic Blue
                        </span>
                        <p className="text-gray-500 text-sm mt-2">
                            &copy; {new Date().getFullYear()} Cosmic Blue. All rights reserved.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center mt-6 md:mt-0">
                        <Link href="/#mission" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">
                            Mission
                        </Link>
                        <Link href="/#vehicle" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">
                            Vehicle
                        </Link>
                        <Link href="/#capabilities" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">
                            Capabilities
                        </Link>
                        <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">
                            Careers
                        </Link>
                    </div>

                    <div className="flex gap-8 mt-6 md:mt-0">
                        <a
                            href="https://www.linkedin.com/company/cosmicblue/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
