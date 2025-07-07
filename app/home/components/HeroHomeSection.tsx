import React from 'react';
import Image from 'next/image'; // or <img /> if not using Next.js

const HeroHomeSection = () => {
  return (
    <section className="w-screen bg-[#F6F9FF] py-16 px-6 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
          <h1 className="font-figtree text-3xl md:text-5xl font-semibold primary-text-color">
            Savani Transports Pvt. Ltd. — Wherever With Care
          </h1>
          {/* <button className="bg-brandIndigo text-white px-8 py-4 rounded font-semibold w-max mx-auto md:mx-0">
            Get a quote
          </button> */}
                  <button className="w-[288px] h-[72px] bg-brandIndigo font-figtree text-white text-base font-regular rounded-[2px] flex items-center justify-center border border-brandIndigo hover:bg-white hover:text-brandIndigo">
                      Get a quote
                  </button>

        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full md:w-[65%] flex justify-center">
          <img
            src="/assets/herohome.png" // replace with actual path
            alt="Savani Transport Truck"
            className="w-full h-auto rounded-[2rem] shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHomeSection;
