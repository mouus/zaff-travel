"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

export default function DiveItinerariesPage() {
  const [activeTab, setActiveTab] = useState("5-day")

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('boat-top.jpg')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Dive Itineraries</h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl">
            Explore the magnificent underwater world of the Maldives
          </p>
          <div className="mt-8">
            <Link
              href="#itineraries"
              className="bg-white text-black hover:bg-gray-100 transition-colors px-8 py-3 rounded-full font-medium"
            >
              Explore Itineraries
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Itineraries Cards */}
      <section id="itineraries" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Our Dive Itineraries</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Itinerary Card 1 */}
            <div className="bg-black rounded-lg shadow-md overflow-hidden border border-gray-700">
              <img src="zaff.jpg" alt="Free Diving Fuvamulah" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-300">Free Diving Fuvamulah</h3>
                <p className="text-gray-300 mb-4">
                  Experience vibrant free diving and diverse marine life on this thrilling dive itinerary.
                </p>
              </div>
            </div>

            {/* Itinerary Card 2 */}
            <div className="bg-black rounded-lg shadow-md overflow-hidden border border-gray-700">
              <img src="img2.jpg" alt="Tiger Shark Expedition" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-300">Tiger Shark Expedition</h3>
                <p className="text-gray-300 mb-4">
                  Immerse yourself in the thrilling world of tiger sharks—witness these majestic predators up close.
                </p>
              </div>
            </div>

            {/* Itinerary Card 3 */}
            <div className="bg-black rounded-lg shadow-md overflow-hidden border border-gray-700">
              <img src="shark.jpg" alt="Encounter Giants" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-300">Encounter Giants</h3>
                <p className="text-gray-300 mb-4">
                  Embark on an adventure to encounter rare and majestic marine creatures in their natural habitat.
                </p>
              </div>
            </div>

            {/* Itinerary Card 4 */}
            <div className="bg-black rounded-lg shadow-md overflow-hidden border border-gray-700">
              <img src="manta.jpg" alt="Addu Manta Point" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-300">Addu Manta Point</h3>
                <p className="text-gray-300 mb-4">
                  Embark on a deep-sea adventure and encounter graceful manta rays in their natural habitat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itineraries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Detailed Itineraries</h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-700">
            <button
              onClick={() => setActiveTab("5-day")}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "5-day" ? "text-black border-b-2 border-black" : "text-gray-600 hover:text-black"
              }`}
            >
              5-Day Itinerary
            </button>
            <button
              onClick={() => setActiveTab("7-day")}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "7-day" ? "text-black border-b-2 border-black" : "text-gray-600 hover:text-black"
              }`}
            >
              7-Day Itinerary
            </button>
            <button
              onClick={() => setActiveTab("10-day")}
              className={`px-6 py-3 text-lg font-medium ${
                activeTab === "10-day"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              10-Day Itinerary
            </button>
          </div>

          {/* 5-Day Itinerary Content */}
          {activeTab === "5-day" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-black">5-Day Deep South Maldives Diving Itinerary</h3>
                <p className="text-lg text-gray-800">Starting from Fuvahmulah &amp; Ending in Addu Atoll</p>
              </div>

              <div className="space-y-8">
                <div className="bg-black rounded-lg p-6 border border-gray-700">
                  <h4 className="text-xl font-bold mb-3 text-gray-300">
                    Day 1: Arrival in Fuvahmulah &amp; Deep Dive at Sea Fan
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Upon arrival, our representative will warmly welcome you. Once onboard, you will be shown to your
                    cabin and given a comprehensive tour of the boat. After lunch, our entire team will conduct a
                    detailed briefing, followed by an in-depth overview of your dives provided by your dive guides.
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Arrival at Fuvahmulah Domestic Airport, transfer to dive boat</li>
                    <li>First Dive: Sea Fan (Gorgonian) – a deep drift dive featuring massive gorgonian sea fans</li>
                    <li>Evening briefing on shark diving and expedition plan</li>
                  </ul>
                </div>

                <div className="bg-black rounded-lg p-6 border border-gray-700">
                  <h4 className="text-xl font-bold mb-3 text-gray-300">
                    Day 2-3: Fuvahmulah – The Ultimate Shark Diving Destination
                  </h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Tiger Zone – close encounters with tiger sharks</li>
                    <li>Thresher Shark Deep Dive – early morning dive for rare pelagic threshers</li>
                    <li>Hammerhead Search – deep dive in the blue for schooling hammerheads</li>
                    <li>Farikede Plateau &amp; Pelagic Drift Dives – encounter silvertips and oceanic whitetips</li>
                    <li>Sunset at Thoondu Beach, then overnight transfer toward Huvadhoo</li>
                  </ul>
                </div>

                <div className="bg-black rounded-lg p-6 border border-gray-700">
                  <h4 className="text-xl font-bold mb-3 text-gray-300">
                    Day 4-5: Huvadhoo Atoll – Channel Diving &amp; Pelagics
                  </h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Nilandhoo Kandu &amp; Vilingili Kandu – encounter hammerheads and grey reef sharks</li>
                    <li>Koodhoo Kandu – strong current channel dive with silky sharks</li>
                    <li>Maarehaa Thila – pristine coral reefs with vibrant marine biodiversity</li>
                    <li>Uninhabited Island BBQ – sunset beach dinner experience</li>
                    <li>Overnight cruise to Addu Atoll</li>
                    <li>Departure from Gan International Airport (optional)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 7-Day Itinerary Content */}
          {activeTab === "7-day" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-black">7-Day Deep South Maldives Diving Itinerary</h3>
                <p className="text-lg text-gray-800">Starting from Fuvahmulah &amp; Ending in Addu Atoll</p>
              </div>

              <div className="space-y-8">
                <div className="bg-black rounded-lg p-6 border border-gray-700">
                  <h4 className="text-xl font-bold mb-3 text-gray-300">
                    Day 1: Arrival in Fuvahmulah &amp; Deep Dive at Sea Fan
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Upon arrival, our representative will warmly welcome you. Once onboard, you will be shown to your
                    cabin and given a comprehensive tour of the boat.
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Arrival at Fuvahmulah Domestic Airport, transfer to dive boat</li>
                    <li>First Dive: Sea Fan (Gorgonian) – a deep drift dive</li>
                    <li>Evening briefing on shark diving and expedition plan</li>
                  </ul>
                </div>

                <div className="bg-black rounded-lg p-6 border border-gray-700">
                  <h4 className="text-xl font-bold mb-3 text-gray-300">
                    Day 2-3: Fuvahmulah – The Ultimate Shark Diving Destination
                  </h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Tiger Zone – close encounters with tiger sharks</li>
                    <li>Thresher Shark Deep Dive – early morning dive</li>
                    <li>Hammerhead Search – deep dive in the blue</li>
                    <li>Farikede Plateau &amp; Pelagic Drift Dives</li>
                    <li>Sunset at Thoondu Beach</li>
                  </ul>
                </div>

                <div className="bg-black rounded-lg p-6 border border-gray-700">
                  <h4 className="text-xl font-bold mb-3 text-gray-300">
                    Day 4-5: Huvadhoo Atoll – Channel Diving &amp; Pelagics
                  </h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Nilandhoo Kandu &amp; Vilingili Kandu</li>
                    <li>Koodhoo Kandu – strong current channel dive</li>
                    <li>Maarehaa Thila – pristine coral reefs</li>
                    <li>Uninhabited Island BBQ</li>
                    <li>Overnight cruise to Addu Atoll</li>
                  </ul>
                </div>

                <div className="bg-black rounded-lg p-6 border border-gray-700">
                  <h4 className="text-xl font-bold mb-3 text-gray-300">Day 6-7: Addu Atoll – Manta Point</h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Maakandu (Manta Point) – cleaning station for mantas</li>
                    <li>Addu Shipwreck – a World War II-era oil tanker</li>
                    <li>Addu Kandu Dives – deep channels</li>
                    <li>Relax on an uninhabited island</li>
                    <li>Final morning dive or snorkeling session</li>
                    <li>Transfer to Gan International Airport for departure</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 10-Day Itinerary Content */}
          {activeTab === "10-day" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-black">10-Day Deep South Maldives Diving Itinerary</h3>
                <p className="text-lg text-gray-800">Starting from Fuvahmulah &amp; Ending in Addu Atoll</p>
              </div>

              <div className="space-y-8">
                <div className="bg-black rounded-lg p-6 border border-gray-700">
                  <h4 className="text-xl font-bold mb-3 text-gray-300">Day 1: Arrival in Fuvahmulah</h4>
                  <p className="text-gray-300 mb-4">
                    Upon arrival, our representative will warmly welcome you. Once onboard, you will be shown to your
                    cabin and given a comprehensive tour of the boat.
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Arrival at Fuvahmulah Domestic Airport</li>
                    <li>First Dive: Sea Fan (Gorgonian)</li>
                    <li>Evening briefing on shark diving</li>
                  </ul>
                </div>

                <div className="bg-black rounded-lg p-6 border border-gray-700">
                  <h4 className="text-xl font-bold mb-3 text-gray-300">Days 2-9: Diving Adventures</h4>
                  <p className="text-gray-300 mb-4">
                    Experience the best diving spots across multiple atolls including Fuvahmulah, Huvadhoo, and Addu.
                  </p>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Tiger Shark Zone – close encounters</li>
                    <li>Thresher Shark Deep Dive</li>
                    <li>Hammerhead Search</li>
                    <li>Manta Point in Addu Atoll</li>
                    <li>Remote &amp; Secret Spots in Huvadhoo</li>
                    <li>Uninhabited Island BBQs</li>
                  </ul>
                </div>

                <div className="bg-black rounded-lg p-6 border border-gray-700">
                  <h4 className="text-xl font-bold mb-3 text-gray-300">Day 10: Departure</h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Relaxing morning snorkel or final dive (optional)</li>
                    <li>Return transfer and departure</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">Ready for Your Diving Adventure?</h2>
            <p className="text-xl mb-8 text-black">
              Contact our team to book your dream diving expedition in the Maldives
            </p>
            <a
              href="https://wa.me/9607780739"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white hover:bg-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

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

      {/* Footer */}
      <Footer />
    </div>
  )
}

