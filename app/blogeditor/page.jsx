"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, Save } from "lucide-react";

const BlogEditor=()=>{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("technology");
    const [featuredImage, setFeaturedImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({ show: false, message: "", type: "" });

    const categories = [
        "technology",
        "design",
        "development",
        "business",
        "marketing",
        "personal"
    ];

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFeaturedImage(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            setNotification({
                show: true,
                message: "Title and content are required!",
                type: "error"
            });
            setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setNotification({
                show: true,
                message: "Blog published successfully!",
                type: "success"
            });

            setTitle("");
            setContent("");
            setCategory("technology");
            setFeaturedImage(null);
            setIsSubmitting(false);

            setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-slate-800 text-white py-4 px-6 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Ismael Dayo</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link href="/" className="hover:text-slate-300 transition">Home</Link></li>
                            <li><Link href="/portfolio-process" className="hover:text-slate-300 transition">Portfolio</Link></li>
                            <li><Link href="/blog-detail" className="hover:text-slate-300 transition">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-slate-300 transition">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto py-8 px-4">
                <div className="mb-6 flex items-center">
                    <Link href="/blog-detail" className="flex items-center text-slate-600 hover:text-slate-800">
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        <span>Back to Blogs</span>
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h1 className="text-3xl font-bold text-slate-800 mb-6">Create New Blog Post</h1>

                    {notification.show && (
                        <div className={`mb-6 p-4 rounded ${notification.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                            {notification.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="title" className="block text-slate-700 font-medium mb-2">Title</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-2 border  text-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                                placeholder="Enter blog title"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="category" className="block text-slate-700 font-medium mb-2">Category</label>
                            <select
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-4 py-2 border text-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="featuredImage" className="block text-slate-700 font-medium mb-2">Featured Image</label>
                            <div className="flex items-center space-x-4">
                                <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-md flex items-center transition">
                                    <Upload className="mr-2 h-5 w-5" />
                                    <span>Upload Image</span>
                                    <input
                                        type="file"
                                        id="featuredImage"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                </label>
                                {featuredImage && (
                                    <span className="text-green-600">
                                        {featuredImage.name} (Image selected)
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="content" className="block text-slate-700 font-medium mb-2">Content</label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 min-h-[300px]"
                                placeholder="Write your blog content here..."
                            ></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`flex items-center bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-md font-medium transition ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                <Save className="mr-2 h-5 w-5" />
                                {isSubmitting ? "Publishing..." : "Publish Blog"}
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            {/* Footer */}

            <footer className="bg-slate-800 text-slate-200 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                        {/* About Section */}

                        <div className="md:col-span-2">
                            <h3 className="text-xl font-bold mb-4">Ismael Dayo</h3>
                            <p className="mb-4 text-slate-300">
                                A passionate developer and designer focused on creating beautiful, functional, and user-friendly web experiences.
                            </p>

                            <div className="flex space-x-4">
                                <a href="https://twitter.com" target="_blank" className="text-slate-300 hover:text-white transition" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter" className="h-6 w-6" />
                                </a>
                                <a href="https://github.com" target="_blank" className="text-slate-300 hover:text-white transition" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/ios-glyphs/60/000000/github.png" alt="GitHub" className="h-6 w-6" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" className="text-slate-300 hover:text-white transition" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
                                </a>
                            </div>

                        </div>

                        {/* Quick Links */}

                        <div>
                            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-slate-300 hover:text-white transition">Home</Link></li>
                                <li><Link href="/portfolio-process" className="text-slate-300 hover:text-white transition">Portfolio</Link></li>
                                <li><Link href="/blog-detail" className="text-slate-300 hover:text-white transition">Blog</Link></li>
                                <li><Link href="/contact" className="text-slate-300 hover:text-white transition">Contact</Link></li>
                                <li><Link href="/about" className="text-slate-300 hover:text-white transition">About Me</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}

                        <div>
                            <h3 className="text-lg font-bold mb-4">Contact</h3>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start"><span className="mr-2">📧</span><span>ismaiheel4real2008@gmail.com</span></li>
                                <li className="flex items-start"><span className="mr-2">📱</span><span>+234 (80) 3215 - 9449</span></li>
                                <li className="flex items-start"><span className="mr-2">📍</span><span>123, University of Ibadan San, Ibadan, Oyo State</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
                        <p>&copy; {new Date().getFullYear()} Ismael Dayo. All rights reserved.</p>
                        <div className="mt-2 flex justify-center space-x-6">
                            <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition">Privacy Policy</Link>
                            <Link href="/terms-of-service" className="text-slate-400 hover:text-white transition">Terms of Service</Link>
                            <Link href="/sitemap" className="text-slate-400 hover:text-white transition">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default BlogEditor;
