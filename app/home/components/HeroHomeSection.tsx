'use client';

import React from 'react';
import ContactButton from '@/components/ContactButton';

const HeroHomeSection = () => {
  return (
    <section className="w-screen bg-[#E4F1FA] py-16 px-6 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
          <h1 className="font-figtree text-3xl md:text-5xl font-semibold primary-text-color">
            Savani Transports Pvt. Ltd. — Wherever With Care
          </h1>
          <ContactButton 
            variant="primary" 
            size="lg"
            className="w-[288px] h-[72px] mx-auto md:mx-0"
          >
            Get a quote
          </ContactButton>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full md:w-[65%] flex justify-center">
          <img
            src="/assets/herohome_new.png"
            alt="Savani Transport Truck"
            className="w-full h-auto rounded-[2rem] shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHomeSection;
