import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="px-6 py-12 mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-black mb-4">
            About Cruise Republic
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            With over 20 years of expertise in the Maldives liveaboard industry,
            Cruise Republic combines passion for the ocean with world-class diving and hospitality to create unforgettable marine adventures.
          </p>
        </header>

        {/* Our Story Section */}
        <section className="bg-white p-6 mb-12">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            Founded on the belief that the ocean is a gateway to unparalleled adventures,
            Cruise Republic is dedicated to offering immersive experiences in the Maldives.
            From exploring vibrant coral reefs to thrilling deep-sea dives, our journey is built on a commitment to excellence and sustainable tourism.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-white  p-6 mb-12">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            Why Choose Cruise Republic?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            Our team of local dive professionals and hospitality experts is committed to delivering safe, exhilarating, and personalized experiences.
            Whether it’s a world-class scuba diving expedition or an intimate sunset cruise, we ensure every detail is taken care of.
          </p>
        </section>

        {/* Vision & Mission Section */}
        <section className="bg-white p-6 mb-12">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            Our Vision &amp; Mission
          </h2>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-black mb-2 text-center">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
              To redefine adventure tourism in the Indian Ocean by providing immersive, sustainable, and deeply personal experiences that connect travelers to the ocean, land, and local culture.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-black mb-2 text-center">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
              We are dedicated to creating authentic and unforgettable experiences through exceptional service,
              expert dive guidance, and a commitment to preserving the natural beauty of the Maldives.
            </p>
          </div>
        </section>

      </div>

           {/* WhatsApp Button */}
           <a
        href="https://wa.me/9607780739"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-50"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>


      <Footer />
    </div>
  );
}
