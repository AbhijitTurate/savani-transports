import ContactButton from "@/components/ContactButton";

export default function TransportSolutions() {
    const services = [
        {
            title: "FTL (Full Truck Load)",
            description: "Entire truck booked, faster delivery, ideal for bulk business consignments",
            icon: "/assets/truck-loaded.svg"
        },
        {
            title: "PTL (Part Truck Load)",
            description: "Share truck space, cost-effective option for medium or small shipments",
            icon: "/assets/truck.svg"
        },
        {
            title: "SRL (Surface Rail Logistics)",
            description: "Rail transport for heavy goods, economical, reliable for long distances",
            icon: "/assets/rail-road.svg"
        },
        {
            title: "Parcel Delivery System",
            description: "Small packages delivered safely, affordable, suitable for individuals and businesses",
            icon: "/assets/solar-box.svg"
        },
        {
            title: "Door to Door Service",
            description: "Savani Transport ensures your package's safety with secure packaging and tracking.",
            icon: "/assets/door-open.svg"
        },
        {
            title: "Custom Booking",
            description: "Tailor transport as per cargo, route, timing and budget",
            icon: "/assets/Ruler.svg"
        }
    ];

    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16">
            {/* Left Section */}
            {/* <div className="w-auto min-w-0 max-w-[820px]">
                <h1 className="text-40 font-semibold font-figtree text-primary-text-color mb-4 md:mb-6 tracking-[-0.02em]">
                    Comprehensive Transport Solutions
                </h1>
                <p className="text-base font-figtree font-regular mb-8 tracking-[-0.02em]">
                    For over 80 years, Savani Transports Pvt. Ltd. has been a trusted leader in India’s logistics and transportation industry. With a network of 310+ branches and a fleet of modern vehicles, we provide seamless, secure, and efficient delivery solutions across diverse industries. Whether it’s bulk cargo, door-to-door delivery, or specialized logistics, we tailor our services to meet your unique needs.
                </p>
                <ContactButton variant="outline" size="md">
                    Contact Us
                </ContactButton>
            </div> */}
            {/* <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 service-grid">
            {services.map((service, index) => (
                    <div
                        key={index}
                        className={`p-4 lg:p-11 flex flex-col justify-center items-start gap-3`}
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
