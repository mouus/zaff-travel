'use client';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import Footer from '@/components/Footer';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  // Dummy images array – replace these with your actual image URLs
  const dummyImages = [
    'people-1.jpg',
    'people-2.jpg',
    'people-3.jpg',
    'people-4.jpg'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Intersection Observer for text and image animations
  useEffect(() => {
    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTextVisible(true);
            textObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageVisible(true);
            imageObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef.current) textObserver.observe(textRef.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);

    return () => {
      if (textRef.current) textObserver.unobserve(textRef.current);
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
    };
  }, []);

  // Change the image every 5 seconds (5000ms) for testing – adjust as needed.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % dummyImages.length);
    }, 5000); // Change this value to 60000 for 1 minute if desired.
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="bg-white text-black shadow-lg sticky top-0 z-50">
        <nav className="relative py-5 px-6 max-w-7xl mx-auto bg-white">
          {/* Nav links and buttons */}
          <div className="flex justify-between items-center">
            <div className="hidden md:block">
              <Link
                href="/book"
                className="bg-black text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-800 transition"
              >
                Book Now
              </Link>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
                ☰
              </button>
            </div>
            <div className="hidden md:flex gap-6">
              <Link href="/dive-itineraries" className="hover:underline transition text-xs">
                 Dive Itineraries
              </Link>
              <Link href="/our-cruise" className="hover:underline transition text-xs">
                 Our Cruise
              </Link>
              <Link href="/about-us" className="hover:underline transition text-xs">
                About Us
              </Link>
            </div>
          </div>

          {/* Absolutely positioned logo */}
          <div className="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/">
              <img
                src="logo.jpg"
                alt="Cruise Republic"
                className="w-20 h-20 rounded-full"
              />
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900 text-white flex flex-col gap-4 p-4">
            <Link href="/dive-itineraries" className="hover:underline transition text-lg">
              Dive Itineraries
            </Link>
            <Link href="/our-cruise" className="hover:underline transition text-lg">
                Our Cruise
              </Link>
            <Link href="/about-us" className="hover:underline transition text-lg">
              About Us
            </Link>
            <Link
              href="/book"
              className="bg-white text-blue-950 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              Book Now
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-screen flex items-center justify-center text-white relative"
          style={{ backgroundImage: 'url(boat-top.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="text-center relative z-10 px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Discover Paradise in the Maldives
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              Explore the deep south of the Maldives on an elegant cruise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dive-itineraries"
                className="bg-blue-800 hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded"
              >
                Learn More
              </Link>
              <Link
                href="/book"
                className="bg-white text-blue-950 font-semibold py-3 px-6 rounded hover:bg-gray-200"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
            {/* Text Half (Left Side) */}
            <div ref={textRef} className="md:w-1/2 flex items-center">
              <div
                className={`p-8 transition-opacity duration-1000 ${
                  textVisible ? 'opacity-100 animate-slideInLeft' : 'opacity-0'
                }`}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-950">
                  South Dives
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                 
                Ideal for adventurous and experienced divers, the Deep South offers one 
                of the best routes in the Maldives for encountering a diverse range of 
                pelagic marine life. This itinerary is a top choice for deep-sea enthusiasts 
                and has become a favorite among our returning guests. If you&apos;re seeking 
                thrilling drift dives, encounters with tiger sharks, hammerheads, and other 
                ocean giants, the Deep South is an experience like no other.

                </p>
              </div>
            </div>

            {/* Image Half (Right Side) */}
            <div ref={imageRef} className="relative md:w-1/2 h-64 md:h-auto">
              <img
                src={dummyImages[currentImageIndex]}
                alt="South Dives"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-75 ${
                  imageVisible ? 'opacity-100 animate-slideInRight' : 'opacity-0'
                }`}
                style={{ clipPath: 'polygon(0 0%, 100% 0, 100% 100%, 17% 100%)' }}
              />
            </div>
          </div>

          {/* Custom Keyframes */}
          <style jsx>{`
            @keyframes slideInLeft {
              0% {
                transform: translateX(-100%);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
            .animate-slideInLeft {
              animation: slideInLeft 1s forwards;
            }
            @keyframes slideInRight {
              0% {
                transform: translateX(100%);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
            .animate-slideInRight {
              animation: slideInRight 1s forwards;
            }
          `}</style>
        </section>
      </main>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9607795512"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        style={{ zIndex: 1000 }}
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Footer */}
      <Footer />
    </div>
  );
}
