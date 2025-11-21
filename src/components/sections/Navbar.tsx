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
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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

    const isLight = theme === "light";
    const textColor = isLight ? "text-black" : "text-white";
    const hoverColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";
    const borderColor = isLight ? "border-black/30 hover:border-black" : "border-white/30 hover:border-white";
    const logoColor = isLight ? "text-black" : "text-white";

    const navLinks = [
        {
            name: "Mission",
            href: "/mission",
            subLinks: [
                { name: "Vision", href: "/mission" },
                { name: "Roadmap", href: "/mission#roadmap" },
            ],
        },
        { name: "Vehicle", href: "/#vehicle" },
        { name: "Capabilities", href: "/#capabilities" },
        { name: "Careers", href: "/careers" },
    ];

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
                <div className="hidden md:flex items-center gap-8 ml-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group"
                            onMouseEnter={() => setHoveredLink(link.name)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <Link
                                href={link.href}
                                className={`text-xs font-medium tracking-[0.3em] uppercase transition-all duration-300 relative block py-2 ${textColor} ${hoverColor}`}
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                            </Link>

                            {/* Dropdown */}
                            <AnimatePresence>
                                {hoveredLink === link.name && link.subLinks && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: "auto" }}
                                        exit={{ opacity: 0, y: 10, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-0 w-48 overflow-hidden pt-2"
                                    >
                                        <div className="flex flex-col gap-2">
                                            {link.subLinks.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.href}
                                                    className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-all"
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
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
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-lg font-medium tracking-[0.3em] uppercase text-gray-300 hover:text-white transition-all block"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.subLinks && (
                                        <div className="pl-6 mt-2 space-y-2 border-l border-white/10 ml-2">
                                            {link.subLinks.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.href}
                                                    className="block text-sm font-medium tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-all"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
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
