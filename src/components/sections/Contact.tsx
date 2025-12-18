"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-background relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        viewport={{ once: true }}
                    >
                        <span className="text-cosmic-blue text-[10px] font-light tracking-[0.3em] mb-6 uppercase block">
                            Contact Us
                        </span>
                        <h3 className="text-3xl md:text-4xl font-light text-white mb-8">
                            Ready to Launch?
                        </h3>
                        <p className="text-sm text-gray-400 mb-12 leading-relaxed font-light">
                            Whether you&apos;re looking to book a payload, join our team, or learn more about our technology, we&apos;re here to help.
                        </p>


                        <div className="space-y-6">
                            <div className="pb-4 border-b border-white/5">
                                <h4 className="text-[10px] font-light text-gray-500 mb-2 uppercase tracking-[0.2em]">Headquarters</h4>
                                <p className="text-sm text-gray-300 font-light">1234 Spaceport Way<br />Cape Canaveral, FL 32920</p>
                            </div>

                            <div className="pb-4 border-b border-white/5">
                                <h4 className="text-[10px] font-light text-gray-500 mb-2 uppercase tracking-[0.2em]">Email</h4>
                                <p className="text-sm text-gray-300 font-light">launch@cosmicblue.com</p>
                            </div>

                            <div className="pb-4 border-b border-white/5">
                                <h4 className="text-[10px] font-light text-gray-500 mb-2 uppercase tracking-[0.2em]">Phone</h4>
                                <p className="text-sm text-gray-300 font-light">+1 (555) 123-4567</p>
                            </div>
                        </div>


                        <div className="mt-12 flex gap-6">
                            {[Twitter, Linkedin, Instagram].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-gray-600 hover:text-white transition-colors duration-300"
                                >
                                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        viewport={{ once: true }}
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-[10px] font-light text-gray-500 uppercase tracking-[0.2em]">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white text-sm font-light focus:outline-none focus:border-cosmic-blue/50 transition-colors placeholder-gray-600"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-[10px] font-light text-gray-500 uppercase tracking-[0.2em]">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white text-sm font-light focus:outline-none focus:border-cosmic-blue/50 transition-colors placeholder-gray-600"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-[10px] font-light text-gray-500 uppercase tracking-[0.2em]">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white text-sm font-light focus:outline-none focus:border-cosmic-blue/50 transition-colors placeholder-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-[10px] font-light text-gray-500 uppercase tracking-[0.2em]">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white text-sm font-light focus:outline-none focus:border-cosmic-blue/50 transition-colors"
                                >
                                    <option value="" className="bg-background">Select a topic</option>
                                    <option value="launch" className="bg-background">Book a Launch</option>
                                    <option value="careers" className="bg-background">Careers</option>
                                    <option value="media" className="bg-background">Media Inquiry</option>
                                    <option value="other" className="bg-background">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-[10px] font-light text-gray-500 uppercase tracking-[0.2em]">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/10 text-white text-sm font-light focus:outline-none focus:border-cosmic-blue/50 transition-colors resize-none placeholder-gray-600"
                                    placeholder="How can we help you?"
                                />
                            </div>


                            <button
                                type="submit"
                                className="group inline-flex items-center gap-3 text-white text-[11px] font-light tracking-[0.25em] uppercase border-b border-white/20 pb-2 hover:border-cosmic-blue/50 transition-all duration-500 mt-4"
                            >
                                <span>Send Message</span>
                                <span className="w-4 h-[1px] bg-white/30 group-hover:w-6 group-hover:bg-cosmic-blue transition-all duration-500" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
