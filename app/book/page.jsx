'use client'
import { supabase } from '@/utils/supabase';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function BookingPage() {
  // State for the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  
  // States for form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  
  // State for submission feedback
  const [feedback, setFeedback] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert the data into the 'info' table in Supabase
    const { data, error } = await supabase
      .from('info')
      .insert({
        name,
        phone,
        email,
        special_req: specialRequest,
        status: 'Pending',
      });

    if (error) {
      console.error("Error inserting booking:", error);
      setFeedback("There was an error submitting your booking.");
    } else {
      console.log("Booking submitted:", data);
      setFeedback("Booking submitted successfully!");
      // Optionally, clear the form fields after submission
      setName("");
      setPhone("");
      setEmail("");
      setSpecialRequest("");
    }
  };

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
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black focus:outline-none"
              >
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

      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-96"
        style={{ backgroundImage: 'url(boat-sunset.jpg)' }}
      ></div>

      {/* Booking Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-6">Book Your Dive</h1>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below to book your dive. We look forward to creating an unforgettable experience for you!
          </p>
          {feedback && (
            <p className="text-center mb-4 text-green-600">
              {feedback}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Special Requirements */}
            <div>
              <label htmlFor="specialRequest" className="block font-semibold mb-2">
                Special Requirements
              </label>
              <textarea
                id="specialRequest"
                name="specialRequest"
                rows="4"
                placeholder="Let us know if you have any special requests"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-950 text-white font-bold py-3 px-6 rounded-lg"
              >
                Submit Booking
              </button>
            </div>
          </form>
        </div>
      </div>

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
      <footer className="bg-black text-white py-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2025 Cruise Republic. All rights reserved.</p>
          <div className="mt-4">
            <p className="text-sm">
              Everfront PVT Ltd<br />
              Zindha, Funaad, Husnuheenamagu<br />
              Fuvahmulah City
            </p>
          </div>
          <div className="flex justify-center mt-2 gap-4 flex-wrap">
            <a href="#" className="hover:underline flex items-center gap-2">
              <FaFacebook /> Facebook
            </a>
            <a href="#" className="hover:underline flex items-center gap-2">
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BookingPage;
