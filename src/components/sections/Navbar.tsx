"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { name: "Mission", href: "/#mission" },
    { name: "Vehicle", href: "/#vehicle" },
    { name: "Capabilities", href: "/#capabilities" },
    { name: "Careers", href: "/careers" },
];

interface NavbarProps {
    theme?: "dark" | "light";
}

export default function Navbar({ theme = "dark" }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolled past threshold
            setIsScrolled(currentScrollY > 50);

            // Determine visibility based on scroll direction
            if (currentScrollY < lastScrollY || currentScrollY < 100) {
                // Scrolling up or near top - show navbar
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down and past threshold - hide navbar
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const textColor = "text-white";
    const hoverColor = "hover:text-gray-300";
    const borderColor = "border-white/30 hover:border-white";
    const logoColor = "text-white";

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                } ${isScrolled ? "py-4" : "py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className={`text-3xl font-heading font-bold tracking-widest transition-colors whitespace-nowrap ${logoColor}`}>
                        COSMIC BLUE
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 ml-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-xs font-medium tracking-[0.3em] uppercase transition-all duration-300 relative group ${textColor} ${hoverColor}`}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <a
                        href="mailto:launch@cosmicblue.com"
                        className={`inline-block px-6 py-2 text-xs font-bold tracking-[0.3em] uppercase border-b-2 transition-all duration-300 ${textColor} ${borderColor}`}
                    >
                        Launch
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden ${textColor}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cosmic-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium tracking-[0.3em] uppercase text-gray-300 hover:text-white transition-all"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="mailto:launch@cosmicblue.com"
                                className="inline-block px-6 py-3 text-white text-sm font-bold tracking-[0.3em] uppercase border-b-2 border-white/30 hover:border-white transition-all duration-300 text-center mt-4"
                            >
                                Launch
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
