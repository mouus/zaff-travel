'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Page() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <Navbar />
            {/* Main Content */}
            <main className="flex-grow px-4 sm:px-6 py-12 max-w-5xl mx-auto text-gray-800">
                <section className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
                        Cruise Republic by Everfront Maldives Pvt Ltd
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
                        Cruise Republic by Everfront Maldives Pvt Ltd
                        With over 20 years of experience in the Maldives liveaboard industry and a strong background in hospitality,
                        scuba diving, and surfing, Cruise Republic offers unforgettable experiences for ocean enthusiasts.
                        Our team consists of highly skilled local dive professionals with extensive knowledge of diving across the Maldives,
                        including the southern atolls. They are committed to taking you to the best dive locations while ensuring your safety and enjoyment, regardless of conditions.
                        Our professional dive leaders provide detailed dive briefings and expert guidance on every dive, making sure your adventure is as thrilling as it is safe.
                        Whether you&apos;re seeking vibrant coral reefs, thrilling pelagic encounters, or simply the beauty of the Maldivian waters, Cruise Republic is your gateway to unforgettable memories.
                    </p>
                </section>

                {/* Vision & Mission Section */}
                <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mt-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4">Our Vision & Mission</h2>
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-blue-700">Our Vision</h3>
                        <p className="text-sm sm:text-base text-gray-700">
                            “To redefine adventure tourism in the Indian Ocean by offering world-class, intimate, and artfully curated experiences that connect travelers to the ocean, land, and culture. We envision a future where exploration is immersive, sustainable, and deeply personal—where every journey leaves a lasting impact on both the traveler and the places we explore.”
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-blue-700">Mission Statement</h3>
                        <p className="text-sm sm:text-base text-gray-700">
                            “At Cruise Republic, we are dedicated to providing authentic and unforgettable experiences both above and below the ocean. Through deep immersion in local culture, vibrant marine life, and unique endemic wildlife, we offer our guests the chance to connect with nature and the community in a meaningful way. With genuine hospitality and expert guidance, we ensure every journey is truly the Adventure of a Lifetime®.”
                        </p>
                    </div>
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
            <Footer />
        </div>
    );
}

export default Page;
