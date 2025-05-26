"use client";
import Link from 'next/link';
// Navbar component
const Navbar = () => {
    return (
        <nav className="bg-slate-900 text-gray-100 py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">Ismael Dayo</div>
                <div className="hidden md:flex space-x-6">
                    <Link href="/portfolio-new" className="hover:text-slate-300 transition-colors">Portfolio</Link>
                    <Link href="/photography" className="hover:text-slate-300 transition-colors">Photography</Link>
                    <Link href="/achievements" className="hover:text-slate-300 transition-colors">Achievements</Link>
                    <Link href="/portfolio-process" className="hover:text-slate-300 transition-colors">Process</Link>
                    <Link href="/blog-editor" className="hover:text-slate-300 transition-colors">Blog</Link>
                </div>
                <div className="md:hidden">
                    <button className="text-gray-100">
                        <img src="https://res.cloudinary.com/dtbforfvb/image/upload/v1747405481/menu_icon_jkzc3u.webp" alt="Menu" className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

// Footer component
const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100">Ismael Dayo</h3>
                        <p className="mb-4">
                            Professional photographer and digital artist with a passion for capturing meaningful moments.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/ismaeldayo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-gray-100"
                            >
                                <span className="sr-only">Instagram</span>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                                    alt="Instagram"
                                    className="h-6 w-6"
                                />
                            </a>

                            <a
                                href="https://twitter.com/ismaeldayo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-gray-100"
                            >
                                <span className="sr-only">Twitter</span>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                                    alt="Twitter"
                                    className="h-6 w-6"
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/ismaeldayo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-gray-100"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                    alt="LinkedIn"
                                    className="h-6 w-6"
                                />
                            </a>
                        </div>
                    </div>

                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100">Portfolio</h3>
                        <ul className="space-y-2">
                            <li><Link href="/photography" className="hover:text-gray-100 transition-colors">Photography</Link></li>
                            <li><Link href="/portfolio-process" className="hover:text-gray-100 transition-colors">Creative Process</Link></li>
                            <li><Link href="/portfolio-new" className="hover:text-gray-100 transition-colors">Featured Work</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100">Blog</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blog-editor#latest" className="hover:text-gray-100 transition-colors">
                                    Latest Articles
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-editor#tips" className="hover:text-gray-100 transition-colors">
                                    Photography Tips
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-editor#bts" className="hover:text-gray-100 transition-colors">
                                    Behind the Scenes
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100">Contact</h3>

                        <p className="mb-2">
                            Email: <a
                                href="mailto:ismaiheel4real2008@gmail.com"
                                className="text-blue-400 hover:text-blue-300 underline"
                            >
                                ismaiheel4real2008@gmail.com
                            </a>
                        </p>

                        <p className="mb-2">
                            Phone: <a
                                href="tel:+2348032159449"
                                className="text-blue-400 hover:text-blue-300 underline"
                            >
                                +234 (80) 3215-9449
                            </a>
                        </p>

                        <p>
                            Studio: <a
                                href="https://www.google.com/maps/place/Bodija,+Ibadan,+Nigeria"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline"
                            >
                                123 Creative Ave, Bodija Ibadan
                            </a>
                        </p>
                    </div>

                </div>

                <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Ismael Dayo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

// Award Card Component
const AwardCard = ({ year, title, organization, description, imageUrl }) => {
    return (
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full md:w-1/3">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 w-full md:w-2/3">
                <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-sm font-medium rounded-full mb-3">
                    {year}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm mb-4">Awarded by {organization}</p>
                <p className="text-slate-700">{description}</p>
            </div>
        </div>
    );
};

// Timeline Item Component
const TimelineItem = ({ year, title, description }) => {
    return (
        <div className="relative pl-8 pb-8 border-l border-slate-300">
            <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-slate-700"></div>
            <div className="mb-1 text-sm font-semibold text-slate-600">{year}</div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600">{description}</p>
        </div>
    );
};

export default function Achievements() {
    const awards = [
        {
            id: 1,
            year: "2024",
            title: "Excellence in Portrait Photography",
            organization: "International Photography Association",
            description: "Recognized for innovative approaches in portrait photography that capture authentic emotions and stories.",
            imageUrl: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747407198/elite-studio-nigeria-family-photography-3_cb9psb.jpg"
        },
        {
            id: 2,
            year: "2023",
            title: "Gold Award - Editorial Photography",
            organization: "National Photography Awards",
            description: "First place in the Editorial category for a photo series documenting social change in urban environments.",
            imageUrl: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747407331/International-Award-for-Young-PeopleNigeria-Ceremony-aka-Duke-of-Edinburgh-on-13012022-6_lukulg.jpg"
        },
        {
            id: 3,
            year: "2022",
            title: "Best Commercial Photography",
            organization: "Advertising Photography Guild",
            description: "Award for outstanding product photography campaign that resulted in significant brand recognition.",
            imageUrl: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747407443/Best_Commercial_Photography_x2ppbl.webp"
        },
        {
            id: 4,
            year: "2021",
            title: "Photography Innovation Prize",
            organization: "Digital Arts Foundation",
            description: "Recognition for pioneering new techniques in digital photography and post-processing.",
            imageUrl: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747407553/Digital_Arts_Foundation_telkq0.jpg"
        },
        {
            id: 5,
            year: "2023",
            title: "Photography R-VOLVE Impact Companies",
            organization: "R-VOLVE Impact Companies",
            description: "Certificate of Achievement R-VOLVE Impact Companies.",
            imageUrl: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747407796/R-VOLVE_Impact_Companies_rhsyju.jpg"
        },
        {
            id: 6,
            year: "2024",
            title: "Photography BEST Technologie Award",
            organization: "BEST Technologie",
            description: "Certificate of Completion BEST Technologies.",
            imageUrl: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747407958/BEST-Technologie_jr9kdh.jpg"
        },
        {
            id: 7,
            year: "2025",
            title: "Photography Mcpoint Award",
            organization: "Mcpoint Solution",
            description: "Certificate of Completion MCPOINT SOLUTIONS.",
            imageUrl: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747408042/Mcpoint-Solution_nmvyig.jpg"
        },

    ];

    const milestones = [
        {
            id: 1,
            year: "2024",
            title: "First Solo Exhibition",
            description: "Hosted my first solo exhibition 'Perspectives' at the Modern Art Gallery, featuring 45 original works."
        },
        {
            id: 2,
            year: "2023",
            title: "Published Photography Book",
            description: "Released 'Visual Stories', a collection of photographs and personal narratives exploring human connection."
        },
        {
            id: 3,
            year: "2022",
            title: "International Photography Tour",
            description: "Completed a 6-month photography tour across 12 countries, documenting diverse cultures and landscapes."
        },
        {
            id: 4,
            year: "2021",
            title: "Launched Photography Studio",
            description: "Established my professional photography studio with state-of-the-art equipment and editing facilities."
        },
        {
            id: 5,
            year: "2020",
            title: "First Major Client",
            description: "Secured first major commercial client, leading to a breakthrough in my professional career."
        }
    ];

    const publications = [
        {
            id: 1,
            title: "The Art of Visual Storytelling",
            publisher: "Photography Today Magazine",
            date: "March 2024",
            link: "#"
        },
        {
            id: 2,
            title: "Modern Techniques in Portrait Photography",
            publisher: "Digital Photography Journal",
            date: "November 2023",
            link: "#"
        },
        {
            id: 3,
            title: "Capturing Authentic Moments: A Photographer's Guide",
            publisher: "Creative Arts Publishing",
            date: "June 2023",
            link: "#"
        },
        {
            id: 4,
            title: "Light and Shadow: Essential Elements in Photography",
            publisher: "Visual Arts Quarterly",
            date: "January 2023",
            link: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-100">
            <Navbar />

            {/* Hero Section */}

            <div className="bg-slate-800 py-20 text-center text-white">
                <div className="container mx-auto px-6">
                    <h1 className="mb-4 text-4xl font-bold">Achievements & Recognition</h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-300">
                        A collection of awards, milestones, and publications throughout my professional journey.
                    </p>
                </div>
            </div>

            {/* Awards Section */}

            <div className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Awards & Honors</h2>
                <div className="space-y-8">
                    {awards.map(award => (
                        <AwardCard
                            key={award.id}
                            year={award.year}
                            title={award.title}
                            organization={award.organization}
                            description={award.description}
                            imageUrl={award.imageUrl}
                        />
                    ))}
                </div>
            </div>

            {/* Milestones Timeline */}

            <div className="bg-slate-200 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Career Milestones</h2>
                    <div className="max-w-3xl mx-auto mt-12">
                        {milestones.map(milestone => (
                            <TimelineItem
                                key={milestone.id}
                                year={milestone.year}
                                title={milestone.title}
                                description={milestone.description}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Publications */}
            <div className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Publications</h2>
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-slate-700 text-white">
                                    <th className="py-3 px-6 text-left">Title</th>
                                    <th className="py-3 px-6 text-left">Publisher</th>
                                    <th className="py-3 px-6 text-left">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {publications.map(publication => (
                                    <tr key={publication.id} className="hover:bg-slate-50">
                                        <td className="py-4 px-6">
                                            <a href={publication.link} className="text-slate-800 hover:text-slate-600 font-medium">
                                                {publication.title}
                                            </a>
                                        </td>
                                        <td className="py-4 px-6 text-slate-600">{publication.publisher}</td>
                                        <td className="py-4 px-6 text-slate-600">{publication.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Client Testimonials */}

            <div className="bg-slate-800 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Client Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <img src="https://res.cloudinary.com/dtbforfvb/image/upload/v1747406931/Client2_i2lhmr.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-bold text-slate-800">Adekunle Teslim</h4>
                                    <p className="text-sm text-slate-600">Marketing Director, TechCorp</p>
                                </div>
                            </div>
                            <p className="text-slate-700 italic">
                                "Ismael's photography transformed our product line presentation. His attention to detail and creative vision brought our brand to a whole new level. Highly recommended for any commercial photography needs."
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <img src="https://res.cloudinary.com/dtbforfvb/image/upload/v1747407054/Customer-Happiness-client_zmcrci.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-bold text-slate-800">Bello Aminah</h4>
                                    <p className="text-sm text-slate-600">Event Coordinator, GalaEvents</p>
                                </div>
                            </div>
                            <p className="text-slate-700 italic">
                                "Working with Ismael was a delight. He captured our corporate event with professionalism and artistic flair. The resulting photos perfectly encapsulated the energy and significance of the occasion."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}