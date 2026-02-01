'use client';

import React, { useEffect, useRef, useState } from 'react';

const SimpleTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotPositions, setDotPositions] = useState<number[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current as HTMLDivElement;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollStart = rect.top;
      const scrollEnd = rect.bottom - windowHeight;
      const totalScroll = rect.height - windowHeight;

      if (scrollStart > 0) {
        setScrollProgress(0);
        setActiveIndex(0);
      } else if (scrollEnd < 0) {
        setScrollProgress(100);
        setActiveIndex(values.length - 1);
      } else {
        const progress = (Math.abs(scrollStart) / totalScroll) * 100;
        setScrollProgress(Math.min(progress, 100));

        const index = Math.floor((progress / 100) * values.length);
        setActiveIndex(Math.min(index, values.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [values.length]);

  useEffect(() => {
    const updateDotPositions = () => {
      if (!timelineContainerRef.current) return;

      const positions = titleRefs.current.map((titleRef) => {
        if (!titleRef || !timelineContainerRef.current) return 0;
        const titleRect = titleRef.getBoundingClientRect();
        const containerRect = timelineContainerRef.current.getBoundingClientRect();
        return titleRect.top - containerRect.top + titleRect.height / 2;
      });

      setDotPositions(positions);
    };

    updateDotPositions();
    window.addEventListener('resize', updateDotPositions);
    window.addEventListener('scroll', updateDotPositions);

    return () => {
      window.removeEventListener('resize', updateDotPositions);
      window.removeEventListener('scroll', updateDotPositions);
    };
  }, []);

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8">
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 lg:mb-15">
          Core Values
        </h1>

        <div className="max-w-6xl mx-auto bg-[#F9F9F9] p-6 lg:p-10 rounded-lg">
        {/* Timeline Container */}
        <div className="relative" ref={timelineContainerRef}>
          {/* Background line (light gray) - Mobile: 86%, Desktop: full */}
          <div 
            className="absolute top-4 w-0.5 bg-gray-300 left-[0.40rem] lg:left-[calc(33.333%-2px)] timeline-line"
          ></div>

          {/* Animated progress line - Mobile: 86%, Desktop: full */}
          <div
            className="absolute top-4 w-0.5 bg-gray-600 transition-all duration-300 ease-out left-[0.40rem] lg:left-[calc(33.333%-2px)] timeline-progress-line"
            style={{
              height: `${scrollProgress}%`
            }}
          ></div>

          {/* Values List */}
          <div className="space-y-12 lg:space-y-16">
            {values.map((value, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row lg:items-start gap-1 lg:gap-16 transition-all duration-500 ${index <= activeIndex ? 'opacity-100' : 'opacity-50'
                  }`}
              >
                {/* Left side - Title and Timeline */}
                <div className="lg:w-1/3 flex flex-row-reverse lg:flex-row items-center gap-6">
                  <h2
                    ref={(el) => { titleRefs.current[index] = el; }}
                    className={`text-xl sm:text-2xl font-medium  pl-6 lg:pl-0 flex-1 transition-colors duration-500 ${index <= activeIndex ? 'text-gray-900' : 'text-gray-500'
                      }`} 
                  >
                    {value.title}
                  </h2>
                </div>

                {/* Timeline dot - positioned relative to timeline container, aligned with title */}
                {dotPositions[index] !== undefined && (
                  <div 
                    className="absolute z-10 flex-shrink-0 left-[0.45rem] lg:left-[calc(33.333%-1px)]"
                    style={{
                      transform: 'translateX(-50%) translateY(-50%)',
                      top: `${dotPositions[index]}px`
                    }}
                  >
                    <div
                      className={`w-3 h-3 rounded-full border flex items-center justify-center transition-all duration-500 ${index <= activeIndex
                          ? 'bg-gray-800 border-gray-800'
                          : 'bg-white border-gray-300'
                        }`}
                    >
                    </div>
                  </div>
                )}

                {/* Right side - Description */}
                <div className="lg:w-2/3 pl-6 lg:pl-0">
                  <p
                    className={`text-base sm:text-lg leading-relaxed transition-colors duration-500 ${index <= activeIndex ? 'text-gray-900' : 'text-gray-600'
                      }`}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTimeline;