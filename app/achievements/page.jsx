import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="bg-slate-900 text-gray-100 py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold hover:text-slate-300">Oloyede Olaniyi</Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="/portfolio" className="hover:text-slate-300 transition-colors">Portfolio</Link>
                    <Link href="/photography" className="hover:text-slate-300 transition-colors">Photography</Link>
                    <Link href="/achievements" className="hover:text-slate-300 transition-colors">Achievements</Link>
                    <Link href="/process" className="hover:text-slate-300 transition-colors">Process</Link>
                    <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
                </div>
                <div className="md:hidden">
                    <button className="text-gray-100">
                        <Image
                            src="https://res.cloudinary.com/dlb3doese/image/upload/v1747304597/pexels-darina-belonogova-7193591_m78var.jpg"
                            alt="Menu"
                            width={100}
                            height={100}
                            unoptimized={true}
                            priority
                        />
                    </button>
                </div>
            </div>
        </nav>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100">Oloyede Olaniyi</h3>
                        <p className="mb-4">Professional photographer and digital artist with a passion for capturing meaningful moments.</p>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com" className="text-gray-300 hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/images/instagram-icon.png"
                                    alt="Instagram"
                                    width={24}
                                    height={24}
                                    unoptimized={true}
                                />
                            </a>
                            <a href="https://twitter.com/ismaeldayo" className="text-gray-300 hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/images/twitter-icon.png"
                                    alt="Twitter"
                                    width={24}
                                    height={24}
                                    unoptimized={true}
                                />
                            </a>
                            <a href="https://linkedin.com/in/ismaeldayo" className="text-gray-300 hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/images/linkedin-icon.png"
                                    alt="LinkedIn"
                                    width={24}
                                    height={24}
                                    unoptimized={true}
                                />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/portfolio" className="hover:text-gray-100 transition-colors">Portfolio</Link></li>
                            <li><Link href="/photography" className="hover:text-gray-100 transition-colors">Photography</Link></li>
                            <li><Link href="/achievements" className="hover:text-gray-100 transition-colors">Achievements</Link></li>
                            <li><Link href="/process" className="hover:text-gray-100 transition-colors">My Process</Link></li>
                            <li><Link href="/blog" className="hover:text-gray-100 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services/portrait" className="hover:text-gray-100 transition-colors">Portrait Photography</Link></li>
                            <li><Link href="/services/commercial" className="hover:text-gray-100 transition-colors">Commercial Photography</Link></li>
                            <li><Link href="/services/editorial" className="hover:text-gray-100 transition-colors">Editorial Work</Link></li>
                            <li><Link href="/services/events" className="hover:text-gray-100 transition-colors">Event Coverage</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-100">Contact</h3>
                        <p className="mb-2">Lagos, Nigeria</p>
                        <p className="mb-2">ismaiheel4real2008@gmail.com</p>
                        <p className="mb-4">+234 800 123 4567</p>
                        <Link href="/contact" className="inline-block px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors">
                            Get in Touch
                        </Link>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Ismael Dayo Photography. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

