"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaWhatsapp, FaShip, FaUtensils, FaSwimmer, FaCamera, FaChevronLeft, FaChevronRight, FaQuoteRight, FaAnchor, FaWater, FaUsers } from "react-icons/fa"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function CruisePage() {
  // State for vessel image slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef(null)
  
  // State for active feature
  const [activeFeature, setActiveFeature] = useState("accommodations")
  
  // State for active testimonial
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  // State for animation direction (for testimonials)
  const [direction, setDirection] = useState(0)
  
  // Vessel images
  const vesselImages = [
    {
      src: "/boat-top.jpg",
      alt: "Cruise Republic Vessel - Top View",
      caption: "Spacious Sundeck"
    },
    {
      src: "/cr.PNG",
      alt: "Cruise Republic Vessel - Side View",
      caption: "Elegant Design"
    },
    {
      src: "/cr_2.PNG",
      alt: "Cruise Republic Vessel - Front View",
      caption: "Sleek Navigation"
    },
    {
      src: "/cr_3.PNG",
      alt: "Cruise Republic Vessel - Rear View",
      caption: "Diving Platform"
    },
    {
      src: "/cr_4.PNG",
      alt: "Cruise Republic Vessel - Interior",
      caption: "Comfortable Interior"
    }
  ]
  
  // Features data
  const features = [
    {
      id: "accommodations",
      title: "Luxury Accommodations",
      icon: <FaShip />,
      description: "Our vessel features 5 comfortable cabins with bunk beds, designed to provide a cozy retreat after a day of adventure. Each cabin is equipped with storage space and essential amenities for a comfortable stay.",
      image: "/room.JPG",
      details: [
        "5 comfortable cabins with bunk beds",
        "Clean linens and towels provided daily",
        "Storage space for personal belongings",
        "Air conditioning in all cabins",
        "Reading lights and power outlets"
      ]
    },
    {
      id: "dining",
      title: "Gourmet Dining",
      icon: <FaUtensils />,
      description: "Enjoy delicious meals prepared by our skilled chef, featuring both international cuisine and local Maldivian specialties. Dine in our indoor dining area or under the stars on our deck for a truly memorable experience.",
      image: "/set.JPG",
      details: [
        "Three freshly prepared meals daily",
        "Local Maldivian and international cuisine",
        "Dietary restrictions accommodated",
        "Fresh seafood and tropical fruits",
        "Indoor and outdoor dining options"
      ]
    },
    {
      id: "activities",
      title: "Water Activities",
      icon: <FaSwimmer />,
      description: "Dive into crystal-clear waters for snorkeling and scuba diving adventures. Explore vibrant coral reefs, encounter marine life, and discover the underwater wonders of the Maldives with our experienced guides.",
      image: "/img-1.JPG",
      details: [
        "Guided scuba diving excursions",
        "Snorkeling at pristine reefs",
        "Equipment rental available",
        "Night diving opportunities",
        "Marine life identification sessions"
      ]
    },
    {
      id: "excursions",
      title: "Island Excursions",
      icon: <FaCamera />,
      description: "Visit pristine beaches, local islands, and hidden gems throughout the Maldives. Our excursions offer opportunities to experience authentic Maldivian culture and explore the natural beauty of this paradise.",
      image: "/coco2.JPG",
      details: [
        "Visits to uninhabited islands",
        "Local village cultural experiences",
        "Beach barbecues and picnics",
        "Sandbank visits at sunset",
        "Photography opportunities"
      ]
    }
  ]
  
  // Testimonials data
  const testimonials = [
    {
      quote: "An unforgettable journey through the Maldives. The crew was exceptional, the diving spots were incredible, and the entire experience exceeded our expectations.",
      author: "Sarah & Michael",
      location: "United Kingdom",
      image: "/testimonial-1.jpg"
    },
    {
      quote: "The perfect balance of adventure and relaxation. We saw tiger sharks, manta rays, and explored pristine islands. The food was amazing and the crew made us feel at home.",
      author: "David & Emma",
      location: "Australia",
      image: "/testimonial-2.jpg"
    },
    {
      quote: "Our third trip with Cruise Republic and it keeps getting better. The southern atolls offer incredible diving and the team's knowledge of the best spots is unmatched.",
      author: "Thomas & Lisa",
      location: "Germany",
      image: "/testimonial-3.jpg"
    }
  ]
  
  // Vessel specifications
  const specifications = [
    {
      icon: <FaShip />,
      title: "Vessel",
      details: "21.6m (74 feet) length, 6.61m width"
    },
    {
      icon: <FaUsers />,
      title: "Capacity",
      details: "10 passengers, 4 crew members"
    },
    {
      icon: <FaAnchor />,
      title: "Built",
      details: "2007, timber & fiberglass coating"
    },
    {
      icon: <FaWater />,
      title: "Cruising",
      details: "12 knots speed, diesel engine"
    }
  ]
  
  // Auto-play for vessel images
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % vesselImages.length)
      }, 5000)
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, vesselImages.length])
  
  // Handle manual navigation for vessel images
  const goToNextImage = () => {
    setIsAutoPlaying(false)
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % vesselImages.length)
  }
  
  const goToPrevImage = () => {
    setIsAutoPlaying(false)
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? vesselImages.length - 1 : prevIndex - 1))
  }
  
  // Handle testimonial navigation
  const nextTestimonial = () => {
    setDirection(1)
    setActiveTestimonial(prev => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setDirection(-1)
    setActiveTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }
  
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

  return (
    <div className="bg-white text-black">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src="/sunset.jpg" 
            alt="Cruise Republic in the Maldives" 
            layout="fill" 
            objectFit="cover" 
            priority
            className="brightness-[0.6]"
          />
        </div>
        <div className="relative h-full flex items-center z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl text-white font-bold mb-6 tracking-tight">
                Experience the <br />
                <span className="relative">
                  Maldives
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
                </span>
              </h1>
              <p className="text-xl text-white mb-10 max-w-2xl">
                Embark on a luxurious journey through the pristine waters of the Maldives aboard Cruise Republic, 
                where adventure and relaxation await in perfect harmony.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="bg-white text-black hover:bg-gray-100 px-8 py-3 transition-all duration-300 inline-block"
                >
                  Book Your Journey
                </Link>
                <Link
                  href="#explore"
                  className="bg-transparent text-white border border-white hover:bg-white/10 px-8 py-3 transition-all duration-300 inline-block"
                >
                  Explore Our Cruise
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce-slow"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="explore" className="py-24 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Discover Our Cruise Experience</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Cruise Republic offers an unparalleled journey through the southern atolls of the Maldives, combining 
                  luxury, adventure, and authentic experiences in one of the world's most beautiful destinations.
                </p>
                <p className="text-lg leading-relaxed">
                  Our vessel is designed to provide comfort while navigating the pristine waters of the Maldives, allowing 
                  you to explore remote dive sites, secluded islands, and vibrant marine ecosystems with ease and style.
                </p>
                <p className="text-lg leading-relaxed">
                  With a maximum capacity of 10 passengers and a crew of 4, we ensure personalized service and attention 
                  to detail throughout your journey, creating memories that will last a lifetime.
                </p>
              </div>
              
              {/* Vessel Specifications */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mr-4 flex-shrink-0">
                      {spec.icon}
                    </div>
                    <div>
                      <h3 className="font-bold">{spec.title}</h3>
                      <p className="text-gray-600">{spec.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src="/boat.JPG" 
                  alt="Cruise Republic Vessel" 
                  layout="fill" 
                  objectFit="cover" 
                  className="transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 border border-black pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vessel Showcase Section */}
      <section className="py-24 px-6 bg-black text-white reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Explore Our Vessel</h2>
          
          <div className="relative">
            {/* Main Image */}
            <div className="aspect-[16/9] relative overflow-hidden">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={vesselImages[currentImageIndex].src || "/placeholder.svg"}
                    alt={vesselImages[currentImageIndex].alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 border border-white pointer-events-none"></div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xl font-medium">{vesselImages[currentImageIndex].caption}</p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
              aria-label="Previous image"
            >
              <FaChevronLeft size={20} />
            </button>
            
            <button
              onClick={goToNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
              aria-label="Next image"
            >
              <FaChevronRight size={20} />
            </button>
            
            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {vesselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentImageIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentImageIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Cruise Features</h2>
          
          {/* Feature Tabs */}
          <div className="flex flex-wrap justify-center mb-16">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`px-6 py-3 text-lg font-medium mx-2 mb-2 transition-colors ${
                  activeFeature === feature.id
                    ? "bg-black text-white"
                    : "bg-transparent text-black border border-black hover:bg-black/5"
                }`}
              >
                <span className="flex items-center">
                  <span className="mr-2">{feature.icon}</span>
                  {feature.title}
                </span>
              </button>
            ))}
          </div>
          
          {/* Feature Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mr-4">
                      {features.find(f => f.id === activeFeature)?.icon}
                    </span>
                    {features.find(f => f.id === activeFeature)?.title}
                  </h3>
                  <p className="text-lg leading-relaxed mb-8">
                    {features.find(f => f.id === activeFeature)?.description}
                  </p>
                  
                  <div className="bg-gray-50 p-6 border border-gray-200">
                    <h4 className="font-bold mb-4">Highlights:</h4>
                    <ul className="space-y-2">
                      {features.find(f => f.id === activeFeature)?.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-black mr-2 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[4/3] relative overflow-hidden"
                >
                  <Image
                    src={features.find(f => f.id === activeFeature)?.image || "/placeholder.svg"}
                    alt={features.find(f => f.id === activeFeature)?.title || "Feature"}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-black pointer-events-none"></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-black text-white reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Cruise Gallery</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/women.JPG", alt: "Guests enjoying the cruise", caption: "Happy Guests" },
              { src: "/people.jpg", alt: "Cruise guests", caption: "Memorable Moments" },
              { src: "/coco2.JPG", alt: "Tropical destination", caption: "Island Paradise" },
              { src: "/img-4.JPG", alt: "Ocean view", caption: "Crystal Waters" },
              { src: "/people-5.jpg", alt: "Cruise activities", caption: "Adventure Time" },
              { src: "/img-6.JPG", alt: "Maldives scenery", caption: "Breathtaking Views" },
            ].map((img, index) => (
              <div key={index} className="group cursor-pointer relative overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
                  <div className="absolute inset-0 border border-white pointer-events-none"></div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transform translate-y-0 group-hover:translate-y-full transition-transform duration-300">
                    <p className="text-lg font-medium">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              href="https://www.instagram.com/cruiserepublicmv/"
              className="inline-block bg-white text-black px-8 py-3 hover:bg-gray-200 transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Guest Experiences</h2>
          
          <div className="relative">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeTestimonial}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 p-10 border border-gray-200"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto">
                        <Image
                          src={testimonials[activeTestimonial].image || "/placeholder.svg?height=160&width=160"}
                          alt={testimonials[activeTestimonial].author}
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 border border-black pointer-events-none rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 text-center md:text-left">
                      <FaQuoteRight className="text-gray-300 text-4xl mb-4 mx-auto md:mx-0" />
                      <p className="text-xl italic mb-6">
                        "{testimonials[activeTestimonial].quote}"
                      </p>
                      <div>
                        <p className="font-bold text-lg">{testimonials[activeTestimonial].author}</p>
                        <p className="text-gray-600">{testimonials[activeTestimonial].location}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeTestimonial ? 1 : -1)
                      setActiveTestimonial(index)
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeTestimonial === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-24 px-6 bg-black text-white text-center reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Embark on Your Maldives Adventure?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Book your dream cruise now and experience the luxury and adventure that awaits you in the stunning waters of
            the Maldives. Limited spots available for upcoming journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/book"
              className="bg-white text-black hover:bg-gray-200 px-10 py-4 transition-all duration-300 text-lg"
            >
              Book Your Journey
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white border border-white hover:bg-white/10 px-10 py-4 transition-all duration-300 text-lg"
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

      <Footer />

      {/* Global styles for animations */}
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
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  )
}
