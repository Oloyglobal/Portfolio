

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including web design and development, mobile app development, UI/UX design, e-commerce solutions, digital marketing, SEO optimization, content creation, and brand identity design. Each service is tailored to meet your specific business needs and goals.",
      category: "services"
    },
    {
      question: "How long does it take to complete a website project?",
      answer: "The timeline for website projects varies depending on complexity, features, and scope. A simple informational website might take 2-4 weeks, while complex e-commerce platforms or custom web applications can take 2-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
      category: "process"
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on the scope, complexity, and specific requirements of your project. We offer transparent pricing with no hidden fees. After our initial consultation and requirements gathering, we provide a detailed proposal with clear pricing. We also offer flexible payment plans to accommodate your budget.",
      category: "pricing"
    },
    {
      question: "Do you provide website maintenance services?",
      answer: "Yes, we offer comprehensive website maintenance packages that include regular updates, security monitoring, content updates, performance optimization, and technical support. Our maintenance plans are designed to keep your website secure, up-to-date, and performing optimally. We recommend regular maintenance to ensure your website continues to meet your business needs and provides a positive user experience.",
      category: "services"
    },
    {
      question: "How do you handle revisions during the design process?",
      answer: "Our design process includes dedicated revision rounds to ensure your complete satisfaction. We typically include 2-3 rounds of revisions in our standard packages. We value your feedback and work collaboratively to implement changes that align with your vision. Additional revision rounds can be arranged if needed.",
      category: "process"
    },
    {
      question: "Can you help with website hosting and domain registration?",
      answer: "Absolutely! We provide comprehensive hosting solutions tailored to your website's specific needs. Our hosting services include regular backups, security monitoring, and technical support. We can also assist with domain registration, renewal, and management to ensure your online presence is secured properly.",
      category: "services"
    },
    {
      question: "What technologies do you use for development?",
      answer: "We stay current with the latest technologies and best practices in web development. For frontend development, we use React, Next.js, Vue.js, and other modern frameworks. Our backend solutions include Node.js, Python, PHP, and Ruby on Rails. We select the most appropriate technology stack based on your project requirements, performance needs, and long-term goals.",
      category: "technical"
    },
    {
      question: "How do you approach responsive design and mobile optimization?",
      answer: "We employ a mobile-first approach to ensure optimal performance across all devices. Every website we build is fully responsive, adapting seamlessly to different screen sizes and devices. We conduct thorough testing on various devices and browsers to ensure consistent performance and user experience regardless of how users access your site.",
      category: "technical"
    },
    {
      question: "What is your process for working with clients?",
      answer: "Our client collaboration process includes: 1) Initial consultation to understand your requirements, 2) Proposal and project planning, 3) Design phase with feedback loops, 4) Development with regular progress updates, 5) Testing and quality assurance, 6) Client review and feedback implementation, and 7) Launch and post-launch support. Throughout the process, we maintain clear communication and ensure your vision is realized.",
      category: "process"
    },
    {
      question: "Do you provide SEO services with website development?",
      answer: "Yes, we integrate SEO best practices into all our website development projects. This includes proper site structure, mobile optimization, performance optimization, semantic HTML, schema markup, and other technical SEO elements. We also offer comprehensive SEO packages that include keyword research, content optimization, link building, and ongoing optimization to improve your search engine rankings.",
      category: "services"
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Absolutely! We collaborate with clients worldwide. Our digital workflow and communication tools enable seamless collaboration across different time zones. We schedule meetings at times convenient for you and provide regular updates throughout your project regardless of your location.",
      category: "general"
    },
    {
      question: "How do you ensure the security of websites you develop?",
      answer: "Security is a top priority in our development process. We implement industry-standard security measures including SSL certificates, secure authentication systems, data encryption, regular security updates, and protection against common vulnerabilities. We also provide ongoing security monitoring and maintenance to protect against emerging threats.",
      category: "technical"
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-600 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help your business succeed in the digital world.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="w-full h-96 sm:h-80 relative rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746461656/thFAQs-Hero-Image_dwboq9.jpg" 
              alt="FAQs Hero Image" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 text-white">
              <p className="text-lg font-medium">Have more questions? Contact us for personalized assistance.</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Image 
                src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746462113/vector-search-icon_i4cmse.jpg" 
                width={20} 
                height={20} 
                alt="Search icon" 
                className="text-slate-400"
              />
            </div>
            <input
              type="text"
              placeholder="Search for answers..."
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-slate-500 focus:border-slate-500"
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            className={`px-4 py-2 rounded-full ${activeCategory === 'all' ? 'bg-slate-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full capitalize ${activeCategory === category ? 'bg-slate-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                  <div className="flex items-center">
                    <span className="text-xs mr-3 px-2 py-1 bg-indigo-100 text-slate-800 rounded-full capitalize">{faq.category}</span>
                    <Image 
                      src="/api/placeholder/24/24" 
                      width={20} 
                      height={20} 
                      alt={openFAQ === index ? "Collapse" : "Expand"} 
                      className={`transform ${openFAQ === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <Image 
                src="/api/placeholder/100/100" 
                width={64} 
                height={64} 
                alt="No results" 
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900">No matching questions found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="bg-indigo-50 p-8 rounded-xl shadow-sm mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image 
                src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746533950/customerservice_f3nr7u.jpg" 
                width={500} 
                height={350} 
                alt="Customer support" 
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6">
                Our team is ready to assist you with any specific questions you might have. 
                Reach out to us for personalized support and solutions tailored to your needs.
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-slate-600 hover:bg-gray-300"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/book-consultation" 
                  className="inline-flex items-center px-6 py-3 border border-black-600 text-base font-medium rounded-md text-gray-600 bg-white hover:bg-indigo-50"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={`https://res.cloudinary.com/dtbforfvb/image/upload/v1746533789/Client_fgbroq.jpg?text=Client${item}`} 
                      width={48} 
                      height={48} 
                      alt={`Client ${item}`} 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Client Name {item}</h3>
                    <p className="text-sm text-gray-500">Company {item}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Image 
                      key={i} 
                      src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746755726/star-3d-illustration_tamw0x.webp" 
                      width={16} 
                      height={16} 
                      alt="Star" 
                      className="text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600">
                  "The team provided exceptional service throughout our project. 
                  They were responsive, creative, and delivered beyond our expectations. 
                  Highly recommended for anyone looking for quality digital solutions."
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Resources */}
        <div className="bg-gray-100 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {title: "Complete Website Development Guide", type: "E-Book"},
              {title: "Digital Marketing Strategies", type: "Webinar"},
              {title: "UI/UX Best Practices", type: "Blog Post"}
            ].map((resource, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 relative">
                  <Image 
                    src={`https://res.cloudinary.com/dtbforfvb/image/upload/v1746534822/Web-Application-Development-A-Complete-Guide_ggeexq.webp?text=Resource${idx+1}`} 
                    fill
                    alt={resource.title} 
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-slate-600 bg-indigo-50 px-2 py-1 rounded">{resource.type}</span>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">{resource.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Learn more about our approaches and industry best practices.
                  </p>
                  <Link href="#" className="mt-3 inline-block text-slate-600 font-medium text-sm">
                    Access Resource
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Sign Up */}
      <div className="bg-slate-600 mt-16 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest industry insights, tips, and updates from our team.
          </p>
          <form className="max-w-md mx-auto flex flex-col text-slate-400 sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md focus:ring-gray-500 focus:border-slate-400 border border-gray-200"
              required
            />
            <button
              type="submit"
              className="bg-gray-200 text-white-400 text-black-600 font-medium px-6 py-2 rounded-md hover:bg-slate-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">About Us</h3>
              <p className="text-gray-300 text-sm">
                We're a digital agency focused on delivering exceptional web solutions that help businesses grow and succeed online.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
                <li><Link href="/portfolio" className="text-gray-300 hover:text-white">Portfolio</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746477933/Email_av0u5q.jpg" width={16} height={16} alt="Email" className="mr-2" />
                  ismaiheel4real2008@gmail.com
                </li>
                <li className="flex items-center">
                  <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746478149/Phone_txf1mz.jpg" width={16} height={16} alt="Phone" className="mr-2" />
                  +234 (80) 3215 9449
                </li>
                <li className="flex items-center">
                  <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746478286/location-location-pin-location-icon-transparent-free_pimpi0.webp" width={16} height={16} alt="Location" className="mr-2" />
                 123, University of Ibadan, Campus
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href={`#${social}`} className="hover:text-slate-400">
                    <Image src="/api/placeholder/24/24" width={24} height={24} alt={social} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 text-center">
            <p>&copy; {new Date().getFullYear()} Digital Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default FAQs;