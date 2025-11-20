"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-black relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-cosmic-blue font-medium tracking-[0.3em] mb-4 uppercase">
                            Contact Us
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-wide">
                            Ready to Launch?
                        </h3>
                        <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                            Whether you&apos;re looking to book a payload, join our team, or learn more about our technology, we&apos;re here to help.
                        </p>


                        <div className="space-y-6">
                            <div className="pb-4 border-b border-white/10">
                                <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-[0.2em]">Headquarters</h4>
                                <p className="text-gray-400">1234 Spaceport Way<br />Cape Canaveral, FL 32920</p>
                            </div>

                            <div className="pb-4 border-b border-white/10">
                                <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-[0.2em]">Email</h4>
                                <p className="text-gray-400">launch@cosmicblue.com</p>
                            </div>

                            <div className="pb-4 border-b border-white/10">
                                <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-[0.2em]">Phone</h4>
                                <p className="text-gray-400">+1 (555) 123-4567</p>
                            </div>
                        </div>


                        <div className="mt-12 flex gap-6">
                            {[Twitter, Linkedin, Instagram].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-gray-500 hover:text-white transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue transition-colors placeholder-gray-600"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue transition-colors placeholder-gray-600"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue transition-colors placeholder-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue transition-colors"
                                >
                                    <option value="">Select a topic</option>
                                    <option value="launch">Book a Launch</option>
                                    <option value="careers">Careers</option>
                                    <option value="media">Media Inquiry</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue transition-colors resize-none placeholder-gray-600"
                                    placeholder="How can we help you?"
                                />
                            </div>


                            <button
                                type="submit"
                                className="w-full text-white text-sm tracking-[0.3em] uppercase border-b border-white/30 pb-2 hover:border-white transition-all duration-300 text-center"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
