

"use client";


import { Fragment, useState } from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa6";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

import { IoLogoTiktok } from "react-icons/io5";
import CountUp from 'react-countup';
import Header from '@/components/Header';


const Home = () => {
  const [overLay, setOverLay] = useState(true);
  
  return (
    <Fragment>


      {overLay && (
        <div className="min-h-screen font-sans">

          {/* Hero Section */}
          <section className="relative text-white py-24 overflow-hidden">
          <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full  h-full object-cover z-[-1]"
  >
    <source src="https://res.cloudinary.com/dlb3doese/video/upload/v1748011669/5240980-uhd_3840_2160_30fps_bjnzle.mp4" />
   
  </video>
         

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Software Developer & Tech Consultant</span>

            <Header/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
               
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link href="/contact" className="bg-white text-gray-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition duration-300 text-center shadow-lg">
                      Let&apos;s Work Together
                    </Link>
                    <Link href="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-gray-600 font-semibold py-4 px-8 rounded-lg transition duration-300 text-center">
                      Explore My Work
                    </Link>
                  </div>

                  <div className="mt-10 flex space-x-6">
                    <Link href="https://www.linkedin.com/in/ismaiheel-dayo-00180b1a1/" target="_blank" className="font-bold hover:text-amber-800">
                      <FaLinkedin size={24} />
                    </Link>
                    <Link href="https://x.com/Salaudeenismai7" target="_blank" className="font-bold hover:text-amber-800">
                      <FaXTwitter size={24} />
                    </Link>
                    <Link href="https://web.facebook.com/salaudeenismaiheel.dayo" target="_blank" className="font-bold hover:text-amber-800">
                      <FaFacebook size={24} />
                    </Link>
                  </div>
                </div>

               

               
              </div>
            </div>

            {/* Floating Tech Stack Pills */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
              <div className="flex flex-wrap justify-center gap-4">
                {['Laravel', 'React.js', 'Next.js', 'Python', 'Flask', 'M-Pesa API', 'MongoDB', 'AWS'].map((tech, index) => (
                  <span key={index} className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <Image
                    src="https://res.cloudinary.com/dlb3doese/image/upload/v1748260754/WhatsApp_Image_2025-05-12_at_7.30.48_AM_sjkcqg.jpg"
                    alt="Ismael at work"
                    width={500}
                    height={500}
                    className="object-cover rounded-lg"
                  />
                  <div className="sm:absolute -bottom-8 -right-8 bg-slate-700 text-white p-6 rounded-2xl shadow-xl sm:max-w-xs  ">
                    <p className="text-lg font-bold">4+ Years of Experience</p>
                    <p className="text-sm">Specialized in African tech solutions</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl  text-slate-950 font-bold mb-6 tracking-tight uppercase">About Me</h2>
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">Crafting Digital Solutions for African Businesses</h3>
                  <p className="text-lg text-blue-950 mb-6 leading-relaxed">
                    With over 7 years of experience in software development, I&apos;ve had the privilege of working with diverse teams
                    and clients across various industries including fintech, e-commerce, and healthcare throughout East Africa.
                  </p>
                  <p className="text-lg text-blue-950 mb-8 leading-relaxed">
                    My journey began with a Bachelor&apos;s degree in History and International Studies from Adekunle Ajasin University In Ondo State. I specialize in creating solutions that address uniquely African challenges,
                    with particular expertise in integrating local payment systems like M-Pesa.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745517156/location-position-icon_fqid46.png" width={32} height={32} alt="Location" className="mb-2" />
                      <h3 className="font-bold text-gray-900">Location</h3>
                      <p className="text-gray-700"> Lagos, Nigeria</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745516903/experience-icon-png-14_lazubx.png" width={32} height={32} alt="Experience" className="mb-2" />
                      <h3 className="font-bold text-gray-900">Experience</h3>
                      <p className="text-gray-700">7+ Years</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745516995/images-availability-icon_xgqwgl.jpg" width={32} height={32} alt="Availability" className="mb-2" />
                      <h3 className="font-bold text-gray-900">Availability</h3>
                      <p className="text-gray-700">Freelance & Full-time</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745516885/images-languages-icon_m42pnt.webp" width={32} height={32} alt="Languages" className="mb-2" />
                      <h3 className="font-bold text-gray-900">Languages</h3>
                      <p className="text-gray-700">English, Yoruba</p>
                    </div>
                  </div>

                  <Link href="/about" className="inline-block bg-slate-600 text-white hover:bg-slate-700 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-md">
                    Learn More About Me
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Skills Section */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-2xl font-thin text-slate-500 tracking-tight uppercase">Technical Skills</h2>
                <h3 className="mt-2 text-4xl font-medium text-gray-800 mb-6">My Development Expertise</h3>
                <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  A comprehensive overview of my technical toolkit that enables me to deliver end-to-end solutions tailored for African and global markets.
                </p>
              </div>
                
              <div className="animate-move-x">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Git", proficiency: 90, icon:"https://res.cloudinary.com/dtbforfvb/image/upload/v1745517897/images-git-icon_l2ye6c.jpg" },
                  { name: "React.js", proficiency: 85, icon: "https://res.cloudinary.com/dtbforfvb/image/upload/v1745518007/images-react-icon_sfv6xk.jpg" },
                  { name: "Next.js", proficiency: 80, icon: "https://res.cloudinary.com/dtbforfvb/image/upload/v1745518052/images-nextjs-icon_nmpdpq.jpg" },
                  { name: "PHP", proficiency: 85, icon: "https://res.cloudinary.com/dtbforfvb/image/upload/v1745518091/images-php-icon_pxhtdi.jpg" },
                  { name: "Laravel", proficiency: 80, icon: "https://res.cloudinary.com/dtbforfvb/image/upload/v1745518127/images-laravel-icon_taba4e.jpg" },
                  { name: "Python", proficiency: 75, icon: "https://res.cloudinary.com/dtbforfvb/image/upload/v1745518193/images-python-icon_twlgsa.webp" },
                  { name: "Flask", proficiency: 70, icon: "https://res.cloudinary.com/dtbforfvb/image/upload/v1745518241/cartoon-flask-icon-png_vgyevj.png" },
                  { name: "MySQL", proficiency: 85, icon: "https://res.cloudinary.com/dtbforfvb/image/upload/v1745518299/database-mysql-icon-1849x2048-81vgyimd_stgfmy.png" },
                  { name: "MongoDB", proficiency: 75, icon: "https://res.cloudinary.com/dtbforfvb/image/upload/v1745518352/383-3838923_open-mongodb-icon_imxsce.png" },
                  { name: "AWS", proficiency: 70, icon: "https://res.cloudinary.com/dtbforfvb/image/upload/v1745518409/images-aws-icon_civcdm.jpg" },
                  { name: "Docker", proficiency: 65, icon: "https://res.cloudinary.com/dtbforfvb/image/upload/v1745518463/images-docker-icon_k1cowr.png" },
                  { name: "JavaScript", proficiency: 90, icon: "https://res.cloudinary.com/dtbforfvb/image/upload/v1745518524/images-javascript-icon_swmsvi.webp" },
                ].map((skill) => (
                  <div key={skill.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <Image src={skill.icon} width={36} height={36} alt={skill.name} className="mr-3" />
                      <h3 className="font-bold text-gray-900">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-1">
                      <div
                        className="bg-slate-600 h-3 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Proficiency</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </section>

          {/* Enhanced Services Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-2xl font-thin text-slate-500 tracking-tight uppercase">
                  Services
                </h2>
                <h3 className="mt-2 text-4xl font-bold text-gray-800 mb-6">What I Offer</h3>
                <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  As a Fullstack Developer specializing in African market solutions, I provide end-to-end development services
                  tailored to meet the unique needs of businesses in the region.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* API Development */}
                <div id="api" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-lg group-hover:bg-slate-300 group-hover:text-white transition-all duration-300">
                      <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746717849/how-api-works-1536x625-API-Development_lqalhi.jpg"
                        alt="API Development" 
                        width={500} 
                        height={500} 
                      />
                    </div>
                  </div>
                  <h3 className="text-xl mb-4  text-slate-500 text-center">API Development</h3>
                  <p className="text-gray-600 mb-6">
                    Building scalable and efficient RESTful APIs that power your applications, enabling seamless integration
                    with third-party services. I use modern frameworks like Express.js, Django REST, and Flask to create
                    robust APIs with comprehensive documentation and testing.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">Express.js</span>
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">Django REST</span>
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">Flask</span>
                  </div>
                </div>

                <div
  id="frontend"
  className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
>
  <div className="flex justify-center mb-6">
    <div className="w-32 sm:w-48 md:w-60 p-4 rounded-lg group-hover:bg-slate-300 group-hover:text-white transition-all duration-300">
      <Image
        src="https://res.cloudinary.com/dlb3doese/image/upload/v1744112035/AI_wew0re.webp"
        alt="Frontend Development"
        width={500}
        height={500}
        className="w-full h-auto"
        unoptimized
        priority
      />
    </div>
  </div>

  <h3 className="text-lg sm:text-xl text-slate-500 mb-4 text-center">
    Frontend Development
  </h3>

  <p className="text-sm sm:text-base text-gray-600 mb-6 text-center sm:text-left">
    Creating dynamic, responsive user interfaces using React.js and JavaScript, ensuring a smooth and engaging user experience.
    I focus on building accessible, performant websites with modern tools like Next.js, Tailwind CSS, and state management
    solutions that delight users and meet business goals.
  </p>

  <div className="flex flex-wrap gap-2 justify-center">
    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-xs sm:text-sm rounded-full">React.js</span>
    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-xs sm:text-sm rounded-full">Next.js</span>
    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-xs sm:text-sm rounded-full">Tailwind CSS</span>
  </div>
</div>


                {/* Database Management */}
                <div id="database" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-lg group-hover:bg-slate-600 group-hover:text-white transition-all duration-300">
                      <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745533408/Database-Management_mjz8ju.png" 
                        width={500} 
                        height={500}  
                        alt="Database Management"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl  text-slate-500 mb-4 text-center">Database Management</h3>
                  <p className="text-gray-600 mb-6">
                    Designing and managing databases to ensure data integrity, efficiency, and security, handling both SQL and NoSQL databases.
                    I create optimized schema designs, implement efficient queries, and ensure proper indexing for maximum performance,
                    while maintaining data security and backup strategies.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">MySQL</span>
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">PostgreSQL</span>
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">MongoDB</span>
                  </div>
                </div>

                {/* Payment Integration */}
                <div id="payment" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-lg group-hover:bg-slate-300 group-hover:text-white transition-all duration-300">
                      <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745533519/Payment-Integration_nio0xh.png"
                        width={500} 
                        height={500} 
                        alt="Payment Integration" 
                      />
                    </div>
                  </div>
                  <h3 className="text-xl text-slate-500 mb-4 text-center">African Payment Integration</h3>
                  <p className="text-gray-600 mb-6">
                    Specializing in integrating local African payment gateways like M-Pesa (Daraja API) to enable secure and seamless transactions, including B2B, C2B, and B2C.
                    I implement secure checkout processes, transaction logging, and reconciliation systems that maintain PCI compliance while
                    providing a smooth customer experience.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">M-Pesa</span>
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">Flutterwave</span>
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">Paystack</span>
                  </div>
                </div>

                {/* Mobile Development */}
                <div id="mobile" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-lg group-hover:bg-slate-600 group-hover:text-white transition-all duration-300">
                      <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745533708/Mobile-Development_td9fov.jpg"
                      width={500} 
                      height={500} 
                        alt="Mobile Development" 
                      />
                    </div>
                  </div>
                  <h3 className="text-xl text-slate-500 mb-4 text-center">Mobile Development</h3>
                  <p className="text-gray-600 mb-6">
                    Building cross-platform mobile applications using React Native and Flutter that provide native-like performance with a single codebase.
                    I focus on creating responsive UIs, implementing device features, and ensuring smooth performance across different screen sizes
                    and operating systems.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">React Native</span>
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">Flutter</span>
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">iOS/Android</span>
                  </div>
                </div>

                {/* Cloud Services */}
                <div id="cloud" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-lg group-hover:bg-slate-300 group-hover:text-white transition-all duration-300">
                      <Image src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745533774/Cloud-Services_fid5xb.jpg"
                        width={500}
                        height={500} 
                        alt="Cloud Services" 
                      />
                    </div>
                  </div>
                  <h3 className="text-xl text-slate-500 mb-4 text-center">Cloud Services</h3>
                  <p className="text-gray-600 mb-6">
                    Deploying and managing applications on cloud platforms like AWS, Google Cloud, and Azure for scalability and reliability.
                    I implement CI/CD pipelines, containerization with Docker and Kubernetes, and serverless architectures to optimize
                    operational efficiency and reduce costs.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">AWS</span>
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">Google Cloud</span>
                    <span className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Stats Section */}
          <section className="py-20 bg-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {/* Projects Completed */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745547546/Projects-Completed_f4irxb.jpg"
                      width={80}
                      height={80}
                      alt="Projects Completed"
                    />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <CountUp end={50} duration={2} />+
                  </div>
                  <div className="text-gray-100">Projects Completed</div>
                </div>

                {/* Happy Clients */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745547637/Happy-Clients_i6aulz.webp"
                      width={80}
                      height={80}
                      alt="Happy Clients"
                    />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <CountUp end={30} duration={2} />+
                  </div>
                  <div className="text-gray-100">Happy Clients</div>
                </div>

                {/* Years Experience */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745547689/Years-Experience_p5mehj.jpg"
                      width={80}
                      height={80}
                      alt="Years Experience"
                    />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <CountUp end={7} duration={2} />+
                  </div>
                  <div className="text-gray-100">Years Experience</div>
                </div>

                {/* Industry Awards */}
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="https://res.cloudinary.com/dtbforfvb/image/upload/v1745547765/Industry-Awards_etvazi.jpg"
                      width={80}
                      height={80}
                      alt="Industry Awards"
                    />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <CountUp end={3} duration={2} />
                  </div>
                  <div className="text-gray-100">Industry Awards</div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Portfolio Preview */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-2xl font-thin text-slate-500 tracking-tight uppercase">My Recent Projects</h2>
                <h3 className="mt-2 text-4xl font-bold text-gray-800 mb-6">Featured Work</h3>
                <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Explore a selection of my recent projects showcasing the range of solutions I've built for clients across Africa and beyond.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Project 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746686714/E-commerce-Platform_mrgukr.jpg"
                      alt="E-commerce Platform"
                      width={500}
                      height={500}
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                      E-commerce
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-slate-500 mb-2">Nigeria Marketplace Platform</h3>
                    <p className="text-gray-600 mb-4">
                      A complete e-commerce solution with M-Pesa integration, enabling local businesses to sell products online with native payment processing.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded-full">Laravel</span>
                      <span className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded-full">React</span>
                      <span className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded-full">M-Pesa API</span>
                    </div>
                    <Link href="/portfolio/kenyan-marketplace" className="text-slate-600 font-medium hover:text-slate-800 transition">
                      View Project Details →
                    </Link>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746687350/Healthcare-App_trfqiv.jpg"
                      alt="Healthcare App"
                      width={500}
                      height={500}
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                      Healthcare
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-slate-500 mb-2">Telehealth Mobile Application</h3>
                    <p className="text-gray-600 mb-4">
                      A React Native telehealth app connecting patients with doctors in remote areas, featuring video consultations and electronic prescriptions.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded-full">React Native</span>
                      <span className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded-full">Node.js</span>
                      <span className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded-full">MongoDB</span>
                    </div>
                    <Link href="/portfolio/telehealth-app" className="text-slate-600 font-medium hover:text-slate-800 transition">
                      View Project Details →
                    </Link>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746690540/Fintech-Solution_b4wboa.jpg"
                      alt="Fintech Solution"
                      width={500}
                      height={500}
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                      Fintech
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-slate-500 mb-2">Microfinance Management System</h3>
                    <p className="text-gray-600 mb-4">
                      A comprehensive platform for Nigerian microfinance institutions to manage loans, track repayments, and analyze portfolio performance.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded-full">Laravel</span>
                      <span className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded-full">Vue.js</span>
                      <span className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded-full">MySQL</span>
                    </div>
                    <Link href="/portfolio/microfinance-system" className="text-slate-600 font-medium hover:text-slate-800 transition">
                      View Project Details →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link href="/portfolio" className="inline-flex items-center bg-slate-600 text-white hover:bg-slate-700 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-md">
                  Explore All Projects
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-2xl font-thin text-slate-500 tracking-tight uppercase">Testimonials</h2>
                <h3 className="mt-2 text-4xl font-bold text-gray-800 mb-6">What Clients Say</h3>
                <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Don't just take my word for it - here's what clients across Africa have to say about working with me.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Testimonial 1 */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute -top-5 left-8 text-5xl text-slate-500">"</div>
                  <p className="text-gray-600 mb-6 relative z-10">
                  Adekunle Akintayo's, deep understanding of African payment systems was invaluable for our startup. He integrated M-Pesa seamlessly into our platform, which significantly improved our conversion rates and customer satisfaction.
                  </p>
                  <div className="flex items-center text-gray-700">
                    <Image
                      src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746713836/Adekunle-Akintayo_jyc5gl.jpg"
                      alt="Adekunle Akintayo"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-500">Adekunle Akintayo</h4>
                      <p className="text-sm text-gray-700">CEO, TechMarket Lagos</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute -top-5 left-8 text-5xl text-slate-500">"</div>
                  <p className="text-gray-600 mb-6 relative z-10">
                  Dr. Emmanuel Adeyemi, Working with Olaniyi was a game-changer for our healthcare platform. His technical expertise and attention to detail ensured we launched on time and within budget. I highly recommend his services.
                  </p>
                  <div className="flex items-center text-gray-700">
                    <Image
                      src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746713969/Dr.Emmanuel-Adeyemi_f7kwi4.jpg"
                      alt="Dr. Emmanuel Adeyemi"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-500">Dr. Emmanuel Adeyemi</h4>
                      <p className="text-sm text-gray-700">Founder, MediConnect Nigeria</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute -top-5 left-8 text-5xl text-slate-500">"</div>
                  <p className="text-gray-600 mb-6 relative z-10">
                Ibrahim Musah's, technical skills are matched only by his project management abilities. He kept our ambitious fintech project on track while delivering high-quality code that has scaled flawlessly with our growth.
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746714151/Ibrahim-Musah_qigebz.jpg"
                      alt="  Ibrahim Musah"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-500">Ibrahim Musah</h4>
                      <p className="text-sm text-gray-700">CTO, Lagos Victoria Island</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-2xl font-thin text-slate-300 tracking-tight uppercase">Get In Touch</h2>
                  <h3 className="mt-2 text-3xl text-gray-500 mb-6">Let's Work Together</h3>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Whether you're looking to build a new application, need technical consultation, or want to discuss potential opportunities, I'd love to hear from you.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-slate-100 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Email</h4>
                        <p className="mt-1 text-gray-600">Oloyedeolaniyi22@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-slate-100 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                        <p className="mt-1 text-gray-600">+234 8145987036</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-slate-100 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">Location</h4>
                        <p className="mt-1 text-gray-600">Lagos, Nigeria</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Connect With Me</h4>
                    <div className="flex space-x-4">
                      <Link href="https://www.linkedin.com" target="_blank" className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition">
                        <FaLinkedin size={20} className="text-slate-600" />
                      </Link>
                      <Link href="https://x.com/Olaniyi223" target="_blank" className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition">
                        <FaXTwitter size={20} className="text-slate-600" />
                      </Link>
                      <Link href="https://web.facebook.com" target="_blank" className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition">
                        <FaFacebook size={20} className="text-slate-600" />
                      </Link>
                      <Link href="https://www.tiktok.com" target="_blank" className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition">
                        <IoLogoTiktok size={20} className="text-slate-600" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-400 p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl text-gray-500 font-bold mb-6">Send Me a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-slate-500 focus:border-slate-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-slate-500 focus:border-slate-500"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-slate-500 focus:border-slate-500"
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-slate-500 focus:border-slate-500"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-slate-600 text-white hover:bg-slate-700 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-md"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Oloyede Olaniyi</h3>
                  <p className="text-gray-300 mb-4">
                    Full-Stack Developer specializing in African market solutions and M-Pesa integration.
                  </p>
                  <div className="flex space-x-4">
                    <Link href="https://www.linkedin.com" target="_blank" className="text-gray-300 hover:text-white">
                      <FaLinkedin size={20} />
                    </Link>
                    <Link href="https://x.com/Olaniyi223" target="_blank" className="text-gray-300 hover:text-white">
                      <FaXTwitter size={20} />
                    </Link>
                    <Link href="https://web.facebook.com" target="_blank" className="text-gray-300 hover:text-white">
                      <FaFacebook size={20} />
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
                    </li>
                    <li>
                      <Link href="/services" className="text-gray-300 hover:text-white transition">Services</Link>
                    </li>
                    <li>
                      <Link href="/portfolio" className="text-gray-300 hover:text-white transition">Portfolio</Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services#api" className="text-gray-300 hover:text-white transition">API Development</Link>
                    </li>
                    <li>
                      <Link href="/services#frontend" className="text-gray-300 hover:text-white transition">Frontend Development</Link>
                    </li>
                    <li>
                      <Link href="/services#database" className="text-gray-300 hover:text-white transition">Database Management</Link>
                    </li>
                    <li>
                      <Link href="/services#payment" className="text-gray-300 hover:text-white transition">Payment Integration</Link>
                    </li>
                    <li>
                      <Link href="/services#cloud" className="text-gray-300 hover:text-white transition">Cloud Services</Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-300">Oloyedeolaniyi22@gmail.com</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-300">+234-(81)- 4598-7036</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-300">Lagos, Nigeria</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                <p className="text-gray-300">© {new Date().getFullYear()} Oloyede Olaniyi. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </Fragment>
  );
};

export default Home;