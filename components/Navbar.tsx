"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // <nav >
        //     <div className="container mx-auto flex items-center justify-between py-4 px-6">
        //         {/* Logo */}
        //         <div className="flex items-center">
        //             <img
        //                 src='/assets/logo.svg' // Replace with your logo path
        //                 alt="Savani Logo"
        //                 className="h-12 w-12"
        //             />
        //         </div>

        //         {/* Hamburger Menu (Mobile View) */}
        //         <button
        //             className="text-blue-600 md:hidden focus:outline-none"
        //             onClick={() => setIsOpen(!isOpen)}
        //         >
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 strokeWidth={2}
        //                 stroke="currentColor"
        //                 className="w-8 h-8"
        //             >
        //                 <path
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        //                 />
        //             </svg>
        //         </button>

        //         {/* Navigation Links */}
        //         <ul
        //             className={`${isOpen ? "block" : "hidden"
        //                 } md:flex space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium  md:items-center absolute md:relative top-full left-0 w-full md:w-auto md:bg-transparent p-4 `}
        //         >
        //             <li>
        //                 <Link legacyBehavior href="/">
        //                     <a className="hover:text-blue-600 block md:inline">Home</a>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link legacyBehavior href="/about">
        //                     <a className="hover:text-blue-600 block md:inline">About Us</a>
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link legacyBehavior href="/legacy">
        //                     <a className="hover:text-blue-600 block md:inline">Legacy</a>
        //                 </Link>
        //             </li>
        //         </ul>

        //         {/* Button */}
        //         <div className="hidden md:block">
        //             <Link legacyBehavior href="/track-shipment">
        //                 <a className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition">
        //                     Track Shipment
        //                 </a>
        //             </Link>
        //         </div>

        //         {/* Mobile Button */}
        //         {isOpen && (
        //             <div className="block md:hidden mt-4">
        //                 <Link legacyBehavior href="/track-shipment">
        //                     <a className="block text-center border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition">
        //                         Track Shipment
        //                     </a>
        //                 </Link>
        //             </div>
        //         )}
        //     </div>

        // </nav>


        <nav className="flex items-center justify-between mt-8 mb-8 mr-12 ml-12">
            <div>
                <img
                    src='/assets/logo.svg' // Replace with your logo path
                    alt="Savani Logo"
                    className="h-12 w-12"
                />
            </div>
            <button
                className="text-blue-600 md:hidden focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
            </button>
            <ul className={` ${isOpen ? 'block' : 'hidden'} md:flex gap-x-4 text-lg font-medium`}>
                <li>
                    <Link legacyBehavior href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link legacyBehavior href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link legacyBehavior href="/legacy">
                        <a>Legacy</a>
                    </Link>
                </li>
            </ul>

            {/* Hamburger Menu (Mobile View) */}


            {/* Button */}
            <div className="hidden md:block">
                <Link legacyBehavior href="/track-shipment">
                    <a className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition">
                        Track Shipment
                    </a>
                </Link>
            </div>
            {/* Mobile Button */}
            {isOpen && (
                <div className="block md:hidden mt-4">
                    <Link legacyBehavior href="/track-shipment">
                        <a className="block text-center border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition">
                            Track Shipment
                        </a>
                    </Link>
                </div>
            )}
        </nav>
    );
}
