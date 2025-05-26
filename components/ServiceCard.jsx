import Image from 'next/image';
import { useState } from 'react';

const ServiceCard = ({ icon, title, description, bgUrl, features }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 ${
        bgUrl ? 'bg-cover bg-center text-white' : 'bg-slate-100 text-slate-800'
      } ${isHovered ? 'shadow-xl transform -translate-y-2' : 'shadow-md'}`}
      style={bgUrl ? { backgroundImage: `url(${bgUrl})`, backgroundAttachment: 'fixed' } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 bg-white rounded-full p-3 shadow-md">
        <Image 
          src={icon} 
          alt={title} 
          width={80} 
          height={80} 
          className="object-contain" 
        />
      </div>
      
      <h3 className={`text-xl font-bold mb-3 ${bgUrl ? 'text-white' : 'text-slate-700'}`}>
        {title}
      </h3>
      
      <p className={`text-center mb-4 ${bgUrl ? 'text-slate-200' : 'text-slate-600'}`}>
        {description}
      </p>
      
      {features && features.length > 0 && (
        <ul className={`mt-4 w-full space-y-2 ${bgUrl ? 'text-slate-200' : 'text-slate-600'}`}>
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className={`mr-2 text-lg ${bgUrl ? 'text-slate-300' : 'text-slate-500'}`}>•</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <button 
        className={`mt-6 px-4 py-2 rounded-full font-medium transition-colors ${
          bgUrl 
            ? 'bg-white text-slate-800 hover:bg-slate-200' 
            : 'bg-slate-700 text-white hover:bg-slate-800'
        }`}
      >
        Learn More
      </button>
    </div>
  );
};

// Main Services Cards Component
const ServicesCards = () => {
  const services = [
    {
      icon: '/images/web-development.jpg',
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies.',
      features: ['React & Next.js', 'Tailwind CSS', 'API Integration', 'SEO Optimization'],
      bgUrl: '/images/web-bg.jpg'
    },
    {
      icon: '/images/mobile-app.jpg',
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: ['React Native', 'Flutter', 'Push Notifications', 'Offline Capability'],
      bgUrl: null
    },
    {
      icon: '/images/cloud-services.jpg',
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your business.',
      features: ['AWS/Azure/GCP', 'Serverless Architecture', 'Database Management', 'CI/CD Pipeline'],
      bgUrl: '/images/cloud-bg.jpg'
    },
    {
      icon: '/images/data-analytics.jpg',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights.',
      features: ['Data Visualization', 'Machine Learning', 'Business Intelligence', 'Predictive Analysis'],
      bgUrl: null
    },
    {
      icon: '/images/cybersecurity.jpg',
      title: 'Cybersecurity',
      description: 'Protect your digital assets from threats and vulnerabilities.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Solutions', 'Security Training'],
      bgUrl: '/images/security-bg.jpg'
    },
    {
      icon: '/images/ai-solutions.jpg',
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence for your business.',
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Models', 'Chatbots'],
      bgUrl: null
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business 
            thrive in the modern technological landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              bgUrl={service.bgUrl}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-700 mb-6">Need a Custom Solution?</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Our team of experts can build tailored solutions to address your unique business challenges.
          </p>
          <button className="bg-slate-800 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-900 transition-colors">
            Request a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;