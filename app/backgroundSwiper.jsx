


'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BackgroundSwiper = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const images = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746953588/Mountain-Escape_cmv8zs.jpg",
      alt: "Beautiful mountain landscape",
      title: "Mountain Escape",
      description: "Serene mountain views with pristine lakes and forest"
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746953723/Tropical-Paradise_s8gxvo.jpg",
      alt: "Ocean sunset with palm trees",
      title: "Tropical Paradise",
      description: "Golden sunset over calm waters with silhouetted palm trees"
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746953849/Enchanted-Forest.jpg_m9xs5r.jpg",
      alt: "Misty forest with sunrays",
      title: "Enchanted Forest",
      description: "Mysterious forest with sun rays breaking through the mist"
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dtbforfvb/image/upload/v1746953976/City-Lights_fwyyyx.jpg",
      alt: "Urban cityscape at night",
      title: "City Lights",
      description: "Dazzling city skyline illuminated at night"
    }
  ]

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
  }

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  }

  useEffect(() => {
    // Automatic slideshow
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [currentImageIndex])

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={image.url}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-4 md:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {images[currentImageIndex].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {images[currentImageIndex].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors">
              Explore Now
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

export default BackgroundSwiper;