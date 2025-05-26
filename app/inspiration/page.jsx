"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Heart, Share2 } from 'lucide-react';

export default function InspirationPage() {
    const [activeTab, setActiveTab] = useState('design');

    const inspirationItems = {
        design: [
            {
                id: 1,
                title: "Minimalist Portfolio Layout",
                author: "Sarah Chen",
                imageUrl: "/api/placeholder/600/400",
                likes: 243,
                category: "UI Design"
            },
            {
                id: 2,
                title: "Typography Exploration",
                author: "Mark Williams",
                imageUrl: "/api/placeholder/600/400",
                likes: 187,
                category: "Typography"
            },
            {
                id: 3,
                title: "Color Theory Application",
                author: "Priya Patel",
                imageUrl: "/api/placeholder/600/400",
                likes: 312,
                category: "Color Theory"
            },
        ],
        photography: [
            {
                id: 4,
                title: "Urban Landscapes",
                author: "Carlos Rodriguez",
                imageUrl: "/api/placeholder/600/400",
                likes: 419,
                category: "Urban Photography"
            },
            {
                id: 5,
                title: "Portrait Series",
                author: "Emma Davis",
                imageUrl: "/api/placeholder/600/400",
                likes: 275,
                category: "Portrait Photography"
            },
        ],
        art: [
            {
                id: 6,
                title: "Abstract Expressions",
                author: "Jamal Brown",
                imageUrl: "/api/placeholder/600/400",
                likes: 362,
                category: "Abstract Art"
            },
            {
                id: 7,
                title: "Digital Illustrations",
                author: "Yuki Tanaka",
                imageUrl: "/api/placeholder/600/400",
                likes: 197,
                category: "Digital Art"
            },
        ]
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <header className="bg-slate-800 text-white p-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Creative Inspiration</h1>
                    <p className="text-slate-300 max-w-2xl">
                        Explore curated inspiration from various creative fields to spark your next big idea. Save what inspires you and build your own collection.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-6">
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex space-x-2 border-b border-gray-200 mb-6">
                        <button
                            onClick={() => setActiveTab('design')}
                            className={`pb-3 px-4 font-medium text-sm ${activeTab === 'design'
                                    ? 'border-b-2 border-slate-700 text-slate-800'
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            Design
                        </button>
                        <button
                            onClick={() => setActiveTab('photography')}
                            className={`pb-3 px-4 font-medium text-sm ${activeTab === 'photography'
                                    ? 'border-b-2 border-slate-700 text-slate-800'
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            Photography
                        </button>
                        <button
                            onClick={() => setActiveTab('art')}
                            className={`pb-3 px-4 font-medium text-sm ${activeTab === 'art'
                                    ? 'border-b-2 border-slate-700 text-slate-800'
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            Art
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {inspirationItems[activeTab].map((item) => (
                            <div key={item.id} className="bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                                        {item.category}
                                    </span>
                                    <h3 className="text-lg font-semibold text-slate-800 mt-1">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">by {item.author}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center space-x-1">
                                            <button className="text-slate-500 hover:text-slate-700">
                                                <Heart size={18} />
                                            </button>
                                            <span className="text-sm text-slate-600">{item.likes}</span>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="text-slate-500 hover:text-slate-700">
                                                <Share2 size={18} />
                                            </button>
                                            <Link href={`/inspiration/${item.id}`}>
                                                <button className="text-slate-700 hover:text-slate-900 flex items-center text-sm font-medium">
                                                    View <ArrowRight size={16} className="ml-1" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">My Collection</h2>
                    <p className="text-slate-600 mb-6">
                        Items you've saved for inspiration. Create and organize collections by project or theme.
                    </p>
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-lg p-12 text-center">
                        <p className="text-slate-500 mb-4">You haven't saved any inspiration yet.</p>
                        <p className="text-slate-400 text-sm mb-6">Browse the categories above and click the heart icon to save items to your collection.</p>
                        <Link href="/inspiration">
                            <button className="bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors">
                                Explore Featured
                            </button>
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="bg-slate-800 text-slate-300 mt-12">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Ismael Dayo</h3>
                            <p className="text-slate-400 mb-4">Creating memorable digital experiences through thoughtful design and innovative solutions.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-slate-400 hover:text-white">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="text-slate-400 hover:text-white">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-slate-400 hover:text-white">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/photography" className="text-slate-400 hover:text-white transition-colors">Photography</Link></li>
                                <li><Link href="/portfolio-process" className="text-slate-400 hover:text-white transition-colors">Portfolio Process</Link></li>
                                <li><Link href="/resources" className="text-slate-400 hover:text-white transition-colors">Resources</Link></li>
                                <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><Link href="/resources" className="text-slate-400 hover:text-white transition-colors">Design Tools</Link></li>
                                <li><Link href="/inspiration" className="text-slate-400 hover:text-white transition-colors">Inspiration Gallery</Link></li>
                                <li><Link href="/recommendations" className="text-slate-400 hover:text-white transition-colors">Recommendations</Link></li>
                                <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Tutorial Articles</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
                            <p className="text-slate-400 mb-4">Have a project in mind? Let's discuss how we can work together.</p>
                            <Link href="/contact">
                                <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded text-sm transition-colors">
                                    Contact Me
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Ismael Dayo. All rights reserved.</p>
                        <div className="mt-4 md:mt-0">
                            <ul className="flex space-x-6 text-sm">
                                <li><Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms-of-service" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}