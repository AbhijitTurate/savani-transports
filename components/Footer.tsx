import ContactButton from "./ContactButton";

export default function Footer() {
    return (
        <footer className="bg-black text-white mt-auto">
            <div className="flex flex-col md:flex-row gap-12 md:gap-[12.375rem] items-center justify-between mx-8 md:mx-[5.25rem] my-8">
                {/* Logo and Address Section */}
                <div className="flex flex-col items-center gap-4 md:gap-12 md:items-start text-center md:text-left w-full md:w-1/2">
                    <img
                        src="/assets/logo.svg" // Update path to match your logo file
                        alt="Savani Logo"
                        className="h-16 w-16 mx-auto md:mx-0"
                    />
                    <p className="text-base	 font-figtree font-semibold tracking-22">
                        Savani Transports Pvt Limited 809A, Broadway Centre, 2nd Floor,
                        Dr. Ambedkar Road, Dadar (E), Mumbai - 400 014. Tel. Nos: (022)
                        43540000
                    </p>
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-col md:flex-row gap-4 md:gap-20 items-center space-y-4 md:space-y-0 md:space-x-8 w-full md:w-1/2 text-lg mt-6 md:mt-0">
                    <li>
                        <a href="/" className="hover:text-gray-400 font-figtree font-regular text-2xl">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-gray-400 font-figtree font-regular text-2xl">
                            About Us
                        </a>
                    </li>
                    {/* <li>
                        <a href="/legacy" className="hover:text-gray-400 font-figtree font-regular text-2xl">
                            Legacy
                        </a>
                    </li> */}
                    {/* <li>
                        <a href="/track-shipment" className="hover:text-gray-400 font-figtree font-regular text-2xl">
                            Track Shipment
                        </a>
                    </li> */}
                    <li>
                        <ContactButton variant="outline" size="md">
                            Contact Us
                        </ContactButton>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
