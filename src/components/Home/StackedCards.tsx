'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const cardsData = [
  {
    title: "Pioneers",
    text: "We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.\n\nWe’re on a mission to be the first search-first agency to win a Cannes Lion, disrupting the status quo.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    bg: "#000000",
  },
  {
    title: "Innovators",
    text: "We don't just follow trends; we set them. By blending data science with creative intuition, we ensure your brand stays ahead of the curve in an ever-evolving digital landscape.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    bg: "#111827",
  },
  {
    title: "Visionaries",
    text: "Our focus is on long-term impact. We build digital ecosystems that thrive on search-first principles, turning visibility into sustainable growth and market leadership.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    bg: "#064e3b",
  },
];

const StackedCards = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const cards = cardsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=300%`, // Space for the scroll-away effect
        pin: true,
        scrub: 1,
      }
    });

    // Animate the cards flying UP and away
    cards.forEach((card, i) => {
      tl.to(card, {
        y: "-120vh", // Fly up out of view
        rotate: i % 2 === 0 ? -10 : 10, // Add organic rotation while flying
        ease: "power2.in",
      }, i * 0.75); // Stagger the exit of each card
    });

  }, { scope: sectionRef });

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-[#f0f0f0] h-screen overflow-hidden flex items-center justify-center"
      >
        <div className="flex flex-col items-center w-full px-4">
          
          <h2 className="absolute top-10 text-sm font-bold uppercase tracking-[0.4em] text-zinc-400">
            Legacy In The Making
          </h2>

          <div className="relative w-full max-w-[600px] h-[700px]">
            {cardsData.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="absolute inset-0 rounded-[40px] p-8 md:p-12 flex flex-col shadow-2xl overflow-hidden text-white will-change-transform"
                style={{ 
                  backgroundColor: card.bg,
                  zIndex: cardsData.length - index, // Top card has highest index
                  transform: `translateY(${index * 20}px) rotate(${index % 2 ? 2 : -2}deg)`
                }}
              >
                {/* Image Section */}
                <div className="w-full h-1/2 rounded-[24px] overflow-hidden mb-8">
                  <img 
                    src={`${card.img}?auto=format&fit=crop&w=800&q=80`} 
                    alt={card.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 italic">
                    {card.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed font-medium opacity-90 whitespace-pre-line">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StackedCards;