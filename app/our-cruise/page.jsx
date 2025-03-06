'use client'
import Footer from '@/components/Footer';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';


function CruisePage() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
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
                        <Link href="/dive-itineraries" className="hover:underline transition text-lg">
                            Dive Itineraries
                        </Link>
                        <Link href="/our-cruise" className="hover:underline transition text-lg">
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
            {/* Hero Section */}
            <section
                className="relative h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('sunset.jpg')" }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-5xl text-white font-bold mb-4">Welcome Aboard</h1>
                    <p className="text-xl text-white mb-8">
                        Embark on a luxurious journey with us.
                    </p>
                    <Link href="/book" className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                        Book Now
                    </Link>
                </div>
            </section>

            {/* About the Cruise Section */}
            <section className="py-16 px-4 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Cruise Experience</h2>
                    <p className="mb-8 text-lg text-gray-700">
                        Enjoy world-class service, gourmet dining, and breathtaking views on our cruise.
                        Our journey is designed to provide you with an unforgettable experience as you sail
                        through crystal-clear waters and scenic horizons.
                    </p>
                    <img
                        src="boat-top.jpg"
                        alt="Cruise Ship"
                        className="w-full h-auto rounded shadow-lg"
                    />
                </div>
            </section>
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

            {/* Gallery Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <img
                            src="women.JPG"
                            alt="Gallery Image 1"
                            className="w-full h-64 object-cover rounded"
                        />
                        <img
                            src="people.jpg"
                            alt="Gallery Image 2"
                            className="w-full h-64 object-cover rounded"
                        />
                        <img
                            src="coco2.JPG"
                            alt="Gallery Image 3"
                            className="w-full h-64 object-cover rounded"
                        />
                        <img
                            src="people-4.jpg"
                            alt="Gallery Image 4"
                            className="w-full h-64 object-cover rounded"
                        />
                        <img
                            src="people-5.jpg"
                            alt="Gallery Image 5"
                            className="w-full h-64 object-cover rounded"
                        />
                        <img
                            src="people-6.jpg"
                            alt="Gallery Image 6"
                            className="w-full h-64 object-cover rounded"
                        />
                    </div>
                </div>
            </section>

            {/* Contact / Booking Section */}
            <section className="py-16 bg-blue-900 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Ready to Sail?</h2>
                    <p className="mb-8 text-lg">
                        Book your dream cruise now and experience the luxury and adventure that awaits.
                    </p>
                    <Link href={"/book"} className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                        Book Now
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default CruisePage;
