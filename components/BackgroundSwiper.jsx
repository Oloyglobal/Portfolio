'use client'

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Course data information
const courses = [
  {
    id: 'frontend',
    image: '/api/placeholder/1920/1080',
    title: 'Frontend Development Program',
    overview: 'Transform your career with our immersive Frontend Development Program, designed to equip you with the skills demanded by today\'s digital industry.',
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    highlights: [
      'HTML5 & CSS3 Mastery',
      'JavaScript Fundamentals & Advanced Concepts',
      'Modern Frontend Frameworks (React, Vue, Angular)',
      'UI/UX Integration',
      'Performance Optimization',
      'Version Control & Collaboration'
    ],
    methodology: [
      'Project-based learning with real-world applications',
      'Code reviews and peer programming sessions',
      'Weekly challenges and coding sprints',
      'Industry mentor guidance and feedback'
    ],
    outcomes: [
      'Frontend Developer',
      'UI Developer',
      'JavaScript Developer',
      'React Specialist',
      'Web Application Developer'
    ],
    featured: true
  },
  {
    id: 'backend',
    image: '/api/placeholder/1920/1080',
    title: 'Backend Development Program',
    overview: 'Our Backend Development Program goes beyond teaching programming languages—it builds server-side architects capable of creating robust, scalable applications.',
    duration: '14 weeks',
    level: 'Intermediate',
    highlights: [
      'Server-Side Programming',
      'Database Design & Management',
      'API Architecture',
      'Authentication & Authorization',
      'Cloud Services Integration',
      'Microservices & Container Architecture'
    ],
    methodology: [
      'Server architecture planning and implementation',
      'Progressive complexity in assignments',
      'Database modeling and optimization exercises',
      'API documentation and testing processes',
      'Collaborative microservices development'
    ],
    outcomes: [
      'Backend Developer',
      'API Developer',
      'Node.js Developer',
      'Database Administrator',
      'DevOps Engineer',
      'Full Stack Developer'
    ],
    featured: true
  },
  {
    id: 'php',
    image: '/api/placeholder/1920/1080',
    title: 'PHP Development Program and Laravel Framework',
    overview: 'Our PHP Development Program focuses on building enterprise-grade web applications using PHP and the Laravel framework.',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    highlights: [
      'PHP Foundations',
      'Laravel Architecture',
      'Eloquent ORM',
      'Authentication & Authorization',
      'API Development',
      'Testing & Debugging',
      'WordPress Development'
    ],
    methodology: [
      'Framework-first approach with practical exercises',
      'Incremental application development',
      'Enterprise pattern implementations',
      'Code quality and review processes',
      'Team-based project sprints'
    ],
    outcomes: [
      'PHP Developer',
      'Laravel Specialist',
      'WordPress Developer',
      'Backend Web Developer',
      'Full Stack PHP Developer'
    ],
    featured: false
  },
  {
    id: 'uiux',
    image: '/api/placeholder/1920/1080',
    title: 'UI/UX Design Training Program',
    overview: 'Our UI/UX Design Training Program transforms creative individuals into strategic designers who create meaningful digital experiences.',
    duration: '12 weeks',
    level: 'All Levels',
    highlights: [
      'Design Thinking & UX Research',
      'Information Architecture',
      'Visual Design Principles',
      'Interaction Design',
      'Prototyping & Testing',
      'Design Systems',
      'Collaboration with Developers'
    ],
    methodology: [
      'Human-centered design workshops',
      'Case study analysis and reconstruction',
      'Design critique sessions',
      'Usability testing practice',
      'Portfolio development guidance'
    ],
    outcomes: [
      'UI Designer',
      'UX Designer',
      'Product Designer',
      'Interaction Designer',
      'Design Systems Specialist',
      'Creative Technologist'
    ],
    featured: true
  },
  {
    id: 'fullstack',
    image: '/api/placeholder/1920/1080',
    title: 'Full Stack Development Bootcamp',
    overview: 'Master both frontend and backend technologies in our comprehensive Full Stack Development Bootcamp, preparing you for versatile roles in the tech industry.',
    duration: '16 weeks',
    level: 'Intermediate to Advanced',
    highlights: [
      'Frontend & Backend Integration',
      'Full Application Lifecycle',
      'Database Management',
      'API Development',
      'DevOps Fundamentals',
      'Deployment & Scaling'
    ],
    methodology: [
      'End-to-end project development',
      'Full application architecture design',
      'Integration of multiple technologies and services',
      'Performance optimization across the stack',
      'Collaborative development workflows'
    ],
    outcomes: [
      'Full Stack Developer',
      'Software Engineer',
      'Web Application Developer',
      'Technical Team Lead',
      'Technology Consultant'
    ],
    featured: false
  }
];

const CourseSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Handle screen size for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Content selection based on active tab
  const renderTabContent = (course) => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-4">
            <p className="text-gray-700">{course.overview}</p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <span className="block text-sm font-medium text-blue-800">Duration</span>
                <span className="text-blue-600">{course.duration}</span>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <span className="block text-sm font-medium text-purple-800">Level</span>
                <span className="text-purple-600">{course.level}</span>
              </div>
            </div>
          </div>
        );
      case 'highlights':
        return (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {course.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-green-100 text-green-800 rounded-full flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'methodology':
        return (
          <ul className="space-y-3">
            {course.methodology.map((item, idx) => (
              <li key={idx} className="flex items-start bg-gray-50 p-3 rounded-lg">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-blue-100 text-blue-800 rounded-full flex-shrink-0">{idx + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'outcomes':
        return (
          <div className="space-y-4">
            <p className="font-medium text-gray-700">Career Paths This Program Prepares You For:</p>
            <div className="flex flex-wrap gap-2">
              {course.outcomes.map((item, idx) => (
                <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Banner Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay, Pagination, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          loop
          slidesPerView={1}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.realIndex);
            setActiveTab('overview');
          }}
          className="w-full h-[70vh] md:h-[80vh]"
        >
          {courses.map((course, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex items-center justify-center px-4">
                  <div className="bg-black/30 backdrop-blur-md text-white text-center p-6 md:p-12 rounded-xl max-w-4xl transform transition-all duration-500">
                    {course.featured && (
                      <div className="inline-block px-3 py-1 mb-4 bg-yellow-500 text-black text-xs font-bold uppercase rounded-full">
                        Featured Program
                      </div>

                    )}
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
                      {course.title}
                    </h1>
                    <p className="md:text-lg opacity-90 max-w-2xl mx-auto">
                      {course.overview}
                    </p>

                    <div className="mt-8">
                      <button className="bg-slate-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all mx-2">
                        Apply Now
                      </button>
                      <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-all mx-2">
                        Program Details
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Course Details Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {courses[activeSlide].title} Details
            </h2>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-4 overflow-x-auto pb-2">
                {['overview', 'highlights', 'methodology', 'outcomes'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-2 font-medium text-sm md:text-base whitespace-nowrap transition-colors ${activeTab === tab
                        ? 'text-slate-600 border-b-2 border-gray-600'
                        : 'text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="py-4">
              {renderTabContent(courses[activeSlide])}
            </div>

            {/* Call to Action */}
            <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
              <button className="w-full md:w-auto bg-slate-400 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all">
                Enroll in This Program
              </button>
              <button className="w-full md:w-auto bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg font-medium transition-all">
                Download Syllabus
              </button>
              <button className="w-full md:w-auto border border-gray-300 hover:bg-gray-50 text-gray-600 px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Preview Cards */}
      <div className="container mx-auto pb-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Explore Our Programs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl ${activeSlide === idx ? 'ring-2 ring-blue-500' : ''
                }`}
            >
              <div className="relative h-64">
                <img
                  src={"https://res.cloudinary.com/dtbforfvb/image/upload/v1746765940/Full-Stack-Developer_qxuxbe.avif"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                {course.featured && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-xs font-bold px-2 py-1 rounded-full text-black">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {course.duration}
                  </span>
                  <span className="bg-purple-100 text-slate-800 text-xs px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.overview}</p>
                <button
                  onClick={() => {
                    setActiveSlide(idx);
                    swiperInstance?.slideTo(idx);
                    setActiveTab('overview');
                   
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 rounded text-sm transition-colors"
                >
                  View Program Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Student Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Oluwadare Blessing",
                role: "Frontend Developer at TechCorp",
                image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746765739/front-end-developer_cblqsz.jpg",
                text: "The Frontend Development Program completely transformed my career. Within 3 months of graduating, I landed my dream job with skills that were immediately applicable.",
                program: "Frontend Development"
              },
              {
                name: "Oyedeji Williams",
                role: "Full Stack Developer",
                image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746765940/Full-Stack-Developer_qxuxbe.avif",
                text: "Learning both PHP and Laravel gave me the edge I needed in the job market. The instructors were incredibly knowledgeable and supportive throughout.",
                program: "PHP & Laravel"
              },
              {
                name: "Ibrahim Taoheed",
                role: "UX Designer at Creative Agency",
                image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746766083/UI-UX-design-training-in-Abuja-Nigeria-Africa-Lagos_qqw5zv.jpg",
                text: "The UI/UX program helped me transition from graphic design to UX design seamlessly. The portfolio I built during the program impressed every interviewer.",
                program: "UI/UX Design"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={"https://res.cloudinary.com/dtbforfvb/image/upload/v1746765739/front-end-developer_cblqsz.jpg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="text-sm font-medium text-blue-600">
                  Graduate of {testimonial.program} Program
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto py-16 px-4">
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">

          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "Do I need prior experience to join these programs?",
              answer: "Most of our programs are designed with different entry points. While some advanced courses require basic knowledge, many of our programs include beginner tracks. We recommend scheduling a consultation to find the best fit for your current skill level."
            },
            {
              question: "What is the time commitment required?",
              answer: "Our programs range from 10-16 weeks, with approximately 15-20 hours of commitment per week. We offer both part-time and full-time options to accommodate different schedules."
            },
            {
              question: "Are there job placement opportunities after completion?",
              answer: "Yes! We have a dedicated career services team that works with our students on resume building, interview preparation, and job placement. We also maintain relationships with hiring partners who specifically look for graduates from our programs."
            },
            {
              question: "What payment options are available?",
              answer: "We offer several payment plans including upfront payment with discount, monthly installments, and income sharing agreements for qualifying students. We also provide scholarships for underrepresented groups in tech."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-500">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer  p-4 md:p-6">
                  <span className="text-gray-800">{faq.question}</span>
                  <span className="transition group-open:rotate-180 text-slate-400">
                    <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 px-4 md:px-6 pb-4 md:pb-6 pt-0">
                  {faq.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter & Call to Action */}
      <div className="bg-gradient-to-r from-slate-800 to-gray-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Tech Career?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of successful graduates who transformed their careers through our industry-leading programs.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
            <button className="bg-white text-gray-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all">
              Browse All Programs
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-all">
              Schedule Free Consultation
            </button>
          </div>

          <div className="max-w-lg mx-auto">
            <h3 className="text-xl font-medium mb-3">Stay Updated on New Courses</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-slate-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-xl mb-4">Tech Academy</h4>
              <p className="text-gray-400 mb-4">
                Transforming careers through cutting-edge tech education since 2015.
              </p>
              <div className="flex space-x-4 text-slate-800">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                  <a key={social} href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
                    <span className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full">

                      {/* Icon placeholder */}
                      <span className="sr-only">{social}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2">
                {courses.map((course, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {course.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Blog', 'Free Tutorials', 'Student Success Stories', 'Career Services', 'Events', 'Help Center'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <address className="not-italic text-gray-400 space-y-2">
                <p>123, University of Ibadan Tech Avenue</p>
                <p>San Francisco, CA 94107</p>
                <p className="pt-2">
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">
                    (+123) 80- 3215- 9449
                  </a>
                </p>
                <p>
                  <a href="mailto:info@techacademy.com" className="hover:text-white transition-colors">
                    ismaiheel4real200@gmail.com
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Tech Academy. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Swiper Navigation Styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .swiper-container:hover .swiper-button-next,
        .swiper-container:hover .swiper-button-prev {
          opacity: 1;
        }
        
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: white;
        }
        
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CourseSlider;