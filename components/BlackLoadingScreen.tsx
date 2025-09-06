'use client';

import React, { useState, useEffect } from 'react';

interface BlackLoadingScreenProps {
  onLoadingComplete: () => void;
}

const BlackLoadingScreen: React.FC<BlackLoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Start as false to prevent hydration issues
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => {
      clearInterval(timer);
    };
  }, [onLoadingComplete, isMounted]);

  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: '#515585' }}>
      <div className="text-center w-full max-w-4xl">
        {/* Speedometer */}
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Semi-circular gauge background */}
          <svg
            className="w-full h-auto"
            viewBox="0 0 400 220"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Semi-circle background */}
            <path
              d="M 50 170 A 150 150 0 0 1 350 170"
              fill="none"
              stroke="#333"
              strokeWidth="6"
              strokeLinecap="round"
            />
            
            {/* Semi-circle progress */}
            <path
              d="M 50 170 A 150 150 0 0 1 350 170"
              fill="none"
              stroke="white"
              strokeWidth="6"
              strokeDasharray={`${(progress / 100) * 471.24} 471.24`}
              strokeDashoffset="0"
              strokeLinecap="round"
              className="transition-all duration-200 ease-out"
            />
            
            {/* Tick marks */}
            {[...Array(21)].map((_, i) => {
              const angle = (i * 180 / 20) * (Math.PI / 180);
              const x1 = 200 + 140 * Math.cos(angle);
              const y1 = 170 - 140 * Math.sin(angle);
              const x2 = 200 + (i % 5 === 0 ? 120 : 130) * Math.cos(angle);
              const y2 = 170 - (i % 5 === 0 ? 120 : 130) * Math.sin(angle);
              
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="white"
                  strokeWidth={i % 5 === 0 ? "3" : "1.5"}
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

                     {/* Needle */}
           <div
             className="absolute top-1/2 left-1/2 w-1.5 h-20 md:h-24 lg:h-28 bg-white origin-bottom transform -translate-x-1/2 -translate-y-full"
             style={{
               transform: `translate(-50%, -100%) rotate(${(progress / 100) * 180 - 90}deg)`,
               transition: 'transform 0.3s ease-out'
             }}
           />

           {/* Percentage Display - Inside Speedometer */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-4 md:translate-y-6 lg:translate-y-8 text-center z-10">
             <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg">
               {Math.round(progress)}
             </div>
             <div className="text-sm md:text-base lg:text-lg text-white font-medium drop-shadow-lg">
               LOADING
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BlackLoadingScreen; 