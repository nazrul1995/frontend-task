'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const services = [
  { title: 'Digital PR', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800' },
  { title: 'Organic Social & Content', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { title: 'Search & Growth Strategy', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800' },
  { title: 'Content Experience', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800' },
  { title: 'Data & Insights', img: 'https://images.unsplash.com/photo-1551288049-bbda48338715?auto=format&fit=crop&q=80&w=800' },
  { title: 'Onsite SEO', img: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800' },
];

const Service = () => {
  const container = useRef(null);

  useGSAP(() => {
    // Initial entrance animation for the header
    gsap.from(".service-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".service-header",
        start: "top 90%",
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="bg-[#f0f0f0] py-32 px-6 md:px-16">
      {/* Header Section */}
      <div className="service-header flex flex-col md:flex-row justify-between items-end border-b border-zinc-300 pb-12 mb-4">
        <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none flex items-center gap-6">
          Our 
          <div className="h-[0.8em] w-[1.2em] overflow-hidden rounded-3xl rotate-[-3deg]">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300" 
              alt="Inline" 
              className="object-cover h-full w-full"
            />
          </div>
          Services
        </h2>
        
        <Link href="/services" className="mb-4 group bg-white border border-zinc-200 px-8 py-4 rounded-full font-bold shadow-sm flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300">
          View All Services <span className="group-hover:rotate-45 transition-transform">↗</span>
        </Link>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        {services.map((service, index) => (
          <ServiceItem key={index} title={service.title} img={service.img} />
        ))}
      </div>
    </section>
  );
};

const ServiceItem = ({ title, img }) => {
  const itemRef = useRef(null);
  const revealRef = useRef(null);
  const imageRef = useRef(null);
  const arrowRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(revealRef.current, {
      xPercent: 100,
      duration: 0.6,
      ease: "expo.inOut"
    })
    .to(imageRef.current, {
      xPercent: -20, // Counter-movement for parallax effect
      duration: 0.6,
      ease: "expo.inOut"
    }, 0)
    .to(arrowRef.current, {
      opacity: 1,
      x: 10,
      duration: 0.3,
      ease: "power2.out"
    }, 0.2);

    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    const el = itemRef.current;
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: itemRef });

  return (
    <div ref={itemRef} className="group relative block border-b border-zinc-300 py-12 cursor-pointer overflow-hidden">
      {/* Background reveal container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          ref={revealRef} 
          className="absolute inset-0 left-[-100%] bg-black rounded-full scale-y-[0.85] scale-x-[0.98]"
        >
          <img 
            ref={imageRef}
            src={img} 
            alt={title} 
            className="absolute inset-0 left-[20%] w-full h-full object-cover opacity-60 scale-125"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center justify-between px-4">
        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter transition-colors duration-300 group-hover:text-white flex items-center">
          <span ref={arrowRef} className="opacity-0 -ml-8 mr-4 text-3xl transition-none">↗</span>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Service;