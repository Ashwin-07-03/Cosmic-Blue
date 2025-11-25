"use client";

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function CareersClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        role: '',
        linkedinX: '',
        whyGoodFit: '',
        contribution: '',
        currentSalary: '',
        expectedSalary: '',
    });
    const [resume, setResume] = useState<{ file: File | null; base64: string }>({
        file: null,
        base64: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Check file size (2MB limit)
        if (file.size > 2 * 1024 * 1024) {
            toast.error('File size must be less than 2MB');
            return;
        }

        // Check file type
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(file.type)) {
            toast.error('Only PDF and DOCX files are allowed');
            return;
        }

        // Convert to base64
        const reader = new FileReader();
        reader.onloadend = () => {
            setResume({
                file,
                base64: reader.result as string,
            });
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    resume: resume.base64,
                    resumeFileName: resume.file?.name || 'resume.pdf',
                }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Application submitted successfully!');
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    role: '',
                    linkedinX: '',
                    whyGoodFit: '',
                    contribution: '',
                    currentSalary: '',
                    expectedSalary: '',
                });
                setResume({ file: null, base64: '' });
                // Reset file input
                const fileInput = document.getElementById('resume') as HTMLInputElement;
                if (fileInput) fileInput.value = '';
            } else {
                toast.error(data.error || 'Failed to submit application');
            }
        } catch (error) {
            toast.error('Network error. Please try again.');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen">
            <Toaster position="top-center" />
            <Navbar theme="dark" />

            {/* Section 1: Hero with Video Background */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/310307_medium.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto max-w-5xl text-center text-white px-6 pt-20">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight leading-tight">
                        Building the Future for Ourselves and Those Who Follow
                    </h1>
                    <h2 className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-8">
                        Join Our Mission
                    </h2>
                    <div className="text-base text-white leading-relaxed max-w-3xl mx-auto space-y-4 font-bold">
                        <p>
                            The primary objective of Cosmic Blue is to enhance life and satisfy the curiosity inherent in humanity. The founders believe that we're not just a space company—we're so much more. Our goal as a company is to inspire people and spark their curiosity about science and space. We want to show them that you don't need to be a scientist to explore science. You don't need a science degree to satisfy your curiosity and work on innovative ideas. As a company, we ensure that schools and colleges don't kill a child's curiosity.
                        </p>
                        <p>
                            If you are an individual who is committed to creating something remarkable that will shape the future of both space and this nation, then you should consider pursuing a career with Cosmic Blue.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2: Apply with Form */}
            <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-20">
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/apply-bg-wide.png"
                        alt="Mountain Peak with Hiker"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Apply Content */}
                <div className="relative z-10 container mx-auto max-w-4xl px-6">
                    <h2 className="text-white font-bold tracking-[0.3em] mb-12 uppercase text-3xl drop-shadow-lg text-center">
                        Apply
                    </h2>

                    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-black/30 border border-white/30 text-white rounded focus:outline-none focus:border-blue-400 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-black/30 border border-white/30 text-white rounded focus:outline-none focus:border-blue-400 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-black/30 border border-white/30 text-white rounded focus:outline-none focus:border-blue-400 transition-colors"
                                    placeholder="+1 234 567 8900"
                                />
                            </div>

                            {/* Role */}
                            <div>
                                <label htmlFor="role" className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                                    Role Applying For *
                                </label>
                                <input
                                    type="text"
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-black/30 border border-white/30 text-white rounded focus:outline-none focus:border-blue-400 transition-colors"
                                    placeholder="Software Engineer"
                                />
                            </div>

                            {/* LinkedIn/X */}
                            <div className="md:col-span-2">
                                <label htmlFor="linkedinX" className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                                    LinkedIn/X Profile
                                </label>
                                <input
                                    type="url"
                                    id="linkedinX"
                                    name="linkedinX"
                                    value={formData.linkedinX}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-black/30 border border-white/30 text-white rounded focus:outline-none focus:border-blue-400 transition-colors"
                                    placeholder="https://linkedin.com/in/johndoe"
                                />
                            </div>

                            {/* Why Good Fit */}
                            <div className="md:col-span-2">
                                <label htmlFor="whyGoodFit" className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                                    Why You're a Good Fit * (Min 50 characters)
                                </label>
                                <textarea
                                    id="whyGoodFit"
                                    name="whyGoodFit"
                                    value={formData.whyGoodFit}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-black/30 border border-white/30 text-white rounded focus:outline-none focus:border-blue-400 transition-colors resize-none"
                                    placeholder="Explain your relevant skills and experience..."
                                />
                            </div>

                            {/* Contribution */}
                            <div className="md:col-span-2">
                                <label htmlFor="contribution" className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                                    Your Potential Contribution * (Min 50 characters)
                                </label>
                                <textarea
                                    id="contribution"
                                    name="contribution"
                                    value={formData.contribution}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-black/30 border border-white/30 text-white rounded focus:outline-none focus:border-blue-400 transition-colors resize-none"
                                    placeholder="Describe how you can contribute to Cosmic Blue..."
                                />
                            </div>

                            {/* Current Salary */}
                            <div>
                                <label htmlFor="currentSalary" className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                                    Current Salary
                                </label>
                                <input
                                    type="text"
                                    id="currentSalary"
                                    name="currentSalary"
                                    value={formData.currentSalary}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-black/30 border border-white/30 text-white rounded focus:outline-none focus:border-blue-400 transition-colors"
                                    placeholder="$80,000"
                                />
                            </div>

                            {/* Expected Salary */}
                            <div>
                                <label htmlFor="expectedSalary" className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                                    Expected Salary
                                </label>
                                <input
                                    type="text"
                                    id="expectedSalary"
                                    name="expectedSalary"
                                    value={formData.expectedSalary}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-black/30 border border-white/30 text-white rounded focus:outline-none focus:border-blue-400 transition-colors"
                                    placeholder="$100,000"
                                />
                            </div>

                            {/* Resume Upload */}
                            <div className="md:col-span-2">
                                <label htmlFor="resume" className="block text-white text-sm font-bold mb-2 uppercase tracking-wider">
                                    Resume/CV * (PDF or DOCX, Max 2MB)
                                </label>
                                <input
                                    type="file"
                                    id="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    required
                                    className="w-full px-4 py-3 bg-black/30 border border-white/30 text-white rounded focus:outline-none focus:border-blue-400 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                                />
                                {resume.file && (
                                    <p className="text-white/70 text-sm mt-2">
                                        Selected: {resume.file.name}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-white text-black font-bold tracking-[0.2em] uppercase hover:bg-blue-400 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
