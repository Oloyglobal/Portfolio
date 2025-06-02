
'use client';

import React from 'react';

import { Code, FileText, User, Briefcase, GraduationCap, Award, Mail, Phone, } from 'lucide-react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "__barrel_optimize__?names=CartesianGrid,Legend,Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts";
;



// Download CV Section
const DownloadCVSection = () => {
    return (

        <section className="py-16 bg-slate-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Looking for More Information?</h2>
                <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                    Download my complete CV to get a comprehensive view of my experience, skills,
                    and qualifications. Feel free to contact me if you have any questions or opportunities to discuss.
                </p>
                <a
                    href="#"
                    className="inline-flex items-center bg-slate-700 text-white px-6 py-3 rounded-md hover:bg-slate-600 transition"
                >
                    <span className="mr-2">📄</span>
                    Download Full CV (PDF)
                </a>



            </div>
        </section>
    );
};

// Education Section
const EducationSection = () => {
    const education = [
        {
            degree: "Master of Science in Computer Science",
            institution: "Stanford University",
            duration: "2018 - 2020",
            description: "Specialized in Human-Computer Interaction and Machine Learning. .",
            courses: ["Advanced Algorithm Design", "Machine Learning", "Human-Computer Interaction", "Advanced Web Technologies"]
        },

        {
            degree: "Bachelor of ARTS History And Interntional Studties",
            institution: "Massachusetts Institute of Technology",
            duration: "2014 - 2018",
            description: "Graduated summa cum laude. Active member of the Programming Club and AI Research Group.",
            courses: ["Data Structures and Algorithms", "Operating Systems", "Database Systems", "Software Engineering Practices"]
        }

    ];


    const financialData = [
        { name: 'Jan', income: 4000, expenses: 2400, savings: 1600 },
        { name: 'Feb', income: 3500, expenses: 1398, savings: 2102 },
        { name: 'Mar', income: 5000, expenses: 3800, savings: 1200 },
        { name: 'Apr', income: 4500, expenses: 3000, savings: 1500 },
        { name: 'May', income: 6000, expenses: 3500, savings: 2500 },
        { name: 'Jun', income: 5500, expenses: 4000, savings: 1500 },
    ];

    return (
        <section className="py-16 bg-slate-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-slate-800">Education</h2>
                <div className="space-y-10">
                    {education.map((edu, index) => (
                        <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6">
                            <div className="md:w-1/4 mb-4 md:mb-0">
                                <span className="block text-gray-500 text-sm">{edu.duration}</span>
                                <h3 className="font-bold text-slate-800 text-xl">{edu.degree}</h3>
                                <h4 className="text-slate-600">{edu.institution}</h4>
                            </div>
                            <div className="md:w-3/4 md:pl-8 border-l border-gray-200">
                                <p className="text-slate-700 mb-4">{edu.description}</p>
                                <div>
                                    <h5 className="font-semibold text-slate-700 mb-2">Key Courses:</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.courses.map((course, i) => (
                                            <span key={i} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">{course}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// Certifications Section
const CertificationsSection = () => {
    const certifications = [
     
        {
            name: "Google Professional Cloud Developer",
            issuer: "Google Cloud",
            date: "May 2022",
            icon: "🏆"
        },
        {
            name: "MongoDB Certified Developer",
            issuer: "MongoDB University",
            date: "January 2022",
            icon: "🏆"
        },
        {
            name: "React Advanced Concepts Certification",
            issuer: "Meta",
            date: "March 2021",
            icon: "🏆"
        }
    ];

    return (
        <section className="py-16 bg-slate-800 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <div key={index} className="bg-slate-700 p-6 rounded-lg text-center">
                            <div className="text-4xl mb-4">{cert.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                            <p className="text-gray-300 mb-1">{cert.issuer}</p>
                            <span className="text-gray-400 text-sm">{cert.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Projects Section
const ProjectsSection = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            role: "Lead Developer",
            duration: "2022 - 2025",
            description: "Designed and developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented secure payment processing, inventory management, and analytics dashboard.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "AWS"]
        },
      
     
    ];

    return (
        <section className="py-16 bg-slate-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-slate-800">Featured Projects</h2>
                <div className="space-y-10">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                                    <p className="text-slate-600">{project.role}</p>
                                </div>
                                <span className="text-gray-500 mt-2 md:mt-0">{project.duration}</span>
                            </div>
                            <p className="text-slate-700 mb-4">{project.description}</p>
                            <div>
                                <h5 className="font-semibold text-slate-700 mb-2">Technologies Used:</h5>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const financeData = [
    { month: 'Jan', income: 5000, expenses: 3200, savings: 1800 },
    { month: 'Feb', income: 5200, expenses: 3500, savings: 1700 },
    { month: 'Mar', income: 4800, expenses: 3100, savings: 1700 },
    { month: 'Apr', income: 5300, expenses: 3300, savings: 2000 },
    { month: 'May', income: 5500, expenses: 3600, savings: 1900 },
    { month: 'Jun', income: 6000, expenses: 4000, savings: 2000 },
];


// Resume Page

const ResumePage = () => {
    return (
        <main className="min-h-screen bg-slate-50">

            {/* Hero Section */}

            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">My Resume</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A comprehensive overview of my professional journey, skills, and expertise in web development and software engineering.
                    </p>
                </div>


                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Oloyede Olaniyi</h1>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8">Full Stack Developer & Software Engineer
                    </p>

                    <div className="sm:flex gap-3 justify-center space-x-6 mb-10">
                        <a href="#contact" className="flex items-center text-blue-400 hover:text-blue-300">
                            <Mail size={20} className="mr-2" /> oloyedeolaniyi22@gmail.com
                        </a>

                        <a href="#contact" className="flex  sm:pt-0 pt-3 items-center text-blue-400 hover:text-blue-300">
                            <Phone size={20} className="mr-2" /> +234 (81) 4598 -7036
                        </a>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center">
                            <FileText size={20} className="mr-2" /> Download CV
                        </a>

                        <a href="#contact" className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white transition duration-300 flex items-center">
                            <Mail size={20} className="mr-2" /> Contact Me
                        </a>

                    </div>
                </div>
                {/* </section> */}

            </section>


            {/* Experience */}

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h2 className="sm:text-3xl text-2xl  text-slate-400 font-bold mb-8">Professional Experience</h2>

                <div className="space-y-12">
                    <div className="border-l-4 border-blue-600 pl-6 relative">
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                        <div className="mb-4">
                            <h3 className="text-2xl text-slate-300  font-bold">Senior Software Engineer</h3>
                            <div className="sm:flex items-center text-gray-600 mb-2">
                                <Briefcase size={16} className="mr-2" />
                                <span className="font-medium">TechCorp Solutions</span>
                                <span className="mx-2">•</span>
                                <span>Jan 2023 - Present</span>
                            </div>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Led a team of 5 developers in building a scalable e-commerce platform using React, Node.js, and MongoDB</li>
                            <li>Improved application performance by 40% through code optimization and implementing efficient caching strategies</li>
                            <li>Designed and implemented RESTful APIs with comprehensive documentation using Swagger</li>
                            <li>Established CI/CD pipelines using GitHub Actions, reducing deployment time by 60%</li>
                            <li>Collaborated with product teams to define feature requirements and technical specifications</li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-6 relative">
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                        <div className="mb-4">
                            <h3 className="text-2xl text-slate-400 font-bold">Full Stack Developer</h3>
                            <div className="sm:flex items-center text-gray-600 mb-2">
                                <Briefcase size={16} className="mr-2" />
                                <span className="font-medium">WebDev Innovations</span>
                                <span className="mx-2">•</span>
                                <span>Mar 2020 - Dec 2022</span>
                            </div>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Developed responsive web applications using React.js and Redux for state management</li>
                            <li>Built backend services with Node.js, Express, and PostgreSQL, following RESTful principles</li>
                            <li>Implemented authentication and authorization systems using JWT and OAuth2.0</li>
                            <li>Wrote comprehensive unit and integration tests, achieving 85% code coverage</li>
                            <li>Optimized database queries, resulting in a 30% improvement in application response time</li>
                        </ul>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-6 relative">
                        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                        <div className="mb-4">
                            <h3 className="text-2xl text-slate-400 font-bold">Junior Web Developer</h3>
                            <div className="sm:flex items-center text-gray-600 mb-2">
                                <Briefcase size={16} className="mr-2" />
                                <span className="font-medium">Digital Solutions Inc.</span>
                                <span className="mx-2">•</span>
                                <span>Jun 2018 - Feb 2020</span>
                            </div>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Created responsive websites using HTML5, CSS3, and JavaScript</li>
                            <li>Collaborated with designers to implement UI/UX designs with precision</li>
                            <li>Contributed to PHP-based CMS development and customization</li>
                            <li>Participated in code reviews and implemented feedback to improve code quality</li>
                            <li>Assisted in troubleshooting and resolving bugs in production environments</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Education */}

            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="sm:text-3xl text-2xl text-slate-400 font-bold mb-8">Education & Certifications</h2>

                <div className="space-y-10">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="col-span-3 md:col-span-1">
                            <div className="flex items-center">
                                <GraduationCap size={24} className="text-blue-600 mr-3" />
                                <h3 className="text-xl text-slate-400 font-bold">Education</h3>
                            </div>
                        </div>
                       
                            <div>
                                <h4 className="text-lg text-slate-400 font-bold">Bachelor of History And International Studies</h4>
                                <p className="text-gray-600">Adekunle Ajasin Univerty | 2015 - 2019</p>
                                <p className="mt-2 text-gray-700">
                                    Core curriculum included data structures, algorithms, database systems, and web development. Completed capstone project on building scalable web applications.
                                </p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="col-span-3 md:col-span-1">
                            <div className="flex items-center">
                                <Award size={24} className="text-blue-600 mr-3" />
                                <h3 className="text-xl text-slate-400 font-bold">Certifications</h3>
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-2 space-y-6">
                            <div>
                                <h4 className="text-lg text-slate-300 font-semibold">AWS Certified Solutions Architect</h4>
                                <p className="text-gray-600">Amazon Web Development | 2023</p>
                            </div>
                            <div>
                                <h4 className="text-lg text-slate-300 font-semibold">Professional React.js Master (PSM I)</h4>
                                <p className="text-gray-600">React.js / Next.js | 2022</p>
                            </div>
                            <div>
                                <h4 className="text-lg text-slate-300 font-semibold">Next.js Certified Developer</h4>
                                <p className="text-gray-600">Classic University | 2024</p>
                            </div>
                            <div>
                                <h4 className="text-lg text-slate-300 font-semibold">Full Stack Web Development(PHP)</h4>
                                <p className="text-gray-600">Code Academy | 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            



            {/* Skills */}


            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl text-slate-400 font-bold mb-8">Technical Skills & Expertise</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>

                        <div>
                            <h3 className="text-xl text-slate-400 font-semibold mb-4 flex items-center">
                                <Code size={20} className="text-slate-600 mr-2" />Programming Languages
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex text-slate-700 justify-between mb-1">
                                        <span className="font-medium">JavaScript</span>
                                        <span>95%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex text-slate-700 justify-between mb-1">
                                        <span className="font-medium">TypeScript</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex text-slate-700 justify-between mb-1">
                                        <span className="font-medium">Python</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex text-slate-700 justify-between mb-1">
                                        <span className="font-medium">PHP</span>
                                        <span>75%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex text-slate-700 justify-between mb-1">
                                        <span className="font-medium">Java</span>
                                        <span>70%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <h3 className="text-xl text-slate-400 font-semibold mb-4 flex items-center">
                            <Code size={20} className="text-slate-600 mr-2" /> Front-End Development
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">React.js / Redux</span>
                                    <span>95%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">HTML5 / CSS3 / Sass</span>
                                    <span>90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">JavaScript (ES6+)</span>
                                    <span>90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">TypeScript</span>
                                    <span>85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">Vue.js</span>
                                    <span>75%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-xl text-slate-400 font-semibold mb-4 flex items-center">
                            <Code size={20} className="text-slate-600 mr-2" />Tools & Technologies
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">Git</span>
                                    <span>95%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">Docker</span>
                                    <span>85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">AWS</span>
                                    <span>80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">CI/CD</span>
                                    <span>85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">Jest/Testing</span>
                                    <span>80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-xl text-slate-400 font-semibold mb-4 flex items-center">
                            <Code size={20} className="text-slate-600 mr-2" /> Back-End Development
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">Node.js / Express</span>
                                    <span>90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">MongoDB</span>
                                    <span>85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">PostgreSQL / MySQL</span>
                                    <span>80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">GraphQL</span>
                                    <span>75%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">Python / Django</span>
                                    <span>70%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl text-slate-400 font-semibold mb-4 flex items-center">
                            <Code size={20} className="text-slate-600 mr-2" /> DevOps & Tools
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">Git / GitHub</span>
                                    <span>95%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">Docker / Kubernetes</span>
                                    <span>80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">AWS / Cloud Services</span>
                                    <span>85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex text-slate-700 justify-between mb-1">
                                    <span className="font-medium">CI/CD Pipelines</span>
                                    <span>80%</span>
                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-slate-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl text-slate-400 font-semibold mb-4 flex items-center">
                            <Code size={20} className="text-slate-600 mr-2" /> Additional Skills
                        </h3>

                        <div className="grid grid-cols-2 text-slate-700 gap-4">
                            <div className="bg-gray-200 rounded-lg p-3 text-center">
                                <span className="font-medium">Agile / Scrum</span>
                            </div>

                            <div className="bg-gray-200 rounded-lg p-3 text-center">
                                <span className="font-medium">RESTful APIs</span>
                            </div>

                            <div className="bg-gray-200 rounded-lg p-3 text-center">
                                <span className="font-medium">TDD / Jest</span>
                            </div>

                            <div className="bg-gray-200 rounded-lg p-3 text-center">
                                <span className="font-medium">UI/UX Design</span>
                            </div>

                            <div className="bg-gray-200 rounded-lg p-3 text-center">
                                <span className="font-medium">Webpack</span>
                            </div>

                            <div className="bg-gray-200 rounded-lg p-3 text-center">
                                <span className="font-medium">Next.js</span>
                            </div>

                            <div className="bg-gray-200 rounded-lg p-3 text-center">
                                <span className="font-medium">Firebase</span>
                            </div>

                            <div className="bg-gray-200 rounded-lg p-3 text-center">
                                <span className="font-medium">Redux Toolkit</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-6xl mx-auto p-4">
                <div className="flex flex-col md:flex-row gap-6">

                    {/* Left sidebar */}

                    <div className="w-full md:w-1/3">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6 text-center border-b">
                                <div className="w-24 h-24 rounded-full bg-blue-300 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                                    <img
                                        src="https://res.cloudinary.com/dlb3doese/image/upload/v1748260754/WhatsApp_Image_2025-05-12_at_7.30.48_AM_sjkcqg.jpg"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="text-xl text-slate-400 font-bold">Oloyede Olaniyi</h2>
                                <p className="text-gray-600">Senior Software Engineer</p>
                                <div className="mt-4 flex justify-center space-x-3">

                                </div>
                            </div>
                            <div className="p-6">
                                <div className="mb-4 flex items-start gap-3">
                                    <Mail className="text-gray-400 mt-1" size={18} />
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="text-gray-700">oloyedeolaniyi22@gmail.com</p>
                                    </div>
                                </div>
                                <div className="mb-4 flex items-start gap-3">
                                    <Phone className="text-gray-400 mt-1" size={18} />
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="text-gray-700">+234 (81)- 4598 - 7036</p>
                                    </div>
                                </div>
                                <div className="mb-4 flex items-start gap-3">

                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="text-gray-700">123 University of Ibadaan, Ibadan Oyo State</p>
                                    </div>
                                </div>
                                <div className="mb-4 flex items-start gap-3">

                                    <div>
                                        <p className="text-sm text-gray-500">Last Updated</p>
                                        <p className="text-gray-700">May 10, 2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md mt-6 p-6">
                            <h3 className="text-lg text-slate-400 font-semibold mb-4">Resume Stats</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-600">Completeness</span>
                                        <span className="text-sm font-medium">85%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-600">ATS Compatibility</span>
                                        <span className="text-sm font-medium">92%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-600">Keyword Optimization</span>
                                        <span className="text-sm font-medium">78%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}

                    <div className="w-full md:w-2/3">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="border-b pb-4 mb-6">
                                <div className="flex text-slate-400 space-x-6">
                                    <button

                                        onClick={() => setActiveTab('overview')}
                                    >    <a href="#resume" className="hover:text-slate-700 transition">
                                            Overview
                                        </a>
                                    </button>
                                    <button

                                        onClick={() => setActiveTab('experience')}
                                    >  <a href="#experience" className="hover:text-slate-700 transition">
                                            Experience
                                        </a>

                                    </button>
                                    <button

                                        onClick={() => setActiveTab('education')}
                                    ><a href="#education" className="hover:text-slate-700 transition">
                                            Education
                                        </a>

                                    </button>
                                    <button

                                        onClick={() => setActiveTab('skills')}
                                    ><a href="#skills" className="hover:text-slate-700 transition">
                                            Skills
                                        </a>

                                    </button>
                                </div>
                            </div>

                            <div className=" max-w-7xl  mx-auto p-6">
                                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                                    <div className="h-52 bg-gray-300">
                                        <img
                                            src="https://res.cloudinary.com/dtbforfvb/image/upload/v1747155235/FInance_Resume_Deshboard.jpg_slmnb0.png"
                                            alt="Resume Finance Dashboard"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg text-slate-400 font-semibold mb-2">Resume Performance</h3>
                                        <p className="text-gray-600 mb-4">Track your resume performance across job applications</p>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded-lg border">
                                                <p className="text-gray-500 text-sm">Applications</p>

                                            </div>
                                            <div className="bg-white p-4 rounded-lg border">
                                                <p className="text-gray-500 text-sm">Interviews</p>

                                            </div>
                                            <div className="bg-white p-4 rounded-lg border">
                                                <p className="text-gray-500 text-sm">Response Rate</p>

                                            </div>
                                            <div className="bg-white p-4 rounded-lg border">
                                                <p className="text-gray-500 text-sm">Avg. Response Time</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className="mt-6">
                                    <h3 className="text-lg text-slate-400 font-semibold mb-4">Resume Versions</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <FileText className="text-blue-500" size={20} />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-slate-400">Software Engineer - General</p>
                                                    <p className="text-sm text-gray-500">Last modified: May 10, 2025</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                                    <FileText className="text-purple-500" size={20} />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-slate-400">Full Stack Developer - Fintech</p>
                                                    <p className="text-sm text-gray-500">Last modified: May 5, 2025</p>
                                                </div>
                                            </div></div>

                                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                                    <FileText className="text-green-500" size={20} />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-slate-400">Frontend Engineer - E-commerce</p>
                                                    <p className="text-sm text-gray-500">Last modified: Apr 28, 2025</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="space-y-6">
                                <div className="border-b pb-6">
                                    <div className="flex justify-between mb-2">
                                        <h3 className="font-semibold text-slate-400">Senior Software Engineer</h3>
                                        <div className="flex items-center gap-1 text-gray-500">

                                            <span className="text-sm">2022 - Present</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-2">TechCorp Inc.</p>
                                    <p className="text-gray-700">Led development of microservices architecture, improving system reliability by 40%. Mentored junior developers and implemented CI/CD pipelines.</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Node.js</span>
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">AWS</span>
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Docker</span>
                                    </div>
                                </div>

                                <div className="border-b pb-6">
                                    <div className="flex justify-between mb-2">
                                        <h3 className="font-semibold text-slate-400">Software Engineer</h3>
                                        <div className="flex items-center gap-1 text-gray-500">

                                            <span className="text-sm">2019 - 2022</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-2">InnoSoft Solutions</p>
                                    <p className="text-gray-700">Developed and maintained RESTful APIs for mobile applications. Reduced API response time by 30% through performance optimization.</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">JavaScript</span>
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Python</span>
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">MongoDB</span>
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Express</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <h3 className="font-semibold text-slate-400">Junior Developer</h3>
                                        <div className="flex items-center gap-1 text-gray-500">

                                            <span className="text-sm">2017 - 2019</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-2">CodeWorks LLC</p>
                                    <p className="text-gray-700">Built and maintained web applications for clients in finance and education sectors. Collaborated with design team to implement responsive UI.</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">HTML/CSS</span>
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">jQuery</span>
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">PHP</span>
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">MySQL</span>
                                    </div>
                                </div>
                            </div>


                            <div className="space-y-6">
                                <div className="border-b pb-6">
                                    <div className="flex justify-between mb-2">
                                        <h3 className="font-semibold text-slate-400">Master of Computer Science</h3>
                                        <div className="flex items-center gap-1 text-gray-500">

                                            <span className="text-sm">2016 - 2018</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-2">Obafemi Awolowo University</p>
                                    <p className="text-gray-700">Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.</p>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <h3 className="font-semibold text-slate-400">Bachelor of Science in Software Engineering</h3>
                                        <div className="flex items-center gap-1 text-gray-500">

                                            <span className="text-sm">2012 - 2016</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-2">University of Lagos, Lagos</p>
                                    <p className="text-gray-700">Dean's List all semesters. Capstone project: Distributed File System.</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-slate-400">Technical Skills</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <p className="mb-2 font-medium text-slate-400">Programming Languages</p>
                                        <div className="space-y-3">
                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-sm text-slate-600">JavaScript</span>
                                                    <span className="text-sm text-slate-600">Expert</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-slate-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-sm text-slate-600">Python</span>
                                                    <span className="text-sm text-slate-600">Advanced</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-slate-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-sm text-slate-600">Java</span>
                                                    <span className="text-sm text-slate-600">Intermediate</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-slate-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="mb-2 font-medium text-slate-400">Frameworks & Libraries</p>
                                        <div className="space-y-3">
                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-sm text-slate-600">React</span>
                                                    <span className="text-sm text-slate-600">Expert</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-slate-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-sm text-slate-600">Node.js</span>
                                                    <span className="text-sm text-slate-600">Advanced</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-slate-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-sm text-slate-600">Django</span>
                                                    <span className="text-sm text-slate-600">Intermediate</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-slate-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-lg text-slate-400 font-semibold mb-4">Soft Skills</h3>
                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700">Leadership</span>
                                    <span className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700">Problem Solving</span>
                                    <span className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700">Communication</span>
                                    <span className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700">Team Collaboration</span>
                                    <span className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700">Project Management</span>
                                    <span className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700">Agile Methodologies</span>
                                    <span className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700">Mentoring</span>
                                    <span className="bg-gray-100 px-3 py-2 rounded-lg text-gray-700">Time Management</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                            <h3 className="text-lg text-slate-400 font-semibold mb-4">Improvement Suggestions</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                    <div className="bg-yellow-100 p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Add more quantifiable achievements</p>
                                        <p className="text-gray-600 text-sm">Employers respond better to specific metrics and results.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="bg-blue-100 p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 8v4l3 3"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Update skills section with trending technologies</p>
                                        <p className="text-gray-600 text-sm">Consider adding TypeScript, GraphQL, and Kubernetes to stay current.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Create a version tailored for remote positions</p>
                                        <p className="text-gray-600 text-sm">Highlight experience with remote collaboration tools and async communication.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-gray-100 min-h-screen p-6">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}

                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Financial Dashboard</h1>
                        <p className="text-gray-600">Track your financial health and investment portfolio</p>
                    </header>

                    {/* Navigation Tabs */}

                    <div className="bg-white  rounded-lg mb-6 shadow-md">
                        <div className="flex border-b border-gray-200">
                            <button className='px-4 py-2 text-sm font-medium border-b-2 border-blue-500 text-gray-600 hover:text-blue-500'

                                onClick={() => setActiveTab('overview')}
                            >
                                Overview
                            </button>

                            <button className='px-4 py-2 text-sm font-medium border-b-2 border-blue-500 text-gray-600 hover:text-blue-500'

                                onClick={() => setActiveTab('investments')}
                            >
                                Investments
                            </button>

                            <button className='px-4 py-2 text-sm font-medium border-b-2 border-blue-500   hover:text-blue-500'

                                onClick={() => setActiveTab('budget')}
                            >
                                Budget
                            </button>

                            <button className='px-4 py-2 text-sm font-medium border-b-2 border-blue-500  text-gray-600 hover:text-blue-500'

                                onClick={() => setActiveTab('reports')}
                            >
                                Reports
                            </button>
                        </div>
                    </div>

                    {/* Stats Cards */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-500 font-medium">Total Balance</h3>
                                <div className="bg-green-300 p-2 rounded-full">

                                </div>
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-2xl text-slate-400 font-bold">$24,500</span>
                                <span className="text-green-500 ml-2 flex items-center text-sm">

                                </span>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-500 font-medium">Monthly Income</h3>
                                <div className="bg-blue-300 p-2 rounded-full">

                                </div>
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-2xl text-slate-400 font-bold">$6,000</span>
                                <span className="text-green-500 ml-2 flex items-center text-sm">

                                </span>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-500 font-medium">Monthly Expenses</h3>
                                <div className="bg-red-300 p-2 rounded-full">

                                </div>
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-2xl text-slate-400 font-bold">$3,500</span>
                                <span className="text-red-500 ml-2 flex items-center text-sm">

                                </span>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-500 font-medium">Savings Rate</h3>
                                <div className="bg-purple-300 p-2 rounded-full">

                                </div>
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-2xl text-slate-400 font-bold">41.7%</span>
                                <span className="text-green-500 ml-2 flex items-center text-sm">

                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Charts Section */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

                        {/* Income vs Expenses Chart */}

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-slate-400 text-lg">Income vs Expenses</h3>
                                <div className="flex items-center space-x-2">
                                    <button className="p-1 rounded hover:bg-gray-100">🔄</button>
                                    <button className="p-1 rounded hover:bg-gray-100">⚙️</button>
                                </div>
                            </div>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={financeData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} />
                                        <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>


                        {/* Savings Trend Chart */}

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-slate-400 text-lg">Savings Trend</h3>
                                <div className="flex items-center space-x-2">
                                    <button className="p-1 rounded hover:bg-gray-100">🔄</button>
                                    <button className="p-1 rounded hover:bg-gray-100">⚙️</button>
                                </div>
                            </div>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={financeData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line
                                            type="monotone"
                                            dataKey="savings"
                                            stroke="#3b82f6"
                                            strokeWidth={2}
                                            name="Monthly Savings"
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>


                        {/* Featured Card*/}
                        <div className="sm:max-w-4xl w-full mx-auto p-6">
                            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">

                                {/* Image Section */}
                                <div className="h-48 bg-gray-300">
                                    <img
                                        src="https://res.cloudinary.com/dtbforfvb/image/upload/v1747155235/FInance_Resume_Deshboard.jpg_slmnb0.png"
                                        alt="Finance Dashboard"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <h3 className="text-xl text-slate-400 font-bold mb-2">Financial Insights</h3>
                                    <p className="text-gray-600 mb-4">
                                        Gain valuable insights into your spending patterns and identify areas for potential savings.
                                    </p>

                                    {/* Action Buttons */}
                                    
                                    <div className="flex space-x-2 w-">
                                        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                                            View Details
                                        </button>
                                        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                                            Download Report
                                        </button>
                                        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">
                                            View in App
                                        </button>
                                        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">
                                            Export Data
                                            </button>

                                        <button className=" bg-gray-500 border border-gray-500 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">
                                            Share Report
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Resume Sections */}
                    {/* <ExperienceSection /> */}
                    {/* <SkillsSection /> */} 
                    <EducationSection />
                    <CertificationsSection />
                    <ProjectsSection />
                    <DownloadCVSection />
                </div>
                </div>
            </main>
    );
};
export default ResumePage;
