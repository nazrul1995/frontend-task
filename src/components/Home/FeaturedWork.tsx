'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const content = [
  {
    title: "Driving Demand",
    desc: "We build search-first content marketing strategies that dominate categories.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Semantic Relevancy",
    desc: "Engineering signals that satisfy both the internet's algorithms and people's needs.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Global Reach",
    desc: "Scale your message across every searchable platform with a team of experts.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
  }
];

const FeaturedWork = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const imageContainerRef = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".text-panel");
    const images = gsap.utils.toArray(".scroll-image");

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          // Transition Text
          gsap.to(panel, { opacity: 1, x: 0, duration: 0.5 });
          // Transition Images
          images.forEach((img, index) => {
            gsap.to(img, { 
              opacity: index === i ? 1 : 0, 
              clipPath: index === i ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
              duration: 0.8,
              ease: "power2.inOut"
            });
          });
        },
        onEnterBack: () => {
          images.forEach((img, index) => {
            gsap.to(img as HTMLElement, { 
              opacity: index === i ? 1 : 0, 
              clipPath: index === i ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
              duration: 0.8,
              ease: "power2.inOut"
            });
          });
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#0f0f0f] text-white">
      <div className="container mx-auto flex flex-col md:flex-row">
        
        {/* Left: Scrollable Text */}
        <div className="w-full md:w-1/2 px-8 lg:px-24">
          {content.map((item, index) => (
            <div 
              key={index} 
              className="text-panel min-h-screen flex flex-col justify-center opacity-20 -translate-x-10"
            >
              <h2 className="hover-target text-5xl md:text-7xl font-black mb-6 tracking-tighter">
                {item.title}
              </h2>
              <p className="text-xl text-zinc-400 max-w-md font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Sticky Image */}
        <div className="hidden md:block w-1/2 h-screen sticky top-0 overflow-hidden py-24 pr-12">
          <div ref={imageContainerRef} className="hover-target relative w-full h-full rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl">
            {content.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt={item.title}
                className="scroll-image absolute inset-0 w-full h-full object-cover opacity-0 transition-transform duration-700 hover:scale-105"
                style={{ clipPath: "inset(100% 0% 0% 0%)" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for flow */}
      <div className="h-48 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
};

export default FeaturedWork;