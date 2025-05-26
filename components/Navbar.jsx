
'use client';

import 'aos/dist/aos.css';
import Image from 'next/image';

import AOS from 'aos';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isExperiencesDropdownOpen, setIsExperiencesDropdownOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isAchievementsDropdownOpen, setIsAchievementsDropdownOpen] = useState(false);
  const [isSideProjectDropdownOpen, setIsSideProjectDropdownOpen] = useState(false);
  const [isHireMeDropdownOpen, setIsHireMeDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);

  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);
  const featuresRef = useRef(null);
  const achievementsRef = useRef(null);
  const hireMeRef = useRef(null);
  const sideProjectRef = useRef(null);
  const blogRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
    });
    function handleClickOutside(event) {
      if (projectsRef.current && !projectsRef.current.contains(event.target)) {
        setIsProjectsDropdownOpen(false);
      }
      if (experiencesRef.current && !experiencesRef.current.contains(event.target)) {
        setIsExperiencesDropdownOpen(false);
      }
      if (featuresRef.current && !featuresRef.current.contains(event.target)) {
        setIsFeaturesDropdownOpen(false);
      }
      if (achievementsRef.current && !achievementsRef.current.contains(event.target)) {
        setIsAchievementsDropdownOpen(false);
      }
      if (hireMeRef.current && !hireMeRef.current.contains(event.target)) {
        setIsHireMeDropdownOpen(false);
      }
      if (sideProjectRef.current && !sideProjectRef.current.contains(event.target)) {
        setIsSideProjectDropdownOpen(false);
      }
      if (blogRef.current && !blogRef.current.contains(event.target)) {
        setIsBlogDropdownOpen(false);
      }
      if (portfolioRef.current && !portfolioRef.current.contains(event.target)) {
        setIsPortfolioDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className= "bg-gradient-to-r from-blue-950 via-blue-900/30 to-blue-800 bg-opacity-90 shadow-2xs sticky top-0 z-50 backdrop-blur-md" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Logo */}

          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center" data-aos="fade-right">
    
              <div className='w-[200px] h-[50px] bg-center rounded-4xl bg-no-repeat bg-cover bg-[url(https://res.cloudinary.com/dlb3doese/image/upload/v1747996352/ChatGPT_Image_May_23_2025_11_31_02_AM_wknb6o.png)]'></div>
            </Link>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-white hover:text-slate-500 font-medium">Home</Link>
            <Link href="/about" className="text-white hover:text-slate-500 font-medium">About</Link>
            <Link href="/skills" className="text-white hover:text-slate-500 font-medium">Skills</Link>

            {/* Projects Dropdown */}

            <div className="relative" ref={projectsRef}>
              <button
                onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                className="text-white hover:text-gray-400 font-medium flex items-center"
              >
                Projects
                <span className={`ml-1 transition-transform ${isProjectsDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {isProjectsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-md py-0.5 z-50">
                  <Link href="/projects" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">All Projects</Link>
                  <Link href="/services" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Services</Link>

                  {/* Portfolio Dropdown */}

                  <div className="relative mt-2" ref={portfolioRef}>
                    <button
                      onClick={() => setIsPortfolioDropdownOpen(!isPortfolioDropdownOpen)}
                      className="text-gray-700 hover:text-slate-500 font-medium flex items-center w-full px-4 py-2"
                    >
                      Portfolio
                      <span className={`ml-1 transition-transform ${isPortfolioDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {isPortfolioDropdownOpen && (
                      <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-md py-0.5 z-50">
                        <Link href="/portfolio" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Portfolio</Link>
                        <Link href="/portfolios" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Portfolios</Link>
                        <Link href="/portfolioedit" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Portfolio Edit</Link>
                        <Link href="/portfolionew" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Portfolio New</Link>
                        <Link href="/portfolioprocess" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Portfolio Process</Link>
                        <Link href="/portfoliocarddetails" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Portfolio Card Details</Link>
                        <Link href="/portfoliocreateform" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Portfolio Create Form</Link>
                      </div>
                    )}
                  </div>

                  <Link href="/faqs" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">FAQs</Link>
                </div>
              )}
            </div>

            {/* Experiences Dropdown */}

            <div className="relative" ref={experiencesRef}>
              <button
                onClick={() => setIsExperiencesDropdownOpen(!isExperiencesDropdownOpen)}
                className="text-white hover:text-gray-400 font-medium flex items-center"
              >
                Experiences
                <span className={`ml-1 transition-transform ${isExperiencesDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {isExperiencesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-md py-0.5 z-50">
                  <Link href="/experiences" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">All Experiences</Link>
                  <Link href="/resume" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Resume</Link>
                  <Link href="/certifications" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Certifications</Link>

                  {/* Side Project Dropdown */}

                  <div className="relative mt-2" ref={sideProjectRef}>
                    <button
                      onClick={() => setIsSideProjectDropdownOpen(!isSideProjectDropdownOpen)}
                      className="text-gray-700 hover:text-gray-400 font-medium flex items-center w-full px-4 py-2"
                    >
                      SideProject
                      <span className={`ml-1 transition-transform ${isSideProjectDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {isSideProjectDropdownOpen && (
                      <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-md py-0.5 z-50">
                        <Link href="/sideproject" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Side Project</Link>
                        <Link href="/recommendations" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Recommendations</Link>
                        <Link href="/inspiration" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Inspiration</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Features Dropdown */}

            <div className="relative" ref={featuresRef}>
              <button
                onClick={() => setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen)}
                className="text-white hover:text-slate-500 font-medium flex items-center"
              >
                Features
                <span className={`ml-1 transition-transform ${isFeaturesDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {isFeaturesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-md py-0.5 z-50">
                  <Link href="/features" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">All Features</Link>
                  <Link href="/testimonials" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Testimonials</Link>
                  <Link href="/callback" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Callback</Link>

                  {/* Blog Dropdown */}

                  <div className="relative mt-2" ref={blogRef}>
                    <button
                      onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
                      className="text-gray-700 hover:text-slate-500 font-medium flex items-center w-full px-4 py-2"
                    >
                      Blog
                      <span className={`ml-1 transition-transform ${isBlogDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {isBlogDropdownOpen && (
                      <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-md py-0.5 z-50">
                        <Link href="/blogs" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Blogs</Link>
                        <Link href="/blogdtail" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Blog Detail</Link>
                        <Link href="/blogeditor" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Blog Editor</Link>
                        <Link href="/blogeditorupdate" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Blog Editor Update</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Achievements Dropdown */}

            <div className="relative" ref={achievementsRef}>
              <button
                onClick={() => setIsAchievementsDropdownOpen(!isAchievementsDropdownOpen)}
                className="text-white hover:text-slate-500 font-medium flex items-center"
              >
                Achievements
                <span className={`ml-1 transition-transform ${isAchievementsDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {isAchievementsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-md py-0.5 z-50">
                  <Link href="/achievements" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">All Achievements</Link>
                  <Link href="/gallery" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Gallery</Link>
                  <Link href="/case Studies" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Case Studies</Link>

                  {/* Hire Me Dropdown */}

                  <div className="relative mt-2" ref={hireMeRef}>
                    <button
                      onClick={() => setIsHireMeDropdownOpen(!isHireMeDropdownOpen)}
                      className="text-gray-700 hover:text-slate-500 font-medium flex items-center w-full px-4 py-2"
                    >
                      HireMe
                      <span className={`ml-1 transition-transform ${isHireMeDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {isHireMeDropdownOpen && (
                      <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-md py-0.5 z-50">
                        <Link href="/hire Me" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Hire Me</Link>
                        <Link href="/events" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Events</Link>
                        <Link href="/get in Touch" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Get in Touch</Link>
                        <Link href="/resources" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Resources</Link>
                        <Link href="/photography" className="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-slate-900">Photography</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-white hover:text-slate-900 font-medium">Contact</Link>

            {/* CTA Button */}

            <Link href="/get-started">
              <button className="px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-slate-600"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
