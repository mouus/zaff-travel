"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp, FaQuoteLeft, FaLeaf, FaAnchor, FaHeart, FaChevronRight, FaChevronLeft } from "react-icons/fa"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AboutPage() {
  // State for testimonial slider
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // State for timeline section
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)

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

  // Testimonials data
  const testimonials = [
    {
      quote:
        "Our experience with Cruise Republic was nothing short of magical. The team's knowledge of the Maldives and their passion for marine life made our diving adventure unforgettable.",
      author: "Sarah & Michael",
      location: "United Kingdom",

    },
    {
      quote:
        "As avid divers, we've explored many destinations, but Cruise Republic's expertise and personalized service in the Maldives was exceptional. We saw tiger sharks, manta rays, and so much more!",
      author: "David & Emma",
      location: "Australia",
    },
    {
      quote:
        "The crew's knowledge of local marine ecosystems and their commitment to sustainable tourism practices made our trip both educational and environmentally responsible.",
      author: "Thomas & Lisa",
      location: "Germany",
    },
  ]

  // Timeline data
  const timeline = [
    {
      year: "2011",
      title: "The Discovery",
      description:
        "Abdulla Zafar Ali had his first scuba diving experience in Fuvahmulah, discovering the island's potential as a diving destination despite having no dive centers at the time.",
      image: "/insta1.jpg",
    },
    {
      year: "2015",
      title: "Tiger Shark Revelation",
      description:
        "Zafar made the groundbreaking discovery of tiger sharks near Fuvahmulah's harbor, beginning the island's transformation into a world-class diving destination.",
      image: "/img2.jpg",
    },
    {
      year: "2018",
      title: "Cruise Republic Founded",
      description:
        "With a vision to share the wonders of the Maldives' southern atolls, Cruise Republic was established to provide authentic and sustainable marine adventures.",
      image: "/img-2.JPG",
    },
    {
      year: "2020",
      title: "Expanding Horizons",
      description:
        "Despite global challenges, Cruise Republic expanded its offerings to include specialized expeditions to Huvadhoo and Addu atolls, showcasing the diverse marine ecosystems of the southern Maldives.",
      image: "/img1.jpg",
    },
    {
      year: "Present",
      title: "Leading the Way",
      description:
        "Today, Cruise Republic stands as a premier provider of diving and cruising experiences in the Maldives, committed to conservation and creating unforgettable adventures.",
      image: "/lead.JPG",
    },
  ]

  // Core values data
  const values = [
    {
      icon: <FaAnchor size={24} />,
      title: "Expertise",
      description:
        "Our team brings decades of combined experience in diving, hospitality, and marine conservation to ensure safe and enriching experiences.",
    },
    {
      icon: <FaLeaf size={24} />,
      title: "Sustainability",
      description:
        "We are committed to preserving the natural beauty of the Maldives through responsible tourism practices and conservation efforts.",
    },
    {
      icon: <FaHeart size={24} />,
      title: "Passion",
      description:
        "Our love for the ocean drives everything we do, from curating exceptional diving experiences to sharing our knowledge of marine ecosystems.",
    },
  ]

  return (
    <div className="bg-white text-black">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-black">
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <div className="max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">About Cruise Republic</h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              With over 20 years of expertise in the Maldives liveaboard industry, we combine passion for the ocean with
              world-class diving and hospitality to create unforgettable marine adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Our Story Section */}
        <section className="py-20 px-6 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    Founded on the belief that the ocean is a gateway to unparalleled adventures, Cruise Republic is
                    dedicated to offering immersive experiences in the Maldives.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our journey began with a passion for diving and a deep connection to the pristine waters of the
                    Maldives. What started as a personal quest to explore the hidden gems of the southern atolls has
                    evolved into a mission to share these extraordinary experiences with travelers from around the
                    world.
                  </p>
                  <p className="text-lg leading-relaxed">
                    From exploring vibrant coral reefs to thrilling tiger shark encounters, our story is built on a
                    commitment to excellence, authentic experiences, and sustainable tourism that preserves the natural
                    beauty of the Maldives for generations to come.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/logo.jpg"
                    alt="Our Story"
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

        {/* Timeline Section */}
        <section className="py-20 px-6 bg-black text-white reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/30 transform -translate-x-1/2"></div>

              {/* Timeline Content */}
              <div className="relative">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`mb-16 md:mb-0 transition-opacity duration-500 ${activeTimelineItem === index ? "opacity-100" : "opacity-0 absolute"
                      }`}
                    style={{ display: activeTimelineItem === index ? "block" : "none" }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className={`order-2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg?height=400&width=600"}
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-700 hover:scale-105"
                          />
                          <div className="absolute inset-0 border border-white pointer-events-none"></div>
                        </div>
                      </div>

                      <div className={`order-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                        <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 h-full">
                          <div className="inline-block bg-white text-black px-4 py-1 text-sm font-bold mb-4">
                            {item.year}
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline Navigation */}
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setActiveTimelineItem((prev) => (prev === 0 ? timeline.length - 1 : prev - 1))}
                  className="p-3 bg-white text-black hover:bg-gray-200 transition-colors mr-4"
                  aria-label="Previous timeline item"
                >
                  <FaChevronLeft />
                </button>

                <div className="flex items-center space-x-2">
                  {timeline.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTimelineItem(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${activeTimelineItem === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
                        }`}
                      aria-label={`Go to timeline item ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveTimelineItem((prev) => (prev === timeline.length - 1 ? 0 : prev + 1))}
                  className="p-3 bg-white text-black hover:bg-gray-200 transition-colors ml-4"
                  aria-label="Next timeline item"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 px-6 reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Vision & Mission</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7"></path>
                    </svg>
                  </span>
                  Our Vision
                </h3>
                <p className="text-lg leading-relaxed">
                  To redefine adventure tourism in the Indian Ocean by providing immersive, sustainable, and deeply
                  personal experiences that connect travelers to the ocean, land, and local culture.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  We envision a future where responsible tourism serves as a catalyst for marine conservation and
                  community development, creating a lasting positive impact on the Maldives' natural environment and
                  local communities.
                </p>
              </div>

              <div className="bg-black text-white p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </span>
                  Our Mission
                </h3>
                <p className="text-lg leading-relaxed">
                  We are dedicated to creating authentic and unforgettable experiences through exceptional service,
                  expert dive guidance, and a commitment to preserving the natural beauty of the Maldives.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Our mission is to showcase the extraordinary marine biodiversity of the southern Maldives while
                  promoting sustainable tourism practices that protect fragile ecosystems and support local communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 px-6 bg-gray-50 reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 border border-gray-200 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-black text-white reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Guests Say</h2>

            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${activeTestimonial === index ? "opacity-100" : "opacity-0 absolute"
                    }`}
                  style={{ display: activeTestimonial === index ? "block" : "none" }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                

                    <div className="md:w-2/3">
                      <FaQuoteLeft size={40} className="text-white/30 mb-6" />
                      <blockquote className="text-2xl italic mb-8">{testimonial.quote}</blockquote>
                      <div>
                        <p className="text-xl font-bold">{testimonial.author}</p>
                        <p className="text-gray-400">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Testimonial Navigation */}
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="p-3 bg-white text-black hover:bg-gray-200 transition-colors mr-4"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft />
                </button>

                <div className="flex items-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
                        }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="p-3 bg-white text-black hover:bg-gray-200 transition-colors ml-4"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 text-center reveal">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Maldives with Us?</h2>
            <p className="text-lg mb-8">
              Join us for an unforgettable adventure in the pristine waters of the Maldives. Whether you're an
              experienced diver or a first-time explorer, we have the perfect journey for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/our-cruise" className="bg-black text-white hover:bg-gray-800 px-8 py-3 transition-colors">
                Explore Our Cruises
              </Link>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@cruiserepublicmaldives.com&su=Interested%20in%20a%20cruise&body=Hello%20Team,"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-black border border-black hover:bg-black/5 px-8 py-3 transition-colors"
              >
                Contact Us
              </Link>
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

