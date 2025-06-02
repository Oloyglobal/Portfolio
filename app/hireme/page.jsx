"use client";
import { useState } from 'react';
import Link from 'next/link';
export default function hireme() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally handle form submission to a backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            company: '',
            projectType: '',
            budget: '',
            timeline: '',
            description: ''
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Work with Oloyede Olaniyi</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        I'm available for freelance projects, collaborations, and full-time opportunities.
                        Let's create something amazing together.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">My Services</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-6 border border-slate-200 rounded-lg">
                            <h3 className="text-xl font-semibold text-slate-700 mb-3">Photography</h3>
                            <p className="text-slate-600">Professional photography services for events, portraits, products, and more.</p>
                        </div>

                        <div className="p-6 border border-slate-200 rounded-lg">
                            <h3 className="text-xl font-semibold text-slate-700 mb-3">Web Development</h3>
                            <p className="text-slate-600">Custom websites built with modern technologies focused on performance and user experience.</p>
                        </div>

                        <div className="p-6 border border-slate-200 rounded-lg">
                            <h3 className="text-xl font-semibold text-slate-700 mb-3">UI/UX Design</h3>
                            <p className="text-slate-600">Intuitive and beautiful interfaces that enhance user experience and drive engagement.</p>
                        </div>

                        <div className="p-6 border border-slate-200 rounded-lg">
                            <h3 className="text-xl font-semibold text-slate-700 mb-3">Brand Strategy</h3>
                            <p className="text-slate-600">Developing cohesive brand identities that resonate with your target audience.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Me</h2>

                    {isSubmitted ? (
                        <div className="bg-slate-100 p-6 rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-slate-700 mb-2">Thank you for your interest!</h3>
                            <p className="text-slate-600 mb-4">I'll review your project details and get back to you within 48 hours.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                                    Company (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">
                                    Project Type
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                >
                                    <option value="">Select a project type</option>
                                    <option value="photography">Photography</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="ui-ux-design">UI/UX Design</option>
                                    <option value="brand-strategy">Brand Strategy</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">
                                        Budget
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                    >
                                        <option value="">Select a budget range</option>
                                        <option value="less-than-1000">Less than $1,000</option>
                                        <option value="1000-5000">$1,000 - $5,000</option>
                                        <option value="5000-10000">$5,000 - $10,000</option>
                                        <option value="10000-plus">$10,000+</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1">
                                        Timeline
                                    </label>
                                    <select
                                        id="timeline"
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                    >
                                        <option value="">Select a timeline</option>
                                        <option value="less-than-1-month">Less than 1 month</option>
                                        <option value="1-3-months">1-3 months</option>
                                        <option value="3-6-months">3-6 months</option>
                                        <option value="6-plus-months">6+ months</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                                    Project Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition font-medium"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            
        </div>
    );
}

    



