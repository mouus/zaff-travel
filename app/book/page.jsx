'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram,FaWhatsapp } from 'react-icons/fa';


function BookingPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            {/* Header */}
            <header className="bg-slate-950 text-white shadow-lg sticky top-0 z-50">
                <nav className="flex justify-between items-center py-5 px-6 max-w-7xl mx-auto">
                    <Link href="/" className="text-2xl font-bold flex items-center gap-2">
                        <span role="img" aria-label="cruise">🚢</span> Cruise Republic
                    </Link>
                    <div className="hidden md:flex gap-6">
                        <Link href="/south-dives" className="hover:underline transition text-xs">
                            South Dives
                        </Link>
                        <Link href="/about-us" className="hover:underline transition text-xs">
                            About Us
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <Link
                            href="/book"
                            className="bg-white text-blue-950 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition"
                        >
                            Book Now
                        </Link>
                    </div>
                </nav>
                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-slate-900 text-white flex flex-col gap-4 p-4">
                        <Link href="/south-dives" className="hover:underline transition text-lg">
                            South Dives
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
            <div
                className="bg-cover bg-center h-96"
                style={{ backgroundImage: 'url(boat.jpg)' }}
            ></div>

            {/* Booking Section */}
            <div className="py-16 bg-gray-100">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-center mb-6">Book Your Dive</h1>
                    <p className="text-center text-gray-600 mb-8">
                        Fill out the form below to book your dive. We look forward to creating an unforgettable experience for you!
                    </p>

                    <form action="#" className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phone" className="block font-semibold mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>

                        {/* Type of Dive */}
                        {/* <div>
              <label htmlFor="diveType" className="block font-semibold mb-2">
                Type of Dive
              </label>
              <select
                id="diveType"
                name="diveType"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                defaultValue="" // Use defaultValue instead of selected
                required
              >
                <option value="" disabled>
                  Select a dive type
                </option>
                <option value="reefDive">Reef Dive</option>
                <option value="wreckDive">Wreck Dive</option>
                <option value="nightDive">Night Dive</option>
                <option value="driftDive">Drift Dive</option>
              </select>
            </div> */}

                        {/* Special Requirements */}
                        <div>
                            <label htmlFor="specialRequirements" className="block font-semibold mb-2">
                                Special Requirements
                            </label>
                            <textarea
                                id="specialRequirements"
                                name="specialRequirements"
                                rows="4"
                                placeholder="Let us know if you have any special requests"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-800 hover:bg-blue-950 text-white font-bold py-3 px-6 rounded-lg"
                            >
                                Submit Booking
                            </button>
                        </div>
                    </form>
                </div>
            </div>
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

            <footer className="bg-slate-950 text-white py-4 text-center">
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

export default BookingPage;
