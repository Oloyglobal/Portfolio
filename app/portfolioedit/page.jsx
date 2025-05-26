

"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Ismael Dayo</h3>
                        <p className="text-gray-300 text-sm">Professional portfolio showcasing my work, skills, and experience in software development.</p>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><Link href="/portfolio-process" className="hover:text-white transition">Portfolio</Link></li>
                            <li><Link href="/blog-editor" className="hover:text-white transition">Blog</Link></li>
                            <li><Link href="/recommendations" className="hover:text-white transition">Recommendations</Link></li>
                            <li><Link href="/resources" className="hover:text-white transition">Resources</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Contact</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>
                                Email:{" "}
                                <a
                                    href="mailto:ismaiheel4real2008@gmail.com"
                                    className="hover:underline text-white"
                                >
                                    ismaiheel4real2008@gmail.com
                                </a>
                            </li>
                            <li>
                                Phone:{" "}
                                <a
                                    href="tel:+2348032159449"
                                    className="hover:underline text-white"
                                >
                                    +234 (80)3215 9449
                                </a>
                            </li>
                            <li>
                                Location: 123 University of Ibadan San Francisco, CA; Ibadan, Oyo State
                            </li>
                        </ul>
                    </div>



                    <div>
                        <h3 className="text-lg font-semibold mb-3">Connect</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/ismaiheel-dayo-00180b1a1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/Dayocodez"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://x.com/Salaudeenismai7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>


                </div>

                <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Ismael Dayo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export { Footer };


