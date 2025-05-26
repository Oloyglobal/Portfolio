

'use client';

import React from 'react';


const PortfoliosPage = () => {
    return (
        <>
            <div className="bg-slate-100 text-slate-800">

                {/* Header */}

                <header className="bg-white shadow" data-aos="fade-down-left">
                    <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                        <div className="text-2xl font-bold text-slate-900">
                            <a href="/">Oloyede Olaniyi</a>
                        </div>
                        <nav>
                            <ul className="flex space-x-6 text-slate-700 font-medium">
                                <li><a href="/" className="hover:text-slate-900">Home</a></li>
                                <li><a href="/portfolio" className="hover:text-slate-900">Portfolio</a></li>
                                <li><a href="/portfolio-process" className="hover:text-slate-900">Process</a></li>
                                <li><a href="/blog" className="hover:text-slate-900">Blog</a></li>
                                <li><a href="/resources" className="hover:text-slate-900">Resources</a></li>
                                <li><a href="/contact" className="hover:text-slate-900">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                {/* Main Content */}

                <main className="py-12">
                    <section id="portfolio-process">
                        <div className="max-w-7xl mx-auto px-4">
                            <h1 className="text-4xl font-bold mb-4">My Design Process</h1>
                            <p className="text-lg mb-10 text-slate-600">
                                I follow a structured yet flexible process that ensures every project delivers exceptional results. Below is a walkthrough of how I approach design challenges.
                            </p>

                            <div className="space-y-16">
                                {[
                                    {
                                        title: '1. Discovery & Research',
                                        content: `Every great project begins with understanding...`,
                                        img: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747271348/Discovery_Research_zgtygk.webp',
                                        alt: 'Discovery and Research Process',
                                    },
                                    {
                                        title: '2. Strategy & Planning',
                                        content: `With research insights in hand...`,
                                        img: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747271426/Strategy_Planning_gty6fb.jpg',
                                        alt: 'Strategy and Planning Process',
                                    },
                                    {
                                        title: '3. Ideation & Concept Development',
                                        content: `This is where creativity meets strategy...`,
                                        img: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747271609/Ideation_Concept_Development_tojrfw.png',
                                        alt: 'Ideation Process',
                                    },
                                    {
                                        title: '4. Design & Prototyping',
                                        content: `Taking the most promising concepts forward...`,
                                        img: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747271751/Design_Prototyping_pouxuz.jpg',
                                        alt: 'Design and Prototyping',
                                    },
                                    {
                                        title: '5. Testing & Refinement',
                                        content: `Designs are validated through user testing...`,
                                        img: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747271903/Testing_and_Refinement_owxjcz.jpg',
                                        alt: 'Testing and Refinement',
                                    },
                                    {
                                        title: '6. Implementation Support',
                                        content: `I collaborate closely with development teams...`,
                                        img: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747272041/Implementation-Support_ityydv.jpg',
                                        alt: 'Implementation Support',
                                    },
                                    {
                                        title: '7. Launch & Evaluation',
                                        content: `After launch, I help monitor performance...`,
                                        img: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1747272323/Launch_Evaluation2_ize5x8.jpg',
                                        alt: 'Launch and Evaluation',
                                    },
                                ].map((step, i) => (
                                    <div key={i} className="space-y-4">
                                        <h3 className="text-2xl font-semibold text-slate-800">{step.title}</h3>
                                        <p className="text-slate-600">{step.content}</p>
                                        <div className="overflow-hidden rounded-lg shadow-md">
                                            <img src={step.img} alt={step.alt} className="w-full h-auto object-cover" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <section id="recommendations" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Client Recommendations</h1>
                    <p className="text-gray-600 mb-10">
                        I'm fortunate to have worked with amazing clients across various industries. Here's what they have to say about our collaboration.
                    </p>

                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: "Ayoola Blessing",
                                title: "Marketing Director, TechFusion",
                                img: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747273656/Marketing-Director_hgyrtt.jpg",
                                alt: "Marketing Director, TechFusion",
                                content:
                                    "Working with Ismael was a game-changer for our brand. His thoughtful approach to design not only delivered stunning visuals but also significantly improved our user engagement metrics.",
                            },
                            {
                                name: " Aisha Aliyu",
                                title: "Founder, Elevate Startup",
                                img: " https://res.cloudinary.com/dtbforfvb/image/upload/v1747273760/Founder_Elevate_Startup_lmwhck.jpg",
                                alt: "Founder, Elevate Startup",
                                content:
                                    "As a startup founder, finding a designer who understands both aesthetics and business needs is crucial. Ismael exceeded all expectations.",
                            },
                            {
                                name: " Abdulrahman Ali",
                                title: "Product Manager, FinTech Solutions",
                                img: " https://res.cloudinary.com/dtbforfvb/image/upload/v1747273867/Fintech-1-1_i4tklo.jpg",
                                alt: "Product Manager, FinTech Solutions",
                                content:
                                    "Ismael's systematic approach to solving complex UX problems helped us reimagine our financial platform.",
                            },
                            {
                                name: " Fatima Yusuf",
                                title: "Creative Director, Design Agency",
                                img: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747273971/Creative_Director_Design_Agency_hd9e6l.jpg",
                                alt: "Creative Director, Design Agency",
                                content:
                                    "Ismael stands out for his strategic thinking and attention to detail. He doesn't just create beautiful designs; he creates meaningful experiences.",
                            },
                            {
                                name: " Mohammed Sani",
                                title: "CEO, Health & Wellness Brand",
                                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                                alt: "CEO, Health & Wellness Brand",
                                content:
                                    "Ismael's redesign of our e-commerce platform increased our conversion rate by 42%.",
                            },
                            {
                                name: " Aisha Mohammed",
                                title: "CTO, SaaS Platform",
                                img: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747274062/CEO_Health_Wellness_Brand_cwkyqn.avif",
                                alt: "CTO, SaaS Platform",
                                content:
                                    "He quickly grasped our technical requirements and translated them into an intuitive interface that our users love.",
                            },
                        ].map((rec, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={rec.img}
                                        alt={rec.name}
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/120x120?text=Profile";
                                        }}
                                    />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800">{rec.name}</h4>
                                        <p className="text-sm text-gray-500">{rec.title}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">{rec.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="resources" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Design Resources</h1>
                    <p className="text-gray-600 mb-10">
                        A curated collection of resources, tools, and articles to help you on your design journey. I regularly update this section with valuable content.
                    </p>

                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "UX Research Handbook",
                                desc: "A comprehensive guide to conducting effective user research, from planning to analysis.",
                                img: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                                link: "#",
                                linkLabel: "Download PDF",
                            },
                            {
                                title: "Design System Starter Kit",
                                desc: "Jump-start your design system with this template. Includes component libraries and documentation templates.",
                                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                                link: "#",
                                linkLabel: "Access Kit",
                            },
                            {
                                title: "Accessibility Checklist",
                                desc: "Ensure your designs are inclusive with this checklist covering WCAG guidelines and tips.",
                                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                                link: "#",
                                linkLabel: "View Checklist",
                            },
                            {
                                title: "UI Animation Principles",
                                desc: "Learn the fundamentals of effective interface animations.",
                                img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                                link: "#",
                                linkLabel: "Explore Guide",
                            },
                            {
                                title: "Color Theory for Digital Products",
                                desc: "A deep dive into applying color theory in interface design.",
                                img: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747342627/Color-Theory_-for-Digital-Products_yveba2.jpg",
                                link: "#",
                                linkLabel: "Read Article",
                            },
                            {
                                title: "Figma Component Templates",
                                desc: "A collection of customizable Figma components for mobile and desktop.",
                                img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                                link: "#",
                                linkLabel: "Download Templates",
                            },
                        ].map((res, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow overflow-hidden">
                                <img
                                    src={res.img}
                                    alt={res.title}
                                    className="w-full h-48 object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/400x240?text=Resource+Image";
                                    }}
                                />
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-gray-900">{res.title}</h3>
                                    <p className="text-gray-600 my-2">{res.desc}</p>
                                    <a href={res.link} className="text-indigo-600 hover:underline text-sm font-medium">
                                        {res.linkLabel}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section id="blog-detail" className="py-12">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="space-y-8">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Blog featured image"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Designing for Accessibility: Beyond Compliance</h1>

                    </div>
                </div>
            </section>

            <section id="blog-editor" className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Create New Blog Post</h1>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="blog-title" className="block text-sm font-medium text-gray-700">Post Title</label>
                            <input type="text" id="blog-title" placeholder="Enter an engaging title..." className="mt-1 text-slate-500 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>

                        <div>
                            <label htmlFor="blog-excerpt" className="block text-sm font-medium text-gray-700">Excerpt</label>
                            <textarea id="blog-excerpt" rows="3" placeholder="Write a brief summary..." className="mt-1 text-slate-500  w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>

                        <div>
                            <label htmlFor="featured-image" className="block text-sm font-medium text-gray-700">Featured Image</label>
                            <input type="file" id="featured-image" className="mt-1  text-slate-500  w-full text-sm" />
                            <div className="mt-2 text-gray-500 text-sm italic">Image preview will appear here</div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                            <div className="flex text-slate-500 gap-2 mb-2">
                                {["B", "I", "H2", "H3", "“”", "{}", "Link", "Image", "List"].map((btn, idx) => (
                                    <button type="button" key={idx} title={btn} className="bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded text-sm font-medium">
                                        {btn}
                                    </button>
                                ))}
                            </div>
                            <textarea id="blog-content" rows="15" placeholder="Write your blog post content here..." className=" text-slate-500  w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>

                        <div>
                            <label htmlFor="blog-categories" className="block text-sm font-medium text-gray-700">Categories</label>
                            <select id="blog-categories" multiple className="mt-1 text-slate-500  w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="design">Design</option>
                                <option value="ux">User Experience</option>
                                <option value="ui">User Interface</option>
                                <option value="research">Research</option>
                                <option value="strategy">Strategy</option>
                                <option value="tools">Tools & Resources</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="blog-tags" className="block text-sm font-medium text-gray-700">Tags</label>
                            <input type="text" id="blog-tags" placeholder="Enter tags separated by commas..." className="mt-1 text-slate-500 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
                            <div className="flex gap-2 mt-2 flex-wrap">
                                {["Design Systems", "Figma", "Accessibility"].map((tag, idx) => (
                                    <div key={idx} className="bg-slate-300 text-slate-800 px-2 py-1 rounded flex items-center">
                                        <span className="mr-2 text-sm">{tag}</span>
                                        <button type="button" className="text-xs font-bold">&times;</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button type="submit" className="bg-slate-600 text-white px-4 py-2 rounded shadow hover:bg-gray-400">Publish Post</button>
                            <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-400">Save Draft</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

const ExtraSections = () => {
    return (
        <>
            <section id="blog-editor-update" className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Blog Post</h1>

                    <form className="space-y-6">

                        {/* Post Title */}

                        <div>
                            <label htmlFor="blog-title-update" className="block text-sm font-medium text-gray-700">Post Title</label>
                            <input type="text" id="blog-title-update" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" defaultValue="Designing for Accessibility: Beyond Compliance" />
                        </div>

                        {/* Excerpt */}

                        <div>
                            <label htmlFor="blog-excerpt-update" className="block text-sm font-medium text-gray-700">Excerpt</label>
                            <textarea id="blog-excerpt-update" rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500">
                                Learn how to create inclusive digital experiences that serve all users, regardless of ability. This article explores practical strategies that go beyond mere compliance.
                            </textarea>
                        </div>

                        {/* Featured Image */}

                        <div>
                            <label htmlFor="featured-image-update" className="block text-sm font-medium text-gray-700">Featured Image</label>
                            <input type="file" id="featured-image-update" className="mt-1 block w-full text-sm" />
                            <div className="mt-4">
                                <img src="/api/placeholder/800/400" alt="Current featured image" className="rounded shadow-md w-full max-h-64 object-cover" />
                            </div>
                        </div>

                        {/* Content with Toolbar */}

                        <div>
                            <label htmlFor="blog-content-update" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                            <div className="flex gap-2 mb-2 flex-wrap">
                                {["B", "I", "H2", "H3", "“”", "{ }", "Link", "Image", "List"].map((tool, idx) => (
                                    <button key={idx} type="button" title={tool} className="bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded text-sm font-medium">
                                        {tool}
                                    </button>
                                ))}
                            </div>
                            <textarea id="blog-content-update" rows="15" className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500">
                                # Designing for Accessibility: Beyond Compliance

                                In today's digital landscape, creating accessible experiences isn't just about checking boxes for compliance—it's about embracing inclusive design principles that benefit all users.

                                ## Why Accessibility Matters

                                Accessibility isn't just for users with permanent disabilities. Consider these scenarios:

                                - A person with a broken arm temporarily unable to use a mouse
                                - Someone in a noisy environment who can't hear audio content
                                - A user with poor internet connection needing low-bandwidth alternatives

                                By designing for these edge cases, we create better experiences for everyone.

                                ## Key Principles to Follow

                                ### 1. Keyboard Navigation

                                Ensure all interactive elements are navigable and operable using only a keyboard. This benefits users with motor impairments, power users who prefer keyboard shortcuts, and those using alternative input devices.

                                ### 2. Semantic HTML

                                Using the correct HTML elements for their intended purpose provides built-in accessibility benefits. A button element is inherently more accessible than a div styled to look like a button.

                                ### 3. Color Contrast

                                Sufficient contrast between text and background colors ensures readability for users with low vision or color blindness, as well as anyone using their device in bright sunlight.

                                ### 4. Alternative Text

                                Descriptive alt text for images serves users with visual impairments and also helps when images fail to load due to connectivity issues.

                                ## Moving Beyond Compliance

                                While WCAG guidelines provide an excellent foundation, truly inclusive design requires empathy and user testing with diverse participants. Consider incorporating:

                                - Regular accessibility audits
                                - Testing with assistive technologies
                                - Including users with disabilities in your research

                                By embracing accessibility as a core design principle rather than a legal requirement, we create better experiences for all users while opening our products to wider audiences.
                            </textarea>
                        </div>

                        {/* Categories */}
                        <div>
                            <label htmlFor="blog-categories-update" className="block text-sm font-medium text-gray-700">Categories</label>
                            <select id="blog-categories-update" multiple className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="design" selected>Design</option>
                                <option value="ux" selected>User Experience</option>
                                <option value="ui">User Interface</option>
                                <option value="research">Research</option>
                                <option value="strategy">Strategy</option>
                                <option value="tools">Tools & Resources</option>
                            </select>
                        </div>

                        {/* Tags */}

                        <div>
                            <label htmlFor="blog-tags-update" className="block text-sm font-medium text-gray-700">Tags</label>
                            <input type="text" id="blog-tags-update" placeholder="Enter tags separated by commas..." className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" />
                            <div className="flex flex-wrap gap-2 mt-3">
                                {["Accessibility", "Inclusive Design", "WCAG", "User Testing"].map((tag, idx) => (
                                    <div key={idx} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded flex items-center">
                                        <span className="mr-2 text-sm">{tag}</span>
                                        <button type="button" className="text-xs font-bold hover:text-red-500">&times;</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Status */}

                        <div>
                            <label htmlFor="publish-status" className="block text-sm font-medium text-gray-700">Status</label>
                            <select id="publish-status" className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="published" selected>Published</option>
                                <option value="draft">Draft</option>
                                <option value="archived">Archived</option>
                            </select>
                        </div>

                        {/* Published Date */}
                        <div>
                            <label htmlFor="published-date" className="block text-sm font-medium text-gray-700">Published Date</label>
                            <input type="date" id="published-date" className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500" defaultValue="2025-04-15" />
                        </div>

                        {/* Buttons */}

                        <div className="flex gap-4">
                            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700">Update Post</button>
                            <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-400">Preview Changes</button>
                        </div>
                    </form>
                </div>
            </section>

            <section id="blog-detail" class="py-12">
                <div class="max-w-5xl mx-auto px-4">
                    <div class="space-y-8">
                        <div>
                            <img src="/api/placeholder/800/400" alt="Blog featured image" className="w-full h-auto rounded-lg" />
                        </div>

                        <h1 class="text-3xl md:text-4xl font-bold text-gray-900">Designing for Accessibility: Beyond Compliance</h1>

                        <div class="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span>April 15, 2025</span>
                            <span>Design, User Experience</span>
                            <span>5 min read</span>
                        </div>

                        <div class="prose max-w-none">
                            <p>In today's digital landscape, creating accessible experiences isn't just about checking boxes for compliance—it's about embracing inclusive design principles that benefit all users.</p>

                            <h2>Why Accessibility Matters</h2>
                            <p>Accessibility isn't just for users with permanent disabilities. Consider these scenarios:</p>
                            <ul>
                                <li>A person with a broken arm temporarily unable to use a mouse</li>
                                <li>Someone in a noisy environment who can't hear audio content</li>
                                <li>A user with poor internet connection needing low-bandwidth alternatives</li>
                            </ul>
                            <p>By designing for these edge cases, we create better experiences for everyone.</p>

                            <h2>Key Principles to Follow</h2>

                            <h3>1. Keyboard Navigation</h3>
                            <p>Ensure all interactive elements are navigable and operable using only a keyboard. This benefits users with motor impairments, power users who prefer keyboard shortcuts, and those using alternative input devices.</p>

                            <h3>2. Semantic HTML</h3>
                            <p>Using the correct HTML elements for their intended purpose provides built-in accessibility benefits. A button element is inherently more accessible than a div styled to look like a button.</p>

                            <h3>3. Color Contrast</h3>
                            <p>Sufficient contrast between text and background colors ensures readability for users with low vision or color blindness, as well as anyone using their device in bright sunlight.</p>

                            <h3>4. Alternative Text</h3>
                            <p>Descriptive alt text for images serves users with visual impairments and also helps when images fail to load due to connectivity issues.</p>

                            <h2>Moving Beyond Compliance</h2>
                            <p>While WCAG guidelines provide an excellent foundation, truly inclusive design requires empathy and user testing with diverse participants. Consider incorporating:</p>
                            <ul>
                                <li>Regular accessibility audits</li>
                                <li>Testing with assistive technologies</li>
                                <li>Including users with disabilities in your research</li>
                            </ul>
                            <p>By embracing accessibility as a core design principle rather than a legal requirement, we create better experiences for all users while opening our products to wider audiences.</p>
                        </div>

                        <div class="border-t pt-8">
                            <div class="flex items-center space-x-4">
                                <img src="/api/placeholder/120/120" alt="Ismael Dayo" className="w-16 h-16 rounded-full object-cover" />
                                <div>
                                    <h4 class="text-lg font-semibold">Ismael Dayo</h4>
                                    <p class="text-sm text-gray-600">UI/UX Designer & Design Strategist</p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-12">
                            <h3 class="text-2xl font-semibold mb-6">Related Articles</h3>
                            <div class="grid md:grid-cols-3 gap-6">
                                <div class="border rounded-lg overflow-hidden">
                                    <img src="/api/placeholder/300/200" alt="Related post image" className="w-full h-auto" />
                                    <div class="p-4">
                                        <h4 class="text-lg font-semibold">The Psychology of Color in UI Design</h4>
                                        <p class="text-sm text-gray-600">Mar 27, 2025 • 4 min read</p>
                                    </div>
                                </div>
                                <div class="border rounded-lg overflow-hidden">
                                    <img src="/api/placeholder/300/200" alt="Related post image" className="w-full h-auto" />
                                    <div className="p-4">
                                        <h4 className="text-lg font-semibold">User Testing on a Budget</h4>
                                        <p className="text-sm text-gray-600">Feb 12, 2025 • 6 min read</p>
                                    </div>
                                </div>
                                <div className="border rounded-lg overflow-hidden">
                                    <img src="/api/placeholder/300/200" alt="Related post image" className="w-full h-auto" />
                                    <div className="p-4">
                                        <h4 className="text-lg font-semibold">Designing for Global Audiences</h4>
                                        <p className="text-sm text-gray-600">Jan 5, 2025 • 5 min read</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio-edit" className="py-12 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-8">Edit Portfolio Project</h1>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="project-title" className="block text-sm font-medium text-gray-700">Project Title</label>
                            <input type="text" id="project-title" defaultValue="FinTech App Redesign" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="project-client" className="block text-sm font-medium text-gray-700">Client</label>
                                <input type="text" id="project-client" defaultValue="GlobalFinance Solutions" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="project-year" className="block text-sm font-medium text-gray-700">Year</label>
                                <input type="text" id="project-year" defaultValue="2024" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="project-duration" className="block text-sm font-medium text-gray-700">Duration</label>
                                <input type="text" id="project-duration" defaultValue="3 months" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="project-cover" className="block text-sm font-medium text-gray-700">Cover Image</label>
                            <input type="file" id="project-cover" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200" />
                            <div className="mt-4">
                                <img src="/api/placeholder/800/450" alt="Project cover image" className="w-full h-auto rounded shadow" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="project-images" className="block text-sm font-medium text-gray-700">Project Images</label>
                            <input type="file" id="project-images" multiple className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200" />
                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <img src="/api/placeholder/300/300" alt="Project image 1" className="h-36 w-36 object-cover rounded shadow" />
                                <img src="/api/placeholder/300/300" alt="Project image 2" className="h-36 w-36 object-cover rounded shadow" />
                                <img src="/api/placeholder/300/300" alt="Project image 3" className="h-36 w-36 object-cover rounded shadow" />
                                <img src="/api/placeholder/300/300" alt="Project image 4" className="h-36 w-36 object-cover rounded shadow" />
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <section>
                <div class="form-container">
                    <form>
                        <div class="form-group">
                            <label for="project-description">Project Overview</label>
                            <textarea id="project-description" class="form-control" rows="4">
                                A comprehensive redesign of GlobalFinance Solutions' mobile banking application, focusing on improving user experience, accessibility, and introducing new features while maintaining the brand's identity.
                            </textarea>
                        </div>

                        <div class="form-group">
                            <label for="project-challenge">The Challenge</label>
                            <textarea id="project-challenge" class="form-control" rows="4">
                                The existing app had a dated interface, poor navigation structure, and low user satisfaction scores. The client needed a modern solution that would improve customer retention while introducing new financial management tools.
                            </textarea>
                        </div>

                        <div class="form-group">
                            <label for="project-approach">Approach & Solution</label>
                            <textarea id="project-approach" class="form-control" rows="6">
                                I started with extensive user research, including interviews with current users and competitive analysis. Based on these insights, I developed a new information architecture and user flows that simplified navigation and highlighted key features.

                                The new design introduced a personalized dashboard, streamlined transaction processes, and advanced budgeting tools while maintaining strict compliance with financial regulations and accessibility standards.
                            </textarea>
                        </div>

                        <div class="form-group">
                            <label for="project-results">Results</label>
                            <textarea id="project-results" class="form-control" rows="4">
                                The redesigned app launched in January 2024 with remarkable results: 42% increase in daily active users, 27% improvement in task completion rates, and a jump from 3.2 to 4.7 in app store ratings. Customer service inquiries related to app usage dropped by 31%.
                            </textarea>
                        </div>

                        <div class="form-group">
                            <label for="project-categories">Categories</label>
                            <select id="project-categories" class="form-control" multiple>
                                <option value="mobile" selected>Mobile Design</option>
                                <option value="ux" selected>UX Design</option>
                                <option value="ui" selected>UI Design</option>
                                <option value="branding">Branding</option>
                                <option value="web">Web Design</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="project-tags">Tags</label>
                            <input type="text" id="project-tags" className="form-control" placeholder="Enter tags separated by commas..." />
                            <div class="tag-input-container">
                                <div class="tag">
                                    <span>FinTech</span>
                                    <button type="button">×</button>
                                </div>
                                <div class="tag">
                                    <span>Mobile App</span>
                                    <button type="button">×</button>
                                </div>
                                <div class="tag">
                                    <span>Banking</span>
                                    <button type="button">×</button>
                                </div>
                                <div class="tag">
                                    <span>Redesign</span>
                                    <button type="button">×</button>
                                </div>
                            </div>
                        </div>

                        <div class="button-group">
                            <button type="submit" class="button-primary">Update Project</button>
                            <button type="button" class="button-secondary">Preview Changes</button>
                        </div>
                    </form>
                </div>
            </section>

            {/* <Portfolio New Page  */}

            <section id="portfolio-new" class="py-16 bg-gray-100">
                <div class="max-w-4xl mx-auto px-4">
                    <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">Add New Portfolio Project</h1>

                    <form class="bg-white p-6 rounded-lg shadow space-y-6">

                        {/* Project Title  */}

                        <div>
                            <label for="new-project-title" class="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                            <input type="text" id="new-project-title" placeholder="Enter project title..." class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {/* Client / Year / Duration  */}

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label for="new-project-client" class="block text-sm font-medium text-gray-700 mb-1">Client</label>
                                <input type="text" id="new-project-client" placeholder="Client name..." class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="new-project-year" class="block text-sm font-medium text-gray-700 mb-1">Year</label>
                                <input type="text" id="new-project-year" placeholder="Project year..." class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label for="new-project-duration" class="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                                <input type="text" id="new-project-duration" placeholder="Project duration..." class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        {/* Cover Image */}

                        <div>
                            <label for="new-project-cover" class="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
                            <input type="file" id="new-project-cover" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-md file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                            <p class="mt-2 text-xs text-gray-500">Upload a cover image for your project.</p>
                        </div>

                        {/* Project Images  */}

                        <div>
                            <label for="new-project-images" class="block text-sm font-medium text-gray-700 mb-1">Project Images</label>
                            <input type="file" id="new-project-images" multiple class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:rounded-md file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                                <div class="h-36 w-full border border-dashed rounded-md flex items-center justify-center text-2xl text-gray-400">+</div>
                                <div class="h-36 w-full border border-dashed rounded-md flex items-center justify-center text-2xl text-gray-400">+</div>
                                <div class="h-36 w-full border border-dashed rounded-md flex items-center justify-center text-2xl text-gray-400">+</div>
                                <div class="h-36 w-full border border-dashed rounded-md flex items-center justify-center text-2xl text-gray-400">+</div>
                            </div>
                        </div>

                        {/* Text Areas */}

                        <div>
                            <label for="new-project-description" class="block text-sm font-medium text-gray-700 mb-1">Project Overview</label>
                            <textarea id="new-project-description" rows="4" placeholder="Provide a brief overview of the project..." class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>

                        <div>
                            <label for="new-project-challenge" class="block text-sm font-medium text-gray-700 mb-1">The Challenge</label>
                            <textarea id="new-project-challenge" rows="4" placeholder="Describe the challenges you faced in this project..." class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>

                        <div>
                            <label for="new-project-approach" class="block text-sm font-medium text-gray-700 mb-1">Approach & Solution</label>
                            <textarea id="new-project-approach" rows="6" placeholder="Explain your approach and how you solved the problem..." class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>

                        <div>
                            <label for="new-project-results" class="block text-sm font-medium text-gray-700 mb-1">Results</label>
                            <textarea id="new-project-results" rows="4" placeholder="Share the outcomes and impact of your work..." class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>

                        {/* Categories  */}

                        <div>
                            <label for="new-project-categories" class="block text-sm font-medium text-gray-700 mb-1">Categories</label>
                            <select id="new-project-categories" multiple class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="mobile">Mobile Design</option>
                                <option value="ux">UX Design</option>
                                <option value="ui">UI Design</option>
                                <option value="branding">Branding</option>
                                <option value="web">Web Design</option>
                                <option value="research">User Research</option>
                                <option value="product">Product Design</option>
                            </select>
                        </div>

                        {/* Tags */}

                        <div>
                            <label htmlFor="new-project-tags" className="block text-sm font-medium text-gray-700 mb-1">
                                Tags
                            </label>
                            <input
                                type="text"
                                id="new-project-tags"
                                placeholder="Enter tags separated by commas..."
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="mt-2 flex flex-wrap gap-2 text-sm text-white">
                                {tags.map((tag, idx) => (
                                    <div key={idx} className="bg-blue-500 px-2 py-1 rounded">{tag}</div>
                                ))}
                            </div>
                        </div>



                        {/* Buttons  */}

                        <div class="flex gap-4">
                            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition">Create Project</button>
                            <button type="button" class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md font-medium transition">Save Draft</button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer  */}

            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* About  */}

                    <div>
                        <h3 class="text-white text-xl font-semibold mb-4">Ismael Dayo</h3>
                        <p class="mb-4">User Experience Designer and Digital Strategist helping brands create meaningful digital experiences.</p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white">FB</a>
                            <a href="#" class="text-gray-400 hover:text-white">TW</a>
                            <a href="#" class="text-gray-400 hover:text-white">IG</a>
                            <a href="#" class="text-gray-400 hover:text-white">LI</a>
                            <a href="#" class="text-gray-400 hover:text-white">DR</a>
                        </div>
                    </div>

                    {/* Navigation  */}

                    <div>
                        <h3 class="text-white text-xl font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><a href="/" class="hover:text-white">Home</a></li>
                            <li><a href="/portfolio" class="hover:text-white">Portfolio</a></li>
                            <li><a href="/portfolio-process" class="hover:text-white">My Process</a></li>
                            <li><a href="/about" class="hover:text-white">About</a></li>
                            <li><a href="/blog" class="hover:text-white">Blog</a></li>
                            <li><a href="/resources" class="hover:text-white">Resources</a></li>
                            <li><a href="/contact" class="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Recent Projects */}

                    <div>
                        <h3 class="text-white text-xl font-semibold mb-4">Recent Projects</h3>
                        <ul className="space-y-2 max-h-64 overflow-y-auto pr-2">
                            <li><a href="/portfolio/fintech-app" class="hover:text-white">FinTech App Redesign</a></li>
                            <li><a href="/portfolio/ecommerce-platform" class="hover:text-white">E-commerce Platform</a></li>
                            <li><a href="/portfolio/health-dashboard" class="hover:text-white">Health Dashboard</a></li>
                            <li><a href="/portfolio/travel-booking" class="hover:text-white">Travel Booking Experience</a></li>
                            <li><a href="/portfolio/saas-product" class="hover:text-white">SaaS Product Design</a></li>
                            <li><a href="/portfolio/education-app" class="hover:text-white">Education App</a></li>
                            <li><a href="/portfolio/food-delivery" class="hover:text-white">Food Delivery App</a></li>
                            <li><a href="/portfolio/fitness-tracker" class="hover:text-white">Fitness Tracker</a></li>
                            <li><a href="/portfolio/real-estate" class="hover:text-white">Real Estate Platform</a></li>
                            <li><a href="/portfolio/charity-website" class="hover:text-white">Charity Website</a></li>
                            <li><a href="/portfolio/portfolio-generator" class="hover:text-white">Portfolio Generator</a></li>
                            <li><a href="/portfolio/creative-collab" class="hover:text-white">Creative Collaboration Platform</a></li>
                            <li><a href="/portfolio/design-system" class="hover:text-white">Design System Toolkit</a></li>
                            <li><a href="/portfolio/ai-design" class="hover:text-white">AI-Powered Design Assistant</a></li>
                            <li><a href="/portfolio/photography-portfolio" class="hover:text-white">Photography Portfolio Generator</a></li>
                            <li><a href="/portfolio/tech-dashboard" class="hover:text-white">Technology Dashboard</a></li>
                            <li><a href="/portfolio/abstract-geometry" class="hover:text-white">Abstract Geometry Series</a></li>
                            <li><a href="/portfolio/eco-packaging" class="hover:text-white">Eco Product Packaging</a></li>
                            <li><a href="/portfolio/character-design" class="hover:text-white">Character Design Collection</a></li>
                            <li><a href="/portfolio/nature-macro" class="hover:text-white">Nature Macro Series</a></li>
                            <li><a href="/portfolio/social-campaign" class="hover:text-white">Social Media Campaign</a></li>
                            <li><a href="/portfolio/fashion-ecommerce" class="hover:text-white">Fashion E-Commerce Concept</a></li>
                            <li><a href="/portfolio/street-photography" class="hover:text-white">Street Photography Collection</a></li>
                            <li><a href="/portfolio/finance-app" class="hover:text-white">Finance App UI</a></li>
                            <li><a href="/portfolio/branding" class="hover:text-white">Branding Project</a></li>
                            <li><a href="/portfolio/ui-design" class="hover:text-white">UI Design Project</a></li>
                            <li><a href="/portfolio/illustrations" class="hover:text-white">Illustrations Project</a></li>
                            <li><a href="/portfolio/digital" class="hover:text-white">Digital Project</a></li>
                            <li><a href="/portfolio/photography" class="hover:text-white">Photography Project</a></li>
                        </ul>
                    </div>

                    {/* Contact */}

                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
                        <p className="mb-2">
                            If you have any questions or would like to discuss a project, feel free to reach out!
                        </p>
                        <p>
                            Email:{" "}
                            <a
                                href="mailto:ismaiheel4real2008@gmail.com"
                                className="text-blue-400 hover:underline"
                            >
                                ismaiheel4real2008@gmail.com
                            </a>
                        </p>
                    </div>

                </div>

                <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-700 pt-6">
                    <div class="text-center text-sm text-gray-500 mt-12 border-t border-gray-700 pt-6">
                        &copy; 2025 Your Name or Company. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}
export default PortfoliosPage;

