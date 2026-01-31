"use client";
import { useContactModal } from "./ContactModalContext";

export default function Footer() {
    const { openContactModal } = useContactModal();
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
                <ul className="flex flex-row flex-wrap gap-x-4 md:gap-x-8 gap-y-2 items-center justify-center md:justify-start w-full md:w-1/2 text-lg mt-6 md:mt-0">
                    <li>
                        <a href="/" className="hover:text-gray-400 font-figtree font-regular text-2xl whitespace-nowrap">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-gray-400 font-figtree font-regular text-2xl">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="/about#legacy" className="hover:text-gray-400 font-figtree font-regular text-2xl whitespace-nowrap">
                            legacy
                        </a>
                    </li>
                    <li>
                        <a href="/our-services" className="hover:text-gray-400 font-figtree font-regular text-2xl whitespace-nowrap">
                            Our Services
                        </a>
                    </li>
                    <li>
                        <button onClick={openContactModal} className="hover:text-gray-400 font-figtree font-regular text-2xl whitespace-nowrap">
                           Contact Us
                        </button>
                    </li>
                    {/* <li>
                        <ContactButton variant="primary" size="md">
                            Contact Us
                        </ContactButton>
                    </li> */}
                </ul>
            </div>
        </footer>
    );
}
