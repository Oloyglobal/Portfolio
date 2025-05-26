

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

const Home=()=>{
 
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Images for the slider 
    const sliderImages = [
        "/api/placeholder/1200/600",
        "/api/placeholder/1200/600",
        "/api/placeholder/1200/600",
        "/api/placeholder/1200/600",
        "/api/placeholder/1200/600"
    ];

    // FAQs data
    const [faqs, setFaqs] = useState([
        {
            question: "What services do you offer?",
            answer: "I offer web development, UI/UX design, mobile app development, and digital marketing services tailored to meet your specific business needs.",
            isOpen: false
        },
        {
            question: "How many years of experience do you have?",
            answer: "I have over 5 years of professional experience working with various technologies and clients across different industries.",
            isOpen: false
        },
        {
            question: "What is your development process?",
            answer: "My development process includes requirement gathering, planning, design, development, testing, deployment, and maintenance. I ensure transparent communication throughout the project lifecycle.",
            isOpen: false
        },
        {
            question: "Do you offer post-launch support?",
            answer: "Yes, I provide ongoing maintenance and support services to ensure your digital products continue to perform optimally after launch.",
            isOpen: false
        },
        {
            question: "How can we collaborate on a project?",
            answer: "You can reach out through the contact form on this website or email me directly. We'll schedule a discovery call to discuss your project requirements and goals.",
            isOpen: false
        }
    ]);

    const toggleFAQ = (index) => {
        const newFaqs = [...faqs];
        newFaqs[index].isOpen = !newFaqs[index].isOpen;
        setFaqs(newFaqs);
    };

    // Auto-rotate slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [sliderImages.length]);

    // Navigation items
    const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Navigation Bar */}
            <nav className="bg-indigo-900 text-white p-4 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="font-bold text-2xl">Ismael Dayo</div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-indigo-300 transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-indigo-800 mt-2 p-4 rounded-lg">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="block py-2 hover:text-indigo-300 transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section  */}
            <section id="home" className="relative h-96 md:h-screen max-h-screen overflow-hidden">
                {sliderImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center px-4">
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                                    {index === 0 && "Welcome to My Portfolio"}
                                    {index === 1 && "Ismael Dayo"}
                                    {index === 2 && "Web Developer"}
                                    {index === 3 && "UI/UX Designer"}
                                    {index === 4 && "Digital Solutions Expert"}
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                                    {index === 0 && "Crafting digital experiences that stand out"}
                                    {index === 1 && "Turning ideas into reality"}
                                    {index === 2 && "Building modern & responsive websites"}
                                    {index === 3 && "Creating intuitive user experiences"}
                                    {index === 4 && "Helping businesses grow online"}
                                </p>
                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                                    Get In Touch
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slider Indicators */}
                <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                    {sliderImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-3 w-3 mx-1 rounded-full ${index === currentSlide ? 'bg-indigo-600' : 'bg-white bg-opacity-50'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <img
                                src="/api/placeholder/600/600"
                                alt="Ismael Dayo"
                                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-10">
                            <h2 className="text-3xl font-bold mb-6 text-indigo-900">About Me</h2>
                            <div className="w-20 h-1 bg-indigo-600 mb-6"></div>
                            <p className="text-gray-700 mb-6">
                                Hello! I'm Ismael Dayo, a passionate web developer and designer with expertise in creating
                                engaging digital experiences. With a strong foundation in both front-end and back-end technologies,
                                I specialize in building responsive, user-friendly websites and applications that help businesses
                                achieve their goals.
                            </p>
                            <p className="text-gray-700 mb-8">
                                My approach combines technical skills with creative problem-solving to deliver solutions
                                that not only look great but also perform exceptionally well. I believe in clean code,
                                intuitive design, and creating digital products that provide real value to users.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
                                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">UI/UX Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2 text-indigo-900">My Services</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mb-10"></div>
                    <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
                        I offer a comprehensive range of digital services to help businesses establish
                        a strong online presence and achieve their goals.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-indigo-600 text-2xl font-bold">01</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-indigo-900">Web Development</h3>
                            <p className="text-gray-700 mb-4">
                                Custom websites built with modern technologies that are responsive,
                                fast-loading, and optimized for search engines.
                            </p>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Responsive Design</li>
                                <li>• E-commerce Solutions</li>
                                <li>• Content Management Systems</li>
                                <li>• Performance Optimization</li>
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-indigo-600 text-2xl font-bold">02</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-indigo-900">UI/UX Design</h3>
                            <p className="text-gray-700 mb-4">
                                User-centered design approach that creates intuitive, engaging interfaces
                                for websites and applications.
                            </p>
                            <ul className="text-gray-700 space-y-2">
                                <li>• User Interface Design</li>
                                <li>• User Experience Strategy</li>
                                <li>• Wireframing & Prototyping</li>
                                <li>• Usability Testing</li>
                            </ul>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-indigo-600 text-2xl font-bold">03</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-indigo-900">Digital Marketing</h3>
                            <p className="text-gray-700 mb-4">
                                Strategic digital marketing solutions to help businesses reach their
                                target audience and grow online.
                            </p>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Search Engine Optimization</li>
                                <li>• Social Media Marketing</li>
                                <li>• Content Strategy</li>
                                <li>• Analytics & Reporting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2 text-indigo-900">Featured Projects</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mb-10"></div>
                    <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
                        Take a look at some of my recent work that showcases my skills and expertise.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img
                                src="/api/placeholder/600/400"
                                alt="Project 1"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-indigo-900">E-commerce Website</h3>
                                <p className="text-gray-700 mb-4">
                                    A full-featured online store with product catalog, shopping cart, and secure checkout.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">React</span>
                                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
                                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">MongoDB</span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img
                                src="/api/placeholder/600/400"
                                alt="Project 2"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-indigo-900">Portfolio Website</h3>
                                <p className="text-gray-700 mb-4">
                                    A responsive portfolio website for a professional photographer showcasing their work.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">HTML5</span>
                                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">CSS3</span>
                                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">JavaScript</span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img
                                src="/api/placeholder/600/400"
                                alt="Project 3"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-indigo-900">Mobile App UI</h3>
                                <p className="text-gray-700 mb-4">
                                    UI/UX design for a fitness tracking mobile application with custom exercise plans.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Figma</span>
                                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">UI/UX</span>
                                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Prototyping</span>
                                </div>
                                <a
                                    href="#"
                                    className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                            View All Projects
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-indigo-900 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2">Client Testimonials</h2>
                    <div className="w-20 h-1 bg-indigo-300 mx-auto mb-10"></div>
                    <p className="text-center max-w-2xl mx-auto mb-12 text-indigo-100">
                        Here's what my clients have to say about working with me.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-indigo-800 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <img
                                    src="/api/placeholder/80/80"
                                    alt="Client 1"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-bold">Sarah Johnson</h3>
                                    <p className="text-indigo-300 text-sm">CEO, TechStart</p>
                                </div>
                            </div>
                            <p className="text-indigo-100 italic">
                                "Ismael delivered our website redesign project on time and exceeded our expectations.
                                His attention to detail and creative solutions helped us increase our conversion rate by 30%."
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-indigo-800 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <img
                                    src="/api/placeholder/80/80"
                                    alt="Client 2"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-bold">Michael Brown</h3>
                                    <p className="text-indigo-300 text-sm">Marketing Director, GrowthHub</p>
                                </div>
                            </div>
                            <p className="text-indigo-100 italic">
                                "Working with Ismael was a pleasure. He understood our business needs and created
                                a digital strategy that helped us reach our target audience effectively."
                            </p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-indigo-800 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <img
                                    src="/api/placeholder/80/80"
                                    alt="Client 3"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-bold">Emily Zhang</h3>
                                    <p className="text-indigo-300 text-sm">Founder, ArtistryLab</p>
                                </div>
                            </div>
                            <p className="text-indigo-100 italic">
                                "Ismael created a beautiful portfolio website that perfectly showcases my work.
                                His design sensibility and technical skills are top-notch."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2 text-indigo-900">Frequently Asked Questions</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mb-10"></div>
                    <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
                        Find answers to common questions about my services, process, and working relationships.
                    </p>

                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors duration-300"
                                >
                                    <span className="font-medium text-indigo-900">{faq.question}</span>
                                    {faq.isOpen ?
                                        <ChevronUp className="text-indigo-600" size={20} /> :
                                        <ChevronDown className="text-indigo-600" size={20} />
                                    }
                                </button>
                                {faq.isOpen && (
                                    <div className="p-4 bg-gray-50 mt-1 rounded-lg text-gray-700">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2 text-indigo-900">Get In Touch</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mb-10"></div>
                    <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
                        Have a project in mind or want to learn more about my services?
                        Feel free to reach out, and I'll get back to you as soon as possible.
                    </p>

                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="md:w-1/2">
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-6 text-indigo-900">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <span className="text-indigo-600 font-bold">@</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Email</h4>
                                        <p className="text-gray-700">ismaiheel4real2008@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <span className="text-indigo-600 font-bold">📱</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Phone</h4>
                                        <p className="text-gray-700">+234 (80) 3215 - 9449</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <span className="text-indigo-600 font-bold">📍</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Location</h4>
                                        <p className="text-gray-700">123, University of Ibadan Francisco, CA, Ibadan, Oyo State</p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <h4 className="font-medium text-gray-900 mb-4">Follow Me</h4>
                                    <div className="flex space-x-4">
                                        <a href="#" className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition-colors duration-300">
                                            <span className="text-indigo-600 font-bold">in</span>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition-colors duration-300">
                                            <span className="text-indigo-600 font-bold">fb</span>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition-colors duration-300">
                                            <span className="text-indigo-600 font-bold">tw</span>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition-colors duration-300">
                                            <span className="text-indigo-600 font-bold">ig</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Footer */}
            <footer className="bg-indigo-900 text-white py-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold mb-2">Ismael Dayo</h2>
                            <p className="text-indigo-200">Full Stack Developer & UX Designer</p>
                            <p className="mt-2 text-sm text-indigo-300">Creating intuitive digital experiences</p>
                        </div>

                        <div className="flex flex-col items-center md:items-end">
                            <div className="flex space-x-4 mb-4">
                                <a href="https://github.com/ismaeldayo" className="hover:text-indigo-300 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="https://linkedin.com/in/ismaeldayo" className="hover:text-indigo-300 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com/ismaeldayo" className="hover:text-indigo-300 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a href="mailto:contact@ismaeldayo.com" className="text-indigo-200 hover:text-white transition-colors">contact@ismaeldayo.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-indigo-800 text-center text-sm text-indigo-400">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0">
                                <nav className="flex space-x-6">
                                    <a href="#about" className="hover:text-white transition-colors">About</a>
                                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                                    <a href="#blogs" className="hover:text-white transition-colors">Blogs</a>
                                    <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
                                    <a href="#services" className="hover:text-white transition-colors">Serivces</a>
                                    <a href="#faqs" className="hover:text-white transition-colors">FAQs</a>
                                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                                </nav>
                            </div>
                            <div>
                                © {new Date().getFullYear()} Ismael Dayo. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default HomePage;