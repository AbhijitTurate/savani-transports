'use client';
import React from 'react';
import ContactButton from '@/components/ContactButton';

const BillboardBanner = () => {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="relative mx-auto">
        {/* Banner with rounded corners and grid pattern */}
        <div className="relative rounded-2xl bg-[#515585] overflow-hidden">
          {/* Square Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-20 z-0"
            style={{
                backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 6px, transparent 6px)`,
                backgroundSize: '32px 32px',
              borderRadius: '1rem'
            }}
          />
          
          <div className="relative flex flex-col md:flex-row items-center md:items-end justify-between gap-12 px-6 md:px-14 py-12 md:py-16 z-10">
            {/* Left content */}
            <div className="max-w-xl text-white flex flex-col w-full md:w-auto z-20 gap-14">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-figtree font-bold leading-tight md:whitespace-nowrap">
                Built to Deliver. Trusted to Perform.
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-white/90">
                Powered by the wheels that move India, we ensure precise, reliable
                deliveries with strong pan-city networks thus driving efficiency
                and long-term growth for your business.
              </p>
              
              <div>
                <ContactButton 
                  variant="primary_white" 
                  size="lg"
                  className="w-[288px] h-[72px] mx-auto md:mx-0"
                >
                  Get a quote
                </ContactButton>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trucks container - positioned absolutely to extend beyond banner */}
        <div className="relative w-full hidden md:block md:absolute md:right-[35px] md:bottom-[35px] md:w-auto z-20 md:-mb-8 md:-mr-8">
          <div className="flex justify-center md:justify-end items-end">
            {/* Container for overlapping trucks - extends beyond banner */}
            <div className="relative">
              {/* First truck (behind, left - ghosted/transparent) */}
              <div 
                className="absolute z-0"
                style={{ 
                  transform: 'translateX(-170px) translateY(-50px)',
                  // opacity: 0.25
                }}
              >
                <img
                  src="/assets/billboard.png"
                  alt="Savani Transport Truck"
                  className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
                  style={{ maxHeight: '450px', height: 'auto' }}
                />
              </div>
              
              {/* Second truck (in front, right - solid) */}
              <div className="relative z-10">
                <img
                  src="/assets/billboard.png"
                  alt="Savani Transport Trucks"
                  className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
                  style={{ maxHeight: '500px', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillboardBanner;
