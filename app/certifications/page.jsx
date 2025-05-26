

import React from 'react';

const Certifications=()=>{
  
    const certifications = [
        {
            id: 1,
            title: "Full Stack Web Development",
            organization: "Udacity",
            date: "January 2023",
            description: "Comprehensive certification covering modern web development technologies including React, Node.js, Express, and MongoDB.",
            credentialId: "FSW-2023-01456"
        },
        {
            id: 2,
            title: "AWS Certified Solutions Architect",
            organization: "Amazon Web Services",
            date: "March 2022",
            description: "Professional level certification validating expertise in designing and deploying scalable systems on AWS infrastructure.",
            credentialId: "AWS-CSA-78932"
        },
        {
            id: 3,
            title: "Data Science Specialization",
            organization: "Coursera",
            date: "November 2021",
            description: "Specialization covering statistical analysis, machine learning, data visualization, and big data processing techniques.",
            credentialId: "DS-SPEC-11285"
        },
        {
            id: 4,
            title: "Professional Scrum Master I",
            organization: "Scrum.org",
            date: "July 2021",
            description: "Certification demonstrating understanding of Scrum framework and ability to apply Scrum in team environments.",
            credentialId: "PSM-I-98761"
        },
        {
            id: 5,
            title: "Google UX Design Professional Certificate",
            organization: "Google",
            date: "February 2021",
            description: "Comprehensive program covering all aspects of the UX design process including research, wireframing, prototyping, and testing.",
            credentialId: "GUXD-2021-3421"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Certifications</h1>
                <p className="text-slate-600 mb-12">Professional certifications and qualifications I've achieved throughout my career.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-slate-500 hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-semibold text-gray-800">{cert.title}</h2>
                            <div className="flex items-center justify-between mt-2 mb-4">
                                <span className="text-slate-600 font-medium">{cert.organization}</span>
                                <span className="text-gray-500 text-sm">{cert.date}</span>
                            </div>
                            <p className="text-gray-600 mb-4">{cert.description}</p>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                                <span className="text-sm text-slate-500">Credential ID:</span>
                                <span className="text-sm font-mono text-gray-700">{cert.credentialId}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <button className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors">
                        View Verification Links
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Certifications;