const PortfolioEdit = () => {
    
    const router = useRouter();
    const [portfolioData, setPortfolioData] = useState({
        title: '',
        description: '',
        skills: [],
        projects: [],
        experience: [],
        education: []
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [skillInput, setSkillInput] = useState('');

    useEffect(() => {

        // Simulate fetching portfolio data

        setTimeout(() => {
            setPortfolioData({
                title: 'Ismael Dayo - Software Developer',
                description: 'Passionate software developer with expertise in React, Node.js, and full-stack development.',
                skills: ['React', 'JavaScript', 'Node.js', 'Next.js', 'CSS', 'HTML', 'Git'],
                projects: [
                    {
                        id: 1,
                        title: 'E-commerce Platform',
                        description: 'A fully functional e-commerce platform with payment integration.',
                        link: '#'
                    },
                    {
                        id: 2,
                        title: 'Content Management System',
                        description: 'Custom CMS built for small businesses.',
                        link: '#'
                    }
                ],
                experience: [
                    {
                        id: 1,
                        company: 'Tech Solutions Inc.',
                        role: 'Senior Frontend Developer',
                        duration: '2020-Present',
                        description: 'Leading frontend development for enterprise applications.'
                    },
                    {
                        id: 2,
                        company: 'Digital Creations',
                        role: 'Web Developer',
                        duration: '2018-2020',
                        description: 'Developed responsive websites for various clients.'
                    }
                ],
                education: [
                    {
                        id: 1,
                        institution: 'Obafemi Awolowo University',
                        degree: 'Bachelor of Science in Computer Engineering',
                        year: '2014'
                    }
                ]
            });
            setIsLoading(false);
        }, 1000);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPortfolioData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSkillAdd = () => {
        if (skillInput.trim() !== '' && !portfolioData.skills.includes(skillInput)) {
            setPortfolioData(prev => ({
                ...prev,
                skills: [...prev.skills, skillInput]
            }));
            setSkillInput('');
        }
    };

    const handleSkillRemove = (skillToRemove) => {
        setPortfolioData(prev => ({
            ...prev,
            skills: prev.skills.filter(skill => skill !== skillToRemove)
        }));
    };

    const handleProjectRemove = (id) => {
        setPortfolioData(prev => ({
            ...prev,
            projects: prev.projects.filter(project => project.id !== id)
        }));
    };

    const handleExperienceRemove = (id) => {
        setPortfolioData(prev => ({
            ...prev,
            experience: prev.experience.filter(exp => exp.id !== id)
        }));
    };

    const handleEducationRemove = (id) => {
        setPortfolioData(prev => ({
            ...prev,
            education: prev.education.filter(edu => edu.id !== id)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        
        setTimeout(() => {
            setIsSaving(false);
            alert('Portfolio saved successfully!');
            router.push('/portfolio-process');
        }, 1500);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col">
                <main className="flex-grow p-6">
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
                        <div className="flex justify-center items-center h-64">
                            <p className="text-gray-600">Loading portfolio data...</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <main className="flex-grow p-6">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-slate-800">Edit Portfolio</h1>
                        <div className="space-x-2">
                            <Link href="/portfolio-process" className="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 transition">
                                Cancel
                            </Link>
                            <button
                                onClick={handleSubmit}
                                disabled={isSaving}
                                className="px-4 py-2 bg-slate-700 rounded-md text-white hover:bg-slate-800 transition disabled:bg-slate-400"
                            >
                                {isSaving ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-slate-700 border-b border-slate-200 pb-2">Basic Information</h2>
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Portfolio Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={portfolioData.title}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows="4"
                                    value={portfolioData.description}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                ></textarea>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-slate-700 border-b border-slate-200 pb-2">Skills</h2>
                            <div className="flex">
                                <input
                                    type="text"
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    placeholder="Add a skill..."
                                />
                                <button
                                    type="button"
                                    onClick={handleSkillAdd}
                                    className="px-4 py-2 bg-slate-600 text-white rounded-r-md hover:bg-slate-700"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {portfolioData.skills.map((skill, index) => (
                                    <div key={index} className="flex items-center bg-slate-100 px-3 py-1 rounded-full">
                                        <span className="text-slate-700">{skill}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleSkillRemove(skill)}
                                            className="ml-2 text-slate-500 hover:text-slate-700"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-slate-700 border-b border-slate-200 pb-2">Projects</h2>
                                <Link href="/portfolio-new" className="text-sm text-slate-600 hover:text-slate-800">
                                    + Add New Project
                                </Link>
                            </div>
                            <div className="space-y-4">
                                {portfolioData.projects.map((project) => (
                                    <div key={project.id} className="bg-slate-50 p-4 rounded-md border border-slate-200">
                                        <div className="flex justify-between">
                                            <h3 className="font-medium text-slate-800">{project.title}</h3>
                                            <div className="space-x-2">
                                                <button
                                                    type="button"
                                                    className="text-sm text-slate-600 hover:text-slate-800"
                                                    onClick={() => router.push(`/portfolio-edit?id=${project.id}`)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="text-sm text-red-600 hover:text-red-800"
                                                    onClick={() => handleProjectRemove(project.id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm mt-1">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-slate-700 border-b border-slate-200 pb-2">Experience</h2>
                                <button type="button" className="text-sm text-slate-600 hover:text-slate-800">
                                    + Add Experience
                                </button>
                            </div>
                            <div className="space-y-4">
                                {portfolioData.experience.map((exp) => (
                                    <div key={exp.id} className="bg-slate-50 p-4 rounded-md border border-slate-200">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="font-medium text-slate-800">{exp.role}</h3>
                                                <p className="text-gray-600">{exp.company} • {exp.duration}</p>
                                            </div>
                                            <div className="space-x-2">
                                                <button
                                                    type="button"
                                                    className="text-sm text-slate-600 hover:text-slate-800"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="text-sm text-red-600 hover:text-red-800"
                                                    onClick={() => handleExperienceRemove(exp.id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm mt-1">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-slate-700 border-b border-slate-200 pb-2">Education</h2>
                                <button type="button" className="text-sm text-slate-600 hover:text-slate-800">
                                    + Add Education
                                </button>
                            </div>
                            <div className="space-y-4">
                                {portfolioData.education.map((edu) => (
                                    <div key={edu.id} className="bg-slate-50 p-4 rounded-md border border-slate-200">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="font-medium text-slate-800">{edu.degree}</h3>
                                                <p className="text-gray-600">{edu.institution} • {edu.year}</p>
                                            </div>
                                            <div className="space-x-2">
                                                <button
                                                    type="button"
                                                    className="text-sm text-slate-600 hover:text-slate-800"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="text-sm text-red-600 hover:text-red-800"
                                                    onClick={() => handleEducationRemove(edu.id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-200 flex justify-end space-x-3">
                            <Link href="/portfolio-process" className="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 transition">
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                disabled={isSaving}
                                className="px-4 py-2 bg-slate-700 rounded-md text-white hover:bg-slate-800 transition disabled:bg-slate-400"
                            >
                                {isSaving ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default PortfolioEdit;