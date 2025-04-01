"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp, FaCheck, FaTimes, FaInfoCircle, FaShoppingCart, FaLifeRing } from "react-icons/fa"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function DiveGearPage() {
  // State for active category
  const [activeCategory, setActiveCategory] = useState("all")

  // State for equipment package selection
  const [selectedPackage, setSelectedPackage] = useState(null)

  // Scroll reveal functionality
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

  // Equipment categories
  const categories = [
    { id: "all", name: "All Equipment" },
    { id: "essential", name: "Essential Gear" },
    { id: "technical", name: "Technical Equipment" },
    { id: "accessories", name: "Accessories" },
  ]

  // Equipment data
  const equipment = [
    {
      id: 1,
      name: "Mask",
      price: "$7",
      loss: "$95",
      image: "/mask.jpg",
      category: "essential",
      description: "High-quality silicone mask with tempered glass for clear underwater vision.",
    },
    {
      id: 2,
      name: "Snorkel",
      price: "$7",
      loss: "$70",
      image: "/snorkel.jpg",
      category: "essential",
      description: "Dry-top snorkel with purge valve for easy clearing and comfortable breathing.",
    },
    {
      id: 3,
      name: "Fins",
      price: "$7",
      loss: "$150",
      image: "/fins.jpg",
      category: "essential",
      description: "Open-heel adjustable fins with comfortable foot pockets for efficient propulsion.",
    },
    {
      id: 4,
      name: "Wetsuit",
      price: "$10",
      loss: "$200",
      image: "/wetsuit.jpg",
      category: "essential",
      description:
        "3mm neoprene wetsuit perfect for tropical Maldivian waters, providing thermal protection and UV resistance.",
    },
    {
      id: 5,
      name: "BCD",
      price: "$12",
      loss: "$450",
      image: "/bcd.jpg",
      category: "technical",
      description: "Buoyancy Control Device with integrated weight system, multiple D-rings, and comfortable padding.",
    },
    {
      id: 6,
      name: "Regulator",
      price: "$12",
      loss: "$450",
      image: "/regulator.jpg",
      category: "technical",
      description:
        "Balanced diaphragm first stage with adjustable second stage for smooth, reliable breathing at any depth.",
    },
    {
      id: 7,
      name: "Torch",
      price: "$8",
      loss: "$300",
      image: "/torch.jpg",
      category: "accessories",
      description:
        "Powerful underwater LED torch with rechargeable battery, perfect for night dives or exploring shadowy areas.",
    },
    {
      id: 8,
      name: "Dive Computer",
      price: "$12",
      loss: "$400",
      image: "/computer.jpg",
      category: "technical",
      description:
        "User-friendly dive computer with clear display showing depth, time, temperature, and decompression information.",
    },
    {
      id: 9,
      name: "SMB",
      price: "Free",
      loss: "$70",
      image: "/smb.jpg",
      category: "accessories",
      description:
        "Surface Marker Buoy for safe ascents and surface signaling, essential for drift diving in currents.",
    },
    {
      id: 10,
      name: "15L Tank",
      price: "$13",
      loss: "$400",
      image: "/tank-15l.jpg",
      category: "technical",
      description: "15-liter aluminum tank, perfect for longer dives or for divers with higher air consumption.",
    },
    {
      id: 11,
      name: "11L Tank",
      price: "$8",
      loss: "$400",
      image: "/tank-11l.jpg",
      category: "technical",
      description: "11-liter aluminum tank, ideal for most recreational dives and easier to handle for smaller divers.",
    },
  ]

  // Filter equipment based on active category
  const filteredEquipment =
    activeCategory === "all" ? equipment : equipment.filter((item) => item.category === activeCategory)

  // Equipment packages
  const packages = [
    {
      id: "basic",
      name: "Basic Package",
      price: "$25",
      perDay: true,
      includes: ["Mask", "Snorkel", "Fins", "Wetsuit"],
      ideal: "Perfect for snorkeling and casual diving",
      image: "/basic-package.jpg",
    },
    {
      id: "standard",
      name: "Standard Package",
      price: "$40",
      perDay: true,
      includes: ["Mask", "Snorkel", "Fins", "Wetsuit", "BCD", "Regulator", "11L Tank"],
      ideal: "Ideal for recreational divers",
      image: "/standard-package.jpg",
      popular: true,
    },
    {
      id: "premium",
      name: "Premium Package",
      price: "$55",
      perDay: true,
      includes: ["Mask", "Snorkel", "Fins", "Wetsuit", "BCD", "Regulator", "15L Tank", "Dive Computer", "Torch"],
      ideal: "Complete setup for serious divers",
      image: "/premium-package.jpg",
    },
  ]

  return (
    <div className="bg-white text-black">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black">
        
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <div className="max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Diving Equipment Rentals</h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Professional-grade equipment to enhance your underwater adventures in the Maldives
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Introduction */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Quality Equipment for Your Diving Adventures</h2>
            <p className="text-lg leading-relaxed mb-8">
              We provide high-quality diving equipment for rent during your stay. All equipment is regularly maintained,
              serviced, and sanitized for your safety and comfort. Our gear is suitable for all experience levels, from
              beginners to advanced divers.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center">
                <FaCheck className="text-green-500 mr-2" />
                <span>Professionally maintained</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-green-500 mr-2" />
                <span>Sanitized after each use</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-green-500 mr-2" />
                <span>Multiple sizes available</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="text-green-500 mr-2" />
                <span>Expert fitting assistance</span>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Packages */}
        <section className="py-16 px-6 bg-black text-white reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Equipment Packages</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`border ${pkg.popular ? "border-white" : "border-gray-700"} p-6 relative transition-transform duration-300 hover:-translate-y-2 ${
                    selectedPackage === pkg.id ? "ring-2 ring-white" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-white text-black py-1 px-3 text-sm font-bold">
                      POPULAR
                    </div>
                  )}

                  <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                    <Image
                      src={pkg.image || "/placeholder.svg?height=300&width=400"}
                      alt={pkg.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    {pkg.perDay && <span className="text-sm ml-1">per day</span>}
                  </div>

                  <p className="text-gray-300 mb-4">{pkg.ideal}</p>

                  <h4 className="text-sm font-bold uppercase text-gray-400 mb-2">Includes:</h4>
                  <ul className="mb-6">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-center mb-1">
                        <FaCheck className="text-green-500 mr-2 text-sm" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>

            {selectedPackage && (
              <div className="mt-12 text-center">
                <Link
                  href="/contact?package=diving"
                  className="inline-block bg-white text-black px-8 py-3 hover:bg-gray-200 transition-colors"
                >
                  <FaShoppingCart className="inline-block mr-2" />
                  Reserve Selected Package
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Individual Equipment */}
        <section className="py-16 px-6 reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Individual Equipment</h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 text-lg font-medium mx-2 mb-2 transition-colors ${
                    activeCategory === category.id
                      ? "bg-black text-white"
                      : "bg-transparent text-black border border-black hover:bg-black/5"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Equipment Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEquipment.map((item) => (
                <div
                  key={item.id}
                  className="border border-black group cursor-pointer transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image || `/placeholder.svg?height=400&width=400`}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>

                    <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                      <div>
                        <p className="text-sm text-gray-600">Rental</p>
                        <p className="text-xl font-bold">
                          {item.price}
                          <span className="text-sm font-normal">/day</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Loss/Damage</p>
                        <p className="text-lg font-bold">{item.loss}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rental Information */}
        <section className="py-16 px-6 bg-gray-50 reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Rental Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mr-4">
                    <FaShoppingCart size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Booking Process</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Equipment should be reserved at least 24 hours in advance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Valid ID and credit card required for all rentals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Equipment is subject to availability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Fitting session required before first use</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mr-4">
                    <FaTimes size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Return Policy</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>All equipment must be returned clean and dry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Late returns incur additional daily charges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Damaged equipment will be charged at listed rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Equipment check required upon return</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mr-4">
                    <FaInfoCircle size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Important Notes</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Proof of diving certification required for technical equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Equipment is for personal use only and cannot be shared</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Report any equipment issues immediately</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Rental fees are non-refundable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-black text-white text-center reveal">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <FaLifeRing size={40} className="mr-4" />
              <h2 className="text-3xl font-bold">Need Assistance?</h2>
            </div>
            <p className="text-lg mb-8">
              Our team is here to help you select the right equipment for your diving adventures. Contact us for
              personalized recommendations or to check equipment availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-black hover:bg-gray-200 px-8 py-3 transition-colors">
                Contact Us
              </Link>
              <a
                href="https://wa.me/9607780739"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white hover:bg-white/10 px-8 py-3 transition-colors"
              >
                <FaWhatsapp className="inline-block mr-2" />
                WhatsApp
              </a>
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

