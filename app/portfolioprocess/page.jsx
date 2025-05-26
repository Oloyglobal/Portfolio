

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const PortfolioProcess = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    // Portfolio project data

    const portfolioProjects = [
        {
            id: 1,
            title: "E-commerce Website Redesign",
            category: "web-design",
            image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747266860/E-commerce-Website-Redesign_knhpad.png",
            description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
            client: "RetailTech Solutions",
            technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Shopify API"],
            duration: "3 months",
            link: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747268917/shutterstock_1723955134-1_o6hxcj.jpg",
        },
        {
            id: 2,
            title: "Financial Dashboard",
            category: "web-development",
            image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747267267/web-development_t3hws7.jpg",
            description: "Interactive financial dashboard with real-time data visualization and reporting features.",
            client: "FinanceCore Inc.",
            technologies: ["React", "D3.js", "Firebase", "Material UI"],
            duration: "2 months",
            link: "/portfolio/financial-dashboard",
        },
        {
            id: 3,
            title: "Healthcare Mobile App",
            category: "app-development",
            image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747267529/mobile_app_design_health_care-_1_-Healthcare-Mobile-App_txzsx5.jpg",
            description: "Mobile application for patient management and appointment scheduling.",
            client: "MediCare Solutions",
            technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
            duration: "4 months",
            link: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747269252/Mobile-Apps-in-the-Healthcare-Industry_nnaizw.jpg",
        },
        {
            id: 4,
            title: "Corporate Brand Identity",
            category: "branding",
            image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747267838/Corporate-Brand-Identity_fdkmvo.jpg",
            description: "Complete brand identity design including logo, color palette, and brand guidelines.",
            client: "InnovateX Corp",
            technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
            duration: "1 month",
            link: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747269186/Coroprate_Tips_3_i52xtn.jpg",
        },
        {
            id: 5,
            title: "Real Estate Landing Page",
            category: "web-design",
            image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747268036/Real-Estate-Landing-Page_rqfqhb.png",
            description: "High-converting landing page for a luxury real estate development.",
            client: "PrimeProperties Group",
            technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
            duration: "3 weeks",
            link: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747269060/Real-Estate-Landing-Page2_mnc7it.jpg",
        },
        {
            id: 6,
            title: "Educational Platform",
            category: "web-development",
            image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747268151/Educational-Platform_pwalv8.jpg",
            description: "Comprehensive learning management system with course creation and student tracking capabilities.",
            client: "EduTech International",
            technologies: ["Next.js", "PostgreSQL", "GraphQL", "Auth0"],
            duration: "5 months",
            link: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747269373/educational-platform2_ff2wbz.jpg",
        },
    ];

    // Filter projects

    const filteredProjects =
        activeFilter === "all"
            ? portfolioProjects
            : portfolioProjects.filter((project) => project.category === activeFilter);

    // Filter categories

    const filters = [
        { id: "all", label: "All Projects" },
        { id: "web-design", label: "Web Design" },
        { id: "web-development", label: "Web Development" },
        { id: "app-development", label: "App Development" },
        { id: "branding", label: "Branding" },
    ];

    // My design process steps

    const designProcessSteps = [
        {
            id: 1,
            title: "Discovery",
            icon: "🔍",
            description: "I begin by understanding your business goals, target audience, and project requirements through in-depth consultations and research.",
        },
        {
            id: 2,
            title: "Strategy",
            icon: "📝",
            description: "Based on the discovery phase, I develop a comprehensive strategy that outlines the approach, technologies, and timeline for your project.",
        },
        {
            id: 3,
            title: "Design",
            icon: "✏️",
            description: "Creating wireframes and mockups that visualize the user interface and experience, ensuring alignment with your brand identity.",
        },
        {
            id: 4,
            title: "Development",
            icon: "💻",
            description: "Transforming designs into functional code using modern frameworks and best practices for performance and accessibility.",
        },
        {
            id: 5,
            title: "Testing",
            icon: "🧪",
            description: "Rigorous quality assurance testing across devices and browsers to ensure a flawless user experience.",
        },
        {
            id: 6,
            title: "Launch",
            icon: "🚀",
            description: "Deploying your project with careful attention to performance optimization and security considerations.",
        },
        {
            id: 7,
            title: "Maintenance",
            icon: "🔧",
            description: "Ongoing support, updates, and improvements to keep your project running smoothly and effectively.",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Page Header */}

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Portfolio Process</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover how I transform ideas into impactful digital experiences through a systematic and collaborative approach.
                    </p>
                </div>
            </div>

            {/* Design Process Section */}

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">My Design & Development Process</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            I follow a structured yet flexible process that ensures clear communication, efficient execution, and outstanding results for every project.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {designProcessSteps.map((step) => (
                            <div key={step.id} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {step.id}. {step.title}
                                </h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Projects Section */}

            <section className="py-16 px-4 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Browse through some of my recent work showcasing my expertise across different domains.
                        </p>
                    </div>

                    {/* Filter Buttons */}

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-5 py-2 rounded-full transition-colors duration-300 ${activeFilter === filter.id ? "bg-gray-800 text-white" : "bg-white text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Duration: {project.duration}</span>
                                        <Link href={project.link} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                                            View Details
                                            <Image
                                                src="/right-arrow.png"
                                                alt="Right arrow"
                                                width={16}
                                                height={16}
                                                className="ml-1"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Collaboration Process Section */}

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">How We'll Work Together</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            I believe in maintaining clear communication and collaboration throughout every project to ensure your vision comes to life exactly as you imagine.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">1. Initial Consultation</h3>
                                <p className="text-gray-600">
                                    We'll start with a detailed discussion about your business objectives, target audience, and project requirements to establish a solid foundation.
                                </p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">2. Proposal & Agreement</h3>
                                <p className="text-gray-600">
                                    Based on our consultation, I'll provide a comprehensive proposal outlining scope, timeline, deliverables, and investment for your review and approval.
                                </p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">3. Regular Updates</h3>
                                <p className="text-gray-600">
                                    Throughout the project, you'll receive regular progress updates and have opportunities to provide feedback at key milestones.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">4. Post-Launch Support</h3>
                                <p className="text-gray-600">
                                    Our relationship doesn't end at launch. I provide ongoing support to ensure your project continues to meet your needs and performs optimally.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-200 rounded-lg p-8 h-96 flex items-center justify-center">
                            <Image
                                src="https://res.cloudinary.com/dtbforfvb/image/upload/v1747269845/Collaboration-process-illustration_mx7shu.webp"
                                alt="Collaboration process illustration"
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}

            <section className="py-16 px-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Let's collaborate to bring your vision to life with a tailored solution that meets your specific needs and objectives.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            href="/services"
                            className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}

            <footer className="bg-slate-900 text-gray-300">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        {/* About Column */}

                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Ismael Dayo</h3>
                            <p className="mb-4">
                                Creative developer specializing in crafting exceptional digital experiences with a focus on performance and user experience.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <Image
                                        src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745329482/images-twitter-icon_ssaroc.jpg"
                                        alt="Twitter"
                                        width={24}
                                        height={24}
                                    />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <Image
                                        src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745329839/image-linkedin-icon_mdnui4.webp"
                                        alt="LinkedIn"
                                        width={24}
                                        height={24}
                                    />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <Image
                                        src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745329761/images-github-icon_fzhf7k.png"
                                        alt="GitHub"
                                        width={24}
                                        height={24}
                                    />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <Image
                                        src="https://res.cloudinary.com/dtbforfvb/image/upload/v1747270385/Instagram_vrltmf.jpg"
                                        alt="Instagram"
                                        width={24}
                                        height={24}
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links Column */}

                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="hover:text-white transition-colors duration-300">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-white transition-colors duration-300">
                                        About Me
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="hover:text-white transition-colors duration-300">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio" className="hover:text-white transition-colors duration-300">
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="hover:text-white transition-colors duration-300">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-white transition-colors duration-300">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Services Column */}

                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/services/web-design" className="hover:text-white transition-colors duration-300">
                                        Web Design
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/web-development" className="hover:text-white transition-colors duration-300">
                                        Web Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/mobile-apps" className="hover:text-white transition-colors duration-300">
                                        Mobile App Development
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/branding" className="hover:text-white transition-colors duration-300">
                                        Branding & Identity
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ecommerce" className="hover:text-white transition-colors duration-300">
                                        E-commerce Solutions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/consulting" className="hover:text-white transition-colors duration-300">
                                        Digital Consulting
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Column */}

                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Image
                                        src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746477933/Email_av0u5q.jpg"
                                        alt="Email"
                                        width={24}
                                        height={24}
                                        className="mr-2"
                                    />
                                    <span>ismaiheel4real2008@gmail.com</span>
                                </li>
                                <li className="flex items-start">
                                    <Image
                                        src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746752451/phone-icon-in-trendy-flat-style-free_tg9o14.webp"
                                        alt="Phone"
                                        width={24}
                                        height={24}
                                        className="mr-2"
                                    />
                                    <span>+234 (80) 3215-9449</span>
                                </li>
                                <li className="flex items-start">
                                    <Image
                                        src="https://res.cloudinary.com/dtbforfvb/image/upload/v1747270172/Location2_qkj9tz.jpg"
                                        alt="Location"
                                        width={24}
                                        height={24}
                                        className="mr-2"
                                    />
                                    <span>
                                        123 Digital Avenue University of Ibadan Road<br />
                                        San Francisco, Ibadan Oyo State
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p>© {new Date().getFullYear()} Ismael Dayo. All rights reserved.</p>
                        <div className="mt-4 md:mt-0">
                            <Link href="/privacy-policy" className="mr-6 hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-service" className="hover:text-white transition-colors duration-300">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PortfolioProcess;