// Award Card Component
const AwardCard = ({ year, title, organization, description, imageUrl }) => {
    return (
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full md:w-1/3 relative h-64">
                <Image
                    src={imageUrl}
                    alt={`${title} award`}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized={true}
                    priority
                />
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

// Testimonial Card Component
const TestimonialCard = ({ name, role, company, content, imageUrl }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                    <Image
                        src={imageUrl}
                        alt={`${name} testimonial`}
                        fill
                        className="rounded-full"
                        unoptimized={true}
                    />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800">{name}</h4>
                    <p className="text-sm text-slate-600">{role}, {company}</p>
                </div>
            </div>
            <p className="text-slate-700 italic">"{content}"</p>
        </div>
    );
};

// Publication Card Component
const PublicationCard = ({ title, publisher, date, imageUrl, link }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
            <div className="relative h-48">
                <Image
                    src={imageUrl}
                    alt={`${title} publication`}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized={true}
                />
            </div>
            <div className="p-4">
                <p className="text-sm text-slate-500 mb-1">{date}</p>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">{title}</h3>
                <p className="text-slate-600 mb-3">Published in {publisher}</p>
                <Link
                    href={link}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read Article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

// Main Achievements Component
const Achievements = () => {
    // Award data
    const awards = [
        {
            id: 1,
            year: "2024",
            title: "Excellence in Portrait Photography",
            organization: "International Photography Association",
            description: "Recognized for innovative approaches in portrait photography that capture authentic emotions and stories.",
            imageUrl: "/images/awards/award1.jpg"
        },
        {
            id: 2,
            year: "2023",
            title: "African Artist of the Year",
            organization: "Pan-African Arts Foundation",
            description: "Awarded for outstanding contribution to the representation of African culture through visual storytelling and photography.",
            imageUrl: "/images/awards/award2.jpg"
        },
        {
            id: 3,
            year: "2023",
            title: "Best Commercial Campaign",
            organization: "Lagos Photography Festival",
            description: "Won for the groundbreaking visual campaign created for Eco-Lagos Initiative, highlighting environmental sustainability.",
            imageUrl: "/images/awards/award3.jpg"
        },
        {
            id: 4,
            year: "2022",
            title: "Visual Storyteller Award",
            organization: "Global Digital Media Awards",
            description: "Recognized for the photo essay 'Lives in Transit' documenting the daily journeys of Lagos commuters.",
            imageUrl: "/images/awards/award4.jpg"
        }
    ];

    // Testimonial data
    const testimonials = [
        {
            id: 1,
            name: "Bello Abubakar",
            role: "Marketing Director",
            company: "TechCorp",
            content: "Ismael's photography transformed our product line presentation. His ability to capture the essence of our technology in a human-centered way has significantly improved our brand perception and customer engagement.",
            imageUrl: "/images/testimonials/client1.jpg"
        },
        {
            id: 2,
            name: "Amina Yusuff",
            role: "Creative Director",
            company: "Visionary Studios",
            content: "Working with Ismael was a revelation. His artistic vision and technical expertise brought our concepts to life in ways we couldn't have imagined. The photographs he delivered exceeded all expectations.",
            imageUrl: "/images/testimonials/client2.jpg"
        },
        {
            id: 3,
            name: "Dr. Folake Johnson",
            role: "Executive Director",
            company: "Lagos Heritage Foundation",
            content: "Ismael's work on our heritage preservation project was exceptional. He captured the soul of historical sites with remarkable sensitivity, helping us secure vital funding through his compelling visual narrative.",
            imageUrl: "/images/testimonials/client3.jpg"
        },
        {
            id: 4,
            name: "Tunde Williams",
            role: "Editor-in-Chief",
            company: "African Vogue",
            content: "I've worked with many photographers throughout my career, but Ismael stands apart. His unique perspective and unwavering commitment to authenticity have made him our go-to photographer for our most important features.",
            imageUrl: "/images/testimonials/client4.jpg"
        }
    ];

    // Publications data
    const publications = [
        {
            id: 1,
            title: "The Evolution of Modern African Photography",
            publisher: "International Arts Review",
            date: "March 2024",
            imageUrl: "/images/publications/publication1.jpg",
            link: "https://example.com/publication1"
        },
        {
            id: 2,
            title: "Capturing Cultural Identity Through the Lens",
            publisher: "African Photography Journal",
            date: "November 2023",
            imageUrl: "/images/publications/publication2.jpg",
            link: "https://example.com/publication2"
        },
        {
            id: 3,
            title: "Digital Techniques in Portrait Photography",
            publisher: "Modern Photographer",
            date: "July 2023",
            imageUrl: "/images/publications/publication3.jpg",
            link: "https://example.com/publication3"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-100">
            <Navbar />

            {/* Hero Section */}
            <div className="relative bg-slate-900 text-white py-20">
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/images/hero/achievements-bg.jpg"
                        alt="Achievements Background"
                        fill
                        style={{ objectFit: 'cover' }}
                        unoptimized={true}
                        priority
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Recognition & Achievements</h1>
                        <p className="text-xl text-gray-300 mb-8">A collection of milestones and acknowledgments throughout my photography journey.</p>
                        <Link href="/portfolio" className="inline-block px-6 py-3 bg-white text-slate-900 rounded-md hover:bg-gray-200 transition-colors font-medium">
                            View My Portfolio
                        </Link>
                    </div>
                </div>
            </div>

            {/* Awards Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">Awards & Recognition</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Honors received throughout my career for excellence in photography and visual storytelling.</p>
                    </div>

                    <div className="space-y-8 max-w-5xl mx-auto">
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
            </div>

            {/* Publications Section */}
            <div className="py-16 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">Featured Publications</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">My work and expertise featured in renowned photography journals and magazines.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {publications.map(publication => (
                            <PublicationCard
                                key={publication.id}
                                title={publication.title}
                                publisher={publication.publisher}
                                date={publication.date}
                                imageUrl={publication.imageUrl}
                                link={publication.link}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Client Testimonials */}
            <div className="bg-slate-800 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Client Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.slice(0, 2).map(testimonial => (
                            <TestimonialCard
                                key={testimonial.id}
                                name={testimonial.name}
                                role={testimonial.role}
                                company={testimonial.company}
                                content={testimonial.content}
                                imageUrl={testimonial.imageUrl}
                            />
                        ))}
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.slice(2, 4).map(testimonial => (
                            <TestimonialCard
                                key={testimonial.id}
                                name={testimonial.name}
                                role={testimonial.role}
                                company={testimonial.company}
                                content={testimonial.content}
                                imageUrl={testimonial.imageUrl}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/testimonials" className="inline-block px-6 py-3 bg-white text-slate-800 hover:bg-gray-200 rounded-md font-medium transition-colors">
                            Read More Testimonials
                        </Link>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-slate-100 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Work Together?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-8">Let's create something exceptional that could be your next award-winning project.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="px-6 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors font-medium">
                            Contact Me
                        </Link>
                        <Link href="/portfolio" className="px-6 py-3 bg-white border border-slate-300 text-slate-800 rounded-md hover:bg-slate-50 transition-colors font-medium">
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Achievements;