'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';


function Page() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <header className="bg-white text-black shadow-lg sticky top-0 z-50">
                <nav className="relative py-5 px-6 max-w-7xl mx-auto bg-white">
                    {/* Nav links and buttons */}
                    <div className="flex justify-between items-center">
                        <div className="hidden md:block">
                            <Link
                                href="/book"
                                className="bg-black text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-800 transition"
                            >
                                Book Now
                            </Link>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
                                ☰
                            </button>
                        </div>
                        <div className="hidden md:flex gap-6">
                            <Link href="/dive-itineraries" className="hover:underline transition text-xs">
                                Dive Itineraries
                            </Link>
                            <Link href="/our-cruise" className="hover:underline transition text-xs">
                                Our Cruise
                            </Link>
                            <Link href="/about-us" className="hover:underline transition text-xs">
                                About Us
                            </Link>
                        </div>
                    </div>

                    {/* Absolutely positioned logo */}
                    <div className="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2">
                        <Link href="/">
                            <img
                                src="logo.jpg"
                                alt="Cruise Republic"
                                className="w-20 h-20 rounded-full"
                            />
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-slate-900 text-white flex flex-col gap-4 p-4">
                        <Link href="/south-dives" className="hover:underline transition text-lg">
                            Dive Itineraries
                        </Link>
                        <Link href="/south-dives" className="hover:underline transition text-lg">
                            Our Cruise
                        </Link>
                        <Link href="/about-us" className="hover:underline transition text-lg">
                            About Us
                        </Link>
                        <Link
                            href="/book"
                            className="bg-white text-blue-950 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition"
                        >
                            Book Now
                        </Link>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow px-4 sm:px-6 py-12 max-w-5xl mx-auto text-gray-800">
                <section className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
                        Cruise Republic by Evefront Maldives Pvt Ltd
                    </h1>
                    <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                        With over 20 years of experience in the Maldives liveaboard industry and a strong background in hospitality,
                        scuba diving, and surfing, Cruise Republic offers unforgettable experiences for ocean enthusiasts.
                    </p>
                </section>

                <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4">
                        Why Choose Cruise Republic?
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                        Our team consists of highly skilled local dive professionals with extensive knowledge of diving across the Maldives,
                        including the southern atolls. They are committed to taking you to the best dive locations while ensuring your safety and enjoyment,
                        regardless of conditions.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700 mt-4">
                        Cruise Republic by Evefront Maldives Pvt Ltd
                        With over 20 years of experience in the Maldives liveaboard industry and a strong background in hospitality,
                        scuba diving, and surfing, Cruise Republic offers unforgettable experiences for ocean enthusiasts.

                        Our team consists of highly skilled local dive professionals with extensive knowledge of diving across the Maldives,
                        including the southern atolls. They are committed to taking you to the best dive locations while ensuring your safety and enjoyment, regardless of conditions.

                        Our professional dive leaders provide detailed dive briefings and expert guidance on every dive, making sure your adventure is as thrilling as it is safe.
                        Whether you&apos;re seeking vibrant coral reefs, thrilling pelagic encounters, or simply the beauty of the Maldivian waters, Cruise Republic is your gateway to unforgettable memories.
                    </p>
                </section>
            </main>
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/9607795512"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
                style={{ zIndex: 1000 }}
            >
                <FaWhatsapp size={24} />
            </a>


            {/* Footer */}
            <footer className="bg-black text-white py-4 text-center">
                <div className="container mx-auto">
                    <p>&copy; 2025 Cruise Republic. All rights reserved.</p>
                    <div className="mt-4">
                        <p className="text-sm">
                            Everfront PVT Ltd<br />
                            Zindha, Funaad, Husnuheenamagu<br />
                            Fuvahmulah City
                        </p>
                    </div>
                    <div className="flex justify-center mt-2 gap-4 flex-wrap">
                        <a href="#" className="hover:underline flex items-center gap-2">
                            <FaFacebook /> Facebook
                        </a>
                        <a href="#" className="hover:underline flex items-center gap-2">
                            <FaInstagram /> Instagram
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Page;
