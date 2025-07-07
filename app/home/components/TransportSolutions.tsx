export default function TransportSolutions() {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16">
            {/* Left Section */}
            <div className="w-auto min-w-0">
                <h1 className="text-40 font-semibold font-figtree text-primary-text-color mb-4 md:mb-6">
                    Comprehensive Transport Solutions
                </h1>
                <p className="text-base font-figtree font-regular mb-8">
                    From heavy-duty cargo to door-to-door delivery, we offer a full range of logistics services tailored to your needs.
                </p>
                <button className="px-14 py-4 bg-transparent border border-brandIndigo text-brandIndigo font-semibold test-base hover:bg-brandIndigo hover:text-white transition">
                    Contact Us
                </button>
            </div>

            {/* Right Section */}
            {/* <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {[
                    { title: "Service 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: "/assets/road.svg" },
                    { title: "Service 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: "/assets/shield.svg" },
                    { title: "Service 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: "/assets/speed.svg" },
                    { title: "Service 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: "/assets/shield.svg" },
                    { title: "Service 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: "/assets/speed.svg" },
                    { title: "Service 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: "/assets/road.svg" },
                ].map((service, index) => (
                    <div
                        key={index}
                        // className={`${index % 2 == 0 ? 'bg-tertiary-bg-color' : ''} p-11 flex flex-col justify-center items-start lg:w-[19.625rem] lg:h-[16.125.rem] gap-2.5`}
                        className={`${index % 2 == 0 ? 'bg-tertiary-bg-color' : ''}  p-4 lg:p-11 flex flex-col justify-center items-start gap-2.5`}

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
