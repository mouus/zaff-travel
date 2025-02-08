'use client'
import Footer from '@/components/Footer';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';


function DiveItinerariesPage() {
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
        style={{ backgroundImage: "url('boat-top.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Dive Itineraries
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white">
            Explore our curated dive itineraries and dive into adventure.
          </p>
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
      {/* Itineraries Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Dive Itineraries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Itinerary Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="zaff.jpg"
                alt="Itinerary 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Free Diving Fuvamulah</h3>
                <p className="text-gray-700 mb-4">
                  Experience vibrant free diving and diverse marine life on this
                  thrilling dive itinerary.
                </p>
                <Link href={'/book'} className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900 transition">
                  Learn More
                </Link>
              </div>
            </div>
            {/* Itinerary Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="img2.jpg"
                alt="Itinerary 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Tiger Shark Expedition</h3>
                <p className="text-gray-700 mb-4">
                Immerse yourself in the thrilling world of tiger sharks—witness these majestic predators up close as 
                you explore their natural habitat and learn about their fascinating behavior.
                </p>
                <Link href={'/book'} className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900 transition">
                  Learn More
                </Link>
              </div>
            </div>
            {/* Itinerary Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="shark.jpg"
                alt="Itinerary 3"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Encounter Giants</h3>
                <p className="text-gray-700 mb-4">
                  Embark on an adventure to encounter rare and majestic
                  marine creatures.
                </p>
                <Link href={'/book'} className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900 transition">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="manta.jpg"
                alt="Itinerary 3"
                className="w-full h-64 object-cover"
              />
                 <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Addu Manta Point</h3>
                <p className="text-gray-700 mb-4">
                 Embark on a deep-sea adventure and encounter graceful 
                 manta rays in their natural habitat.
                </p>
                <Link href={'/book'} className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900 transition">
                  Learn More
                </Link>
              </div>
            </div>

       
            {/* Itinerary Card 4 */}
            {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="people.jpg"
                alt="Itinerary 4"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Night Dive Experience</h3>
                <p className="text-gray-700 mb-4">
                  Discover the underwater world in a whole new light with our
                  guided night dive itineraries.
                </p>
                <Link href={'/book'} className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900 transition">
                  Learn More
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default DiveItinerariesPage;
