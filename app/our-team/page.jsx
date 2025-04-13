"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp, FaQuoteLeft, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function TeamPage() {
  // State for active expertise tab
  const [activeExpertise, setActiveExpertise] = useState("diving")

  // State for team member modal
  const [selectedMember, setSelectedMember] = useState(null)

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

  // Expertise content
  const expertise = {
    diving: {
      title: "Scuba Diving & Shark Expeditions",
      description:
        "Our team of highly trained dive professionals offers world-class diving experiences in the southern atolls of the Maldives. We specialize in tiger shark encounters in Fuvahmulah, manta ray expeditions in Huvadhoo, and wreck diving in Addu Atoll.",
      image: "/img2.jpg",
      stats: [
        { value: "1000+", label: "Dives Conducted" },
        { value: "25+", label: "Years Experience" },
        { value: "100%", label: "Safety Record" },
      ],
    },
    charters: {
      title: "Island-Hopping & Private Charters",
      description:
        "Our experienced crew navigates the stunning waters of the Maldives, taking you to pristine sandbanks, remote islands, and vibrant snorkeling sites. We customize each journey to create the perfect balance of adventure and relaxation.",
      image: "/boat-people.jpg",
      stats: [
        { value: "50+", label: "Islands Explored" },
        { value: "200+", label: "Private Charters" },
        { value: "5★", label: "Customer Rating" },
      ],
    },
    cruises: {
      title: "Sunset Cruises & Exclusive Experiences",
      description:
        "Our hospitality team ensures a relaxing, enjoyable experience with cocktails, music, and breathtaking ocean views. From romantic sunset cruises to private beach dinners, we create unforgettable moments in paradise.",
      image: "/boat-sunset.jpg",
      stats: [
        { value: "365", label: "Days of Sunshine" },
        { value: "∞", label: "Perfect Sunsets" },
        { value: "100%", label: "Memorable Moments" },
      ],
    },
  }

  // Leadership team data
  const leadershipTeam = [
    {
      id: "zafar",
      name: "Abdulla Zafar Ali",
      role: "Founder & COO",
      title: "Pioneer of Tiger Shark Diving in Fuvahmulah",
      image: "/founder-1.jpg",
      shortBio:
        "PADI-certified scuba instructor with 25+ years in tourism who discovered Fuvahmulah's tiger sharks, transforming it into a world-class diving destination.",
      fullBio: [
        "Abdulla Zafar Ali is a PADI-certified scuba instructor, surfer, and hospitality professional with over 25 years of experience in the tourism industry. Since 1999, he has worked in various roles—from receptionist to butler—before fully dedicating himself to scuba diving.",
        "In 2011, Zafar had his first scuba diving experience in Fuvahmulah, a time when the island had no dive centers or schools and very limited scuba equipment. His passion for diving and vision for the island's tourism led him to make a groundbreaking discovery: tiger sharks near the harbor.",
        "This discovery transformed Fuvahmulah into the world's No. 1 tiger shark diving destination. Since 2015, Zafar has promoted Fuvahmulah internationally, establishing it as a premier destination.",
        "As the Founder & COO of Cruise Republic, he continues to expand ocean tourism in Fuvahmulah while remaining committed to protecting the natural ecosystem.",
      ],
      quote:
        "The ocean has always been my greatest teacher. Through Cruise Republic, I hope to share its wonders while ensuring its preservation for generations to come.",
    },
    {
      id: "ahmed",
      name: "Ahmed Ali",
      role: "Chief Executive Officer",
      title: "Hospitality Expert & Tourism Pioneer",
      image: "/founder-2.PNG",
      shortBio:
        "A seasoned hospitality professional with 20 years of experience in luxury resorts, dedicated to authentic Maldivian tourism experiences.",
      fullBio: [
        "A seasoned hospitality professional with 20 years of experience, Ahmed Ali has worked his way up from receptionist to front office manager and airport manager at various five-star resorts.",
        "A pioneer in promoting Fuvahmulah tourism, he is known for his dedication, authenticity, and welcoming personality.",
        "As CEO of Cruise Republic, Ahmed brings his extensive knowledge of luxury hospitality to ensure every guest receives exceptional service and authentic Maldivian experiences.",
      ],
      quote:
        "True luxury isn't just about amenities—it's about creating authentic connections and unforgettable moments in one of the world's most beautiful destinations.",
    },
  ]

  // Crew members data
  const crewMembers = [
    {
      id: "nishan",
      name: "Nishan",
      role: "Captain",
      image: "/team-4.jpg",
      bio: "A highly skilled boat captain with nearly 11 years of experience, Nishan's deep knowledge of Maldivian waters ensures smooth and safe journeys for all our guests. As a certified rescue diver, he adds an extra layer of safety and expertise to every adventure.",
      expertise: "Navigation, Weather Patterns, Emergency Response",
    },
    {
      id: "alzum",
      name: "Alzum",
      role: "Assistant Captain",
      image: "/team-5.jpg",
      bio: "A former Maldivian Defense Force marine, Alzum is a highly trained emergency first responder and rescue expert. With years of experience in hospitality, he ensures the safety and comfort of all our guests while delivering top-tier service.",
      expertise: "Emergency Response, Guest Relations, Safety Protocols",
    },
    {
      id: "rafhan",
      name: "Rafhan",
      role: "Crew Member",
      image: "/team-2.jpg",
      bio: "An experienced food and beverage professional with a background in five-star resorts, Rafhan brings refined hospitality skills to our team. His attention to detail and guest-focused service ensure a premium onboard experience.",
      expertise: "Food & Beverage, Guest Service, Hospitality",
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Meet Our Team</h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Passionate ocean enthusiasts, experienced divers, and hospitality professionals dedicated to creating
              unforgettable Maldivian adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Introduction */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">The Heart of Cruise Republic</h2>
            <p className="text-lg leading-relaxed mb-8">
              At Cruise Republic Maldives, our team is made up of passionate ocean enthusiasts, experienced divers, and
              hospitality professionals dedicated to delivering unforgettable marine adventures. With years of expertise
              in scuba diving, island hopping, and private boat excursions, we ensure that every journey is safe,
              exciting, and tailored to your needs.
            </p>
            <div className="border-t border-gray-200 w-24 mx-auto pt-8">
              <FaQuoteLeft size={24} className="mx-auto text-gray-400" />
            </div>
            <blockquote className="text-xl italic mt-6">
              "The ocean stirs the heart, inspires the imagination and brings eternal joy to the soul."
              <footer className="text-base font-normal mt-2 text-gray-600">— Robert Wyland</footer>
            </blockquote>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-20 px-6 bg-black text-white reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Expertise</h2>

            {/* Expertise Tabs */}
            <div className="flex flex-wrap justify-center mb-12">
              {Object.entries(expertise).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveExpertise(key)}
                  className={`px-6 py-3 text-lg font-medium mx-2 mb-2 transition-colors ${activeExpertise === key
                      ? "bg-white text-black"
                      : "bg-transparent text-white border border-white hover:bg-white/10"
                    }`}
                >
                  {value.title}
                </button>
              ))}
            </div>

            {/* Expertise Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-6">{expertise[activeExpertise].title}</h3>
                <p className="text-lg leading-relaxed mb-8">{expertise[activeExpertise].description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {expertise[activeExpertise].stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 border border-white/20">
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={expertise[activeExpertise].image || "/placeholder.svg?height=400&width=600"}
                    alt={expertise[activeExpertise].title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-white pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-6 reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Leadership Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {leadershipTeam.map((leader) => (
                <div key={leader.id} className="group cursor-pointer" onClick={() => setSelectedMember(leader)}>
                  <div className="bg-white border border-black p-8 h-full transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="flex flex-col h-full">
                      <div className="relative w-full aspect-square mb-6 overflow-hidden">
                        <Image
                          src={leader.image || "/placeholder.svg?height=300&width=300"}
                          alt={leader.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 border border-black pointer-events-none"></div>
                      </div>

                      <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                      <p className="text-lg font-medium text-gray-700 mb-4">{leader.role}</p>
                      <p className="text-sm font-medium text-gray-500 mb-4">{leader.title}</p>

                      <p className="text-base mb-6 flex-grow">{leader.shortBio}</p>

                      <div className="mt-auto">
                        <button className="text-black border-b border-black hover:text-gray-700 transition-colors">
                          Read Full Bio
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Crew Members */}
        <section className="py-20 px-6 bg-gray-50 reveal">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Our Crew</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {crewMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white border border-gray-200 p-6 cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6">
                      <Image
                        src={member.image || "/placeholder.svg?height=128&width=128"}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 hover:scale-110"
                      />
                    </div>

                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-600 mb-4">{member.role}</p>

                    <p className="text-sm line-clamp-3 mb-4">{member.bio}</p>

                    <button className="text-black border-b border-black text-sm hover:text-gray-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values & Commitment */}
        <section className="py-20 px-6 bg-black text-white text-center reveal">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Commitment</h2>
            <p className="text-lg leading-relaxed mb-12">
              Every member of the Cruise Republic team is committed to safety, sustainability, and providing authentic
              Maldivian experiences. Whether you're here for an exhilarating dive or a peaceful sunset cruise, we're
              here to make your journey unforgettable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Safety First</h3>
                <p>
                  Our team undergoes rigorous training in emergency response, first aid, and water rescue to ensure your
                  safety at all times.
                </p>
              </div>

              <div className="p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                <p>
                  We are committed to ocean conservation, minimizing our environmental impact, and promoting responsible
                  tourism practices.
                </p>
              </div>

              <div className="p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Authentic Experiences</h3>
                <p>
                  Our local expertise allows us to share the true beauty and culture of the Maldives beyond the typical
                  tourist experience.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@cruiserepublicmaldives.com&su=Interested%20in%20a%20cruise&body=Hello%20Team,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-8 py-3 hover:bg-gray-200 transition-colors"
              >
                Connect With Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-black hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={selectedMember.image || "/placeholder.svg?height=300&width=300"}
                    alt={selectedMember.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 border border-black pointer-events-none"></div>
                </div>

                {selectedMember.quote && (
                  <div className="mt-6 p-4 bg-gray-50 border-l-4 border-black">
                    <p className="italic text-sm">{selectedMember.quote}</p>
                  </div>
                )}

                {/* Social Links - These would be real in a production environment */}
                <div className="mt-6 flex justify-center space-x-4">
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>

              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-1">{selectedMember.name}</h3>
                <p className="text-lg font-medium text-gray-700 mb-2">{selectedMember.role}</p>
                {selectedMember.title && (
                  <p className="text-sm font-medium text-gray-500 mb-6">{selectedMember.title}</p>
                )}

                {selectedMember.fullBio ? (
                  <div className="space-y-4">
                    {selectedMember.fullBio.map((paragraph, index) => (
                      <p key={index} className="text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-base">{selectedMember.bio}</p>
                )}

                {selectedMember.expertise && (
                  <div className="mt-6">
                    <h4 className="text-lg font-bold mb-2">Areas of Expertise</h4>
                    <p>{selectedMember.expertise}</p>
                  </div>
                )}
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

