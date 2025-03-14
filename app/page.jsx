'use client';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaShip,
  FaBed,
  FaTheaterMasks,
  FaChevronLeft,
  FaChevronRight,
  FaTint,
} from 'react-icons/fa';
import { GiJourney } from 'react-icons/gi';
import { TbScubaDiving } from 'react-icons/tb';
import { GiDiving } from 'react-icons/gi';
import { useState, useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Home() {
  // State for mobile menu toggle.
  const [menuOpen, setMenuOpen] = useState(false);
  // State for dynamic scroll transform on the southern image.
  const [southernTransform, setSouthernTransform] = useState({ scale: 1, deltaX: 0, deltaY: 0 });
  // State for Vessel Specifications slider.
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images array for the Journey with Us carousel.
  const journeyImages = [
    'boat.JPG',
    'room.JPG',
    'coco2.JPG',
    'coco.jpg',
    'women.JPG',
    'set.JPG',
    'img-1.JPG',
    'img-2.JPG',
    'img-3.JPG',
    'img-4.JPG',
    'img-5.JPG',
    'img-6.JPG',
    'img-7.JPG',
    'img-8.JPG',
    'img-9.JPG',
    'img-10.JPG',
    'img-11.JPG',
    'img-12.JPG',
    'img-13.JPG',
  ];

  // Responsive images per page.
  const [imagesPerPage, setImagesPerPage] = useState(5);
  useEffect(() => {
    const updateImagesPerPage = () => {
      if (window.innerWidth < 768) {
        setImagesPerPage(2);
      } else {
        setImagesPerPage(5);
      }
    };
    updateImagesPerPage();
    window.addEventListener('resize', updateImagesPerPage);
    return () => window.removeEventListener('resize', updateImagesPerPage);
  }, []);

  // Determine if the device is mobile (phones).
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper function: Group journeyImages into pages.
  const getJourneyPages = () => {
    let pages = [];
    for (let i = 0; i < journeyImages.length; i += imagesPerPage) {
      let page = journeyImages.slice(i, i + imagesPerPage);
      // If last page is incomplete, fill with images from the start.
      if (page.length < imagesPerPage) {
        page = page.concat(journeyImages.slice(0, imagesPerPage - page.length));
      }
      pages.push(page);
    }
    return pages;
  };
  const journeyPages = getJourneyPages();
  const totalPages = journeyPages.length;
  const [currentJourneyPage, setCurrentJourneyPage] = useState(0);

  // Use a ref to measure the container width.
  const journeyContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    const updateWidth = () => {
      if (journeyContainerRef.current) {
        setContainerWidth(journeyContainerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Scroll listener for the "southern" image.
  useEffect(() => {
    const minScale = 0.3; // Minimum scale factor when far from the viewport center
    const maxScale = 1.5; // Maximum scale factor when fully centered
    const handleScroll = () => {
      // On phones, disable dynamic resizing.
      if (window.innerWidth < 768) {
        setSouthernTransform({ scale: 1, deltaX: 0, deltaY: 0 });
        return;
      }
      const imgElem = document.getElementById('southernImage');
      if (imgElem) {
        const rect = imgElem.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        // Calculate progress based on how close the center of the image is to the viewport center.
        const imageCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(viewportHeight / 2 - imageCenterY);
        const progress = Math.max(0, 1 - distance / (viewportHeight / 2));
        const newScale = minScale + (maxScale - minScale) * progress;
        // Remove translation; only scaling is applied.
        setSouthernTransform({ scale: newScale, deltaX: 0, deltaY: 0 });
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal functionality for sections and pop-ups.
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    reveals.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  // Vessel Specifications slider slides.
  const slides = [
    {
      title: 'General Information',
      icon: <FaShip className="mr-2 text-blue-800" />,
      content: (
        <ul className="list-disc pl-5 text-black space-y-1">
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
      )
    },
    {
      title: 'Accommodation & Public Areas',
      icon: <FaBed className="mr-2 text-blue-800" />,
      content: (
        <>
          <ul className="list-disc text-black pl-5 space-y-1">
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
              <ul className="list-disc text-black pl-5">
                <li>Snorkeling Gear</li>
                <li>Scuba Diving Equipment</li>
                <li>Dinghy with Outboard Engine (Mercury)</li>
              </ul>
            </li>
          </ul>
        </>
      )
    },
    {
      title: 'Leisure & Entertainment',
      icon: <FaTheaterMasks className="mr-2 text-blue-800" />,
      content: (
        <ul className="list-disc text-black pl-5 space-y-1">
          <li>Snorkeling</li>
          <li>Scuba Diving</li>
          <li>Wavesurfing (on request)</li>
          <li>BBQ on Desert Island</li>
          <li>Island Hopping</li>
          <li>Yoga</li>
          <li>Cultural Shows (on request)</li>
        </ul>
      )
    },
    {
      title: 'Electricity & Water',
      icon: null,
      content: (
        <ul className="list-disc text-black pl-5 space-y-1">
          <li>2 x 40 KW Cummins Generator Soundproof</li>
          <li>Power: AC 220V</li>
          <li>Water: Desalination System</li>
        </ul>
      )
    },
    {
      title: 'Navigation & Communication',
      icon: null,
      content: (
        <ul className="list-disc text-black pl-5 space-y-1">
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
      )
    },
    {
      title: 'Emergency Equipment',
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
      )
    },
    {
      title: 'Crew',
      icon: null,
      content: (
        <ul className="list-disc pl-5">
          <li>Total Crew: 4 (Including Captain &amp; Chef)</li>
        </ul>
      )
    }
  ];

  // Navigation functions for Vessel Specifications slider.
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Navigation functions for the Journey carousel.
  const nextJourneySlide = () => {
    setCurrentJourneyPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  const prevJourneySlide = () => {
    setCurrentJourneyPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: 'url(/boat-top.jpg)' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
              Discover Paradise in the Maldives
            </h1>
            <p className="text-lg sm:text-xl mb-6 drop-shadow-md">
              Explore the deep south of the Maldives on an elegant cruise
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dive-itineraries"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded transition"
              >
                Learn More
              </Link>
              <Link
                href="/book"
                className="bg-white text-blue-950 hover:bg-gray-200 px-6 py-3 rounded transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>

        {/* Ocean Exploration Section */}
        <section className="reveal py-12 transition-all duration-1000 bg-gray-100 md:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-black md:text-white">
              Explore the Ocean
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="flex justify-center">
                <Image
                  src="/island.JPG"
                  alt="Island Map"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/southern.png"
                  alt="People diving"
                  // Use the isMobile state to set a different width value on mobile devices.
                  width={isMobile ? 400 : 315}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Journey with Us Carousel */}
        <section className="reveal bg-gray-200 py-12 w-full transition-all duration-1000">
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            <span className="flex justify-center">
              <GiJourney className="mr-2 text-blue-800" />
              Journey With Us
            </span>
          </h2>
          <div ref={journeyContainerRef} className="relative mx-auto w-full max-w-[1000px] px-4">
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentJourneyPage * containerWidth}px)` }}
              >
                {journeyPages.map((page, pageIndex) => (
                  <div
                    key={pageIndex}
                    className="w-full flex-shrink-0 flex justify-center gap-4 px-4"
                  >
                    {page.map((img, index) => (
                      <div key={index} className="w-[200px] h-[200px] relative">
                        <Image
                          src={`/${img}`}
                          alt={`Journey image ${index}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md shadow-md"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* Journey Carousel Arrow Buttons */}
            <button
              onClick={prevJourneySlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-300 z-10"
              aria-label="Previous Journey Slide"
            >
              <FaChevronLeft className="text-black" size={20} />
            </button>
            <button
              onClick={nextJourneySlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-300 z-10"
              aria-label="Next Journey Slide"
            >
              <FaChevronRight className="text-black" size={20} />
            </button>
          </div>
        </section>


        <section className="bg-white py-5">
          <h2 className="text-center font-semibold text-2xl mb-2 text-black">
            Cruise Republic Boat Plan Inside
          </h2>
          <div className="flex justify-center py-2">
            <Image
              src="/boat-map.jpg"
              alt="Journey image"
              width={400}
              height={400}
              className="rounded-lg px-2 py-1 shadow-lg shadow-black/20 object-cover"
            />
          </div>
        </section>

        {/* Vessel Specifications Slider */}
        <section className="reveal bg-gray-50 py-12 w-full transition-all duration-1000">
          <div className="relative overflow-hidden w-full">
            <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
              <FaShip className="mr-2 text-blue-800" />
              <span className="text-black">Vessel Specifications</span>
            </h2>
            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6">
                    <h3 className="text-2xl pl-10 font-semibold mb-4 flex items-center">
                      <span className="text-black">{slide.icon}</span>
                      <span className="text-black">{slide.title}</span>
                    </h3>
                    <div className="text-left pl-10 text-black">{slide.content}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Vessel Specifications Arrow Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
              aria-label="Previous Slide"
            >
              <FaChevronLeft className="text-black" size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
              aria-label="Next Slide"
            >
              <FaChevronRight className="text-black" size={20} />
            </button>
          </div>
        </section>

        {/* Dive Charter Booking Section */}
        <section className="reveal bg-white py-12 transition-all duration-1000">
          <div className="max-w-4xl mx-auto px-4">
            {/* Heading */}
            <div className="pop-up reveal" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-center mb-8">
                <TbScubaDiving className="inline-block text-blue-800 mr-2" size={24} />
                <span className="text-black">
                  5-Day Private Dive Charter - Deep South Maldives{' '}
                </span>
              </h2>
            </div>
            {/* Duration & Price */}
            <div className="pop-up reveal" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
                <div className="mb-6">
                  <p className="text-xl font-semibold text-black">Duration: 5 Days, 4 Nights</p>
                  <p className="text-xl font-semibold text-black">
                    Price: $10,000 (Private Boat Charter)
                  </p>
                </div>
              </div>
            </div>
            {/* Inclusions & Additional Costs */}
            <div className="pop-up reveal" style={{ animationDelay: '0.6s' }}>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-black">Inclusions:</h3>
                <ul className="list-disc pl-5 text-black">
                  <li>Full board accommodation (meals included)</li>
                  <li>2 dives per day</li>
                  <li>Private dive boat &amp; crew</li>
                  <li>Dive guides &amp; tanks</li>
                  <li>Soft drinks &amp; snacks</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-black">
                  Additional Costs:
                </h3>
                <ul className="list-disc pl-5 text-black">
                  <li>Equipment rental: $10 per day per diver</li>
                  <li>50% deposit required for booking confirmation</li>
                </ul>
              </div>
            </div>
            {/* Itinerary */}
            <div className="pop-up reveal" style={{ animationDelay: '0.8s' }}>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-black">
                    Day 1 – Arrival &amp; Addu Atoll Diving
                  </h4>
                  <ul className="list-disc pl-5 text-black">
                    <li>Arrival at Gan International Airport</li>
                    <li>Check-in &amp; briefing onboard the private charter</li>
                    <li>Dive 1: Maakandu Manta Point – Manta cleaning station</li>
                    <li>Lunch onboard</li>
                    <li>
                      Dive 2: Addu Atoll Reef – Reef sharks, eagle rays, and schools of fish
                    </li>
                    <li>Dinner &amp; overnight stay near Addu Atoll</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black">
                    Day 2 – Addu to Huvadhoo Atoll (6 Dives)
                  </h4>
                  <ul className="list-disc pl-5 text-black">
                    <li>Early morning departure from Addu to Huvadhoo Atoll</li>
                    <li>
                      Dive 3: Foammulah Kandu – Tiger sharks, thresher sharks, and oceanic mantas
                    </li>
                    <li>Breakfast onboard</li>
                    <li> Dive 4: Tiger Zoo – Guaranteed tiger shark encounters</li>
                    <li>Lunch onboard during the journey</li>
                    <li> Dive 5: Gemanafushi Kandu – Hammerheads and Reef Sharks</li>
                    <li>
                      Dive 6: Villingili Kandu – Grey reef sharks, eagle rays, and large fish schools
                    </li>
                    <li>Dinner &amp; overnight stay near Huvadhoo Atoll</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black">
                    Day 3 – Huvadhoo Atoll (2 Dives)
                  </h4>
                  <ul className="list-disc pl-5 text-black">
                    <li>
                      Dive 7: Mareha Kandu – Over 100 grey reef sharks, schooling barracuda
                    </li>
                    <li>Breakfast onboard</li>
                    <li>
                      Dive 8: Nilandhoo Kandu – Silvertip sharks, tunas, and sailfish
                    </li>
                    <li>Lunch &amp; Relaxation</li>
                    <li>Island visit &amp; beach BBQ dinner</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black">
                    Day 4 – Huvadhoo Atoll (2 Dives)
                  </h4>
                  <ul className="list-disc pl-5 text-black">
                    <li> Dive 9: Kooddoo Kandu – Spinner sharks &amp; reef fish</li>
                    <li>Breakfast onboard</li>
                    <li>
                      Dive 10: Boodu Whale Shark Point – Night dive with whale sharks
                    </li>
                    <li>Dinner &amp; overnight stay in Huvadhoo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black">
                    Day 5 – Departure from Huvadhoo
                  </h4>
                  <ul className="list-disc pl-5 text-black">
                    <li>Breakfast onboard</li>
                    <li>Relax &amp; check-out</li>
                    <li>Transfer to the airport for departure</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Book Now Button */}
            <div className="pop-up reveal" style={{ animationDelay: '1.2s' }}>
              <div className="text-center mt-8">
                <Link
                  href="/book"
                  className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9607780739"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        style={{ zIndex: 1000 }}
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Footer */}
      <Footer />

      {/* Global styles for reveal/pop-up animations */}
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(8px);
          transition: all 1s ease;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        .pop-up {
          opacity: 0;
          transform: translateY(50px);
        }
        .pop-up.active {
          animation: popUp 1.2s forwards;
        }
      `}</style>
    </div>
  );
}
