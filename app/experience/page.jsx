

import React from 'react';

const Experience=()=>{
    
    const experiences = [
        {
            id: 1,
            position: "Senior Frontend Developer",
            company: "TechVision Inc.",
            location: "San Francisco, CA",
            period: "June 2022 - Present",
            responsibilities: [
                "Lead a team of 5 frontend developers in designing and implementing responsive web applications",
                "Refactored legacy code to modern React standards, improving performance by 35%",
                "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 40%",
                "Collaborated with UX/UI team to create intuitive user interfaces and seamless user experiences",
                "Mentored junior developers through code reviews and pair programming sessions"
            ]
        },

        {
            id: 2,
            position: "Full Stack Developer",
            company: "Innovate Solutions",
            location: "Austin, TX",
            period: "March 2020 - May 2022",
            responsibilities: [
                "Developed full-stack web applications using React, Node.js, and MongoDB",
                "Created RESTful APIs consumed by mobile and web applications",
                "Optimized database queries, reducing response times by 60%",
                "Implemented unit and integration tests, achieving 90% code coverage",
                "Participated in Agile ceremonies and contributed to sprint planning"
            ]
        },

        {
            id: 3,
            position: "Junior Web Developer",
            company: "Digital Creations",
            location: "Remote",
            period: "January 2018 - February 2020",
            responsibilities: [
                "Built responsive websites using HTML, CSS, and JavaScript",
                "Created dynamic web components using jQuery and vanilla JavaScript",
                "Collaborated with designers to implement UI/UX mockups",
                "Maintained existing client websites and implemented new features",
                "Optimized website performance and SEO"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Professional Experience</h1>
                <p className="text-slate-600 mb-12">My career journey and professional roles throughout the years.</p>

                <div className="relative">

                    {/* Timeline line */}

                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-300"></div>

                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="mb-16 relative">
                            <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                {/* Timeline dot */}

                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-slate-600 border-4 border-slate-200"></div>

                                {/* Content */}
                                
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-slate-600">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h2 className="text-xl font-semibold text-gray-800">{exp.position}</h2>
                                                <h3 className="text-lg text-slate-700">{exp.company}</h3>
                                            </div>
                                            <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <p className="text-gray-500 mb-4">{exp.location}</p>

                                        <h4 className="font-medium text-gray-700 mb-2">Key Responsibilities:</h4>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-slate-500 mr-2">•</span>
                                                    <span className="text-gray-600">{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-slate-600">Interested in my full work history?</p>
                    <a href="/resume" className="inline-block mt-4 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors">
                        View Complete Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Experience;