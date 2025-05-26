"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, ExternalLink } from 'lucide-react';

// Simulating data fetch - in a real app, you would fetch from an API
export default function portfoliocarddetails() {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    
        setTimeout(() => {
            setProject({
                id: '1',
                title: 'Modern E-commerce Platform',
                description: 'A fully responsive e-commerce platform built with Next.js, Tailwind CSS, and a headless CMS. Features include product filtering, search functionality, user authentication, and payment processing integration.',
                category: 'Web Development',
                date: '2024-04-15',
                client: 'TechRetail Inc.',
                technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
                // liveUrl: 'https://tech-retail-example.com',     
                repoUrl: 'https://github.com/ismaeldayo/tech-retail',
                longDescription: 'This project was a comprehensive e-commerce solution developed for TechRetail Inc. The client needed a modern, fast-loading online store with intuitive navigation and seamless checkout process. I implemented a responsive design that works flawlessly across all devices, with special attention to mobile user experience.\n\nKey technical challenges included implementing real-time inventory updates, optimizing image loading for product galleries, and ensuring secure payment processing. The site achieved a 95+ score on Google PageSpeed Insights and has helped increase the client\'s online sales by 34% in the first quarter after launch.',
                highlights: [
                    'Reduced page load time by 60% compared to the client\'s previous website',
                    'Implemented advanced filtering system with instant results',
                    'Created custom admin dashboard for inventory management',
                    'Integrated multiple payment gateways with fraud protection',
                    'Built comprehensive analytics tracking for business insights'
                ],

                testimonial: {
                    text: "Ismael delivered our e-commerce platform ahead of schedule and exceeded our expectations in both functionality and design. His attention to detail and technical expertise were invaluable.",
                    author: "Omotunde Funmilola, CTO at TechRetail Inc."
                },

                images: [
                    "https://res.cloudinary.com/dtbforfvb/image/upload/v1747426997/Project-Screenshot_jmfyyy.png",
                    "https://res.cloudinary.com/dtbforfvb/image/upload/v1747430723/Project__Screenshot_gve1rx.png",
                    "https://res.cloudinary.com/dtbforfvb/image/upload/v1747430890/screenshot_i32fjr.webp"
                ]
            });
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-slate-700 text-xl">Loading project details...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Navigation Bar */}

            <nav className="bg-slate-800 text-white px-6 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/portfolio" className="text-xl font-bold">Oloyede Olaniyi</Link>

                    <div className="space-x-4">

                        <Link href="/portfolio" className="hover:text-slate-300">Portfolio</Link>
                        <Link href="/about" className="hover:text-slate-300">About</Link>
                        <Link href="/contact" className="hover:text-slate-300">Contact</Link>
                    </div>
                </div>
            </nav>

            {/* Back Button */}

            <div className="container mx-auto px-6 pt-8">
                <Link href="/portfolio" className="inline-flex items-center text-slate-600 hover:text-slate-800">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                </Link>
            </div>

            {/* Project Header */}

            <header className="container mx-auto px-6 py-8">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800">{project.title}</h1>
                <div className="mt-4 flex flex-wrap gap-4">
                    <div className="flex items-center text-slate-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                    </div>

                    <div className="flex items-center text-slate-600">
                        <User className="h-4 w-4 mr-1" />
                        <span>{project.client}</span>
                    </div>

                    <div className="flex items-center text-slate-600">
                        <Tag className="h-4 w-4 mr-1" />
                        <span>{project.category}</span>
                    </div>

                </div>
            </header>

            {/* Project Details */}

            <main className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Project Image */}

                    <div className="lg:col-span-2 bg-slate-200 rounded-lg overflow-hidden h-96">
                        <img
                            src={project.images[0]}
                            alt="Project Screenshot"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Project Info Sidebar */}

                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold text-slate-800 mb-4">Project Information</h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-slate-500">Project Links</h3>
                                <div className="mt-2 space-y-2">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-slate-700 hover:text-slate-900"
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-slate-700 hover:text-slate-900"
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Code Repository
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-slate-500">Technologies Used</h3>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-slate-100 text-slate-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Description */}

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Project Overview</h2>
                    <p className="text-slate-600 whitespace-pre-line">{project.longDescription}</p>
                </div>

                {/* Project Highlights */}

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Key Features & Achievements</h2>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600">
                        {project.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                </div>

                {/* Project Gallery */}

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Project Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.images.map((image, index) => (
                            <div key={index} className="bg-slate-200 rounded-lg overflow-hidden h-48">
                                <img
                                    src={image}
                                    alt={`Project Screenshot ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonial */}

                <div className="mt-12 bg-slate-100 rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Client Testimonial</h2>
                    <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
                        "{project.testimonial.text}"
                    </blockquote>
                    <div className="mt-4 text-slate-700 font-medium">
                        {project.testimonial.author}
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-600">Frequently Asked Questions</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Answers to common questions about my services and working process
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            {/* FAQ Items */}
                            {[1, 2, 3, 4, 5, 6].map((faqId) => (
                                <div key={faqId} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                                    <button
                                        className="w-full flex justify-between items-center p-6 text-left"
                                        onClick={() => setActiveFaq(activeFaq === faqId ? null : faqId)}
                                    >
                                        <h3 className="text-lg font-semibold text-slate-600">
                                            {faqId === 1 && 'What types of projects do you typically work on?'}
                                            {faqId === 2 && 'What is your development process like?'}
                                            {faqId === 3 && 'What technologies do you specialize in?'}
                                            {faqId === 4 && 'How do you handle project pricing?'}
                                            {faqId === 5 && 'What about ongoing support after project completion?'}
                                            {faqId === 6 && 'How can I get started with my project?'}
                                        </h3>
                                        <div className="relative w-6 h-6">
                                            <Image
                                                src={activeFaq === faqId ? "/images/chevron-up.png" : "/images/chevron-down.png"}
                                                alt={activeFaq === faqId ? "Collapse" : "Expand"}
                                                fill
                                                className="transition-transform duration-300"
                                                style={{ transform: activeFaq === faqId ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                                unoptimized
                                            />
                                        </div>
                                    </button>
                                    {activeFaq === faqId && (
                                        <div className="px-6 pb-6">
                                            {/* FAQ content here */}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Interested in working together?</h2>
                    <p className="text-slate-600 mb-6">Let's discuss how I can help bring your next project to life</p>
                    <Link
                        href="/contact"
                        className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                        Get in Touch
                    </Link>
                </div>
            </main>

            {/* Footer */}

            <footer className="bg-slate-800 text-white mt-16 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* About Section */}

                        <div>
                            <h3 className="text-xl font-bold mb-4">Oloyede Olaniyi</h3>
                            <p className="text-slate-300 mb-4">
                                Full-stack developer specializing in creating modern, efficient, and user-friendly web applications.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://github.com/ismaeldayo" className="text-slate-300 hover:text-white">
                                    GitHub
                                </a>
                                <a href="https://linkedin.com/in/ismaeldayo" className="text-slate-300 hover:text-white">
                                    LinkedIn
                                </a>
                                <a href="https://twitter.com/ismaeldayo" className="text-slate-300 hover:text-white">
                                    Twitter
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-slate-300 hover:text-white">Home</Link>
                                </li>
                                <li>
                                    <Link href="/portfolio" className="text-slate-300 hover:text-white">Portfolio</Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-slate-300 hover:text-white">About Me</Link>
                                </li>
                                <li>
                                    <Link href="/services" className="text-slate-300 hover:text-white">Services</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-slate-300 hover:text-white">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}

                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-slate-300 mr-2">Email:</span>
                                    <a href="mailto:contact@ismaeldayo.com" className="text-slate-300 hover:text-white">
                                      Oloyedeolaniyi22@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-slate-300 mr-2">Phone:</span>
                                    <a href="tel:+1234567890" className="text-slate-300 hover:text-white">
                                       +234 (81) 4598 - 7036
                                    </a>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-slate-300 mr-2">Location:</span>
                                    <span className="text-slate-300">123, University of Ibadan San Francisco, CA, Ibadan;Oyo State</span>
                                </li>   
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-300 text-sm">
                            © {new Date().getFullYear()} Oloyede Olaniyi. All rights reserved.
                        </p>
                        <p className="text-slate-300 text-sm mt-4 md:mt-0">
                            Designed and developed with passion
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}