import Link from 'next/link';
import React from 'react';

function BookingPage() {
  return (
    <div>
      {/* Header */}
      <header className="bg-slate-950 text-white shadow-black/80 sticky top-0 z-50">
        <nav className="flex justify-between items-center py-5 px-4">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <span role="img" aria-label="cruise">🚢</span> Cruise Republic
          </Link>
          <div className="hidden md:flex gap-5">
            <Link href="#" className="hover:underline flex items-center gap-2">South Dives</Link>
            <Link href="#" className="hover:underline">About Us</Link>
          </div>
          <Link
            className="bg-white p-4 text-blue-950 font-bold hover:bg-gray-200 flex items-center gap-2 rounded-xl"
            href="/book"
          >
            <span role="img" aria-label="book">📖</span> Book Now
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-96"
        style={{ backgroundImage: 'url(boat.jpg)' }}
      ></div>

      {/* Booking Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-6">Book Your Dive</h1>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below to book your dive. We look forward to creating an unforgettable experience for you!
          </p>

          <form action="#" className="space-y-6">
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
                required
              />
            </div>

            {/* Type of Dive */}
            {/* <div>
              <label htmlFor="diveType" className="block font-semibold mb-2">
                Type of Dive
              </label>
              <select
                id="diveType"
                name="diveType"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                defaultValue="" // Use defaultValue instead of selected
                required
              >
                <option value="" disabled>
                  Select a dive type
                </option>
                <option value="reefDive">Reef Dive</option>
                <option value="wreckDive">Wreck Dive</option>
                <option value="nightDive">Night Dive</option>
                <option value="driftDive">Drift Dive</option>
              </select>
            </div> */}

            {/* Special Requirements */}
            <div>
              <label htmlFor="specialRequirements" className="block font-semibold mb-2">
                Special Requirements
              </label>
              <textarea
                id="specialRequirements"
                name="specialRequirements"
                rows="4"
                placeholder="Let us know if you have any special requests"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
    </div>
  );
}

export default BookingPage;
