"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const BlogDetail = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // blog data
    const blogPost = {
        title: "Designing Responsive Interfaces: A Complete Guide",
        publishedDate: "May 10, 2025",
        author: "Ismael Dayo",
        authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
        category: "UI/UX Design",
        readTime: "8 min read",
        coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
        content: `
      <p class="mb-6">In today's digital landscape, creating responsive interfaces isn't just a technical requirement—it's an essential aspect of user experience design. As users increasingly switch between devices of varying screen sizes, designers must build interfaces that adapt seamlessly across platforms.</p>
      
      <h2 class="text-2xl font-bold mb-4">Understanding Responsive Design Principles</h2>
      <p class="mb-6">Responsive design is built on three fundamental principles: fluid grids, flexible images, and media queries. These components work together to create interfaces that respond to the user's behavior and environment based on screen size, platform, and orientation.</p>
      
      <h3 class="text-xl font-semibold mb-3">1. Fluid Grids</h3>
      <p class="mb-6">Instead of designing with fixed pixel widths, responsive designs use relative units like percentages. This approach allows content to expand and contract based on the viewport size. The 12-column grid system remains one of the most popular frameworks for creating scalable layouts.</p>
      
      <h3 class="text-xl font-semibold mb-3">2. Flexible Images</h3>
      <p class="mb-6">Images in responsive designs must scale appropriately across different screen sizes. Using CSS properties like max-width: 100% ensures that images never exceed their container width while maintaining their aspect ratio.</p>
      
      <div class="my-8 bg-slate-100 p-6 rounded-lg">
        <h4 class="text-lg font-semibold mb-3">Pro Tip:</h4>
        <p>When working with images in responsive designs, consider using the picture element or srcset attribute to serve different image sizes based on the user's device capabilities.</p>
      </div>
      
      <h3 class="text-xl font-semibold mb-3">3. Media Queries</h3>
      <p class="mb-6">Media queries allow designers to apply different styles based on the characteristics of the device. By setting breakpoints at strategic viewport widths, designers can create targeted experiences for specific device categories while maintaining a cohesive overall experience.</p>
      
      <h2 class="text-2xl font-bold mb-4">Mobile-First Approach</h2>
      <p class="mb-6">A mobile-first approach means designing for the smallest screen first and progressively enhancing the experience for larger screens. This strategy forces designers to prioritize content and focus on the core functionality that users need.</p>
      
      <blockquote class="border-l-4 border-slate-500 pl-4 italic my-6">
        "Mobile users will do anything desktop users will do, provided it's presented in a usable way. They're just in a different context."
        <span class="block mt-2 text-sm font-semibold">— Luke Wroblewski, Author of Mobile First</span>
      </blockquote>
      
      <h2 class="text-2xl font-bold mb-4">Responsive Typography</h2>
      <p class="mb-6">Typography plays a crucial role in responsive design. Using relative units like rem for font sizes allows text to scale appropriately across different viewport sizes. Consider implementing a modular scale for your typography to maintain consistent proportions throughout your design.</p>
      
      <h2 class="text-2xl font-bold mb-4">Testing Responsive Designs</h2>
      <p class="mb-6">Testing is a critical part of the responsive design process. Use browser developer tools to simulate different screen sizes, but also test on actual devices whenever possible. Pay attention to touch targets, which should be at least 44×44 pixels for optimal usability on mobile devices.</p>
      
      <h2 class="text-2xl font-bold mb-4">Conclusion</h2>
      <p class="mb-6">Responsive design is not just about making a website work on different screen sizes—it's about creating a seamless experience that adapts to the user's context. By following the principles outlined in this guide, you can create interfaces that provide an optimal viewing and interaction experience across the full spectrum of devices.</p>
    `,
        tags: ["Responsive Design", "UI/UX", "Web Development", "Mobile Design"],
        relatedPosts: [
            {
                id: 1,
                title: "Color Theory in Digital Products",
                thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=180&q=80",
                category: "UI/UX Design",
                slug: "color-theory-digital-products"
            },
            {
                id: 2,
                title: "Accessibility First: Designing for All Users",
                thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=180&q=80",
                category: "Accessibility",
                slug: "accessibility-first-designing-for-all-users"
            },
            {
                id: 3,
                title: "The Psychology of User Interaction",
                thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=180&q=80",
                category: "UX Research",
                slug: "psychology-user-interaction"
            }
        ]
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-slate-900"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="container mx-auto px-4 py-12 max-w-5xl">

                {/* Breadcrumb */}

                <div className="text-sm text-slate-600 mb-6">
                    <Link href="/" className="hover:text-slate-900">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/blog" className="hover:text-slate-900">Blog</Link>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900">{blogPost.title}</span>
                </div>

                {/* Blog Header */}

                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{blogPost.title}</h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 mb-6">
                        <div className="flex items-center gap-2">
                            <div className="relative h-8 w-8 rounded-full overflow-hidden">
                                <Image
                                    src={blogPost.authorAvatar}
                                    alt={blogPost.author}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span>{blogPost.author}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img
                                src="https://img.icons8.com/ios/50/000000/calendar--v1.png"
                                alt="Calendar"
                                className="h-4 w-4"
                            />
                            <span>{blogPost.publishedDate}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img
                                src="https://img.icons8.com/ios/50/000000/price-tag.png"
                                alt="Category"
                                className="h-4 w-4"
                            />
                            <span>{blogPost.category}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img
                                src="https://img.icons8.com/ios/50/000000/clock--v1.png"
                                alt="Time"
                                className="h-4 w-4"
                            />
                            <span>{blogPost.readTime}</span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="rounded-lg overflow-hidden mb-10 w-full h-80 md:h-96 relative">
                    <Image
                        src={blogPost.coverImage}
                        alt={blogPost.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Blog Content */}
                <article className="prose prose-slate lg:prose-lg max-w-none mb-16">
                    <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                </article>

                {/* Tags */}
                <div className="mb-16">
                    <h3 className="text-lg font-semibold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {blogPost.tags.map((tag, index) => (
                            <Link
                                key={index}
                                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition-colors"
                            >
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Author Bio */}
                <div className="bg-slate-50 rounded-lg p-6 md:p-8 mb-16">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={blogPost.authorAvatar}
                                alt={blogPost.author}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2 text-center md:text-left">{blogPost.author}</h3>
                            <p className="text-slate-600 mb-4 text-center md:text-left">
                                Ismael Dayo is a UI/UX designer and front-end developer with over 8 years of experience creating user-centered digital experiences for clients worldwide.
                            </p>
                            <div className="flex justify-center md:justify-start gap-4">
                                <a href="#" className="text-slate-600 hover:text-slate-900">
                                    <img
                                        src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                                        alt="Twitter"
                                        className="h-5 w-5"
                                    />
                                </a>
                                <a href="#" className="text-slate-600 hover:text-slate-900">
                                    <img
                                        src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                                        alt="Instagram"
                                        className="h-5 w-5"
                                    />
                                </a>
                                <a href="#" className="text-slate-600 hover:text-slate-900">
                                    <img
                                        src="https://img.icons8.com/color/48/000000/linkedin.png"
                                        alt="LinkedIn"
                                        className="h-5 w-5"
                                    />
                                </a>
                                <a href="#" className="text-slate-600 hover:text-slate-900">
                                    <img
                                        src="https://img.icons8.com/ios-glyphs/60/000000/github.png"
                                        alt="GitHub"
                                        className="h-5 w-5"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {blogPost.relatedPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={post.thumbnail}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <span className="text-xs font-semibold text-slate-600 mb-2 block">{post.category}</span>
                                        <h4 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">{post.title}</h4>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default BlogDetail;