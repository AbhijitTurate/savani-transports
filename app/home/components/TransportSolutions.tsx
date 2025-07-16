export default function TransportSolutions() {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16">
            {/* Left Section */}
            <div className="w-auto min-w-0 max-w-[820px]">
                <h1 className="text-40 font-semibold font-figtree text-primary-text-color mb-4 md:mb-6 tracking-[-0.02em]">
                    Comprehensive Transport Solutions
                </h1>
                <p className="text-base font-figtree font-regular mb-8 tracking-[-0.02em]">
                    For over 80 years, Savani Transports Pvt. Ltd. has been a trusted leader in India’s logistics and transportation industry. With a network of 310+ branches and a fleet of modern vehicles, we provide seamless, secure, and efficient delivery solutions across diverse industries. Whether it’s bulk cargo, door-to-door delivery, or specialized logistics, we tailor our services to meet your unique needs.
                </p>
                <button className="px-14 py-4 bg-transparent border border-brandIndigo text-brandIndigo font-semibold test-base hover:bg-brandIndigo hover:text-white transition">
                    Contact Us
                </button>
            </div>
            {/* <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                {[
                    { title: "Diverse Logistics Solutions", description: "Road transport, warehousing, and supply chain solutions.", icon: "/assets/road.svg" },
                    { title: "Fast Paced", description: "Savani Transport gets your goods there faster—with optimized routes, real-time tracking, and zero unnecessary stops.", icon: "/assets/shield.svg" },
                    { title: "Nationwide Network ", description: "310+ branches ensuring smooth connectivity across India.", icon: "/assets/india_flag.png" },
                    { title: "Secure Delivery", description: "Savani Transport ensures your package's safety with secure packaging and tracking.", icon: "/assets/shield.svg" },
                    // { title: "Service 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: "/assets/speed.svg" },
                    // { title: "Service 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: "/assets/road.svg" },
                ].map((service, index) => (
                    <div
                        key={index}
                        className={`${(index === 1 || index === 2) ? 'bg-tertiary-bg-color' : ''}  p-4 lg:p-11 flex flex-col justify-center items-start gap-2.5`}
                    >
                        <img
                            src={service.icon}
                            alt={service.title}
                            className="w-10 h-10"
                        />
                        <h2 className="text-2xl text-primary-text-color font-figtree ">
                            {service.title}
                        </h2>
                        <p className="text-sm text-primary-text-color font-figtree ">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    );
}
