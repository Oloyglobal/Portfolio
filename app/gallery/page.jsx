

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const GalleryPage = () => {
    // Gallery item categories
    const categories = [
        { id: 'all', name: 'All' },
        { id: 'digital', name: 'Digital Design' },
        { id: 'branding', name: 'Branding' },
        { id: 'illustrations', name: 'Illustrations' },
        { id: 'ui', name: 'UI/UX' },
        { id: 'photography', name: 'Photography' }
    ];

    // Gallery items
    const galleryItems = [
        {
            id: 1,
            title: 'Nebula Brand Identity',
            category: 'branding',
            image: '/images/gallery/nebula-branding.jpg',
            link: '/gallery/nebula-branding'
        },
        {
            id: 2,
            title: 'Cityscape at Twilight',
            category: 'photography',
            image: '/images/gallery/cityscape.jpg',
            link: '/gallery/cityscape'
        },
        {
            id: 3,
            title: 'Finance App UI',
            category: 'ui',
            image: '/images/gallery/finance-app.jpg',
            link: '/gallery/finance-app'
        },
        {
            id: 4,
            title: 'Abstract Geometry Series',
            category: 'illustrations',
            image: '/images/gallery/abstract-geometry.jpg',
            link: '/gallery/abstract-geometry'
        },
        {
            id: 5,
            title: 'Eco Product Packaging',
            category: 'branding',
            image: '/images/gallery/eco-packaging.jpg',
            link: '/gallery/eco-packaging'
        },
        {
            id: 6,
            title: 'Technology Dashboard',
            category: 'ui',
            image: '/images/gallery/tech-dashboard.jpg',
            link: '/gallery/tech-dashboard'
        },
        {
            id: 7,
            title: 'Character Design Collection',
            category: 'illustrations',
            image: '/images/gallery/character-design.jpg',
            link: '/gallery/character-design'
        },
        {
            id: 8,
            title: 'Nature Macro Series',
            category: 'photography',
            image: '/images/gallery/nature-macro.jpg',
            link: '/gallery/nature-macro'
        },
        {
            id: 9,
            title: 'Social Media Campaign',
            category: 'digital',
            image: '/images/gallery/social-campaign.jpg',
            link: '/gallery/social-campaign'
        },
        {
            id: 10,
            title: 'Fashion E-Commerce Concept',
            category: 'ui',
            image: '/images/gallery/fashion-ecommerce.jpg',
            link: '/gallery/fashion-ecommerce'
        },
        {
            id: 11,
            title: 'Street Photography Collection',
            category: 'photography',
            image: '/images/gallery/street-photography.jpg',
            link: '/gallery/street-photography'
        },
        {
            id: 12,
            title: 'Logo Design Collection',
            category: 'branding',
            image: '/images/gallery/logo-collection.jpg',
            link: '/gallery/logo-collection'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <main className="container mx-auto px-4 py-12">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">Gallery</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        A curated collection of my best work across various design disciplines and projects.
                    </p>
                </div>

                {/* Filter categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-700 hover:text-white transition-colors duration-300"
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Gallery grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryItems.map(item => (
                        <Link key={item.id} href={item.link} className="group">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="aspect-square bg-slate-200 relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                        {/* Image placeholder */}
                                        <span>Gallery Image</span>
                                    </div>
                                    <div className="absolute inset-0 bg-slate-800 bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <span className="text-white font-medium">View Details</span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-slate-800 font-medium">{item.title}</h3>
                                    <p className="text-slate-500 text-sm capitalize">{item.category}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load more button */}
                <div className="mt-12 text-center">
                    <button className="px-8 py-3 bg-slate-700 hover:bg-slate-800 text-white rounded-md transition-colors duration-300">
                        Load More
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default GalleryPage;