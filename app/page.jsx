"use client"
import Link from "next/link"
import { FaWhatsapp, FaShip, FaBed, FaTheaterMasks } from "react-icons/fa"
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
            <source src="/img66.mp4" type="video/mp4" />
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
        <section className="reveal py-16 transition-all duration-1000 text-black bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Explore the Ocean</h2>

            {/* Main Map */}
            <div className="mb-16 relative overflow-hidden">
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src="/map.PNG"
                  alt="Maldives Map"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Southern Maldives</h3>
                  <p className="text-sm md:text-base max-w-2xl text-white">
                    Our cruises explore the pristine and less-traveled southern atolls of the Maldives, offering you a
                    chance to discover untouched reefs and experience authentic local culture.
                  </p>
                </div>
              </div>
            </div>

            {/* Three Location Maps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {["huvadhoo.png", "east.JPG", "addu.png"].map((img, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={`/${img}`}
                      alt={`Location ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    <div className="absolute inset-0 border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-xl font-bold text-white">
                        {index === 0 ? "Huvadhoo Atoll" : index === 1 ? "Fuvahmulah" : "Addu Atoll"}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Island Map */}
            {isMobile && (
              <div className="mb-12 relative overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/island.JPG"
                    alt="Island Map"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute inset-0 border border-white pointer-events-none"></div>
                </div>
              </div>
            )}

            {/* Desktop Island Map */}
            {!isMobile && (
              <div className="mb-12 relative overflow-hidden">
                <div className="aspect-[21/9] relative">
                  <Image
                    src="/island-map.png"
                    alt="Island Map"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute inset-0 border border-white pointer-events-none"></div>
                </div>
              </div>
            )}
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
                  href="/diving"
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
                  href="/islands"
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
                  href="/experience"
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

