

import Link from 'next/link';

 const Footers=()=> {
    return (
        <footer className="bg-slate-800 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* About Section */}

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Oloyede Olaniyi</h3>
                        <p className="mb-4">
                            Full-stack developer specializing in creating innovative digital solutions.
                            With expertise in web and mobile development, I transform ideas into impactful digital experiences.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/" aria-label="GitHub" className="text-gray-400 hover:text-white transition">
                                GitHub
                            </a>
                            <a href="https://linkedin.com/" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
                                LinkedIn
                            </a>
                            <a href="https://x.com/Olaniyi223" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
                                Twitter
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition">About Me</Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-gray-400 hover:text-white transition">Projects</Link>
                            </li>
                            <li>
                                <Link href="/testimonials" className="text-gray-400 hover:text-white transition">Testimonials</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Web Development</li>
                            <li className="text-gray-400">Mobile App Development</li>
                            <li className="text-gray-400">UI/UX Design</li>
                            <li className="text-gray-400">E-commerce Solutions</li>
                            <li className="text-gray-400">API Development</li>
                            <li className="text-gray-400">Technical Consultation</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="mr-2">📍</span>
                                <span>123 Developer Avenue, Tech City, 10001 University of Ibadan Gate; Ibadan Oyo State</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">📧</span>
                                <a href="mailto:contact@ismaeldayo.com" className="text-gray-400 hover:text-white transition">
                                    Oloyedeolaniyi22@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">📱</span>
                                <a href="tel:+12345678900" className="text-gray-400 hover:text-white transition">
                                    +234 8145987036
                                </a>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <Link href="/callback" className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm transition">
                                Request Callback
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-700 my-8" />

                {/* Bottom Section */}
                
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()}  Ibrahim. All rights reserved.
                    </p>
                    <div>
                        <ul className="flex space-x-6">
                            <li>
                                <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition">
                                    Sitemap
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footers;