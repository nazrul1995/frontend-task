'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Horizontal = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Marquee animation
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 20,
        ease: 'linear',
        repeat: -1,
      });

      const section = sectionRef.current;
      const button = buttonRef.current;

      if (!section || !button) return;

      // Hide initially
      gsap.set(button, {
        opacity: 0,
        scale: 0.8,
      });

      // Mouse move handler
      const moveButton = (e: MouseEvent) => {
        const rect = section.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(button, {
          x,
          y,
          duration: 0.4,
          ease: 'power3.out',
        });
      };

      const handleEnter = () => {
        gsap.to(button, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'power3.out',
        });
      };

      const handleLeave = () => {
        gsap.to(button, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: 'power3.in',
        });
      };

      section.addEventListener('mousemove', moveButton);
      section.addEventListener('mouseenter', handleEnter);
      section.addEventListener('mouseleave', handleLeave);

      return () => {
        section.removeEventListener('mousemove', moveButton);
        section.removeEventListener('mouseenter', handleEnter);
        section.removeEventListener('mouseleave', handleLeave);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#eee] py-40 select-none"
    >
      {/* Floating Button */}
      <div
        ref={buttonRef}
        className="pointer-events-none absolute left-0 top-0 z-30"
      >
        <button className="whitespace-nowrap rounded-full bg-[#A7F3D0] px-8 py-4 text-lg font-bold text-black shadow-xl">
          Send Us Your Brief ↗
        </button>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex gap-16 whitespace-nowrap will-change-transform"
        >
          <MarqueeText />
          <MarqueeText />
        </div>
      </div>
    </section>
  );
};

const MarqueeText = () => {
  return (
    <div className="flex shrink-0 items-center gap-16">
      <h2 className="flex items-center gap-8 text-[20vw] font-black leading-none tracking-tighter">
        Chasing

        <div className="h-[0.8em] w-[1.2em] rotate-[-2deg] overflow-hidden rounded-[2vw] border-4 border-white shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1501333198107-b369651590c8?auto=format&fit=crop&q=80&w=600"
            alt="Chasing"
            className="h-full w-full object-cover"
          />
        </div>

        Connections
      </h2>

      <h2 className="text-[20vw] font-black leading-none tracking-tighter opacity-20">
        Chasing Connections
      </h2>
    </div>
  );
};

export default Horizontal;