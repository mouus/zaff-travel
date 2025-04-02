"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  FaWhatsapp,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaTimes,
  FaWater,
  FaFish,
  FaShip,
} from "react-icons/fa"
import Image from "next/image"

export default function DiveItinerariesPage() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("5-day")

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeItinerary, setActiveItinerary] = useState(null)

  // Itinerary data
  const itineraries = [
    {
      id: "freediving",
      title: "Freediving in Fuvahmulah & Huvadhoo",
      subtitle: "A Deep Ocean Adventure",
      image: "/freedive.PNG",
      duration: "5 days",
      location: "Fuvahmulah & Huvadhoo",
      description: "Experience vibrant free diving and diverse marine life on this thrilling dive itinerary.",
      fullDescription: [
        "Fuvahmulah is one of the world's most exhilarating freediving destinations, offering encounters with tiger sharks in their natural habitat. The island's deep drop-offs, dramatic underwater topography, and crystal-clear waters make it a paradise for freedivers seeking an adrenaline-filled experience. With no protective barriers like reefs or lagoons, Fuvahmulah is a true open-ocean dive spot where large pelagic species roam freely.",
        "For those looking to explore vibrant coral reefs, Huvadhoo Atoll—one of the largest and most biodiverse atolls in the world—is a freediver's dream. Its untouched reefs are teeming with marine life, from swirling schools of fish to graceful manta rays and even the occasional whale shark. The atoll's secluded islands and hidden dive spots provide endless opportunities for exploration, relaxation, and connection with nature.",
        "Whether you're diving into the deep blue alongside tiger sharks in Fuvahmulah or gliding over the vibrant coral gardens of Huvadhoo, every breath-hold dive promises an unforgettable encounter with the ocean's wild beauty.",
      ],
      highlights: [
        "Freedive with tiger sharks in their natural habitat",
        "Experience the dramatic underwater topography of Fuvahmulah",
        "Explore the pristine coral reefs of Huvadhoo Atoll",
        "Encounter manta rays and other pelagic species",
        "Receive guidance from experienced freediving instructors",
      ],
      itineraryDetails: [
        {
          day: "Day 1",
          title: "Arrival & Introduction",
          activities: [
            "Arrival in Fuvahmulah",
            "Equipment setup and safety briefing",
            "Shallow water freediving practice",
            "Evening presentation on local marine life",
          ],
        },
        {
          day: "Day 2-3",
          title: "Fuvahmulah Freediving",
          activities: [
            "Morning freediving sessions at Tiger Shark Point",
            "Afternoon dives at deep drop-offs",
            "Breath-hold technique workshops",
            "Evening relaxation and recovery sessions",
          ],
        },
        {
          day: "Day 4-5",
          title: "Huvadhoo Atoll Exploration",
          activities: [
            "Transfer to Huvadhoo Atoll",
            "Freediving at pristine coral reefs",
            "Manta ray encounters at cleaning stations",
            "Beach relaxation and departure",
          ],
        },
      ],
    },
    {
      id: "tiger-shark",
      title: "Tiger Shark Expedition",
      subtitle: "Face-to-Face with Ocean Predators",
      image: "/img2.jpg",
      duration: "7 days",
      location: "Multiple Atolls",
      description: "Immerse yourself in the thrilling world of tiger sharks—witness these majestic predators up close.",
      fullDescription: [
        "Our Tiger Shark Expedition offers a rare opportunity to encounter one of the ocean's most magnificent apex predators in its natural environment. Fuvahmulah, known as the 'Tiger Shark Capital of the World,' provides consistent and respectful encounters with these impressive sharks.",
        "This specialized expedition focuses on providing multiple dive opportunities with tiger sharks while maintaining the highest safety standards and ethical wildlife interactions. Our experienced guides have extensive knowledge of tiger shark behavior and will ensure both your safety and the well-being of these magnificent creatures.",
        "Beyond tiger sharks, this expedition also offers opportunities to encounter thresher sharks, hammerheads, oceanic manta rays, and other pelagic species that frequent the deep waters surrounding Fuvahmulah.",
      ],
      highlights: [
        "Multiple dives at the famous Tiger Shark Point",
        "Opportunities to photograph these magnificent predators",
        "Educational briefings on shark conservation",
        "Encounters with multiple shark species",
        "Expert guidance from specialized shark diving instructors",
      ],
      itineraryDetails: [
        {
          day: "Day 1",
          title: "Arrival & Orientation",
          activities: [
            "Arrival in Fuvahmulah",
            "Comprehensive safety briefing",
            "Equipment check and setup",
            "Introduction to tiger shark behavior and diving protocols",
          ],
        },
        {
          day: "Day 2-4",
          title: "Tiger Shark Diving",
          activities: [
            "Morning and afternoon dives at Tiger Shark Point",
            "Thresher shark deep dives",
            "Pelagic drift dives for oceanic whitetips",
            "Evening presentations on shark conservation",
          ],
        },
        {
          day: "Day 5-7",
          title: "Multi-Species Shark Encounters",
          activities: [
            "Exploration of additional dive sites",
            "Hammerhead and silvertip shark encounters",
            "Visit to local conservation projects",
            "Final dives and departure",
          ],
        },
      ],
    },
    {
      id: "encounter-giants",
      title: "Encounter Giants",
      subtitle: "Manta Rays & Whale Sharks",
      image: "/shark.jpg",
      duration: "7 days",
      location: "Huvadhoo",
      description: "Embark on an adventure to encounter rare and majestic marine creatures in their natural habitat.",
      fullDescription: [
        "Our 'Encounter Giants' expedition focuses on the magnificent gentle giants of the Maldivian waters. Huvadhoo Atoll is renowned for its healthy populations of manta rays and seasonal whale shark encounters, offering some of the most memorable underwater experiences possible.",
        "This specialized itinerary takes you to known manta cleaning stations and feeding areas where these graceful creatures congregate. Our experienced guides understand manta behavior and will position you for respectful encounters that allow for observation and photography without disturbing these protected species.",
        "Beyond mantas, this expedition offers opportunities to encounter whale sharks, the world's largest fish, as well as diverse reef life including turtles, napoleon wrasse, and a kaleidoscope of tropical fish species.",
      ],
      highlights: [
        "Multiple dives at manta cleaning stations",
        "Snorkeling opportunities with whale sharks",
        "Educational briefings on manta ray research",
        "Exploration of pristine coral reefs",
        "Night dives to observe reef transitions",
      ],
      itineraryDetails: [
        {
          day: "Day 1",
          title: "Arrival & Briefing",
          activities: [
            "Arrival in Huvadhoo Atoll",
            "Equipment setup and check",
            "Orientation dive at nearby reef",
            "Evening presentation on manta ray ecology",
          ],
        },
        {
          day: "Day 2-4",
          title: "Manta Ray Encounters",
          activities: [
            "Morning dives at manta cleaning stations",
            "Afternoon dives at manta feeding areas",
            "Snorkeling sessions in manta aggregation sites",
            "Participation in manta identification projects",
          ],
        },
        {
          day: "Day 5-7",
          title: "Whale Sharks & Reef Exploration",
          activities: [
            "Search for whale sharks in known hotspots",
            "Exploration of pristine coral gardens",
            "Night diving on vibrant reefs",
            "Final encounters and departure",
          ],
        },
      ],
    },
    {
      id: "addu-manta",
      title: "Addu Manta Point",
      subtitle: "Southern Atoll Exploration",
      image: "/manta.jpg",
      duration: "10 days",
      location: "Addu Atoll",
      description: "Embark on a deep-sea adventure and encounter graceful manta rays in their natural habitat.",
      fullDescription: [
        "Addu Atoll, the southernmost atoll in the Maldives, offers a unique diving experience with its year-round manta ray population and historical shipwreck. Our 'Addu Manta Point' expedition provides comprehensive exploration of this remote and less-visited region.",
        "The highlight of this itinerary is Manta Point (Maakandu), a renowned cleaning station where manta rays regularly visit to have parasites removed by cleaner wrasse. This site offers consistent manta ray encounters throughout the year, making it one of the most reliable places in the Maldives to observe these magnificent creatures.",
        "Beyond mantas, this expedition includes dives at the British Loyalty shipwreck, a British oil tanker sunk during World War II that now serves as an artificial reef teeming with marine life. You'll also explore the unique continuous reef system that connects multiple islands in Addu Atoll, a geographical feature not found elsewhere in the Maldives.",
      ],
      highlights: [
        "Multiple dives at Manta Point cleaning station",
        "Exploration of the British Loyalty shipwreck",
        "Dives along the continuous reef system",
        "Encounters with abundant turtle populations",
        "Visit to local islands with British colonial history",
      ],
      itineraryDetails: [
        {
          day: "Day 1-3",
          title: "Arrival & Initial Exploration",
          activities: [
            "Arrival in Addu Atoll",
            "Orientation dives at nearby reefs",
            "First visits to Manta Point",
            "Evening presentations on Addu's unique marine ecosystem",
          ],
        },
        {
          day: "Day 4-7",
          title: "Manta Encounters & Shipwreck",
          activities: [
            "Morning and afternoon dives at Manta Point",
            "Multiple dives at the British Loyalty shipwreck",
            "Channel dives for pelagic species",
            "Night dives on vibrant reef systems",
          ],
        },
        {
          day: "Day 8-10",
          title: "Comprehensive Atoll Exploration",
          activities: [
            "Exploration of the continuous reef system",
            "Visits to remote dive sites",
            "Final manta encounters",
            "Island visits and departure",
          ],
        },
      ],
    },
  ]

  // Handle opening the modal with specific itinerary
  const openModal = (id) => {
    setActiveItinerary(itineraries.find((item) => item.id === id))
    setIsModalOpen(true)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false)
    // Restore body scrolling
    document.body.style.overflow = "auto"
  }

  // Close modal on escape key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }

    window.addEventListener("keydown", handleEscKey)
    return () => {
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      <Head>
        <title>Maldives Dive Itineraries | Shark Dives & Coral Reefs</title>
        <meta
          name="description"
          content="Discover diverse dive itineraries in the Maldives, from tiger shark dives to colorful reefs. Plan your next underwater adventure with Cruise Republic."
        />
        <meta
          name="keywords"
          content="fuvahmulah dive, maldives dive, diving in fuvahmulah, maldives diving, underwater adventure, coral reefs, marine life, Cruise Republic"
        />
        <meta property="og:title" content="Maldives Dive Itineraries | Shark Dives & Coral Reefs" />
        <meta
          property="og:description"
          content="Discover diverse dive itineraries in the Maldives, from tiger shark dives to colorful reefs. Plan your next underwater adventure with Cruise Republic."
        />
        <meta property="og:image" content="http://www.cruiserepublicmaldives.com/boat-top.jpg" />
        <meta property="og:url" content="http://www.cruiserepublicmaldives.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maldives Dive Itineraries | Shark Dives & Coral Reefs" />
        <meta
          name="twitter:description"
          content="Discover diverse dive itineraries in the Maldives, from tiger shark dives to colorful reefs. Plan your next underwater adventure with Cruise Republic."
        />
        <meta name="twitter:image" content="http://www.cruiserepublicmaldives.com/boat-top.jpg" />
      </Head>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('boat-top.jpg')" }}>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">DIVE ITINERARIES</h1>
          <div className="w-24 h-1 bg-white mb-8"></div>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl font-light">
            Explore the magnificent underwater world of the Maldives with our expertly crafted dive adventures
          </p>
          <div className="mt-12">
            <Link
              href="#itineraries"
              className="group bg-white text-black hover:bg-gray-100 transition-colors px-10 py-4 rounded-none font-medium text-lg flex items-center"
            >
              Explore Itineraries
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">DISCOVER THE DEEP SOUTH</h2>
            <p className="text-lg md:text-xl mb-12 leading-relaxed">
              Our dive itineraries take you to the most remote and pristine locations in the Maldives. From close
              encounters with tiger sharks to drifting alongside majestic manta rays, each journey is carefully designed
              to provide unforgettable underwater experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-gray-800 p-8 hover:bg-gray-900 transition-colors">
                <div className="text-4xl font-bold mb-2">5</div>
                <div className="text-xl font-medium mb-4">Day Expedition</div>
                <p className="text-gray-400">Perfect for those seeking a concentrated shark diving experience</p>
              </div>
              <div className="border border-gray-800 p-8 hover:bg-gray-900 transition-colors">
                <div className="text-4xl font-bold mb-2">7</div>
                <div className="text-xl font-medium mb-4">Day Expedition</div>
                <p className="text-gray-400">Our most popular itinerary with a balance of shark and manta encounters</p>
              </div>
              <div className="border border-gray-800 p-8 hover:bg-gray-900 transition-colors">
                <div className="text-4xl font-bold mb-2">10</div>
                <div className="text-xl font-medium mb-4">Day Expedition</div>
                <p className="text-gray-400">The ultimate deep south adventure for serious diving enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Itineraries Cards */}
      <section id="itineraries" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">FEATURED EXPERIENCES</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itineraries.map((itinerary) => (
              <div key={itinerary.id} className="group bg-white border-2 border-black overflow-hidden relative">
                <div className="relative overflow-hidden">
                  <Image
                    src={itinerary.image || "/placeholder.svg"}
                    alt={itinerary.title}
                    width={600}
                    height={800}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{itinerary.title}</h3>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <span>{itinerary.duration}</span>
                    <FaMapMarkerAlt className="ml-4 mr-2" />
                    <span>{itinerary.location}</span>
                  </div>
                  <p className="text-gray-700 mb-6">{itinerary.description}</p>
                  <button
                    onClick={() => openModal(itinerary.id)}
                    className="inline-flex items-center text-black font-medium border-b-2 border-black pb-1 hover:pb-2 transition-all"
                  >
                    LEARN MORE <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Itineraries Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">DETAILED ITINERARIES</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            <button
              onClick={() => setActiveTab("5-day")}
              className={`px-8 py-4 text-lg font-medium mx-2 mb-2 transition-colors ${
                activeTab === "5-day"
                  ? "bg-white text-black"
                  : "bg-transparent text-white border border-white hover:bg-white/10"
              }`}
            >
              5-Day Itinerary
            </button>
            <button
              onClick={() => setActiveTab("7-day")}
              className={`px-8 py-4 text-lg font-medium mx-2 mb-2 transition-colors ${
                activeTab === "7-day"
                  ? "bg-white text-black"
                  : "bg-transparent text-white border border-white hover:bg-white/10"
              }`}
            >
              7-Day Itinerary
            </button>
            <button
              onClick={() => setActiveTab("10-day")}
              className={`px-8 py-4 text-lg font-medium mx-2 mb-2 transition-colors ${
                activeTab === "10-day"
                  ? "bg-white text-black"
                  : "bg-transparent text-white border border-white hover:bg-white/10"
              }`}
            >
              10-Day Itinerary
            </button>
          </div>

          {/* 5-Day Itinerary Content */}
          {activeTab === "5-day" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">5-Day Deep South Maldives Diving Itinerary</h3>
                <p className="text-xl text-gray-300">Starting from Fuvahmulah &amp; Ending in Addu Atoll</p>
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-1 text-center md:text-left">
                    <div className="inline-block md:block bg-white text-black font-bold text-xl py-2 px-4 mb-2">
                      DAY 1
                    </div>
                  </div>
                  <div className="md:col-span-4 border-l-2 border-white pl-6">
                    <h4 className="text-2xl font-bold mb-4">Arrival in Fuvahmulah &amp; Deep Dive at Sea Fan</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Upon arrival, our representative will warmly welcome you. Once onboard, you will be shown to your
                      cabin and given a comprehensive tour of the boat. After lunch, our entire team will conduct a
                      detailed briefing, followed by an in-depth overview of your dives provided by your dive guides.
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Arrival at Fuvahmulah Domestic Airport, transfer to dive boat</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          First Dive: Sea Fan (Gorgonian) – a deep drift dive featuring massive gorgonian sea fans
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Evening briefing on shark diving and expedition plan</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-1 text-center md:text-left">
                    <div className="inline-block md:block bg-white text-black font-bold text-xl py-2 px-4 mb-2">
                      DAYS 2-3
                    </div>
                  </div>
                  <div className="md:col-span-4 border-l-2 border-white pl-6">
                    <h4 className="text-2xl font-bold mb-4">Fuvahmulah – The Ultimate Shark Diving Destination</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Tiger Zone – close encounters with tiger sharks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Thresher Shark Deep Dive – early morning dive for rare pelagic threshers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Hammerhead Search – deep dive in the blue for schooling hammerheads</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Farikede Plateau &amp; Pelagic Drift Dives – encounter silvertips and oceanic whitetips
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Sunset at Thoondu Beach, then overnight transfer toward Huvadhoo</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-1 text-center md:text-left">
                    <div className="inline-block md:block bg-white text-black font-bold text-xl py-2 px-4 mb-2">
                      DAYS 4-5
                    </div>
                  </div>
                  <div className="md:col-span-4 border-l-2 border-white pl-6">
                    <h4 className="text-2xl font-bold mb-4">Huvadhoo Atoll – Channel Diving &amp; Pelagics</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Nilandhoo Kandu &amp; Vilingili Kandu – encounter hammerheads and grey reef sharks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Koodhoo Kandu – strong current channel dive with silky sharks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Maarehaa Thila – pristine coral reefs with vibrant marine biodiversity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Uninhabited Island BBQ – sunset beach dinner experience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Overnight cruise to Addu Atoll</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Departure from Gan International Airport (optional)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 7-Day Itinerary Content */}
          {activeTab === "7-day" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">7-Day Deep South Maldives Diving Itinerary</h3>
                <p className="text-xl text-gray-300">Starting from Fuvahmulah &amp; Ending in Addu Atoll</p>
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-1 text-center md:text-left">
                    <div className="inline-block md:block bg-white text-black font-bold text-xl py-2 px-4 mb-2">
                      DAY 1
                    </div>
                  </div>
                  <div className="md:col-span-4 border-l-2 border-white pl-6">
                    <h4 className="text-2xl font-bold mb-4">Arrival in Fuvahmulah &amp; Deep Dive at Sea Fan</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Upon arrival, our representative will warmly welcome you. Once onboard, you will be shown to your
                      cabin and given a comprehensive tour of the boat.
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Arrival at Fuvahmulah Domestic Airport, transfer to dive boat</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>First Dive: Sea Fan (Gorgonian) – a deep drift dive</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Evening briefing on shark diving and expedition plan</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-1 text-center md:text-left">
                    <div className="inline-block md:block bg-white text-black font-bold text-xl py-2 px-4 mb-2">
                      DAYS 2-3
                    </div>
                  </div>
                  <div className="md:col-span-4 border-l-2 border-white pl-6">
                    <h4 className="text-2xl font-bold mb-4">Fuvahmulah – The Ultimate Shark Diving Destination</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Tiger Zone – close encounters with tiger sharks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Thresher Shark Deep Dive – early morning dive</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Hammerhead Search – deep dive in the blue</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Farikede Plateau &amp; Pelagic Drift Dives</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Sunset at Thoondu Beach</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-1 text-center md:text-left">
                    <div className="inline-block md:block bg-white text-black font-bold text-xl py-2 px-4 mb-2">
                      DAYS 4-5
                    </div>
                  </div>
                  <div className="md:col-span-4 border-l-2 border-white pl-6">
                    <h4 className="text-2xl font-bold mb-4">Huvadhoo Atoll – Channel Diving &amp; Pelagics</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Nilandhoo Kandu &amp; Vilingili Kandu</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Koodhoo Kandu – strong current channel dive</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Maarehaa Thila – pristine coral reefs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Uninhabited Island BBQ</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Overnight cruise to Addu Atoll</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-1 text-center md:text-left">
                    <div className="inline-block md:block bg-white text-black font-bold text-xl py-2 px-4 mb-2">
                      DAYS 6-7
                    </div>
                  </div>
                  <div className="md:col-span-4 border-l-2 border-white pl-6">
                    <h4 className="text-2xl font-bold mb-4">Addu Atoll – Manta Point</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Maakandu (Manta Point) – cleaning station for mantas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Addu Shipwreck – a World War II-era oil tanker</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Addu Kandu Dives – deep channels</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Relax on an uninhabited island</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Final morning dive or snorkeling session</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Transfer to Gan International Airport for departure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 10-Day Itinerary Content */}
          {activeTab === "10-day" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">10-Day Deep South Maldives Diving Itinerary</h3>
                <p className="text-xl text-gray-300">Starting from Fuvahmulah &amp; Ending in Addu Atoll</p>
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-1 text-center md:text-left">
                    <div className="inline-block md:block bg-white text-black font-bold text-xl py-2 px-4 mb-2">
                      DAY 1
                    </div>
                  </div>
                  <div className="md:col-span-4 border-l-2 border-white pl-6">
                    <h4 className="text-2xl font-bold mb-4">Arrival in Fuvahmulah</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Upon arrival, our representative will warmly welcome you. Once onboard, you will be shown to your
                      cabin and given a comprehensive tour of the boat.
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Arrival at Fuvahmulah Domestic Airport</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>First Dive: Sea Fan (Gorgonian)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Evening briefing on shark diving</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-1 text-center md:text-left">
                    <div className="inline-block md:block bg-white text-black font-bold text-xl py-2 px-4 mb-2">
                      DAYS 2-9
                    </div>
                  </div>
                  <div className="md:col-span-4 border-l-2 border-white pl-6">
                    <h4 className="text-2xl font-bold mb-4">Diving Adventures</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Experience the best diving spots across multiple atolls including Fuvahmulah, Huvadhoo, and Addu.
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Tiger Shark Zone – close encounters</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Thresher Shark Deep Dive</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Hammerhead Search</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Manta Point in Addu Atoll</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Remote &amp; Secret Spots in Huvadhoo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Uninhabited Island BBQs</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-1 text-center md:text-left">
                    <div className="inline-block md:block bg-white text-black font-bold text-xl py-2 px-4 mb-2">
                      DAY 10
                    </div>
                  </div>
                  <div className="md:col-span-4 border-l-2 border-white pl-6">
                    <h4 className="text-2xl font-bold mb-4">Departure</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Relaxing morning snorkel or final dive (optional)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Return transfer and departure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">WHAT DIVERS SAY</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-2 border-black">
              <div className="text-5xl font-serif mb-6">"</div>
              <p className="text-gray-800 mb-6 italic">
                The tiger shark encounter was the highlight of my diving career. The guides were professional and safety
                was always the priority.
              </p>
              <div className="font-bold">Sarah T.</div>
              <div className="text-gray-600">United Kingdom</div>
            </div>

            <div className="bg-white p-8 border-2 border-black">
              <div className="text-5xl font-serif mb-6">"</div>
              <p className="text-gray-800 mb-6 italic">
                We took a day trip from Fuvahmulah to Addu to see manta rays with Cruise Republic and it was a 10! Super
                nice and attentive with everything. Great diving, food and trip in general. A hug to all
              </p>
              <div className="font-bold">Maria E.</div>
              <div className="text-gray-600">Spain</div>
            </div>

            <div className="bg-white p-8 border-2 border-black">
              <div className="text-5xl font-serif mb-6">"</div>
              <p className="text-gray-800 mb-6 italic">
                An extraordinary experience, a great day of crossing from Fuvahmulha to Addu. We saw the sunrise in the
                sea, the beautiful dives with blankets, a very good breakfast and very good food... incredible sailing,
                exquisite treatment, I recommend it 100x100.
              </p>
              <div className="font-bold">Carmen Q.</div>
              <div className="text-gray-600">Spain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">READY FOR YOUR DIVING ADVENTURE?</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Contact our team to book your dream diving expedition in the Maldives. Spaces are limited and fill quickly
              for our peak season expeditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/9607780739"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black hover:bg-gray-200 px-10 py-4 font-medium text-lg transition-colors"
              >
                CONTACT US ON WHATSAPP
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@cruiserepublicmaldives.com&su=Interested%20in%20a%20cruise&body=Hello%20Team,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white text-white hover:bg-white/10 px-10 py-4 font-medium text-lg transition-colors"
              >
                EMAIL US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Itinerary Details */}
      {isModalOpen && activeItinerary && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black hover:text-gray-600 transition-colors z-10"
              aria-label="Close modal"
            >
              <FaTimes size={24} />
            </button>

            {/* Header with image */}
            <div className="relative h-64 md:h-80">
              <Image
                src={activeItinerary.image || "/placeholder.svg"}
                alt={activeItinerary.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-3xl font-bold mb-2">{activeItinerary.title}</h3>
                <p className="text-xl">{activeItinerary.subtitle}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Quick facts */}
              <div className="flex flex-wrap gap-6 mb-8 border-b border-gray-200 pb-6">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-black mr-2" />
                  <span className="font-medium">{activeItinerary.duration}</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-black mr-2" />
                  <span className="font-medium">{activeItinerary.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <FaWater className="mr-2" />
                  Overview
                </h4>
                <div className="space-y-4">
                  {activeItinerary.fullDescription.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8 bg-gray-50 p-6 border border-gray-200">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <FaFish className="mr-2" />
                  Highlights
                </h4>
                <ul className="space-y-2">
                  {activeItinerary.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-black mr-2 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary Details */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <FaShip className="mr-2" />
                  Itinerary Details
                </h4>
                <div className="space-y-8">
                  {activeItinerary.itineraryDetails.map((detail, index) => (
                    <div key={index} className="border-l-2 border-black pl-6">
                      <h5 className="text-lg font-bold mb-2">
                        {detail.day}: {detail.title}
                      </h5>
                      <ul className="space-y-2">
                        {detail.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <a
                  href="https://wa.me/9607780739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white hover:bg-gray-800 px-8 py-3 transition-colors"
                >
                  <FaWhatsapp className="inline-block mr-2" />
                  Inquire About This Itinerary
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9607780739"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-40"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Footer */}
      <Footer />
    </div>
  )
}

