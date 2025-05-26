

'use client';
import { useState } from 'react';
import Image from 'next/image';

    const ProjectCard = ({ image, title, category, description }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="card relative group">
      <div className="relative h-64 w-full">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-300">
          <button 
            onClick={() => setShowDetails(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
          >
            See Details
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-indigo-600">{category}</p>
      </div>
      
      {showDetails && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-indigo-600">{title}</h3>
                <button 
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="relative h-64 w-full mb-4">
                <Image 
                  src={image} 
                  alt={title} 
                  fill 
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-gray-600 mb-2">{category}</p>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProjectCard;