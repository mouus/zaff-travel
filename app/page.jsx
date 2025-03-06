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
  FaChevronRight
} from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Home() {
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
    'set.JPG'
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
    const minScale = 0.3;  // Minimum scale factor when far from the viewport center
    const maxScale = 1.5;  // Maximum scale factor when fully centered
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

        {/* Ocean Exploration Section with Southern Image */}
        <section
          className="relative bg-gray-100 py-12"
          style={{ backgroundImage: 'url(/island-map.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <h2 className="text-3xl text-white text-center font-bold mb-8">Explore the Ocean</h2>
          <div
            id="southernImage"
            className="absolute top-50 right-40 transition-transform duration-200 ease-out"
            style={{
              transform: `scale(${southernTransform.scale})`
            }}
          >
            <Image
              src="/southern.png"
              alt="People diving"
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="py-12">
            <div className="max-w-4xl mx-auto">
              <div className="h-72"></div>
            </div>
          </div>
        </section>

        {/* Journey with Us Carousel – Gray background, responsive */}
        <section className="bg-gray-200 py-12 w-full">
          <h2 className="text-3xl font-bold text-center mb-8">Journey with Us</h2>
          <div ref={journeyContainerRef} className="relative mx-auto w-full max-w-[1000px] px-4">
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentJourneyPage * containerWidth}px)` }}
              >
                {journeyPages.map((page, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0 flex justify-center gap-4">
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
            {/* Journey Carousel Arrow Buttons (inside container) */}
            <button
              onClick={prevJourneySlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-300 z-10"
              aria-label="Previous Journey Slide"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextJourneySlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-300 z-10"
              aria-label="Next Journey Slide"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </section>

        {/* Vessel Specifications Slider – Full Width */}
        <section className="bg-gray-50 py-12 w-full">
          <div className="relative overflow-hidden w-full">
            <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
              <FaShip className="mr-2 text-blue-800" /> <span className='text-black'>Vessel Specifications</span>
            </h2>
            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-6">
                    <h3 className="text-2xl pl-10 font-semibold mb-4 flex items-center">
                      {slide.icon}
                      {slide.title}
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
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
              aria-label="Next Slide"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </section>
      </main>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9607795512"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        style={{ zIndex: 1000 }}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Footer */}
      <Footer />
    </div>
  );
}
