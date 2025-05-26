

"use client";

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Callback() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeframe: '',
        message: '',
        preferredTime: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

    

        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) errors.phone = 'Phone number is required';
        if (!formData.preferredTime) errors.preferredTime = 'Please select a preferred time';

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsLoading(true);

        // Simulating API call
        try {
          
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                projectType: '',
                budget: '',
                timeframe: '',
                message: '',
                preferredTime: ''
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const projectTypes = [
        'Website Development',
        'Mobile App',
        'E-commerce Solution',
        'UI/UX Design',
        'Web Application',
        'Consultation',
        'Other'
    ];

    const timeframes = [
        'ASAP',
        'Within 1 month',
        '1-3 months',
        '3-6 months',
        'Flexible'
    ];

    const budgetRanges = [
        'Under $5,000',
        '$5,000 - $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000+'
    ];

    const callbackTimes = [
        'Morning (9am - 12pm)',
        'Afternoon (12pm - 5pm)',
        'Evening (5pm - 8pm)'
    ];

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
                            <li><Link href="/testimonials" className="hover:text-gray-300 transition">Testimonials</Link></li>
                            <li><Link href="/about" className="hover:text-gray-300 transition">About</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
                            <li><Link href="/callback" className="text-gray-300 border-b-2 border-gray-300">Request Callback</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-slate-800 mb-4">Request a Callback</h1>
                        <p className="text-lg text-slate-600">
                            Leave your details below and I'll call you back at your preferred time to discuss your project.
                        </p>
                    </div>

                    {submitStatus === 'success' ? (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                            <div className="text-green-600 text-4xl mb-4">✓</div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
                            <p className="text-slate-600 mb-6">
                                Your callback request has been received. I'll contact you at your preferred time.
                            </p>
                            <button
                                onClick={() => setSubmitStatus(null)}
                                className="bg-slate-800 text-white px-6 py-2 rounded hover:bg-slate-700 transition"
                            >
                                Submit Another Request
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-slate-700 mb-2">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${formErrors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-slate-200'
                                            }`}
                                    />
                                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-slate-700 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${formErrors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-slate-200'
                                            }`}
                                    />
                                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-slate-700 mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${formErrors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-slate-200'
                                            }`}
                                    />
                                    {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                                </div>

                                {/* Company */}
                                <div>
                                    <label htmlFor="company" className="block text-slate-700 mb-2">Company/Organization</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200"
                                    />
                                </div>

                                {/* Project Type */}
                                <div>
                                    <label htmlFor="projectType" className="block text-slate-700 mb-2">Project Type</label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200"
                                    >
                                        <option value="">Select a project type</option>
                                        {projectTypes.map((type) => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Budget */}
                                <div>
                                    <label htmlFor="budget" className="block text-slate-700 mb-2">Budget Range</label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200"
                                    >
                                        <option value="">Select a budget range</option>
                                        {budgetRanges.map((range) => (
                                            <option key={range} value={range}>{range}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Timeframe */}
                                <div>
                                    <label htmlFor="timeframe" className="block text-slate-700 mb-2">Project Timeframe</label>
                                    <select
                                        id="timeframe"
                                        name="timeframe"
                                        value={formData.timeframe}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200"
                                    >
                                        <option value="">Select a timeframe</option>
                                        {timeframes.map((time) => (
                                            <option key={time} value={time}>{time}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Preferred Callback Time */}
                                <div className="md:col-span-2">
                                    <label className="block text-slate-700 mb-2">Preferred Callback Time *</label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {callbackTimes.map((time) => (
                                            <div key={time} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id={time}
                                                    name="preferredTime"
                                                    value={time}
                                                    checked={formData.preferredTime === time}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                />
                                                <label htmlFor={time} className="text-slate-700">{time}</label>
                                            </div>
                                        ))}
                                    </div>
                                    {formErrors.preferredTime && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.preferredTime}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div className="md:col-span-2">
                                    <label htmlFor="message" className="block text-slate-700 mb-2">Project Details (Optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-200"
                                        placeholder="Please share some details about your project goals and requirements."
                                    ></textarea>
                                </div>
                            </div>

                            {submitStatus === 'error' && (
                                <div className="bg-red-50 text-red-600 p-4 rounded mt-6">
                                    There was an error submitting your request. Please try again.
                                </div>
                            )}

                            <div className="mt-8 text-center">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`bg-slate-800 text-white px-8 py-3 rounded-md hover:bg-slate-700 transition ${isLoading ? 'opacity-75 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isLoading ? 'Submitting...' : 'Request Callback'}
                                </button>
                                <p className="text-slate-500 text-sm mt-2">
                                    * Required fields
                                </p>
                            </div>
                        </form>
                    )}

                    <div className="mt-12 text-center">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">Prefer to contact me directly?</h3>
                        <div className="flex justify-center space-x-6">
                            <Link href="/contact" className="text-slate-800 hover:text-slate-600 transition flex items-center">
                                <span className="mr-2">✉️</span> Email Me
                            </Link>
                            <a href="tel:+12345678900" className="text-slate-800 hover:text-slate-600 transition flex items-center">
                                <span className="mr-2">📱</span> +1 (234) 567-8900
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}