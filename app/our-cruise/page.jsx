'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa';


// ImageTransition component for fading between images
function ImageTransition({ images, intervalTime = 5000, transitionTime = 500 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade-out effect
      setFade(false);
      setTimeout(() => {
        // Switch to the next image
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, transitionTime);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images, intervalTime, transitionTime]);

  const goToNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, transitionTime);
  };

  const goToPrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setFade(true);
    }, transitionTime);
  };

  return (
    <div className="relative overflow-hidden">
       <Head>
        <title>Cruise Experience in the Maldives | Your Ideal Dive Getaway</title>
        <meta
          name="description"
          content="Explore the deep south of the Maldives, including Huvadhoo, Fuvahmulah, and Addu Atoll. Discover world-class dive sites, vibrant marine life, and thrilling encounters with apex predators. Book your adventure today!"
        />
        <meta name="keywords" content="fuvahmulah dive, maldives dive, diving in fuvahmulah, maldives diving, underwater adventure, coral reefs, marine life, Cruise Republic" />
        <meta property="og:title" content="Cruise Experience in the Maldives | Your Ideal Dive Getaway" />
        <meta property="og:description" content="Step aboard our fully equipped dive boat with comfortable cabins, delicious meals, and experienced guides. Explore the Maldives' rich marine life." />
        <meta property="og:image" content="http://www.cruiserepublicmaldives.com/boat-top.jpg" />
        <meta property="og:url" content="http://www.cruiserepublicmaldives.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cruise Experience in the Maldives | Your Ideal Dive Getaway" />
        <meta name="twitter:description" content="Step aboard our fully equipped dive boat with comfortable cabins, delicious meals, and experienced guides. Explore the Maldives' rich marine life." />
        <meta name="twitter:image" content="http://www.cruiserepublicmaldives.com/boat-top.jpg" />
      </Head>
      <div className="relative">
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt="Cruise Ship"
          className={`w-full h-[600px] object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
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
              setFade(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setFade(true);
              }, transitionTime);
            }}
            className={`w-3 h-3 border border-black ${currentIndex === index ? 'bg-black' : 'bg-white'}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function CruisePage() {
  // Array of images for the transition slideshow
  const images = ['boat-top.jpg', 'cr.PNG', 'cr_2.PNG', 'cr_3.PNG', 'cr_4.PNG'];

  return (
    <div className="bg-white text-black">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('sunset.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl sm:text-6xl text-white font-bold mb-6 tracking-tight">Welcome Aboard</h1>
          <p className="text-xl text-white mb-10 max-w-2xl">
            Embark on a luxurious journey through the pristine waters of the Maldives.
          </p>
          <Link 
            href="/book" 
            className="bg-transparent hover:bg-white hover:text-black text-white border-2 border-white px-8 py-3 rounded-none transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* About the Cruise Section */}
      <section className="py-20 px-4 bg-white border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Cruise Experience</h2>
          <p className="mb-12 text-lg leading-relaxed max-w-3xl mx-auto text-center">
            Enjoy world-class service, gourmet dining, and breathtaking views on our cruise.
            Our journey is designed to provide you with an unforgettable experience as you sail
            through crystal-clear waters and scenic horizons of the Maldives.
          </p>
          {/* Transitioning Image Component */}
          <ImageTransition images={images} />
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
              { src: "img-6.JPG", alt: "Maldives scenery" }
            ].map((img, index) => (
              <div key={index} className="relative group overflow-hidden">
                <img
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-black pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Booking Section */}
      <section className="py-20 bg-gray-50 text-black text-center border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Sail?</h2>
          <p className="mb-10 text-lg max-w-2xl mx-auto">
            Book your dream cruise now and experience the luxury and adventure that awaits you in the stunning waters of the Maldives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book" 
              className="bg-black text-white hover:bg-white hover:text-black border-2 border-black px-8 py-3 rounded-none transition-all duration-300"
            >
              Book Now
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-black hover:bg-black hover:text-white border-2 border-black px-8 py-3 rounded-none transition-all duration-300"
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
  );
}

export default CruisePage;
