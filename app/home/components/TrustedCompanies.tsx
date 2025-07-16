import Image from 'next/image';

const companies = [
  { name: 'Layers', logo: '/assets/company1.svg' },
  { name: 'Quotient', logo: '/assets/company2.svg' },
  { name: 'Sisyphus', logo: '/assets/company3.svg' },
  { name: 'Hourglass', logo: '/assets/company4.svg' },
  { name: 'Capsule', logo: '/assets/company5.svg' },
  { name: 'Command+R', logo: '/assets/company6.svg' },
  { name: 'Catalog', logo: '/assets/company7.svg' },
  { name: 'GlobalBank', logo: '/assets/company8.svg' },
  { name: 'Spherule', logo: '/assets/company9.svg' }
];

const TrustedCompanies = () => {
  return (
    <section className="w-full py-16 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 items-center">
        {/* Heading */}
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-center text-2xl font-normal primary-text-color font-lexend tracking-[-0.02em] md:text-4xl mb-10">Companies that trust us</h2>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-col items-center gap-10">
          {/* Row 1 - 5 items */}
          <div className="flex flex-wrap justify-center gap-[88px]">
            {companies.map((company, index) => (
              <div key={index} className="flex flex-row gap-2 items-center opacity-60 hover:opacity-100 transition-opacity">
                <img src={company.logo} alt={company.name} />
                <span className="text-center text-2xl font-normal font-lexend  text-gray-500">{company.name}</span>
              </div>
            ))}
          </div>

          {/* Row 2 - 4 items */}
          {/* <div className="flex flex-wrap justify-center gap-[88px]">
            {companies.slice(5).map((company, index) => (
              <div key={index} className="flex flex-row gap-2 items-center opacity-60 hover:opacity-100 transition-opacity">
                <img src={company.logo} alt={company.name} />
                <span className="text-center text-2xl font-normal font-lexend md:text-4xl text-gray-500">{company.name}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
