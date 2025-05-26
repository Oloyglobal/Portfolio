

"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Recommendations() {
    const [recommendations, setRecommendations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        // Simulate fetching recommendations data
        setTimeout(() => {
            setRecommendations([
                {
                    id: 1,
                    name: 'Sarah Johnson',
                    position: 'CTO at TechGrowth',
                    company: 'TechGrowth Inc.',
                    relationship: 'client',
                    image: '/api/placeholder/80/80',
                    content: 'Ismael is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving abilities are impressive. He took our complex requirements and turned them into an elegant solution that exceeded our expectations.',
                    date: '2023-04-15'
                },
                {
                    id: 2,
                    name: 'Michael Chen',
                    position: 'Project Manager',
                    company: 'InnovateTech',
                    relationship: 'colleague',
                    image: '/api/placeholder/80/80',
                    content: 'I had the pleasure of working with Ismael on multiple projects. His technical expertise and collaborative approach made him an invaluable team member. He\'s not only skilled in development but also brings creative ideas to solve business problems.',
                    date: '2023-02-22'
                },
                {
                    id: 3,
                    name: 'Alex Rodriguez',
                    position: 'Lead Developer',
                    company: 'WebSolutions Co.',
                    relationship: 'colleague',
                    image: '/api/placeholder/80/80',
                    content: 'Ismael is one of the most talented developers I\'ve worked with. His code is clean, well-documented, and efficient. He stays up-to-date with the latest technologies and is always willing to mentor junior team members.',
                    date: '2022-11-18'
                },
                {
                    id: 4,
                    name: 'Jennifer Lee',
                    position: 'CEO',
                    company: 'StartupVision',
                    relationship: 'client',
                    image: '/api/placeholder/80/80',
                    content: 'Working with Ismael was a game-changer for our startup. He understood our vision and translated it into a functional platform that has been instrumental in our growth. His ability to communicate technical concepts clearly to non-technical stakeholders was particularly valuable.',
                    date: '2023-01-05'
                },
                {
                    id: 5,
                    name: 'David Wilson',
                    position: 'Director of Engineering',
                    company: 'Enterprise Solutions',
                    relationship: 'manager',
                    image: '/api/placeholder/80/80',
                    content: 'Ismael consistently exceeded expectations during his time on our team. He tackled complex challenges with enthusiasm and delivered robust solutions that stood the test of time. His positive attitude and willingness to help others made him a joy to work with.',
                    date: '2022-09-30'
                }
            ]);
            setIsLoading(false);
        }, 1000);
    }, []);

    const filteredRecommendations = recommendations.filter(rec => {
        if (filter === 'all') return true;
        return rec.relationship === filter;
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
                                <li><Link href="/recommendations" className="hover:text-gray-300 transition font-medium">Recommendations</Link></li>
                                <li><Link href="/resources" className="hover:text-gray-300 transition">Resources</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="flex-grow p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-800 mb-4">Recommendations</h1>
                        <p className="text-gray-600">See what clients, colleagues, and managers have to say about working with me.</p>
                    </div>

                    <div className="mb-8">
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setFilter('all')}
                                className={`px-4 py-2 rounded-md transition ${filter === 'all'
                                        ? 'bg-slate-700 text-white'
                                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                                    }`}
                            >
                                All Recommendations
                            </button>
                            <button
                                onClick={() => setFilter('client')}
                                className={`px-4 py-2 rounded-md transition ${filter === 'client'
                                        ? 'bg-slate-700 text-white'
                                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                                    }`}
                            >
                                Clients
                            </button>
                            <button
                                onClick={() => setFilter('colleague')}
                                className={`px-4 py-2 rounded-md transition ${filter === 'colleague'
                                        ? 'bg-slate-700 text-white'
                                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                                    }`}
                            >
                                Colleagues
                            </button>
                            <button
                                onClick={() => setFilter('manager')}
                                className={`px-4 py-2 rounded-md transition ${filter === 'manager'
                                        ? 'bg-slate-700 text-white'
                                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                                    }`}
                            >
                                Managers
                            </button>
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <p className="text-gray-600">Loading recommendations...</p>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {filteredRecommendations.map((recommendation) => (
                                <div key={recommendation.id} className="bg-white rounded-lg p-6 shadow-md">
                                    <div className="flex items-start space-x-4">
                                        <img
                                            src={recommendation.image}
                                            alt={recommendation.name}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-slate-800">{recommendation.name}</h3>
                                                    <p className="text-gray-600">{recommendation.position}</p>
                                                    <p className="text-gray-500 text-sm">{recommendation.company}</p>
                                                </div>
                                                <span className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full capitalize">
                                                    {recommendation.relationship}
                                                </span>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-gray-700 italic">"{recommendation.content}"</p>
                                            </div>
                                            <div className="mt-4 text-right">
                                                <p className="text-gray-500 text-sm">{new Date(recommendation.date).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {!isLoading && filteredRecommendations.length === 0 && (
                                <div className="bg-white rounded-lg p-8 text-center">
                                    <p className="text-gray-600">No recommendations found for the selected filter.</p>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="mt-12 bg-slate-100 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Would you like to leave a recommendation?</h2>
                        <p className="text-gray-600 mb-6">I'd be grateful if you'd share your experience working with me.</p>
                        <button className="px-6 py-3 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition">
                            Submit a Recommendation
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}