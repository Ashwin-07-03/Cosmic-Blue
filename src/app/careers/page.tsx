import { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';


export const metadata: Metadata = {
    title: 'Careers | Cosmic Blue',
    description: 'Join our mission to make space more affordable, accessible, and repeatable',
};

export default function CareersPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar theme="light" />

            {/* Hero Section */}
            <section className="pt-32 pb-12 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-blue-400 font-medium tracking-[0.2em] uppercase text-sm mb-4 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]">
                        Building the Future for Ourselves and Those Who Follow
                    </p>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6 uppercase tracking-wide">
                        Join Our Mission
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Help us revolutionize space access. We&apos;re building the future of reusable launch vehicles
                        and looking for talented individuals to join our team.
                    </p>
                </div>
            </section>

            {/* Application Instructions */}
            <section className="pb-24 px-6">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-black font-medium tracking-[0.3em] mb-12 uppercase">
                        Apply
                    </h2>

                    <div className="flex flex-col items-center">
                        <a
                            href="mailto:ashwin.vk71@gmail.com?subject=Application for [Role Name] - [Your Name]&body=Dear Hiring Team,%0D%0A%0D%0AI am writing to apply for the [Role Name] position.%0D%0A%0D%0AHere are my details:%0D%0A- Role: [Role Name]%0D%0A- Why I fit: [Your explanation]%0D%0A- Contribution: [Your contribution]%0D%0A- Current Salary: [Amount]%0D%0A- Expected Salary: [Amount]%0D%0A%0D%0AI have attached my CV for your review.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
                            className="group relative inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full border border-black/20 hover:border-black hover:bg-black transition-all duration-500"
                            aria-label="Send Application Email"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black group-hover:text-white transition-colors duration-500"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </a>

                        <div className="space-y-2 text-gray-500 text-sm tracking-widest uppercase mb-12">
                            <p>Click the icon to apply</p>
                        </div>

                        <div className="max-w-md mx-auto text-left">
                            <p className="text-black text-sm uppercase tracking-widest mb-6 text-center border-b border-black/10 pb-4">
                                Please Include
                            </p>
                            <ul className="space-y-4 text-gray-600 font-light">
                                <li className="flex items-baseline gap-4">
                                    <span className="text-xs text-black/50">01</span>
                                    <span>The role you are applying for</span>
                                </li>
                                <li className="flex items-baseline gap-4">
                                    <span className="text-xs text-black/50">02</span>
                                    <span>Why you are a good fit</span>
                                </li>
                                <li className="flex items-baseline gap-4">
                                    <span className="text-xs text-black/50">03</span>
                                    <span>Your potential contribution</span>
                                </li>
                                <li className="flex items-baseline gap-4">
                                    <span className="text-xs text-black/50">04</span>
                                    <span>Current & Expected Salary</span>
                                </li>
                                <li className="flex items-baseline gap-4">
                                    <span className="text-xs text-black/50">05</span>
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
