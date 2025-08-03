'use client';

import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const speedTimer = setInterval(() => {
      setSpeed(prev => {
        if (prev >= 120) {
          clearInterval(speedTimer);
          return 120;
        }
        return prev + 3;
      });
    }, 100);

    return () => {
      clearInterval(timer);
      clearInterval(speedTimer);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/assets/logo.svg"
            alt="Savani Transports"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800">Savani Transports</h1>
        </div>

        {/* Speedometer */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          {/* Speedometer Background */}
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${(progress / 100) * 283} 283`}
              className="transition-all duration-300 ease-out"
            />
            
            {/* Speedometer Markings */}
            {[...Array(13)].map((_, i) => {
              const angle = (i * 30 - 90) * (Math.PI / 180);
              const x1 = 50 + 40 * Math.cos(angle);
              const y1 = 50 + 40 * Math.sin(angle);
              const x2 = 50 + 35 * Math.cos(angle);
              const y2 = 50 + 35 * Math.sin(angle);
              
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={i % 3 === 0 ? "#6b7280" : "#d1d5db"}
                  strokeWidth={i % 3 === 0 ? "2" : "1"}
                />
              );
            })}
          </svg>

          {/* Speed Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold text-gray-800">{speed}</div>
            <div className="text-sm text-gray-600">km/h</div>
          </div>

          {/* Needle */}
          <div
            className="absolute top-1/2 left-1/2 w-1 h-12 bg-red-500 origin-bottom transform -translate-x-1/2 -translate-y-full"
            style={{
              transform: `translate(-50%, -100%) rotate(${(speed / 120) * 240 - 120}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <div className="text-lg font-semibold text-gray-800">
            {progress < 30 && "Initializing..."}
            {progress >= 30 && progress < 60 && "Loading Services..."}
            {progress >= 60 && progress < 90 && "Preparing Routes..."}
            {progress >= 90 && "Almost Ready..."}
          </div>
          
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="text-sm text-gray-600">{progress}%</div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-1 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 