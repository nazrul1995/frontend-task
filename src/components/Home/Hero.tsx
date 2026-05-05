'use client';

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black pt-24">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=1890&h=2363&q=100&auto=format&fit=crop&dm=1753775231&s=60dc0e3c84825da30f8d809caf5fabe1"
          alt="Background"
          className="h-full w-full object-cover opacity-50"
            fill
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 text-center text-white">
        
        {/* Badge */}
        <div className="mb-6 flex flex-col items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">
            #1 Most Recommended Content Marketing Agency
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          We Create <br />
          <span className="flex flex-wrap items-center justify-center gap-3">
            Category
            <span className="inline-block h-[50px] w-[70px] overflow-hidden rounded-xl sm:h-[70px] sm:w-[100px]">
              <Image 
                src="https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=1890&h=2363&q=100&auto=format&fit=crop&dm=1753775231&s=60dc0e3c84825da30f8d809caf5fabe1" 
                alt="Inline" 
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </span>
            Leaders
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 md:text-xl">
          on every searchable platform
        </p>

        {/* CTA */}
        <div className="mt-8">
          <button className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-gray-200">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;