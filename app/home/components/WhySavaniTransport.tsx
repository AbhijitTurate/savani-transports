'use client';
import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  target: string;
  duration?: number;
}

function Counter({ target, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLParagraphElement>(null);

  // Parse the target number from strings like "70+", "6–8", "110", etc.
  const parseTarget = (targetStr: string): number => {
    // Handle range like "6–8" - use the first number
    if (targetStr.includes('–')) {
      return parseInt(targetStr.split('–')[0]) || 0;
    }
    // Handle numbers with + like "70+", "30+"
    const numStr = targetStr.replace(/[^0-9]/g, '');
    return parseInt(numStr) || 0;
  };

  // Get the suffix (like "+", "–8", etc.)
  const getSuffix = (targetStr: string): string => {
    if (targetStr.includes('–')) {
      return '–' + targetStr.split('–')[1];
    }
    if (targetStr.includes('+')) {
      return '+';
    }
    return '';
  };

  const targetNumber = parseTarget(target);
  const suffix = getSuffix(target);

  useEffect(() => {
    if (hasAnimated || targetNumber === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const startTime = Date.now();
            const startValue = 0;
            const endValue = targetNumber;

            const animate = () => {
              const now = Date.now();
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
              
              setCount(currentValue);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(endValue);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [targetNumber, duration, hasAnimated]);

  return (
    <p ref={elementRef} className="text-2xl font-lexend font-regular whitespace-pre-line">
      {count}{suffix}
    </p>
  );
}

export default function WhySavaniTransport() {
  const items = [
    {
      numbers: "70+",
      label: "Branches",
      icon: "whysavani.svg",
      highlight: true,
    },
    {
      numbers: "10+",
      label: "Industries serviced",
      icon: "whysavani1.svg",
      highlight: false,
    },
    {
      numbers: "125+",
      label: "Workforce",
      icon: "whysavani2.svg",
      highlight: true,
    },
    {
      numbers: "6–8",
      label: "Days Delivery",
      icon: "whysavani3.svg",
      highlight: false,
    },
    {
      numbers: "30+",
      label: "Million consignments\ndelivered",
      icon: "whysavani4.svg",
      highlight: true,
    },
    {
      numbers: "8",
      label: "Decades of\nlegacy",
      icon: "whysavani5.svg",
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#F6F8FF] w-screen py-20 px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
        Why Savani Transport?
      </h2>

      <div className="max-w-4xl mx-auto">
        <div
          className="grid grid-cols-2 md:grid-cols-3 auto-rows-fr"
          style={{ gap: "18px" }}
        >
          {items.map((item, index) => {
            // Check if this item should have blue bg on mobile
            const shouldHaveBlueBgMobile = 
              item.numbers === "70+" || 
              item.numbers === "6–8" || 
              item.numbers === "30+";
            
            // Mobile: blue bg for specific items, light bg for others
            // Desktop: use highlight property
            const mobileBgClass = shouldHaveBlueBgMobile 
              ? "bg-[#6E91FB] text-white" 
              : "bg-[#E1E8FE] text-gray-800";
            
            const desktopBgClass = item.highlight
              ? "md:bg-[#6E91FB] md:text-white"
              : "md:bg-[#E1E8FE] md:text-gray-800";
            
            // Icon color filters for mobile only
            // Calendar icon (6–8 days delivery) - white on mobile
            const isCalendar = item.numbers === "6–8";
            // Workforce icon (110) - blue on mobile
            const isWorkforce = item.numbers === "110";
            
            const iconClassName = isCalendar 
              ? "icon-calendar-mobile" 
              : isWorkforce 
              ? "icon-workforce-mobile" 
              : "";
            
            return (
              <div
                key={index}
                className={`rounded-xl flex flex-col items-center justify-center text-center aspect-[4/5] md:aspect-square p-6 transition-all overflow-hidden w-full ${mobileBgClass} ${desktopBgClass}`}
              >
                <div className="text-3xl mb-3 md:mb-4 flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={`/assets/${item.icon}`} 
                    alt={item.label} 
                    width={60} 
                    height={60}
                    className={`${iconClassName} object-contain`}
                  />
                </div>
                <div className="flex-shrink-0 mb-2 md:mb-2">
                  <Counter target={item.numbers} />
                </div>
                <p className="text-xs md:text-sm font-lexend font-regular whitespace-pre-line flex-shrink-0 leading-tight px-1">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
