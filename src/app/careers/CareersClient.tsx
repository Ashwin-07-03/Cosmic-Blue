"use client";

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function CareersClient() {
    return (
        <main className="min-h-screen">
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
                    <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6 uppercase tracking-tight leading-tight">
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

            {/* Section 2: Apply with Image Background */}
            <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/apply-bg-wide.png"
                        alt="Mountain Peak with Hiker"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Apply Content */}
                <div className="relative z-10 container mx-auto max-w-3xl text-center px-6 py-20">
                    <h2 className="text-white font-bold tracking-[0.3em] mb-12 uppercase text-3xl drop-shadow-lg">
                        Apply
                    </h2>

                    <div className="flex flex-col items-center">
                        <a
                            href="mailto:ashwin.vk71@gmail.com?subject=Job%20Application%20-%20%5BRole%20Name%5D%20-%20%5BYour%20Name%5D&body=Dear%20Hiring%20Team%2C%0D%0A%0D%0AI%20am%20writing%20to%20express%20my%20interest%20in%20joining%20Cosmic%20Blue.%0D%0A%0D%0A1.%20Role%20Applying%20For%3A%20%5BRole%20Name%5D%0D%0A%0D%0A2.%20Why%20I%27m%20a%20Good%20Fit%3A%0D%0A%5BExplain%20your%20relevant%20skills%20and%20experience%5D%0D%0A%0D%0A3.%20My%20Potential%20Contribution%3A%0D%0A%5BDescribe%20how%20you%20can%20contribute%20to%20Cosmic%20Blue%5D%0D%0A%0D%0A4.%20Current%20Salary%3A%20%5BAmount%5D%0D%0A%0D%0A5.%20Expected%20Salary%3A%20%5BAmount%5D%0D%0A%0D%0A6.%20CV%2FResume%3A%20Attached%0D%0A%0D%0AThank%20you%20for%20considering%20my%20application.%20I%20look%20forward%20to%20discussing%20this%20opportunity%20further.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Full%20Name%5D%0D%0A%5BYour%20Phone%20Number%5D%0D%0A%5BYour%20LinkedIn%2FX%20Profile%5D"
                            className="group relative inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full border-2 border-white hover:bg-white transition-all duration-500 shadow-lg"
                            aria-label="Send Application Email"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white group-hover:text-black transition-colors duration-500"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </a>

                        <div className="space-y-2 text-white text-sm tracking-widest uppercase mb-12 font-bold drop-shadow-md">
                            <p>Click the icon to apply</p>
                        </div>

                        <div className="max-w-md mx-auto text-left">
                            <p className="text-white text-sm uppercase tracking-widest mb-6 text-center border-b border-white/30 pb-4 font-bold drop-shadow-md">
                                Please Include
                            </p>
                            <ul className="space-y-4 text-white font-bold drop-shadow-md">
                                <li className="flex items-baseline gap-4">
                                    <span className="text-xs text-white/70">01</span>
                                    <span>The role you are applying for</span>
                                </li>
                                <li className="flex items-baseline gap-4">
                                    <span className="text-xs text-white/70">02</span>
                                    <span>Why you are a good fit</span>
                                </li>
                                <li className="flex items-baseline gap-4">
                                    <span className="text-xs text-white/70">03</span>
                                    <span>Your potential contribution</span>
                                </li>
                                <li className="flex items-baseline gap-4">
                                    <span className="text-xs text-white/70">04</span>
                                    <span>Current & Expected Salary</span>
                                </li>
                                <li className="flex items-baseline gap-4">
                                    <span className="text-xs text-white/70">05</span>
                                    <span>CV / Resume</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
