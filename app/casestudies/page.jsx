import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Casestudies = () => {
    const caseStudies = [
        {
            id: 1,
            title: 'Rebranding for TechFusion Corp',
            client: 'TechFusion Corporation',
            description: 'A complete rebranding project including logo design, brand guidelines, and digital presence overhaul.',
            duration: '3 months',
            category: 'Branding',
            image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1747829773/pexels-pavel-danilyuk-6612807_ptt4lg.jpg',
            link: '/casestudies/techfusion'
        },
        {
            id: 2,
            title: 'E-commerce UX Redesign',
            client: 'Global Fashion Retailer',
            description: 'Comprehensive UX redesign that increased conversion rates by 35% and reduced cart abandonment by 28%.',
            duration: '4 months',
            category: 'UX/UI Design',
            image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1747302605/pexels-photo-7643855_o6fwit.webp',
            link: '/casestudies/ecommerce'
        },
        {
            id: 3,
            title: 'Mobile App Design for Healthcare Platform',
            client: 'MediConnect',
            description: 'User-centered app design for a telehealth platform connecting patients with healthcare providers.',
            duration: '6 months',
            category: 'Mobile Design',
            image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1748356439/pexels-olia-danilevich-4974922_anbkot.jpg',
            link: '/casestudies/mediconnect'
        },
        {
            id: 4,
            title: 'Virtual Event Platform',
            client: 'EventSphere',
            description: 'Design and implementation of an immersive virtual event platform during the global pandemic.',
            duration: '5 months',
            category: 'Web Design',
            image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1747828795/pexels-diva-plavalaguna-6149793_mp8otx.jpg',
            link: '/casestudies/eventsphere'
        },
        {
            id: 5,
            title: 'Digital Transformation for Financial Services',
            client: 'Capital Trust Bank',
            description: 'Comprehensive digital transformation project enhancing customer experience across all digital touchpoints.',
            duration: '12 months',
            category: 'Digital Strategy',
            image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1747836904/pexels-mart-production-7709192_ixqq4o.jpg',
            link: '/casestudies/capital-trust'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
          
            <main className="container mx-auto px-4 py-12">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">Case Studies</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Detailed examinations of selected projects, highlighting problem-solving approaches, creative process, and measurable outcomes.
                    </p>
                </div>

                <div className="space-y-16">
                    {caseStudies.map((caseStudy) => (
                        <div key={caseStudy.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="md:flex">
                                <div className="md:w-2/5">
                                    <img
                                        src={caseStudy.image}
                                        alt={caseStudy.title}
                                        className="h-64 md:h-[500px] w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="md:w-3/5 p-8">
                                    <div className="uppercase tracking-wide text-sm text-slate-500 font-semibold mb-1">{caseStudy.category}</div>
                                    <h2 className="text-2xl font-bold text-slate-800 mb-2">{caseStudy.title}</h2>
                                    <p className="text-slate-700 mb-2"><span className="font-medium">Client:</span> {caseStudy.client}</p>
                                    <p className="text-slate-700 mb-4"><span className="font-medium">Duration:</span> {caseStudy.duration}</p>
                                    <p className="text-slate-600 mb-6">{caseStudy.description}</p>
                                    <Link href={caseStudy.link} className="inline-block px-6 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded-md transition-colors duration-300">
                                        View Case Study
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-slate-100 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">Ready to start your project?</h2>
                    <p className="text-slate-600 mb-6 text-center">
                        Let's discuss how my design expertise can help your brand or product achieve its goals.
                    </p>
                    <div className="text-center">
                        <Link href="/hireme" className="inline-block px-8 py-3 bg-slate-700 hover:bg-slate-800 text-white rounded-md transition-colors duration-300">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Casestudies;
