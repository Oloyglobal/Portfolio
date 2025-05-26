

import React from 'react';

const Skills = () => {
 
     
    const skillCategories = [
        {
            id: 1,
            category: "Frontend Development",
            skills: [
                { name: "HTML5", proficiency: 95 },
                { name: "CSS3/SCSS", proficiency: 90 },
                { name: "JavaScript", proficiency: 92 },
                { name: "TypeScript", proficiency: 85 },
                { name: "React.js", proficiency: 90 },
                { name: "Next.js", proficiency: 88 },
                { name: "Vue.js", proficiency: 75 },
                { name: "Tailwind CSS", proficiency: 85 },
                { name: "Bootstrap", proficiency: 90 },
                { name: "Responsive Design", proficiency: 95 },
            ]
        },
        {
            id: 2,
            category: "Backend Development",
            skills: [
                { name: "Node.js", proficiency: 88 },
                { name: "Express.js", proficiency: 85 },
                { name: "Python", proficiency: 80 },
                { name: "Django", proficiency: 75 },
                { name: "PHP", proficiency: 70 },
                { name: "Laravel", proficiency: 65 },
                { name: "GraphQL", proficiency: 75 },
                { name: "RESTful APIs", proficiency: 90 },
            ]
        },
        {
            id: 3,
            category: "Database Management",
            skills: [
                { name: "MongoDB", proficiency: 85 },
                { name: "MySQL", proficiency: 82 },
                { name: "PostgreSQL", proficiency: 78 },
                { name: "Firebase", proficiency: 80 },
                { name: "Redis", proficiency: 70 },
            ]
        },
        {
            id: 4,
            category: "DevOps & Tools",
            skills: [
                { name: "Git/GitHub", proficiency: 90 },
                { name: "Docker", proficiency: 80 },
                { name: "AWS", proficiency: 75 },
                { name: "CI/CD", proficiency: 82 },
                { name: "Webpack", proficiency: 85 },
                { name: "Nginx", proficiency: 70 },
            ]
        },
        {
            id: 5,
            category: "UI/UX & Design",
            skills: [
                { name: "Figma", proficiency: 80 },
                { name: "Adobe XD", proficiency: 75 },
                { name: "Sketch", proficiency: 70 },
                { name: "Wireframing", proficiency: 85 },
                { name: "Prototyping", proficiency: 82 },
                { name: "User Research", proficiency: 75 },
            ]
        },
        {
            id: 6,
            category: "Soft Skills",
            skills: [
                { name: "Project Management", proficiency: 85 },
                { name: "Team Leadership", proficiency: 80 },
                { name: "Communication", proficiency: 90 },
                { name: "Problem Solving", proficiency: 92 },
                { name: "Time Management", proficiency: 85 },
                { name: "Agile/Scrum", proficiency: 88 },
            ]
        }
    ];


    const getColorClass = (proficiency) => {
        if (proficiency >= 90) return "bg-slate-700";
        if (proficiency >= 80) return "bg-slate-600";
        if (proficiency >= 70) return "bg-slate-500";
        return "bg-slate-400";
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-blue-800 mb-2">Technical Skills</h1>
                <p className="text-slate-600 mb-12">
                    My proficiency across various technologies, tools, and methodologies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {skillCategories.map((category) => (
                        <div key={category.id} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-amber-900 mb-6 pb-2 border-b border-slate-200">
                                {category.category}
                            </h2>

                            <div className="space-y-5">
                                {category.skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-blue-600">{skill.name}</span>
                                            <span className="text-slate-500 text-sm">{skill.proficiency}%</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${getColorClass(skill.proficiency)}`}
                                                style={{ width: `${skill.proficiency}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Languages</h2>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-4 rounded-lg bg-slate-50">
                                <h3 className="font-medium text-gray-800 mb-2">English</h3>
                                <div className="flex space-x-1">
                                    <div className="w-full h-2 bg-slate-700 rounded-full"></div>
                                    <div className="w-full h-2 bg-blue-400 rounded-full"></div>
                                    <div className="w-full h-2 bg-slate-700 rounded-full"></div>
                                    <div className="w-full h-2 bg-slate-700 rounded-full"></div>
                                    <div className="w-full h-2 bg-slate-700 rounded-full"></div>
                                </div>
                                <p className="text-sm text-slate-500 mt-2">Native / Fluent</p>
                            </div>

                            <div className="p-4 rounded-lg bg-slate-50">
                                <h3 className="font-medium text-gray-800 mb-2">Spanish</h3>
                                <div className="flex space-x-1">
                                    <div className="w-full h-2 bg-slate-700 rounded-full"></div>
                                    <div className="w-full h-2 bg-amber-950 rounded-full"></div>
                                    <div className="w-full h-2 bg-slate-700 rounded-full"></div>
                                    <div className="w-full h-2 bg-slate-700 rounded-full"></div>
                                    <div className="w-full h-2 bg-slate-300 rounded-full"></div>
                                </div>
                                <p className="text-sm text-slate-500 mt-2">Advanced</p>
                            </div>

                            <div className="p-4 rounded-lg bg-slate-50">
                                <h3 className="font-medium text-gray-800 mb-2">French</h3>
                                <div className="flex space-x-1">
                                    <div className="w-full h-2 bg-slate-700 rounded-full"></div>
                                    <div className="w-full h-2 bg-rose-400   rounded-full"></div>
                                    <div className="w-full h-2 bg-slate-700 rounded-full"></div>
                                    <div className="w-full h-2 bg-slate-300 rounded-full"></div>
                                    <div className="w-full h-2 bg-slate-300 rounded-full"></div>
                                </div>
                                <p className="text-sm text-slate-500 mt-2">Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Focus Areas</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-slate-700">
                            <h3 className="font-semibold text-gray-800 mb-3">AI Integration</h3>
                            <p className="text-gray-600">Exploring practical applications of AI in web applications, including chatbots, recommendation systems, and predictive analytics.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-slate-700">
                            <h3 className="font-semibold text-gray-800 mb-3">Web3 Technologies</h3>
                            <p className="text-gray-600">Delving into blockchain, smart contracts, and decentralized applications to understand the future landscape of web development.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-slate-700">
                            <h3 className="font-semibold text-gray-800 mb-3">Performance Optimization</h3>
                            <p className="text-gray-600">Mastering advanced techniques for web performance optimization, including code splitting, lazy loading, and server-side rendering.</p>
                        </div>
                    </div>
                </div>
                
                {/* Footer component would be included here in a real application */}
              
            </div>
        </div>
    );
}
export default Skills;