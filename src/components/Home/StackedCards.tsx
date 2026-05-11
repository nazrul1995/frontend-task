'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CardItem {
  title: string;
  text: string;
  img: string;
  bg: string;
}

const cardsData: CardItem[] = [
  {
    title: "Pioneers",
    text: "We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    bg: "#000000",
  },
  {
    title: "Innovators",
    text: "We don't just follow trends; we set them. By blending data science with creative intuition, we ensure your brand stays ahead of the curve.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    bg: "#111827",
  },
  {
    title: "Visionaries",
    text: "Our focus is on long-term impact. We build digital ecosystems that thrive on search-first principles, turning visibility into sustainable growth.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    bg: "#064e3b",
  },
];

const StackedCards: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        pin: true,
        scrub: 1,
      }
    });

    cards.forEach((card, i) => {
      tl.to(card, {
        y: "-120vh",
        rotate: i % 2 === 0 ? -10 : 10,
        ease: "power2.inOut",
      }, i * 0.8);
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#f0f0f0] h-screen overflow-hidden flex items-center justify-center">
      <div className="relative w-full max-w-[600px] h-[700px] px-4">
        {cardsData.map((card, index) => (
          <div
            key={card.title}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="absolute inset-0 rounded-[40px] p-8 md:p-12 flex flex-col shadow-2xl text-white"
            style={{ 
              backgroundColor: card.bg, 
              zIndex: cardsData.length - index,
              transform: `translateY(${index * 20}px) rotate(${index % 2 ? 2 : -2}deg)`
            }}
          >
            <div className="w-full h-1/2 rounded-[24px] overflow-hidden mb-8">
              <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-5xl font-black italic tracking-tighter mb-4">{card.title}</h3>
            <p className="text-lg opacity-90 whitespace-pre-line">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackedCards;