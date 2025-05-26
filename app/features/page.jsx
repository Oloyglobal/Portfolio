

import React from 'react';

const Features = () => {
   
    const features = [
        {
            id: 1,
            title: "Responsive Web Design",
            description: "Creating websites that provide optimal viewing experience across a wide range of devices, from desktop computers to mobile phones.",
            icon: "📱",
        },
        {
            id: 2,
            title: "Custom Web Applications",
            description: "Building tailor-made web applications designed to solve specific business problems and streamline operations.",
            icon: "🖥️",
        },
        {
            id: 3,
            title: "E-commerce Solutions",
            description: "Developing online stores with secure payment gateways, inventory management, and seamless user experience.",
            icon: "🛒",
        },
        {
            id: 4,
            title: "API Development",
            description: "Creating robust and scalable APIs that enable seamless communication between different software systems.",
            icon: "🔄",
        },
        {
            id: 5,
            title: "Performance Optimization",
            description: "Improving website speed and performance through code optimization, caching strategies, and efficient resource loading.",
            icon: "⚡",
        },
        {
            id: 6,
            title: "Database Design",
            description: "Architecting efficient database structures that ensure data integrity, security, and optimal query performance.",
            icon: "🗄️",
        },
        {
            id: 7,
            title: "UI/UX Consultation",
            description: "Providing expert advice on user interface design and user experience to create intuitive and engaging digital products.",
            icon: "🎨",
        },
        {
            id: 8,
            title: "SEO Implementation",
            description: "Implementing search engine optimization techniques to improve website visibility and organic traffic.",
            icon: "🔍",
        },
        {
            id: 9,
            title: "Maintenance & Support",
            description: "Offering ongoing maintenance services and technical support to ensure your digital products remain up-to-date and secure.",
            icon: "🔧",
        }
    ];

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Services & Features</h1>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        Comprehensive web development solutions tailored to meet your business needs and drive digital growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-slate-500"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-slate-700 text-white p-8 rounded-lg shadow-lg">
                    <div className="md:flex items-center justify-between">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold mb-2">Need a custom solution?</h2>
                            <p className="text-slate-300">
                                Let's discuss how I can help bring your ideas to life with tailored web development services.
                            </p>
                        </div>
                        <div>
                            <a
                                href="/contact"
                                className="inline-block px-6 py-3 bg-white text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">My Development Process</h2>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-700 text-white rounded-full font-bold">1</div>
                            <div className="ml-6">
                                <h3 className="text-xl font-medium text-gray-800 mb-1">Discovery & Requirements</h3>
                                <p className="text-gray-600">Understanding your business goals, target audience, and project requirements through in-depth consultation.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-700 text-white rounded-full font-bold">2</div>
                            <div className="ml-6">
                                <h3 className="text-xl font-medium text-gray-800 mb-1">Planning & Design</h3>
                                <p className="text-gray-600">Creating wireframes, mockups, and technical specifications to visualize the final product before development begins.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-700 text-white rounded-full font-bold">3</div>
                            <div className="ml-6">
                                <h3 className="text-xl font-medium text-gray-800 mb-1">Development & Implementation</h3>
                                <p className="text-gray-600">Building your solution using modern technologies and best practices with regular updates and iteration.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-700 text-white rounded-full font-bold">4</div>
                            <div className="ml-6">
                                <h3 className="text-xl font-medium text-gray-800 mb-1">Testing & Quality Assurance</h3>
                                <p className="text-gray-600">Rigorous testing across devices and browsers to ensure functionality, performance, and security.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-700 text-white rounded-full font-bold">5</div>
                            <div className="ml-6">
                                <h3 className="text-xl font-medium text-gray-800 mb-1">Deployment & Support</h3>
                                <p className="text-gray-600">Launching your project with care and providing ongoing maintenance and support as needed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Features;