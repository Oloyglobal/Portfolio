

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navigation = () => {
    return (
        <nav className="bg-slate-800 text-gray-100 p-4 sticky top-0 z-10 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/owner" className="text-xl font-bold">Ismael Dayo</Link>
                <div className="space-x-6">
                    <Link href="/owner" className="hover:text-gray-300 font-medium">About</Link>
                    <Link href="/resume" className="hover:text-gray-300 font-medium">Resume</Link>
                    <Link href="/testimonials" className="hover:text-gray-300 font-medium">Testimonials</Link>
                    <Link href="#contact" className="bg-slate-600 px-4 py-2 rounded hover:bg-slate-700 transition">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

// Hero Section Component
const HeroSection = () => {
    return (
        <section className="bg-slate-900 text-gray-100 py-24">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                <div className="md:w-1/2 mb-12 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Hello, I'm <span className="text-gray-300">Ismael Dayo</span></h1>
                    <h2 className="text-2xl md:text-3xl mb-6 text-gray-400">Full Stack Developer</h2>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        I create elegant, efficient, and user-focused digital experiences with
                        a passion for clean code and intuitive design.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#portfolio" className="bg-slate-700 text-gray-100 px-6 py-3 rounded-md hover:bg-slate-600 transition">View Portfolio</Link>
                        <Link href="#contact" className="border border-gray-400 text-gray-200 px-6 py-3 rounded-md hover:bg-slate-800 transition">Contact Me</Link>
                    </div>
                </div>
                <div className="md:w-2/5">
                    <div className="bg-slate-800 p-2 rounded-full shadow-xl">
                        <div className="bg-slate-700 rounded-full p-4">
                            <img
                                src="/api/placeholder/400/400"
                                alt="Ismael Dayo Profile"
                                className="rounded-full"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// About Me Section Component
const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-slate-100 text-slate-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <img
                            src="/api/placeholder/600/400"
                            alt="Ismael working"
                            className="rounded-lg shadow-lg"
                            width={600}
                            height={400}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-slate-700">My Journey</h3>
                        <p className="mb-6 text-slate-600 leading-relaxed">
                            With over 5 years of experience in web development, I've cultivated a deep understanding
                            of both front-end and back-end technologies. My journey began with a passion for solving
                            problems through code, and has evolved into creating comprehensive digital solutions that
                            drive business growth and enhance user experiences.
                        </p>
                        <p className="mb-6 text-slate-600 leading-relaxed">
                            I specialize in React, Next.js, Node.js, and various modern web technologies. My approach
                            combines technical expertise with creative thinking to deliver solutions that are not only
                            functional but also aesthetically pleasing and intuitive.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
                            <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">React</span>
                            <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">Next.js</span>
                            <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                            <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">TypeScript</span>
                            <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
                            <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">AWS</span>
                            <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">UI/UX Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Services Section Component
const ServicesSection = () => {
    const services = [
        {
            title: "Web Development",
            description: "Creating responsive, dynamic websites and web applications using modern technologies and frameworks.",
            icon: "🌐"
        },
        {
            title: "Mobile App Development",
            description: "Building cross-platform mobile applications with React Native that deliver native-like experiences.",
            icon: "📱"
        },
        {
            title: "UI/UX Design",
            description: "Designing intuitive user interfaces and experiences that engage users and enhance usability.",
            icon: "🎨"
        },
        {
            title: "E-commerce Solutions",
            description: "Developing secure, scalable online stores with integrated payment systems and inventory management.",
            icon: "🛒"
        }
    ];

    return (
        <section id="services" className="py-20 bg-slate-800 text-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-slate-700 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Portfolio Section Component
const PortfolioSection = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            category: "Web Development",
            image: "/api/placeholder/600/400",
            description: "A full-featured online shopping platform with secure payment processing and real-time inventory management."
        },
        {
            title: "Fitness Tracking App",
            category: "Mobile Development",
            image: "/api/placeholder/600/400",
            description: "A cross-platform mobile application for tracking workouts, nutrition, and health metrics."
        },
        {
            title: "Corporate Website Redesign",
            category: "UI/UX Design",
            image: "/api/placeholder/600/400",
            description: "Complete overhaul of a corporate website focusing on user experience and modern design principles."
        },
        {
            title: "Real Estate Listing Portal",
            category: "Web Development",
            image: "/api/placeholder/600/400",
            description: "A dynamic property listing platform with advanced search capabilities and virtual tours."
        }
    ];

    return (
        <section id="portfolio" className="py-20 bg-slate-100 text-slate-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover"
                                width={600}
                                height={400}
                            />
                            <div className="p-6">
                                <span className="text-sm text-gray-500 mb-2 block">{project.category}</span>
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-slate-600 mb-4">{project.description}</p>
                                <Link href="#" className="text-slate-700 font-semibold hover:text-slate-900">View Project →</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href="#" className="bg-slate-700 text-gray-100 px-6 py-3 rounded-md hover:bg-slate-600 transition inline-block">View All Projects</Link>
                </div>
            </div>
        </section>
    );
};

// Contact Section Component
const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-slate-800 text-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                        <p className="mb-6 text-gray-300">Feel free to reach out to me for project inquiries, collaborations, or just to say hello!</p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="bg-slate-700 p-3 rounded-full mr-4">📧</div>
                                <span>contact@ismaeldayo.com</span>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-slate-700 p-3 rounded-full mr-4">📱</div>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-slate-700 p-3 rounded-full mr-4">📍</div>
                                <span>San Francisco, CA, USA</span>
                            </div>
                        </div>
                        <div className="mt-8 flex space-x-4">
                            <a href="#" className="bg-slate-700 p-3 rounded-full hover:bg-slate-600 transition">
                                <span className="sr-only">LinkedIn</span>
                                in
                            </a>
                            <a href="#" className="bg-slate-700 p-3 rounded-full hover:bg-slate-600 transition">
                                <span className="sr-only">GitHub</span>
                                GH
                            </a>
                            <a href="#" className="bg-slate-700 p-3 rounded-full hover:bg-slate-600 transition">
                                <span className="sr-only">Twitter</span>
                                X
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block mb-1 text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full p-3 bg-slate-700 rounded border border-slate-600 text-white focus:outline-none focus:border-gray-400"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-1 text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full p-3 bg-slate-700 rounded border border-slate-600 text-white focus:outline-none focus:border-gray-400"
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-1 text-gray-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full p-3 bg-slate-700 rounded border border-slate-600 text-white focus:outline-none focus:border-gray-400"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1 text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full p-3 bg-slate-700 rounded border border-slate-600 text-white focus:outline-none focus:border-gray-400"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-slate-600 text-white px-6 py-3 rounded-md hover:bg-slate-500 transition w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


// Footer Component
const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 py-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">Ismael Dayo</h3>
                        <p className="mb-4 text-gray-400">
                            Creating impactful digital experiences with a focus on user-centered design and clean, efficient code.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <span className="sr-only">LinkedIn</span>
                                in
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <span className="sr-only">GitHub</span>
                                GH
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <span className="sr-only">Instagram</span>
                                IG
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/owner" className="text-gray-400 hover:text-white transition">About</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-white transition">Services</Link></li>
                            <li><Link href="#portfolio" className="text-gray-400 hover:text-white transition">Portfolio</Link></li>
                            <li><Link href="/resume" className="text-gray-400 hover:text-white transition">Resume</Link></li>
                            <li><Link href="/testimonials" className="text-gray-400 hover:text-white transition">Testimonials</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="mr-2">📧</span>
                                <a href="mailto:contact@ismaeldayo.com" className="text-gray-400 hover:text-white transition">contact@ismaeldayo.com</a>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📱</span>
                                <span className="text-gray-400">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📍</span>
                                <span className="text-gray-400">123, University of Ibadan San Francisco, CA, Ibadan Oyo State</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-500">
                    <p>© {new Date().getFullYear()} Ismael Dayo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};



// Main Page Component
const OwnerPage=()=> {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
export default OwnerPage;