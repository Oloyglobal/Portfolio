'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'website',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1745593869/E-Commerce-Platform_igrk67.jpg',
      description: 'A full-featured e-commerce platform with payment processing, inventory management, and admin dashboard. Increased client sales by 45% within the first quarter of implementation.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      link: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746880140/TechSolutions_drgtqx.jpg',
      client: 'TechSolutions Ltd',
      duration: '3 months',
      year: '2024',
    },
    // ... other projects
  ];

  // Added testimonials data here to fix the ReferenceError
  const testimonials = [
    {
      name: 'Jane Doe',
      position: 'CEO, Example Corp',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      content: 'This team delivered exceptional work and exceeded expectations.',
    },
    {
      name: 'John Smith',
      position: 'CTO, Tech Innovators',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4,
      content: 'Professional, efficient, and reliable throughout the project.',
    },
    // Add more testimonials as needed
  ];

  // ... other data (skills, stats) can be added here similarly

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-600 to-gray-400 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Creative Solutions for Modern Challenges
              </h1>
              <p className="text-xl max-w-lg mb-8">
                A curated collection of projects that showcase technical expertise, creativity, and a passion for solving complex problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300">
                  Get in Touch
                </Link>
                <Link href="#projects" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition duration-300">
                  View Projects
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746830853/Portfolio-Showcase_w5t9e7.webp"
                  alt="Portfolio Showcase"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  unoptimized // Added to ensure image displays
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        {/* ... existing expertise section code ... */}
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-20 bg-white">
        {/* ... existing portfolio section code ... */}
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        {/* ... existing skills section code ... */}
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-600">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 relative mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                      unoptimized // Added to ensure image displays
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-600">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.position}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <div key={i} className="relative w-4 h-4">
                          <Image
                            src="/images/star.png"
                            alt="Star"
                            fill
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-400 text-white">
        {/* ... existing stats section code ... */}
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch to discuss how we can help bring your vision to life
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
