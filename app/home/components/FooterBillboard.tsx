'use client';
import React from 'react';
import ContactButton from '@/components/ContactButton';

const FooterBillboard = () => {
  return (
    <section className="w-full overflow-x-hidden">

        {/* Banner with rounded corners and grid pattern */}
        <div className="relative rounded-2xl bg-[#515585] overflow-hidden">
          {/* Square Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-20 z-0 pointer-events-none"
            style={{
                backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 6px, transparent 6px)`,
                backgroundSize: '32px 32px',
              borderRadius: '1rem'
            }}
          />
                        <div className="text-white flex flex-col w-full px-10 py-16 z-20 gap-8 items-center justify-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-figtree font-bold leading-tight md:whitespace-nowrap">
              Ready to propel your business forward?
              </h1>

              
              <div>
                <ContactButton 
                  variant="primary" 
                  size="lg"
                  className="bg-white text-[#515585] hover:bg-gray-100 w-[288px] h-[72px] mx-auto md:mx-0"
                >
                  Get a quote
                </ContactButton>
              </div>
            </div>
        </div>
        
    </section>
  );
};

export default FooterBillboard;
