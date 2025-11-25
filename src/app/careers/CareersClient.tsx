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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

            {/* Section 2: Apply with Minimalist Form */}
            <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-32">
                {/* Image Background with Heavy Dark Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/apply-bg-wide.png"
                        alt="Mountain Peak with Hiker"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-black/90" />
                </div>

                {/* Apply Content - Minimalist Design */}
                <div className="relative z-10 container mx-auto max-w-3xl px-8">
                    {/* Title */}
                    <h2 className="text-white font-light text-[14px] tracking-[0.3em] mb-20 uppercase text-center">
                        Apply
                    </h2>

                    {/* Minimalist Form */}
                    <form onSubmit={handleSubmit} className="space-y-16">
                        {/* Row 1: Name & Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <label htmlFor="fullName" className="block text-white text-[10px] font-light mb-3 uppercase tracking-[0.2em]">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-transparent border-0 border-b border-white/20 text-white text-[16px] font-light pb-3 focus:outline-none focus:border-white transition-colors placeholder-white/30"
                                    placeholder="Enter name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-white text-[10px] font-light mb-3 uppercase tracking-[0.2em]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-transparent border-0 border-b border-white/20 text-white text-[16px] font-light pb-3 focus:outline-none focus:border-white transition-colors placeholder-white/30"
                                    placeholder="Dhanush@example.com"
                                />
                            </div>
                        </div>

                        {/* Row 2: Phone & Role */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <label htmlFor="phone" className="block text-white text-[10px] font-light mb-3 uppercase tracking-[0.2em]">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-transparent border-0 border-b border-white/20 text-white text-[16px] font-light pb-3 focus:outline-none focus:border-white transition-colors placeholder-white/30"
                                    placeholder="+1 234 567 8900"
                                />
                            </div>

                            <div>
                                <label htmlFor="role" className="block text-white text-[10px] font-light mb-3 uppercase tracking-[0.2em]">
                                    Role Applying For
                                </label>
                                <div className="relative">
                                    <select
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-transparent border-0 border-b border-white/20 text-white text-[16px] font-light pb-3 pr-8 focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                                        style={{
                                            backgroundImage: 'none',
                                        }}
                                    >
                                        <option value="" className="bg-black text-white/50 py-3">Select a role</option>
                                        <option value="Valves Design Engineers - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Valves Design Engineers - On-Site - Bengaluru</option>
                                        <option value="Hardware Testing Engineers - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Hardware Testing Engineers - On-Site - Bengaluru</option>
                                        <option value="Thermal Engineers - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Thermal Engineers - On-Site - Bengaluru</option>
                                        <option value="Structural Engineers - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Structural Engineers - On-Site - Bengaluru</option>
                                        <option value="Cryogenics Engineer - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Cryogenics Engineer - On-Site - Bengaluru</option>
                                        <option value="Chief Propulsion Engineer - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Chief Propulsion Engineer - On-Site - Bengaluru</option>
                                        <option value="Lead Turbopump Specialist - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Lead Turbopump Specialist - On-Site - Bengaluru</option>
                                        <option value="Materials Scientist - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Materials Scientist - On-Site - Bengaluru</option>
                                        <option value="Combustion Dynamics Expert - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Combustion Dynamics Expert - On-Site - Bengaluru</option>
                                        <option value="Systems Integration Lead - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Systems Integration Lead - On-Site - Bengaluru</option>
                                        <option value="Injector Design Principal - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Injector Design Principal - On-Site - Bengaluru</option>
                                        <option value="Software Developer for Simulations - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Software Developer for Simulations - On-Site - Bengaluru</option>
                                        <option value="Supply Chain Strategist - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Supply Chain Strategist - On-Site - Bengaluru</option>
                                        <option value="Thrust Chamber Designer - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Thrust Chamber Designer - On-Site - Bengaluru</option>
                                        <option value="Project Management Director - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Project Management Director - On-Site - Bengaluru</option>
                                        <option value="Test Stand Operations Lead - On-Site - Bengaluru" className="bg-black text-white py-3 hover:bg-white/10">Test Stand Operations Lead - On-Site - Bengaluru</option>
                                        <option value="Other" className="bg-black text-white py-3 hover:bg-white/10">Other (Please specify)</option>
                                    </select>
                                    {/* Custom dropdown arrow */}
                                    <svg
                                        className="absolute right-0 top-0 w-4 h-4 text-white/50 pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>

                                {/* Show text input if "Other" is selected */}
                                {formData.role === 'Other' && (
                                    <input
                                        type="text"
                                        name="customRole"
                                        placeholder="Please specify your role"
                                        className="w-full bg-transparent border-0 border-b border-white/20 text-white text-[16px] font-light pb-3 mt-4 focus:outline-none focus:border-white transition-colors placeholder-white/30"
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    />
                                )}
                            </div>
                        </div>

                        {/* Row 3: LinkedIn/X Profile */}
                        <div>
                            <label htmlFor="linkedinX" className="block text-white text-[10px] font-light mb-3 uppercase tracking-[0.2em]">
                                LinkedIn/X Profile
                            </label>
                            <input
                                type="url"
                                id="linkedinX"
                                name="linkedinX"
                                value={formData.linkedinX}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-0 border-b border-white/20 text-white text-[16px] font-light pb-3 focus:outline-none focus:border-white transition-colors placeholder-white/30"
                                placeholder="https://linkedin.com/in/johndoe"
                            />
                        </div>

                        {/* Row 4: Why Good Fit */}
                        <div>
                            <label htmlFor="whyGoodFit" className="block text-white text-[10px] font-light mb-3 uppercase tracking-[0.2em]">
                                Why You're a Good Fit
                            </label>
                            <textarea
                                id="whyGoodFit"
                                name="whyGoodFit"
                                value={formData.whyGoodFit}
                                onChange={handleInputChange}
                                required
                                rows={4}
                                className="w-full bg-transparent border-0 border-b border-white/20 text-white text-[16px] font-light pb-3 focus:outline-none focus:border-white transition-colors resize-none placeholder-white/30"
                                placeholder="Explain your relevant skills and experience..."
                            />
                        </div>

                        {/* Row 5: Contribution */}
                        <div>
                            <label htmlFor="contribution" className="block text-white text-[10px] font-light mb-3 uppercase tracking-[0.2em]">
                                Your Potential Contribution
                            </label>
                            <textarea
                                id="contribution"
                                name="contribution"
                                value={formData.contribution}
                                onChange={handleInputChange}
                                required
                                rows={4}
                                className="w-full bg-transparent border-0 border-b border-white/20 text-white text-[16px] font-light pb-3 focus:outline-none focus:border-white transition-colors resize-none placeholder-white/30"
                                placeholder="Describe how you can contribute to Cosmic Blue..."
                            />
                        </div>

                        {/* Row 6: Salary */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <label htmlFor="currentSalary" className="block text-white text-[10px] font-light mb-3 uppercase tracking-[0.2em]">
                                    Current Salary
                                </label>
                                <input
                                    type="text"
                                    id="currentSalary"
                                    name="currentSalary"
                                    value={formData.currentSalary}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-0 border-b border-white/20 text-white text-[16px] font-light pb-3 focus:outline-none focus:border-white transition-colors placeholder-white/30"
                                    placeholder="$80,000"
                                />
                            </div>

                            <div>
                                <label htmlFor="expectedSalary" className="block text-white text-[10px] font-light mb-3 uppercase tracking-[0.2em]">
                                    Expected Salary
                                </label>
                                <input
                                    type="text"
                                    id="expectedSalary"
                                    name="expectedSalary"
                                    value={formData.expectedSalary}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-0 border-b border-white/20 text-white text-[16px] font-light pb-3 focus:outline-none focus:border-white transition-colors placeholder-white/30"
                                    placeholder="$100,000"
                                />
                            </div>
                        </div>

                        {/* Row 7: Resume Upload */}
                        <div>
                            <label htmlFor="resume" className="block text-white text-[10px] font-light mb-3 uppercase tracking-[0.2em]">
                                Resume/CV
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    id="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    required
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <div className="border-b border-white/20 pb-3 flex items-center justify-between">
                                    <span className="text-white/30 text-[14px] font-light">
                                        {resume.file ? resume.file.name : 'Choose file (PDF or DOCX, Max 2MB)'}
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-white/50"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="17 8 12 3 7 8" />
                                        <line x1="12" y1="3" x2="12" y2="15" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-12">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-transparent text-white text-[11px] font-light tracking-[0.3em] uppercase border-b border-white hover:bg-white hover:text-black transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
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
