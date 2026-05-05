'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = 'none';

    // QuickTo for high performance movement
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleHoverStart = () => {
      gsap.to(cursorRef.current, {
        scale: 4,
        backgroundColor: "white",
        mixBlendMode: "difference",
        duration: 0.3
      });
      gsap.to(iconRef.current, {
        opacity: 1,
        scale: 0.4,
        duration: 0.3
      });
    };

    const handleHoverEnd = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: "white",
        mixBlendMode: "normal",
        duration: 0.3
      });
      gsap.to(iconRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.3
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Event delegation for hover targets
    const targets = document.querySelectorAll(".hover-target");
    targets.forEach(target => {
      target.addEventListener("mouseenter", handleHoverStart);
      target.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
    >
      <span ref={iconRef} className="text-black font-bold opacity-0 scale-0 text-[10px]">
        →
      </span>
    </div>
  );
};

export default CustomCursor;