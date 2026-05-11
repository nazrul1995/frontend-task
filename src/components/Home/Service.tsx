'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: 'Digital PR',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Organic Social & Content',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Search & Growth Strategy',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Content Experience',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Data & Insights',
    img: 'https://images.unsplash.com/photo-1551288049-bbda48338715?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Onsite SEO',
    img: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800',
  },
];

type ServiceItemProps = {
  title: string;
  img: string;
};

const Service = () => {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from('.service-header', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',

        scrollTrigger: {
          trigger: '.service-header',
          start: 'top 90%',
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="bg-[#f0f0f0] px-6 py-32 md:px-16"
    >
      {/* Header */}
      <div className="service-header mb-4 flex flex-col items-end justify-between border-b border-zinc-300 pb-12 md:flex-row">
        <h2 className="flex items-center gap-6 text-7xl font-black leading-none tracking-tighter md:text-9xl">
          Our

          <div className="h-[0.8em] w-[1.2em] rotate-[-3deg] overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300"
              alt="Inline"
              className="h-full w-full object-cover"
            />
          </div>

          Services
        </h2>

        <Link
          href="/services"
          className="group mb-4 flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-8 py-4 font-bold shadow-sm transition-all duration-300 hover:bg-black hover:text-white"
        >
          View All Services

          <span className="transition-transform group-hover:rotate-45">
            ↗
          </span>
        </Link>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            img={service.img}
          />
        ))}
      </div>
    </section>
  );
};

const ServiceItem = ({ title, img }: ServiceItemProps) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const arrowRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        paused: true,
      });

      tl.to(revealRef.current, {
        xPercent: 100,
        duration: 0.6,
        ease: 'expo.inOut',
      })
        .to(
          imageRef.current,
          {
            xPercent: -20,
            duration: 0.6,
            ease: 'expo.inOut',
          },
          0
        )
        .to(
          arrowRef.current,
          {
            opacity: 1,
            x: 10,
            duration: 0.3,
            ease: 'power2.out',
          },
          0.2
        );

      const handleMouseEnter = () => {
        tl.play();
      };

      const handleMouseLeave = () => {
        tl.reverse();
      };

      const el = itemRef.current;

      if (!el) return;

      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      };
    },
    { scope: itemRef }
  );

  return (
    <div
      ref={itemRef}
      className="group relative block cursor-pointer overflow-hidden border-b border-zinc-300 py-12"
    >
      {/* Background Reveal */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          ref={revealRef}
          className="absolute inset-0 left-[-100%] scale-x-[0.98] scale-y-[0.85] rounded-full bg-black"
        >
          <img
            ref={imageRef}
            src={img}
            alt={title}
            className="absolute inset-0 left-[20%] h-full w-full scale-125 object-cover opacity-60"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between px-4">
        <h3 className="flex items-center text-4xl font-bold tracking-tighter transition-colors duration-300 group-hover:text-white md:text-5xl">
          <span
            ref={arrowRef}
            className="-ml-8 mr-4 text-3xl opacity-0"
          >
            ↗
          </span>

          {title}
        </h3>
      </div>
    </div>
  );
};

export default Service;