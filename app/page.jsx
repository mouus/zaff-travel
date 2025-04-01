"use client"
import Link from "next/link"
import { FaWhatsapp, FaShip, FaBed, FaTheaterMasks,FaWater, FaFish, FaMapMarkerAlt, FaArrowRight  } from "react-icons/fa"
import { useState, useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false)
  // State for Vessel Specifications tabs
  const [activeTab, setActiveTab] = useState("general")
  // State for featured journey image
  const [featuredImage, setFeaturedImage] = useState("img-4.JPG")
  const [activeLocation, setActiveLocation] = useState("maldives")

  //locations
  const locations = {
    maldives: {
      title: "The Maldives",
      subtitle: "A Paradise on Earth",
      description: "The Maldives is an archipelago of 26 atolls and over 1,000 coral islands in the Indian Ocean. Known for its crystal-clear waters, vibrant coral reefs, and abundant marine life, it's a paradise for divers and ocean enthusiasts. The southern atolls offer a more authentic and less-traveled experience, with pristine reefs and unique diving opportunities.",
      image: "/map.PNG",
      facts: [
        "1,192 coral islands spread across 26 atolls",
        "Average temperature of 27-30°C year-round",
        "Home to over 2,000 species of fish",
        "World's lowest country with an average elevation of 1.5 meters"
      ]
    },
    huvadhoo: {
      title: "Huvadhoo Atoll",
      subtitle: "The Diving Paradise",
      description: "Huvadhoo is one of the largest and deepest atolls in the Maldives, featuring pristine reefs, thrilling channels, and diverse marine life. Its remote location has preserved its natural beauty and underwater ecosystems. The atoll is known for its manta ray cleaning stations, shark encounters, and spectacular coral formations that remain largely untouched by mass tourism.",
      image: "/huvadhoo.png",
      facts: [
        "Over 230 islands with only 10 inhabited",
        "Home to some of the healthiest coral reefs in the Maldives",
        "Famous for 'Manta Point' cleaning stations",
        "Strong currents create thrilling drift dives for experienced divers"
      ]
    },
    fuvahmulah: {
      title: "Fuvahmulah",
      subtitle: "The Tiger Shark Capital",
      description: "Fuvahmulah is a unique island with a distinctive geography, featuring freshwater lakes and a remarkable marine ecosystem. It's known worldwide as the 'Tiger Shark Capital' where divers can have thrilling encounters with these magnificent predators. The island also offers encounters with thresher sharks, oceanic manta rays, and other pelagic species in its deep blue waters.",
      image: "/east.JPG",
      facts: [
        "The only island in Maldives with freshwater lakes",
        "One of the few places in the world for reliable tiger shark encounters",
        "Unique geography with a reef that drops to over 2,000 meters",
        "Home to rare thresher sharks that are typically found in deep waters"
      ]
    },
    addu: {
      title: "Addu Atoll",
      subtitle: "The Historical Gem",
      description: "Addu is the southernmost atoll of the Maldives with a rich history and unique culture. It features the British Loyalty shipwreck, a remnant from WWII, and is the only place in the Maldives with a continuous reef system connecting multiple islands. The atoll offers diverse diving experiences from wreck exploration to vibrant reef systems teeming with marine life.",
      image: "/addu.png",
      facts: [
        "Home to the British Loyalty shipwreck from World War II",
        "Only place in Maldives with a continuous reef connecting multiple islands",
        "Abundant turtle populations and manta ray cleaning stations",
        "Historical significance with British military presence until the 1970s"
      ]
    }
  };


  // Images array for the Journey with Us section
  const journeyImages = [
    { src: "boat.JPG", caption: "Our Luxury Vessel" },
    { src: "room.JPG", caption: "Comfortable Accommodations" },
    { src: "coco2.JPG", caption: "Pristine Beaches" },
    { src: "coco.jpg", caption: "Island Paradise" },
    { src: "women.JPG", caption: "Local Culture" },
    { src: "set.JPG", caption: "Sunset Views" },
    { src: "img-1.JPG", caption: "Underwater Exploration" },
    { src: "img-2.JPG", caption: "Marine Life" },
    { src: "img-3.JPG", caption: "Coral Reefs" },
    { src: "img-4.JPG", caption: "Crystal Clear Waters" },
    { src: "img-5.JPG", caption: "Tropical Scenery" },
    { src: "img-6.JPG", caption: "Diving Adventures" },
    { src: "img-7.JPG", caption: "Secluded Spots" },
    { src: "img-8.JPG", caption: "Beachside Relaxation" },
    { src: "img-9.JPG", caption: "Ocean Views" },
    { src: "img-10.JPG", caption: "Maldivian Beauty" },
    { src: "img-11.JPG", caption: "Tranquil Moments" },
    { src: "img-12.JPG", caption: "Unforgettable Experiences" },
    { src: "img-13.JPG", caption: "Hidden Gems" },
  ]

  // Determine if the device is mobile (phones)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Scroll reveal functionality for sections
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )
    reveals.forEach((r) => observer.observe(r))
    return () => observer.disconnect()
  }, [])

  // Vessel Specifications content
  const vesselSpecs = {
    general: {
      title: "General Information",
      icon: <FaShip className="mr-2" />,
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Length: 21.6m (74 feet)</li>
          <li>Width: 6.61m</li>
          <li>Depth: 1.98m</li>
          <li>Max Capacity: 10 passengers</li>
          <li>Cabins: 5 (with bunk beds)</li>
          <li>Year Built: 2007</li>
          <li>Hull Type: Timber &amp; Fiberglass coating</li>
          <li>Cruise Speed: 12 knots</li>
          <li>Propulsion: Diesel Engine (Yanmar)</li>
        </ul>
      ),
    },
    accommodation: {
      title: "Accommodation & Public Areas",
      icon: <FaBed className="mr-2" />,
      content: (
        <>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cabins: 5 (Bunk Beds)</li>
            <li>
              Facilities:
              <ul className="list-disc pl-5">
                <li>Bar</li>
                <li>Dining Area</li>
                <li>Library</li>
                <li>Sundeck</li>
                <li>Television</li>
                <li>Music Player</li>
              </ul>
            </li>
            <li>
              Equipment Provided:
              <ul className="list-disc pl-5">
                <li>Snorkeling Gear</li>
                <li>Scuba Diving Equipment</li>
                <li>Dinghy with Outboard Engine (Mercury)</li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
    leisure: {
      title: "Leisure & Entertainment",
      icon: <FaTheaterMasks className="mr-2" />,
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Snorkeling</li>
          <li>Scuba Diving</li>
          <li>Wavesurfing (on request)</li>
          <li>BBQ on Desert Island</li>
          <li>Island Hopping</li>
          <li>Yoga</li>
          <li>Cultural Shows (on request)</li>
        </ul>
      ),
    },
    utilities: {
      title: "Electricity & Water",
      icon: null,
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>2 x 40 KW Cummins Generator Soundproof</li>
          <li>Power: AC 220V</li>
          <li>Water: Desalination System</li>
        </ul>
      ),
    },
    navigation: {
      title: "Navigation & Communication",
      icon: null,
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Map &amp; Compass</li>
          <li>GPS</li>
          <li>Search Light</li>
          <li>CB Set</li>
          <li>Binoculars</li>
          <li>VHF Radio</li>
          <li>Mobile Phone</li>
          <li>Satellite Phone</li>
          <li>Free WiFi</li>
        </ul>
      ),
    },
    safety: {
      title: "Emergency Equipment",
      icon: null,
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Life Jackets</li>
          <li>Life Buoys</li>
          <li>Fire Extinguishers</li>
          <li>Fire Blanket</li>
          <li>First Aid Kit</li>
          <li>DAN Oxygen Kit</li>
        </ul>
      ),
    },
    crew: {
      title: "Crew",
      icon: null,
      content: (
        <ul className="list-disc pl-5">
          <li>Total Crew: 4 (Including Captain &amp; Chef)</li>
        </ul>
      ),
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Background Video */}
        <section className="relative h-screen overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
            <source src="/img66.MP4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 drop-shadow-lg tracking-tight">
              Discover Paradise in the Maldives
            </h1>
            <p className="text-lg sm:text-xl mb-8 drop-shadow-md max-w-2xl">
              Explore the deep south of the Maldives on an elegant cruise experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dive-itineraries"
                className="bg-transparent hover:bg-white hover:text-black text-white border-2 border-white px-8 py-3 transition-all duration-300"
              >
                Learn More
              </Link>
              <Link
                href="/book"
                className="bg-white text-black hover:bg-black hover:text-white border-2 border-white px-8 py-3 transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>

        {/* Ocean Exploration Section */}
        <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Explore the Southern Maldives</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Discover the pristine atolls and unique diving experiences of the southern Maldives, where untouched reefs
            and extraordinary marine life await.
          </p>
        </div>

        {/* Location Selector */}
        <div className="flex flex-wrap justify-center mb-16">
          {Object.entries(locations).map(([key, location]) => (
            <button
              key={key}
              onClick={() => setActiveLocation(key)}
              className={`px-6 py-3 text-lg font-medium mx-2 mb-2 transition-colors ${
                activeLocation === key
                  ? "bg-white text-black"
                  : "bg-transparent text-white border border-white hover:bg-white/10"
              }`}
            >
              {location.title}
            </button>
          ))}
        </div>

        {/* Location Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Map/Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={locations[activeLocation].image || "/placeholder.svg"}
                alt={locations[activeLocation].title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 border border-white pointer-events-none"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" />
              <h3 className="text-xl text-gray-400">{locations[activeLocation].subtitle}</h3>
            </div>
            <h3 className="text-3xl font-bold mb-6">{locations[activeLocation].title}</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">{locations[activeLocation].description}</p>

            <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <FaWater className="mr-2" />
                <span>Key Facts</span>
              </h4>
              <ul className="space-y-3">
                {locations[activeLocation].facts.map((fact, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-2 mt-1">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Marine Life Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <FaFish className="text-white mr-3" size={20} />
              <h4 className="text-xl font-bold">Huvadhoo Marine Life</h4>
            </div>
            <p className="text-gray-300 mb-4">
              Encounter grey reef sharks, eagle rays, and manta rays in the thrilling channels and pristine reefs of
              Huvadhoo Atoll.
            </p>
            <div className="mt-auto">
              <Link
                href="/dive-itineraries/huvadhoo"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                Explore Huvadhoo <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <FaFish className="text-white mr-3" size={20} />
              <h4 className="text-xl font-bold">Fuvahmulah Sharks</h4>
            </div>
            <p className="text-gray-300 mb-4">
              Experience thrilling encounters with tiger sharks, thresher sharks, and oceanic manta rays in the deep
              blue waters of Fuvahmulah.
            </p>
            <div className="mt-auto">
              <Link
                href="/dive-itineraries/fuvahmulah"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                Explore Fuvahmulah <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <FaFish className="text-white mr-3" size={20} />
              <h4 className="text-xl font-bold">Addu Diversity</h4>
            </div>
            <p className="text-gray-300 mb-4">
              Dive the British Loyalty shipwreck and explore the continuous reef system teeming with turtles, reef
              sharks, and colorful coral formations.
            </p>
            <div className="mt-auto">
              <Link
                href="/dive-itineraries/addu"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                Explore Addu <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/dive-itineraries"
            className="inline-block bg-white text-black px-8 py-3 hover:bg-gray-200 transition-colors"
          >
            View All Dive Itineraries
          </Link>
        </div>
      </div>
    </section>

        {/* Journey with Us - Completely Redesigned */}
        <section className="reveal py-20 w-full transition-all duration-1000 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Journey With Us</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Featured Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`/${featuredImage}`}
                  alt="Featured journey"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xl font-medium">
                    {journeyImages.find((img) => img.src === featuredImage)?.caption || "Maldives Experience"}
                  </p>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 h-full">
                {journeyImages.slice(0, 12).map((img, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden cursor-pointer transition-all duration-300 ${
                      img.src === featuredImage ? "ring-2 ring-white" : ""
                    }`}
                    onClick={() => setFeaturedImage(img.src)}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={`/${img.src}`}
                        alt={img.caption}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 bg-black ${
                          img.src === featuredImage ? "opacity-0" : "opacity-40 hover:opacity-20"
                        } transition-opacity duration-300`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Journey Description */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Underwater Exploration</h3>
                <p className="text-gray-300 mb-4">
                  Dive into crystal clear waters and discover vibrant coral reefs, exotic marine life, and hidden
                  underwater treasures.
                </p>
                <Link
                  href="https://wa.me/9607780739"
                  className="inline-block border-b border-white hover:text-gray-300 transition-colors"
                >
                  Explore Diving Options
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Island Adventures</h3>
                <p className="text-gray-300 mb-4">
                  Visit pristine beaches, secluded islands, and experience the authentic Maldivian culture away from
                  tourist crowds.
                </p>
                <Link
                  href="https://wa.me/9607780739"
                  className="inline-block border-b border-white hover:text-gray-300 transition-colors"
                >
                  Discover Islands
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Onboard Experience</h3>
                <p className="text-gray-300 mb-4">
                  Enjoy comfortable accommodations, delicious cuisine, and relaxing moments on our carefully designed
                  vessel.
                </p>
                <Link
                  href="https://wa.me/9607780739"
                  className="inline-block border-b border-white hover:text-gray-300 transition-colors"
                >
                  Learn About Our Boat
                </Link>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/gallery"
                className="inline-block border-2 border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Boat Plan Section */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-center font-bold text-3xl mb-12 text-black">Cruise Republic Boat Plan</h2>
            <div className="flex justify-center">
              <div className="relative overflow-hidden group">
                <Image
                  src="/boat-map.jpg"
                  alt="Boat floor plan"
                  width={700}
                  height={500}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-black pointer-events-none"></div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold mb-4">Upper Deck</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    <span>Sundeck with loungers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    <span>Outdoor dining area</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    <span>Navigation bridge</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    <span>Shaded relaxation space</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6">
                <h3 className="text-xl font-bold mb-4">Lower Deck</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    <span>5 comfortable cabins</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    <span>Indoor dining area</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    <span>Lounge with entertainment</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                    <span>Dive equipment storage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Vessel Specifications with Tabs */}
        <section className="reveal py-16 w-full transition-all duration-1000 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <FaShip className="mr-3" />
              <span>Vessel Specifications</span>
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center mb-12">
              {Object.entries(vesselSpecs).map(([key, spec]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 text-lg font-medium mx-2 mb-2 transition-colors ${
                    activeTab === key
                      ? "bg-white text-black"
                      : "bg-transparent text-white border border-white hover:bg-white/10"
                  }`}
                >
                  {spec.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-black text-white p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                {vesselSpecs[activeTab].icon}
                <span>{vesselSpecs[activeTab].title}</span>
              </h3>
              <div className="text-left">{vesselSpecs[activeTab].content}</div>
            </div>
          </div>
        </section>
      </main>

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

      {/* Global styles for reveal animations */}
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}

