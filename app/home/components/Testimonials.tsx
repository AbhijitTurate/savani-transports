'use client';
import { useState } from 'react';

export default function Testimonials() {
    const [isPaused, setIsPaused] = useState(false);
    
    const testimonials = [
        {
            name: "A International",
            description: "Indenting company for Polymers, Textile, Natural Rubber & Specialty Chemicals",
            quote:
                "M/S Savani Transports Private Limited, having their corporate office in Dadar, Mumbai is one of our regular transports and we are satisfied with their services",
        },
        {
            name: "Pari Chemicals",
            description: "widely recognized as an eminent exporter, manufacturer and distributor for offering Food Grade Chemicals",
            quote:
                "M/S Savani Transports Private Limited, have been one of our consistent transporters and we are satisfied with their prompt and timely services. ",
        },
        {
            name: "Avlock International",
            description: "An Indo-South African joint venture A Leading Manufacturer and Distributor of Speciality Fasteners",
            quote:
                "M/S Savani Transports Pvt Ltd, has been with us for nearly a decade and continue being with us and we are extremely satisfied with their services and response time.",
        },
        {
            name: "Precot Limited",
            description: "Leading exporter of cotton and personal hygiene products",
            quote:
                "Savani Transports Private Limited is our regular transporter and we have complete trust and faith in their services and are satisfied with the transport service and their prompt services.",
        },
        {
            name: "Universal Chemicals (India)",
            description: "Leading Manufacturer, Exporter & Supplier of a wide variety of Barium Salts",
            quote:
                "Savani Transports Private Limited is our regular transporter and we have complete trust and faith in their services and are satisfied with the transport service and their prompt services.",
        },
    ];

    const repeatedTestimonials = [...testimonials, ...testimonials , ...testimonials , ...testimonials];
    
    return (
        <section id="testimonials" className="w-screen overflow-x-hidden -mx-8 md:-mx-[5.25rem]">
            <div className="px-8 md:px-[5.25rem] pb-4">
                <h2 className="text-center text-2xl font-normal primary-text-color font-lexend md:text-40 mb-8 md:mb-20">
                    Here's what our clients have to say
                </h2>
            </div>
            
            <div className="overflow-x-hidden w-full pb-4">
                <div 
                    className={`flex flex-nowrap gap-6 animate-marquee w-max ${isPaused ? 'animation-paused' : ''}`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {repeatedTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-[320px] md:w-[380px] flex flex-col items-start bg-gray-100 rounded-lg shadow-md px-8 py-10"
                            onTouchStart={() => setIsPaused(true)}
                            onTouchEnd={() => setIsPaused(false)}
                        >
                            <p className="text-xl font-normal primary-text-color font-lexend mb-2">
                                {testimonial.name}
                            </p>
                            <p className="text-sm font-light primary-text-color font-lexend mb-6">
                                {testimonial.description}
                            </p>
                            <img src="/assets/quote.svg" alt="Quote" className="w-8 h-auto mb-2" />
                            <p className="text-sm font-light primary-text-color font-lexend">
                                {testimonial.quote}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
