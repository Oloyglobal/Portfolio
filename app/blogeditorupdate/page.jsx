

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const BlogEditorUpdate=()=>{
    const router = useRouter();

    // Blog post state
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        content: '',
        category: 'technology',
        tags: '',
        coverImage: '',
        publishDate: new Date().toISOString().split('T')[0],
    });

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });
    const [isPreview, setIsPreview] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulating API call
        try {
           
            console.log('Submitting blog post:', formData);

            // Simulate server processing
            await new Promise(resolve => setTimeout(resolve, 1000));

            setMessage({ text: 'Blog post updated successfully!', type: 'success' });

            setTimeout(() => {
                router.push('/blog-detail?id=1'); 
            }, 2000);
        } catch (error) {
            setMessage({
                text: 'Error updating blog post. Please try again.',
                type: 'error'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const togglePreview = () => {
        setIsPreview(!isPreview);
    };

    const formatContent = (content) => {
       
        const formatted = content
            .replace(/#{3}\s(.+)/g, '<h3 class="text-xl font-bold my-3">$1</h3>')
            .replace(/#{2}\s(.+)/g, '<h2 class="text-2xl font-bold my-4">$1</h2>')
            .replace(/#{1}\s(.+)/g, '<h1 class="text-3xl font-bold my-5">$1</h1>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br />');

        return formatted;
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-slate-800 text-white p-6">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-bold">Update Blog Post</h1>
                    <p className="text-slate-300">Make changes to your existing blog post</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-8 px-4">
                {/* Notification Banner */}
                {message.text && (
                    <div className={`p-4 mb-6 rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {message.text}
                    </div>
                )}

                {/* Navigation Links */}
                <div className="mb-6 flex gap-4">
                    <Link
                        href="/dashboard"
                        className="text-slate-600 hover:text-slate-800 flex items-center"
                    >
                        <span>← Back to Dashboard</span>
                    </Link>
                    <button
                        onClick={togglePreview}
                        className="ml-auto text-slate-600 hover:text-slate-800 border border-slate-300 rounded-md px-4 py-2"
                    >
                        {isPreview ? 'Edit Mode' : 'Preview Mode'}
                    </button>
                </div>

                {/* Form / Preview Section */}
                {isPreview ? (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h1 className="text-3xl font-bold text-slate-800">{formData.title}</h1>
                        <p className="text-lg text-slate-600 mt-2">{formData.subtitle}</p>

                        {formData.coverImage && (
                            <div className="mt-6">
                                <img
                                    src={formData.coverImage}
                                    alt={formData.title}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </div>
                        )}

                        <div className="flex gap-2 mt-4">
                            <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">
                                {formData.category}
                            </span>
                            {formData.tags.split(',').map((tag, index) => (
                                tag.trim() && (
                                    <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                                        {tag.trim()}
                                    </span>
                                )
                            ))}
                        </div>

                        <div
                            className="prose max-w-none mt-8 text-slate-700"
                            dangerouslySetInnerHTML={{ __html: formatContent(formData.content) }}
                        />

                        <div className="mt-8 border-t border-slate-200 pt-4 text-slate-500">
                            Publish Date: {new Date(formData.publishDate).toLocaleDateString()}
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-slate-700 mb-2" htmlFor="title">
                                    Blog Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Enter blog title"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    required
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-slate-700 mb-2" htmlFor="subtitle">
                                    Subtitle
                                </label>
                                <input
                                    type="text"
                                    id="subtitle"
                                    name="subtitle"
                                    value={formData.subtitle}
                                    onChange={handleChange}
                                    placeholder="Enter a brief subtitle"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-slate-700 mb-2" htmlFor="coverImage">
                                    Cover Image URL
                                </label>
                                <input
                                    type="url"
                                    id="coverImage"
                                    name="coverImage"
                                    value={formData.coverImage}
                                    onChange={handleChange}
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-700 mb-2" htmlFor="category">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                >
                                    <option value="technology">Technology</option>
                                    <option value="design">Design</option>
                                    <option value="development">Development</option>
                                    <option value="business">Business</option>
                                    <option value="lifestyle">Lifestyle</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-slate-700 mb-2" htmlFor="publishDate">
                                    Publish Date
                                </label>
                                <input
                                    type="date"
                                    id="publishDate"
                                    name="publishDate"
                                    value={formData.publishDate}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-slate-700 mb-2" htmlFor="tags">
                                    Tags (comma separated)
                                </label>
                                <input
                                    type="text"
                                    id="tags"
                                    name="tags"
                                    value={formData.tags}
                                    onChange={handleChange}
                                    placeholder="web development, next.js, portfolio"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-slate-700 mb-2" htmlFor="content">
                                    Content (Markdown supported)
                                </label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    rows="12"
                                    placeholder="Write your blog post content here..."
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                    required
                                ></textarea>
                                <p className="text-sm text-slate-500 mt-2">
                                    Use markdown for formatting: **bold**, *italic*, # Heading, ## Subheading
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-end gap-4">
                            <Link
                                href="/dashboard"
                                className="px-6 py-2 bg-slate-200 text-slate-800 rounded-md hover:bg-slate-300 transition-colors"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition-colors disabled:opacity-50"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Updating...' : 'Update Post'}
                            </button>
                        </div>
                    </form>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-slate-800 text-slate-300 py-12 mt-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <h2 className="text-xl font-bold text-white mb-4">Ismael Dayo</h2>
                            <p className="mb-4">
                                Web developer and designer specializing in creating stunning, functional websites
                                and applications using modern technologies like Next.js and Tailwind CSS.
                            </p>
                            <div className="flex gap-4 mt-4">
                                <a href="#" className="text-slate-300 hover:text-white">
                                    Twitter
                                </a>
                                <a href="#" className="text-slate-300 hover:text-white">
                                    LinkedIn
                                </a>
                                <a href="#" className="text-slate-300 hover:text-white">
                                    GitHub
                                </a>
                                <a href="#" className="text-slate-300 hover:text-white">
                                    Dribbble
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-slate-300 hover:text-white">Home</Link></li>
                                <li><Link href="/about" className="text-slate-300 hover:text-white">About</Link></li>
                                <li><Link href="/portfolio" className="text-slate-300 hover:text-white">Portfolio</Link></li>
                                <li><Link href="/blog" className="text-slate-300 hover:text-white">Blog</Link></li>
                                <li><Link href="/contact" className="text-slate-300 hover:text-white">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span>Email:</span>
                                    <a href="mailto:hello@ismaeldayo.com" className="text-slate-300 hover:text-white">
                                     ismaiheel4real2008@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>Phone:</span>
                                    <span>+234 (80) 3215-9449</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span>Location:</span>
                                    <span>123, University of Ibadan, San Ibadan Oyo State</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p>© {new Date().getFullYear()} Ismael Dayo. All rights reserved.</p>
                        <p className="mt-4 md:mt-0">Designed & Developed with ❤️</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default BlogEditorUpdate;