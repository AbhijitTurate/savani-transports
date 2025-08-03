'use client';

import React, { useState, useEffect } from 'react';

interface AdvancedLoadingScreenProps {
  onLoadingComplete: () => void;
}

const AdvancedLoadingScreen: React.FC<AdvancedLoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing Transport Network...",
    "Loading Fleet Management...",
    "Preparing Route Optimization...",
    "Connecting to Logistics Hub...",
    "Almost Ready to Deliver..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 50);

    const speedTimer = setInterval(() => {
      setSpeed(prev => {
        if (prev >= 120) {
          clearInterval(speedTimer);
          return 120;
        }
        return prev + 2.5;
      });
    }, 80);

    const textTimer = setInterval(() => {
      setCurrentText(prev => {
        if (prev >= loadingTexts.length - 1) {
          clearInterval(textTimer);
          return loadingTexts.length - 1;
        }
        return prev + 1;
      });
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(speedTimer);
      clearInterval(textTimer);
    };
  }, [onLoadingComplete, loadingTexts.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Logo and Brand */}
        <div className="mb-8 animate-fade-in">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <img
              src="/assets/logo.svg"
              alt="Savani Transports"
              className="w-full h-full object-contain"
            />
            {/* Rotating ring around logo */}
            <div className="absolute inset-0 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Savani Transports</h1>
          <p className="text-gray-600 text-sm">Wherever With Care</p>
        </div>

        {/* Speedometer */}
        <div className="relative w-56 h-56 mx-auto mb-8">
          {/* Speedometer Background */}
          <svg
            className="w-full h-full transform -rotate-90 drop-shadow-lg"
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
            
            {/* Progress Circle with gradient */}
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#progressGradient)"
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

            {/* Speed numbers */}
            {[0, 30, 60, 90, 120].map((speedValue, i) => {
              const angle = ((speedValue / 120) * 240 - 120) * (Math.PI / 180);
              const x = 50 + 30 * Math.cos(angle);
              const y = 50 + 30 * Math.sin(angle);
              
              return (
                <text
                  key={speedValue}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs font-semibold fill-gray-600"
                  transform={`rotate(${(speedValue / 120) * 240 - 120 + 90}, ${x}, ${y})`}
                >
                  {speedValue}
                </text>
              );
            })}
          </svg>

          {/* Speed Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-gray-800 mb-1">{speed}</div>
            <div className="text-sm text-gray-600 font-medium">km/h</div>
          </div>

          {/* Needle */}
          <div
            className="absolute top-1/2 left-1/2 w-1 h-14 bg-red-500 origin-bottom transform -translate-x-1/2 -translate-y-full shadow-lg"
            style={{
              transform: `translate(-50%, -100%) rotate(${(speed / 120) * 240 - 120}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <div className="h-8 flex items-center justify-center">
            <div className="text-lg font-semibold text-gray-800 transition-all duration-500">
              {loadingTexts[currentText]}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="text-sm text-gray-600 font-medium">{Math.round(progress)}%</div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>

        {/* Transport Icons */}
        <div className="flex justify-center space-x-8 mt-8 opacity-30">
          <div className="w-8 h-8">
            <svg fill="currentColor" viewBox="0 0 24 24" className="text-blue-600">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
          </div>
          <div className="w-8 h-8">
            <svg fill="currentColor" viewBox="0 0 24 24" className="text-indigo-600">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="w-8 h-8">
            <svg fill="currentColor" viewBox="0 0 24 24" className="text-blue-600">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdvancedLoadingScreen; 