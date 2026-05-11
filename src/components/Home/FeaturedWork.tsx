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
    title: 'Driving Demand',
    desc: 'We build search-first content marketing strategies that dominate categories.',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Semantic Relevancy',
    desc: "Engineering signals that satisfy both the internet's algorithms and people's needs.",
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Global Reach',
    desc: 'Scale your message across every searchable platform with a team of experts.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
  },
];

const FeaturedWork = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>('.text-panel');
      const images = gsap.utils.toArray<HTMLElement>('.scroll-image');

      // Show first image initially
      if (images[0]) {
        gsap.set(images[0], {
          opacity: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
        });
      }

      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top center',
          end: 'bottom center',

          onEnter: () => {
            // Animate current panel
            gsap.to(panel, {
              opacity: 1,
              x: 0,
              duration: 0.5,
            });

            // Animate images
            images.forEach((img, index) => {
              gsap.to(img, {
                opacity: index === i ? 1 : 0,
                clipPath:
                  index === i
                    ? 'inset(0% 0% 0% 0%)'
                    : 'inset(100% 0% 0% 0%)',
                duration: 0.8,
                ease: 'power2.inOut',
              });
            });
          },

          onEnterBack: () => {
            images.forEach((img, index) => {
              gsap.to(img, {
                opacity: index === i ? 1 : 0,
                clipPath:
                  index === i
                    ? 'inset(0% 0% 0% 0%)'
                    : 'inset(0% 0% 100% 0%)',
                duration: 0.8,
                ease: 'power2.inOut',
              });
            });
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0f0f0f] text-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left: Scrollable Text */}
        <div className="w-full px-8 md:w-1/2 lg:px-24">
          {content.map((item, index) => (
            <div
              key={index}
              className="text-panel flex min-h-screen -translate-x-3 flex-col justify-center opacity-20"
            >
              <h2 className="hover-target text-5xl font-black tracking-tighter md:text-7xl">
                {item.title}
              </h2>

              <p className="max-w-md text-xl font-medium leading-relaxed text-zinc-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Sticky Image */}
        <div className="sticky top-0 hidden h-screen w-1/2 overflow-hidden py-24 pr-12 md:block">
          <div
            ref={imageContainerRef}
            className="hover-target relative h-full w-full overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl"
          >
            {content.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt={item.title}
                className="scroll-image absolute inset-0 h-full w-full object-cover opacity-0 transition-transform duration-700 hover:scale-105"
                style={{
                  clipPath: 'inset(100% 0% 0% 0%)',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-48 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
};

export default FeaturedWork;