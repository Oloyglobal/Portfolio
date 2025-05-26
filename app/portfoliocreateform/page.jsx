

'use client';

import { useState } from 'react';

import {
    User, Mail, Phone, FileText, 
    Briefcase,
    GraduationCap, Calendar, Award, Code
} from 'lucide-react';

export default function PortfolioCreateForm() {
    const [formData, setFormData] = useState({
        name: 'Ismael Dayo',
        email: 'ismaiheel4real2008@gmail.com',
        phone: '+234 3215 9449',
        bio: 'Passionate developer with expertise in React, Next.js, and Tailwind CSS. I create responsive and accessible web applications with a focus on user experience.',
    });
    const [menuOpen, setMenuOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission 

        alert('Portfolio updated successfully!');
    };

    // Portfolio projects

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with payment integration and inventory management.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            imageUrl: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747420075/Nigerias-eCommerce-Market-Projected-to-Reach-75-billion-by-2025_aoz1ep.png',
            link: '#project-1',
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management tool for teams with real-time updates and notifications.',
            technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
            imageUrl: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746932442/Task-Management-App_iefj8j.jpg',
            link: '#project-2',
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description: 'A responsive portfolio website template with dark mode and customizable sections.',
            technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
            imageUrl: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747420631/Portfolio-Website2_bky2ho.jpg',
            link: '#project-3',
        },
    ];

    // Skills

    const skills = [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'Git', level: 88 },
    ];

    // Experience

    const experiences = [
        {
            company: 'Tech Innovations',
            position: 'Senior Frontend Developer',
            duration: '2022 - Present',
            description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices.',
        },
        {
            company: 'Digital Solutions Inc.',
            position: 'Frontend Developer',
            duration: '2020 - 2022',
            description: 'Developed responsive web applications using React and implemented UI designs with precision.',
        },
        {
            company: 'WebCraft Agency',
            position: 'Junior Web Developer',
            duration: '2018 - 2020',
            description: 'Collaborated on various client projects and gained expertise in frontend technologies.',
        },
    ];

    // Education

    const education = [
        {
            institution: 'University of Lagos',
            degree: 'Master of Computer Engineering',
            duration: '2016 - 2018',
        },

        {
            institution: 'Obafemi Awolowo University' ,
            degree: 'Bachelor in Computer Engineering',
            duration: '2010 - 2013',
        },

        {
            institution: 'Federal Polytechnic, Ado- Ekiti' ,
            degree: 'Ordinary National Diploma in Electrical Electronics Engineering',
            duration: '2002 - 2004',
        },
    ];

    // Services

    const services = [
        {
            title: 'Web Development',
            description: 'Custom website and web application development using modern frameworks and technologies.',
        },
        {
            title: 'UI/UX Design',
            description: 'Creating intuitive and engaging user interfaces with a focus on accessibility and user experience.',
        },
        {
            title: 'Mobile App Development',
            description: 'Cross-platform mobile applications using React Native for iOS and Android devices.',
        },
        {
            title: 'Consultation',
            description: 'Technical consultation on architecture, technology stack, and development best practices.',
        },
    ];

    // Testimonials

    const testimonials = [
        {
            name: 'Kolawole Ibrahim',
            position: 'CEO at Tech Innovate',
            text: 'Ismael delivered an exceptional website that exceeded our expectations. The attention to detail and responsive design were outstanding.',
        },
        {
            name: 'Adedokun Abdul-rahman',
            position: 'Product Manager at Digital First',
            text: 'Working with Ismael was a great experience. The project was delivered on time and the quality of work was excellent.',
        },
        {
            name:'Omotunde Funmilola',
            position: 'Founder of CreativeHub',
            text: "Ismael's technical skills and creativity made our project a success.Highly recommended for web development needs.",
    },
    ];

    return (
        <div className="bg-slate-100 min-h-screen">

            {/* Navigation */}

            <nav className="bg-slate-800 text-white p-4 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold">Ismael Dayo</a>

                    {/* Desktop Menu */}

                    <div className="hidden md:flex space-x-6">
                        <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
                        <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
                        <a href="#skills" className="hover:text-slate-300 transition-colors">Skills</a>
                        <a href="#experience" className="hover:text-slate-300 transition-colors">Experience</a>
                        <a href="#services" className="hover:text-slate-300 transition-colors">Services</a>
                        <a href="#testimonials" className="hover:text-slate-300 transition-colors">Testimonials</a>
                        <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
                    </div>

                    {/* Mobile Menu Button */}

                    <button
                        className="md:hidden text-white font-semibold hover:text-slate-300 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {/* {menuOpen ? 'Close' : 'Menu'} */}
                    </button>
                </div>
            </nav>

            {/* Slide-in Mobile Menu */}

            {menuOpen && (
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-slate-900 text-white p-6 transition-transform duration-300 z-40 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <nav className="space-y-6 mt-12">
                        <a href="#about" className="block hover:text-slate-300" onClick={() => setMenuOpen(false)}>About</a>
                        <a href="#projects" className="block hover:text-slate-300" onClick={() => setMenuOpen(false)}>Projects</a>
                        <a href="#skills" className="block hover:text-slate-300" onClick={() => setMenuOpen(false)}>Skills</a>
                        <a href="#experience" className="block hover:text-slate-300" onClick={() => setMenuOpen(false)}>Experience</a>
                        <a href="#services" className="block hover:text-slate-300" onClick={() => setMenuOpen(false)}>Services</a>
                        <a href="#testimonials" className="block hover:text-slate-300" onClick={() => setMenuOpen(false)}>Testimonials</a>
                        <a href="#contact" className="block hover:text-slate-300" onClick={() => setMenuOpen(false)}>Contact</a>
                    </nav>
                </div>
            )}

            {/* Optional Overlay */}

            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
                onClick={() => setMenuOpen(false)}
            />
            )}


            {/* Hero Section */}

            <section className="bg-slate-700 text-white py-20">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Hi, I'm {formData.name}
                        </h1>

                        <p className="text-xl mb-6">
                            Frontend Developer & UI/UX Designer
                        </p>

                        <p className="text-slate-300 mb-8 max-w-lg">
                            {formData.bio}
                        </p>

                        <div className="flex space-x-4">
                            <a href="#contact" className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-md transition-colors">
                                Contact Me
                            </a>

                            <a href="#projects" className="border border-white hover:bg-white hover:text-slate-800 text-white px-6 py-3 rounded-md transition-colors">
                                View Projects
                            </a>

                        </div>

                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <div className="bg-slate-600 w-64 h-64 rounded-full overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/dtbforfvb/image/upload/v1743313868/Dayo_a2c05m.jpg"
                                alt="Ismael Dayo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* About Section */}

            <section id="about" className="py-16 bg-slate-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">About Me</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        
                            <h3 className="text-2xl font-semibold mb-4 text-slate-800">My Background</h3>
                            <p className="text-slate-700 mb-6">
                                With over 5 years of experience in web development, I specialize in creating modern, responsive, and user-friendly websites and applications. My journey began with a passion for design and code, which evolved into expertise in frontend technologies.
                        </p>
                        
                            <p className="text-slate-700 mb-6">
                                I'm dedicated to writing clean, maintainable code and creating intuitive user experiences. My approach combines technical expertise with creative problem-solving to deliver outstanding digital solutions.
                        </p>
                        
                            <div className="flex flex-wrap gap-4 mb-6">
                                <div className="flex items-center text-slate-700">
                                    <Mail className="w-5 h-5 mr-2" />
                                    <span>{formData.email}</span>
                            </div>
                            
                                <div className="flex items-center text-slate-700">
                                    <Phone className="w-5 h-5 mr-2" />
                                    <span>{formData.phone}</span>
                            </div>
                            
                                <div className="flex items-center text-slate-700">
                                    <FileText className="w-5 h-5 mr-2" />
                                    <a href="#" className="hover:text-slate-500">Download Resume</a>
                            </div>
                            
                            </div>

                    
                            
                     
                        <div>
                            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-4 text-slate-800">Update Profile</h3>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-slate-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border text-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-slate-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border text-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-slate-700 mb-2">Phone</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border  text-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="bio" className="block text-slate-700 mb-2">Bio</label>
                                    <textarea
                                        id="bio"
                                        name="bio"
                                        value={formData.bio}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border  text-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-slate-700 hover:bg-slate-800 text-white py-2 px-4 rounded-md transition-colors"
                                >
                                    Update Profile
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}

            <section id="projects" className="py-16 bg-slate-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-slate-800">{project.title}</h3>
                                    <p className="text-slate-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        className="inline-block bg-slate-700 hover:bg-slate-800 text-white py-2 px-4 rounded-md transition-colors"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a href="#" className="inline-block border border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white py-3 px-8 rounded-md transition-colors">
                            View All Projects
                        </a>
                    </div>
                </div>
            </section>

            {/* Skills Section */}

            <section id="skills" className="py-16 bg-slate-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">My Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex justify-between mb-1">
                                    <span className="text-slate-800 font-medium">{skill.name}</span>
                                    <span className="text-slate-600">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-2.5">
                                    <div
                                        className="bg-slate-700 h-2.5 rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4 text-slate-800">Other Skills & Tools</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Git', 'GitHub', 'VS Code', 'Figma', 'Adobe XD', 'Responsive Design', 'RESTful APIs', 'GraphQL', 'Docker', 'CI/CD', 'Jest', 'React Testing Library'].map((item, index) => (
                                <span key={index} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-md">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}

            <section id="experience" className="py-16 bg-slate-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Experience & Education</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Work Experience */}

                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-slate-800 flex items-center">
                                <Briefcase className="mr-2 w-6 h-6" /> Work Experience
                            </h3>
                            <div className="space-y-8">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                        <h4 className="text-xl font-bold text-slate-800">{exp.position}</h4>
                                        <div className="flex items-center text-slate-600 mb-2">
                                            <span>{exp.company}</span>
                                            <span className="mx-2">•</span>
                                            <span className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {exp.duration}
                                            </span>
                                        </div>
                                        <p className="text-slate-700">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}

                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-slate-800 flex items-center">
                                <GraduationCap className="mr-2 w-6 h-6" /> Education
                            </h3>
                            <div className="space-y-8">
                                {education.map((edu, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                        <h4 className="text-xl font-bold text-slate-800">{edu.degree}</h4>
                                        <div className="flex items-center text-slate-600 mb-2">
                                            <span>{edu.institution}</span>
                                            <span className="mx-2">•</span>
                                            <span className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {edu.duration}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Certifications */}

                            <h3 className="text-2xl font-semibold mb-6 mt-12 text-slate-800 flex items-center">
                                <Award className="mr-2 w-6 h-6" /> Certifications
                            </h3>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <Award className="w-5 h-5 mr-2 text-slate-700 mt-1" />
                                        <div>
                                            <h4 className="font-medium text-slate-800">AWS Certified Developer</h4>
                                            <p className="text-slate-600">Amazon Web Services - 2023</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Award className="w-5 h-5 mr-2 text-slate-700 mt-1" />
                                        <div>
                                            <h4 className="font-medium text-slate-800">Professional Frontend Developer</h4>
                                            <p className="text-slate-600">Meta - 2022</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Award className="w-5 h-5 mr-2 text-slate-700 mt-1" />
                                        <div>
                                            <h4 className="font-medium text-slate-800">UI/UX Design Fundamentals</h4>
                                            <p className="text-slate-600">Google - 2021</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}

            <section id="services" className="py-16 bg-slate-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="bg-slate-700 text-white p-3 rounded-full inline-block mb-4">
                                    <Code className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                                <p className="text-slate-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}

            <section id="testimonials" className="py-16 bg-slate-700 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">What Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-slate-800 p-6 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <div className="bg-slate-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-slate-400 text-sm">{testimonial.position}</p>
                                    </div>
                                </div>
                                <p className="text-slate-300">"{testimonial.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}

            <section id="contact" className="py-16 bg-slate-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Get In Touch</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Mail className="w-6 h-6 mr-4 text-slate-700" />
                                    <div>
                                        <h4 className="font-medium text-slate-800">Email</h4>
                                        <p className="text-slate-600">{formData.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="w-6 h-6 mr-4 text-slate-700" />
                                    <div>
                                        <h4 className="font-medium text-slate-800">Phone</h4>
                                        <p className="text-slate-600">{formData.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Briefcase className="w-6 h-6 mr-4 text-slate-700" />
                                    <div>
                                        <h4 className="font-medium text-slate-800">Work Inquiries</h4>
                                        <p className="text-slate-600">projects@ismaeldayo.com</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold mb-6 mt-12 text-slate-800">Follow Me</h3>
                            {/* <div className="flex space-x-4">
                                <a href="#" className="bg-slate-700 hover:bg-slate-800 text-white p-3 rounded-full transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" className="bg-slate-700 hover:bg-slate-800 text-white p-3 rounded-full transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="bg-slate-700 hover:bg-slate-800 text-white p-3 rounded-full transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="bg-slate-700 hover:bg-slate-800 text-white p-3 rounded-full transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div> */}
                        </div>

                        <div>
                            <form className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold mb-6 text-slate-800">Send Message</h3>
                                <div className="mb-4">
                                    <label htmlFor="contactName" className="block text-slate-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="contactName"
                                        className="w-full px-4 py-2 border text-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="contactEmail" className="block text-slate-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="contactEmail"
                                        className="w-full px-4 py-2 border  text-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="contactSubject" className="block text-slate-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="contactSubject"
                                        className="w-full px-4 py-2 border  text-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="contactMessage" className="block text-slate-700 mb-2">Message</label>
                                    <textarea
                                        id="contactMessage"
                                        rows="5"
                                        className="w-full px-4 py-2 border text-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-slate-700 hover:bg-slate-800 text-white py-3 px-4 rounded-md transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}

            <footer className="bg-slate-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        {/* About */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Ismael Dayo</h3>
                            <p className="text-slate-300 mb-4">
                                Creating high-quality web solutions with modern technologies and a focus on user experience.
                            </p>
                        
                        </div>

                        {/* Quick Links */}
                        
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
                                </li>
                                <li>
                                    <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
                                </li>
                                <li>
                                    <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
                                </li>
                                <li>
                                    <a href="#experience" className="text-slate-300 hover:text-white transition-colors">Experience</a>
                                </li>
                                <li>
                                    <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}

                        <div>
                            <h3 className="text-xl font-bold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#web-development" className="text-slate-300 hover:text-white hover:underline transition-colors">
                                        Web Development
                                    </a>
                                </li>
                                <li>
                                    <a href="#ui-ux-design" className="text-slate-300 hover:text-white hover:underline transition-colors">
                                        UI/UX Design
                                    </a>
                                </li>
                                <li>
                                    <a href="#mobile-app" className="text-slate-300 hover:text-white hover:underline transition-colors">
                                        Mobile App Development
                                    </a>
                                </li>
                                <li>
                                    <a href="#consultation" className="text-slate-300 hover:text-white hover:underline transition-colors">
                                        Consultation
                                    </a>
                                </li>
                                <li>
                                    <a href="#seo" className="text-slate-300 hover:text-white hover:underline transition-colors">
                                        SEO Optimization
                                    </a>
                                </li>
                                <li>
                                    <a href="#ecommerce" className="text-slate-300 hover:text-white hover:underline transition-colors">
                                        E-commerce Solutions
                                    </a>
                                </li>
                            </ul>
                        </div>


                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-slate-300">
                                    <Mail className="w-5 h-5 mr-2" />
                                    <a href="mailto:ismaiheel4real2008@gmail.com" className="hover:underline">
                                        ismaiheel4real2008@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <Phone className="w-5 h-5 mr-2" />
                                    <a href="tel:+2348032159449" className="hover:underline">
                                        +234 (80)- 3215 - 9449
                                    </a>
                                </li>
                                <li className="flex items-center text-slate-300">
                                    <Briefcase className="w-5 h-5 mr-2" />
                                    <a href="mailto:projects@ismaiheel4real2008.com" className="hover:underline">
                                        projects@ismaiheel4real2008.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="border-t border-slate-700 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-slate-300 mb-4 md:mb-0">
                                © {new Date().getFullYear()} Ismael Dayo. All rights reserved.
                            </p>
                            <div>
                                <ul className="flex space-x-6">
                                    <li>
                                        <a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-slate-300 hover:text-white transition-colors">Sitemap</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                            </footer>
                        </div>
                );
            }