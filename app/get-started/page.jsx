'use client';

import { useState } from 'react';
import Link from 'next/link';


const GetStartedPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
   
    setActiveStep(4); 
  };


  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom websites built with modern frameworks and technologies.',
      icon: '💻',
      href: '/services#web-development',
    },
    {
      id: 'ui-design',
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging experiences.',
      icon: '🎨',
      href: '/services#ui-design',
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
      href: '/services#mobile-apps',
    },
    {
      id: 'consulting',
      title: 'Tech Consulting',
      description: 'Expert advice on technology strategy and implementation.',
      icon: '🔍',
      href: '/services#consulting',
    },
  ];


  const testimonials = [
    {
      id: 1,
      name: "Adebisi Olufemi",
      company: "TechStart Inc.",
      quote: "Working with Ismael transformed our online presence. The website he built not only looks stunning but has increased our conversion rate by 35%.",
      role: "Marketing Director"
    },
    {
      id: 2,
      name: "Samuel Johnson",
      company: "GrowthApp",
      quote: "The mobile app Ismael developed for us has received outstanding user feedback. His attention to detail and focus on user experience made all the difference.",
      role: "Product Owner"
    },
    {
      id: 3,
      name: "Fatima Ibrahim",
      company: "Design Forward",
      quote: "Ismael's UI/UX consulting helped us completely rethink our approach. Our user satisfaction scores have never been higher.",
      role: "CEO"
    }
  ];


  
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We'll discuss your goals, requirements, and vision to create a solid foundation."
    },
    {
      number: "02",
      title: "Planning",
      description: "I'll create a detailed roadmap and strategy tailored to your specific needs."
    },
    {
      number: "03",
      title: "Development",
      description: "Your project will be built using industry best practices and cutting-edge technologies."
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Rigorous testing ensures everything works perfectly before going live."
    },
    {
      number: "05",
      title: "Support",
      description: "Ongoing maintenance and support to keep everything running smoothly."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Get Started with <span className="text-slate-600">Ismael Dayo</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Let's work together to bring your vision to life. Follow these simple steps to begin our journey.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <ol className="flex items-center justify-center w-full max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((step) => (
              <li 
                key={step}
                className={`flex items-center ${step < 4 ? 'w-full' : ''}`}
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${activeStep >= step ? 'bg-slate-600' : 'bg-gray-300'} shrink-0`}>
                  <span className="text-white">{step}</span>
                </div>
                {step < 4 && (
                  <div className={`flex-1 h-0.5 mx-2 ${activeStep > step ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
                )}
              </li>
            ))}

          </ol>
          <div className="flex justify-center mt-4 space-x-8 max-w-4xl mx-auto">
            <div className="text-center flex-1">
              <span className={`font-medium ${activeStep === 1 ? 'text-gray-600' : 'text-slate-500'}`}>Choose Service</span>
            </div>
            <div className="text-center flex-1">
              <span className={`font-medium ${activeStep === 2 ? 'text-indigo-600' : 'text-slate-500'}`}>Project Details</span>
            </div>
            <div className="text-center flex-1">
              <span className={`font-medium ${activeStep === 3 ? 'text-indigo-600' : 'text-slate-500'}`}>Confirm</span>
            </div>
            <div className="text-center flex-1">
              <span className={`font-medium ${activeStep === 4 ? 'text-indigo-600' : 'text-slate-500'}`}>Success</span>
            </div>
          </div>
        </div>

        {/* Step 1: Choose Service */}
        {activeStep === 1 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choose a Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className={`p-6 border rounded-lg cursor-pointer transition-all hover:shadow-md ${formData.service === service.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                  onClick={() => setFormData({...formData, service: service.id})}
                >
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                      <p className="mt-1 text-gray-600">{service.description}</p>
                      <Link href={service.href} className="text-slate-600 hover:text-indigo-800 text-sm mt-2 inline-block">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={() => setActiveStep(2)}
                disabled={!formData.service}
                className={`px-6 py-3 text-white rounded-md ${formData.service ? 'bg-slate-600 hover:bg-indigo-700' : 'bg-slate-400 cursor-not-allowed'}`}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Project Details */}
        {activeStep === 2 && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Project Details</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-slate-500 focus:border-slate-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-slate-500 focus:border-slate-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-slate-500 focus:border-slate-500"
                  required
                ></textarea>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className="px-4 py-2 text-indigo-600 border border-slate-600 rounded-md hover:bg-slate-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep(3)}
                  disabled={!formData.name || !formData.email || !formData.message}
                  className={`px-6 py-2 text-white rounded-md ${formData.name && formData.email && formData.message ? 'bg-slate-600 hover:bg-indigo-700' : 'bg-gray-300 cursor-not-allowed'}`}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Confirm */}
        {activeStep === 3 && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Confirm Your Details</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Selected Service</h3>
                <p className="mt-1 text-lg text-gray-900">
                  {services.find(s => s.id === formData.service)?.title}
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                <p className="mt-1 text-lg text-gray-900">{formData.name}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                <p className="mt-1 text-lg text-gray-900">{formData.email}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500">Project Description</h3>
                <p className="mt-1 text-lg text-gray-900">{formData.message}</p>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className="px-4 py-2 text-indigo-600 border border-slate-600 rounded-md hover:bg-slate-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-2 text-white bg-slate-600 rounded-md hover:bg-slate-700"
              >
                Submit Request
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {activeStep === 4 && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-2xl font-bold">✓</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted Successfully!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your interest in working with me. I'll review your request and get back to you within 24-48 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/portfolio" className="px-6 py-3 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50">
                View Portfolio
              </Link>
              <Link href="/blogs" className="px-6 py-3 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50">
                Read My Blogs
              </Link>
              <Link href="/" className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                Back to Home
              </Link>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Work With Me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <span className="text-indigo-600 font-bold">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Fast Turnaround</h3>
                  <p className="mt-1 text-gray-600">Quick development cycles with regular updates and communications.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <span className="text-slate-600 font-bold">🔒</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Secure & Reliable</h3>
                  <p className="mt-1 text-gray-600">All projects built with security in mind and thoroughly tested.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <span className="text-slate-600 font-bold">🔧</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Ongoing Support</h3>
                  <p className="mt-1 text-gray-600">Continued assistance and maintenance after project completion.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4">
                  <span className="text-slate-600 font-bold">💬</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Transparency</h3>
                  <p className="mt-1 text-gray-600">Clear communication and pricing with no hidden fees.</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/faqs" className="text-slate-600 hover:text-indigo-800 font-medium flex items-center">
                Have more questions? Read our FAQs
              </Link>
            </div>
          </div>
        </div>

        {/* My Work Process Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">My Work Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              A streamlined approach designed to deliver quality results efficiently
            </p>
          </div>
          
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.number} className="flex items-start bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-4xl font-bold text-slate-600 mr-6 mt-1">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">What Clients Say</h2>
            <p className="mt-4 text-lg text-gray-600">
              Don't just take my word for it - hear from clients who've seen results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="bg-slate-100 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold text-slate-600">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/about" className="px-6 py-3 text-slate-600 border border-slate-600 rounded-md hover:bg-indigo-50">
              View All Testimonials
            </Link>

          </div>

        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Answers to common questions about working together
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">How long does a typical project take?</h3>
              <p className="mt-2 text-gray-600">Project timelines vary based on complexity. A simple website might take 2-3 weeks, while more complex applications can take 2-3 months or more. I'll provide you with a detailed timeline during our initial consultation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">What is your payment structure?</h3>
              <p className="mt-2 text-gray-600">I typically work with a 50% upfront deposit and the remaining 50% upon project completion. For larger projects, we can establish milestone-based payments. All payment terms are clearly outlined in our agreement.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Do you provide ongoing maintenance?</h3>
              <p className="mt-2 text-gray-600">Yes! I offer various maintenance packages to keep your project running smoothly after launch. These can include regular updates, security patches, content changes, and technical support.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/faqs" className="px-6 py-3 bg-slate-400 text-white rounded-md hover:bg-indigo-300">
              View All FAQs
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-slate-600 text-white p-10 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-6">Let's create something amazing together!</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-slate-700 font-medium rounded-md hover:bg-indigo-300"
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;