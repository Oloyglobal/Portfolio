
'use client';

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundSwiper from '@/components/BackgroundSwiper'


const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'technology', name: 'Technology' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'case-studies', name: 'Case Studies' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2025",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to serverless architecture and progressive web apps.",
      category: "web-development",
      author: "Ismael Dayo",
      authorImage: "https://res.cloudinary.com/dtbforfvb/image/upload/v1743313868/Dayo_a2c05m.jpg",
      date: "April 15, 2025",
      readTime: "8 min read",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746545949/IMG-20220922-WA0035_irizd8.jpg",
      featured: false,
      tags: ["React", "NextJS", "Trends"]
    },
    {
      id: 2,
      title: "Mastering Responsive Design Principles",
      excerpt: "Learn essential techniques for creating truly responsive websites that provide optimal user experience across all devices and screen sizes.",
      category: "design",
      author: "Salaudeen Nasdeen Nurudeen",
      authorImage: "https://res.cloudinary.com/dtbforfvb/image/upload/v1744955376/DirectorofResearch_iudg9e.jpg",
      date: "April 10, 2025",
      readTime: "6 min read",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746533789/Client_fgbroq.jpg",
      featured: false,
      tags: ["CSS", "UX", "Mobile First"]
    },
    {
      id: 3,
      title: "How AI is Transforming Digital Marketing",
      excerpt: "Discover how artificial intelligence is revolutionizing marketing strategies and helping businesses connect with customers more effectively.",
      category: "business",
      author: "Adebisi Musefu Adeshina",
      authorImage: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746577320/Digital-Marketing_fg5y7p.jpg",
      date: "April 5, 2025",
      readTime: "10 min read",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746577350/th_xpng0y.jpg",
      featured: false,
      tags: ["AI", "Marketing", "Business Growth"]
    },
    {
      id: 4,
      title: "The Rise of NextJS and React in Modern Web Development",
      excerpt: "Why Next.js has become the framework of choice for React developers and how it's changing the landscape of web application development.",
      category: "web-development",
      author: "Ademola Ibrahim Ayoola",
      authorImage: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746577547/software-development-concept-male-programmer-checking-website-programming-drinking-coffee-254198355_axh0dk.webp",
      date: "March 28, 2025",
      readTime: "7 min read",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746577523/professional-smart-young-asian-male-website-developer-programmer-focusing-his-project-using-graphic-tablet-desk-264935510_bvshny.webp",
      featured: false,
      tags: ["React", "NextJS", "JavaScript"]
    },
    {
      id: 5,
      title: "Essential UI/UX Principles Every Designer Should Know",
      excerpt: "A comprehensive guide to fundamental design principles that create intuitive, engaging, and effective user interfaces.",
      category: "design",
      author: "Dr. Okunola Afeez Adelani",
      authorImage: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746577685/Designer_brqvts.jpg",
      date: "March 22, 2025",
      readTime: "9 min read",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746577715/j517xcuxp4nrdbvkgyon.jpg",
      featured: false,
      tags: ["UI", "UX", "Design Theory"]
    },
    {
      id: 6,
      title: "Web Accessibility: Building Inclusive Digital Experiences",
      excerpt: "Why accessibility matters and how to implement WCAG guidelines to create websites that are usable by everyone.",
      category: "web-development",
      author: "Olaiya Muideen Olalekan",
      authorImage: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746577796/Digital_Experiences_qxog7j.jpg",
      date: "March 18, 2025",
      readTime: "11 min read",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746577839/th_1_n8lotx.jpg",
      featured: false,
      tags: ["Accessibility", "Inclusion", "WCAG"]
    },
    {
      id: 7,
      title: "The Impact of Web3 on Business Models",
      excerpt: "Exploring how blockchain, decentralized apps, and tokenomics are creating new business opportunities and challenges.",
      category: "business",
      author: "Slaudeen Umar",
      authorImage: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746578049/Web3_on_Business_Models_qoulog.jpg",
      date: "March 12, 2025",
      readTime: "12 min read",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746578137/1_xfXDh76G_0mwF6k56Sthuw_hv9qam.png",
      featured: false,
      tags: ["Web3", "Blockchain", "Business"]
    },
    {
      id: 8,
      title: "Performance Optimization Techniques for Modern Websites",
      excerpt: "Practical strategies to boost your website's loading speed, improve Core Web Vitals, and enhance overall performance.",
      category: "technology",
      author: "Wemimo Abdul-wahab",
      authorImage: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746578252/Optimization1_z4pmwo.jpg",
      date: "March 5, 2025",
      readTime: "8 min read",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746578279/Optimization2_cmmnrw.jpg",
      featured: false,
      tags: ["Performance", "Speed", "Core Web Vitals"]
    },
    {
      id: 9,
      title: "Building RESTful APIs with Node.js and Express",
      excerpt: "A step-by-step tutorial on how to create robust and scalable APIs using Node.js and Express framework.",
      category: "tutorials",
      author: "Wemimo Abdul-Rafiu Olawale",
      authorImage: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746578403/RESTful_APIs_with_Node.js_and_Express_x1prax.jpg",
      date: "February 28, 2025",
      readTime: "14 min read",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746578574/Node.js_dzztm0.jpg",
      featured: false,
      tags: ["Node.js", "Express", "API"]
    },
    {
      id: 10,
      title: "How We Increased Conversion Rates by 320% - A Case Study",
      excerpt: "Learn how we helped an e-commerce client dramatically improve their conversion rates through data-driven UX improvements.",
      category: "case-studies",
      author: "Akintayo Muideen",
      authorImage: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746578692/Conversion_Rates_by_320_-_A_Case_Study_zde4wz.jpg",
      date: "February 20, 2025",
      readTime: "9 min read",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746578720/Conversion_Rates_by_320_-_A_Case_Study2_poqs7v.jpg",
      featured: false,
      tags: ["Conversion", "UX", "E-commerce"]
    },
    {
      id: 11,
      title: "Mastering CSS Grid and Flexbox",
      excerpt: "The complete guide to using modern CSS layout techniques to create responsive and dynamic web layouts.",
      category: "tutorials",
      author: "Adebisi Ayoola Ridwan",
      authorImage: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746578853/Mastering_CSS_Grid_and_Flexbox_gftve0.jpg",
      date: "February 15, 2025",
      readTime: "10 min read",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746578910/post-flexbox-css-grids_flrurd.jpg",
      featured: false,
      tags: ["CSS", "Grid", "Flexbox"]
    },
    {
      id: 12,
      title: "The Psychology of Color in Web Design",
      excerpt: "Understanding how color choices affect user perception and behavior on your website.",
      category: "design",
      author: " Balogun David",
      authorImage: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746579015/COLOR-PSYCHOLOGY-IN-WEB-DESIGN_d2-768x816_zhqrdd.jpg",
      date: "February 8, 2025",
      readTime: "7 min read",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746579045/Psychology_of_Color_in_Web_Design_zcebme.png",
      featured: false,
      tags: ["Design", "Psychology", "Color Theory"]
    }
  ];

  const featuredPost = {
    id: 100,
    title: "Building Scalable Web Applications with Microservices Architecture",
    excerpt: "Learn how microservices architecture can help you build more maintainable, scalable, and resilient web applications. This comprehensive guide covers the benefits, challenges, and best practices for implementing microservices in your next project.",
    category: "technology",
    author: "Chinua Achebe",
    authorImage: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746546071/Chinua-Achebe_mmcbsr.jpg",
    date: "April 20, 2025",
    readTime: "15 min read",
    image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746545783/author-name_jygqik.jpg",
    featured: true,
    tags: ["Microservices", "Architecture", "Scalability"]
  };

  const filteredPosts = filter === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === filter);

  const popularAuthors = [
    {
      name: "Mr. Nas",
      role: "Lead Developer",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746579215/maxresdefaultLead_Developer_gtklib.jpg",
      articles: 24,
      followers: "12.5K"
    },
    {
      name: "Adekunle Johnson",
      role: "UX Designer",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746579337/Scholarship-on-digital-skills-training-in-Abuja-Nigeria-1-1UX_Designer_dkdvwk.jpg",
      articles: 18,
      followers: "8.3K"
    },
    {
      name: "Woleola Alex",
      role: "Tech Consultant",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746579423/aliconsultancyTech_Consultant_zkgsxn.png",
      articles: 15,
      followers: "9.7K"
    },
    {
      name: "Dr. Adebayo Oluwaseun",
      role: "UI Designer",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746579551/UI_Designer......._wn1uuc.jpg",
      articles: 20,
      followers: "11.2K"
    }
  ];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');

  };

  const paginate = (pageNumber) => {
    setPage(pageNumber);

  };

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <BackgroundSwiper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Enhanced Header Section */}

        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-32 h-32 bg-indigo-100 rounded-full filter blur-3xl opacity-70"></div>
          </div>

          <div>
            <div className="relative">
              <span className="inline-block px-4 py-1 bg-indigo-100 text-slate-800 text-sm font-medium rounded-full mb-4">
                Updated Weekly
              </span>
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-600">
                  Insights & Ideas
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Insights, guides, and industry expertise to help you navigate the digital landscape and grow your business.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="#featured"
                  className="px-6 py-3 bg-slate-600 text-white font-medium rounded-md hover:bg-slate-700 transition-colors"
                >
                  Featured Articles
                </Link>
                <Link
                  href="#categories"
                  className="px-6 py-3 bg-white text-slate-600 border border-slate-600 font-medium rounded-md hover:bg-indigo-50 transition-colors"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="text-gray-500">Our readers:</span>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="w-8 h-8 relative rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={`https://res.cloudinary.com/dtbforfvb/image/upload/v1746539504/hero-Reader_az8fwu.jpg`}
                    alt="Reader"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-slate-600 font-medium">+ 50k monthly readers</span>
          </div>
        </div>

        {/* Featured Post */}

        <div id="featured" className="mb-16">
          <div>
            <div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Image
                      src={"https://res.cloudinary.com/dtbforfvb/image/upload/v1746539932/Featured-blog-post_yysotn.jpg"}
                      alt="Featured blog post"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="md:w-1/2 p-8 gap-6 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-slate-600 mb-2">
                      <span className="font-semibold">FEATURED</span>
                      <span className="mx-2">•</span>
                      <span>{featuredPost.category.replace('-', ' ').replace(/\b\w/g, char => char.toUpperCase())}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 relative rounded-full overflow-hidden mr-3">
                        <Image
                          src={"https://res.cloudinary.com/dtbforfvb/image/upload/v1746543197/featuredPost-author_br8bdc.jpg"}
                          alt={featuredPost.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium">{featuredPost.author}</p>
                        <p className="text-gray-500 text-sm">{featuredPost.date} • {featuredPost.readTime}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-indigo-100 text-slate-800 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href="#" className="inline-flex items-center text-slate-600 font-medium hover:text-gray-800">
                      Read Full Article
                      <Image
                        src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746540158/right-arrow-icon-free_aarkfs.webp"
                        alt="Arrow right"
                        width={24}
                        height={24}
                        className="ml-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Image
                src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746462113/vector-search-icon_i4cmse.jpg"
                alt="Search"
                width={20}
                height={20}
              />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blogs..."
              className="w-full pl-10 pr-2 py-2 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <Image
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746542889/Clear-search_yyjhdi.webp"
                  alt="Clear search"
                  width={16}
                  height={16}
                />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}

        <div id="categories" className="flex flex-wrap items-center justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${filter === category.id
                  ? 'bg-slate-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Popular Authors Section */}
        <div className="mt-20 mb-16">          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meet Our Top Contributors</h2>         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">           {popularAuthors.map((author, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 relative rounded-full overflow-hidden mb-4">
              <Image
                src={"https://res.cloudinary.com/dtbforfvb/image/upload/v1746546071/Chinua-Achebe_mmcbsr.jpg"}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-lg font-bold text-gray-900">{author.name}</h3>
            <p className="text-slate-600 mb-3">{author.role}</p>
            <div className="flex space-x-4 mb-4">
              <div className="flex items-center">
                <Image
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746757358/DIGITAL-LENDING-IN-NIGERIA-Articles_oyy8dg.jpg"
                  alt="Articles"
                  width={16}
                  height={16}
                  className="mr-1"
                />
                <span className="text-gray-500 text-sm">{author.articles} Articles</span>
              </div>

              <div className="flex items-center">
                <Image
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746757565/Followers_ilsdgf.jpg"
                  alt="Followers"
                  width={16}
                  height={16}
                  className="mr-1"
                />
                <span className="text-gray-500 text-sm">{author.followers} Followers</span>
              </div>

              <div className="flex items-center">
                <Image
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746579423/aliconsultancyTech_Consultant_zkgsxn.png"
                  alt="Followers"
                  width={16}
                  height={16}
                  className="mr-1"
                />
                <span className="text-gray-500 text-sm">{author.followers} Followers</span>
              </div>



            </div>
            <button className="mt-2 px-4 py-2 bg-indigo-50 text-slate-600 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors">
              Follow
            </button>
          </div>
        ))}
        </div>
        </div>

        {/* Enhanced Newsletter Subscription */}

        <div className="mt-20 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-800 rounded-xl shadow-xl overflow-hidden relative">

          <div className="absolute inset-0 opacity-10">

            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://res.cloudinary.com/dtbforfvb/image/upload/v1746581349/marcbook_osvi6p.jpg')] bg-no-repeat bg-cover opacity-30"></div>

          </div>

          <div className="px-6 py-12 md:py-16 md:px-12 text-center text-white relative z-10">
            <span className="inline-block px-4 py-1 bg-slate-400 bg-opacity-30 text-white text-sm font-medium rounded-full mb-4">
              Stay In The Loop
            </span>

            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter Community</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest industry insights, tips, and resources directly to your inbox.
              We deliver fresh content weekly to help you stay ahead of the curve.
            </p>

            <div className="max-w-xl mx-auto">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md text-black-600 focus:outline-none focus:ring-2 focus:ring-white-600"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors flex items-center justify-center"
                >
                  {isSubscribed ? (
                    <>
                      <Image
                        src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746548001/Success_qeu42p.jpg"
                        alt="Success"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Subscribed!
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
              <div className="mt-6 flex flex-wrap justify-center gap-6">
                <div className="flex items-center rounded">
                  <Image
                    src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746548235/Calendar_l8njvl.jpg"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="text-slate-200">Weekly Updates</span>
                </div>
                <div className="flex items-center">
                  <Image
                    src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746549153/Lock_xtfxaw.jpg"
                    alt="Lock"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="text-slate-200">No Spam Ever</span>
                </div>
                <div className="flex items-center">
                  <Image
                    src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746549271/i-love-nigeria-heart-shape-national-country-flag-icon-MX4578_fkckms.jpg"
                    alt="Heart"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="text-indigo-200">20K+ Subscribers</span>
                </div>
              </div>
              <p className="text-xs text-indigo-200 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Podcasts Section */}
        <div className="mt-20 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Recent Podcasts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <Image
                    src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746756955/Ladies-Front-End-Developer_vvb0nq.png"
                    alt={`Podcast episode ${item}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate bg-opacity-40 flex items-center justify-center">
                    <Image
                      src=""
                      alt="Play"
                      width={200}
                      height={500}
                    />
                  </div>
                </div>

                <div className="md:w-2/3 p-6">
                  <span className="text-sm text-slate-600 mb-2 block">Episode {item + 14}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item === 1 ? "The State of Frontend Development in 2025" : "Building a Tech Company from Scratch"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item === 1
                      ? "Join our panel of experts as they discuss the latest trends in frontend development and what skills will be most in-demand."
                      : "Learn how successful startup founders navigated the challenges of building a tech company and their advice for aspiring entrepreneurs."}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {item === 1 ? "Apr 18, 2025" : "Apr 11, 2025"} • {item === 1 ? "45" : "38"} min
                    </span>
                    <Link href="#" className="text-slate-600 font-medium hover:text-gray-800 flex items-center">
                      Listen now
                      <Image
                        src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746582924/listern-more_pzh2df.jpg"
                        alt="Listen"
                        width={16}
                        height={16}
                        className="ml-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Card */}
        
        <div className="mt-20 mb-16 bg-gradient-to-r from-slate-600 to-slate-600 rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex items-center relative">
            <div className="absolute inset-0 bg-slate-500 bg-opacity-20 z-0"></div>
            <div className="md:w-2/3 p-8 md:p-12 relative z-10">
              <span className="inline-block px-4 py-1 bg-white bg-opacity-20 text-white text-sm font-medium rounded-full mb-4">
                Let's Collaborate
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate mb-4">Ready to Start Your Project?</h2>
              <p className="text-slate-100 mb-6 md:text-lg">
                Let's discuss how we can help bring your ideas to life with our expert team of designers and developers.
                We specialize in creating exceptional digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#" className="inline-block px-6 py-3 bg-gray text-slate-600 font-medium rounded-md hover:bg-gray-100 transition-colors text-center">
                  Get in Touch
                </Link>
                <Link href="#" className="inline-block px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors text-center">
                  View Portfolio
                </Link>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="w-8 h-8 relative rounded-full overflow-hidden border-2 border-white">
                      <Image
                        src={`https://res.cloudinary.com/dtbforfvb/image/upload/v1746756250/lawyer-discussing-legal-case-client-178847349_rpshnp.webp`}
                        alt="Client"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-indigo-100">
                  <span className="block font-medium">Trusted by 200+ clients</span>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Image
                          key={star}
                          src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746755726/star-3d-illustration_tamw0x.webp"
                          alt="Star"
                          width={16}
                          height={16}
                          className="mr-1"
                        />
                      ))}
                    </div>
                    <span className="text-sm">4.9/5 average rating</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 relative h-64 md:h-auto">
              <Image
                src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746755411/contact-us_wlo8oz.jpg"
                alt="Contact us"
                width={500}
                height={500}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Pagination */}

        <div className="mt-12 flex flex-col items-center">
          <div className="text-sm text-gray-800 mb-4">
            Showing <span className="font-medium">1</span> to <span className="font-medium">12</span> of <span className="font-medium">48</span> articles
          </div>
          <nav className="flex items-center bg-gray-500 px-4 py-3 rounded-lg shadow-sm">
            <button
              onClick={() => paginate(page > 1 ? page - 1 : 1)}
              disabled={page === 1}
              className={`px-3 py-1 rounded-md mr-2 flex items-center ${page === 1 ? 'text-gray-300 cursor-not-allowed' : 'bg-white text-gray-500 hover:text-slate-600'
                }`}
            >
              <Image
                src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746754063/previous-page-buttons-sign-label-speech-bubble-previous-page-free-vector_thbvlr.jpg"
                alt="Previous page"
                width={20}
                height={20}
              />
              <span className="ml-1 hidden sm:inline">Previous</span>
            </button>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => {

              if (
                number === 1 ||
                number === 8 ||
                (number >= page - 1 && number <= page + 1)
              ) {
                return (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 rounded-md mx-1 ${page === number
                        ? 'bg-slate-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    {number}
                  </button>
                );
              } else if (
                (number === page - 2 && page > 3) ||
                (number === page + 2 && page < 7)
              ) {
                return <span key={number} className="px-3 py-1 mx-1">...</span>;
              }
              return null;
            })}

            <button
              onClick={() => paginate(page < 8 ? page + 1 : 8)}
              disabled={page === 8}
              className={`px-3 py-1 rounded-md ml-2 flex items-center ${page === 8 ? 'text-gray-300 cursor-not-allowed' : 'bg-white text-gray-500 hover:text-slate-600'
                }`}
            >
              <span className="mr-1 hidden sm:inline">Next</span>
              <Image
                src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746754262/next-page-buttons-sign-label-speech-bubble-next-page-vector_wr3jp4.jpg"
                alt="Next page"
                width={20}
                height={20}
              />
            </button>
          </nav>
          <div className="mt-4">
            <select
              className="px-3 py-2 border border-gray-300 rounded-md text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-slate-700"
              value={12}
              onChange={() => { }}
            >
              <option value={12}>12 per page</option>
              <option value={24}>24 per page</option>
              <option value={48}>48 per page</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t text-slate-900 pt-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">About Us</h3>
              <p className="text-gray-600 mb-4">
                We're a team of passionate writers, developers, and designers sharing our knowledge and expertise with the world.
              </p>
              <div className="flex space-x-4 rounded-full">
                {["Twitter", "LinkedIn", "Facebook", "Instagram"].map((social, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-slate-900">
                    <Image
                      src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746751952/corporate-website-banner-design-us-picture-which-can-be-used-our-page-generally-background-some-very-174928874_nesmgl.webp"
                      alt={social}
                      width={100}
                      height={100}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link href="#" className="text-gray-900 hover:text-slate-900">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                {["eBooks", "Webinars", "Podcasts", "Case Studies", "Documentation"].map((resource, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-600 hover:text-slate-900">
                      {resource}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Image
                    src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746477933/Email_av0u5q.jpg"
                    alt="Email"
                    width={20}
                    height={20}
                    className="mr-2 mt-1"
                  />
                  <span className="text-gray-600">ismaiheel4real2008@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746752451/phone-icon-in-trendy-flat-style-free_tg9o14.webp"
                    alt="Phone"
                    width={20}
                    height={20}
                    className="mr-2 mt-1"
                  />
                  <span className="text-gray-600">+234-(80)-3215 - 9449 </span>
                </li>
                <li className="flex items-start">
                  <Image
                    src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746753001/document-clipart-disorderly-1_x0ri8g.png"
                    alt="Location"
                    width={20}
                    height={20}
                    className="mr-2 mt-1"
                  />
                  <span className="text-gray-600">123, University of Ibadan Tech Avenue, San Francisco, CA 94107</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-slate-800">© 2025 Your Blog Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
export default Blog;



