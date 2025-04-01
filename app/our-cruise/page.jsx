"use client"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight, FaWhatsapp, FaShip, FaUtensils, FaSwimmer, FaCamera } from "react-icons/fa"
import Image from "next/image"

// ImageTransition component for fading between images
function ImageTransition({ images, intervalTime = 5000, transitionTime = 500 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade-out effect
      setFade(false)
      setTimeout(() => {
        // Switch to the next image
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        setFade(true)
      }, transitionTime)
    }, intervalTime)

    return () => clearInterval(interval)
  }, [images, intervalTime, transitionTime])

  const goToNext = () => {
    setFade(false)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      setFade(true)
    }, transitionTime)
  }

  const goToPrev = () => {
    setFade(false)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
      setFade(true)
    }, transitionTime)
  }

  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <Image
          src={`/${images[currentIndex]}` || "/placeholder.svg"}
          alt="Cruise Ship"
          width={1200}
          height={600}
          className={`w-full h-[600px] object-cover transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 border border-black pointer-events-none"></div>
      </div>

      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white border border-black hover:bg-black hover:text-white transition-colors duration-300 z-10"
        aria-label="Previous image"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white border border-black hover:bg-black hover:text-white transition-colors duration-300 z-10"
        aria-label="Next image"
      >
        <FaChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFade(false)
              setTimeout(() => {
                setCurrentIndex(index)
                setFade(true)
              }, transitionTime)
            }}
            className={`w-3 h-3 border border-black ${currentIndex === index ? "bg-black" : "bg-white"}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function CruisePage() {
  // Array of images for the transition slideshow
  const images = ["boat-top.jpg", "cr.PNG", "cr_2.PNG", "cr_3.PNG", "cr_4.PNG"]

  // State for active feature tab
  const [activeFeature, setActiveFeature] = useState("accommodations")

  // Features content
  const features = {
    accommodations: {
      title: "Luxury Accommodations",
      icon: <FaShip className="mr-2" />,
      description:
        "Our vessel features 5 comfortable cabins with bunk beds, designed to provide a cozy retreat after a day of adventure. Each cabin is equipped with storage space and essential amenities for a comfortable stay.",
      image: "room.JPG",
    },
    dining: {
      title: "Gourmet Dining",
      icon: <FaUtensils className="mr-2" />,
      description:
        "Enjoy delicious meals prepared by our skilled chef, featuring both international cuisine and local Maldivian specialties. Dine in our indoor dining area or under the stars on our deck for a truly memorable experience.",
      image: "set.JPG",
    },
    activities: {
      title: "Water Activities",
      icon: <FaSwimmer className="mr-2" />,
      description:
        "Dive into crystal-clear waters for snorkeling and scuba diving adventures. Explore vibrant coral reefs, encounter marine life, and discover the underwater wonders of the Maldives with our experienced guides.",
      image: "img-1.JPG",
    },
    excursions: {
      title: "Island Excursions",
      icon: <FaCamera className="mr-2" />,
      description:
        "Visit pristine beaches, local islands, and hidden gems throughout the Maldives. Our excursions offer opportunities to experience authentic Maldivian culture and explore the natural beauty of this paradise.",
      image: "coco2.JPG",
    },
  }

  return (
    <div className="bg-white text-black">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/sunset.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl text-white font-bold mb-6 tracking-tight">
              Welcome Aboard <br />
              Cruise Republic
            </h1>
            <p className="text-xl text-white mb-10 max-w-2xl">
              Embark on a luxurious journey through the pristine waters of the Maldives, where adventure and relaxation
              await.
            </p>
            <Link
              href="/book"
              className="bg-transparent hover:bg-white hover:text-black text-white border-2 border-white px-8 py-3 transition-all duration-300 inline-block"
            >
              Book Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* About the Cruise Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Cruise Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Cruise Republic offers an unparalleled journey through the southern atolls of the Maldives, combining
                luxury, adventure, and authentic experiences.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our vessel is designed to provide comfort while navigating the pristine waters of the Maldives, allowing
                you to explore remote dive sites, secluded islands, and vibrant marine ecosystems.
              </p>
              <p className="text-lg leading-relaxed">
                With a maximum capacity of 10 passengers and a crew of 4, we ensure personalized service and attention
                to detail throughout your journey.
              </p>
            </div>
            <div className="relative">
              <Image src="/boat.JPG" alt="Cruise Republic Vessel" width={600} height={400} className="object-cover" />
              <div className="absolute inset-0 border border-black pointer-events-none"></div>
            </div>
          </div>

          {/* Transitioning Image Component */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Explore Our Vessel</h3>
            <ImageTransition images={images} />
          </div>
        </div>
      </section>

      {/* Features Section with Tabs */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Cruise Features</h2>

          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {Object.entries(features).map(([key, feature]) => (
              <button
                key={key}
                onClick={() => setActiveFeature(key)}
                className={`px-6 py-3 text-lg font-medium mx-2 mb-2 transition-colors ${
                  activeFeature === key
                    ? "bg-white text-black"
                    : "bg-transparent text-white border border-white hover:bg-white/10"
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                {features[activeFeature].icon}
                <span>{features[activeFeature].title}</span>
              </h3>
              <p className="text-lg leading-relaxed">{features[activeFeature].description}</p>
            </div>
            <div className="relative order-1 md:order-2">
              <Image
                src={`/${features[activeFeature].image}`}
                alt={features[activeFeature].title}
                width={600}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 border border-white pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: "women.JPG", alt: "Guests enjoying the cruise" },
              { src: "people.jpg", alt: "Cruise guests" },
              { src: "coco2.JPG", alt: "Tropical destination" },
              { src: "img-4.JPG", alt: "Ocean view" },
              { src: "people-5.jpg", alt: "Cruise activities" },
              { src: "img-6.JPG", alt: "Maldives scenery" },
            ].map((img, index) => (
              <div key={index} className="relative group overflow-hidden">
                <Image
                  src={`/${img.src}` || "/placeholder.svg"}
                  alt={img.alt}
                  width={400}
                  height={320}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-black pointer-events-none"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-block border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Guest Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-200">
              <p className="italic text-lg mb-6">
                "An unforgettable journey through the Maldives. The crew was exceptional, the diving spots were
                incredible, and the entire experience exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">Sarah & Michael</p>
                  <p className="text-sm text-gray-600">United Kingdom</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <p className="italic text-lg mb-6">
                "The perfect balance of adventure and relaxation. We saw tiger sharks, manta rays, and explored pristine
                islands. The food was amazing and the crew made us feel at home."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">David & Emma</p>
                  <p className="text-sm text-gray-600">Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Booking Section */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Sail?</h2>
          <p className="mb-10 text-lg max-w-2xl mx-auto">
            Book your dream cruise now and experience the luxury and adventure that awaits you in the stunning waters of
            the Maldives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-black hover:bg-gray-200 border-2 border-white px-8 py-3 transition-all duration-300"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white hover:bg-white/10 border-2 border-white px-8 py-3 transition-all duration-300"
            >
              Contact Us
            </Link>
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

