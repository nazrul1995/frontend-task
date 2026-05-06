'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Horizontal = () => {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const buttonRef = useRef(null);

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

      // Hide initially
      gsap.set(button, { opacity: 0, scale: 0.8 });

      // Mouse move handler
      const moveButton = (e) => {
        const rect = section.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(button, {
          x: x,
          y: y,
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
      className="bg-[#eee] py-40 overflow-hidden relative select-none"
    >

      {/* Floating Button */}
      <div
        ref={buttonRef}
        className="pointer-events-none absolute top-0 left-0 z-30"
      >
        <button className="bg-[#A7F3D0] text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl whitespace-nowrap">
          Send Us Your Brief ↗
        </button>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap gap-16 will-change-transform"
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
    <div className="flex items-center gap-16 shrink-0">
      <h2 className="text-[20vw] font-black tracking-tighter leading-none flex items-center gap-8">
        Chasing
        <div className="h-[0.8em] w-[1.2em] overflow-hidden rounded-[2vw] border-4 border-white shadow-2xl rotate-[-2deg]">
          <img
            src="https://images.unsplash.com/photo-1501333198107-b369651590c8?auto=format&fit=crop&q=80&w=600"
            alt="Chasing"
            className="object-cover h-full w-full"
          />
        </div>
        Connections
      </h2>

      <h2 className="text-[20vw] font-black tracking-tighter leading-none opacity-20">
        Chasing Connections
      </h2>
    </div>
  );
};

export default Horizontal;