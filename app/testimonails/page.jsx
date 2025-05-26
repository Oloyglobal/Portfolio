

"use client";

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const Testimonials=()=>{ 
    const [activePage, setActivePage] = useState(1);
    const testimonialsPerPage = 3;

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            company: "TechSolutions Inc.",
            position: "CTO",
            image: "/api/placeholder/80/80",
            testimonial: "Working with Ismael was a game-changer for our company. His attention to detail and technical expertise helped us launch our platform ahead of schedule. We've seen a 40% increase in user engagement since implementation."
        },
        {
            id: 2,
            name: "Michael Chen",
            company: "DesignCraft Studio",
            position: "Creative Director",
            image: "/api/placeholder/80/80",
            testimonial: "Ismael's portfolio caught my eye immediately with its clean, intuitive design. After hiring him, he delivered work that exceeded our expectations. His ability to translate complex concepts into elegant solutions is remarkable."
        },
        {
            id: 3,
            name: "Priya Patel",
            company: "StartupLaunch",
            position: "Founder",
            image: "/api/placeholder/80/80",
            testimonial: "As a startup founder, finding reliable talent is crucial. Ismael not only built our MVP but became a trusted advisor throughout our development process. His insights saved us both time and money."
        },
        {
            id: 4,
            name: "James Wilson",
            company: "EduTech Solutions",
            position: "Product Manager",
            image: "/api/placeholder/80/80",
            testimonial: "Ismael's work on our educational platform has been outstanding. The user experience he designed has received praise from both our team and users. His commitment to delivering quality work on time made our collaboration seamless."
        },
        {
            id: 5,
            name: "Elena Rodriguez",
            company: "Global Media Group",
            position: "Digital Director",
            image: "/api/placeholder/80/80",
            testimonial: "We hired Ismael for a complete website redesign, and the results speak for themselves. Our bounce rate decreased by 35%, and user session duration increased significantly. His professional approach and clear communication made the project run smoothly."
        },
        {
            id: 6,
            name: "David Kim",
            company: "FinTech Innovations",
            position: "COO",
            image: "/api/placeholder/80/80",
            testimonial: "Ismael helped us create a secure, user-friendly financial application that our customers love. His understanding of both frontend and backend technologies ensured a robust product. We continue to rely on his expertise for updates and new features."
        }
    ];

    // Calculate pagination
    const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);
    const indexOfLastTestimonial = activePage * testimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
    const currentTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">

            {/* Header */}

            <header className="bg-slate-800 text-gray-100 py-6">
                <div className="container mx-auto px-4">
                    <nav className="flex justify-between items-center">
                        <div className="text-2xl font-bold">Ismael Dayo</div>
                        <ul className="flex space-x-6">
                            <li><Link href="/" className="hover:text-gray-300 transition">Home</Link></li>
                            <li><Link href="/projects" className="hover:text-gray-300 transition">Projects</Link></li>
                            <li><Link href="/testimonials" className="text-gray-300 border-b-2 border-gray-300">Testimonials</Link></li>
                            <li><Link href="/about" className="hover:text-gray-300 transition">About</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
                            <li><Link href="/callback" className="hover:text-gray-300 transition">Request Callback</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">Client Testimonials</h1>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Don't just take my word for it. Here's what clients have to say about working with me.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {currentTestimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800">{testimonial.name}</h3>
                                    <p className="text-slate-600">{testimonial.position}, {testimonial.company}</p>
                                </div>
                            </div>
                            <div className="italic text-slate-700">{testimonial.testimonial}</div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center space-x-2">
                    {[...Array(pageCount)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActivePage(index + 1)}
                            className={`w-10 h-10 rounded-full ${activePage === index + 1
                                    ? "bg-slate-800 text-white"
                                    : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                                } transition`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Ready to start your project?</h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Let's create something amazing together. Reach out today to discuss your needs.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link href="/contact" className="bg-slate-800 text-white px-6 py-3 rounded hover:bg-slate-700 transition">
                            Contact Me
                        </Link>
                        <Link href="/callback" className="bg-slate-200 text-slate-800 px-6 py-3 rounded hover:bg-slate-300 transition">
                            Request Callback
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
export default Testimonials;