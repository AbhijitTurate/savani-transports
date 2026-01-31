import React from 'react';

const awardImages = [
  '/assets/award1.png',
  '/assets/award2.png',
  '/assets/award3.png',
  '/assets/award4.png',
  '/assets/award5.png',
  '/assets/award6.png',
];

const Awards = () => {
  const repeatedImages = [...awardImages, ...awardImages, ...awardImages];

  return (
    <section id="legacy" className="relative w-screen overflow-x-hidden py-10  bg-white">
      <h2 className="text-center text-2xl font-normal primary-text-color font-lexend md:text-4xl mb-10">
        Awards and Legacy
      </h2>

      <div className="overflow-hidden">
        <div className="flex gap-8 animate-scroll min-w-fit flex-nowrap">
          {repeatedImages.map((src, index) => (
            <div
              key={index}
              className="w-[250px] h-[294px] bg-[#F6F6F6] rounded-[27px] flex items-center justify-center shrink-0 shadow-md"
            >
              <img
                src={src}
                alt={`Award ${index + 1}`}
                className="max-h-[90%] max-w-[90%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
