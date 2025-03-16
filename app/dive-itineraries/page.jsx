'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';


function DiveItinerariesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <Navbar />

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
             href="https://wa.me/9607780739"
             target="_blank"
             rel="noopener noreferrer"
             className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
             style={{ zIndex: 1000 }}
           >
             <FaWhatsapp size={24} />
           </a>
      {/* Itineraries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-12">
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
                <Link href={'https://wa.me/9607795512'} className="bg-black text-white py-2 px-4 rounded hover:bg-blue-900 transition">
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
                <Link href={'https://wa.me/9607795512'} className="bg-black text-white py-2 px-4 rounded hover:bg-blue-900 transition">
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
                <Link href={'https://wa.me/9607795512'} className="bg-black text-white py-2 px-4 rounded hover:bg-blue-900 transition">
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
                <Link href={'https://wa.me/9607795512'} className="bg-black text-white py-2 px-4 rounded hover:bg-blue-900 transition">
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
