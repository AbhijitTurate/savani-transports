export default function Footer() {
    return (
        <footer className="bg-black text-white mt-auto">
            <div className="flex flex-col md:flex-row items-center justify-between py-8 px-10">
                {/* Logo and Address Section */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
                    <img
                        src="/assets/logo.svg" // Update path to match your logo file
                        alt="Savani Logo"
                        className="h-16 w-16 mb-4 mx-auto md:mx-0"
                    />
                    <p className="text-sm">
                        Savani Transports Pvt Limited 809A, Broadway Centre, 2nd Floor,
                        Dr. Ambedkar Road, Dadar (E), Mumbai - 400 014. Tel. Nos: (022)
                        43540000
                    </p>
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-col md:flex-row justify-center  items-center space-y-4 md:space-y-0 md:space-x-8 w-full md:w-1/2 text-lg font-medium mt-6 md:mt-0">
                    <li>
                        <a href="/" className="hover:text-gray-400">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-gray-400">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="/legacy" className="hover:text-gray-400">
                            Legacy
                        </a>
                    </li>
                    <li>
                        <a href="/track-shipment" className="hover:text-gray-400">
                            Track Shipment
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
