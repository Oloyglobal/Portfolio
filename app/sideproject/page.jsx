import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const SideProjectsPage = () => {
    const projects = [
        {
            id: 1,
            title: 'AI-Powered Design Assistant',
            description: 'A machine learning tool that helps creators streamline their design process with intelligent suggestions and automations.',
            tech: ['Python', 'TensorFlow', 'React', 'Node.js'],
            image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747411584/AI-Powered-Design-Assistant_soo894.jpg',
            link: '/sideproject/ai-design'
        },
        {
            id: 2,
            title: 'Photography Portfolio Generator',
            description: 'An application that helps photographers create stunning portfolio websites with minimal effort.',
            tech: ['Next.js', 'Tailwind CSS', 'GraphQL', 'AWS'],
            image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747411383/Photography-Portfolio-Generator_aiuxga.jpg',
            link: '/sideproject/portfolio-generator'
        },
        {
            id: 3,
            title: 'Creative Collaboration Platform',
            description: 'A platform for creative professionals to find collaborators, share work in progress, and receive feedback.',
            tech: ['React', 'Firebase', 'Express', 'Socket.io'],
            image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747411132/Creative-Collaboration-Platform_wwdchc.jpg',
            link: '/sideproject/collab-platform'
        },
        {
            id: 4,
            title: 'Design System Toolkit',
            description: 'A comprehensive toolkit for creating and managing design systems across multiple platforms.',
            tech: ['JavaScript', 'Storybook', 'Figma API', 'SCSS'],
            image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747411002/system-toolkit-for-mac-free-download-1_mx1vpc.jpg',
            link: '/sideproject/design-system'
        },
        {
            id: 5,
            title: '3D Modeling Visualizer',
            description: 'Interactive web-based tool for visualizing and manipulating 3D models in real-time.',
            tech: ['Three.js', 'React', 'WebGL', 'Blender'],
            image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747410825/3D-Modeling-Visualizer_nfrqvm.jpg',
            link: '/sideproject/3d-modeling'
        },
        {
            id: 6,
            title: 'Digital Art Marketplace',
            description: 'Platform for artists to sell digital artwork with blockchain-based authenticity verification.',
            tech: ['Solidity', 'React', 'IPFS', 'Ethereum'],
            image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747410564/Digital-Art-Marketplace_icpqq1.png',
            link: '/sideproject/art-marketplace'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <main className="container mx-auto px-4 py-12">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">Side Projects</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Passion projects and experiments where I explore new technologies and creative concepts outside of client work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link href={project.link} key={project.id} className="group">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gary-200 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                                </div>

                                <div className="p-6 flex-grow">
                                    <h2 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-slate-600 transition-colors">
                                        {project.title}
                                    </h2>

                                    <p className="text-slate-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-slate-200 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-slate-400 to-slate-500 p-8 rounded-xl">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Have a project idea?</h2>
                        <p className="text-slate-700 mb-6">I'm always open to collaboration on interesting projects.</p>
                        <Link
                            href="/hireme"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-slate-600 to-gary-600 hover:from-slate-700 hover:to-gray-700 text-white rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Let's Work Together
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SideProjectsPage;