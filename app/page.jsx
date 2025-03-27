"use client"
import Link from "next/link"
import { FaWhatsapp, FaShip, FaBed, FaTheaterMasks, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useState, useEffect, useRef } from "react"
import Footer from "@/components/Footer"
import Image from "next/image"
import Navbar from "@/components/Navbar"


export default function Home() {
  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false)
  // State for Vessel Specifications slider
  const [currentSlide, setCurrentSlide] = useState(0)

  // Images array for the Journey with Us carousel
  const journeyImages = [
    "boat.JPG",
    "room.JPG",
    "coco2.JPG",
    "coco.jpg",
    "women.JPG",
    "set.JPG",
    "img-1.JPG",
    "img-2.JPG",
    "img-3.JPG",
    "img-4.JPG",
    "img-5.JPG",
    "img-6.JPG",
    "img-7.JPG",
    "img-8.JPG",
    "img-9.JPG",
    "img-10.JPG",
    "img-11.JPG",
    "img-12.JPG",
    "img-13.JPG",
  ]

  // Responsive images per page
  const [imagesPerPage, setImagesPerPage] = useState(5)
  useEffect(() => {
    const updateImagesPerPage = () => {
      if (window.innerWidth < 768) {
        setImagesPerPage(2)
      } else if (window.innerWidth < 1024) {
        setImagesPerPage(3)
      } else {
        setImagesPerPage(5)
      }
    }
    updateImagesPerPage()
    window.addEventListener("resize", updateImagesPerPage)
    return () => window.removeEventListener("resize", updateImagesPerPage)
  }, [])

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

  // Helper function: Group journeyImages into pages
  const getJourneyPages = () => {
    const pages = []
    for (let i = 0; i < journeyImages.length; i += imagesPerPage) {
      let page = journeyImages.slice(i, i + imagesPerPage)
      // If last page is incomplete, fill with images from the start
      if (page.length < imagesPerPage) {
        page = page.concat(journeyImages.slice(0, imagesPerPage - page.length))
      }
      pages.push(page)
    }
    return pages
  }
  const journeyPages = getJourneyPages()
  const totalPages = journeyPages.length
  const [currentJourneyPage, setCurrentJourneyPage] = useState(0)

  // Use a ref to measure the container width
  const journeyContainerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)
  useEffect(() => {
    const updateWidth = () => {
      if (journeyContainerRef.current) {
        setContainerWidth(journeyContainerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
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

  // Vessel Specifications slider slides
  const slides = [
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
      title: "Crew",
      icon: null,
      content: (
        <ul className="list-disc pl-5">
          <li>Total Crew: 4 (Including Captain &amp; Chef)</li>
        </ul>
      ),
    },
  ]

  // Navigation functions for Vessel Specifications slider
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Navigation functions for the Journey carousel
  const nextJourneySlide = () => {
    setCurrentJourneyPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }
  const prevJourneySlide = () => {
    setCurrentJourneyPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url(/img-4.JPG)" }}>
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
                className="bg-transparent hover:bg-white hover:text-black text-white border-2 border-white px-8 py-3 rounded-none transition-all duration-300"
              >
                Learn More
              </Link>
              <Link
                href="/book"
                className="bg-white text-black hover:bg-black hover:text-white border-2 border-white px-8 py-3 rounded-none transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>

        {/* Ocean Exploration Section */}
        <section className="reveal py-16 transition-all duration-1000 bg-white border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Explore the Ocean</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
              <div className="flex justify-center">
                {isMobile ? (
                  <div className="relative overflow-hidden">
                    <Image
                      src="/island.JPG"
                      alt="Island Map"
                      width={400}
                      height={400}
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-black pointer-events-none"></div>
                  </div>
                ) : (
                  <div className="relative overflow-hidden">
                    <Image
                      src="/island-map.png"
                      alt="Island Map"
                      width={1200}
                      height={400}
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-black pointer-events-none"></div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
                {["huvadhoo.png", "east.JPG", "addu.png"].map((img, index) => (
                  <div key={index} className="relative overflow-hidden group">
                    <Image
                      src={`/${img}`}
                      alt={`Location ${index + 1}`}
                      width={350}
                      height={350}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-black pointer-events-none"></div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                {isMobile ? (
                  <div className="relative overflow-hidden">
                    <Image
                      src="/southern.png"
                      alt="Southern Maldives"
                      width={400}
                      height={400}
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-black pointer-events-none"></div>
                  </div>
                ) : (
                  <div className="relative overflow-hidden">
                    <Image
                      src="/map.PNG"
                      alt="Maldives Map"
                      width={1200}
                      height={600}
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-black pointer-events-none"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Journey with Us Carousel */}
        <section className="reveal py-16 w-full transition-all duration-1000 bg-gray-50">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Journey With Us</h2>
          <div ref={journeyContainerRef} className="relative mx-auto w-full max-w-6xl px-4">
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentJourneyPage * containerWidth}px)` }}
              >
                {journeyPages.map((page, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0 flex justify-center gap-4 px-4">
                    {page.map((img, index) => (
                      <div key={index} className="relative group overflow-hidden w-[200px] h-[200px]">
                        <Image
                          src={`/${img}`}
                          alt={`Journey image ${index}`}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 border border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* Journey Carousel Arrow Buttons */}
            <button
              onClick={prevJourneySlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-3 bg-white border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 z-10"
              aria-label="Previous Journey Slide"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextJourneySlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-white border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 z-10"
              aria-label="Next Journey Slide"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </section>

        {/* Boat Plan Section */}
        <section className="bg-white py-16 border-t border-b border-gray-200">
          <h2 className="text-center font-bold text-3xl mb-8 text-black">Cruise Republic Boat Plan</h2>
          <div className="flex justify-center">
            <div className="relative overflow-hidden group">
              <Image
                src="/boat-map.jpg"
                alt="Boat floor plan"
                width={500}
                height={500}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-black pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* Vessel Specifications Slider */}
        <section className="reveal bg-gray-50 py-16 w-full transition-all duration-1000">
          <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <FaShip className="mr-3" />
              <span>Vessel Specifications</span>
            </h2>
            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      {slide.icon}
                      <span>{slide.title}</span>
                    </h3>
                    <div className="text-left">{slide.content}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Vessel Specifications Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevSlide}
                className="p-3 bg-white border border-black hover:bg-black hover:text-white transition-colors duration-300 flex items-center"
                aria-label="Previous Slide"
              >
                <FaChevronLeft className="mr-2" size={16} />
                <span>Previous</span>
              </button>
              <div className="flex items-center">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3 h-3 mx-1 rounded-full border border-black ${
                      currentSlide === idx ? "bg-black" : "bg-white"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 bg-white border border-black hover:bg-black hover:text-white transition-colors duration-300 flex items-center"
                aria-label="Next Slide"
              >
                <span>Next</span>
                <FaChevronRight className="ml-2" size={16} />
              </button>
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

