"use client"
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import ContactButton from './ContactButton';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="mx-8 md:mx-[5.25rem] my-8 ">
            <div className="flex items-center justify-between">
                <div>
                    <Image
                        src='/assets/logo.svg' // Replace with your logo path
                        alt="Savani Logo"
                        width={48}
                        height={48}
                    />
                </div>
                <button
                    className="text-brandIndigo md:hidden focus:outline-none"
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
                <ul className={`hidden md:flex gap-20 text-lg`}>
                    <li>
                        <Link legacyBehavior href="/">
                            <a className="font-figtree font-regular text-2xl hover:text-brandIndigo">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/about">
                            <a className="font-figtree font-regular text-2xl hover:text-brandIndigo">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/#testimonials">
                            <a className="font-figtree font-regular text-2xl hover:text-brandIndigo">Testimonials</a>
                        </Link>
                    </li>
                </ul>
                {/* Button */}
                <div className="hidden md:block">
                    {/* <Link legacyBehavior href="/track-shipment">
                        <a className="px-8 py-4 bg-transparent border border-brandIndigo text-brandIndigo font-semibold test-base hover:bg-brandIndigo hover:text-white transition">
                            Track Shipment
                        </a>
                    </Link> */}
                <ContactButton variant="outline" size="md">
                    Contact Us
                </ContactButton>
                {/* <button className="px-14 py-4 ml-4 bg-brandIndigo  border border-brandIndigo text-white font-semibold test-base hover:bg-transparent hover:text-brandIndigo transition">
                    Book Now
                </button> */}
                </div>
            </div>
            {/* Mobile Button */}
            {isOpen && (
                <ul className={`md:hidden flex flex-col justify-center items-center gap-16 my-4 list-none`}>
                    <li>
                        <Link legacyBehavior href="/">
                            <a className="font-figtree font-regular text-2xl hover:text-brandIndigo">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/about">
                            <a className="font-figtree font-regular text-2xl hover:text-brandIndigo">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link legacyBehavior href="/#testimonials">
                            <a className="font-figtree font-regular text-2xl hover:text-brandIndigo">Testimonials</a>
                        </Link>
                    </li>

                    {/* <li>
                        <Link legacyBehavior href="/track-shipment">
                            <a className="px-8 py-4 bg-transparent border border-brandIndigo text-brandIndigo font-semibold test-base hover:bg-brandIndigo hover:text-white transition">
                                Track Shipment
                            </a>
                        </Link>
                    </li> */}
                    <li>
                        <ContactButton 
                            variant="outline" 
                            size="sm"
                            className="w-full"
                        >
                            Contact Us
                        </ContactButton>
                    </li>
                </ul>
            )
            }
        </nav>
    );
}
