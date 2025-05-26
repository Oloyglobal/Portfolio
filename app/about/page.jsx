"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaGraduationCap, 
  FaCertificate, 
  FaAward,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDownload
} from 'react-icons/fa';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Skills data

  const frontendSkills = [
    { name: 'JavaScript', percentage: 90 },
    { name: 'React.js', percentage: 85 },
    { name: 'Next.js', percentage: 80 },
    { name: 'HTML5/CSS3', percentage: 95 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'Vue.js', percentage: 75 },
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 85 },
    { name: 'Python', percentage: 75 },
    { name: 'Django', percentage: 70 },
    { name: 'Express.js', percentage: 85 },
    { name: 'PHP/Laravel', percentage: 65 },
    { name: 'Java/Spring', percentage: 60 },
  ];

  const databaseSkills = [
    { name: 'MongoDB', percentage: 80 },
    { name: 'PostgreSQL', percentage: 75 },
    { name: 'MySQL', percentage: 80 },
    { name: 'Redis', percentage: 70 },
    { name: 'Firebase', percentage: 75 },
    { name: 'GraphQL', percentage: 65 },
  ];

  const devOpsSkills = [
    { name: 'Docker', percentage: 70 },
    { name: 'AWS', percentage: 75 },
    { name: 'CI/CD', percentage: 70 },
    { name: 'Kubernetes', percentage: 60 },
    { name: 'Git/GitHub', percentage: 90 },
    { name: 'Linux', percentage: 75 },
  ];

  const services = [
    {
      icon: <FaCode size={24} />,
      title: "Frontend Development",
      description: "Creating responsive, intuitive user interfaces using modern frameworks like React, Next.js, and Vue.js.",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746628775/Frontend-Development_m8umem.jpg",
    },
    {
      icon: <FaServer size={24} />,
      title: "Backend Development",
      description: "Building robust server-side applications and RESTful APIs using Node.js, Python, and other technologies.",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746628907/Backend-Development_ps8wvl.jpg"
    },
    {
      icon: <FaDatabase size={24} />,
      title: "Database Design",
      description: "Designing efficient, scalable database structures with MongoDB, PostgreSQL, and other solutions.",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746629125/database_development2-scaled_wjr387.jpg   "
    },
    {
      icon: <FaServer size={24} />,   
      title: "Cloud Solutions",
      description: "Deploying and managing applications on AWS, Azure, and other cloud platforms with security and scalability in mind.",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746629175/Cloud-Solutions_eppqks.jpg"
    },
  ]; 

  const awards = [
    {
      title: "Best Tech Innovation Award",
      organization: "Africa Tech Summit",
      year: "2023",
      description: "Recognized for developing an innovative e-commerce solution for small businesses."
    },
    {
      title: "Developer of the Year",
      organization: "Lagos Tech Week",
      year: "2022",
      description: "Awarded for contributions to the local tech community and open-source projects."
    },
    {
      title: "Hackathon Winner",
      organization: "Google Developer Groups",
      year: "2021",
      description: "First place for creating a sustainable agriculture monitoring solution."
    }
  ];

  const projects = [
    {
      title: "AfriLearn Platform",
      description: "An open-source e-learning platform tailored for African educational contexts with limited internet connectivity. Features offline capabilities and low-bandwidth optimizations.",
      technologies: ["React", "Node.js", "MongoDB", "PWA"],
      link: "/portfolio/afri-learn",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746720580/AfriLearn-Platform_tyyuxy.png",
      alt: "AfriLearn Platform",
    },
    {
      title: "M-Farmer App",
      description: "A mobile application that connects small-scale farmers with agricultural experts, market information, and weather forecasts. Supports multiple local languages.",
      technologies: ["React Native", "Firebase", "Redux", "Maps API"],
      link: "/portfolio/m-farmer",
      image:"https://res.cloudinary.com/dtbforfvb/image/upload/v1747054884/M-Farmer-App_o3n7t2.png",
      alt:"M-Farmer App"
    },
    {
      title: "Dev Resource Hub",
      description: "A collaborative platform for developers in Africa to share resources, opportunities, and mentorship connections. Features community forums and event listings.",
      technologies: ["Next.js", "Tailwind CSS", "GraphQL", "Auth0"],
      link: "/portfolio/dev-hub",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747054977/Dev-Resource-Hub_sj0dsr.webp",
      alt:"Dev Resource Hub"
    }
  ];

  const experiences = [
    {
      title: "Senior Fullstack Developer",
      company: "Tech Innovations Ltd",
      period: "2022 - Present",
      location: "Lagos, Nigeria",
      description: "Leading the development of enterprise-level web applications using React.js, Node.js, and MongoDB. Implementing CI/CD pipelines and mentoring junior developers.",
      achievements: [
        "Architected and deployed scalable microservices architecture",
        "Led a team of 5 developers on the flagship product development",
        "Reduced application loading time by 60% through optimization",
        "Implemented security best practices and GDPR compliance"
      ]
    },
    {
      title: "Fullstack Developer",
      company: "Digital Solutions Lagos",
      period: "2019 - 2022",
      location: "Lagos, Nigeria",
      description: "Developed and maintained multiple web applications using React, Django, and PostgreSQL. Implemented RESTful APIs and integrated third-party services.",
      achievements: [
        "Built custom CMS solutions for content management",
        "Integrated payment gateways for e-commerce platforms",
        "Optimized database queries for improved performance",
        "Implemented automated testing and quality assurance processes"
      ]
    },
    {
      title: "Frontend Developer",
      company: "WebTech Startups",
      period: "2017 - 2019",
      location: "Lagos, Nigeria",
      description: "Focused on building responsive and interactive user interfaces using HTML, CSS, and JavaScript. Worked with React.js to create single-page applications.",
      achievements: [
        "Developed mobile-first responsive designs",
        "Created reusable component libraries",
        "Implemented state management using Redux",
        "Collaborated on design system implementation"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "Adekunle Ajasin University",
      period: "2015 - 2019",
      description: "Graduated with second Class Honors. Specialized in Software Engineering and Database Systems.",
      achievements: [
        "Dean's List all semesters",
        "President of Computer Science Club",
        "Participated in ACM programming competitions"
      ]
    }
  ];

  const certifications = [
    {
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746880548/LogiTech-Solutions_blzsmr.jpg",
      alt: "AWS Certified Solutions Architect",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2020", 
      credentialId: "AWS-ASA-12345",
      description: "Certified in designing distributed systems on AWS, including deploying applications that are highly available, fault-tolerant, and scalable.",
    },

    {
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747057365/Full-Stack-Web-Development_eexxsy.jpg",
      alt: "Full Stack Web Development",
      title: "Full Stack Web Development",
      issuer: "Udacity Nanodegree",
      year: "2018",
      credentialId: "FSND-12345",
      description: "Intensive program covering modern web development technologies including React, Node.js, Express, and MongoDB.",
    },

    {
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747057191/React-Native-Specialist_jyofbw.jpg",
      alt: "React Native Specialist",
      title: "React Native Specialist",
      issuer: "React Native Academy",
      year: "2024",
      credentialId: "RN-SPEC-4578",
      description: "Advanced course covering cross-platform mobile app development using React Native, Redux, and native device features.",
    }
  ];

  const testimonials = [
    {
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746722467/Babatunde-Johnson_g36yih.jpg",
      alt: "Babatunde Johnson",
      name: "Babatunde Johnson",
      title: "CEO, TechStart Lagos",
      testimonial: "Babatunde Johnson transformed our business with his exceptional development skills. His attention to detail and ability to understand our needs resulted in a platform that exceeded all expectations. Highly recommended!",
      rating: 5
    },

    {
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747057852/Michael-Olusegun_xmwnhn.jpg",
      alt: "Michael Olusegun",
      name: "Michael Olusegun",
      title: "Project Manager, Digital Africa",
      testimonial: "Working with Michael Olusegun was a game-changer for our project. His technical expertise and problem-solving abilities helped us overcome significant challenges. He delivers high-quality work consistently and communicates effectively.",
      rating: 5
    },

    {
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747058263/Atanda-Omowumi_jcn9ev.jpg",
      alt: "Atanda Omowumi",
      name: "Atanda Omowumi",
      title: "Founder, EduTech Initiative",
      testimonial: "Atanda Omowumi's work on our educational platform was outstanding. He understood the unique requirements of our nonprofit and delivered a solution that has helped thousands of students access quality education. His dedication to social impact projects is remarkable.",
      rating: 5
    }

  ];

  const communityInvolvement = [
    {
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746723019/Mentoring-Coaching-Public-Speaker-WordPress-Themes_hqle9x.jpg",
      alt:"Tech Meetup Organizer",
      title: "Tech Meetup Organizer",
      description: "Founder and organizer of Nigeria JavaScript Meetup, a monthly gathering of developers to share knowledge and network.",
    },

    {
      image:"https://res.cloudinary.com/dtbforfvb/image/upload/v1747059022/Mentor_Speaker_b9sthx.jpg",
      alt:"Mentor & Speaker",
      title: "Mentor & Speaker",
      description: "Active mentor for junior developers and regular speaker at regional tech conferences, including AfricaCom and East Africa DevOps.",
    },

    {
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747059197/Open-Source-Contributor_ev6cot.jpg",
      alt:"Open Source Contributor",
      title: "Open Source Contributor",
      description: "Regular contributor to open-source projects, with a focus on frameworks and libraries that benefit African developers and users.",
    }

  ];

  const technologie = [
    {
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1747060123/JavaScript_pmkwir.jpg",
      alt: "JavaScript",
      name: "JavaScript",
      icon: <FaCode size={24} />,
    },

    {
      name: "React.js",
      icon: <FaCode size={24} />,
    },

    {
      name: "Node.js",
      icon: <FaServer size={24} />,
    },

    {
      name: "MongoDB",
      icon: <FaDatabase size={24} />,
    },
    {
      name: "AWS",
      icon: <FaServer size={24} />,
    },

    {
      name: "Docker",
      icon: <FaServer size={24} />,
    }

  ];
  
  const techStack = Array.from({ length: 12 }, (_, i) => ({
    name: `Technology ${i + 1}`,
  }));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-600"></div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}

      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dlb3doese/image/upload/v1747836904/pexels-mart-production-7709192_ixqq4o.jpg ')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/90 to-slate-700/90"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Oloyede Ibrahim Olaniyi</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Full-Stack Developer | Tech Innovator | Digital Problem Solver
          </p>

          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-indigo-200 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white hover:text-indigo-200 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://x.com/Olaniyi223" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-indigo-200 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <Link href="/contact" className="bg-white text-slate-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition duration-300">
              Hire Me
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-md transition duration-300">
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Bio Section */}

      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://res.cloudinary.com/dlb3doese/image/upload/v1747828795/pexels-diva-plavalaguna-6149793_mp8otx.jpg"
                  alt="Oloyede Olaniyi portrait"
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image 
                  src="https://res.cloudinary.com/dlb3doese/image/upload/v1748260754/WhatsApp_Image_2025-05-12_at_7.30.48_AM_sjkcqg.jpg"
                  alt="Oloyede Olaniyi portrait"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="md:pl-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-700 mb-4">
                Hello! I'm Oloyede Olaniyi, a passionate fullstack developer with over 8 years of experience building web and mobile applications.
                I specialize in creating responsive, user-friendly digital solutions that solve real-world problems, particularly for businesses and organizations across Africa.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With expertise in modern JavaScript frameworks, backend technologies, and cloud solutions,
                I bring a comprehensive approach to every project - from concept to deployment and maintenance.
                I'm particularly passionate about creating technology that makes a positive impact in emerging markets.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full">
                  <span className="font-medium">8+ Years Experience</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full">
                  <span className="font-medium">50+ Projects Completed</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full">
                  <span className="font-medium">15+ Happy Clients</span>
                </div>
              </div>
              
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center gap-2 bg-slate-600 text-white hover:bg-slate-700 font-medium py-3 px-6 rounded-md transition duration-300"
              >
                <FaDownload size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}

      <section className="py-20 bg-gray-50" id="experience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              My journey through the tech landscape, building solutions and leading development teams.
            </p>
          </div>

          <div className="relative">

            {/* Timeline line */}

            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>
            
            {/* Timeline items */}

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-slate-500 border-4 border-white"></div>
                  
                  <div className="flex-1 md:w-1/2"></div>
                  
                  <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                          <p className="text-slate-600 font-medium">{exp.company}</p>
                        </div>
                        <div className="bg-indigo-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      
                      <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-600">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Progress Bars */}

      <section className="py-20 bg-white" id="skills">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              My technical toolkit built over years of development experience across various technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">

            {/* Frontend Skills */}

            <div>
              <div className="flex items-center mb-6">
                <FaCode size={24} className="text-slate-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Frontend Development</h3>
              </div>
              <div className="space-y-4">
                {frontendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-slate-600 h-2 rounded-full" 
                        style={{ width: `${skill.percentage}%` }}
                        aria-valuenow={skill.percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        role="progressbar"
                        aria-label={`${skill.name} skill level`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}

            <div>
              <div className="flex items-center mb-6">
                <FaServer size={24} className="text-slate-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Backend Development</h3>
              </div>
              <div className="space-y-4">
                {backendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-slate-600 h-2 rounded-full" 
                        style={{ width: `${skill.percentage}%` }}
                        aria-valuenow={skill.percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        role="progressbar"
                        aria-label={`${skill.name} skill level`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Database Skills */}

            <div>
              <div className="flex items-center mb-6">
                <FaDatabase size={24} className="text-slate-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Database & Data</h3>
              </div>
              <div className="space-y-4">
                {databaseSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-slate-600 h-2 rounded-full" 
                        style={{ width: `${skill.percentage}%` }}
                        aria-valuenow={skill.percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        role="progressbar"
                        aria-label={`${skill.name} skill level`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps Skills */}

            <div>
              <div className="flex items-center mb-6">
                <FaServer size={24} className="text-slate-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">DevOps & Cloud</h3>
              </div>
              <div className="space-y-4">
                {devOpsSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-slate-600 h-2 rounded-full" 
                        style={{ width: `${skill.percentage}%` }}
                        aria-valuenow={skill.percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        role="progressbar"
                        aria-label={`${skill.name} skill level`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Services I Offer</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized development services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-slate-600 mr-3">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}

      <section className="py-20 bg-white" id="education">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Education & Certifications</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              My academic background and professional certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Education Section */}

            <div>
              <div className="flex items-center mb-8">
                <FaGraduationCap size={24} className="text-slate-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gray-500">
                    <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-gray-600 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-500 mb-4">{edu.period}</p>
                    <p className="text-gray-600 mb-4">{edu.description}</p>
                    
                    <h5 className="font-semibold text-gray-800 mb-2">Notable Achievements:</h5>
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-600">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications Section */}

            <div>
              <div className="flex items-center mb-8">
                <FaCertificate size={24} className="text-gray-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
              
              <div className="space-y-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-16 w-16 relative mr-4">
                        <Image 
                          src={cert.image}
                          alt={`${cert.title} badge`}
                        width={100}
                        height={100}
                          sizes="64px"
                          className="object-contain"
                        />
                      </div>


                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{cert.title}</h4>
                        <p className="text-gray-600 font-medium">{cert.issuer}</p>
                        <p className="text-gray-500 mb-2">Issued: {cert.year} · ID: {cert.credentialId}</p>
                        <p className="text-gray-600">{cert.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}

      <section className="py-20 bg-gray-50" id="featured-projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Highlights from my portfolio of development work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-indigo-100 text-slate-700 text-sm rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={project.link} className="inline-block text-slate-600 hover:text-gray-700 font-medium">
                    View Project Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/portfolio" className="inline-flex items-center gap-2 bg-slate-600 text-white hover:bg-gray-700 font-medium py-3 px-6 rounded-md transition duration-300">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}

      <section className="py-20 bg-white" id="awards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Awards & Recognition</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Honors received throughout my professional journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slate-500 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <FaAward size={24} className="text-amber-950 mr-3" />
                  <h3 className="text-xl font-bold text-amber-950">{award.title}</h3>
                </div>
                <p className="text-600 text-slate-500 font-medium">{award.organization}</p>
                <p className="text-gray-500 mb-4">{award.year}</p>
                <p className="text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      <section className="py-20 bg-gradient-to-r front-gray-900 to-gray-900" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Client Testimonials</h2>
            <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
              What clients and collaborators say about working with me.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 relative rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                
                <p className="text-gray-700 italic">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}

      <section className="py-20 bg-white" id="community">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Community Involvement</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              My contributions to the tech ecosystem and broader community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityInvolvement.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Carousel */}

      <section className="py-16 bg-gray-50" id="tech-stack">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Technologies I Work With</h2>
          </div>
          
          <div className="flex overflow-x-hidden text-slate-500">
            <div className="flex animate-marquee whitespace-nowrap">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center justify-center mx-4 h-20 w-32">
                  <div className="h-96 w-96 relative">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
              {techStack.map((tech, index) => (
                <div key={`repeat-${index}`} className="flex items-center justify-center mx-4 h-20 w-32">
                  <div className="h-96 w-96 relative">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-20 bg-slate-700" id="cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your digital vision to life with tailored solutions that meet your specific needs.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact" className="bg-white text-gray-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition duration-300">
              Get in Touch
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-md transition duration-300">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;