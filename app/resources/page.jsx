

"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Resources() {
    const [resources, setResources] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        // Simulate fetching resource data
        setTimeout(() => {
            setResources([
                {
                    id: 1,
                    title: 'Frontend Development Roadmap',
                    description: 'A comprehensive guide to becoming a frontend developer in 2023.',
                    category: 'guides',
                    thumbnail: '/api/placeholder/400/225',
                    url: '#',
                    featured: true,
                    date: '2023-06-10'
                },
                {
                    id: 2,
                    title: 'Essential JavaScript Concepts',
                    description: 'Deep dive into core JavaScript concepts every developer should know.',
                    category: 'tutorials',
                    thumbnail: '/api/placeholder/400/225',
                    url: '#',
                    featured: true,
                    date: '2023-05-15'
                },
                {
                    id: 3,
                    title: 'React Best Practices',
                    description: 'Learn the best practices for building scalable React applications.',
                    category: 'tutorials',
                    thumbnail: '/api/placeholder/400/225',
                    url: '#',
                    featured: false,
                    date: '2023-04-22'
                },
                {
                    id: 4,
                    title: 'Web Performance Optimization',
                    description: 'Techniques to improve website loading speed and overall performance.',
                    category: 'guides',
                    thumbnail: '/api/placeholder/400/225',
                    url: '#',
                    featured: false,
                    date: '2023-03-18'
                },
                {
                    id: 5,
                    title: 'UI/UX Design Principles',
                    description: 'Learn the fundamentals of user interface and experience design.',
                    category: 'design',
                    thumbnail: '/api/placeholder/400/225',
                    url: '#',
                    featured: true,
                    date: '2023-02-05'
                },
                {
                    id: 6,
                    title: 'Responsive Web Design',
                    description: 'Create websites that work seamlessly across all devices.',
                    category: 'tutorials',
                    thumbnail: '/api/placeholder/400/225',
                    url: '#',
                    featured: false,
                    date: '2023-01-20'
                },
                {
                    id: 7,
                    title: 'CSS Grid Layout',
                    description: 'Master CSS Grid Layout for modern web design.',
                    category: 'tutorials',
                    thumbnail: '/api/placeholder/400/225',
                    url: '#',
                    featured: false,
                    date: '2022-12-14'
                },
                {
                    id: 8,
                    title: 'Git & GitHub for Developers',
                    description: 'Essential version control workflows for developers.',
                    category: 'tools',
                    thumbnail: '/api/placeholder/400/225',
                    url: '#',
                    featured: true,
                    date: '2022-11-30'
                },
                {
                    id: 9,
                    title: 'Dev Tools Collection',
                    description: 'A curated list of useful tools for web developers.',
                    category: 'tools',
                    thumbnail: '/api/placeholder/400/225',
                    url: '#',
                    featured: false,
                    date: '2022-10-25'
                }
            ]);
            setIsLoading(false);
        }, 1000);
    }, []);

    const categories = [
        { id: 'all', name: 'All Resources' },
        { id: 'guides', name: 'Guides' },
        { id: 'tutorials', name: 'Tutorials' },
        { id: 'tools', name: 'Tools' },
        { id: 'design', name: 'Design' },
        { id: 'featured', name: 'Featured' }
    ];

    const filteredResources = resources.filter(resource => {
        if (activeCategory === 'all') return true;
        if (activeCategory === 'featured') return resource.featured;
        return resource.category === activeCategory;
    });

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="bg-slate-800 text-white py-6">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Ismael Dayo</h1>
                        <nav>
                            <ul className="flex space-x-6">
                                <li><Link href="/portfolio-process" className="hover:text-gray-300 transition">Portfolio</Link></li>
                                <li><Link href="/blog-editor" className="hover:text-gray-300 transition">Blog</Link></li>
                                <li><Link href="/recommendations" className="hover:text-gray-300 transition">Recommendations</Link></li>
                                <li><Link href="/resources" className="hover:text-gray-300 transition font-medium">Resources</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="flex-grow p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-800 mb-4">Resources</h1>
                        <p className="text-gray-600">Discover helpful resources, tutorials, and tools for web development.</p>
                    </div>

                    <div className="mb-8 overflow-x-auto">
                        <div className="flex space-x-2 min-w-max">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-4 py-2 rounded-md whitespace-nowrap transition ${activeCategory === category.id
                                            ? 'bg-slate-700 text-white'
                                            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <p className="text-gray-600">Loading resources...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredResources.map(resource => (
                                <a
                                    key={resource.id}
                                    href={resource.url}
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
                                >
                                    <div className="relative">
                                        <img
                                            src={resource.thumbnail}
                                            alt={resource.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        {resource.featured && (
                                            <span className="absolute top-3 right-3 bg-slate-700 text-white text-xs px-2 py-1 rounded">
                                                Featured
                                            </span>
                                        )}
                                        <span className="absolute bottom-3 left-3 bg-slate-800 bg-opacity-75 text-white text-xs px-2 py-1 rounded capitalize">
                                            {resource.category}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-slate-800 group-hover:text-slate-600 transition mb-2">
                                            {resource.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">{resource.description}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-500">{new Date(resource.date).toLocaleDateString()}</span>
                                            <span className="text-slate-700 font-medium group-hover:text-slate-900 transition">
                                                View Resource →
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}

                    {!isLoading && filteredResources.length === 0 && (
                        <div className="bg-white rounded-lg p-8 text-center">
                            <p className="text-gray-600">No resources found for the selected category.</p>
                        </div>
                    )}

                    <div className="mt-12 bg-slate-100 rounded-lg p-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Subscribe to Resource Updates</h2>
                            <p className="text-gray-600 mb-6">Get notified when new resources are published.</p>
                            <form className="flex max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-grow px-4 py-2 rounded-l-md border-2 border-r-0 border-slate-300 focus:outline-none focus:border-slate-500"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-slate-700 text-white rounded-r-md hover:bg-slate-800 transition"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}