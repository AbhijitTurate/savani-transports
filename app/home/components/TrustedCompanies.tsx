'use client';

import Image from 'next/image';

const companies = [
  '/assets/company12.svg',
  '/assets/company11.svg',
  '/assets/company9.svg',
  '/assets/company10.svg',
  '/assets/company8.svg',
  '/assets/company7.svg',
  '/assets/company6.svg',
  '/assets/company5.svg',
  '/assets/company4.svg',
  '/assets/company3.svg',
  '/assets/company2.svg',
  '/assets/company1.svg'
];

const TrustedCompanies = () => {
  // Create repeated array for seamless scrolling (like Awards component)
  const repeatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="w-full py-16 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center">
        {/* Heading */}
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-center text-2xl font-normal primary-text-color font-lexend tracking-[-0.02em] md:text-4xl ">Companies that trust us</h2>
        </div>

        {/* Mobile Marquee Layout */}
        <div className="md:hidden w-full overflow-hidden">
          {/* Row 1 */}
  <div className="flex gap-8 animate-scroll [animation-duration:6s] min-w-fit flex-nowrap mb-4">
    {repeatedCompanies.slice(0, Math.ceil(repeatedCompanies.length / 2)).map((logo, index) => (
      <div key={index} className="flex items-center opacity-60 shrink-0">
        <img src={logo} alt={`Company ${index + 1}`} className="h-8 w-auto" />
      </div>
    ))}
  </div>

  {/* Row 2 */}
  <div className="flex gap-8 animate-scroll [animation-duration:6s] min-w-fit flex-nowrap">
    {repeatedCompanies.slice(Math.ceil(repeatedCompanies.length / 2)).map((logo, index) => (
      <div key={index} className="flex items-center opacity-60 shrink-0">
        <img src={logo} alt={`Company ${index + 1}`} className="h-8 w-auto" />
      </div>
    ))}
  </div>
        </div>

        {/* Desktop Grid Layout - Two rows as shown in Figma */}
        <div className="hidden md:flex flex-col items-center gap-10">
          {/* Row 1 - First 6 companies */}
          <div className="flex justify-center items-center gap-16">
            {companies.slice(0, 5).map((logo, index) => (
              <div key={index} className="flex items-center ">
                <img src={logo} alt={`Company ${index + 1}`} width={100} height={100} className="h-12 w-auto" />
              </div>
            ))}
          </div>
          
          {/* Row 2 - Remaining companies */}
          <div className="flex justify-center items-center gap-16">
            {companies.slice(5 , 8).map((logo, index) => (
              <div key={index + 4} className="flex items-center">
                <img src={logo} alt={`Company ${index + 6}`} width={100} height={100} className="h-12 w-auto" />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-16">
              {companies.slice(8).map((logo, index) => (
                <div key={index + 4} className="flex items-center">
                <img src={logo} alt={`Company ${index + 7}`} width={100} height={100} className="h-12 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
