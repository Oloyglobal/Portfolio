

import Image from 'next/image';
import Link from 'next/link';
const Services = () => {
  const services = [
    {
      id: 'api',
      title: 'API Development',
      description: 'Building scalable and efficient RESTful APIs that power your applications, enabling seamless integration with third-party services.',
      details: 'My API development services ensure your applications communicate effectively with other systems. I build robust, well-documented APIs using modern frameworks like Express.js, Django REST Framework, and Flask. My APIs feature comprehensive authentication, rate limiting, caching strategies, and thorough testing to ensure reliability and performance. Whether you need public APIs for developers or internal APIs for system integration, I create solutions that are maintainable, secure, and scalable.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746824966/API-Development1_rhjwwc.jpg',
      altText: 'API Development illustration showing connected systems and data flow'
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Creating dynamic, responsive user interfaces using React.js and JavaScript, ensuring a smooth and engaging user experience.',
      details: 'I specialize in crafting beautiful, interactive user interfaces that captivate your audience. Using modern frontend frameworks like React.js, Next.js, and Vue.js, I build responsive websites that work flawlessly across all devices. My frontend development approach emphasizes performance optimization, accessibility, and clean, maintainable code. I implement state management solutions, client-side validation, and smooth animations to create engaging web experiences that keep users coming back.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746825255/Frontend-website-design-and-development-training-in-Abuja-Nigeria_zwgjrj.jpg',
      altText: 'Frontend Development illustration showing responsive design across devices'
    },
    {
      id: 'database',
      title: 'Database Management',
      description: 'Designing and managing databases to ensure data integrity, efficiency, and security, handling both SQL and NoSQL databases.',
      details: 'Effective data management is critical for any modern application. I design database schemas that balance performance, scalability, and data integrity. Working with both SQL databases (PostgreSQL, MySQL) and NoSQL solutions (MongoDB, Firebase), I implement efficient query strategies, proper indexing, and optimization techniques. My database solutions include backup strategies, migration planning, and security measures to protect your valuable data while ensuring high availability and performance.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746825393/customer-database-1Database-Management_osxn9a.webp',
      altText: 'Database Management illustration showing structured data organization'
    },
    {
      id: 'payment',
      title: 'Payment Integration',
      description: 'Integrating payment gateways like M-Pesa (Daraja API) to enable secure and seamless transactions, including B2B, C2B, and B2C.',
      details: 'I implement secure, reliable payment solutions to help your business accept payments online. Specializing in M-Pesa Daraja API integration, I enable all transaction types (B2B, C2B, B2C) with comprehensive validation and error handling. I also integrate with international payment gateways like Stripe, PayPal, and local solutions. My payment implementations include transaction logging, reconciliation systems, subscription management, and are designed with security best practices to ensure PCI compliance and fraud prevention.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1745533519/Payment-Integration_nio0xh.png',
      altText: 'Payment Integration illustration showing secure transaction flow'
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications using React Native and Flutter that provide native-like performance with a single codebase.',
      details: 'I create high-performance mobile applications that work seamlessly on both iOS and Android. Using React Native and Flutter, I develop cross-platform apps that feel native to each platform while maintaining a single codebase for efficiency. My mobile applications feature responsive designs, offline functionality, push notifications, and device feature integration. I focus on app store optimization, performance tuning, and regular updates to ensure your app delivers an outstanding user experience.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1745533708/Mobile-Development_td9fov.jpg',
      altText: 'Mobile Development illustration showing app interfaces on different devices'
    },
    {
      id: 'cloud',
      title: 'Cloud Services',
      description: 'Deploying and managing applications on cloud platforms like AWS, Google Cloud, and Azure for scalability and reliability.',
      details: 'I leverage cloud platforms to deploy scalable, resilient applications that grow with your business. With expertise in AWS, Google Cloud, and Azure, I implement infrastructure as code, containerization with Docker and Kubernetes, and serverless architectures. My cloud solutions include automated scaling, monitoring systems, disaster recovery planning, and cost optimization strategies. I ensure your applications are always available, performant, and secure while managing operational costs effectively.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1745533774/Cloud-Services_fid5xb.jpg',
      altText: 'Cloud Services illustration showing distributed computing architecture'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Solutions',
      description: 'Building custom online stores and marketplaces with secure checkout processes, inventory management, and customer analytics.',
      details: 'I develop comprehensive e-commerce solutions that drive sales and improve customer experience. From custom online stores to complex marketplaces, I build platforms that showcase your products effectively. My e-commerce implementations include advanced product filtering, personalized recommendations, secure checkout processes, and seamless payment integrations. I also incorporate inventory management systems, order processing workflows, and customer analytics to help you make data-driven business decisions.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1745593869/E-Commerce-Platform_igrk67.jpg',
      altText: 'E-Commerce Solutions illustration showing online shopping experience'
    },
    {
      id: 'security',
      title: 'Cybersecurity & Compliance',
      description: 'Implementing robust security measures to protect your applications and data from vulnerabilities and ensure regulatory compliance.',
      details: 'I prioritize security at every stage of development to protect your business and customer data. My security services include comprehensive vulnerability assessments, secure coding practices, and implementation of authentication systems with multi-factor options. I conduct regular security audits, implement encryption for sensitive data, and ensure your applications comply with relevant regulations like GDPR, CCPA, or industry-specific requirements. My security-first approach helps safeguard your digital assets and build customer trust.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746825622/Cybersecurity_Compliance_ui5yoo.jpg',
      altText: 'Cybersecurity illustration showing digital protection mechanisms'
    }
  ];

  const technologies = {
    frontend: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'Material UI', 'Bootstrap'],
    backend: ['Node.js', 'Express', 'Django', 'Flask', 'Spring Boot', 'Laravel'],
    database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Redis', 'Elasticsearch'],
    mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean', 'Heroku', 'Vercel'],
    tools: ['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Webpack', 'Jest', 'Cypress']
  };

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Requirements',
      description: 'We begin with a comprehensive consultation to understand your business goals, target audience, and project requirements. I analyze your needs and create detailed user stories and technical specifications.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746804665/Discovery_Requirements_qwo8bm.jpg',
      altText: 'Discovery phase illustration showing research and planning'
    },
    {
      step: 2,
      title: 'Planning & Architecture',
      description: 'Based on our initial discussions, I develop a project roadmap with clear milestones, deliverables, and timelines. I design the system architecture, select appropriate technologies, and create detailed wireframes.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746804758/Planning_Architecture_iulrfe.jpg',
      altText: 'Planning phase illustration showing architectural blueprints'
    },
    {
      step: 3,
      title: 'Design & Development',
      description: 'With a solid plan in place, I begin designing intuitive interfaces and developing functionality in iterative cycles. Following agile methodologies, I provide regular demos and gather feedback throughout the process.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746804867/Design_Development_htsbbk.jpg',
      altText: 'Development phase illustration showing coding and building'
    },
    {
      step: 4,
      title: 'Testing & Quality Assurance',
      description: 'Every feature undergoes rigorous testing to ensure reliability, performance, and security. I conduct unit testing, integration testing, and user acceptance testing to identify and resolve any issues.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746805003/Testing_Quality_Assurance_ddh6oy.jpg',
      altText: 'Testing phase illustration showing quality assurance processes'
    },
    {
      step: 5,
      title: 'Deployment & Launch',
      description: 'Once approved, I handle the deployment process to your chosen environment with minimal disruption. I implement monitoring systems to ensure smooth operation and optimize performance.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746805114/Deployment_Launch_euly29.png',
      altText: 'Deployment phase illustration showing launch sequence'
    },
    {
      step: 6,
      title: 'Support & Maintenance',
      description: 'After launch, I provide ongoing support and maintenance to ensure your application runs smoothly. I offer regular updates, security patches, and performance optimizations to keep your system current.',
      image: 'https://res.cloudinary.com/dtbforfvb/image/upload/v1746805829/How-Opting-for-Magento-2-Support-Maintenance-Services-Drive-eCommerce-Success-Blog-optimized_x1l9l6.jpg',
      altText: 'Support phase illustration showing maintenance and updates'
    }
  ];

  const testimonials = [
    {
      name: "Adebisi Adeshina",
      position: "CEO, TechStart Inc.",
      content: "Working with this developer transformed our business. The custom CRM solution streamlined our operations and increased our team's productivity by 40%. The attention to detail and commitment to understanding our unique needs made all the difference.",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746806088/Elizabeth-Adeshina-Collage_izo6sp.jpg",
      altText: "Portrait of Adebisi Adeshina"
    },
    {
      name: "Wahab Ibrahim",
      position: "Founder, GrowthMarket",
      content: "The e-commerce platform developed for us exceeded all expectations. Not only was it delivered ahead of schedule, but the intuitive design and seamless payment integration helped us increase conversions by 25% in the first month alone.",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746806331/Wahab_Ibrahim_l9cuku.jpg",
      altText: "Portrait of Wahab Ibrahim"
    },
    {
      name: "Ibrahim Lawal",
      position: "CTO, FinTech Solutions",
      content: "Security was our primary concern, and we were impressed by the robust measures implemented in our financial application. The development process was transparent, with regular updates and clear communication throughout.",
      image: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746806754/Portrait_of_Ibrahim_Lawal_vfy2wr.jpg",
      altText: "Portrait of Ibrahim Lawal"
    }
  ];

  const faqs = [
    {
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex web applications could take 2-6 months. I'll provide a detailed timeline during our initial consultation after understanding your requirements."
    },
    {
      question: "What is your pricing structure?",
      answer: "I offer flexible pricing options including project-based and hourly rates. Project-based pricing is determined after a thorough assessment of your requirements, while hourly rates are best for ongoing development needs. I provide detailed quotes before starting any work to ensure transparency."
    },
    {
      question: "Do you provide support after the project is complete?",
      answer: "Yes, I offer post-launch support and maintenance packages to ensure your application continues to function optimally. This includes bug fixes, security updates, and minor feature enhancements. We can discuss specific support needs based on your project requirements."
    },
    {
      question: "How do we communicate during the development process?",
      answer: "I maintain regular communication through your preferred channels (email, Slack, Microsoft Teams, etc.). We'll have scheduled check-ins to discuss progress, address concerns, and gather feedback. I believe in transparent, clear communication throughout the development lifecycle."
    },
    {
      question: "Can you work with my existing development team?",
      answer: "Absolutely. I have extensive experience collaborating with in-house teams and can adapt to your existing workflows. Whether you need to augment your team temporarily or integrate long-term, I ensure smooth collaboration and knowledge sharing."
    },
    {
      question: "Do you sign NDAs and how do you handle intellectual property?",
      answer: "Yes, I'm happy to sign NDAs before discussing sensitive project details. All intellectual property developed during our engagement belongs to you. I maintain strict confidentiality regarding your business information and project specifications."
    }
  ];

  return (
    <div className="services-page">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-600 to-slate-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Development Services</h1>
              <p className="text-xl mb-8">
                End-to-end development solutions crafted to transform your ideas into powerful, scalable digital experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-slate-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg transition duration-300">
                  Get Started
                </Link>
                <Link href="#process" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-600 font-bold py-3 px-8 rounded-md text-lg transition duration-300">
                  Learn My Process
                </Link>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <Image 
                src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746800558/Professional-development-services-illustration_gqtyts.jpg" 
                alt="Professional development services illustration" 
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-indigo-100 text-slate-800 text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wide">Professional Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">Comprehensive Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a Fullstack Developer with extensive experience across the technology stack, I deliver tailored solutions 
              that combine technical excellence with business value. From concept to deployment, I'm your partner in digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300">
              <div className="h-12 w-12 mb-4">
                <Image 
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746800794/Experience-icon_yeqzxz.jpg" 
                  alt="Experience icon" 
                  width={48} 
                  height={48} 
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">7+ Years Experience</h3>
              <p className="text-gray-600">Proven track record of delivering successful projects across various industries.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300">
              <div className="h-12 w-12 mb-4">
                <Image 
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746800925/depositphotos_35826561-stock-photo-solutions-icon_jpg_nflurr.jpg" 
                  alt="Solutions icon" 
                  width={48} 
                  height={48}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Tailored Solutions</h3>
              <p className="text-gray-600">Custom development approach aligned with your specific business needs and goals.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300">
              <div className="h-12 w-12 mb-4">
                <Image 
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746801019/support-group-icon-elegant-blue-round-button-isolated-abstract-illustration-104732215_oecb9h.webp" 
                  alt="Support icon" 
                  width={48} 
                  height={48}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Ongoing Support</h3>
              <p className="text-gray-600">Comprehensive post-launch maintenance and support to ensure continued success.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300">
              <div className="h-12 w-12 mb-4">
                <Image 
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746801125/Tech-PNG-Image-File_pks0d1.png" 
                  alt="Technologies icon" 
                  width={48} 
                  height={48}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Modern Tech Stack</h3>
              <p className="text-gray-600">Utilizing cutting-edge technologies and frameworks for optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-indigo-100 text-slate-800 text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wide">Technology Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">Powered by Modern Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I leverage industry-leading technologies and frameworks to build robust, scalable, and maintainable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 mr-4">
                  <Image 
                    src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746765739/front-end-developer_cblqsz.jpg" 
                    alt="Frontend Technologies" 
                    width={48} 
                    height={48}
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Frontend</h3>
              </div>
              <ul className="space-y-2">
                {technologies.frontend.map((tech, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-slate-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 mr-4">
                  <Image 
                    src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746628907/Backend-Development_ps8wvl.jpg" 
                    alt="Backend Technologies" 
                    width={48} 
                    height={48}
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Backend</h3>
              </div>
              <ul className="space-y-2">
                {technologies.backend.map((tech, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-slate-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 mr-4">
                  <Image 
                    src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746801944/database-tech-1_fxobkm.jpg" 
                    alt="Database Technologies" 
                    width={48} 
                    height={48}
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Database</h3>
              </div>
              <ul className="space-y-2">
                {technologies.database.map((tech, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-slate-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 mr-4">
                  <Image 
                    src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746802262/Mobile-Technologies_buuwds.jpg" 
                    alt="Mobile Technologies" 
                    width={48} 
                    height={48}
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Mobile</h3>
              </div>
              <ul className="space-y-2">
                {technologies.mobile.map((tech, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-slate-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 mr-4">
                  <Image 
                    src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746802354/Cloud-Technologies_rrsqab.jpg" 
                    alt="Cloud Technologies" 
                    width={48} 
                    height={48}
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Cloud</h3>
              </div>
              <ul className="space-y-2">
                {technologies.cloud.map((tech, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-slate-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 mr-4">
                  <Image 
                    src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746802467/Development-Tools_zmpe6z.webp" 
                    alt="Development Tools" 
                    width={48} 
                    height={48}
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Tools</h3>
              </div>
              <ul className="space-y-2">
                {technologies.tools.map((tech, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-slate-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section id={service.id} key={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className={index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}>
                <span className="bg-indigo-100 text-slate-800 text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wide">
                  Service {index + 1}
                </span>
                <h2 className="text-3xl font-bold mt-4 mb-6 text-gray-900">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                <p className="text-gray-700 mb-8">
                  {service.details}
                </p>
                <Link href={`/contact?service=${service.id}`} className="bg-slate-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-flex items-center">
                  Request This Service
                  <span className="ml-2">→</span>
                </Link>
              </div>
              <div className={index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}>
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src={service.image} 
                    alt={service.altText} 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-r from-slate-600 to-gray-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-slate-500 bg-opacity-20 text-white text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wide">
              My Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Development Process</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              A methodical approach to ensure your project is delivered on time, within budget, and meets all requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-15 transition duration-300">
                <div className="flex justify-center mb-6">
                  <div className="relative h-80 w-100">
                    <Image 
                      src={step.image} 
                      alt={step.altText} 
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-slate-600 flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                <p className="text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-indigo-100 text-slate-800 text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wide">
              Client Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what clients have to say about working with me.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 mr-4 relative">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.altText} 
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-slate-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-indigo-100 text-slate-800 text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wide">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about my services and development process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-slate-400">{faq.question}</h3>
                  <p className="text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-indigo-100 text-slate-800 text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-wide">
              Previous Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of my recent projects and the results they've achieved for clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-56">
                <Image 
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746827790/E-commerce-platform-case-study_jm8gve.jpg" 
                  alt="E-commerce platform case study" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-slate-600 font-medium">E-Commerce</span>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Online Fashion Marketplace</h3>
                <p className="text-gray-700 mb-4">
                  A comprehensive e-commerce platform with multi-vendor support, integrated payment systems, and advanced analytics.
                </p>
                <Link href="/case-studies/fashion-marketplace" className="text-slate-600 hover:text-gary-700 font-medium inline-flex items-center">
                  View Case Study
                  <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-56">
                <Image 
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746828402/innovative_digital_banking_solutions2Mobile-Banking-Solution_fneurm.jpg" 
                  alt="FinTech application case study" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-slate-600 font-medium">FinTech</span>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Mobile Banking Solution</h3>
                <p className="text-gray-700 mb-4">
                  A secure mobile banking application with real-time transaction processing, biometric authentication, and financial analytics.
                </p>
                <Link href="/case-studies/mobile-banking" className="text-slate-600 hover:text-gray-700 font-medium inline-flex items-center">
                  View Case Study
                  <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-56">
                <Image 
                  src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746828205/SaaS-platform_ej1gtd.jpg" 
                  alt="SaaS platform case study" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-slate-600 font-medium">SaaS</span>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Project Management Tool</h3>
                <p className="text-gray-700 mb-4">
                  A cloud-based project management solution with team collaboration features, resource allocation, and automated reporting.
                </p>
                <Link href="/case-studies/project-management" className="text-slate-600 hover:text-gray-700 font-medium inline-flex items-center">
                  View Case Study
                  <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/case-studies" className="bg-slate-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-md transition duration-300">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-600 to-gray-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your ideas into reality?</h2>
              <p className="text-xl mb-8">
                Let's discuss how my development services can help you achieve your business goals with tailored solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-slate-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg transition duration-300">
                  Start a Project
                </Link>
                <Link href="/booking" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-600 font-bold py-3 px-8 rounded-md text-lg transition duration-300">
                  Schedule a Call
                </Link>
              </div>
            </div> 
            <div className="relative h-96">
              <Image 
                src="https://res.cloudinary.com/dtbforfvb/image/upload/v1746828846/computer-coding-laptop-technology-working-teamwork-collaboration_uo5eac.jpg" 
                alt="Developer collaboration illustration" 
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Badge Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Expertise & Certifications</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {['AWS Certified', 'Google Cloud', 'React Specialist', 'Node.js Expert', 'MongoDB Certified', 'API Security', 'Payment Systems', 'Mobile Development'].map((badge, index) => (
              <div key={index} className="bg-slate-400 px-6 py-3 rounded-full text-gray-600 font-medium flex items-center">
                <div className="h-6 w-6 mr-2">
                  <Image 
                    src={`https://res.cloudinary.com/dtbforfvb/image/upload/v1746829779/badge_wmuq8u.jpg`} 
                    alt={`${badge} badge`} 
                    width={24} 
                    height={24}
                    className="rounded-full"
                  />
                </div>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;