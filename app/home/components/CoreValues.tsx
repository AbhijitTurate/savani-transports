'use client';
import React, { useState, useEffect, useRef } from 'react';

const values = [
  {
    title: "Wherever With Care",
    description: "Care defines how we operate. Every consignment is handled with responsibility, attention, and respect, because behind every shipment is a business that depends on us."
  },
  {
    title: "Reliability Through Experience",
    description: "Decades of on-ground experience enable us to deliver consistently, even in complex and time-sensitive situations across India."
  },
  {
    title: "Customer-Centric Partnerships",
    description: "We build long-term relationships by understanding our customers' needs and delivering solutions that support their business objectives."
  },
  {
    title: "Safety and Responsibility",
    description: "Safety is non-negotiable. We prioritise secure cargo movement and disciplined operations to protect goods, people, and partnerships."
  },
  {
    title: "Evolving With Purpose",
    description: "Rooted in legacy, we continuously improve systems and processes to remain efficient, dependable, and future-ready."
  }
];

const CoreValues = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Get the content's position relative to viewport
      const contentTop = contentRect.top;
      const contentHeight = contentRect.height;

      // Calculate progress: 0 when content enters viewport, 1 when it exits
      // Start tracking when content top reaches viewport top
      // Finish when content bottom reaches viewport top
      
      // When content hasn't entered viewport yet
      if (contentTop > windowHeight) {
        setScrollProgress(0);
        return;
      }

      // When content has completely scrolled past
      if (contentTop + contentHeight < 0) {
        setScrollProgress(1);
        return;
      }

      // Content is in viewport - calculate progress
      // Total scrollable distance: from when content enters to when it exits
      const totalDistance = contentHeight + windowHeight;
      
      // How much has been scrolled: distance from entry point to current position
      // Entry point: contentTop = windowHeight (scrolled = 0)
      // Exit point: contentTop + contentHeight = 0 (scrolled = totalDistance)
      const scrolled = windowHeight - contentTop;
      
      // Calculate progress (0 to 1)
      const calculatedProgress = Math.max(0, Math.min(1, scrolled / totalDistance));
      
      setScrollProgress(calculatedProgress);
    };

    // Initial calculation
    handleScroll();

    // Listen to window scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Calculate which circles should be filled based on progress
  const getCircleFill = (index: number) => {
    const totalItems = values.length;
    const progressPerItem = 1 / totalItems;
    const itemProgress = (index + 1) * progressPerItem;
    return scrollProgress >= itemProgress;
  };

  return (
    <div className="w-full flex flex-col gap-8 md:gap-12" ref={sectionRef}>
      <h2 className="text-3xl md:text-40 font-semibold font-figtree text-primary-text-color">
        Core Values
      </h2>
      
      <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 relative" ref={contentRef}>
        {/* Base vertical timeline line - light gray */}
        <div className="hidden md:block absolute left-[40%] top-8 md:top-12 bottom-8 md:bottom-12 w-0.5 bg-gray-200"></div>
        
        {/* Progress vertical timeline line - gets darker as you scroll */}
        <div
          className="hidden md:block absolute left-[40%] top-8 md:top-12 w-0.5 bg-gray-800 transition-all duration-300 ease-out"
          style={{ 
            height: `${scrollProgress * 100}%`,
            maxHeight: 'calc(100% - 6rem)'
          }}
        ></div>
        
        <div className="flex flex-col gap-8 md:gap-10">
          {values.map((value, index) => {
            const isFilled = getCircleFill(index);
            return (
              <div key={index} className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                {/* Timeline circle - fills progressively */}
                <div 
                  className={`hidden md:block absolute left-[calc(40%-6px)] top-1 w-3 h-3 rounded-full border-2 border-white z-10 transition-all duration-300 ${
                    isFilled ? 'bg-gray-800' : 'bg-gray-200'
                  }`}
                ></div>
                
                {/* Content */}
                <div className="md:pl-12 flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold font-figtree text-primary-text-color md:w-2/5">
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base font-figtree text-primary-text-color-70 md:w-3/5 md:text-left">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
