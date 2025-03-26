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

      {/* Itinerary Information Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-12">
            Dive Itineraries
          </h2>

          {/* 5-Day Itinerary */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-4">
              5-Day Deep South Maldives Diving Itinerary
            </h3>
            <p className="text-lg text-center mb-8">
              Starting from Fuvahmulah &amp; Ending in Addu Atoll
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold">
                  Day 1: Arrival in Fuvahmulah &amp; Deep Dive at Sea Fan (Georgina)
                </h4>
                <p className="mt-2">
                  Upon arrival, our representative will warmly welcome you. Once onboard, you will be shown to your cabin and given a comprehensive tour of the boat. After lunch, our entire team will conduct a detailed briefing, followed by an in-depth overview of your dives provided by your dive guides. To conclude, a check dive will be conducted.
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Arrival at Fuvahmulah Domestic Airport, transfer to dive boat
                  </li>
                  <li>
                    First Dive: Sea Fan (Gorgonian) – a deep drift dive featuring massive gorgonian sea fans, thresher sharks, and pelagic action
                  </li>
                  <li>
                    Evening briefing on shark diving and expedition plan
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Day 2-3: Fuvahmulah – The Ultimate Shark Diving Destination
                </h4>
                <ul className="list-disc list-inside mt-2">
                  <li>Tiger Zone – close encounters with tiger sharks</li>
                  <li>Thresher Shark Deep Dive – early morning dive for rare pelagic threshers</li>
                  <li>Hammerhead Search – deep dive in the blue for schooling hammerheads</li>
                  <li>
                    Farikede Plateau &amp; Pelagic Drift Dives – encounter silvertips, oceanic whitetips, and barracudas
                  </li>
                  <li>
                    Sunset at Thoondu Beach, then overnight transfer toward Huvadhoo
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Day 4-5: Huvadhoo Atoll – Channel Diving &amp; Pelagics
                </h4>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Nilandhoo Kandu &amp; Vilingili Kandu – encounter hammerheads, grey reef sharks, and eagle rays
                  </li>
                  <li>
                    Koodhoo Kandu – strong current channel dive with silky sharks, oceanic whitetips, and trevallies
                  </li>
                  <li>
                    Maarehaa Thila – pristine coral reefs with vibrant marine biodiversity
                  </li>
                  <li>
                    Uninhabited Island BBQ – sunset beach dinner experience
                  </li>
                  <li>Overnight cruise to Addu Atoll</li>
                  <li>
                    Departure from Gan International Airport (optional)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 7-Day Itinerary */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-4">
              7-Day Deep South Maldives Diving Itinerary
            </h3>
            <p className="text-lg text-center mb-8">
              Starting from Fuvahmulah &amp; Ending in Addu Atoll
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold">
                  Day 1: Arrival in Fuvahmulah &amp; Deep Dive at Sea Fan (Georgina)
                </h4>
                <p className="mt-2">
                  Upon arrival, our representative will warmly welcome you. Once onboard, you will be shown to your cabin and given a comprehensive tour of the boat. After lunch, our team will conduct a detailed briefing, followed by an in-depth overview of your dives provided by your dive guides. To conclude, a check dive will be conducted.
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Arrival at Fuvahmulah Domestic Airport, transfer to dive boat
                  </li>
                  <li>
                    First Dive: Sea Fan (Gorgonian) – a deep drift dive featuring massive gorgonian sea fans, thresher sharks, and pelagic action
                  </li>
                  <li>
                    Evening briefing on shark diving and expedition plan
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Day 2-3: Fuvahmulah – The Ultimate Shark Diving Destination
                </h4>
                <ul className="list-disc list-inside mt-2">
                  <li>Tiger Zone – close encounters with tiger sharks</li>
                  <li>Thresher Shark Deep Dive – early morning dive for rare pelagic threshers</li>
                  <li>Hammerhead Search – deep dive in the blue for schooling hammerheads</li>
                  <li>
                    Farikede Plateau &amp; Pelagic Drift Dives – encounter silvertips, oceanic whitetips, and barracudas
                  </li>
                  <li>
                    Sunset at Thoondu Beach, then overnight transfer toward Huvadhoo
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Day 4-5: Huvadhoo Atoll – Channel Diving &amp; Pelagics
                </h4>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Nilandhoo Kandu &amp; Vilingili Kandu – encounter hammerheads, grey reef sharks, and eagle rays
                  </li>
                  <li>
                    Koodhoo Kandu – strong current channel dive with silky sharks, oceanic whitetips, and trevallies
                  </li>
                  <li>
                    Maarehaa Thila – pristine coral reefs with vibrant marine biodiversity
                  </li>
                  <li>
                    Uninhabited Island BBQ – sunset beach dinner experience
                  </li>
                  <li>Overnight cruise to Addu Atoll</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Day 6-7: Addu Atoll – Manta Point
                </h4>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Maakandu (Manta Point) – serves as a cleaning station where mantas gather to be cleaned by small reef fish
                  </li>
                  <li>
                    Addu Shipwreck – a World War II-era oil tanker torpedoed by a Japanese submarine in 1944 and later scuttled by the British
                  </li>
                  <li>
                    Addu Kandu Dives – deep channels featuring grey reef sharks and eagle rays
                  </li>
                  <li>
                    Relax on an uninhabited island with a beach BBQ
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Day 7: Final Dive &amp; Departure from Addu Atoll
                </h4>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Last morning dive or snorkeling session
                  </li>
                  <li>
                    Transfer to Gan International Airport (Addu Atoll) for departure
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 10-Day Itinerary */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-4">
              10-Day Deep South Maldives Diving Itinerary
            </h3>
            <p className="text-lg text-center mb-8">
              Starting from Fuvahmulah &amp; Ending in Addu Atoll
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold">
                  Day 1: Arrival in Fuvahmulah &amp; Deep Dive at Sea Fan (Georgina)
                </h4>
                <p className="mt-2">
                  Upon arrival, our representative will warmly welcome you. Once onboard, you will be shown to your cabin and given a comprehensive tour of the boat. After lunch, our team will conduct a detailed briefing and provide an in-depth overview of your dives led by our dive guides. Finally, a check dive will be conducted.
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Arrival at Fuvahmulah Domestic Airport and transfer to the dive boat
                  </li>
                  <li>
                    First Dive: Sea Fan (Gorgonian) – a deep drift dive featuring massive gorgonian sea fans, thresher sharks, and exciting pelagic action
                  </li>
                  <li>
                    Evening briefing on shark diving and expedition plan
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Day 2-3: Fuvahmulah – The Ultimate Shark Diving Destination
                </h4>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Tiger Shark Zone – close encounters with tiger sharks
                  </li>
                  <li>
                    Thresher Shark Deep Dive – early morning dive for rare pelagic thresher sharks
                  </li>
                  <li>
                    Hammerhead Search – deep dive in the blue for schooling hammerheads
                  </li>
                  <li>
                    Farikede Plateau &amp; Pelagic Drift Dives – featuring silvertip sharks, oceanic mantas, and barracudas
                  </li>
                  <li>
                    Sunset at Thoondu Beach, then overnight transfer to Huvadhoo
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Day 4-5: Huvadhoo Atoll – Channel Diving &amp; Pelagics
                </h4>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Nilandhoo Kandu &amp; Vilingili Kandu – encounter hammerheads, grey reef sharks, and eagle rays
                  </li>
                  <li>
                    Kooddoo Kandu – strong current channel dive with silky sharks, oceanic whitetips, and trevallies
                  </li>
                  <li>
                    Maarehaa Kandu – observe large pelagic marine life, including grey reef sharks, eagle rays, and schooling barracudas
                  </li>
                  <li>
                    Uninhabited Island BBQ – a sunset beach dinner experience
                  </li>
                  <li>Overnight cruise to Addu Atoll</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Day 6-7: Addu Atoll – Manta Point
                </h4>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Maakandu (Manta Point) – serves as a cleaning station where mantas gather to be cleaned by small reef fish
                  </li>
                  <li>
                    Addu Shipwreck – a World War II-era oil tanker torpedoed by a Japanese submarine in 1944 and later scuttled by the British
                  </li>
                  <li>
                    Addu Kandu Dives – deep channels featuring grey reef sharks and eagle rays
                  </li>
                  <li>
                    Relax on an uninhabited island with a beach BBQ
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Day 8-9: Remote &amp; Secret Spots in Huvadhoo
                </h4>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Pelagic Drift Dives – search for schooling hammerheads and silky sharks
                  </li>
                  <li>
                    Uncharted Reefs – exploring lesser-known thilas and submerged reefs
                  </li>
                  <li>
                    Optional freediving &amp; snorkeling sessions in calm lagoons
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Day 10: Departure
                </h4>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Relaxing morning snorkel or final dive (optional)
                  </li>
                  <li>
                    Return transfer and departure
                  </li>
                </ul>
              </div>
            </div>
          </div>
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

      {/* Itineraries Cards Section */}
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
                  Experience vibrant free diving and diverse marine life on this thrilling dive itinerary.
                </p>
                <Link href="https://wa.me/9607795512" className="bg-black text-white py-2 px-4 rounded hover:bg-blue-900 transition">
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
                  Immerse yourself in the thrilling world of tiger sharks—witness these majestic predators up close as you explore their natural habitat and learn about their fascinating behavior.
                </p>
                <Link href="https://wa.me/9607795512" className="bg-black text-white py-2 px-4 rounded hover:bg-blue-900 transition">
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
                  Embark on an adventure to encounter rare and majestic marine creatures.
                </p>
                <Link href="https://wa.me/9607795512" className="bg-black text-white py-2 px-4 rounded hover:bg-blue-900 transition">
                  Learn More
                </Link>
              </div>
            </div>
            {/* Itinerary Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="manta.jpg"
                alt="Itinerary 4"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Addu Manta Point</h3>
                <p className="text-gray-700 mb-4">
                  Embark on a deep-sea adventure and encounter graceful manta rays in their natural habitat.
                </p>
                <Link href="https://wa.me/9607795512" className="bg-black text-white py-2 px-4 rounded hover:bg-blue-900 transition">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default DiveItinerariesPage;
