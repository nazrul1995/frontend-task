'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const brands = [
  { name: 'Shark | NINJA', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/SharkNinja_logo.svg' },
  { name: 'Capital One', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Capital_One_logo.svg' },
  { name: 'Red Bull', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Red_Bull_Antonin_Castellan_logo.svg/1200px-Red_Bull_Antonin_Castellan_logo.svg.png' },
  { name: 'JD Sports', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/JD_Sports_logo.svg/1200px-JD_Sports_logo.svg.png' },
];

const Brand = () => {
  const scrollRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = scrollRowRef.current;
    if (!row) return;

    // Seamless Infinite Loop Animation
    const totalWidth = row.scrollWidth / 2;
    
    gsap.to(row, {
      x: -totalWidth,
      duration: 30, // Adjust speed here
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="bg-[#f0f0f0] py-24 text-black overflow-hidden">
      {/* 1. Brand Logo Slider Section */}
      <div className="relative flex items-center mb-32">
        <div className="absolute left-12 z-20 bg-[#f0f0f0] pr-8">
           <p className="text-lg font-medium whitespace-nowrap">The agency behind</p>
        </div>
        
        {/* Infinite Track */}
        <div className="flex overflow-hidden grayscale opacity-80">
          <div ref={scrollRowRef} className="flex gap-24 items-center pl-[250px]">
            <BrandSet />
            <BrandSet />
          </div>
        </div>
        
        {/* Right Blur/Fade Mask */}
        <div className="absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-[#f0f0f0] to-transparent" />
      </div>

      {/* 2. Content Section */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Description */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
            </h2>
          </div>

          {/* Right Column: Hero Sub-text & Buttons */}
          <div className="flex flex-col gap-8">
            <div className="relative">
              <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8]">
                Driving Demand <br /> & Discovery
                {/* Small Inset Image like in the reference */}
                <span className="inline-block h-16 w-24 md:h-24 md:w-32 rounded-2xl overflow-hidden ml-4 align-middle border-4 border-white shadow-xl">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=200" alt="Team" className="h-full w-full object-cover" />
                </span>
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link 
                href="/our-story" 
                className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold shadow-sm transition-all hover:bg-black hover:text-white"
              >
                Our Story <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </Link>
              
              <Link 
                href="/services" 
                className="group text-lg font-bold flex items-center gap-2"
              >
                Our Services <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const BrandSet = () => (
  <div className="flex gap-24 items-center">
    {brands.map((brand, i) => (
      <div key={i} className="h-12 w-auto flex-shrink-0">
        <img 
          src={brand.logo} 
          alt={brand.name} 
          className="h-full w-auto object-contain max-w-[150px]" 
        />
      </div>
    ))}
  </div>
);

export default Brand;