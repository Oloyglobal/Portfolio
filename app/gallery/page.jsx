import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const GalleryPage = () => {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'digital', name: 'Digital Design' },
    { id: 'branding', name: 'Branding' },
    { id: 'illustrations', name: 'Illustrations' },
    { id: 'ui', name: 'UI/UX' },
    { id: 'photography', name: 'Photography' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Nebula Brand Identity',
      category: 'branding',
      image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1748363665/pexels-mizunokozuki-12899167_ce0icf.jpg',
      link: '/gallery/nebula-branding'
    },
    {
      id: 2,
      title: 'Cityscape at Twilight',
      category: 'photography',
      image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1748363693/pexels-divinetechygirl-1181297_ib0hix.jpg',
      link: '/gallery/cityscape'
    },
    {
      id: 3,
      title: 'Finance App UI',
      category: 'ui',
      image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1748363662/pexels-katerina-holmes-5905442_rzzwzx.jpg',
      link: '/gallery/finance-app'
    },
    {
      id: 4,
      title: 'Abstract Geometry Series',
      category: 'illustrations',
      image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1748363709/pexels-cottonbro-4709285_gbufwj.jpg',
      link: '/gallery/abstract-geometry'
    },
    {
      id: 5,
      title: 'Eco Product Packaging',
      category: 'branding',
      image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1747238152/pexels-shkrabaanthony-5206297_muza62.jpg',
      link: '/gallery/eco-packaging'
    },
    {
      id: 6,
      title: 'Technology Dashboard',
      category: 'ui',
      image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1746703311/pexels-rethaferguson-3059748_qxzdeo.jpg',
      link: '/gallery/tech-dashboard'
    },
    {
      id: 7,
      title: 'Character Design Collection',
      category: 'illustrations',
      image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1744891747/Frame_427319048_hujeei.png',
      link: '/gallery/character-design'
    },
    {
      id: 8,
      title: 'Nature Macro Series',
      category: 'photography',
      image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1747144339/pexels-alesiakozik-6770845_fpqxas.jpg',
      link: '/gallery/nature-macro'
    },
    {
      id: 9,
      title: 'Social Media Campaign',
      category: 'digital',
      image: '/images/gallery/social-campaign.jpg',
      link: '/gallery/social-campaign'
    },
    {
      id: 10,
      title: 'Fashion E-Commerce Concept',
      category: 'ui',
      image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1747259182/pexels-pnw-prod-8276365_dntdos.jpg',
      link: '/gallery/fashion-ecommerce'
    },
    {
      id: 11,
      title: 'Street Photography Collection',
      category: 'photography',
      image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1747304597/pexels-darina-belonogova-7193591_m78var.jpg',
      link: '/gallery/street-photography'
    },
    {
      id: 12,
      title: 'Logo Design Collection',
      category: 'branding',
      image: 'https://res.cloudinary.com/dlb3doese/image/upload/v1747742796/pexels-edmond-dantes-8553867_ovb1jm.jpg',
      link: '/gallery/logo-collection'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
    
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Gallery</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A curated collection of my best work across various design disciplines and projects.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-700 hover:text-white transition-colors duration-300"
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map(item => (
            <Link key={item.id} href={item.link} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square bg-slate-200 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-800 bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-medium">View Details</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-slate-800 font-medium">{item.title}</h3>
                  <p className="text-slate-500 text-sm capitalize">{item.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-slate-700 hover:bg-slate-800 text-white rounded-md transition-colors duration-300">
            Load More
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
