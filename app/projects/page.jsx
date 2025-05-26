

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const PROJECTS_DATA = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with product management, shopping cart, and payment processing.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746932549/E-Commerce-Platform1_nieg6j.jpg',
        demoUrl: 'https://ecommerce-demo.example.com',
        githubUrl: 'https://github.com/username/ecommerce-project',
        featured: true,
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A productivity tool for managing tasks, projects, and team collaboration.',
        tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
        image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746932442/Task-Management-App_iefj8j.jpg',
        demoUrl: 'https://taskapp.example.com',
        githubUrl: 'https://github.com/username/task-management-app',
        featured: true,
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'Real-time weather information with forecasting and historical data visualization.',
        tags: ['JavaScript', 'Weather API', 'Chart.js'],
        image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746932370/Weather-Dashboard_ijfbje.png',
        demoUrl: 'https://weather.example.com',
        githubUrl: 'https://github.com/username/weather-dashboard',
        featured: false,
    },
    {
        id: 4,
        title: 'Social Media Analytics',
        description: 'A dashboard for tracking and analyzing social media engagement and growth.',
        tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
        image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746932219/Social-Media-Analytics_lzwreu.png',
        demoUrl: 'https://social-analytics.example.com',
        githubUrl: 'https://github.com/username/social-analytics',
        featured: false,
    },
    {
        id: 5,
        title: 'Fitness Tracker',
        description: 'Mobile application for tracking workouts, nutrition, and fitness progress.',
        tags: ['React Native', 'Firebase', 'HealthKit'],
        image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746932134/Fitness-Tracker_nutvzz.jpg',
        demoUrl: 'https://fitness.example.com',
        githubUrl: 'https://github.com/username/fitness-tracker',
        featured: false,
    },
    {
        id: 6,
        title: 'Portfolio Website',
        description: 'Personal portfolio website showcasing projects and professional experience.',
        tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746931890/Portfolio-Website_gpxx7d.jpg',
        demoUrl: 'https://portfolio.example.com',
        githubUrl: 'https://github.com/username/portfolio-website',
        featured: true,
    },
];

const FilterButton = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${active
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
    >
        {children}
    </button>
);

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(PROJECTS_DATA);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let result = [...PROJECTS_DATA];

        if (activeFilter === 'featured') {
            result = result.filter(project => project.featured);
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(project =>
                project.title.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }

        setFilteredProjects(result);
    }, [activeFilter, searchQuery]);

    const getTagCounts = () => {
        const counts = {};
        PROJECTS_DATA.forEach(project => {
            project.tags.forEach(tag => {
                counts[tag] = (counts[tag] || 0) + 1;
            });
        });
        return Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

            {/* Hero section */}
            
            <section className="relative py-20 bg-gradient-to-br dark:bg-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]" />
                <div className="absolute h-full w-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0),rgba(0,0,0,0.4))]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            My Projects Portfolio
                        </h1>
                        <p className="text-lg md:text-xl text-indigo-100 mb-8">
                            Hello! I'm Ismael Dayo, a passionate web developer and designer with expertise in creating
                            engaging digital experiences. With a strong foundation in both front-end and back-end technologies,
                            I specialize in building responsive, user-friendly websites and applications that help businesses
                            achieve their goals.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#projects"
                                className="px-6 py-3 bg-white text-slate-500 font-medium rounded-lg hover:bg-slate-400 transition-colors"
                            >
                                View Projects
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects section */}
            <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <input
                            type="text"
                            className="block w-full p-3 text-sm border-gray-300 rounded-lg"
                            placeholder="Search by title or tags"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                            <FilterButton
                                active={activeFilter === 'all'}
                                onClick={() => setActiveFilter('all')}
                            >
                                All Projects
                            </FilterButton>
                            <FilterButton
                                active={activeFilter === 'featured'}
                                onClick={() => setActiveFilter('featured')}
                            >
                                Featured
                            </FilterButton>
                        </div>
                    </div>

                    {/* Projects grid */}
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="h-96 bg-gray-200 dark:bg-gray-500 rounded-xl " />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentProjects.map((project) => (
                                <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{project.description}</p>
                                        <div className="flex mt-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 py-1 px-3 rounded-full mr-2"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="px-6 pb-6 flex justify-between">
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">
                                            Demo
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                            className="px-6 py-2 bg-indigo-600 text-white rounded-lg disabled:bg-gray-300 disabled:text-gray-500"
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span className="mx-4 text-lg font-semibold">{currentPage}</span>
                        <button
                            onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(filteredProjects.length / projectsPerPage)))}
                            className="px-6 py-2 bg-indigo-600 text-white rounded-lg disabled:bg-gray-300 disabled:text-gray-500"
                            disabled={currentPage === Math.ceil(filteredProjects.length / projectsPerPage)}
                        >
                            Next
                        </button>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default ProjectsPage;
