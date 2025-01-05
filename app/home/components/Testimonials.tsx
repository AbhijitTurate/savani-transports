export default function Testimonials() {
    const testimonials = [
        {
            name: "Rahul Mehta",
            designation: "Partner, ControlMinds Labs",
            description: "Co-Founder & Former CEO, Hansa Cequity",
            quote:
                "Savani Transports has been our go-to partner for over a decade. Their reliability and timely deliveries have been crucial for our business operations.",
        },
        {
            name: "Manzil Viseria",
            designation: "Co-Founder CEO",
            description: "Vizard PDF Exports",
            quote:
                "Savani Transports always delivers, and they never disappoint. Their commitment to safety and being right on time keeps us coming back for more.",
        },
        {
            name: "S. Swaminathan",
            designation: "Partner, ControlMinds Labs",
            description: "Co-Founder & Former CEO, Hansa Cequity",
            quote:
                "The professionalism and efficiency of Savani Transports are unmatched. We trust them with our high-value shipments, knowing they'll be handled with care.",
        },
        {
            name: "Vikram Patel",
            designation: "Supply Chain Director",
            description: "Global Exports Ltd.",
            quote:
                "Their extensive branch network and cost-effective services make them the perfect logistics partner for our nationwide operations. We couldn't ask for more.",
        },
    ];

    return (
        <section >
            <h2 className="text-center text-2xl font-normal primary-text-color font-lexend md:text-40 mb-8 md:mb-20">
                Here’s what our clients have to say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[6.5rem]">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start md:max-w-[19.75rem] md:w-auto "
                    >
                        <p className="text-xl font-normal primary-text-color font-lexend mb-2">{testimonial.name}</p>
                        <p className="text-sm font-light primary-text-color font-lexend">{testimonial.designation}</p>
                        <p className="text-sm font-light primary-text-color font-lexend mb-6">{testimonial.description}</p>
                        <img src="/assets/quote.svg" alt="Quote" className="w-8 h-auto mb-2" />
                        {/* <span className="text-2xl font-semibold primary-text-color font-lexend w-8 h-8 mb-2">“</span> */}
                        <p className="text-sm font-light primary-text-color font-lexend">{testimonial.quote}</p>
                        {/* <blockquote className="primary-text-color text-sm italic">
                                {testimonial.quote}
                            </blockquote> */}
                    </div>
                ))}
            </div>

        </section>
    );
}
