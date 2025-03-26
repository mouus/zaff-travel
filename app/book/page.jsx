'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
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
      <Navbar />
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
              <label htmlFor="name" className=" text-black block font-semibold mb-2">
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
              <label htmlFor="phone" className="block text-black font-semibold mb-2">
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
              <label htmlFor="email" className="block text-black font-semibold mb-2">
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
              <label htmlFor="specialRequest" className="block text-black font-semibold mb-2">
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
                className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg"
              >
                Submit Booking
              </button>
            </div>
          </form>
        </div>
      </div>

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
    </div>
  );
}

export default BookingPage;
